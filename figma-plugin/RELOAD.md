# 🔄 Reîncărcare Plugin după modificări

Când faci modificări la cod și rebuild-ul este cu succes, trebuie să reîncarci plugin-ul în Figma.

## 📝 Pași pentru reîncărcare

### Opțiunea 1: Reload plugin din Figma (Recomandat)

1. **Deschide plugin-ul** (dacă nu e deja deschis)
   - În Figma: **Plugins** → **Development** → **EKO Token Sync**

2. **Reload plugin-ul** cu shortcut:
   - **macOS**: `⌘ + Option + P`
   - **Windows/Linux**: `Ctrl + Alt + P`

3. **Verifică console-ul**
   - Click dreapta în plugin → **Inspect**
   - Vezi Console pentru erori

### Opțiunea 2: Închide și redeschide

1. Închide plugin-ul (X în colțul din dreapta sus)
2. Redeschide-l: **Plugins** → **Development** → **EKO Token Sync**

### Opțiunea 3: Reimport manifest (Doar dacă celelalte nu funcționează)

1. În Figma: **Plugins** → **Development** → **Import plugin from manifest**
2. Selectează din nou `manifest.json` din folderul `figma-plugin/`

## ✅ Verificare că plugin-ul s-a încărcat

După reload, verifică în console că vezi:
```
EKO Token Sync Plugin loaded
```

Dacă vezi erori, verifică:
- Build-ul a reușit fără erori
- Fișierul `dist/code.js` există
- Console-ul browser-ului pentru detalii despre erori

## 🐛 Troubleshooting

### Eroare: "Cannot read properties of null"

**Cauză**: JavaScript încearcă să acceseze un element DOM care nu există

**Soluție**:
1. Verifică că toate elementele referențiate în JavaScript există în HTML
2. Rebuild: `npm run build`
3. Reload plugin

### Plugin-ul nu se actualizează

**Cauză**: Cache Figma

**Soluție**:
1. Închide complet Figma
2. Redeschide Figma
3. Reimport manifest

### Build eșuează

**Cauză**: Erori de TypeScript sau sintaxă

**Soluție**:
1. Citește erorile din terminal
2. Corectează erorile
3. Rulează din nou `npm run build`
