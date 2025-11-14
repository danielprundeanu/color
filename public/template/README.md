# Template Folder

Acest folder conține tokenii de culoare care se încarcă automat când:
1. Deschizi aplicația pentru prima dată
2. Click pe butonul "New Project"

## Structură

```
template/
├── tokens-light/
│   ├── primitives/
│   │   └── color.json     # Tokeni primitivi pentru tema light
│   └── semantic/
│       └── color.json     # Tokeni semantici pentru tema light
└── tokens-dark/
    ├── primitives/
    │   └── color.json     # Tokeni primitivi pentru tema dark
    └── semantic/
        └── color.json     # Tokeni semantici pentru tema dark
```

## Cum se folosește

### Pentru a schimba template-ul default:

1. Copiază proiectul tău în acest folder, păstrând structura de mai sus
2. Asigură-te că fișierele JSON respectă formatul Design Tokens:

**Primitives (color.json):**
```json
{
  "primary": {
    "10": { "$type": "color", "$value": "#FFEDE7" },
    "20": { "$type": "color", "$value": "#FFCCC2" },
    ...
  }
}
```

**Semantic (color.json):**
```json
{
  "bg": {
    "default": {
      "$type": "color",
      "$value": "{grey.130}",
      "$description": "Default page background."
    }
  }
}
```

3. Reîncarcă aplicația - tokenii noi vor fi încărcați automat!

## Note

- Fișierele din acest folder sunt încărcate **la pornirea aplicației**
- Butonul "New Project" va reseta aplicația la acești tokeni
- Poți edita fișierele JSON direct și reîncărca pagina pentru a vedea schimbările
- Dacă template-ul lipsește sau are erori, aplicația va folosi paletele implicite hardcodate
