"use strict";
(() => {
  // code.ts
  var variableMap = {};
  var importedCollections = /* @__PURE__ */ new Map();
  figma.showUI(__html__, {
    width: 400,
    height: 600,
    themeColors: true
  });
  figma.ui.onmessage = async (msg) => {
    switch (msg.type) {
      case "load-settings":
        const gitUrl = await figma.clientStorage.getAsync("gitUrl") || "";
        const gitBranch = await figma.clientStorage.getAsync("gitBranch") || "stake";
        const githubToken = await figma.clientStorage.getAsync("githubToken") || "";
        const tokenSource = await figma.clientStorage.getAsync("tokenSource") || "tokens-light";
        figma.ui.postMessage({
          type: "settings-loaded",
          settings: { gitUrl, gitBranch, githubToken, tokenSource }
        });
        break;
      case "save-setting":
        await figma.clientStorage.setAsync(msg.key, msg.value);
        break;
      case "create-variables":
        await createVariablesFromSelection(msg.tokens, msg.selectedCollections, msg.updateStyles);
        break;
      case "load-tokens-from-git":
        await loadTokensFromGit(msg.gitUrl, msg.gitBranch, msg.githubToken, msg.tokenSource);
        break;
      case "import-tokens":
        console.log("Received import-tokens message");
        console.log("Token keys:", Object.keys(msg.tokens));
        console.log("First 5 keys:", Object.keys(msg.tokens).slice(0, 5));
        await importTokens(msg.tokens, msg.options);
        break;
      case "export-tokens":
        await exportTokens(msg.options);
        break;
      case "export-selection":
        await exportSelectionTokens();
        break;
      case "update-component-tokens":
        await updateComponentTokens();
        break;
      case "analyze-selection":
        await analyzeSelection();
        break;
      case "compare-tokens":
        await compareTokens(msg.gitTokens);
        break;
      case "generate-brand":
        await generateBrandTokens(msg.brandConfig);
        break;
      case "close":
        figma.closePlugin();
        break;
    }
  };
  async function loadTokensFromGit(gitUrl, gitBranch, githubToken, tokenSource) {
    try {
      let flattenStructure2 = function(obj, prefix = "") {
        for (const key in obj) {
          if (key === "$themes" || key === "$metadata" || key === "-dls") {
            continue;
          }
          const value = obj[key];
          const path = prefix ? `${prefix}/${key}` : key;
          if (typeof value === "object" && !Array.isArray(value)) {
            const hasTokens = Object.values(value).some(
              (v) => v && typeof v === "object" && ("$value" in v || "$type" in v)
            );
            if (hasTokens || Object.keys(value).length === 0) {
              combinedTokens[path] = value;
            } else {
              flattenStructure2(value, path);
            }
          }
        }
      };
      var flattenStructure = flattenStructure2;
      figma.ui.postMessage({ type: "import-progress", step: "git", progress: 10 });
      const repoMatch = gitUrl.match(/github\.com\/([^\/]+\/[^\/]+)/);
      if (!repoMatch) {
        throw new Error("Invalid GitHub URL format");
      }
      const repoPath = repoMatch[1].replace(/\.git$/, "");
      figma.ui.postMessage({ type: "import-progress", step: "git", progress: 20 });
      const apiBase = `https://api.github.com/repos/${repoPath}/contents/${tokenSource}`;
      const headers = {
        "Accept": "application/vnd.github.v3+json"
      };
      if (githubToken) {
        headers["Authorization"] = `token ${githubToken}`;
      }
      async function fetchDirectory(path) {
        const url = `https://api.github.com/repos/${repoPath}/contents/${path}?ref=${gitBranch}`;
        const response = await fetch(url, { headers });
        if (!response.ok) {
          throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
        }
        const items = await response.json();
        const result = {};
        for (const item of items) {
          if (item.type === "file" && item.name.endsWith(".json")) {
            const fileContentResponse = await fetch(item.url, { headers });
            if (fileContentResponse.ok) {
              const fileData = await fileContentResponse.json();
              const decodedContent = atob(fileData.content.replace(/\n/g, ""));
              const content = JSON.parse(decodedContent);
              const fileName = item.name.replace(".json", "");
              result[fileName] = content;
            } else {
              console.warn(`Failed to fetch ${item.name}: ${fileContentResponse.status} ${fileContentResponse.statusText}`);
            }
          } else if (item.type === "dir" && item.name !== ".DS_Store") {
            const subDir = await fetchDirectory(item.path);
            result[item.name] = subDir;
          }
        }
        return result;
      }
      figma.ui.postMessage({ type: "import-progress", step: "git", progress: 40 });
      const tokenStructure = await fetchDirectory(tokenSource);
      figma.ui.postMessage({ type: "import-progress", step: "git", progress: 70 });
      const combinedTokens = {};
      if (tokenStructure["$themes"]) {
        combinedTokens["$themes"] = tokenStructure["$themes"];
      }
      if (tokenStructure["$metadata"]) {
        combinedTokens["$metadata"] = tokenStructure["$metadata"];
      }
      if (tokenStructure["-dls"]) {
        combinedTokens["-dls"] = tokenStructure["-dls"];
      }
      flattenStructure2(tokenStructure);
      figma.ui.postMessage({ type: "import-progress", step: "git", progress: 90 });
      figma.ui.postMessage({
        type: "tokens-loaded",
        tokens: combinedTokens
      });
      figma.ui.postMessage({ type: "import-progress", step: "git", progress: 100 });
    } catch (error) {
      figma.ui.postMessage({
        type: "import-error",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
  async function createVariablesFromSelection(tokens, selectedCollections, updateStyles) {
    figma.ui.postMessage({ type: "import-started" });
    try {
      console.log("Creating variables for selected collections:", selectedCollections);
      const themes = tokens.$themes || [];
      let progress = 0;
      const total = selectedCollections.length;
      const collectionMap = /* @__PURE__ */ new Map();
      for (const selected of selectedCollections) {
        if (!collectionMap.has(selected.collection)) {
          collectionMap.set(selected.collection, []);
        }
        const theme = themes.find(
          (t) => (t.group || "default") === selected.collection && t.name === selected.mode
        );
        if (theme) {
          collectionMap.get(selected.collection).push(theme);
        }
      }
      for (const [collectionName, themeModes] of collectionMap) {
        figma.ui.postMessage({
          type: "import-progress",
          step: `${collectionName} collection`,
          progress: Math.round(progress / total * 100)
        });
        const firstTheme = themeModes[0];
        let collection;
        if (firstTheme.$figmaCollectionId) {
          const existingCollections = await figma.variables.getLocalVariableCollectionsAsync();
          const existing = existingCollections.find((c) => c.id === firstTheme.$figmaCollectionId);
          if (existing) {
            collection = existing;
            console.log(`Using existing collection: ${collection.name}`);
          } else {
            collection = await findOrCreateCollection(collectionName, `Tokens for ${collectionName}`);
          }
        } else {
          collection = await findOrCreateCollection(collectionName, `Tokens for ${collectionName}`);
        }
        for (const theme of themeModes) {
          const modeName = theme.name;
          let mode = collection.modes.find((m) => m.name === modeName);
          if (!mode) {
            const modeId = collection.addMode(modeName);
            mode = collection.modes.find((m) => m.modeId === modeId);
            console.log(`Created mode: ${modeName}`);
          }
          if (!mode) {
            console.log(`Failed to find/create mode: ${modeName}`);
            continue;
          }
          console.log(`Processing mode: ${modeName} in collection ${collectionName}`);
          const selectedSets = theme.selectedTokenSets || {};
          console.log(`Selected token sets:`, selectedSets);
          let tokenCount = 0;
          for (const [setPath, status] of Object.entries(selectedSets)) {
            if (status !== "enabled")
              continue;
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
                const fullPath = `${setPath.split("/").pop()}/${tokenPath}`;
                const resolveType = typeof token.$value === "string" && token.$value.startsWith("{") ? "ALIAS" : "VALUE";
                const result = await importVariable(collection, fullPath, token, resolveType, mode.name);
                console.log(`Import result for ${tokenPath}:`, result ? "SUCCESS" : "FAILED");
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
      if (updateStyles) {
        figma.ui.postMessage({ type: "import-progress", step: "styles", progress: 90 });
        await updateColorStyles();
        await updateTextStyles();
        await updateEffectStyles();
      }
      figma.ui.postMessage({
        type: "import-complete",
        stats: {
          variablesCreated: Object.keys(variableMap).length,
          collectionsCreated: importedCollections.size
        }
      });
    } catch (error) {
      figma.ui.postMessage({
        type: "import-error",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
  async function importTokens(tokens, options) {
    figma.ui.postMessage({ type: "import-started" });
    try {
      console.log("importTokens called with token keys:", Object.keys(tokens).slice(0, 10));
      const themes = tokens.$themes || [];
      console.log("Found themes:", themes.map((t) => ({ name: t.name, group: t.group })));
      const { primitives, semantic, components } = parseTokenStructure(tokens);
      console.log("After parsing:", {
        primitives: primitives ? Object.keys(primitives).slice(0, 3) : null,
        semantic: semantic ? Object.keys(semantic).slice(0, 3) : null,
        components: components ? Object.keys(components).slice(0, 3) : null
      });
      if (themes.length > 0) {
        await importFromThemes(tokens, themes, options);
      } else {
        figma.ui.postMessage({ type: "import-progress", step: "primitives", progress: 0 });
        await importPrimitives(primitives, options);
        figma.ui.postMessage({ type: "import-progress", step: "semantic", progress: 33 });
        await importSemantic(semantic, options);
        figma.ui.postMessage({ type: "import-progress", step: "components", progress: 66 });
        await importComponents(components, options);
      }
      if (options.updateStyles) {
        figma.ui.postMessage({ type: "import-progress", step: "styles", progress: 90 });
        await updateColorStyles();
        await updateTextStyles();
        await updateEffectStyles();
      }
      figma.ui.postMessage({
        type: "import-complete",
        stats: {
          variablesCreated: Object.keys(variableMap).length,
          collectionsCreated: importedCollections.size
        }
      });
    } catch (error) {
      figma.ui.postMessage({
        type: "import-error",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
  function parseTokenStructure(tokens) {
    const primitives = {};
    const semantic = {};
    const components = {};
    if (tokens.primitives || tokens.semantic || tokens.components || tokens.component) {
      return {
        primitives: tokens.primitives || {},
        semantic: tokens.semantic || {},
        components: tokens.components || tokens.component || {}
      };
    }
    const themeKey = Object.keys(tokens).find((k) => k.startsWith("tokens-"));
    if (themeKey) {
      const themeData = tokens[themeKey];
      return {
        primitives: themeData.primitives || {},
        semantic: themeData.semantic || {},
        components: themeData.component || themeData.components || {}
      };
    }
    for (const [path, content] of Object.entries(tokens)) {
      if (typeof content !== "object" || !content)
        continue;
      if (path === "$themes" || path === "$metadata")
        continue;
      const parts = path.split("/");
      const category = parts[0];
      const subcategory = parts.slice(1).join("/");
      if (category === "primitives" || category === "primitive") {
        if (subcategory) {
          primitives[subcategory] = content;
        } else {
          Object.assign(primitives, content);
        }
      } else if (category === "semantic") {
        if (subcategory) {
          semantic[subcategory] = content;
        } else {
          Object.assign(semantic, content);
        }
      } else if (category === "component") {
        if (subcategory) {
          components[subcategory] = content;
        } else {
          Object.assign(components, content);
        }
      }
    }
    console.log("Token Studio flat format detected, parsed:", {
      primitivesKeys: Object.keys(primitives),
      semanticKeys: Object.keys(semantic),
      componentsKeys: Object.keys(components)
    });
    return { primitives, semantic, components };
  }
  async function importFromThemes(tokens, themes, options) {
    const collectionGroups = /* @__PURE__ */ new Map();
    for (const theme of themes) {
      const group = theme.group || "default";
      if (!collectionGroups.has(group)) {
        collectionGroups.set(group, []);
      }
      collectionGroups.get(group).push(theme);
    }
    let progress = 0;
    const totalGroups = collectionGroups.size;
    for (const [group, groupThemes] of collectionGroups) {
      figma.ui.postMessage({
        type: "import-progress",
        step: `${group} collection`,
        progress: Math.round(progress / totalGroups * 100)
      });
      const firstTheme = groupThemes[0];
      let collection;
      if (firstTheme.$figmaCollectionId) {
        const existingCollections = await figma.variables.getLocalVariableCollectionsAsync();
        const existing = existingCollections.find((c) => c.id === firstTheme.$figmaCollectionId);
        if (existing) {
          collection = existing;
          console.log(`Found existing collection: ${collection.name} (${collection.id})`);
        } else {
          collection = await findOrCreateCollection(group, `Tokens for ${group}`);
        }
      } else {
        collection = await findOrCreateCollection(group, `Tokens for ${group}`);
      }
      for (const theme of groupThemes) {
        const modeName = theme.name;
        let mode = collection.modes.find((m) => m.name === modeName);
        if (!mode) {
          const modeId = collection.addMode(modeName);
          mode = collection.modes.find((m) => m.modeId === modeId);
          console.log(`Created mode: ${modeName} in collection ${collection.name}`);
        }
        if (!mode)
          continue;
        const selectedSets = theme.selectedTokenSets || {};
        for (const [setPath, status] of Object.entries(selectedSets)) {
          if (status !== "enabled")
            continue;
          const setTokens = tokens[setPath];
          if (!setTokens)
            continue;
          const flatTokens = flattenTokens(setTokens);
          for (const [tokenPath, token] of Object.entries(flatTokens)) {
            const fullPath = `${setPath.split("/").pop()}/${tokenPath}`;
            const resolveType = typeof token.$value === "string" && token.$value.startsWith("{") ? "ALIAS" : "VALUE";
            await importVariable(collection, fullPath, token, resolveType, mode.name);
          }
        }
      }
      importedCollections.set(group, collection);
      progress++;
    }
  }
  async function importPrimitives(primitives, options) {
    let collection = await findOrCreateCollection("Primitives", "Primitive tokens");
    const flatTokens = flattenTokens(primitives);
    for (const [tokenPath, token] of Object.entries(flatTokens)) {
      await importVariable(collection, tokenPath, token, "VALUE");
    }
    importedCollections.set("Primitives", collection);
  }
  async function importSemantic(semantic, options) {
    const themes = options.themes || ["light", "dark"];
    for (const theme of themes) {
      const collectionName = `Semantic - ${theme}`;
      let collection = await findOrCreateCollection(collectionName, `Semantic tokens for ${theme} theme`);
      const mode = findOrCreateMode(collection, theme);
      const flatTokens = flattenTokens(semantic);
      for (const [tokenPath, token] of Object.entries(flatTokens)) {
        await importVariable(collection, tokenPath, token, "ALIAS", mode);
      }
      importedCollections.set(collectionName, collection);
    }
  }
  async function importComponents(components, options) {
    const componentGroups = groupByComponent(components);
    for (const [componentName, tokens] of Object.entries(componentGroups)) {
      const collectionName = `Component - ${componentName}`;
      let collection = await findOrCreateCollection(collectionName, `Tokens for ${componentName} component`);
      const variants = extractVariants(tokens);
      for (const variant of variants) {
        findOrCreateMode(collection, variant);
      }
      const flatTokens = flattenTokens(tokens);
      for (const [tokenPath, token] of Object.entries(flatTokens)) {
        await importVariable(collection, tokenPath, token, "ALIAS");
      }
      importedCollections.set(collectionName, collection);
    }
  }
  async function importVariable(collection, tokenPath, token, resolveType, mode) {
    var _a;
    const variableName = tokenPath.split(".").pop() || tokenPath;
    const groupPath = tokenPath.split(".").slice(0, -1).join("/");
    let variable = findVariableByName(collection, tokenPath);
    if (!variable) {
      const variableType = mapTokenTypeToVariableType(token.$type);
      variable = figma.variables.createVariable(variableName, collection, variableType);
      if (groupPath) {
        variable.scopes = getVariableScopes(token.$type);
      }
    }
    const modeId = mode ? (_a = collection.modes.find((m) => m.name === mode)) == null ? void 0 : _a.modeId : collection.defaultModeId;
    if (!modeId)
      return variable;
    if (resolveType === "VALUE") {
      const figmaValue = convertTokenValueToFigma(token.$value, token.$type);
      variable.setValueForMode(modeId, figmaValue);
    } else {
      const aliasVariable = resolveAlias(token.$value);
      if (aliasVariable) {
        variable.setValueForMode(modeId, {
          type: "VARIABLE_ALIAS",
          id: aliasVariable.id
        });
      }
    }
    variableMap[variable.id] = {
      tokenPath,
      tokenName: variableName,
      collectionName: collection.name,
      modeName: mode || "default"
    };
    return variable;
  }
  async function exportTokens(options) {
    figma.ui.postMessage({ type: "export-started" });
    try {
      const exportData = {
        primitives: {},
        semantic: {},
        components: {}
      };
      const collections = await figma.variables.getLocalVariableCollectionsAsync();
      for (const collection of collections) {
        const tokens = await exportCollection(collection);
        if (collection.name.includes("Primitive")) {
          exportData.primitives[collection.name] = tokens;
        } else if (collection.name.includes("Semantic")) {
          exportData.semantic[collection.name] = tokens;
        } else if (collection.name.includes("Component")) {
          exportData.components[collection.name] = tokens;
        }
      }
      const tokenStudioFormat = convertToTokenStudioFormat(exportData);
      figma.ui.postMessage({
        type: "export-complete",
        data: tokenStudioFormat
      });
    } catch (error) {
      figma.ui.postMessage({
        type: "export-error",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  }
  async function exportCollection(collection) {
    const tokens = {};
    const variables = collection.variableIds.map((id) => figma.variables.getVariableById(id));
    for (const variable of variables) {
      if (!variable)
        continue;
      const tokenPath = buildTokenPath(variable, collection);
      for (const mode of collection.modes) {
        const value = variable.valuesByMode[mode.modeId];
        const token = convertFigmaValueToToken(value, variable.resolvedType);
        setNestedValue(tokens, tokenPath, token);
      }
    }
    return tokens;
  }
  async function exportSelectionTokens() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: "export-error",
        error: "No component selected"
      });
      return;
    }
    const usageData = [];
    for (const node of selection) {
      const usage = await analyzeNodeTokenUsage(node);
      usageData.push(usage);
    }
    figma.ui.postMessage({
      type: "export-selection-complete",
      data: usageData
    });
  }
  async function updateComponentTokens() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: "update-error",
        error: "No component selected. Select the component instance you modified."
      });
      return;
    }
    const componentTokens = {};
    for (const node of selection) {
      const componentName = node.name;
      const tokens = await extractBoundVariablesToTokens(node);
      if (Object.keys(tokens).length > 0) {
        componentTokens[componentName] = tokens;
      }
    }
    if (Object.keys(componentTokens).length === 0) {
      figma.ui.postMessage({
        type: "update-error",
        error: "No bound variables found on selected components."
      });
      return;
    }
    const output = {
      component: componentTokens
    };
    figma.ui.postMessage({
      type: "update-complete",
      data: output
    });
  }
  async function extractBoundVariablesToTokens(node) {
    var _a, _b, _c, _d, _e;
    const tokens = {};
    if ("fills" in node && Array.isArray(node.fills)) {
      for (const fill of node.fills) {
        if (fill.type === "SOLID" && ((_a = fill.boundVariables) == null ? void 0 : _a.color)) {
          const variable = figma.variables.getVariableById(fill.boundVariables.color.id);
          if (variable) {
            const tokenPath = buildVariableReference(variable);
            tokens["fill"] = {
              $type: "color",
              $value: tokenPath
            };
          }
        }
      }
    }
    if ("strokes" in node && Array.isArray(node.strokes)) {
      for (const stroke of node.strokes) {
        if (stroke.type === "SOLID" && ((_b = stroke.boundVariables) == null ? void 0 : _b.color)) {
          const variable = figma.variables.getVariableById(stroke.boundVariables.color.id);
          if (variable) {
            const tokenPath = buildVariableReference(variable);
            tokens["border"] = {
              $type: "color",
              $value: tokenPath
            };
          }
        }
      }
    }
    if ("cornerRadius" in node && typeof node.cornerRadius !== "number") {
      const boundVar = (_c = node.boundVariables) == null ? void 0 : _c.cornerRadius;
      if (boundVar) {
        const variable = figma.variables.getVariableById(boundVar.id);
        if (variable) {
          const tokenPath = buildVariableReference(variable);
          tokens["borderRadius"] = {
            $type: "dimension",
            $value: tokenPath
          };
        }
      }
    }
    if ("paddingLeft" in node) {
      const boundVar = (_d = node.boundVariables) == null ? void 0 : _d.paddingLeft;
      if (boundVar) {
        const variable = figma.variables.getVariableById(boundVar.id);
        if (variable) {
          const tokenPath = buildVariableReference(variable);
          tokens["padding"] = {
            $type: "dimension",
            $value: tokenPath
          };
        }
      }
    }
    if ("width" in node && typeof node.width !== "number") {
      const boundVar = (_e = node.boundVariables) == null ? void 0 : _e.width;
      if (boundVar) {
        const variable = figma.variables.getVariableById(boundVar.id);
        if (variable) {
          const tokenPath = buildVariableReference(variable);
          tokens["width"] = {
            $type: "dimension",
            $value: tokenPath
          };
        }
      }
    }
    if ("children" in node) {
      for (const child of node.children) {
        const childTokens = await extractBoundVariablesToTokens(child);
        if (Object.keys(childTokens).length > 0) {
          tokens[child.name] = childTokens;
        }
      }
    }
    return tokens;
  }
  function buildVariableReference(variable) {
    const name = variable.name.replace(/\//g, ".");
    return `{${name}}`;
  }
  async function analyzeNodeTokenUsage(node) {
    var _a, _b;
    const usage = {
      componentName: node.name,
      tokens: {}
    };
    if ("fills" in node && Array.isArray(node.fills)) {
      for (const fill of node.fills) {
        if (fill.type === "SOLID" && ((_a = fill.boundVariables) == null ? void 0 : _a.color)) {
          const varId = fill.boundVariables.color.id;
          const varInfo = variableMap[varId];
          if (varInfo) {
            usage.tokens["fill"] = {
              variableName: varInfo.tokenName,
              tokenPath: varInfo.tokenPath,
              resolvedValue: fill.color
            };
          }
        }
      }
    }
    if ("strokes" in node && Array.isArray(node.strokes)) {
      for (const stroke of node.strokes) {
        if (stroke.type === "SOLID" && ((_b = stroke.boundVariables) == null ? void 0 : _b.color)) {
          const varId = stroke.boundVariables.color.id;
          const varInfo = variableMap[varId];
          if (varInfo) {
            usage.tokens["stroke"] = {
              variableName: varInfo.tokenName,
              tokenPath: varInfo.tokenPath,
              resolvedValue: stroke.color
            };
          }
        }
      }
    }
    if ("cornerRadius" in node && typeof node.cornerRadius === "object" && node.cornerRadius.boundVariables) {
      const varId = node.cornerRadius.boundVariables.id;
      const varInfo = variableMap[varId];
      if (varInfo) {
        usage.tokens["borderRadius"] = {
          variableName: varInfo.tokenName,
          tokenPath: varInfo.tokenPath,
          resolvedValue: node.cornerRadius
        };
      }
    }
    if ("paddingLeft" in node && typeof node.paddingLeft === "object" && node.paddingLeft.boundVariables) {
      const varId = node.paddingLeft.boundVariables.id;
      const varInfo = variableMap[varId];
      if (varInfo) {
        usage.tokens["padding"] = {
          variableName: varInfo.tokenName,
          tokenPath: varInfo.tokenPath,
          resolvedValue: node.paddingLeft
        };
      }
    }
    if ("children" in node) {
      for (const child of node.children) {
        const childUsage = await analyzeNodeTokenUsage(child);
        Object.assign(usage.tokens, childUsage.tokens);
      }
    }
    return usage;
  }
  async function analyzeSelection() {
    const selection = figma.currentPage.selection;
    if (selection.length === 0) {
      figma.ui.postMessage({
        type: "analyze-error",
        error: "No component selected"
      });
      return;
    }
    const analysis = [];
    for (const node of selection) {
      const usage = await analyzeNodeTokenUsage(node);
      analysis.push(usage);
    }
    figma.ui.postMessage({
      type: "analyze-complete",
      data: analysis
    });
  }
  async function compareTokens(gitTokens) {
    const figmaTokens = await exportTokens({ includeAll: true });
    const differences = {
      missing: [],
      different: [],
      deprecated: [],
      new: []
    };
    figma.ui.postMessage({
      type: "compare-complete",
      data: differences
    });
  }
  async function generateBrandTokens(brandConfig) {
    const { primary, accent, neutral } = brandConfig;
    const primitives = generateColorScale(primary, accent, neutral);
    const semantic = generateSemanticTokens(primitives);
    const components = generateComponentTokens(semantic);
    await importTokens({
      primitives,
      semantic,
      components
    }, { updateStyles: true });
    figma.ui.postMessage({ type: "brand-generated" });
  }
  async function findOrCreateCollection(name, description) {
    const collections = await figma.variables.getLocalVariableCollectionsAsync();
    const existing = collections.find((c) => c.name === name);
    if (existing)
      return existing;
    return figma.variables.createVariableCollection(name);
  }
  function findOrCreateMode(collection, modeName) {
    const existing = collection.modes.find((m) => m.name === modeName);
    if (existing)
      return existing.modeId;
    return collection.addMode(modeName);
  }
  function findVariableByName(collection, name) {
    for (const varId of collection.variableIds) {
      const variable = figma.variables.getVariableById(varId);
      if (variable && variable.name === name)
        return variable;
    }
    return null;
  }
  function mapTokenTypeToVariableType(tokenType) {
    const mapping = {
      "color": "COLOR",
      "dimension": "FLOAT",
      "spacing": "FLOAT",
      "sizing": "FLOAT",
      "borderRadius": "FLOAT",
      "borderWidth": "FLOAT",
      "typography": "STRING",
      "boxShadow": "STRING"
    };
    return mapping[tokenType] || "STRING";
  }
  function getVariableScopes(tokenType) {
    const scopes = {
      "color": ["ALL_FILLS", "FRAME_FILL", "STROKE_COLOR"],
      "dimension": ["WIDTH_HEIGHT", "GAP"],
      "spacing": ["GAP", "WIDTH_HEIGHT"],
      "sizing": ["WIDTH_HEIGHT"],
      "borderRadius": ["CORNER_RADIUS"],
      "borderWidth": ["STROKE_FLOAT"],
      "typography": ["TEXT_CONTENT"],
      "boxShadow": ["EFFECT_FLOAT"]
    };
    return scopes[tokenType] || ["ALL_FILLS"];
  }
  function convertTokenValueToFigma(value, type) {
    if (type === "color") {
      return hexToRgb(value);
    }
    return value;
  }
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16) / 255,
      g: parseInt(result[2], 16) / 255,
      b: parseInt(result[3], 16) / 255
    } : { r: 0, g: 0, b: 0 };
  }
  function resolveAlias(reference) {
    const tokenName = reference.replace(/[{}]/g, "");
    for (const [varId, varInfo] of Object.entries(variableMap)) {
      if (varInfo.tokenPath === tokenName) {
        return figma.variables.getVariableById(varId);
      }
    }
    return null;
  }
  function flattenTokens(tokens, prefix = "") {
    const flat = {};
    for (const [key, value] of Object.entries(tokens)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === "object" && "$value" in value) {
        flat[path] = value;
      } else if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.assign(flat, flattenTokens(value, path));
      }
    }
    return flat;
  }
  function groupByComponent(components) {
    const groups = {};
    for (const [key, value] of Object.entries(components)) {
      const componentName = key.split(".")[0];
      if (!groups[componentName]) {
        groups[componentName] = {};
      }
      groups[componentName][key] = value;
    }
    return groups;
  }
  function extractVariants(tokens) {
    const variants = /* @__PURE__ */ new Set();
    return Array.from(variants);
  }
  function buildTokenPath(variable, collection) {
    return variable.name.replace(/ /g, ".");
  }
  function convertFigmaValueToToken(value, type) {
    return {
      $type: "color",
      // Map from type
      $value: value
    };
  }
  function setNestedValue(obj, path, value) {
    const keys = path.split(".");
    const lastKey = keys.pop();
    let current = obj;
    for (const key of keys) {
      if (!current[key])
        current[key] = {};
      current = current[key];
    }
    current[lastKey] = value;
  }
  function convertToTokenStudioFormat(data) {
    return data;
  }
  function generateColorScale(primary, accent, neutral) {
    return {};
  }
  function generateSemanticTokens(primitives) {
    return {};
  }
  function generateComponentTokens(semantic) {
    return {};
  }
  async function updateColorStyles() {
  }
  async function updateTextStyles() {
  }
  async function updateEffectStyles() {
  }
  console.log("EKO Token Sync Plugin loaded");
})();
