# Instructies voor Claude

## Woorden aanpassen / hernoemen

Wanneer een woord (bijv. een woord-ID, sleutel, of naam zoals "namam" -> "name man") wordt aangepast of hernoemd in de data, moet de bijbehorende voortgang/data (bijv. hoe ver de gebruiker is, mastery-score, statistieken) behouden blijven en gekoppeld worden aan het nieuwe woord. Dus: het oude woord wordt in de data vervangen door het nieuwe woord, maar alle voortgangsgegevens die aan dat woord vasthingen blijven intact — niet resetten naar 0 of verloren laten gaan.

**Hoe dit nu technisch werkt:** elk woord in `js/data.js` heeft een permanent `id`-veld (bijv. `ch1_greet1_w0`), los van de Hazaragi-tekst zelf. `js/state.js` houdt voortgang (`S.vocab`) bij op basis van dat `id` en herkent tekstwijzigingen automatisch (`migrateVocabByIds`), waardoor mastery vanzelf meeverhuist naar de nieuwe tekst.
- Verwijder of wijzig het `id`-veld van een bestaand woord NOOIT — daarmee raakt de voortgang van iedereen die dat woord al kent alsnog los.
- Nieuwe woorden moeten een uniek `id` krijgen in hetzelfde formaat: `{chapterId}_{lessonId}_w{index}` (index = positie binnen de `words`-array van die les, 0-based).
- De tekst (`hz`/`tr`/`nl`/`tip`) mag wel vrij aangepast worden — dat is precies waar dit systeem voor gebouwd is.

## Updates live krijgen (service worker)

De app is een PWA met een service worker (`sw.js`) die alle bestanden cachet voor offline gebruik. Bij ELKE wijziging aan `js/`, `css/` of `index.html` moet de `CACHE`-versie in `sw.js` opgehoogd worden (bijv. `gulette-v60` → `gulette-v61`), anders wordt de wijziging niet als "nieuwe versie" herkend.
- `js/app.js` bevat een zelf-updatend mechanisme: de app checkt actief op nieuwe versies (bij openen, in beeld komen, elke 5 min) en herlaadt zichzelf automatisch zodra de `CACHE`-versie verandert. Dit mechanisme zelf niet weghalen of uitschakelen.
- Vergeet nooit de cache-versie te bumpen na een wijziging — zonder die bump denkt de service worker dat er niets veranderd is en blijft de oude versie actief staan, zelfs met het auto-update-mechanisme.
- Op het profielscherm staat ook een zichtbaar versielabel, hardcoded in `js/ui.js` (`_vEl.textContent='vNN · Sakura'`). Dit nummer wordt NIET automatisch afgeleid van `sw.js` — bump het bij elke `CACHE`-bump mee naar hetzelfde nummer, anders loopt het zichtbare versienummer in de app achter en klopt het niet meer met wat er echt draait.

## Taal — Hazaragi, geen Iraans Farsi

Zie het geheugenbestand over Hazaragi vs. Iraans Farsi (verplichte woordenlijst, voornaamwoorden, bezitsvorm). Controleer bij elke nieuwe/aangepaste Hazaragi-zin dat het echt Hazaragi Afghaans is, nooit Iraans/Perzisch Farsi.

## Altijd naar main pushen

De app draait live vanaf `main`. Zet daarom ELKE wijziging ook direct in `main` (na het committen op de werkbranch: `git push origin HEAD:main`, of eerst `main` binnenhalen/mergen als die verder is). Wijzigingen die alleen op een werkbranch staan, komen niet in de app van de gebruiker. Dit is expliciet door de gebruiker gevraagd.

## Bijles-PDF's verwerken (Bijles-tab)

De gebruiker stuurt PDF's van haar Hazaragi-bijles. Elke PDF wordt een preset-bijles in `js/bijlesdata.js` (`BIJLES_PRESET`), met ids `bl{n}_w{index}` — bestaande ids nooit wijzigen of hergebruiken (voortgang hangt eraan; tekst mag wel worden aangepast).
- Het gedrukte deel van de PDF is een sjabloon met fouten; de getypte aantekeningen van de docent zijn leidend. Kleurmarkeringen (geel/roze) betekenen niet automatisch "fout" — alleen aanpassen als de docent er een verbetering bij zet.
- Vaste correcties van de docent: khaar → kaar, sakht/khel → kheili, saba → farda, dinooz → dirooz, erooz → emrooz, yak-kham → yak-kam, ghosna → gushna, rahmat → tashakkur, mukhawum → mi-khayum / mi-khaam.
- Het lesnummer in de PDF klopt vaak niet (les 5 was les 3, les 8 was les 4): nummer opvolgend en meld het.
- Nederlandse betekenissen (`nl`) moeten uniek zijn over alle bijlessen heen (anders verwarrend bij meerkeuze/typen); geen `'`, `"`, `\` of backtick in de teksten.
- **Nieuwe werkwoordsvormen** uit een les toevoegen aan `BJ_VERBS` in `js/bijles.js` (familie + Hazaragi-schrift + Roman-varianten + betekenis), zodat de oefening "Werkwoorden" ze herkent. Controleer na het toevoegen hoeveel bijleszinnen een herkend werkwoord hebben.
- Werkwoordsvormen in `BJ_VERBS` krijgen ook een persoon (`1s` ik, `2s` jij, `3s` hij/zij, `1p` wij, `2p` jullie/u, `3p` zij) — nodig voor de oefening "Vervoegen" (zin omzetten naar andere persoon/tijd).
- **Oefenvragen** uit de PDF (de "unanswered questions") toevoegen aan `BIJLES_QUESTIONS` in `js/bijlesdata.js` (ids `bl{n}_q{index}`), met `expect` = de werkwoordsvorm(en) die in het antwoord horen, plus een voorbeeldantwoord (`ex` Roman, `exhz` Dari). Toegepaste vaste correcties ook hier.
- Twijfelgevallen niet stilletjes aanpassen: markeren en in het antwoord vermelden zodat ze het bij de docent kan navragen.
