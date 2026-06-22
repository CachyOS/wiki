---
title: Systémy souborů
description: Popis a doporučení dostupných systémů souborů. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS nabízí 5 systémů souborů, aby uživatel mohl vybrat ten, který nejlépe vyhovuje jeho potřebám. Následující text popisuje výhody, nevýhody a doporučení pro každý systém souborů. Každý systém souborů má na CachyOS předinstalované požadované nástroje.

:::note
BTRFS je výchozí a doporučený systém souborů pro CachyOS. Pokud si nejste jisti, zvolte jej.
:::

## XFS
XFS je žurnálovací systém souborů vytvořený společností Silicon Graphics, Inc. Byl vytvořen v roce 1993, portován na Linux v roce 2001 a je nyní široce podporován většinou linuxových distribucí.
### Klady
- Rychlý, XFS byl původně navržen s ohledem na rychlost a extrémní škálovatelnost.
- Spolehlivý, XFS využívá několik technologií k zabránění poškození dat.
- Odolný vůči fragmentaci díky své povaze založené na extentu a strategii zpožděné alokace.
### Zápory
- Nelze zmenšit.

### Nástroje
Balíček obsahující uživatelské nástroje pro správu XFS systémů souborů je `xfsprogs`.

### Doporučení:
XFS je doporučený systém souborů pro uživatele, kteří nepotřebují pokročilé funkce a chtějí rychlý a spolehlivý systém souborů.


## BTRFS
BTRFS je moderní systém souborů typu copy-on-write (COW), který byl vytvořen v roce 2007 a prohlášen za stabilní v jádře Linuxu v roce 2013. Je široce podporován a známý pro svou pokročilou sadu funkcí.
### Klady
- Transparentní komprese. BTRFS podporuje průhlednou kompresi souborů, což umožňuje významnou úsporu místa bez zásahu uživatele. CachyOS má výchozí ZSTD kompresi nastavenou na úroveň 3.
- Funkce snímků. BTRFS využívá svou COW povahu k vytváření snímků podobjemů, které zabírají velmi málo místa.
- Funkce podobjemů umožňující větší kontrolu nad systémem souborů.
- Možnost zvětšování nebo zmenšování.
- Velmi rychlý vývoj.
### Zápory
- Občas vyžaduje defragmentaci nebo vyvažování.
- Horší výkon na rotačních discích kvůli zmíněné fragmentaci.
### Nástroje
Balíček pro uživatelské nástroje BTRFS je `btrfs-progs`.

### Rozvržení podobjemů
CachyOS poskytuje předem nastavené rozvržení podobjemů pro snadné použití snímků.
- Podobjem @ = /
- Podobjem @home = /home
- Podobjem @root = /root
- Podobjem @srv = /srv
- Podobjem @cache = /var/cache
- Podobjem @tmp = /var/tmp
- Podobjem @log = /var/log

### Doporučení:
BTRFS je doporučený systém pro uživatele, kteří chtějí funkce snímků/zálohování a transparentní kompresi.


## EXT4
EXT4 (čtvrtý rozšířený systém souborů) je nejčastěji používaný linuxový systém souborů. EXT4 byl stabilní v jádře Linuxu od roku 2008.
### Klady
- Velmi běžný, což umožňuje snadný přístup k mnoha zdrojům.
- Spolehlivý, EXT4 má dlouhou historii spolehlivosti.
- Možnost zvětšování nebo zmenšování.
### Zápory
- Postaven na starém kódu.
- Postrádá mnoho pokročilých funkcí, které nabízejí jiné systémy souborů.

### Nástroje
Balíček pro správu EXT4 je `e2fsprogs`.

### Doporučení:
EXT4 je doporučený systém pro uživatele, kteří chtějí jednoduchý a nejběžnější systém souborů.


## ZFS

ZFS je pokročilý systém souborů původně vyvinutý společností Sun Microsystems v roce 2005. Má mnoho funkcí, ale je licencován pod CDDL, což znamená, že nemůže být zahrnut do jádra Linuxu a vyžaduje samostatný modul.

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
- ARC vyžaduje velké množství RAM pro efektivitu.
- Není součástí jádra Linuxu, proto závisí na modulu třetí strany (OpenZFS).
- Nekompatibilní s Real-time preemption.

### Požadované nástroje
`ZFS-Module` - CachyOS poskytuje předkompilovaný modul ZFS pro každou verzi jádra.
`zfs-utils` pro uživatelské nástroje.

### Doporučení:
ZFS by měli používat pouze pokročilí uživatelé, kteří chtějí využít pokročilé funkce ZFS, jako je sdružené úložiště nebo ARC cache.


## F2FS
F2FS, nebo Flash-Friendly File System, je souborový systém vytvořený a vyvíjený společností Samsung původně pro jádro Linuxu. F2FS byl vytvořen speciálně pro NAND flash používaný v moderních úložištích.
### Klady
- Navržen s ohledem na flash zařízení.
- Transparentní komprese snižující zápisy na disk (úspora místa aktuálně není dostupná pro uživatele).
- Rychlejší než jiné systémy, jako je EXT4.
- Lepší wear leveling, což dále prodlužuje životnost NAND flash.
### Zápory
- Nelze zmenšit.
- Úspora místa z komprese aktuálně není dostupná pro uživatele. Tato funkce může být přidána v budoucnu.
- Relativně slabý fsck (kontrola systému souborů).
- Downgrade na starší jádro, než které vytvořilo systém souborů, může způsobit problémy.

### Nástroje
Hlavní nástroj pro F2FS je `f2fs-tools`.

### Doporučení:
F2FS je doporučen pouze pro uživatele, kteří chtějí maximalizovat životnost NAND flash.

## Shrnutí
Použijte výchozí systém souborů **BTRFS**, protože je považován za stabilní a nabízí mnoho zajímavých funkcí (snímky, komprese atd.). Použijte **XFS** nebo **EXT4** pro jednoduchý a rychlý systém souborů.
