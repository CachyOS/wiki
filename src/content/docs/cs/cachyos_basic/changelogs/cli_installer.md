---
title: CLI instalátor
description: Seznamy změn CLI instalátoru
ai_translated: true
---
# 0.8.4

## Funkce ✨

- **Vylepšená práce s oddíly:** Způsob, jakým instalátor pracuje s oddíly, prošel rozsáhlým refaktoringem a vylepšeními, což vede k vyšší přesnosti a spolehlivosti.
- **Generování parametrů jádra:** Instalátor nyní automaticky generuje parametry jádra na základě zjištěného rozložení oddílů.
- **Rozšířená knihovna `gucc`:** Knihovna `gucc` byla výrazně rozšířena a nyní zahrnuje možnosti instalace a konfigurace refind.

## Údržba 🧹

- **Clang-Format a Clang-Tidy:** Konzistence a kvalita kódu byly vylepšeny použitím nástrojů clang-format a clang-tidy.
- **Refaktoring pomocí string_view:** Několik částí kódu nyní využívá literály string_view pro vyšší výkon a lepší čitelnost.
- **Implementace doctest:** C aserce byly nahrazeny knihovnou doctest pro robustnější a informativnější testování.
- **Refaktorované testy:** Testovací sady byly refaktorovány pro lepší přehlednost a udržovatelnost.
- **Zpracování refind v knihovně `gucc`:** Kód související s refind byl refaktorován a přesunut do knihovny `gucc` pro lepší organizaci a udržovatelnost.

## Opravy chyb 🐛

- **Detekce Btrfs subvolumů:** Byly vyřešeny problémy s detekcí stávajících btrfs subvolumů.
- **Přesnost informací o oddílech:** Byla provedena vylepšení pro zajištění přesného shromažďování a zobrazování informací o oddílech.
- **Kořenový přípojný bod pro refind:** Byla opravena chyba ovlivňující kořenový přípojný bod používaný zavaděčem refind.
- **Detekce UUID:** Byl vylepšen proces detekce UUID oddílů během inicializace.
- **Opravy sestavení Meson:** Byly vyřešeny problémy vznikající během procesu sestavení pomocí meson.
- **Připojování Btrfs subvolumů:** Byla opravena chyba související s přidáváním btrfs subvolumů ve vývojových prostředích.
- **Rootfs v předdefinovaných konfiguracích:** Byl vyřešen problém s rootfs u schémat oddílů odvozených z předdefinovaných konfigurací.
- **Připojení refind pro čtení i zápis:** Bylo zajištěno, že refind připojuje potřebné oddíly s oprávněními pro čtení i zápis.

# 0.8.3

## Údržba 🧹

- Aktualizována závislost CPR na novější verzi pro lepší funkčnost.
- Knihovně CTRE (Compile Time Regular Expressions) bylo explicitně nastaveno používání standardu C++23 pro konzistenci a potenciální zvýšení výkonu.
- Zvýšen časový limit kontroly připojení v sekci nástrojů, aby vyhovoval případným prodlevám sítě nebo pomalým odpovědím.

# 0.8.2

## Opravy 🐛

- Vyřešen problém, kdy knihovna „gucc“ nesprávně zpracovávala přípojné body btrfs subvolumů.
- Vylepšeno zpracování různých stavů připojení btrfs subvolumů v knihovně „gucc“.

## Údržba 🧹

- Opraven překlep v souboru README a aktualizovány informace o verzi.

# 0.8.1

## Opravy 🐛

- Vyřešen problém, kdy byly repozitáře ISA nesprávně povoleny v Oracle VM.
- Vyřešeny nekonzistence ve stylu příkazů pro lepší uživatelský komfort.

## Údržba 🧹

- Odstraněna zbytečná logika mikrokódu (ucode) související s refind, což zjednodušilo kódovou základnu.

# 0.8.0

## Funkce ✨

- Přidán parser pro síťové profily balíčků.
- Zavedena možnost načítat balíčky prostředí ze souboru TOML zpracovávaného knihovnou gucc.
- V knihovně gucc implementována pomocná funkce pro stahování souborů z URL 📥.
- Přidána podpora načítání síťových profilů z URL se záložním mechanismem v rámci knihovny gucc.
- Integrována instalace síťových profilů s binární distribucí.
- Připojování zadaných oddílů a logika detekce byly přesunuty do knihovny gucc.
- Zavedena funkce `utils::exec_checked` pro bezpečnější spouštění externích příkazů.

## Vylepšení ✅

- Rozšířeno pokrytí testy pro funkčnost crypttab v knihovně gucc 🧪.
- Vylepšeno protokolování v knihovně gucc správným nastavením loggeru.
- **Aktualizována verze C++ na C++23** ⬆️.
- Kódová základna byla refaktorována tak, aby využívala funkce C++23, jako jsou `std::ranges` a `contains`, pro lepší čitelnost a efektivitu.
- Různé komponenty byly refaktorovány pro využívání `utils::exec_checked`.

## Opravy 🐛

- Vyřešen problém s pevně zapsanými typy knihoven v knihovně gucc.
- Doplněna chybějící implementace loggeru a hlavičkový soubor v knihovně gucc.
- Povolena knihovna CPR pro sestavení mimo vývojová prostředí.
- Opraven proces statického sestavení.
- Vyřešeny problémy zavedené v commitu [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Opraveny chyby kompilace v komponentě TUI.
- Opraven problém se závislostmi, kdy závislost knihovny FTXUI na range-v3 nebyla veřejná.

## Údržba 🧹

- Aktualizovány kontroly CI, procesy sestavení a opraveny související problémy.
- Odstraněna vrácená instalace síťových profilů spolu s binární distribucí.
- Refaktorován a vyčištěn kód v různých komponentách: TUI, utils, chwd_profiles, user a tests.
- Ze závislostí instalátoru byla odstraněna nepoužívaná knihovna range-v3.
- Aktualizován soubor README.
