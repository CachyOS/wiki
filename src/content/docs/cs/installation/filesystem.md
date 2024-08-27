---
title: Soubory Filesystemy
daescription: Popis a doporučení pro dostupné souborové systémy. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

# Filesystemy

CachyOS nabízí 5 souborových systémů, které umožňují uživateli vybrat si ten, který nejlépe vyhovuje jejich potřebám. Následující přehled popisuje výhody, nevýhody a doporučení pro každý souborový systém. Každý souborový systém má své požadované nástroje/utility předinstalované na CachyOS.

## XFS

XFS je žurnálovací souborový systém vytvořený a vyvinutý společností Silicon Graphics, Inc. Byl vytvořen v roce 1993, portován na Linux v roce 2001 a je nyní široce podporován většinou distribucí Linuxu.

### Výhody

- Rychlý, XFS byl původně navržen s ohledem na rychlost a extrémní škálovatelnost.
- Spolehlivý, XFS využívá několik technologií k prevenci poškození dat.
- Odolný vůči fragmentaci díky své povaze založené na extentu a strategii zpožděné alokace.

### Nevýhody

- Nelze zmenšit.

### Nástroj pro uživatelský prostor

Balíček obsahující nástroje pro správu souborových systémů XFS je `xfsprogs`.

### Doporučení:

XFS je doporučeným souborovým systémem pro uživatele, kteří nepotřebují pokročilé funkce a jednoduše chtějí rychlý a spolehlivý souborový systém.

## BTRFS

BTRFS je moderní souborový systém založený na technologii copy-on-write (COW), který byl vytvořen v roce 2007 a prohlášen za stabilní v linuxovém jádře v roce 2013. Je široce podporován a je známý především svým pokročilým funkcemi.

### Výhody

- Transparentní komprese

BTRFS podporuje transparentní kompresi souborů, což umožňuje výrazné úspory místa bez zásahu uživatele. CachyOS používá ve výchozím nastavení kompresi ZSTD.

- Funkce snapshotů. BTRFS využívá svou povahu COW k vytváření snapshotů subsvazků, které zabírají velmi málo skutečného místa.
- Funkce subsvazků, které umožňují větší kontrolu nad souborovým systémem.
- Možnost zvětšení nebo zmenšení.
- Velmi rychlý vývoj.

### Nevýhody

- Někdy vyžaduje defragmentaci nebo vyvážení.
- Horší výkon na rotačních discích kvůli zmíněné fragmentaci.

### Nástroj pro uživatelský prostor

Uživatelský balíček nástrojů pro Btrfs je `btrfs-progs`.

### Rozvržení subvolumes

CachyOS poskytuje výchozí rozvržení subvolumes pro snadnou funkčnost snapshotů.

- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Doporučení:

BTRFS je doporučený pro uživatele, kteří chtějí funkce snapshotů/zálohování a transparentní kompresi.

## Ext4

Ext4 (čtvrtý rozšířený souborový systém) je nejčastěji používaným souborovým systémem v Linuxu. Ext4 byl prohlášen za stabilní v linuxovém jádře v roce 2008.

### Výhody

- Velmi běžný, což umožňuje snadný přístup k množství zdrojů.
- Spolehlivý. Ext4 má osvědčenou historii velmi spolehlivého systému.
- Možnost zvětšení nebo zmenšení.

### Nevýhody

- Postaven na starém kódu.
- Chybí mnoho pokročilých funkcí, které nabízejí jiné souborové systémy.

### Nástroje pro uživatelský prostor

Balíček pro správu ext4 je `e2fsprogs`.

### Doporučení:

Ext4 je doporučený pro uživatele, kteří chtějí nejjednodušší a nejběžněji používaný souborový systém.

## ZFS

ZFS je pokročilý souborový systém původně vyvinutý společností Sun Microsystems v roce 2005. ZFS má mnoho funkcí, ale je licencován pod CDDL, což znamená, že nemůže být zahrnut do linuxového jádra a vyžaduje samostatný modul.

### Výhody

- Sloučení úložiště (zpool).
- Snapshots využívající COW.
- Komprese.
- Podpora RAID-Z.
- ARC cache umožňuje neuvěřitelně rychlé čtení často přistupovaných souborů.

### Nevýhody

- Velmi složitý na používání a pochopení kvůli funkcím jako zpool a ARC.
- ARC vyžaduje hodně paměti RAM pro efektivní využití.
- Není zahrnut v linuxovém jádře, proto je závislý na třetím straně modulu (OpenZFS).

### Požadované nástroje

`ZFS-Module` CachyOS poskytuje předkompilovaný modul zfs pro každou verzi jádra.
`zfs-utils` pro nástroje uživatelského prostoru.

### Doporučení:

ZFS by měli používat pouze pokročilí uživatelé, kteří chtějí pokročilé funkce ZFS, jako je sloučení úložiště nebo ARC cache.

## F2FS

F2FS nebo Flash-Friendly File System je souborový systém vyvinutý společností Samsung původně pro linuxové jádro. F2FS byl vytvořen speciálně pro NAND flash používané v moderních úložištích.

### Výhody

- Navrženo s ohledem na flash paměti.
- Transparentní komprese používaná k redukci zápisů na disk (Úspory místa aktuálně nelze využít uživatelem).
- Rychlejší než jiné souborové systémy jako Ext4.
- Lepší opotřebení, což dále prodlužuje životnost NAND flash.

### Nevýhody

- Nelze zmenšit.
- Úspory místa z komprese aktuálně nelze využít uživatelem. Toto může být přidáno v budoucnosti.
- Relativně slabé fsck (kontrola souborového systému).
- Downgrading na starší verzi jádra než je verze, která vytvořila souborový systém, může způsobit problémy.

### Nástroje pro uživatelský prostor

Hlavní utilita pro f2fs je `f2fs-tools`.

### Doporučení:

F2FS je doporučený pouze pro uživatele, kteří chtějí maximalizovat životnost své NAND flash.

## BcacheFS

Bcachefs je pokročilý nový souborový systém pro Linux, se zaměřením na spolehlivost a robustnost a kompletní sadu funkcí, které byste očekávali od moderního souborového systému.

:::caution[POZOR]
Bcachefs je stále považován za experimentální a může mít problémy.
:::

### Výhody

- Copy on write (CoW) - jako btrfs nebo zfs.
- Komprese.
- Caching, Data Placement.
- Replikace.
- Škálovatelnost.

### Nevýhody

- Experimentální.
- Nastavení může být složité.

## TL:DR

Použijte **xfs** nebo **ext4** jako výchozí, **BTRFS** pokud chcete snapshoty a kompresi a **ZFS** pokud potřebujete ARC cache nebo sloučení úložiště.
