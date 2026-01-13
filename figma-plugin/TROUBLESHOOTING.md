# Troubleshooting Guide

## Common Issues and Solutions

### 1. CSP (Content Security Policy) Violations

#### Error Message
```
Refused to connect to 'https://raw.githubusercontent.com/...' because it violates the following Content Security Policy directive
```

#### Cause
The plugin tries to download files from `raw.githubusercontent.com` but it's not in the allowed domains list.

#### Solution
✅ **Fixed in v1.1.0** - The manifest.json now includes both required domains:
```json
"networkAccess": {
  "allowedDomains": [
    "https://api.github.com",
    "https://raw.githubusercontent.com"
  ]
}
```

#### If you still see this error:
1. Close and remove the plugin from Figma
2. Rebuild the plugin: `npm run build`
3. Import the plugin again (Plugins → Development → Import plugin from manifest)

---

### 2. Settings Not Persisting

#### Symptoms
- GitHub Token disappears after restart
- Git URL needs to be re-entered
- Token Source resets to default

#### Cause
Old version of the plugin didn't save settings properly.

#### Solution
✅ **Fixed in v1.1.0** - All settings now auto-save using `figma.clientStorage`

Make sure you're running the latest version:
1. Run `npm run build`
2. Reload the plugin in Figma

---

### 3. "Cannot read properties of null" Error

#### Error Message
```
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
```

#### Cause
JavaScript tries to attach event listeners to elements that don't exist in the DOM.

#### Solution
Check that all UI elements exist in `ui.html`:
- `tokenFile` input element
- All button IDs match between HTML and JavaScript
- No typos in element IDs

If problem persists:
1. Clear browser cache (in Figma: Help → Troubleshooting → Clear Cache)
2. Restart Figma
3. Reload the plugin

---

### 4. Git Loading Takes Too Long

#### Symptoms
- Loading spinner runs for more than 30 seconds
- No progress updates
- Eventually times out

#### Possible Causes
1. **Large repository**: > 100 files
2. **Slow network**: Poor connection
3. **Rate limiting**: Too many API requests
4. **Missing GitHub token**: Unauthenticated requests are limited

#### Solutions

**Use GitHub Personal Access Token:**
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select scope: `repo` (for private repos) or `public_repo` (for public)
4. Copy token and paste into plugin's GitHub Token field
5. Token increases rate limit from 60 to 5,000 requests/hour

**Check Network:**
- Open browser console (Plugins → Development → Open Console)
- Look for network errors
- Check if GitHub API is accessible

**Try Smaller Repository First:**
- Test with a simple repo (< 20 files)
- Verify functionality works
- Then try your main repository

---

### 5. Invalid JSON Format

#### Error Message
```
Invalid JSON: Unexpected token...
```

#### Causes
1. Malformed JSON in token files
2. Comments in JSON (not allowed)
3. Trailing commas
4. Incorrect file encoding

#### Solutions

**Validate JSON Files:**
```bash
# Check if JSON is valid
node -e "JSON.parse(require('fs').readFileSync('tokens.json'))"
```

**Common JSON Errors:**
- ❌ Trailing commas: `{"key": "value",}` 
- ✅ No trailing comma: `{"key": "value"}`
- ❌ Comments: `// This is a comment`
- ✅ No comments allowed in JSON
- ❌ Single quotes: `{'key': 'value'}`
- ✅ Double quotes: `{"key": "value"}`

**Use JSON Linter:**
- [jsonlint.com](https://jsonlint.com/)
- VS Code: Install "JSON" extension for validation

---

### 6. Variables Not Appearing in Figma

#### Symptoms
- Import completes successfully
- No error messages
- But variables don't appear in Figma Variables panel

#### Possible Causes
1. Variables created in wrong collection
2. Mode not selected in Variables panel
3. Collection hidden or archived

#### Solutions

**Check Variables Panel:**
1. Open Figma Variables panel (⌥⌘K / Ctrl+Alt+K)
2. Look for your collection name (e.g., "primitives", "semantic")
3. Check if correct mode is selected
4. Expand collections to see variables

**Check Console:**
1. Plugins → Development → Open Console
2. Look for import statistics
3. Should show: "Variables created: X, Collections created: Y"

**Verify in Code:**
- Check `$figmaCollectionId` in tokens.json
- Verify collection names match exactly
- Check for typos in collection/mode names

---

### 7. Alias Resolution Not Working

#### Symptoms
- Variables created but show raw values
- References like `{color.primary.500}` not resolved
- Circular reference errors

#### Causes
1. Alias tokens imported before their references
2. Circular dependencies in tokens
3. Invalid alias syntax

#### Solutions

**Check Alias Syntax:**
✅ Correct: `"$value": "{color.primary.500}"`
❌ Wrong: `"$value": "${color.primary.500}"`
❌ Wrong: `"$value": "color.primary.500"`

**Check Import Order:**
The plugin imports in this order:
1. Primitives (base values)
2. Semantic (references primitives)
3. Component (references semantic)

**Verify No Circular References:**
```
color.primary → color.base → color.primary (❌ CIRCULAR!)
```

---

## Debug Mode

### Enable Verbose Logging

**In code.ts:**
```typescript
// Add at the top of loadTokensFromGit function
console.log('=== GIT LOAD DEBUG ===');
console.log('URL:', gitUrl);
console.log('Branch:', gitBranch);
console.log('Token Source:', tokenSource);
```

**In browser console:**
1. Open: Plugins → Development → Open Console
2. Check "Preserve log" to keep messages
3. Look for error messages in red
4. Copy/paste relevant errors for debugging

### Check Network Requests

**In browser DevTools:**
1. Open DevTools (F12)
2. Go to Network tab
3. Filter by "github"
4. Look for failed requests (red)
5. Check response status codes:
   - 200: Success
   - 401: Unauthorized (bad token)
   - 403: Forbidden (rate limit or permissions)
   - 404: Not found (wrong URL/branch)

---

## Getting Help

### Before Reporting Issues

**Collect This Information:**
1. Figma version (Help → About Figma)
2. Plugin version (check CHANGELOG.md)
3. Operating System (macOS/Windows/Linux)
4. Error message (full text from console)
5. Steps to reproduce
6. Repository structure (if public, share URL)

### Where to Get Help

1. **Check Documentation:**
   - README.md - General usage
   - TECHNICAL.md - Implementation details
   - CHANGELOG.md - Recent changes

2. **Check Console:**
   - Most errors appear in browser console
   - Look for stack traces
   - Note any CSP violations

3. **GitHub Issues:**
   - Search existing issues first
   - Create new issue with template
   - Include all information from "Before Reporting Issues"

---

## Performance Tips

### Optimize Large Repositories

1. **Use Token Source Filter:**
   - Select only `tokens-light` OR `tokens-dark`
   - Don't load both at once

2. **Use Selective Import:**
   - Uncheck collections you don't need
   - Import primitives first, then semantic, then components

3. **Split Large Token Files:**
   - Keep files under 500 lines
   - Split by category (color, dimension, typography)

4. **Use GitHub Token:**
   - Increases rate limit significantly
   - Speeds up API requests
   - Required for private repos

### Monitor Performance

**Check Import Time:**
```
Start: Loading tokens from Git...
Progress: 10% - 20% - 40% - 70% - 90% - 100%
Complete: Tokens loaded (X seconds)
```

**Normal Times:**
- Small repo (< 50 files): 3-5 seconds
- Medium repo (50-100 files): 7-10 seconds
- Large repo (> 100 files): 12-20 seconds

**If Slower:**
- Check network speed
- Try with GitHub token
- Check GitHub API status
- Try during off-peak hours

---

## Keyboard Shortcuts

- **Rerun Plugin**: ⌥⌘P (Option+Cmd+P)
- **Open Console**: Plugins → Development → Open Console
- **Variables Panel**: ⌥⌘K (Option+Cmd+K)
- **Reload Figma**: ⌘R (Cmd+R)

---

## Still Having Issues?

If none of these solutions work:

1. Try the "nuclear option":
   ```bash
   # Clean rebuild
   rm -rf node_modules dist
   npm install
   npm run build
   ```

2. Restart Figma completely

3. Check Figma Plugin API status

4. Create a minimal test case and share it
