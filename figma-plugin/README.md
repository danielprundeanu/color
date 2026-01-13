# EKO Token Sync - Figma Plugin

🚀 **Bidirectional sync between Git tokens and Figma Variables**

## Features

### 🟩 Import (Git → Figma)
- ✅ Import tokens from JSON file or Git repository  
- ✅ **Optimized multi-file loading** from Git (reads entire folder structure)
- ✅ **Persistent settings** (Git URL, branch, token source saved across sessions)
- ✅ Selective import with collection/mode checkboxes
- ✅ Create/update Variable Collections & Modes
- ✅ Auto-create Color/Text/Effect Styles
- ✅ Support for multi-theme (Light/Dark)
- ✅ Handle primitive → semantic → component hierarchy
- ✅ Alias resolution (`{token.reference}`)

### 🟥 Export (Figma → Git)
- ✅ Export all variables to Token Studio format
- ✅ Export selected components only
- ✅ Reconstruct token hierarchy
- ✅ Generate proper JSON structure
- ✅ Support multiple export formats

### 📌 Analysis & Utilities
- ✅ Analyze component token usage
- ✅ Compare Figma vs Git tokens
- ✅ Detect missing/different/deprecated tokens
- ✅ Visual token editor
- ✅ Brand generator (auto-create scales)

## Recent Updates

### ✨ v1.1.0 - Optimization & Persistence
- **Persistent Settings**: All settings (Git URL, branch, GitHub token, token source) are now saved and restored automatically
- **Optimized Git Loading**: Plugin now reads entire folder structure from Git repository and combines all JSON files automatically
- **Smart Caching**: Token source selection (tokens-light/tokens-dark) is persisted
- **Better UX**: No need to re-enter credentials on every plugin restart

## Installation

1. **Install dependencies:**
   ```bash
   cd figma-plugin
   npm install
   ```

2. **Build the plugin:**
   ```bash
   npm run build
   ```

3. **Load in Figma:**
   - Open Figma Desktop
   - Go to Plugins → Development → Import plugin from manifest
   - Select `manifest.json` from this folder

## Development

```bash
# Watch mode (auto-rebuild on changes)
npm run dev

# Build for production
npm run build
```

## Usage

### Import Tokens (Method 1: From Git Repository)

1. Open plugin in Figma
2. Go to **Import** tab
3. **Configure Git settings** (saved automatically):
   - Git Repository URL: `https://github.com/user/repo`
   - Branch: `stake` (or your branch name)
   - Token Source: `tokens-light` or `tokens-dark`
   - GitHub Token (optional): for private repos
4. Click **Load Tokens from Git**
5. Wait for the plugin to fetch and combine all JSON files
6. **Select collections/modes** to import (use checkboxes)
7. Click **Create Variables in Figma**

### Import Tokens (Method 2: From File)

1. Open plugin in Figma
2. Go to **Import** tab
3. Click **Choose File** and select your `tokens.json`
4. **Select collections/modes** to import
5. Click **Create Variables in Figma**

### Export Tokens

1. Go to **Export** tab
2. Select what to export:
   - ✅ Primitives
   - ✅ Semantic
   - ✅ Components
3. Choose format (Token Studio / Style Dictionary)
4. Click **Export All** or **Export Selection**
5. Download JSON or copy to clipboard

### Analyze Components

1. Select a component in Figma
2. Go to **Analyze** tab
3. Click **Analyze Selection**
4. View all tokens used in the component
5. Export component tokens to JSON

## Token Structure

The plugin expects this structure:

```
tokens/
├── primitives/
│   ├── color.json
│   ├── dimension.json
│   └── typo.json
├── semantic/
│   ├── color.json
│   └── dimension.json
└── component/
    ├── button/
    │   ├── default.json
    │   └── inverted.json
    └── card/
        └── default.json
```

## API

### Import Options

```typescript
{
  updateStyles: boolean;      // Update Color/Text/Effect styles
  createMissing: boolean;      // Create missing variables
  removeDeprecated: boolean;   // Remove deprecated tokens
  themes: string[];            // ['light', 'dark']
}
```

### Export Options

```typescript
{
  exportPrimitives: boolean;
  exportSemantic: boolean;
  exportComponents: boolean;
  format: 'token-studio' | 'style-dictionary' | 'figma-tokens';
}
```

## Architecture

```
Git Repository (tokens/)
    ↓ IMPORT
Figma Plugin
    ↓ Process
Variables + Collections + Modes
    ↓ Bind
Figma Components
    ↓ EXPORT
Token Studio JSON
    ↓ Commit
Git Repository
```

## Roadmap

- [ ] Direct GitHub API integration
- [ ] Auto-sync on Git push
- [ ] Multi-brand support
- [ ] Token validation & linting
- [ ] Batch operations
- [ ] Token usage analytics
- [ ] Migration tools
- [ ] VS Code extension companion

## Tech Stack

- TypeScript
- Figma Plugin API
- esbuild
- Token Studio format

## Contributing

This plugin is part of the EKO Design System v4 project.

## License

MIT
