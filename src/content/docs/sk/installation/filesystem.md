---
title: Súborové systémy
description: Popis a odporúčania pre dostupné súborové systémy. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS ponúka 5 súborových systémov, aby si používateľ mohol vybrať ten, ktorý najlepšie vyhovuje jeho potrebám. Nasledujúci text prejde výhody, nevýhody a odporúčania pre každý súborový systém. Každý súborový systém sa dodáva s predinštalovanými požiadavkami/utilitami v CachyOS.

:::note
BTRFS je predvolený a odporúčaný súborový systém pre CachyOS. Vyberte ho, ak si nie ste istí.
:::

## XFS
XFS je žurnálovací súborový systém vytvorený a vyvinutý spoločnosťou Silicon Graphics, Inc. Bol vytvorený v roku 1993, prenesený do Linuxu v roku 2001 a teraz je široko podporovaný väčšinou distribúcií Linuxu.
### Výhody
- Rýchly, XFS bol pôvodne navrhnutý s ohľadom na rýchlosť a extrémnu škálovateľnosť.
- Spoľahlivý, XFS využíva niekoľko technológií na zabránenie poškodeniu dát.
- Odolný voči fragmentácii vďaka svojej rozsiahlej povahe a stratégii oneskoreného prideľovania.
### Nevýhody
- Nedá sa zmenšiť.

### Nástroj používateľského priestoru
Balík obsahujúci nástroje používateľského priestoru na správu súborových systémov XFS je `xfsprogs`.

### Odporúčanie:
XFS je odporúčaný súborový systém pre používateľov, ktorí nepotrebujú pokročilé funkcie a chcú jednoducho rýchly a spoľahlivý súborový systém.

## BTRFS
BTRFS je moderný súborový systém copy-on-write (COW) vytvorený v roku 2007 a vyhlásený za stabilný v jadre Linuxu v roku 2013. Je široko podporovaný a je známy hlavne vďaka svojej pokročilej sade funkcií.
### Výhody
- Transparentná kompresia. BTRFS podporuje transparentné komprimovanie súborov, čo umožňuje významnú úsporu miesta bez zásahu používateľa. CachyOS sa štandardne dodáva s kompresiou ZSTD nastavenou na úroveň 3.
- Funkcia snímok. BTRFS využíva svoju povahu COW na umožnenie vytvárania snímok subvolumov, ktoré zaberajú veľmi málo skutočného miesta.
- Funkcia subvolumov umožňujúca väčšiu kontrolu nad súborovým systémom.
- Možnosť zväčšovať alebo zmenšovať.
- Veľmi rýchly vývoj.
### Nevýhody
- Niekedy vyžaduje defragmentáciu alebo vyvažovanie.
- Horšie na rotačných diskoch kvôli spomínanej fragmentácii.
### Nástroj používateľského priestoru
Balík nástrojov používateľského priestoru Btrfs je `btrfs-progs`

### Rozloženie subvolumov
CachyOS poskytuje rozloženie subvolumov hneď po vybalení, aby umožnil jednoduchú funkciu snímok.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Odporúčanie:
BTRFS sa odporúča pre používateľov, ktorí chcú funkciu snímok/zálohovania a transparentnú kompresiu.

## EXT4
EXT4 (fourth extended filesystem) je najčastejšie používaný súborový systém Linuxu. EXT4 bol stabilizovaný v jadre Linuxu v roku 2008.
### Výhody
- Veľmi bežný, čo umožňuje ľahký prístup k množstvu zdrojov.
- Spoľahlivý. EXT4 má preukázateľne veľmi spoľahlivú históriu.
- Možnosť zväčšovať alebo zmenšovať.
### Nevýhody
- Postavený na starej kódovej základni.
- Chýba mu mnoho pokročilých funkcií, ktoré ponúkajú iné súborové systémy.

### Nástroje používateľského priestoru
Balík na správu ext4 je `e2fsprogs`

### Odporúčanie:
EXT4 sa odporúča pre používateľov, ktorí chcú najjednoduchší a najčastejšie používaný súborový systém.

## ZFS

ZFS je pokročilý súborový systém, ktorý pôvodne vyvinula spoločnosť Sun Microsystems v roku 2005. ZFS má mnoho funkcií, avšak je licencovaný pod CDDL, čo znamená, že nemôže byť zahrnutý do jadra Linuxu a vyžaduje inštaláciu samostatného modulu.

:::caution
Nepoužívajte jadro Real-time spolu so ZFS, pretože nie je kompatibilné z dôvodu licenčných problémov.
:::

### Výhody
- Združené úložisko (zpool)
- Snímky pomocou COW
- Kompresia
- Podpora Raid-Z
- ARC cache umožňuje neuveriteľne rýchle čítanie bežne používaných súborov.
### Nevýhody
- Veľmi komplikované na používanie a pochopenie kvôli funkciám ako zpool a ARC.
- ARC vyžaduje veľa RAM, aby bol efektívny.
- Nie je zahrnutý v jadre Linuxu, a preto závisí od modulu jadra tretej strany (OpenZFS)
- Nekompatibilný s Real-time preempciou

### Potrebné nástroje
'ZFS-Module' CachyOS poskytuje predkompilovaný modul zfs pre každú verziu jadra.
`zfs-utils` pre nástroje používateľského priestoru.

### Odporúčanie:
ZFS by mali používať iba pokročilí používatelia, ktorí chcú pokročilé funkcie ZFS, ako je združené úložisko alebo ARC cache.

## F2FS
F2FS alebo Flash-Friendly File System, je súborový systém pre flash pamäte vytvorený a vyvinutý spoločnosťou Samsung pôvodne pre jadro Linuxu. F2FS bol vytvorený špeciálne pre NAND flash používaný v moderných úložiskách.
### Výhody
- Navrhnutý s ohľadom na flash pamäte.
- Transparentná kompresia používaná na zníženie zápisov na disk (Úspora miesta nie je v súčasnosti používateľsky využiteľná)
- Rýchlejší ako iné súborové systémy, ako napríklad EXT4.
- Lepšie vyrovnávanie opotrebenia, čím sa predlžuje životnosť NAND flash.
### Nevýhody
- Nedá sa zmenšiť.
- Úsporu miesta z kompresie v súčasnosti nemôže používateľ využiť. Môže to byť pridané v budúcnosti.
- Relatívne slabý fsck. (kontrola súborového systému)
- Downgrade na jadro staršie ako verzia, ktorá vytvorila súborový systém, môže spôsobiť problémy.

### Nástroje používateľského priestoru
Hlavným nástrojom pre f2fs je `f2fs-tools`

### Odporúčanie:
F2FS sa odporúča iba pre používateľov, ktorí chcú maximalizovať životnosť svojej NAND flash.

## TL:DR
Použite predvolený súborový systém **BTRFS**, pretože sa považuje za stabilný a má veľa užitočných funkcií (snímky, kompresia atď.). Použite **XFS** alebo **EXT4** pre jednoduchý
a rýchly súborový systém.
