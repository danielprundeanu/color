# Changelog

All notable changes to EKO Token Sync Plugin will be documented in this file.

## [1.1.0] - 2025-11-26

### ✨ Added
- **Persistent Settings**: All plugin settings are now automatically saved and restored:
  - Git repository URL
  - Git branch name
  - GitHub personal access token
  - Token source selection (tokens-light/tokens-dark)
- **Optimized Git Loading**: New intelligent file loader that:
  - Recursively reads entire folder structure from GitHub
  - Automatically combines all JSON files into Token Studio format
  - Flattens directory structure into proper token paths
  - Extracts special files ($themes, $metadata, -dls)
  - Shows progress during loading
- **Smart Token Structure Detection**: Automatically identifies:
  - Token sets vs directories
  - Theme configurations
  - Collection groupings
  - Mode definitions

### 🔧 Improved
- Better error handling for GitHub API requests
- Progress indicators during Git operations
- Loading status messages with percentages
- Token source dropdown persists selection
- Network access includes `raw.githubusercontent.com` for file downloads

### 🐛 Fixed
- Settings not persisting after plugin restart
- Manual re-entry of credentials no longer needed
- Token source selection now remembered
- **CSP violation**: Added `raw.githubusercontent.com` to allowed domains in manifest.json

### 📚 Documentation
- Updated README with new features
- Added CHANGELOG
- Improved usage instructions
- Added examples for both import methods

## [1.0.0] - 2025-11-20

### ✨ Initial Release
- Bidirectional token sync (Git ↔ Figma)
- Multi-format support (Token Studio, Style Dictionary)
- Selective collection/mode import
- Variable and style creation
- Token hierarchy support
- Alias resolution
- Component analysis
- Brand generator
