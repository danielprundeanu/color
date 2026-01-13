// EKO Token Sync Plugin - Main Code
// Handles both IMPORT (Git → Figma) and EXPORT (Figma → Git)

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type TokenType = 'color' | 'dimension' | 'typography' | 'spacing' | 'borderRadius' | 'borderWidth' | 'boxShadow' | 'sizing';

interface Token {
  $type: TokenType;
  $value: string | number | object;
  $description?: string;
}

interface TokenCollection {
  [key: string]: Token | TokenCollection;
}

interface VariableMap {
  [variableId: string]: {
    tokenPath: string;
    tokenName: string;
    collectionName: string;
    modeName: string;
  };
}

interface ComponentTokenUsage {
  componentName: string;
  tokens: {
    [property: string]: {
      variableName: string;
      tokenPath: string;
      resolvedValue: any;
    };
  };
}

// ============================================================================
// GLOBAL STATE
// ============================================================================

let variableMap: VariableMap = {};
let importedCollections: Map<string, VariableCollection> = new Map();

// ============================================================================
// MESSAGE HANDLERS
// ============================================================================

figma.showUI(__html__, { 
  width: 400, 
  height: 600,
  themeColors: true 
});

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'load-settings':
      const gitUrl = await figma.clientStorage.getAsync('gitUrl') || '';
      const gitBranch = await figma.clientStorage.getAsync('gitBranch') || 'stake';
      const githubToken = await figma.clientStorage.getAsync('githubToken') || '';
      const tokenSource = await figma.clientStorage.getAsync('tokenSource') || 'tokens-light';
      figma.ui.postMessage({ 
        type: 'settings-loaded', 
        settings: { gitUrl, gitBranch, githubToken, tokenSource } 
      });
      break;
    
    case 'save-setting':
      await figma.clientStorage.setAsync(msg.key, msg.value);
      break;
    
    case 'create-variables':
      await createVariablesFromSelection(msg.tokens, msg.selectedCollections, msg.updateStyles);
      break;
    
    case 'load-tokens-from-git':
      await loadTokensFromGit(msg.gitUrl, msg.gitBranch, msg.githubToken, msg.tokenSource);
      break;
    
    case 'import-tokens':
      console.log('Received import-tokens message');
      console.log('Token keys:', Object.keys(msg.tokens));
      console.log('First 5 keys:', Object.keys(msg.tokens).slice(0, 5));
      
      await importTokens(msg.tokens, msg.options);
      break;
    
    case 'export-tokens':
      await exportTokens(msg.options);
      break;
    
    case 'export-selection':
      await exportSelectionTokens();
      break;
    
    case 'update-component-tokens':
      await updateComponentTokens();
      break;
    
    case 'analyze-selection':
      await analyzeSelection();
      break;
    
    case 'compare-tokens':
      await compareTokens(msg.gitTokens);
      break;
    
    case 'generate-brand':
      await generateBrandTokens(msg.brandConfig);
      break;
    
    case 'close':
      figma.closePlugin();
      break;
  }
};

// ============================================================================
// 🟩 LOAD TOKENS FROM GIT
// ============================================================================

async function loadTokensFromGit(gitUrl: string, gitBranch: string, githubToken: string, tokenSource: string) {
  try {
    figma.ui.postMessage({ type: 'import-progress', step: 'git', progress: 10 });
    
    // Extract repo info from URL (e.g., https://github.com/user/repo -> user/repo)
    const repoMatch = gitUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);
    if (!repoMatch) {
      throw new Error('Invalid GitHub URL format');
    }
    const repoPath = repoMatch[1].replace(/\.git$/, '');
    
    figma.ui.postMessage({ type: 'import-progress', step: 'git', progress: 20 });
    
    // GitHub API base URL
    const apiBase = `https://api.github.com/repos/${repoPath}/contents/${tokenSource}`;
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json'
    };
    
    if (githubToken) {
      headers['Authorization'] = `token ${githubToken}`;
    }
    
    // Function to recursively fetch all JSON files from a directory
    async function fetchDirectory(path: string): Promise<any> {
      const url = `https://api.github.com/repos/${repoPath}/contents/${path}?ref=${gitBranch}`;
      const response = await fetch(url, { headers });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
      }
      
      const items = await response.json() as any[];
      const result: any = {};
      
      for (const item of items) {
        if (item.type === 'file' && item.name.endsWith('.json')) {
          // Fetch file content using GitHub API (not download_url to avoid CORS)
          // The API returns base64-encoded content that we need to decode
          const fileContentResponse = await fetch(item.url, { headers });
          if (fileContentResponse.ok) {
            const fileData = await fileContentResponse.json() as any;
            // Decode base64 content
            const decodedContent = atob(fileData.content.replace(/\n/g, ''));
            const content = JSON.parse(decodedContent);
            const fileName = item.name.replace('.json', '');
            result[fileName] = content;
          } else {
            console.warn(`Failed to fetch ${item.name}: ${fileContentResponse.status} ${fileContentResponse.statusText}`);
          }
        } else if (item.type === 'dir' && item.name !== '.DS_Store') {
          // Recursively fetch subdirectory
          const subDir = await fetchDirectory(item.path);
          result[item.name] = subDir;
        }
      }
      
      return result;
    }
    
    figma.ui.postMessage({ type: 'import-progress', step: 'git', progress: 40 });
    
    // Fetch the entire token structure
    const tokenStructure = await fetchDirectory(tokenSource);
    
    figma.ui.postMessage({ type: 'import-progress', step: 'git', progress: 70 });
    
    // Now we need to flatten this structure into the Token Studio format
    // The structure should have $themes, $metadata, and token sets
    const combinedTokens: any = {};
    
    // Extract special files at root level
    if (tokenStructure['$themes']) {
      combinedTokens['$themes'] = tokenStructure['$themes'];
    }
    if (tokenStructure['$metadata']) {
      combinedTokens['$metadata'] = tokenStructure['$metadata'];
    }
    if (tokenStructure['-dls']) {
      combinedTokens['-dls'] = tokenStructure['-dls'];
    }
    
    // Flatten directory structure into token paths
    function flattenStructure(obj: any, prefix: string = '') {
      for (const key in obj) {
        if (key === '$themes' || key === '$metadata' || key === '-dls') {
          continue; // Already handled
        }
        
        const value = obj[key];
        const path = prefix ? `${prefix}/${key}` : key;
        
        if (typeof value === 'object' && !Array.isArray(value)) {
          // Check if this is a token set or a directory
          const hasTokens = Object.values(value).some((v: any) => 
            v && typeof v === 'object' && ('$value' in v || '$type' in v)
          );
          
          if (hasTokens || Object.keys(value).length === 0) {
            // This is a token set, add it directly
            combinedTokens[path] = value;
          } else {
            // This is a directory, recurse
            flattenStructure(value, path);
          }
        }
      }
    }
    
    flattenStructure(tokenStructure);
    
    figma.ui.postMessage({ type: 'import-progress', step: 'git', progress: 90 });
    
    // Send the combined tokens back to UI
    figma.ui.postMessage({ 
      type: 'tokens-loaded', 
      tokens: combinedTokens 
    });
    
    figma.ui.postMessage({ type: 'import-progress', step: 'git', progress: 100 });
    
  } catch (error) {
    figma.ui.postMessage({ 
      type: 'import-error', 
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

// ============================================================================
// 🟩 CREATE VARIABLES FROM SELECTION
// ============================================================================

async function createVariablesFromSelection(tokens: any, selectedCollections: any[], updateStyles: boolean) {
  figma.ui.postMessage({ type: 'import-started' });
  
  try {
    console.log('Creating variables for selected collections:', selectedCollections);
    
    const themes = tokens.$themes || [];
    let progress = 0;
    const total = selectedCollections.length;
    
    // Group selected collections
    const collectionMap = new Map<string, any[]>();
    
    for (const selected of selectedCollections) {
      if (!collectionMap.has(selected.collection)) {
        collectionMap.set(selected.collection, []);
      }
      
      // Find the theme data
      const theme = themes.find((t: any) => 
        (t.group || 'default') === selected.collection && t.name === selected.mode
      );
      
      if (theme) {
        collectionMap.get(selected.collection)!.push(theme);
      }
    }
    
    // Process each collection
    for (const [collectionName, themeModes] of collectionMap) {
      figma.ui.postMessage({ 
        type: 'import-progress', 
        step: `${collectionName} collection`, 
        progress: Math.round((progress / total) * 100) 
      });
      
      // Find or create collection
      const firstTheme = themeModes[0];
      let collection: VariableCollection;
      
      if (firstTheme.$figmaCollectionId) {
        const existingCollections = await figma.variables.getLocalVariableCollectionsAsync();
        const existing = existingCollections.find((c: VariableCollection) => c.id === firstTheme.$figmaCollectionId);
        
        if (existing) {
          collection = existing;
          console.log(`Using existing collection: ${collection.name}`);
        } else {
          collection = await findOrCreateCollection(collectionName, `Tokens for ${collectionName}`);
        }
      } else {
        collection = await findOrCreateCollection(collectionName, `Tokens for ${collectionName}`);
      }
      
      // Create/update modes
      for (const theme of themeModes) {
        const modeName = theme.name;
        let mode = collection.modes.find((m: any) => m.name === modeName);
        
        if (!mode) {
          const modeId = collection.addMode(modeName);
          mode = collection.modes.find((m: any) => m.modeId === modeId);
          console.log(`Created mode: ${modeName}`);
        }
        
        if (!mode) {
          console.log(`Failed to find/create mode: ${modeName}`);
          continue;
        }
        
        console.log(`Processing mode: ${modeName} in collection ${collectionName}`);
        
        // Import tokens for this theme/mode
        const selectedSets = theme.selectedTokenSets || {};
        console.log(`Selected token sets:`, selectedSets);
        
        let tokenCount = 0;
        
        for (const [setPath, status] of Object.entries(selectedSets)) {
          if (status !== 'enabled') continue;
          
          const setTokens = tokens[setPath];
          if (!setTokens) {
            console.log(`Token set not found: ${setPath}`);
            continue;
          }
          
          console.log(`Processing token set: ${setPath}`);
          console.log(`Token set keys:`, Object.keys(setTokens).slice(0, 10));
          console.log(`First token structure:`, JSON.stringify(setTokens[Object.keys(setTokens)[0]], null, 2).slice(0, 200));
          const flatTokens = flattenTokens(setTokens);
          const flatTokenKeys = Object.keys(flatTokens);
          console.log(`Flat tokens count: ${flatTokenKeys.length}`);
          console.log(`First 5 token paths:`, flatTokenKeys.slice(0, 5));
          
          let setTokenCount = 0;
          for (const [tokenPath, token] of Object.entries(flatTokens)) {
            try {
              console.log(`Importing token: ${tokenPath}, $value: ${JSON.stringify(token.$value)}, $type: ${token.$type}`);
              const fullPath = `${setPath.split('/').pop()}/${tokenPath}`;
              const resolveType = (typeof token.$value === 'string' && token.$value.startsWith('{')) ? 'ALIAS' : 'VALUE';
              const result = await importVariable(collection, fullPath, token, resolveType, mode.name);
              console.log(`Import result for ${tokenPath}:`, result ? 'SUCCESS' : 'FAILED');
              tokenCount++;
              setTokenCount++;
              
              if (tokenCount % 100 === 0) {
                console.log(`Imported ${tokenCount} tokens so far...`);
              }
            } catch (error) {
              console.error(`Error importing token ${tokenPath}:`, error);
            }
          }
          
          console.log(`Finished processing token set: ${setPath}, imported ${setTokenCount} tokens from this set`);
          
          console.log(`Finished processing token set: ${setPath}, imported ${setTokenCount} tokens from this set`);
        }
        
        console.log(`Completed mode ${modeName}: ${tokenCount} tokens imported`);
        progress++;
      }
      
      importedCollections.set(collectionName, collection);
    }
    
    // Update styles if requested
    if (updateStyles) {
      figma.ui.postMessage({ type: 'import-progress', step: 'styles', progress: 90 });
      await updateColorStyles();
      await updateTextStyles();
      await updateEffectStyles();
    }
    
    figma.ui.postMessage({ 
      type: 'import-complete', 
      stats: {
        variablesCreated: Object.keys(variableMap).length,
        collectionsCreated: importedCollections.size
      }
    });
    
  } catch (error) {
    figma.ui.postMessage({ 
      type: 'import-error', 
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

// ============================================================================
// 🟩 IMPORT: Git → Figma
// ============================================================================

async function importTokens(tokens: any, options: any) {
  figma.ui.postMessage({ type: 'import-started' });
  
  try {
    console.log('importTokens called with token keys:', Object.keys(tokens).slice(0, 10));
    
    // Extract $themes if present
    const themes = tokens.$themes || [];
    console.log('Found themes:', themes.map((t: any) => ({ name: t.name, group: t.group })));
    
    // Parse token structure and organize by theme
    const { primitives, semantic, components } = parseTokenStructure(tokens);
    
    console.log('After parsing:', {
      primitives: primitives ? Object.keys(primitives).slice(0, 3) : null,
      semantic: semantic ? Object.keys(semantic).slice(0, 3) : null,
      components: components ? Object.keys(components).slice(0, 3) : null
    });
    
    // 1. Import based on $themes structure
    if (themes.length > 0) {
      await importFromThemes(tokens, themes, options);
    } else {
      // Fallback to legacy import
      figma.ui.postMessage({ type: 'import-progress', step: 'primitives', progress: 0 });
      await importPrimitives(primitives, options);
      
      figma.ui.postMessage({ type: 'import-progress', step: 'semantic', progress: 33 });
      await importSemantic(semantic, options);
      
      figma.ui.postMessage({ type: 'import-progress', step: 'components', progress: 66 });
      await importComponents(components, options);
    }
    
    // 2. Update Styles
    if (options.updateStyles) {
      figma.ui.postMessage({ type: 'import-progress', step: 'styles', progress: 90 });
      await updateColorStyles();
      await updateTextStyles();
      await updateEffectStyles();
    }
    
    figma.ui.postMessage({ 
      type: 'import-complete', 
      stats: {
        variablesCreated: Object.keys(variableMap).length,
        collectionsCreated: importedCollections.size
      }
    });
    
  } catch (error) {
    figma.ui.postMessage({ 
      type: 'import-error', 
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

// ============================================================================
// PARSE TOKEN STRUCTURE
// ============================================================================

function parseTokenStructure(tokens: any) {
  const primitives: TokenCollection = {};
  const semantic: TokenCollection = {};
  const components: TokenCollection = {};
  
  // Check if tokens is already structured (has top-level keys)
  if (tokens.primitives || tokens.semantic || tokens.components || tokens.component) {
    return {
      primitives: tokens.primitives || {},
      semantic: tokens.semantic || {},
      components: tokens.components || tokens.component || {}
    };
  }
  
  // Check for tokens-light/tokens-dark structure
  const themeKey = Object.keys(tokens).find(k => k.startsWith('tokens-'));
  if (themeKey) {
    const themeData = tokens[themeKey];
    return {
      primitives: themeData.primitives || {},
      semantic: themeData.semantic || {},
      components: themeData.component || themeData.components || {}
    };
  }
  
  // Token Studio format: flat structure with paths as keys
  // e.g. "primitives/base", "semantic/color", "component/btn/color/primary"
  for (const [path, content] of Object.entries(tokens)) {
    if (typeof content !== 'object' || !content) continue;
    
    // Skip metadata keys
    if (path === '$themes' || path === '$metadata') continue;
    
    const parts = path.split('/');
    const category = parts[0]; // "primitives", "semantic", "component"
    const subcategory = parts.slice(1).join('/'); // "base", "color", "btn/color/primary"
    
    if (category === 'primitives' || category === 'primitive') {
      // Create nested structure: primitives[subcategory] = content
      if (subcategory) {
        primitives[subcategory] = content as TokenCollection;
      } else {
        // If no subcategory, merge directly
        Object.assign(primitives, content);
      }
    } else if (category === 'semantic') {
      if (subcategory) {
        semantic[subcategory] = content as TokenCollection;
      } else {
        Object.assign(semantic, content);
      }
    } else if (category === 'component') {
      if (subcategory) {
        components[subcategory] = content as TokenCollection;
      } else {
        Object.assign(components, content);
      }
    }
  }
  
  console.log('Token Studio flat format detected, parsed:', {
    primitivesKeys: Object.keys(primitives),
    semanticKeys: Object.keys(semantic),
    componentsKeys: Object.keys(components)
  });
  
  return { primitives, semantic, components };
}

// ============================================================================
// IMPORT FROM $THEMES
// ============================================================================

async function importFromThemes(tokens: any, themes: any[], options: any) {
  // Group themes by collection (group property)
  const collectionGroups = new Map<string, any[]>();
  
  for (const theme of themes) {
    const group = theme.group || 'default';
    if (!collectionGroups.has(group)) {
      collectionGroups.set(group, []);
    }
    collectionGroups.get(group)!.push(theme);
  }
  
  let progress = 0;
  const totalGroups = collectionGroups.size;
  
  // Process each collection group
  for (const [group, groupThemes] of collectionGroups) {
    figma.ui.postMessage({ 
      type: 'import-progress', 
      step: `${group} collection`, 
      progress: Math.round((progress / totalGroups) * 100) 
    });
    
    // Find or create collection by $figmaCollectionId if present
    const firstTheme = groupThemes[0];
    let collection: VariableCollection;
    
    if (firstTheme.$figmaCollectionId) {
      // Try to find existing collection by ID
      const existingCollections = await figma.variables.getLocalVariableCollectionsAsync();
      const existing = existingCollections.find(c => c.id === firstTheme.$figmaCollectionId);
      
      if (existing) {
        collection = existing;
        console.log(`Found existing collection: ${collection.name} (${collection.id})`);
      } else {
        collection = await findOrCreateCollection(group, `Tokens for ${group}`);
      }
    } else {
      collection = await findOrCreateCollection(group, `Tokens for ${group}`);
    }
    
    // Create/update modes for each theme in this group
    for (const theme of groupThemes) {
      const modeName = theme.name;
      let mode = collection.modes.find(m => m.name === modeName);
      
      if (!mode) {
        // Create new mode - addMode returns modeId as string
        const modeId = collection.addMode(modeName);
        mode = collection.modes.find(m => m.modeId === modeId);
        console.log(`Created mode: ${modeName} in collection ${collection.name}`);
      }
      
      if (!mode) continue;
      
      // Import tokens for this theme
      const selectedSets = theme.selectedTokenSets || {};
      
      for (const [setPath, status] of Object.entries(selectedSets)) {
        if (status !== 'enabled') continue;
        
        const setTokens = tokens[setPath];
        if (!setTokens) continue;
        
        const flatTokens = flattenTokens(setTokens);
        
        for (const [tokenPath, token] of Object.entries(flatTokens)) {
          const fullPath = `${setPath.split('/').pop()}/${tokenPath}`;
          // Determine if this is a value or alias based on token content
          const resolveType = (typeof token.$value === 'string' && token.$value.startsWith('{')) ? 'ALIAS' : 'VALUE';
          await importVariable(collection, fullPath, token, resolveType, mode.name);
        }
      }
    }
    
    importedCollections.set(group, collection);
    progress++;
  }
}

// ============================================================================
// IMPORT PRIMITIVES
// ============================================================================

async function importPrimitives(primitives: TokenCollection, options: any) {
  // Create or get Primitives collection
  let collection = await findOrCreateCollection('Primitives', 'Primitive tokens');
  
  // Flatten token structure
  const flatTokens = flattenTokens(primitives);
  
  // Import each token
  for (const [tokenPath, token] of Object.entries(flatTokens)) {
    await importVariable(collection, tokenPath, token, 'VALUE');
  }
  
  importedCollections.set('Primitives', collection);
}

// ============================================================================
// IMPORT SEMANTIC
// ============================================================================

async function importSemantic(semantic: TokenCollection, options: any) {
  // Create collections per theme
  const themes = options.themes || ['light', 'dark'];
  
  for (const theme of themes) {
    const collectionName = `Semantic - ${theme}`;
    let collection = await findOrCreateCollection(collectionName, `Semantic tokens for ${theme} theme`);
    
    // Create modes if needed
    const mode = findOrCreateMode(collection, theme);
    
    // Flatten and import
    const flatTokens = flattenTokens(semantic);
    
    for (const [tokenPath, token] of Object.entries(flatTokens)) {
      await importVariable(collection, tokenPath, token, 'ALIAS', mode);
    }
    
    importedCollections.set(collectionName, collection);
  }
}

// ============================================================================
// IMPORT COMPONENTS
// ============================================================================

async function importComponents(components: TokenCollection, options: any) {
  // Group by component
  const componentGroups = groupByComponent(components);
  
  for (const [componentName, tokens] of Object.entries(componentGroups)) {
    const collectionName = `Component - ${componentName}`;
    let collection = await findOrCreateCollection(collectionName, `Tokens for ${componentName} component`);
    
    // Create modes for variants
    const variants = extractVariants(tokens);
    for (const variant of variants) {
      findOrCreateMode(collection, variant);
    }
    
    // Import tokens
    const flatTokens = flattenTokens(tokens);
    for (const [tokenPath, token] of Object.entries(flatTokens)) {
      await importVariable(collection, tokenPath, token, 'ALIAS');
    }
    
    importedCollections.set(collectionName, collection);
  }
}

// ============================================================================
// IMPORT VARIABLE (Core function)
// ============================================================================

async function importVariable(
  collection: VariableCollection,
  tokenPath: string,
  token: Token,
  resolveType: 'VALUE' | 'ALIAS',
  mode?: string
) {
  const variableName = tokenPath.split('.').pop() || tokenPath;
  const groupPath = tokenPath.split('.').slice(0, -1).join('/');
  
  // Find or create variable
  let variable = findVariableByName(collection, tokenPath);
  
  if (!variable) {
    // Determine variable type from token type
    const variableType = mapTokenTypeToVariableType(token.$type);
    variable = figma.variables.createVariable(variableName, collection, variableType);
    
    // Set scope
    if (groupPath) {
      variable.scopes = getVariableScopes(token.$type);
    }
  }
  
  // Set value
  const modeId = mode ? collection.modes.find(m => m.name === mode)?.modeId : collection.defaultModeId;
  
  if (!modeId) return variable;
  
  if (resolveType === 'VALUE') {
    // Direct value
    const figmaValue = convertTokenValueToFigma(token.$value, token.$type);
    variable.setValueForMode(modeId, figmaValue);
  } else {
    // Alias reference
    const aliasVariable = resolveAlias(token.$value as string);
    if (aliasVariable) {
      variable.setValueForMode(modeId, {
        type: 'VARIABLE_ALIAS',
        id: aliasVariable.id
      });
    }
  }
  
  // Store in map
  variableMap[variable.id] = {
    tokenPath,
    tokenName: variableName,
    collectionName: collection.name,
    modeName: mode || 'default'
  };
  
  return variable;
}

// ============================================================================
// 🟥 EXPORT: Figma → Git
// ============================================================================

async function exportTokens(options: any) {
  figma.ui.postMessage({ type: 'export-started' });
  
  try {
    const exportData: any = {
      primitives: {},
      semantic: {},
      components: {}
    };
    
    // Export all collections
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    
    for (const collection of collections) {
      const tokens = await exportCollection(collection);
      
      // Categorize by collection name
      if (collection.name.includes('Primitive')) {
        exportData.primitives[collection.name] = tokens;
      } else if (collection.name.includes('Semantic')) {
        exportData.semantic[collection.name] = tokens;
      } else if (collection.name.includes('Component')) {
        exportData.components[collection.name] = tokens;
      }
    }
    
    // Convert to Token Studio format
    const tokenStudioFormat = convertToTokenStudioFormat(exportData);
    
    figma.ui.postMessage({ 
      type: 'export-complete', 
      data: tokenStudioFormat 
    });
    
  } catch (error) {
    figma.ui.postMessage({ 
      type: 'export-error', 
      error: error instanceof Error ? error.message : String(error)
    });
  }
}

// ============================================================================
// EXPORT COLLECTION
// ============================================================================

async function exportCollection(collection: VariableCollection) {
  const tokens: TokenCollection = {};
  
  // Get all variables in collection
  const variables = collection.variableIds.map(id => figma.variables.getVariableById(id));
  
  for (const variable of variables) {
    if (!variable) continue;
    
    // Build token path
    const tokenPath = buildTokenPath(variable, collection);
    
    // Get value for each mode
    for (const mode of collection.modes) {
      const value = variable.valuesByMode[mode.modeId];
      const token = convertFigmaValueToToken(value, variable.resolvedType);
      
      // Store in structure
      setNestedValue(tokens, tokenPath, token);
    }
  }
  
  return tokens;
}

// ============================================================================
// 📌 EXPORT SELECTION (Selected component → JSON)
// ============================================================================

async function exportSelectionTokens() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({ 
      type: 'export-error', 
      error: 'No component selected' 
    });
    return;
  }
  
  const usageData: ComponentTokenUsage[] = [];
  
  for (const node of selection) {
    const usage = await analyzeNodeTokenUsage(node);
    usageData.push(usage);
  }
  
  figma.ui.postMessage({ 
    type: 'export-selection-complete', 
    data: usageData 
  });
}

// ============================================================================
// 🔄 UPDATE COMPONENT TOKENS (Figma → Git reverse sync)
// ============================================================================

async function updateComponentTokens() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({ 
      type: 'update-error', 
      error: 'No component selected. Select the component instance you modified.' 
    });
    return;
  }
  
  const componentTokens: any = {};
  
  for (const node of selection) {
    const componentName = node.name;
    const tokens = await extractBoundVariablesToTokens(node);
    
    if (Object.keys(tokens).length > 0) {
      componentTokens[componentName] = tokens;
    }
  }
  
  if (Object.keys(componentTokens).length === 0) {
    figma.ui.postMessage({ 
      type: 'update-error', 
      error: 'No bound variables found on selected components.' 
    });
    return;
  }
  
  // Convert to Token Studio format
  const output = {
    component: componentTokens
  };
  
  figma.ui.postMessage({ 
    type: 'update-complete', 
    data: output 
  });
}

// ============================================================================
// EXTRACT BOUND VARIABLES TO TOKENS
// ============================================================================

async function extractBoundVariablesToTokens(node: SceneNode): Promise<TokenCollection> {
  const tokens: TokenCollection = {};
  
  // Check fills (background, colors)
  if ('fills' in node && Array.isArray(node.fills)) {
    for (const fill of node.fills) {
      if (fill.type === 'SOLID' && fill.boundVariables?.color) {
        const variable = figma.variables.getVariableById(fill.boundVariables.color.id);
        if (variable) {
          const tokenPath = buildVariableReference(variable);
          tokens['fill'] = {
            $type: 'color',
            $value: tokenPath
          };
        }
      }
    }
  }
  
  // Check strokes (border colors)
  if ('strokes' in node && Array.isArray(node.strokes)) {
    for (const stroke of node.strokes) {
      if (stroke.type === 'SOLID' && stroke.boundVariables?.color) {
        const variable = figma.variables.getVariableById(stroke.boundVariables.color.id);
        if (variable) {
          const tokenPath = buildVariableReference(variable);
          tokens['border'] = {
            $type: 'color',
            $value: tokenPath
          };
        }
      }
    }
  }
  
  // Check corner radius
  if ('cornerRadius' in node && typeof node.cornerRadius !== 'number') {
    const boundVar = (node as any).boundVariables?.cornerRadius;
    if (boundVar) {
      const variable = figma.variables.getVariableById(boundVar.id);
      if (variable) {
        const tokenPath = buildVariableReference(variable);
        tokens['borderRadius'] = {
          $type: 'dimension',
          $value: tokenPath
        };
      }
    }
  }
  
  // Check padding
  if ('paddingLeft' in node) {
    const boundVar = (node as any).boundVariables?.paddingLeft;
    if (boundVar) {
      const variable = figma.variables.getVariableById(boundVar.id);
      if (variable) {
        const tokenPath = buildVariableReference(variable);
        tokens['padding'] = {
          $type: 'dimension',
          $value: tokenPath
        };
      }
    }
  }
  
  // Check width/height
  if ('width' in node && typeof node.width !== 'number') {
    const boundVar = (node as any).boundVariables?.width;
    if (boundVar) {
      const variable = figma.variables.getVariableById(boundVar.id);
      if (variable) {
        const tokenPath = buildVariableReference(variable);
        tokens['width'] = {
          $type: 'dimension',
          $value: tokenPath
        };
      }
    }
  }
  
  // Recursively check children
  if ('children' in node) {
    for (const child of node.children) {
      const childTokens = await extractBoundVariablesToTokens(child);
      // Merge with parent using child name as key
      if (Object.keys(childTokens).length > 0) {
        tokens[child.name] = childTokens;
      }
    }
  }
  
  return tokens;
}

// ============================================================================
// BUILD VARIABLE REFERENCE (variable → {token.path})
// ============================================================================

function buildVariableReference(variable: Variable): string {
  // Convert variable name to token reference format
  // Example: "primary/fill/default" → "{primary.fill.default}"
  const name = variable.name.replace(/\//g, '.');
  return `{${name}}`;
}

// ============================================================================
// ANALYZE NODE TOKEN USAGE
// ============================================================================

async function analyzeNodeTokenUsage(node: SceneNode): Promise<ComponentTokenUsage> {
  const usage: ComponentTokenUsage = {
    componentName: node.name,
    tokens: {}
  };
  
  // Check fills
  if ('fills' in node && Array.isArray(node.fills)) {
    for (const fill of node.fills) {
      if (fill.type === 'SOLID' && fill.boundVariables?.color) {
        const varId = fill.boundVariables.color.id;
        const varInfo = variableMap[varId];
        if (varInfo) {
          usage.tokens['fill'] = {
            variableName: varInfo.tokenName,
            tokenPath: varInfo.tokenPath,
            resolvedValue: fill.color
          };
        }
      }
    }
  }
  
  // Check strokes
  if ('strokes' in node && Array.isArray(node.strokes)) {
    for (const stroke of node.strokes) {
      if (stroke.type === 'SOLID' && stroke.boundVariables?.color) {
        const varId = stroke.boundVariables.color.id;
        const varInfo = variableMap[varId];
        if (varInfo) {
          usage.tokens['stroke'] = {
            variableName: varInfo.tokenName,
            tokenPath: varInfo.tokenPath,
            resolvedValue: stroke.color
          };
        }
      }
    }
  }
  
  // Check corner radius
  if ('cornerRadius' in node && typeof node.cornerRadius === 'object' && (node.cornerRadius as any).boundVariables) {
    const varId = (node.cornerRadius as any).boundVariables.id;
    const varInfo = variableMap[varId];
    if (varInfo) {
      usage.tokens['borderRadius'] = {
        variableName: varInfo.tokenName,
        tokenPath: varInfo.tokenPath,
        resolvedValue: node.cornerRadius
      };
    }
  }
  
  // Check layout properties
  if ('paddingLeft' in node && typeof node.paddingLeft === 'object' && (node.paddingLeft as any).boundVariables) {
    const varId = (node.paddingLeft as any).boundVariables.id;
    const varInfo = variableMap[varId];
    if (varInfo) {
      usage.tokens['padding'] = {
        variableName: varInfo.tokenName,
        tokenPath: varInfo.tokenPath,
        resolvedValue: node.paddingLeft
      };
    }
  }
  
  // Recursively check children
  if ('children' in node) {
    for (const child of node.children) {
      const childUsage = await analyzeNodeTokenUsage(child);
      // Merge child tokens
      Object.assign(usage.tokens, childUsage.tokens);
    }
  }
  
  return usage;
}

// ============================================================================
// 📊 ANALYZE SELECTION (Show token usage in UI)
// ============================================================================

async function analyzeSelection() {
  const selection = figma.currentPage.selection;
  
  if (selection.length === 0) {
    figma.ui.postMessage({ 
      type: 'analyze-error', 
      error: 'No component selected' 
    });
    return;
  }
  
  const analysis = [];
  
  for (const node of selection) {
    const usage = await analyzeNodeTokenUsage(node);
    analysis.push(usage);
  }
  
  figma.ui.postMessage({ 
    type: 'analyze-complete', 
    data: analysis 
  });
}

// ============================================================================
// 🔍 COMPARE TOKENS (Git vs Figma)
// ============================================================================

async function compareTokens(gitTokens: any) {
  const figmaTokens = await exportTokens({ includeAll: true });
  
  const differences = {
    missing: [],
    different: [],
    deprecated: [],
    new: []
  };
  
  // Compare logic here...
  // (detailed implementation)
  
  figma.ui.postMessage({ 
    type: 'compare-complete', 
    data: differences 
  });
}

// ============================================================================
// 🎨 GENERATE BRAND TOKENS
// ============================================================================

async function generateBrandTokens(brandConfig: any) {
  // Auto-generate tokens from base colors
  const { primary, accent, neutral } = brandConfig;
  
  // Generate scale
  const primitives = generateColorScale(primary, accent, neutral);
  const semantic = generateSemanticTokens(primitives);
  const components = generateComponentTokens(semantic);
  
  // Import generated tokens
  await importTokens({
    primitives,
    semantic,
    components
  }, { updateStyles: true });
  
  figma.ui.postMessage({ type: 'brand-generated' });
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

async function findOrCreateCollection(name: string, description: string): Promise<VariableCollection> {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const existing = collections.find(c => c.name === name);
  if (existing) return existing;
  
  return figma.variables.createVariableCollection(name);
}

function findOrCreateMode(collection: VariableCollection, modeName: string): string {
  const existing = collection.modes.find(m => m.name === modeName);
  if (existing) return existing.modeId;
  
  return collection.addMode(modeName);
}

function findVariableByName(collection: VariableCollection, name: string): Variable | null {
  for (const varId of collection.variableIds) {
    const variable = figma.variables.getVariableById(varId);
    if (variable && variable.name === name) return variable;
  }
  return null;
}

function mapTokenTypeToVariableType(tokenType: TokenType): VariableResolvedDataType {
  const mapping: Record<TokenType, VariableResolvedDataType> = {
    'color': 'COLOR',
    'dimension': 'FLOAT',
    'spacing': 'FLOAT',
    'sizing': 'FLOAT',
    'borderRadius': 'FLOAT',
    'borderWidth': 'FLOAT',
    'typography': 'STRING',
    'boxShadow': 'STRING'
  };
  return mapping[tokenType] || 'STRING';
}

function getVariableScopes(tokenType: TokenType): VariableScope[] {
  const scopes: Record<TokenType, VariableScope[]> = {
    'color': ['ALL_FILLS', 'FRAME_FILL', 'STROKE_COLOR'],
    'dimension': ['WIDTH_HEIGHT', 'GAP'],
    'spacing': ['GAP', 'WIDTH_HEIGHT'],
    'sizing': ['WIDTH_HEIGHT'],
    'borderRadius': ['CORNER_RADIUS'],
    'borderWidth': ['STROKE_FLOAT'],
    'typography': ['TEXT_CONTENT'],
    'boxShadow': ['EFFECT_FLOAT']
  };
  return scopes[tokenType] || ['ALL_FILLS'];
}

function convertTokenValueToFigma(value: any, type: TokenType): any {
  if (type === 'color') {
    // Convert hex to RGB
    return hexToRgb(value);
  }
  // Add other conversions...
  return value;
}

function hexToRgb(hex: string): RGB {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : { r: 0, g: 0, b: 0 };
}

function resolveAlias(reference: string): Variable | null {
  // Parse {token.name} format
  const tokenName = reference.replace(/[{}]/g, '');
  
  // Find variable by token path
  for (const [varId, varInfo] of Object.entries(variableMap)) {
    if (varInfo.tokenPath === tokenName) {
      return figma.variables.getVariableById(varId);
    }
  }
  
  return null;
}

function flattenTokens(tokens: TokenCollection, prefix = ''): Record<string, Token> {
  const flat: Record<string, Token> = {};
  
  for (const [key, value] of Object.entries(tokens)) {
    const path = prefix ? `${prefix}.${key}` : key;
    
    // Check if this is a token (has $value property)
    if (value && typeof value === 'object' && '$value' in value) {
      flat[path] = value as Token;
    } else if (value && typeof value === 'object' && !Array.isArray(value)) {
      // Recurse into nested objects
      Object.assign(flat, flattenTokens(value as TokenCollection, path));
    }
  }
  
  return flat;
}

function groupByComponent(components: TokenCollection): Record<string, TokenCollection> {
  const groups: Record<string, TokenCollection> = {};
  
  for (const [key, value] of Object.entries(components)) {
    const componentName = key.split('.')[0];
    if (!groups[componentName]) {
      groups[componentName] = {};
    }
    groups[componentName][key] = value;
  }
  
  return groups;
}

function extractVariants(tokens: TokenCollection): string[] {
  const variants = new Set<string>();
  // Extract variant names from token structure
  // (implementation depends on your naming convention)
  return Array.from(variants);
}

function buildTokenPath(variable: Variable, collection: VariableCollection): string {
  // Build path from variable name and collection
  return variable.name.replace(/ /g, '.');
}

function convertFigmaValueToToken(value: any, type: VariableResolvedDataType): Token {
  // Convert Figma values back to token format
  return {
    $type: 'color', // Map from type
    $value: value
  };
}

function setNestedValue(obj: any, path: string, value: any) {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  
  let current = obj;
  for (const key of keys) {
    if (!current[key]) current[key] = {};
    current = current[key];
  }
  
  current[lastKey] = value;
}

function convertToTokenStudioFormat(data: any): any {
  // Convert to Token Studio JSON format
  return data;
}

function generateColorScale(primary: string, accent: string, neutral: string): TokenCollection {
  // Generate color scale (10-130 range)
  return {};
}

function generateSemanticTokens(primitives: TokenCollection): TokenCollection {
  // Generate semantic layer
  return {};
}

function generateComponentTokens(semantic: TokenCollection): TokenCollection {
  // Generate component tokens
  return {};
}

async function updateColorStyles() {
  // Update local color styles from variables
}

async function updateTextStyles() {
  // Update text styles
}

async function updateEffectStyles() {
  // Update effect styles (shadows, etc)
}

// Initialize plugin
console.log('EKO Token Sync Plugin loaded');
