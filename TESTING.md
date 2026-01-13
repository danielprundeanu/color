# 🧪 Testing Guide - Figma Plugin Token Import

## 📋 Pregătire pentru testare

### 1. Build plugin-ul
```bash
cd figma-plugin
npm run build
```

### 2. Încarcă plugin-ul în Figma
1. Deschide Figma Desktop App
2. Du-te la **Plugins** → **Development** → **Import plugin from manifest**
3. Selectează fișierul `figma-plugin/manifest.json`
4. Plugin-ul "EKO Token Sync" va apărea în lista de plugin-uri

## 🎯 Testare Scenario 1: Import tokens.json din App Export

### Obiectiv
Să verifici workflow-ul complet: App → Export → Upload → Figma Variables

### Pași

1. **Generează tokens.json**
   - Deschide app-ul de generare culori
   - Click pe **"Export Tokens"**
   - Salvează ZIP-ul pe desktop
   - Extrage ZIP-ul și localizează `tokens.json` în rădăcină

2. **Deschide plugin-ul**
   - În Figma: **Plugins** → **EKO Token Sync**
   - Asigură-te că ești pe tab-ul "Import"

3. **Încarcă tokens.json**
   - Click pe input file (zona cu text "Choose a file...")
   - Selectează fișierul `tokens.json` extras din ZIP
   - Așteaptă să se încarce

4. **Verifică temele încărcate**
   - Ar trebui să vezi un panel cu toate temele disponibile
   - Vezi colecția **"primitives"** cu modul **"default"**
   - Vezi alte colecții dacă există în export

5. **Selectează teme**
   - Bifează checkbox-ul pentru **"primitives > default"**
   - Poți bifa și altele dacă vrei

6. **Creează variabilele**
   - Click pe **"Create Variables in Figma"**
   - Așteaptă confirmarea (mesaj de succes)

7. **Verifică în Figma**
   - Deschide **Local variables** panel în Figma (Resources → Local Variables)
   - Caută colecția **"primitives"**
   - Verifică că există variabilele:
     - `primary.10`, `primary.20`, ..., `primary.130`
     - `secondary.10`, `secondary.20`, ..., `secondary.130`
     - `grey.10`, `grey.20`, ..., `grey.130`
     - etc.

### ✅ Criterii de succes
- [x] Fișierul `tokens.json` se încarcă fără erori
- [x] Temele se afișează corect în UI
- [x] Colecția "primitives" este creată în Figma
- [x] Modul "default" există în colecție
- [x] Toate variabilele de culoare sunt create cu valori corecte

## 🎯 Testare Scenario 2: Suprascrie variabile existente

### Obiectiv
Să modifici culorile în app și să verifici că variabilele existente se actualizează fără duplicate.

### Pași

1. **Modifică culorile în app**
   - În app, schimbă valoarea pentru `primary.10` (ex: fă-l mai închis)
   - Export din nou: **"Export Tokens"**
   - Salvează noul ZIP

2. **Extrage noul tokens.json**
   - Extrage ZIP-ul și localizează noul `tokens.json`

3. **Reîncarcă în plugin**
   - În plugin, click pe input file
   - Selectează noul `tokens.json`

4. **Importă din nou**
   - Bifează **"primitives > default"**
   - Click **"Create Variables in Figma"**

5. **Verifică actualizarea**
   - Deschide **Local variables** în Figma
   - Găsește variabila `primary.10`
   - Verifică că valoarea este noua culoare

### ✅ Criterii de succes
- [x] Variabila `primary.10` s-a actualizat cu noua valoare
- [x] Componentele care folosesc această variabilă s-au actualizat automat
- [x] Nu s-au creat variabile duplicate (ex: `primary.10 (copy)`)
- [x] Mesaj în console: "Variable 'primary.10' updated in mode..."

## 🎯 Testare Scenario 3: Import multiple teme

### Obiectiv
Să importi mai multe colecții de tokeni simultan.

### Pași

1. **Exportă tokens cu multiple colecții**
   - În app, asigură-te că ai atât primitives cât și semantic tokens
   - Export: **"Export Tokens"**

2. **Încarcă tokens.json**
   - În plugin, selectează fișierul `tokens.json`

3. **Selectează multiple teme**
   - Bifează **"primitives > default"**
   - Bifează **"semantic > default"**
   - Poți bifa și alte colecții dacă există

4. **Creează variabilele**
   - Click **"Create Variables in Figma"**

5. **Verifică în Figma**
   - Caută colecția **"primitives"**
   - Caută colecția **"semantic"**
   - Verifică că ambele au modul "default"
   - Verifică tokenii semantici: `bg.default`, `surface.strong`, `on.surface.head`, etc.

### ✅ Criterii de succes
- [x] Ambele colecții există
- [x] Tokenii primitivi sunt corect importați
- [x] Tokenii semantici sunt corect importați
- [x] Tokenii semantici care referă primitivi au referințele corecte (alias-uri)

## 🎯 Testare Scenario 4: Error Handling - Invalid File

### Obiectiv
Să testezi validarea și mesajele de eroare.

### Pași

1. **Test fișier fără $themes**
   - Creează un fișier JSON simplu fără `$themes`:
     ```json
     {
       "primitives/color": {
         "primary.10": {
           "$type": "color",
           "$value": "#E8ECFF"
         }
       }
     }
     ```
   - Încearcă să-l încarci în plugin

2. **Verifică mesajul de eroare**
   - Ar trebui să vezi: "tokens.json must have a $themes array at root level"
   - Nu ar trebui să crash-uiască pluginul

3. **Test fișier non-JSON**
   - Încearcă să încarci un fișier `.txt` sau alt format
   - Verifică că primești eroare: "Failed to parse tokens.json"

### ✅ Criterii de succes
- [x] Fișierul invalid este detectat
- [x] Mesaje de eroare clare și utile
- [x] Pluginul nu crash-uiește
- [x] Butoanele rămân disabled până la un fișier valid

## 🎯 Testare Scenario 5: Selectare/Deselectare toate

### Obiectiv
Să testezi funcționalitatea de select all / deselect all.

### Pași

1. **Încarcă tokens.json valid**

2. **Click "Select All"**
   - Toate checkbox-urile ar trebui să fie bifate

3. **Click "Deselect All"**
   - Toate checkbox-urile ar trebui să fie debifate

4. **Selectează manual câteva**
   - Bifează 2-3 teme manual

5. **Creează variabilele**
   - Doar temele selectate ar trebui importate

### ✅ Criterii de succes
- [x] "Select All" bifează toate temele
- [x] "Deselect All" debifează toate temele
- [x] Doar temele selectate manual sunt importate
- [x] Count-ul de teme selectate este corect

## 🐛 Troubleshooting

### Eroarea: "tokens.json must have a $themes array"

**Cauză**: Fișierul încărcat nu are structura Token Studio

**Soluție**:
- Asigură-te că exporti din app, nu manual
- Verifică că `tokens.json` are la rădăcină: `{"$themes": [...]}`
- Nu folosi fișierele individuale din `test_project/`

### Eroarea: "Failed to parse tokens.json"

**Cauză**: Fișierul JSON este corupt sau invalid

**Soluție**:
- Verifică că ai extras corect din ZIP (nu este corupt)
- Testează JSON-ul cu un validator online
- Asigură-te că ai selectat fișierul `.json`, nu `.txt`

### Variabilele nu se actualizează

**Cauză**: Posibil cache sau referințe incorecte

**Soluție**:
1. Închide și redeschide plugin-ul
2. Dacă problema persistă, șterge colecțiile manual din Figma
3. Reimportă tokenii
4. Verifică console-ul browser-ului pentru erori (Click dreapta → Inspect)

### Plugin-ul nu apare în Figma

**Cauză**: Nu ai build-uit sau nu l-ai importat corect

**Soluție**:
```bash
cd figma-plugin
npm run build
```
Apoi:
- **Plugins** → **Development** → **Import plugin from manifest**
- Selectează `figma-plugin/manifest.json`

### File input nu funcționează

**Cauză**: Browser-ul blochează accesul la fișiere

**Soluție**:
- Verifică că rulezi plugin-ul în Figma Desktop App (nu în browser)
- Asigură-te că ai permisiuni de citire pentru fișier
- Testează cu un fișier din alt location

## 📊 Checklist testare completă

- [ ] Scenario 1: Import tokens.json din export
- [ ] Scenario 2: Suprascrie variabile existente
- [ ] Scenario 3: Import multiple teme simultan
- [ ] Scenario 4: Error handling - fișiere invalide
- [ ] Scenario 5: Select/Deselect all
- [ ] Verificat că nu apar erori în consolă (DevTools)
- [ ] Verificat că variabilele au valorile corecte
- [ ] Verificat că referințele (alias-uri) sunt păstrate
- [ ] Verificat că componentele se actualizează automat
- [ ] Testat reload plugin după modificări

## 🎓 Next Steps

După testare:
1. **Totul funcționează** → Documentează workflow-ul final pentru echipă
2. **Apar erori** → Vezi Troubleshooting sau raportează issue
3. **Feedback UX** → Colectează feedback de la designeri
4. **Performance** → Testează cu seturi mari de tokeni (500+)
5. **Production** → Deploy plugin pentru toată echipa

## 📝 Workflow Final

```
┌─────────────────┐
│   Color App     │  Generează culori și tokeni
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Export Tokens   │  Click "Export Tokens" → ZIP
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Extract ZIP     │  Extrage tokens.json
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Figma Plugin   │  Upload tokens.json
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Select Themes   │  Bifează temele dorite
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│Create Variables │  Creează/actualizează în Figma
└─────────────────┘
```
