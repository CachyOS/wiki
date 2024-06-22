---
title: Další optimalizace a výhody
description: Detailní seznam výhod a změn jež CachyOS přináší
---

Balíčky
--------

CachyOS aplikuje optimalizace jako PGO, LTO a BOLT na následující balíčky.
Zaměřujeme se na optimalizaci kompilátorů a základních balíčků, jako jsou GCC, Python, zstd, xz, lz4, Julia, PHP, SQLite a další.

CachyOS Nastavení
----------------

Nastavení CachyOS obsahuje řadu konfiguračních souborů pro zram, Nvidia, AMD a obecné úpravy systému.

### Nastavení

- Konfigurace pro zram
- Nastavení/Tweaky NVIDIA pro lepší OOB práci s Nvidia
- Povinné použití ovladače AMDGPU pro GPU GCN 1.0 a GCN 2.0
- Změny konfigurace sysctl jádra pro síť, paměť a bezpečnost
- Konfigurace systemd journal.d

### Scripty

- **cachyos-bugreport.sh**: nástroj pro jednoduché sdílení logů s podporou
- **paste-cachyos**: Skript umožňující snadné vkládání textu z terminálu
- **kerver**: Představuje aktuálně používanou konfiguraci jádra a používaný scheduler
- **topmem**: Zobrazuje Top 10 procesů, které používají nejvíce paměti
- **amdpstate-guided/amdpstate-epp**: Přepínejte snadno mezi amdpstate-guided a amdpstate-epp za běhu

### Služby

- **bpftune**: Automaticky upravuje parametry sítě podle zatížení
- **ananicy-cpp**: Démon pro prioritní úpravu souběžnosti sestavený na základě pravidel
- **uksmd**: User Space démon KSM pro slučování stejných stránek paměti do jedné.


CachyOS Aplikace
--------------------

- **cachy-browser**: Prohlížeč založený na Firefoxu s bezpečnější konfigurací a opravami z Gentoo a LibreWolf
- **cachyos-kernel-manager**: Snadná instalace jader z repozitáře nebo konfigurace vlastního jádra a sady vlastních úprav
- **CachyOS-Hello**: Aplikace pro manipulaci s úpravami, instalací balíčků a dalšími informacemi o CachyOS
- **CachyOS-ApplicationInstaller**: Snadná instalace často používaných aplikací přímo z grafického rozhraní (GUI)
- **cachyos-rate-mirrors**: Automaticky hodnotit zrcadla pro Arch a CachyOS
- **systemd-boot-manager**: Automaticky generuje nové záznamy pro správce systemd-boot a lze snadno konfigurovat v souboru /etc/sdboot-manage.conf

Kernel moduly
--------------

CachyOS poskytuje předkompilované moduly jádra pro Nvidia a ZFS.
To uživatelům usnadňuje zajistit neustálou kompatibilitu s nejnovější verzí jádra. Také integrujeme opravy pro tyto moduly, pokud je potřeba, abychom zajistili nejnovější stabilní verzi jádra.

