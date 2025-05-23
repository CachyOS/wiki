---
title: Nabízené správce bootování
description: Popis a doporučení aktuálně nabízených správců bootování
---

Aby CachyOS nabídl co nejlepší uživatelský zážitek na různých zařízeních, aktuálně nabízí následující správce bootování: systemd-boot, rEFInd a GRUB.
Tento článek popisuje funkce jednotlivých správců bootování a zahrnuje také naše doporučení pro jejich výběr. Pro konfiguraci viz [Konfigurace správce bootování](/configuration/boot_manager_configuration).

## systemd-boot
Systemd-boot je součást rodiny systemd a byl vytvořen s cílem být co nejjednodušší, a proto podporuje pouze systémy založené na UEFI. Tento jednoduchý, ale efektivní design zajišťuje spolehlivost a rychlost. Nicméně to je na úkor pokročilých funkcí podporovaných jinými správci bootování.

### Klady
- Velmi jednoduchá konfigurace.
- Záznamy bootování jsou rozděleny do více souborů, což usnadňuje jejich správu.

### Zápory
- Nepodporuje systémy BIOS.
- Velmi jednoduchý design, který postrádá jakékoliv možnosti motivů nebo přizpůsobení.
- Konfigurace není automaticky generována, pokud to není explicitně nastaveno. CachyOS zahrnuje správce systemd-boot s podporou automaticky generované konfigurace.
- Schopen číst pouze bootovací obrazy na EFI podporovaných systémech souborů (FAT, FAT16, FAT32).
- Neschopnost najít bootovací obrazy na oddílech jiných než vlastních.

### Doporučení
Systemd-boot je výchozí a doporučený správce bootování pro CachyOS. Zvolte jej, pokud si nejste jisti.

## rEFInd
rEFInd, odvozený od rEFIt, byl původně vytvořen, aby usnadnil multi-bootování pro uživatele MacOS. Nicméně rEFInd se vyvinul v hardware-agnostický správce, což z něj činí skvělou volbu pro multi-bootování na jakémkoliv systému. Jeho hlavní předností je schopnost při bootování prohledat všechna úložná zařízení a zobrazit záznamy pro každý nalezený OS/jádro.

### Klady
- Automatická detekce všech operačních systémů a jader na úložných zařízeních.
- Minimální nebo žádná konfigurace díky zmíněné autodetekci.
- Grafické rozhraní připomínající výběr bootování MacOS.
- Skvělá podpora motivů.
- Schopnost číst bootovací obrazy z EFI systémů souborů (FAT, FAT16, FAT32) i z EXT4 a BTRFS.

### Zápory
- Nepodporuje systémy BIOS.

### Doporučení
rEFInd je doporučený správce bootování pro zařízení s více operačními systémy.

## GRUB
GRUB je nejstarší z dostupných správců bootování a jediný, který podporuje bootování přes BIOS. Má velmi rozsáhlou sadu funkcí, funguje na téměř všech zařízeních a je nejčastěji používaným správcem bootování na Linuxu.

### Klady
- Schopnost číst bootovací obrazy téměř ze všech dostupných linuxových systémů souborů.
- Široce používaný a snadno dostupné informace online.
- Schopnost dešifrovat šifrované bootovací oddíly.
- Jediný boot loader umožňující bootování na BIOS zařízeních.
- I když vzhled působí zastarale, má skvělou podporu motivů jako kompenzaci.

### Zápory
- Zbytečně robustní kvůli nutnosti podporovat velmi starý hardware a zahrnout mnoho ovladačů systémů souborů.
- Znatelně pomalejší ve srovnání se systemd-boot, rEFInd a Limine.

### Doporučení
GRUB je jediný dostupný boot loader, který podporuje bootování přes BIOS. Je také jediným správcem bootování, který podporuje šifrování bootovacího oddílu (odlišné od šifrování disku).

## Limine

Limineje moderní, pokročilý a přenosný multiprotokolový zavaděč. Slouží jako referenční implementace protokolu Limine boot a podporuje zavádění Linuxu i řetězové zavádění jiných zavaděčů.

### Výhody

- Podporuje více protokolů zavádění, včetně Multiboot2 a protokolů zavádění Linuxu.
- Dokáže zavádět systém jak na UEFI, tak na BIOS systémech, což ho činí univerzálním pro různé hardwarové konfigurace.
- Má možnosti přizpůsobení vzhledu podobné GRUBu.
- Přímá podpora pro snímky Btrfs, která je ve výchozím nastavení povolena pro instalace používající Btrfs jako souborový systém.

### Nevýhody

- Podporuje pouze několik souborových systémů, jako jsou FAT12, FAT16, FAT32 a ISO9660 pro oddíl `/boot`, což může vyžadovat dodatečné nastavení pro systémy používající jiné souborové systémy.
- Na rozdíl od některých jiných zavaděčů Limine automaticky nepřidává záznam do NVRAM na UEFI systémech; toto musí být provedeno ručně pomocí nástrojů jako `efibootmgr` nebo prostřednictvím `limine-entry-tool`, který je v CachyOS předinstalován.

### Doporučení

Limine je doporučován pro uživatele, kteří potřebují lehký a univerzální zavaděč podporující jak UEFI, tak BIOS systémy. Je obzvláště vhodný pro ty, kteří preferují jednoduché nastavení s možnostmi přizpůsobení vzhledu a podporou snímků Btrfs. Navíc Limine slouží jako moderní náhrada za GRUB, který v poslední době zaznamenal méně aktualizací a čelil několika bezpečnostním problémům kvůli svým EFI/souborovým ovladačům.

## Shrnutí

Vyberte **Limine** pro většinu uživatelů: nabízí snadné nastavení s vestavěnou podporou snímků BTRFS, funguje jak na BIOS, tak na UEFI systémech a dobře zvládá multi-boot s Windows. Vyberte **GRUB** pouze pokud konkrétně potřebujete podporu šifrovaného zaváděcího oddílu. Zvažte **rEFInd**, pokud upřednostňujete kvalitní grafické rozhraní a primárně používáte multi-boot na UEFI systémech. Vyberte **systemd-boot**, pokud chcete nejjednodušší nastavení a nepotřebujete podporu snímků BTRFS přímo z výroby.
