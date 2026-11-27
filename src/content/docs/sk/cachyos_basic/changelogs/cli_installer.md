---
title: CLI inštalátor
description: Zoznam zmien CLI inštalátora
ai_translated: true
---
# 0.8.4

## Funkcie ✨

- **Vylepšená práca s partíciami:** Spôsob, akým inštalátor spracováva partície, prešiel výrazným refaktoringom a vylepšeniami, čo vedie k vyššej presnosti a spoľahlivosti.
- **Generovanie parametrov jadra:** Inštalátor teraz automaticky generuje parametre jadra na základe rozpoznanej schémy partícií.
- **Rozšírená knižnica `gucc`:** Knižnica `gucc` bola výrazne rozšírená a teraz zahŕňa aj možnosti inštalácie a konfigurácie zavádzača refind.

## Údržba 🧹

- **Clang-Format a Clang-Tidy:** Konzistentnosť a kvalita zdrojového kódu boli zlepšené použitím nástrojov clang-format a clang-tidy.
- **Refaktoring pomocou string_view:** Niektoré časti kódovej základne teraz využívajú literály string_view pre vyšší výkon a lepšiu čitateľnosť.
- **Implementácia Doctest:** C asserty boli nahradené knižnicou doctest pre robustnejšie a informatívnejšie testovanie.
- **Refaktorované testy:** Testovacie sady boli refaktorované pre lepšiu prehľadnosť a udržiavateľnosť.
- **Správa Refind v knižnici `gucc`:** Kód súvisiaci s Refind bol refaktorovaný a presunutý do knižnice `gucc` pre lepšiu organizáciu a udržiavateľnosť.

## Opravy chýb 🐛

- **Detekcia podzväzkov Btrfs:** Problémy s detekciou existujúcich podzväzkov btrfs boli vyriešené.
- **Presnosť informácií o partíciách:** Boli vykonané vylepšenia na zabezpečenie presného zberu a zobrazovania informácií o partíciách.
- **Koreňový prípojný bod pre Refind:** Bola opravená chyba ovplyvňujúca koreňový prípojný bod používaný zavádzačom refind.
- **Detekcia UUID:** Proces detekcie UUID partícií počas inicializácie bol vylepšený.
- **Opravy zostavenia Meson:** Boli vyriešené problémy vyskytujúce sa počas procesu zostavovania pomocou meson.
- **Pridávanie podzväzkov Btrfs:** Bola opravená chyba súvisiaca s pridávaním podzväzkov btrfs vo vývojových prostrediach.
- **Rootfs v preddefinovaných konfiguráciách:** Bol vyriešený problém s rootfs v schémach partícií odvodených z preddefinovaných konfigurácií.
- **Pripájanie s právami na čítanie a zápis pre Refind:** Zabezpečilo sa, že refind pripája potrebné partície s povoleniami na čítanie a zápis.

# 0.8.3

## Údržba 🧹

- Aktualizovaná závislosť CPR na novšiu verziu pre lepšiu funkčnosť.
- Knižnica CTRE (Compile Time Regular Expressions) bola explicitne nastavená na používanie štandardu C++23 pre konzistentnosť a možné zvýšenie výkonu.
- Zvýšený časový limit kontroly pripojenia v sekcii nástrojov na zohľadnenie možných sieťových oneskorení alebo pomalých odpovedí.

# 0.8.2

## Opravy 🐛

- Vyriešený problém, pri ktorom „gucc“ nesprávne spracovával prípojné body podzväzkov btrfs.
- Vylepšená knižnica „gucc“ na spracovanie rôznych stavov pripojenia podzväzkov btrfs.

## Údržba 🧹

- Opravený preklep v súbore README a aktualizované informácie o verzii.

# 0.8.1

## Opravy 🐛

- Vyriešený problém, pri ktorom boli repozitáre ISA nesprávne povolené na Oracle VM.
- Odstránené nekonzistentnosti v štýle príkazov pre lepší používateľský zážitok.

## Údržba 🧹

- Odstránená nepotrebná logika pre ucode súvisiaca s refind, čím sa zjednodušila kódová základňa.

# 0.8.0

## Funkcie ✨

- Pridaný parser pre sieťové profily balíkov.
- Zavedená možnosť načítania balíkov prostredia zo súboru TOML spracovaného knižnicou gucc.
- Implementovaná pomocná funkcia v knižnici gucc na sťahovanie súborov z adries URL 📥.
- Pridaná podpora na načítanie sieťových profilov z adresy URL so záložným mechanizmom v rámci gucc.
- Integrovaná inštalácia sieťových profilov s binárnou distribúciou.
- Presunutá logika pripájania zadaných partícií a ich detekcie do gucc.
- Zavedená funkcia `utils::exec_checked` pre bezpečnejšie spúšťanie externých príkazov.

## Vylepšenia ✅

- Rozšírené pokrytie testami pre funkcionalitu crypttab v gucc 🧪.
- Vylepšené zaznamenávanie (logovanie) v gucc prostredníctvom vhodného nastavenia loggera.
- **Aktualizovaná verzia C++ na C++23** ⬆️.
- Refaktorovaná kódová základňa na využívanie funkcií C++23, ako sú `std::ranges` a `contains`, pre lepšiu čitateľnosť a efektivitu.
- Refaktorované rôzne komponenty na používanie `utils::exec_checked`.

## Opravy 🐛

- Vyriešený problém s natvrdo zakódovanými typmi knižníc v gucc.
- Vyriešená chýbajúca implementácia loggera a hlavičkový súbor v gucc.
- Povolená knižnica CPR pre zostavenia mimo vývojového prostredia.
- Opravený proces statického zostavovania.
- Vyriešené problémy zavedené v commite [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Opravené chyby kompilácie v komponente TUI.
- Opravený problém so závislosťou, kde závislosť FTXUI na knižnici range-v3 nebola verejná.

## Údržba 🧹

- Aktualizované kontroly CI, procesy zostavovania a opravené súvisiace problémy.
- Odstránená vrátená inštalácia sieťových profilov popri binárnej distribúcii.
- Refaktorovaný a vyčistený kód v rôznych komponentoch: TUI, utils, chwd_profiles, user a tests.
- Odstránená nepoužívaná knižnica range-v3 zo závislostí inštalátora.
- Aktualizovaný súbor README.
