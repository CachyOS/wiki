---
title: Nabízení Boot Manažeři
description: Popis a doporučení pro aktuálně nabízené boot manažery
---

# Boot Manažeři CachyOS

Abychom nabídli nejlepší zážitek na různých zařízeních, CachyOS aktuálně nabízí následující správce zavádění systému: systemd-boot, rEFInd a Grub. Tento článek na wiki popisuje sadu funkcí každého správce zavádění a obsahuje také naše doporučení, kdy je použít.

:::note
Každý správce zavádění podporuje všechny naše aktuálně dostupné volby souborových systémů a plné šifrování rootu.
:::

## systemd-boot

Část rodiny systemd, systemd-boot byl vytvořen, aby byl co nejjednodušší, a proto podporuje pouze systémy založené na UEFI. Tento jednoduchý, ale účinný design zajišťuje, že je spolehlivý a rychlý. To však přichází za cenu pokročilých funkcí podporovaných jinými správci zavádění.

### Klady:

- Nejrychlejší ze tří správců zavádění.
- Velmi jednoduchá konfigurace.
- Záznamy zavádění jsou rozděleny do více souborů, což usnadňuje správu.
- Jednoduchý, ale moderní design.

### Zápory:

- Nepodporuje systémy BIOS.
- Nemá žádnou podporu témat nebo přizpůsobení.
- Konfigurace není automaticky generována, pokud není nastavena. CachyOS zahrnuje správce systemd-boot pro automatickou generaci.
- Schopen číst obrazy zavádění pouze na souborových systémech podporovaných EFI (FAT, FAT16, FAT32).
- Neschopnost najít obrazy zavádění na jiných oddílech než na svém vlastním bez ručního zásahu.

### Konfigurace

Hlavním nástrojem příkazového řádku pro sd-boot je sdboot-manage.
Konfigurační soubor pro změnu parametrů jádra a dalších možností se nachází v `/etc/sdboot-manage.conf`.
Záznamy zavádění se nacházejí v /boot/loader/entries/.

### Rozložení oddílů:

- Minimálně 1GB (doporučeno 2GB) FAT32 EFI zaváděcí oddíl (/boot).
- Minimálně 5.5GB uživatelem zvolený souborový systém root (/).

### Doporučení:

Systemd-boot je doporučený správce zavádění pro CachyOS. Zvolte tento, pokud nepotřebujete žádné funkce specifické pro Grub a rEFInd.

## rEFInd

Fork rEFIt, rEFInd byl primárně vytvořen, aby usnadnil multi-boot uživatelům MacOS. Nicméně rEFInd se vyvinul tak, aby byl hardwarově agnostický, což z něj činí skvělou volbu pro multi-boot na jakémkoliv systému. Hlavní přitažlivostí rEFInd je jeho schopnost skenovat všechna úložná zařízení při zavádění a odpovídajícím způsobem zobrazit záznamy pro každý nalezený OS/jádro.

### Klady:

- Automatická detekce všech operačních systémů a jader na úložných zařízeních.
- Málo nebo žádná konfigurace potřebná díky zmíněné automatické detekci.
- Snadná podpora zabezpečeného zavádění.
- Mnohem grafičtější uživatelské rozhraní připomínající MacOS Boot selector.
- Skvělá podpora témat.
- CachyOS poskytuje jiné rozložení oddílů pro rEFInd pro další zvýšení kompatibility multi-boot s jinými OS, jako je Windows.
- Schopen číst obrazy zavádění ze souborových systémů EFI (FAT, FAT16, FAT32) i ext4 a btrfs.

### Zápory:

- Nepodporuje systémy BIOS.
- Mírně pomalejší kvůli funkci automatické detekce.

### Konfigurace

Hlavním nástrojem příkazového řádku pro rEFInd je refind-install.
Parametry jádra jsou poskytovány souborem nazvaným refind_linux.conf, který se nachází vedle jader (obvykle /boot).
Primární konfigurační soubor rEFInd je obvykle umístěn v /boot/efi/refind/refind.conf.

### Rozložení oddílů:

- Minimálně 50MB FAT32 EFI oddíl (/boot/efi).
- Minimálně 1GB (doporučeno 2GB) ext4 zaváděcí oddíl (/boot).
- Minimálně 5.5GB uživatelem zvolený souborový systém root (/).

### Doporučení:

rEFInd je doporučený správce zavádění pro zavádění s více operačními systémy.

## Grub

Grub je nejstarší z dostupných správců zavádění a následně jediný, který podporuje zavádění BIOS. Má velmi rozsáhlou sadu funkcí, funguje na téměř každém stroji a je nejčastěji používaným správcem zavádění Linuxu.

### Klady:

- Schopen číst obrazy zavádění z téměř všech dostupných linuxových souborových systémů.
- Široce používaný a velmi snadno najít informace online.
- Schopen dešifrovat šifrované zaváděcí oddíly.
- Jediný dostupný boot*loader*, což mu umožňuje zavádět BIOS stroje.
- Vypadá zastarale. Nicméně má skvělou podporu témat na kompenzaci.

### Zápory:

- Nabobtnalý kvůli potřebě podporovat mnohem starší hardware a potřebě mnoha ovladačů souborových systémů.
- Mírně pomalejší než ostatní správci zavádění kvůli zmíněnému nabobtnání.
- Složitá konfigurace, která musí být regenerována pokaždé, když je aktualizováno jádro. (Nicméně toto je prováděno automaticky.)

### Konfigurace

Hlavním nástrojem příkazového řádku pro grub je grub-mkconfig.
Hlavní konfigurační soubor Grub je obvykle umístěn v /boot/grub/grub.cfg.

### Rozložení oddílů:

#### BIOS:

- Minimálně 6.5GB uživatelem zvolený souborový systém root (/).

#### UEFI:

- Minimálně 50MB EFI oddíl (/boot/efi).
- Minimálně 6.5GB uživatelem zvolený souborový systém root (/).

### Doporučení:

Grub je jediný dostupný správce zavádění, pokud váš stroj podporuje pouze zavádění BIOS. Je to také jediný správce zavádění, který podporuje šifrování zaváděcího oddílu (na rozdíl od šifrování disku). Pokud nesplňujete tato kritéria, doporučujeme alternativní správce zavádění.

## Shrnutí

Vyberte Grub, pokud váš stroj podporuje pouze BIOS, zvolte rEFInd, pokud plánujete mít na svém stroji více operačních systémů (zejména Windows), jinak zvolte systemd-boot.
