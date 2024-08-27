---
title: Všeobecné informácie o repozitári CachyOS
description: Informácie o benchmarkoch a repozitári
---

# Prečo CachyOS využíva vlastné repozitáre?

## Výkon a optimalizácie

Chceme poskytnúť výkonovo optimalizovanú distribúciu, čo si vyžaduje výkonovo optimalizované balíčky. Momentálne prekompilovávame jadro a extra balíčky Arch Linuxu s generickou sadou inštrukcií x86-64-v3 a x86-64-v4.

- x86-64-v4 - Povolenie AVX512, čo môže priniesť výrazné výhody v aplikáciách
- x86-64-v3 - _5%-20% nárast výkonu_

## Prispôsobené balíčky

V [CachyOS-PKGBUILDs](https://github.com/CachyOS/CachyOS-PKGBUILDS) udržiavame množstvo balíčkov, ktoré dostávajú opravy, PGO alebo BOLT optimalizácie, aby poskytli ďalší nárast výkonu.

# Testy a benchmarky

Ak chcete vedieť viac o zvýšení výkonu našich repozitárov, pozrite si nasledujúce odkazy.

- Phoronix dvakrát benchmarkoval Cachy a vyzerá to prevažne dobre pre CachyOS, ktorý sa ukazuje ako vedúci v aspekte výkonu. Tieto benchmarky sú trochu staršie, odvtedy sa CachyOS značne vyvinul:  
  [https://www.phoronix.com/review/cachyos-linux-perf](https://www.phoronix.com/review/cachyos-linux-perf)

- Tu Phoronix benchmarkoval rozdiel medzi balíčkami x86-64-v4, x86-64-v3 a x86-64 (generické). Pri pohľade na príklady ako PHP alebo GCC, kde prispôsobujeme naše PKGBUILDs, je viditeľný skutočne veľký nárast výkonu.
  [https://www.phoronix.com/review/cachyos-x86-64-v3-v4](https://www.phoronix.com/review/cachyos-x86-64-v3-v4)

- x86-64-v3 (- existuje mierny prínos _-march=haswell_ (x86_64-v3) - okolo 10%-20% v porovnaní so základňou pre vykonané testy):  
  [https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html](https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html)
