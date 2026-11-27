---
title: CLI-installatieprogramma
description: Changelogs CLI-installatieprogramma
ai_translated: true
---
# 0.8.4

## Functies ✨

- **Verbeterde afhandeling van partities:** Er zijn aanzienlijke refactorings en verbeteringen doorgevoerd in de manier waarop het installatieprogramma partities afhandelt, wat leidt tot betere nauwkeurigheid en betrouwbaarheid.
- **Generatie van kernelparameters:** Het installatieprogramma genereert nu automatisch kernelparameters op basis van het gedetecteerde partitieschema.
- **Verbeterde `gucc`-bibliotheek:** De `gucc`-bibliotheek is aanzienlijk verbeterd en omvat nu ook de installatie en configuratie van refind.

## Onderhoud 🧹

- **Clang-Format en Clang-Tidy:** De consistentie en kwaliteit van de codebase zijn verbeterd door clang-format en clang-tidy toe te passen.
- **Refactoring met string views:** Verschillende delen van de codebase gebruiken nu string_view-literals voor betere prestaties en leesbaarheid.
- **Implementatie van doctest:** C-asserts zijn vervangen door doctest voor robuustere en informatievere tests.
- **Gerefactorde tests:** Testsuites zijn gerefactord voor duidelijkheid en onderhoudbaarheid.
- **Afhandeling van refind in `gucc`:** Code gerelateerd aan refind is gerefactord en verplaatst naar de `gucc`-bibliotheek voor een betere organisatie en onderhoudbaarheid.

## Bugfixes 🐛

- **Detectie van Btrfs-subvolumes:** Problemen met het detecteren van bestaande btrfs-subvolumes zijn opgelost.
- **Nauwkeurigheid van partitie-informatie:** Er zijn verbeteringen doorgevoerd om ervoor te zorgen dat partitie-informatie nauwkeurig wordt verzameld en weergegeven.
- **Root mount point voor refind:** Een bug die het root mount point van refind beïnvloedde, is opgelost.
- **UUID-detectie:** Het proces voor het detecteren van partitie-UUID's tijdens de initialisatie is verbeterd.
- **Meson-buildfixes:** Problemen tijdens het meson-buildproces zijn verholpen.
- **Toevoegen van Btrfs-subvolumes:** Een bug met betrekking tot het toevoegen van btrfs-subvolumes in ontwikkelomgevingen is opgelost.
- **Rootfs in vooraf gedefinieerde configuraties:** Een probleem met de rootfs van partitieschema's die zijn afgeleid van vooraf gedefinieerde configuraties is opgelost.
- **Read-write mounten bij refind:** Er wordt nu voor gezorgd dat refind de benodigde partities met lees- en schrijfrechten mount.

# 0.8.3

## Onderhoud 🧹

- De CPR-afhankelijkheid bijgewerkt naar een nieuwere versie voor betere functionaliteit.
- CTRE (Compile Time Regular Expressions library) expliciet opgedragen de C++23-standaard te gebruiken voor consistentie en mogelijke prestatieverbeteringen.
- De time-out voor de verbindingscontrole in de utilities-sectie verhoogd om mogelijke netwerkvertragingen of trage reacties op te vangen.

# 0.8.2

## Fixes 🐛

- Een probleem opgelost waarbij "gucc" btrfs-subvolume-mountpoints niet correct afhandelde.
- "gucc" verbeterd zodat het verschillende mountstatussen van btrfs-subvolumes kan afhandelen.

## Onderhoud 🧹

- Een typfout in het README-bestand verholpen en de versie-informatie bijgewerkt.

# 0.8.1

## Fixes 🐛

- Een probleem opgelost waarbij ISA-repos onterecht werden ingeschakeld op Oracle VM.
- Inconsistenties in de stijl van commando's verholpen voor een betere gebruikerservaring.

## Onderhoud 🧹

- Overbodige ucode-logica gerelateerd aan refind verwijderd, waardoor de codebase is gestroomlijnd.

# 0.8.0

## Functies ✨

- Parser toegevoegd voor netwerkpakketprofielen.
- De mogelijkheid toegevoegd om omgevingspakketten op te halen uit een TOML-bestand dat door gucc wordt geparsed.
- Een hulpfunctie in gucc geïmplementeerd om bestanden van URL's te downloaden 📥.
- Ondersteuning toegevoegd voor het ophalen van netwerkprofielen van een URL met een fallbackmechanisme binnen gucc.
- De installatie van netwerkprofielen geïntegreerd met de binaire distributie.
- Het mounten van opgegeven partities en de detectielogica verplaatst naar gucc.
- `utils::exec_checked` geïntroduceerd voor het veiliger uitvoeren van externe commando's.

## Verbeteringen ✅

- Testdekking voor de crypttab-functionaliteit in gucc verbeterd 🧪.
- Logging in gucc verbeterd door de logger correct in te stellen.
- **C++-versie bijgewerkt naar C++23** ⬆️.
- De codebase gerefactord om C++23-functies zoals `std::ranges` en `contains` te gebruiken voor betere leesbaarheid en efficiëntie.
- Diverse componenten gerefactord om `utils::exec_checked` te gebruiken.

## Fixes 🐛

- Een probleem met hardgecodeerde bibliotheektypes in gucc opgelost.
- Ontbrekende logger-implementatie en headerbestand in gucc toegevoegd.
- De CPR-bibliotheek ingeschakeld voor builds buiten de ontwikkelomgeving.
- Het statische buildproces gerepareerd.
- Problemen verholpen die waren geïntroduceerd in commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Compilatiefouten in de TUI-component opgelost.
- Een afhankelijkheidsprobleem gecorrigeerd waarbij de afhankelijkheid van FTXUI op range-v3 niet publiek was.

## Onderhoud 🧹

- CI-controles en buildprocessen bijgewerkt en gerelateerde problemen opgelost.
- De teruggedraaide installatie van netwerkprofielen naast de binaire distributie verwijderd.
- Code gerefactord en opgeschoond in diverse componenten: TUI, utils, chwd_profiles, user en tests.
- De ongebruikte range-v3-bibliotheek verwijderd uit de afhankelijkheden van het installatieprogramma.
- README-bestand bijgewerkt.
