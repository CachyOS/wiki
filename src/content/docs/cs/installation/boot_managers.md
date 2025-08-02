---
title: Nabízené zavaděče
description: Popis a doporučení pro aktuálně nabízené zavaděče
---

Abychom nabídli nejlepší zážitek na široké škále zařízení, CachyOS v současné době nabízí následující zavaděče: systemd-boot, rEFInd, GRUB a Limine.
Tento wiki článek popisuje sadu funkcí každého zavaděče a také obsahuje naše doporučení pro jejich výběr. Pro
konfiguraci se prosím podívejte na [Konfigurace zavaděčů](/configuration/boot_manager_configuration).

## systemd-boot

Jako součást rodiny systemd byl systemd-boot vytvořen tak, aby byl co nejjednodušší, a proto podporuje pouze systémy založené na UEFI. Tento jednoduchý, ale efektivní design zajišťuje jeho spolehlivost a rychlost. To však přichází za cenu pokročilých funkcí podporovaných jinými zavaděči.

### Výhody
- Velmi jednoduchá konfigurace.
- Spouštěcí položky jsou rozděleny do více souborů, což usnadňuje správu.

### Nevýhody
 - Chybí řádná podpora pro BIOS/MBR.
 - Velmi základní design a chybí jakékoli možnosti motivů nebo přizpůsobení.
 - Konfigurace se negeneruje automaticky, pokud není takto nakonfigurována. CachyOS obsahuje správce systemd-boot pro nabídku automaticky generované konfigurace.
 - Dokáže číst spouštěcí obrazy pouze na souborových systémech podporovaných EFI (FAT, FAT16, FAT32).
 - Neschopnost najít spouštěcí obrazy na jiných oddílech než na svém vlastním.
 - Nepodporuje správně návrat ke snímkům Btrfs kvůli požadavku ukládat obrazy kernelu na spouštěcí oddíl namísto kořenového souborového systému.

### Doporučení

Systemd-boot je doporučený a výchozí zavaděč pro CachyOS. Zvolte jej, pokud si nejste jisti.

## rEFInd

Jako fork rEFIt byl rEFInd původně vytvořen, aby usnadnil multi-boot uživatelům MacOS. Nicméně rEFInd se vyvinul v hardwarově agnostický nástroj, což z něj činí skvělou volbu pro multi-booting na jakémkoli systému. Hlavní výhodou rEFInd je jeho schopnost prohledat všechna úložná zařízení při startu a odpovídajícím způsobem zobrazit položky pro každý nalezený OS/Kernel.

### Výhody

- Automatická detekce všech operačních systémů a kernelů na úložných zařízeních.
- Minimální až žádná nutná konfigurace díky výše zmíněné automatické detekci.
- Mnohem grafičtější uživatelské rozhraní připomínající výběr spouštění v MacOS.
- Skvělá podpora motivů.
- Volitelná podpora dotykové obrazovky.
- Dokáže číst spouštěcí obrazy ze souborových systémů EFI (FAT,FAT16,FAT32) i z EXT4 a BTRFS. Podporu pro další souborové systémy lze přidat instalací EFI ovladačů z balíčku ``efifs``.

### Nevýhody

- Nepodporuje systémy BIOS.

### Doporučení

rEFInd je doporučený zavaděč pro spouštění více operačních systémů.

## GRUB

GRUB je nejstarší z dostupných zavaděčů. Má velmi rozsáhlou sadu funkcí,
funguje téměř na každém stroji a je nejčastěji používaným linuxovým zavaděčem.
Následuje seznam jeho hlavních výhod a nevýhod.

### Výhody
- Dokáže číst spouštěcí obrazy z téměř všech dostupných linuxových souborových systémů.
- Široce používaný a je velmi snadné najít informace online.
- Dokáže dešifrovat šifrované spouštěcí oddíly.
- Jediný nabízený zavaděč, který umožňuje spouštění na strojích s BIOSem.
- Vypadá zastarale. Má však skvělou podporu motivů, která to kompenzuje.

### Nevýhody
- Nabobtnalý kvůli potřebě podporovat mnohem starší hardware a nutnosti mít mnoho ovladačů souborových systémů.
- Znatelně pomalejší ve srovnání se systemd-boot, rEFInd a Limine.

### Doporučení

GRUB je jediný zavaděč, který podporuje šifrování spouštěcího oddílu (odlišné od šifrování disku).

## Limine

Limine je moderní, pokročilý a přenosný víceprotokolový zavaděč. Slouží jako referenční implementace pro spouštěcí protokol Limine a podporuje spouštění Linuxu i řetězení jiných zavaděčů.

### Výhody

- Podporuje více spouštěcích protokolů, včetně Multiboot2 a spouštěcích protokolů Linuxu.
- Může se spouštět jak na systémech UEFI, tak BIOS, což ho činí všestranným pro různé hardwarové konfigurace.
- Má možnosti motivů podobné GRUBu.
- Přímá podpora pro snímky Btrfs, která je ve výchozím nastavení povolena pro instalace používající Btrfs jako souborový systém.

### Nevýhody

- Podporuje pouze několik souborových systémů, jako jsou FAT12, FAT16, FAT32 a ISO9660 pro oddíl `/boot`, což může vyžadovat další nastavení pro systémy používající jiné souborové systémy.
- Na rozdíl od některých jiných zavaděčů Limine nepřidává automaticky položku do NVRAM na systémech UEFI; to se musí provést ručně pomocí nástrojů jako `efibootmgr` nebo to řeší `limine-entry-tool`, který je v CachyOS předinstalován.

### Doporučení

Limine je doporučen pro uživatele, kteří potřebují lehký a všestranný zavaděč, který podporuje jak systémy UEFI, tak BIOS. Je zvláště vhodný pro ty, kteří preferují jednoduché nastavení s možnostmi motivů a podporou snímků Btrfs. Navíc Limine slouží jako moderní náhrada za GRUB, který v poslední době zaznamenal méně aktualizací a čelil několika bezpečnostním problémům kvůli svým ovladačům EFI/souborového systému.

## TL:DR

Zvolte **Limine** pro většinu uživatelů: nabízí snadné nastavení s vestavěnou podporou snímků BTRFS, funguje jak na systémech BIOS, tak UEFI, a dobře zvládá multi-booting s Windows. Zvolte **GRUB** pouze pokud specificky potřebujete podporu šifrovaného spouštěcího oddílu. Zvažte **rEFInd**, pokud upřednostňujete vyladěné grafické rozhraní a primárně provádíte multi-boot na systémech UEFI. Zvolte **systemd-boot**, pokud chcete nejjednodušší nastavení a nepotřebujete podporu snímků BTRFS ihned po instalaci.
