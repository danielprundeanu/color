# 🚀 EKO Token Sync Plugin - Setup Guide

## Quick Start (5 minute)

### 1. Install Dependencies

```bash
cd figma-plugin
npm install
```

### 2. Build Plugin

```bash
npm run build
```

### 3. Load in Figma Desktop

1. Open **Figma Desktop** (plugin-ul nu merge în browser!)
2. Click pe meniu → **Plugins** → **Development** → **Import plugin from manifest...**
3. Selectează fișierul `manifest.json` din folder-ul `figma-plugin/`
4. Plugin-ul apare în Plugins → Development → **EKO Token Sync**

---

## 📖 How to Use

### 🟩 IMPORT: Git → Figma

**Scenariul 1: Import din JSON copiat**

1. Deschide plugin-ul în Figma
2. Tab **Import**
3. Copiază conținutul din `tokens-light/` sau rulează:
   ```bash
   node generate-sample-tokens.js
   ```
4. Paste JSON-ul în textarea
5. Bifează opțiunile:
   - ✅ Update Color/Text Styles
   - ✅ Create missing variables
   - ⬜ Remove deprecated (optional)
6. Click **Import Tokens**

**Rezultat:**
- Variabile create în Figma
- Collections organizate: Primitives, Semantic, Components
- Modes pentru Light/Dark
- Styles actualizate automat

**Scenariul 2: Import direct din Git** (WIP - requires GitHub API token)

1. Add GitHub token în **Settings** tab
2. Enter repo URL: `https://github.com/danielprundeanu/eko-v4`
3. Branch: `stake`
4. Click **Import Tokens**

---

### 🟥 EXPORT: Figma → Git

**Scenariul 1: Export toate token-urile**

1. Tab **Export**
2. Selectează ce exportezi:
   - ✅ Primitives
   - ✅ Semantic
   - ✅ Components
3. Alege format: **Token Studio** (default)
4. Click **Export All Tokens**
5. JSON-ul apare în textarea
6. Click **Download JSON**

**Scenariul 2: Export doar componentă selectată**

1. Selectează o componentă în Figma (ex: Button)
2. Tab **Export**
3. Click **Export Selection Only**
4. Primești JSON doar cu token-ii folosiți în acea componentă

**Output example:**
```json
{
  "component": {
    "button": {
      "primary": {
        "bg.default": {
          "$type": "color",
          "$value": "{primary.fill.default}"
        },
        "text.default": {
          "$type": "color",
          "$value": "{white.100}"
        }
      }
    }
  }
}
```

---

### 📌 ANALYZE: Vezi ce token-i folosește o componentă

**Use case:** Vrei să vezi exact ce variabile sunt legate la Button

1. Selectează componenta în Figma
2. Tab **Analyze**
3. Click **Analyze Selection**

**Output:**
```
Button/Primary
├─ fill: {button.primary.bg.default}
├─ stroke: {button.primary.border.default}
├─ text: {button.primary.text.default}
└─ padding: {button.primary.padding.x}
```

**Super util pentru:**
- Debugging
- Documentation
- Export selective
- Token cleanup

---

### 🔍 COMPARE: Găsește diferențe Git vs Figma

1. Tab **Import**
2. Paste JSON din Git
3. Click **Compare with Git**

**Rezultat:**
- 🔴 Missing in Figma: 23 tokens
- 🟡 Different values: 5 tokens
- 🟢 Deprecated: 2 tokens
- 🆕 New in Figma: 8 tokens

---

### 🎨 BRAND GENERATOR: Auto-generare paletă

**Use case:** Client nou, vrei să creezi rapid toate token-ii

1. Tab **Settings** → **Brand Generator**
2. Alege culorile de bază:
   - Primary: #0066FF
   - Accent: #FF6B00
   - Neutral: #202124
3. Click **Generate Brand Tokens**

**Rezultat automat:**
- Primary scale: 10, 20, 30...130
- Semantic tokens: surface, on.surface, borders
- Component tokens: button, card, input

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   Git Repo (tokens-light/, tokens-dark/)       │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 │ IMPORT
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│        Figma Plugin (EKO Token Sync)           │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │  1. Parse JSON                            │  │
│  │  2. Create Variable Collections          │  │
│  │  3. Map tokens → variables                │  │
│  │  4. Resolve aliases {token.ref}           │  │
│  │  5. Update Color/Text/Effect Styles       │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│      Figma Variables + Collections             │
│                                                 │
│  • Primitives Collection                       │
│  • Semantic - Light Collection (mode: light)   │
│  • Semantic - Dark Collection (mode: dark)     │
│  • Component - button Collection               │
│  • Component - card Collection                 │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 │ Bind to components
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│         Figma Components / Frames              │
│                                                 │
│  • Button uses {button.primary.bg.default}     │
│  • Card uses {card.default.bg}                 │
│  • Text uses {on.surface.head}                 │
│                                                 │
└────────────────┬────────────────────────────────┘
                 │
                 │ EXPORT
                 ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│   Token Studio JSON (ready for Git commit)     │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 🔑 Key Features Explained

### Variable Map (Internal)

Plugin-ul ține un **map** intern:

```typescript
variableMap = {
  "123abc": {
    tokenPath: "button.primary.bg.default",
    tokenName: "default",
    collectionName: "Component - button",
    modeName: "light"
  },
  "456def": {
    tokenPath: "primary.100",
    tokenName: "100",
    collectionName: "Primitives",
    modeName: "default"
  }
}
```

**De ce e important:**
- Când analizezi o componentă, plugin-ul poate găsi instant token-ul folosit
- La export, reconstituie exact structura JSON originală
- La compare, identifică ce lipsește sau e diferit

### Alias Resolution

Plugin-ul rezolvă automat referințele:

```json
{
  "button.primary.bg.default": {
    "$value": "{primary.fill.default}"
  }
}
```

↓ rezolvă în ↓

```json
{
  "primary.fill.default": {
    "$value": "{primary.100}"
  }
}
```

↓ rezolvă în ↓

```json
{
  "primary.100": {
    "$value": "#0066FF"
  }
}
```

**În Figma:** `button.primary.bg.default` → VARIABLE_ALIAS → `primary.fill.default` → VARIABLE_ALIAS → `primary.100` → VALUE `#0066FF`

---

## 🎯 Real-World Workflows

### Workflow 1: Designer Workflow

**Daily work:**
1. Deschizi Figma
2. Modifici variabile (ex: primary.100 = #FF0000)
3. End of day: Export → Download JSON
4. Commit JSON în Git

**Plugin handling:**
- Export păstrează toate referințele intacte
- JSON e gata pentru Style Dictionary
- Token Studio poate importa direct

### Workflow 2: Developer Workflow

**New feature branch:**
1. Git pull latest tokens
2. Deschizi Figma
3. Import tokens din JSON
4. Designezi componentele noi
5. Export selection → commit doar token-ii noi

**Plugin handling:**
- Import merge tokens cu cei existenți
- Nu suprascrie dacă nu vrei
- Export selective = doar ce ai modificat

### Workflow 3: Multi-Brand

**Bet365 Red vs Green:**
1. Import base tokens (stake branch)
2. Generate Brand → Primary: #DC0714 (red)
3. Export → `tokens-bet365-red.json`
4. Switch → Generate Brand → Primary: #00A651 (green)
5. Export → `tokens-bet365-green.json`

**Plugin handling:**
- Creează separate collections
- Păstrează structura
- Export per-brand clean

---

## 🐛 Troubleshooting

### "Can't open plugin"
- ✅ Folosești Figma Desktop (nu browser)
- ✅ Plugin-ul e în Development mode
- ✅ `manifest.json` e valid

### "Variables not created"
- ✅ JSON format corect (validate cu jsonlint.com)
- ✅ Token structure respectă format-ul
- ✅ Check console pentru errors

### "Export is empty"
- ✅ Ai variabile locale în fișier
- ✅ Nu sunt toate în library-uri externe
- ✅ Variabilele au values setate

### "Aliases not resolving"
- ✅ Format corect: `{token.name}` nu `${token.name}`
- ✅ Token referențiat există în primitives
- ✅ Import order: primitives → semantic → component

---

## 📚 Next Steps

1. **Test cu sample tokens:**
   ```bash
   node generate-sample-tokens.js
   ```

2. **Import în Figma și vezi cum se creează collections**

3. **Modifică o culoare în Figma → Export → compare JSON-ul**

4. **Selectează Button → Analyze → vezi token-ii**

5. **Generează un brand nou cu Brand Generator**

---

## 💡 Pro Tips

**Tip 1:** Folosește **Compare** înainte de Import să vezi ce se va schimba

**Tip 2:** **Export Selection** e perfect pentru component documentation

**Tip 3:** **Analyze** e lifesaver pentru debugging "why this color?"

**Tip 4:** **Brand Generator** e excelent pentru quick mockups/prototypes

**Tip 5:** Keep `variableMap` prin localStorage pentru persistență între sesiuni (TODO)

---

## 🚧 Roadmap

- [ ] GitHub API direct integration
- [ ] Auto-sync on file save
- [ ] Token validation & linting
- [ ] Conflict resolution UI
- [ ] Batch operations
- [ ] Token usage heatmap
- [ ] Migration wizard (v3 → v4)
- [ ] VS Code extension companion

---

**Questions?** Check `code.ts` pentru implementation details.

**Want to contribute?** PRs welcome! 🎉
