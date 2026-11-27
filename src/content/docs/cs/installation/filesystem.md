---
title: Systémy souborů
description: Popis a doporučení dostupných systémů souborů. (ext4, f2fs, btrfs, xfs, zfs)
ai_translated: true
---

CachyOS nabízí 5 různých systémů souborů, aby si uživatel mohl vybrat ten, který nejlépe vyhovuje jeho potřebám. Následující text popisuje výhody, nevýhody a doporučení pro každý systém souborů. Každý systém souborů má v CachyOS předinstalované požadované nástroje.

:::note
BTRFS je výchozí a doporučený systém souborů pro CachyOS. Pokud si nejste jisti, zvolte jej.
:::

## XFS

XFS je žurnálovací systém souborů vytvořený a vyvíjený společností Silicon Graphics, Inc. Byl vytvořen v roce 1993, portován na Linux v roce 2001 a je nyní široce podporován většinou linuxových distribucí.

### Klady

- XFS byl původně navržen s důrazem na rychlost a extrémní škálovatelnost.
- Spolehlivý, XFS využívá několik technologií k zabránění poškození dat.
- Odolný vůči fragmentaci díky své povaze založené na extentu a strategii zpožděné alokace.

### Zápory

- Nelze zmenšit.

### Nástroje

Balíček obsahující uživatelské nástroje pro správu systémů souborů XFS je `xfsprogs`.

### Doporučení

XFS je doporučený systém souborů pro uživatele, kteří nepotřebují pokročilé funkce a chtějí jednoduše rychlý a spolehlivý systém souborů.

## BTRFS

BTRFS je moderní systém souborů typu copy-on-write (COW), který byl vytvořen v roce 2007 a prohlášen za stabilní v jádře Linuxu v roce 2013. Je široce podporován a známý především pro svou pokročilou sadu funkcí.

### Klady

- Transparentní komprese. BTRFS podporuje transparentní kompresi souborů, což umožňuje významnou úsporu místa bez zásahu uživatele. **CachyOS se dodává s výchozí kompresí ZSTD nastavenou na úroveň 3.**
- Funkce snímků. BTRFS využívá svou COW povahu k vytváření snímků podobjemů, které zabírají velmi málo skutečného místa.
- Funkce podobjemů umožňující větší kontrolu nad systémem souborů.
- Možnost zvětšování nebo zmenšování.
- Velmi rychlý vývoj.

### Zápory

- Občas vyžaduje defragmentaci nebo vyvažování.
- Horší výkon na rotačních discích kvůli zmíněné fragmentaci.

### Nástroje

Balíček pro uživatelské nástroje Btrfs je `btrfs-progs`

### Rozvržení podobjemů

CachyOS poskytuje předem nastavené rozvržení podobjemů pro snadné používání snímků.

- Podobjem @ = /
- Podobjem @home = /home
- Podobjem @root = /root
- Podobjem @srv = /srv
- Podobjem @cache = /var/cache
- Podobjem @tmp = /var/tmp
- Podobjem @log = /var/log

### Doporučení

BTRFS je doporučený systém pro uživatele, kteří chtějí funkce snímků/zálohování a transparentní kompresi.

## EXT4

EXT4 (fourth extended filesystem) je nejčastěji používaný linuxový systém souborů. EXT4 byl v jádře Linuxu označen jako stabilní v roce 2008.

### Klady

- Může být v některých scénářích stejně rychlý nebo rychlejší než XFS.
- Velmi běžný, což umožňuje snadný přístup k mnoha zdrojům.
- Spolehlivý, EXT4 má dlouhou historii spolehlivosti.
- Možnost zvětšování nebo zmenšování.
  - Zmenšení je podporováno pouze offline a vyžaduje odpojení souborového systému.

### Zápory

- Postrádá mnoho pokročilých funkcí, které nabízejí jiné systémy souborů.

### Nástroje

Balíček pro správu ext4 je `e2fsprogs`

### Doporučení

EXT4 je doporučený systém pro uživatele, kteří chtějí nejjednodušší a nejběžnější systém souborů.

## ZFS

ZFS je pokročilý systém souborů původně vyvinutý společností Sun Microsystems v roce 2005. ZFS má mnoho funkcí, ale je licencován pod CDDL, což znamená, že nemůže být zahrnut do jádra Linuxu a vyžaduje instalaci samostatného modulu.

:::caution
Nepoužívejte Real-time jádro společně se ZFS, protože kvůli licenčním problémům není kompatibilní.
:::

### Klady

- Sdružené úložiště (zpool)
- Snímky pomocí COW
- Komprese
- Podpora Raid-Z
- ARC cache umožňuje extrémně rychlé čtení často přistupovaných souborů.

### Zápory

- Velmi složité na použití a pochopení kvůli funkcím jako zpool a ARC.
- ARC vyžaduje velké množství RAM, aby byl efektivní.
- Není součástí jádra Linuxu, proto závisí na modulu jádra třetí strany (OpenZFS).
- Nekompatibilní s Real-time preemption

### Požadované nástroje

`ZFS-Module` CachyOS poskytuje předkompilovaný modul zfs pro každou verzi jádra.
`zfs-utils` pro uživatelské nástroje.

### Doporučení

ZFS by měli používat pouze pokročilí uživatelé, kteří chtějí využít jeho pokročilé funkce, jako je sdružené úložiště nebo ARC cache.

## F2FS

F2FS (Flash-Friendly File System) je systém souborů pro flash úložiště původně vytvořený a vyvíjený společností Samsung pro jádro Linuxu. F2FS byl vytvořen speciálně pro NAND flash používaný v moderních úložištích.

### Klady

- Navržen s ohledem na šetrnost k flash zařízením.
- Transparentní komprese používaná ke snížení zápisů na disk (úspora místa aktuálně není pro uživatele využitelná).
- Lepší wear leveling, což dále prodlužuje životnost NAND flash.

### Zápory

- Nelze zmenšit.
- Úsporu místa z komprese aktuálně nemůže uživatel využít. Tato funkce může být přidána v budoucnu.
- Relativně slabý fsck (kontrola systému souborů).
- Downgrade na jádro starší než verze, která vytvořila systém souborů, může způsobit problémy.
- Vyžaduje náhradní řešení při použití s GRUBem na systému MBR/BIOS.

### Nástroje

Hlavní nástroj pro f2fs je `f2fs-tools`

### Doporučení

- F2FS je doporučen pro uživatele, kteří chtějí maximalizovat životnost svých zařízení NAND flash.
- Limine je doporučený zavaděč pro uživatele F2FS na systémech MBR/BIOS, protože nevyžaduje náhradní řešení jako GRUB.

## Shrnutí

Použijte výchozí systém souborů **BTRFS**, protože je považován za stabilní a nabízí mnoho užitečných funkcí (snímky, komprese atd.). Použijte **XFS** nebo **EXT4** pro jednoduchý a rychlý systém souborů.
