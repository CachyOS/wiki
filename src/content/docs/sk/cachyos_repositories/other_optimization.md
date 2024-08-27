---
title: Ďalšie optimalizácie a funkcie
description: Podrobný zoznam funkcií a zmien, ktoré CachyOS aplikuje.
---

## Balíčky

CachyOS aplikuje optimalizácie ako PGO, LTO a BOLT na ďalšie balíčky.
Zameriavame sa najskôr na optimalizáciu kompilátorov a základných balíčkov, ako sú GCC, python, zstd, xz, lz4, julia, php, sqlite a ďalšie.

## Nastavenia CachyOS

Nastavenia CachyOS obsahujú množstvo konfiguračných súborov pre zram, nvidia, amd a všeobecné systémové zmeny.

### Konfigurácia

- konfigurácia zram
- Úpravy/Nastavenia NVIDIA pre lepší zážitok out-of-the-box
- Nútené použitie ovládača AMDGPU pre GPU s architektúrou GCN 1.0 a GCN 2.0
- zmeny konfigurácie jadra sysctl pre sieť, pamäť a bezpečnosť
- konfigurácia systemd journal.d

### Skripty

- **cachyos-bugreport.sh**: nástroj na jednoduché poskytovanie logov pre podporu
- **paste-cachyos**: skript, ktorý umožňuje jednoducho vložiť text z terminálu
- **kerver**: zobrazuje aktuálne používanú konfiguráciu jadra a používaný plánovač
- **topmem**: Zobrazuje top 10 procesov, ktoré používajú najviac pamäte
- **amdpstate-guided/amdpstate-epp**: jednoduché prepínanie medzi amdpstate-guided a amdpstate-epp za behu

### Služby

- **bpftune**: automaticky ladí sieťové parametre v závislosti od zaťaženia siete
- **ananicy-cpp**: daemon na nastavenie priorít procesov s množstvom pravidiel
- **uksmd**: daemon na úrovni užívateľského priestoru na zlúčenie rovnakých pamäťových stránok do jednej

## Aplikácie CachyOS

- **cachy-browser**: Prehliadač založený na firefox, s bezpečnejšou konfiguráciou a opravami z gentoo a librewolf
- **cachyos-kernel-manager**: Jednoduchá inštalácia jadier z repozitára alebo konfigurácia vlastného jadra a vlastných opráv
- **CachyOS-Hello**: Aplikácia na správu úprav, inštaláciu balíčkov a iné informácie o CachyOS
- **CachyOS-ApplicationInstaller**: Jednoduchá inštalácia často používaných aplikácií priamo z GUI
- **cachyos-rate-mirrors**: Automaticky hodnotí zrkadlá Arch a CachyOS
- **systemd-boot-manager**: Automaticky generuje nové položky pre systemd-boot-manager a dá sa ľahko konfigurovať v `/etc/sdboot-manage.conf`

## Moduly jadra

CachyOS poskytuje predkompilované moduly jadra pre nvidia a zfs.
To uľahčuje používateľovi zabezpečiť kompatibilitu so najnovšou verziou jadra. Taktiež pridávame opravy pre moduly, ak je to potrebné na zabezpečenie najnovšieho stabilného jadra.
