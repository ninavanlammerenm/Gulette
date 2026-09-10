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

## Taal — Hazaragi, geen Iraans Farsi

Zie het geheugenbestand over Hazaragi vs. Iraans Farsi (verplichte woordenlijst, voornaamwoorden, bezitsvorm). Controleer bij elke nieuwe/aangepaste Hazaragi-zin dat het echt Hazaragi Afghaans is, nooit Iraans/Perzisch Farsi.
