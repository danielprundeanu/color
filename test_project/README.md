# Test Project - Token Testing Workflow

## 📋 Descriere

Acest folder este folosit pentru testarea rapidă a tokenilor. App-ul exportă `tokens.json` care poate fi încărcat direct în Figma Plugin pentru testare.

## 🚀 Workflow Rapid

### 1. Generează tokens.json din App
- Deschide app-ul principal de generare culori
- Click pe **"Export Tokens"**
- Salvează ZIP-ul

### 2. Extrage tokens.json
- Deschide ZIP-ul
- Copiază `tokens.json` din rădăcina ZIP-ului în acest folder
- Sau lasă-l oriunde și încarcă-l direct în plugin

### 3. Import în Figma
- Deschide Figma Plugin "EKO Token Sync"
- Tab "Import"
- Click pe input file și selectează `tokens.json`
- Selectează temele dorite (ex: primitives > default)
- Click "Create Variables in Figma"

## 📝 Structura tokens.json

Fișierul exportat are formatul Token Studio:

```json
{
  "$themes": [
    {
      "id": "primitives-default-theme",
      "name": "default",
      "group": "primitives",
      "selectedTokenSets": {
        "primitives/color": "enabled"
      }
    }
  ],
  "primitives/color": {
    "primary.10": {
      "$type": "color",
      "$value": "#E8ECFF"
    },
    "primary.20": {
      "$type": "color",
      "$value": "#D1DAFE"
    }
    // ... toate culorile
  }
}
```
