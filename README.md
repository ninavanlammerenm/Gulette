# Gulette 🐇

Een Progressive Web App (PWA) om Hazaragi te leren, met een Nederlandstalige interface.

---

## Wat is Gulette?

Gulette is een interactieve taalapp om Hazaragi te leren vanuit het Nederlands. De app werkt volledig offline in de browser en slaat je voortgang lokaal op. Er zijn meer dan 52 hoofdstukken met honderden woorden, zinnen en grammaticaoefeningen.

---

## Opstarten

Gulette heeft geen installatie of server nodig. Eenvoudig openen:

1. Download of kloon de repository
2. Open `index.html` in een moderne browser (Chrome, Edge, Firefox, Safari)
3. Klik op **Installeren** (of voeg toe aan beginscherm op mobiel) voor de PWA-ervaring

Voor lokaal ontwikkelen met een server (aanbevolen voor service worker):

```bash
# Python
python -m http.server 8080

# Node (http-server)
npx http-server -p 8080
```

Open dan `http://localhost:8080` in de browser.

---

## Functies

| Functie | Beschrijving |
|---|---|
| 52+ hoofdstukken | Van basiswoorden tot gevorderde grammatica |
| Spaced Repetition (SM-2) | Woorden worden herhaald op het juiste moment |
| 7 oefentypen | Meerkeuze, typen, zinsbouw, volgorde, invullen... |
| XP & levels | Verdien ervaringspunten per les |
| Streak | Dagelijkse studiestreak bijhouden |
| Achievements | 30+ te ontgrendelen prestaties |
| Combo-multiplier | Bonuspunten bij 3+ opeenvolgende goede antwoorden |
| Dagwoord | Elke dag een nieuw woord op het thuisscherm |
| Herhaling per hoofdstuk | 🔁-knop per hoofdstuk voor gerichte review |
| Mastery-grafiek | Overzicht van woordbeheersing per niveau (0–5) |
| Woord-detailmodal | Tik een woord aan voor mastery, volgende herhaling en oefenknop |
| Offline | Werkt zonder internet via service worker |
| Export/import | Voortgang opslaan als JSON-bestand |

---

## Leerpad

De hoofdstukken zijn genummerd en lopen van makkelijk naar moeilijk:

- **ch0** — Overlevingsgids (noodfrasen, altijd beschikbaar)
- **ch1–ch5** — Eerste woorden, familie, gevoel, conversatie, cultuur
- **Grammatica 1** — Basisgrammatica
- **ch6–ch10** — Gevorderd, gezondheid, reizen, feest, expert
- **Grammatica 2** — Werkwoorden
- **ch11–ch15** — Stad, technologie, diaspora, landen, beroepen
- **Grammatica 3** — Gevorderde grammatica
- **ch16–ch20** — Natuur, gezondheid, cultuur, eten, gevoelens
- **Grammatica 4** — Modale werkwoorden
- **ch21–ch29** — Cijfers, kleding, huis, landbouw, verhalen...
- **ch30–ch52** — Thematische en gevorderde hoofdstukken, incl. Grammatica 5 & 6

Elk hoofdstuk moet worden voltooid voordat het volgende wordt ontgrendeld.

---

## Oefentypen

| Type | Uitleg |
|---|---|
| `intro` | Nieuw woord met uitspraak en culturele tip |
| `mc_nl` | Hazaragi woord → kies de Nederlandse betekenis |
| `mc_hz` | Nederlandse betekenis → kies het Hazaragi woord |
| `cloze` | Vul het ontbrekende woord in een zin in |
| `wb` | Zin samenstellen door woorden in de juiste volgorde te plaatsen |
| `order` | Vertaal een Nederlandse zin naar Hazaragi (met losse woordtegels) |
| `type` | Typ het Hazaragi woord over vanuit het Nederlands |

---

## Spaced Repetition

De app gebruikt een variant op het SM-2-algoritme:

- Elk woord heeft een **mastery-niveau** van 0 tot 5
- Correct → mastery omhoog, volgend herhalingsinterval groeit
- Fout → mastery omlaag, snelle herhaling (10 min of 1 uur)
- Na 3+ opeenvolgende successen groeit het interval extra via de *ease factor*
- **Dagelijkse herhaling**: openstaande reviews + woorden met laag mastery

---

## Bestandsstructuur

```
index.html      Hoofd-HTML met alle schermen
data.js         Alle lesinhoud (CHAPTERS, ACHVS, PRONUN_TIPS)
state.js        Spelerstatus, SM-2 algoritme, achievements
lesson.js       Lesmotor en oefentypes
quiz.js         Ovhoring (dagelijkse herhaling)
ui.js           Thuisscherm, woordenlijst, profielscherm
app.js          Event delegation en opstarten
audio.js        Web Audio API (piepjes, geen spraak)
style.css       Alle stijlen
sw.js           Service worker voor offline gebruik
manifest.json   PWA-manifest
```

---

## Voortgang opslaan

Voortgang wordt automatisch opgeslagen in `localStorage` onder de sleutel `gulette_v3`.

Via het profielscherm kun je:
- **Exporteren** — download je voortgang als `.json`-bestand
- **Importeren** — laad een eerder opgeslagen `.json`-bestand
- **Resetten** — verwijder alle voortgang (niet ongedaan te maken)

---

## Technische details

- Puur HTML/CSS/JS — geen frameworks, geen build-stap
- PWA met service worker (offline-first)
- Arabisch schrift (RTL) met uitschakelbare romanisering
- Getest in Chrome, Edge en Firefox op desktop en mobiel
