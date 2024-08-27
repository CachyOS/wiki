---
title: CachyOS Repozitář Základní Informace
description: Benchmarky a informace o repozitáři
---

# Proč CachyOS používá vlastní repozitáře?

## Výkon a optimalizace

Chceme poskytovat distribuci optimalizovanou pro výkon, což vyžaduje optimalizované balíčky. V současnosti znovu kompilujeme core a extra repozitáře Arch Linuxu s obecným souborem instrukcí x86-64-v3 a x86-64-v4.

- x86-64-v4 - Povoluje AVX512, což může výrazně prospět aplikacím
- x86-64-v3 - _zlepšení výkonu o 5%-20%_

## Upravené balíčky

V [CachyOS-PKGBUILDs](https://github.com/CachyOS/CachyOS-PKGBUILDS) udržujeme řadu balíčků, které dostávají opravy, optimalizace PGO nebo BOLT, aby poskytly dodatečné zvýšení výkonu.

# Testy a Benchmarky

Pokud chcete vědět více o zvýšení výkonu našich repozitářů, podívejte se na následující odkazy.

- Phoronix dělal benchmarky u CachyOS dvakrát a pokaždé to vypadá pro CachyOS dobře, což ukazuje naše vedení v oblasti výkonu
  Tyto benchmarky jsou trochu starší, od té doby se CachyOS výrazně rozvinul:
  https://www.phoronix.com/review/cachyos-linux-perf

- Zde provedl Phoronix benchmark rozdílu mezi balíčky x86-64-v4, x86-64-v3 a x86-64 (generic). Při pohledu na příklady jako PHP nebo GCC, kde přizpůsobujeme naše PKGBUILDy, je skutečně patrné výrazné zvýšení výkonu.
  https://www.phoronix.com/review/cachyos-x86-64-v3-v4

- x86-64-v3 (- existuje mírný přínos -march=haswell (x86_64-v3) - přibližně 10% až 20% ve srovnání s výchozím nastavením pro provedené testy):
  https://lists.archlinux.org/pipermail/arch-general/2021-March/048739.html
