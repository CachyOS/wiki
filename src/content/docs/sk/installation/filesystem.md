---
title: Filesystems
description: Description and recommendations for the available filesystems. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

# Súborové systémy

CachyOS ponúka 5 súborových systémov, aby si používateľ mohol vybrať ten, ktorý najlepšie vyhovuje jeho potrebám. Nasledujúci text popisuje výhody, nevýhody a odporúčania pre každý súborový systém. Každý súborový systém má predinštalované svoje požiadavky/nástroje v CachyOS.

## XFS

XFS je žurnálovací súborový systém vytvorený a vyvinutý spoločnosťou Silicon Graphics, Inc. Bol vytvorený v roku 1993, portovaný na Linux v roku 2001 a teraz je široko podporovaný väčšinou distribúcií Linuxu.

### Výhody
- Rýchly, XFS bol pôvodne navrhnutý s ohľadom na rýchlosť a extrémnu škálovateľnosť.
- Spoľahlivý, XFS využíva niekoľko technológií na prevenciu poškodenia dát.
- Odolný voči fragmentácii vďaka svojmu rozsahovému založeniu a stratégiu oneskorenej alokácie.

### Nevýhody
- Nemožno ho zmenšiť.

### Nástroje používateľského priestoru
Balík obsahujúci nástroje používateľského priestoru na správu XFS súborových systémov je `xfsprogs`.

### Odporúčanie
XFS je odporúčaný súborový systém pre používateľov, ktorí nepotrebujú pokročilé funkcie a chcú jednoducho rýchly a spoľahlivý súborový systém.

## BTRFS

BTRFS je moderný copy-on-write (COW) súborový systém vytvorený v roku 2007 a vyhlásený za stabilný v linuxovom jadre v roku 2013. Je široko podporovaný a je známy hlavne pre svoje pokročilé funkcie.

### Výhody
- Transparentná kompresia. BTRFS podporuje transparentné komprimovanie súborov na úsporu miesta bez zásahu používateľa. CachyOS je predvolene dodávaný s kompresiou ZSTD.
- Funkcionalita snímok. BTRFS využíva svoju COW povahu na vytváranie snímok podzväzkov, ktoré zaberajú veľmi málo skutočného miesta.
- Funkcionalita podzväzkov umožňuje väčšiu kontrolu nad súborovým systémom.
- Schopný rásť alebo zmenšiť sa.
- Veľmi rýchly vývoj.

### Nevýhody
- Niekedy vyžaduje defragmentáciu alebo vyváženie.
- Horší na rotačných diskoch kvôli spomínanej fragmentácii.

### Nástroje používateľského priestoru
Balík nástrojov používateľského priestoru pre BTRFS je `btrfs-progs`.

### Rozloženie podzväzkov
CachyOS poskytuje rozloženie podzväzkov pre jednoduchú funkčnosť snímok.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Odporúčanie
BTRFS je odporúčaný pre používateľov, ktorí chcú funkčnosť snímok/záloh a transparentnú kompresiu.

## Ext4

Ext4 (štvrtý rozšírený súborový systém) je najbežnejšie používaný Linuxový súborový systém. Ext4 bol stabilizovaný v linuxovom jadre v roku 2008.

### Výhody
- Veľmi bežný, čo umožňuje ľahký prístup k množstvu zdrojov.
- Spoľahlivý. Ext4 má preukázateľnú spoľahlivosť.
- Schopný rásť alebo zmenšiť sa.

### Nevýhody
- Postavený na starom kóde.
- Chýbajú mnohé pokročilé funkcie, ktoré ponúkajú iné súborové systémy.

### Nástroje používateľského priestoru
Balík na správu Ext4 je `e2fsprogs`.

### Odporúčanie
Ext4 je odporúčaný pre používateľov, ktorí chcú najjednoduchší a najbežnejšie používaný súborový systém.

## ZFS

ZFS je pokročilý súborový systém pôvodne vyvinutý spoločnosťou Sun Microsystems v roku 2005. ZFS má mnoho funkcií, ale je licencovaný pod CDDL, čo znamená, že nemôže byť zahrnutý v linuxovom jadre a vyžaduje samostatný modul.

### Výhody
- Pooled storage (zpool)
- Snímky pomocou COW
- Kompresia
- Podpora Raid-Z
- ARC cache umožňuje neuveriteľne rýchle časy čítania často prístupných súborov.

### Nevýhody
- Veľmi zložitý na používanie a pochopenie kvôli funkciám ako zpool a ARC.
- ARC vyžaduje veľa RAM, aby bol efektívny.
- Nie je zahrnutý v linuxovom jadre, preto závisí od modulu tretích strán (OpenZFS).

### Potrebné nástroje
'CachyOS poskytuje predkompilovaný modul zfs pre každú verziu jadra.
`zfs-utils` pre nástroje používateľského priestoru.

### Odporúčanie
ZFS by mali používať len pokročilí používatelia, ktorí chcú pokročilé funkcie ZFS, ako je pooled storage alebo ARC cache.

## F2FS

F2FS alebo Flash-Friendly File System je súborový systém pre flash pamäť vytvorený a vyvinutý spoločnosťou Samsung pôvodne pre linuxové jadro. F2FS bol vytvorený špeciálne na použitie s NAND flash používanými v moderných úložiskách.

### Výhody
- Navrhnutý s ohľadom na flash pamäť.
- Transparentná kompresia na zníženie zápisov na disk (úspora miesta momentálne nie je používateľom využiteľná).
- Rýchlejší ako iné súborové systémy ako Ext4.
- Lepšie vyvažovanie opotrebovania, čo predlžuje životnosť NAND flash.

### Nevýhody
- Nemožno ho zmenšiť.
- Úspora miesta z kompresie momentálne nie je používateľom využiteľná. Toto môže byť pridané v budúcnosti.
- Relatívne slabý fsck (kontrola súborového systému).
- Downgrade na jadro staršie ako verzia, ktorá vytvorila súborový systém, môže spôsobiť problémy.

### Nástroje používateľského priestoru
Hlavným nástrojom pre F2FS je `f2fs-tools`.

### Odporúčanie
F2FS je odporúčaný iba pre používateľov, ktorí chcú maximalizovať životnosť svojej NAND flash.

## BcacheFS

Bcachefs je pokročilý nový súborový systém pre Linux, s dôrazom na spoľahlivosť a robustnosť a s úplnou sadou funkcií, ktoré by človek očakával od moderného súborového systému.

:::caution[POZOR]
Bcachefs je stále považovaný za experimentálny a môže mať problémy.
:::

### Výhody
- Copy on write (CoW) - ako btrfs alebo zfs
- Kompresia
- Cache, umiestnenie dát
- Replikácia
- Škálovateľnosť

### Nevýhody
- Experimentálny
- Nastavenie môže byť komplikované

## TL:DR
Použite **XFS** alebo **Ext4** ako predvolené, **BTRFS** ak chcete snímky a kompresiu a **ZFS** ak chcete ARC cache alebo zpools.
