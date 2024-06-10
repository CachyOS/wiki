---
title: CachyOS Kernel
description: Čo je CachyOS Kernel?
---

# Čo je CachyOS Kernel?

CachyOS Kernel je prispôsobené jadro, ktoré využíva patche, vylepšenia, konfigurácie a patche z upstreamu. Výsledkom je optimalizované jadro pre používateľský systém. Desktopové jadrá sú primárne vyladené pre interaktivitu, ale existujú aj iné varianty zamerané na priepustnosť.



## Základná sada patchov CachyOS

Základná sada patchov obsahuje množstvo zmien v porovnaní s upstreamom. Tu je stručný zoznam, ktorý je bežne zahrnutý v každej vetve:

- **aes-crypto**: Obsahuje masívne vylepšenia pre šifrovacie pracovné zaťaženia a dynamicky využíva rôzne úrovne inštrukcií (avx2, avx512, avx10.1).
- **amd-pstate**: Obsahuje vylepšenia a zmeny pre amd-pstate driver. Patche sú bežne získavané z mailing listu.
- **bbr3**: Nahrádza bbrv1 najnovším bbrv3 poskytovaným spoločnosťou Google.
- **cachy**: Rôzne konfiguračné zmeny pre plánovač a interaktivitu (CONFIG_CACHY), patch OpenRGB, ACS Override, vylepšenia MM, v4l2loopback, patche Clear Linux a povolenie HDR.
- **fixes**: Rôzne opravy, ktoré sa hromadia počas stabilného jadra.
- **ksm**: Poskytuje syscalls pre uksmd. uksmd identifikuje rovnaké pamäťové stránky a zlúči ich.
- **ntsync**: Obsahuje najnovší patchset ovládača NTSync.
- **zstd**: Patchuje zstd api vo vnútri jadra na najnovšiu verziu. Bežne zlepšuje výkon pre kompresné úlohy so zstd (BTRFS, Zram, Zswap).

## Varianty

CachyOS poskytuje množstvo rôznych variantov jadra. Nižšie nájdete vysvetlenie každého z nich.


### linux-cachyos (Predvolené jadro)

Predvolené jadro je navrhnuté tak, aby poskytovalo naše odporúčania a sme otvorení ich zmenám, pokiaľ ide o plánovač a konfiguráciu. Zmeny môžu nastať, ak sú v plánovačoch alebo inej konfigurácii regresie. Momentálne jadro linux-cachyos poskytuje základnú sadu patchov CachyOS, framework sched-ext (rozšíriteľná trieda plánovača) a plánovač BORE (Burst-Oriented Response Enhancer).



### linux-cachyos-bore

Jadro BORE využíva základnú sadu patchov CachyOS a plánovač BORE s predvolenou konfiguráciou.

### linux-cachyos-deckify

Jadro deckify obsahuje rovnaké patche ako predvolené jadro, ale využíva ďalšie zmeny pre Steam Deck a ďalšie prenosné zariadenia, aby poskytlo kompatibilitu pre ne. Toto jadro sa používa ako predvolené v edícii CachyOS Handheld.


### linux-cachyos-echo

Jadro ECHO obsahuje základnú sadu patchov CachyOS a plánovač ECHO.

### linux-cachyos-eevdf

Jadro EEVDF (Earliest Eligible Virtual Deadline First) využíva základnú sadu patchov CachyOS a predvolený plánovač jadra (EEVDF).

### linux-cachyos-hardened

Hardened jadro používa základnú sadu patchov CachyOS a hardened patch z linux-hardened.

### linux-cachyos-lts

Jadro LTS (Longterm) je založené na najnovšej verzii vetvy Longterm a obsahuje niekoľko malých a stabilných patchov, ako sú konfiguračné zmeny, patche amd-pstate a BBRv3.

### linux-cachyos-rc

Jadro RC je založené na najnovšom dostupnom Release Candidate. Obsahuje najnovšie funkcie a zmeny z upstreamu, ale môže mať problémy. Okrem toho obsahuje základnú sadu patchov CachyOS, framework sched-ext a plánovač BORE. Toto jadro nie je odporúčané pre nových používateľov a je určené iba na testovacie účely.



### linux-cachyos-rt-bore

Jadro RT (realtime) využíva základnú sadu patchov CachyOS, Real Time Patch a plánovač BORE. RT Preemption je predvolene povolená v tomto jadre.

### linux-cachyos-sched-ext

Jadro sched-ext obsahuje základnú sadu patchov CachyOS a framework sched-ext. Existuje ďalší variant nazvaný "linux-cachyos-sched-ext-debug". Tento variant obsahuje nestripované vmlinux, ktoré je potrebné na ladenie jadra pre vývojárov.

### linux-cachyos-server

Serverové jadro je zamerané na servery a vyššiu priepustnosť. Jadro nie je vyladené na interaktivitu a nie je odporúčané pre desktopových používateľov. Hlavné rozdiely sú nižšia tickrate (300Hz), žiadna preempcia a nepoužitá CONFIG_CACHY. Jadro obsahuje iba základnú sadu patchov CachyOS.