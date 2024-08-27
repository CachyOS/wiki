---
title: Zmeny v GUI inštalátore
description: Zmeny v Calamares a GUI Live ISO
---

## 24.06

**Funkcie:**

- chwd: Zavedenie detekcie hardvéru pre prenosné zariadenia
- chwd: Zavedenie podpory pre MacBook T2
- chwd: Pridanie detekcie sieťových ovládačov
- Inštalácia: Pridaná podpora pre MacBook T2
- ISO: Pridaný skript cachy-chroot, ktorý pomáha používateľovi chrootovať do systému
- ISO: Prechod na Microcode Hooks; to vyžaduje použitie najnovšej verzie Ventoy (1.0.98)
- ISO: Povolenie copytoram; už to nie je potrebné vypínať, pretože už neposkytujeme offline inštaláciu
- Súborový systém: BTRFS je teraz predvolený súborový systém
- netinstall: Použitie ufw namiesto firewalld
- Calamares: Aktualizácia brandingových slidov
- Slidy: Aktualizované pre najnovšie zmeny
- Aktualizácie balíčkov: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Opravy chýb:**

- Calamares: umount: Opätovné povolenie núdzového režimu
- Qtile: Multimediálne ovládacie prvky teraz fungujú správne
- NVIDIA: Povolenie požadovaných služieb a možností pre správny spánok na Waylande
- netinstall: Odstránenie b43-fwcutter z inštalácie
- netinstall: Nahradenie hyprland-git hyprlandom
- netinstall: Vyradenie linux-cachyos-lts zo zoznamu výberu, aby sa predišlo problémom s chýbajúcimi modulmi
- Calamares: Shellprocess: Presunutie hodnotenia zrkadiel pred inštaláciou kľúčovnice

**Zmeny z experimentálneho vydania pre prenosné zariadenia:**

- Predvolená téma KDE Vapor (SteamOS Theme)
- Predvolený súborový systém: BTRFS
- Predvolené jadro: linux-cachyos-deckify
- SDDM teraz používa Wayland
- Environmentálny flag pre HHD na zníženie latencie
- Pridané argumenty jadra na zlepšenie správania pri prepínaní herného režimu
- Užívateľské meno je teraz možné upraviť
- Konfigurácia detekcie hardvéru a inštalácia požadovaných balíčkov podľa použitého zariadenia
- Mallit klávesnica teraz používa tmavý režim
- Valve's Powerbuttond pre správne uspávanie
- Skôr je možné pridať skratky do Steam
- Aktualizované scx-scheds na najnovší commit, poskytujúci najnovšie vylepšenia pre LAVD Scheduler
- Pridané automount do cachyos-handheld
- CachyOS teraz môže vykonávať aktualizácie BIOSu Steam Deck na Steam Deck

  24.05

---

**Funkcie:**

- Súborové systémy: Zavedenie Bcachefs ako možnosti súborového systému
- pacstrap: Pridanie detekcie, či je použitý Bcachefs a inštalácia zodpovedajúcich nástrojov Bcachefs-tools
- CachyOS-AI-SDK: Zavedenie novej inštalačnej možnosti pre poskytovanie OOB NVIDIA SDK nastavenia
- CachyOS-Deckify: Poskytovanie variantu pre prenosné zariadenia (experimentálne), viac informácií [tu](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)
- BTRFS: Automatický Snapper pre snímky, je možné inštalovať z aplikácie CachyOS Hello
- ISO: Zrušenie offline inštalátora
- Aktualizácie balíčkov: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Opravy chýb:**

- settings.conf: Presunutie detekcie hardvéru pred netinstall
- pacstrap: Použitie btrfs-assistant namiesto btrfs-assistant-git
- plymouth: Odstránenie plymouth hook pri zfs + šifrovaní
- ISO: Pridanie rôznych konfiguračných súborov pre KDE, aby sa predišlo zamykaniu obrazovky počas inštalácie
- services-systemd: Správne povolenie fstrim.timer
- umount: Zakázanie núdzového režimu, aby sa predišlo problémom s inštaláciou zfs
- shellprocess: Vyčistenie zvyškov z offline inštalácie

  24.04

---

**Funkcie:**

- Plymouth: Použitie plymouth pre poskytnutie témy bootovacej animácie
- ISO: Prechod späť na X11 kvôli problémom pri nastavovaní rozloženia klávesnice v calamares
- rEFInd: Nové rozloženie oddielov (samostatné /boot a /boot/efi)
- netinstall: KDE: Predvolená inštalácia xwaylandvideobridge
- netinstall: Použitie lightdm namiesto ly pre rôzne desktopové prostredia kvôli chybe v ly
- systemd-boot: Použitie @saved pre systemd-boot, aby si zapamätal predtým vybraný bootovací záznam
- cachyos-keyring: Refaktorovanie balíčka cachyos-keyring a poskytovanie cachyos-trusted keyring
- ISO: Použitie ZSTD 19 kompresie pre mkinitcpio obraz ISO
- Aktualizácie balíčkov: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 a cachyos-settings 39-2

**Opravy chýb:**

- Autologin: Opravená možnosť autologin pri použití so sddm
- xz: Poskytnutie opraveného balíčka xz
- libarchive: Zmiernenie komitu od škodlivého xz aktéra
- cachyos-settings: udev-pravidlo: nezadávať watermark_scale_factor na 125, pretože to významne zvyšuje spotrebu RAM
- calamares: pacman-keyring: Použitie jednoduchšej metódy na integráciu keyring do inštalácie

  24.03.1

---

**Funkcie:**

- netinstall: Odstránenie extra jadier v netinstall výbere, aby sa predišlo zmätku medzi používateľmi. Ostatné vlastné jadrá je možné inštalovať cez Kernel Manager
- Kernel Manager: Moduly NVIDIA sa automaticky inštalujú, keď sú detegované, prepracované pre QT6, opravené vlastné názvy pri použití LTO možnosti
- Inštalátor balíčkov: Prepracovaný na QT6, aktualizovaný pre pacman 6.1
- Aktualizácie balíčkov: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Opravy chýb:**

- NVIDIA: opravený modul nvidia, aby prevzal vlastníctvo nvidia.drm.modeset skôr, aby sa predišlo problémom s grafickou kartou nvidia
- Refind: Neinštalovať lts jadro, aby sa predišlo problémom
- shellprocess: Úplné odstránenie adresára liveusers

  24.03

---

**Funkcie:**

- ISO: Plasma 6 je teraz súčasťou ISO a používa Wayland ako predvolený, GNOME ISO bolo zrušené, aby sa predišlo zmätku ohľadom netinstall
- Calamares: Prepracovaný pre QT6
- refind: Pridanie f2fs a zfs ako možnosti vrátane luks2 šifrovania
- mirrors: Teraz poskytujeme 2 globálne CDN. Jeden hostovaný Cloudflare R2 a druhý hostovaný Digital Ocean
- mirrorlist: Sťahovanie online inštalátora priamo z cdn pre rýchlejšie doručenie
- initcpiocfg: Použitie nového microcode hook pre skoré načítanie ucode
- bootloader: Už nevyužívať microcode s bootloaderom
- Aktualizácie balíčkov: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Opravy chýb:**

- pacstrap: Neinštalovať konfiguračné balíčky, aby sa používateľovi poskytol čistejší výber inštalácie
- shellprocess_pacman: Tiež kopírovať ohodnotené cachyos-v4-mirrorlisty do cieľa

  24.02

---

**Funkcie:**

- refind: Zmena rozloženia z /boot/efi na /boot, aby sa poskytlo viac možností súborových systémov a šifrovania
- Live-ISO: Vyčistenie a synchronizácia Live-ISO
- Spustenie inštalátora: Pridanie odporúčania pre online inštaláciu
- shell-configs: Pridanie možnosti zakázať fastfetch pri spustení terminálu a pridať alias "update"
- netinstall: Pridanie phonon-qt5-vlc do kde
- Aktualizácie balíčkov: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

  24.01

---

**Funkcie:**

- x86-64-v4: Automatická detekcia a povolenie repozitára počas inštalácie
- linux-cachyos: Rámec plánovača sched-ext je teraz poskytovaný v predvolenom jadre
- xwayland: Poskytovanie explicitných synchronizačných záplat ako predvolených
- Aktualizácie balíčkov: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Opravy chýb:**

- chwd: Pre karty Nvidia Ada Lovelace sa moduly nvidia priamo zabalujú do initramfs, aby sa predišlo problémom s počiatočným kms

  23.12

---

**Opravy chýb:**

- zfs: Pridanie compatibility=grub do nastavení poolu na zabezpečenie kompatibility
- grub/xfs: Pridanie záplaty do grub, aby bola kompatibilita s novým xfs bigtime predvolením
- netinstall: xdg-desktop-portal-hyprland namiesto xdg-desktop-portal-hyprland-git

  23.11

---

**Funkcie:**

- nvidia: Použitie modulu nvidia namiesto dkms
- Calamares synchronizovaný s upstream
- Aktualizácie balíčkov: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Opravy chýb:**

- nvidia-hook: Pridaný nvidia-hook, aby sa predišlo problémom počas inštalácie s novým modulom
- netinstall: Balíčky boli premenované kvôli nedávnym zmenám v KF5 balíčkovaní
- netinstall: xdg-desktop-portal-gnome bol pridaný do GNOME inštalácie

  23.09

---

**Funkcie:**

- systemd-boot: Predvolené na luks2
- netinstall: Poskytnutie vlastnej kategórie pre CachyOS balíčky
- Calamares synchronizovaný s upstream
- Aktualizácie balíčkov: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Opravy chýb:**

- shellprocess_sdboot: Vyhnutie sa používaniu "sudo" pri generovaní bootovacích záznamov počas inštalácie

  23.08

---

**Funkcie:**

- Calamares synchronizovaný s upstream
- Aktualizácie balíčkov: linux-cachyos 6.4.10, nvidia-utils 535.98

**Opravy chýb:**

- Keyring bol aktualizovaný a teraz funguje správne

  23.07

---

**Funkcie:**

- CachyOS-Settings teraz zahŕňajú "bpftune", ktorý automaticky upravuje sieťové nastavenia podľa použitia
- CachyOS-Qtile-Settings: Zlepšenie kvality života, lepšie ikony, ...
- Aktualizácie balíčkov: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3

**Opravy chýb:**

- rate-mirrors bol opravený
- chwd (Hardware Detection) dostal niekoľko opráv
- opravená inštalácia nevoľných ovládačov pre hybridné nastavenie v inštalátore
- opravené zamrznutia Calamares, ktoré sa vyskytovali v niektorých zriedkavých konfiguráciách, hlavne VM
- Slidy: Opravená chyba v Slide 6

  23.06

---

**Opravy chýb:**

- Offline inštalácia: Opravený calamares

## 23.05

**Funkcie:**

- CachyOS Git Migration layout je teraz reflektovaný v inštalácii
- chwd (mhwd) dostal niekoľko opráv
- Pacman: Pridali sme funkciu, ktorá umožňuje poskytovať správu našim používateľom pred aktualizáciou
- Calamares bol synchronizovaný s upstream
- Aktualizácie balíčkov: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Opravy chýb:**

- netinstall: minimálne opravy kvôli zmenám balíčkov
- Slidy: Slide 6 bol aktualizovaný, aby reflektoval najnovšie zmeny

  23.04

---

**Funkcie:**

- Zavedenie desktopového prostredia Qtile
- Prepracovaný mhwd: Prepis v Rust; Zjednodušené profily pre GPU a sieťové karty; Odstránenie množstva starého kódu
- Aktualizácie balíčkov: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Opravy chýb:**

- f2fs: Odstránenie možnosti mountovania "atgc", pretože má problémy so systemd

  23.03.1

---

**Funkcie:**

- Aktualizácie balíčkov: linux-cachyos 6.2.7, cachy-browser 111.0

**Opravy chýb:**

- Calamares bol opravený s lightdm displaymanager kvôli chybným upstream commitom
- Problém s offline inštaláciou keyring bol opravený
- Refind: Použitie linux-cachyos-lts ako predvolené. Aktuálne 6.2 sa nezdá dobre fungovať s refind

  23.03

---

**Nové funkcie:**

- Pridaný bootloader refind
- Automatická inštalácia ovládačov Nvidia pomocou MHWD
- Podpora šifrovania pre inštaláciu ZFS
- Pridaný Hyprland do netinstallation
- CachyOS-KDE-Settings teraz používa predvolenú tému KDE, ale témy CachyOS sú stále predinštalované a k dispozícii na použitie
- Aktualizácie balíčkov: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Plne prepracovaný a vylepšený modul bootloadera calamares
- ISO je teraz podpisované s GPG kľúčom
- MHWD bol vylepšený a aktualizovaný
- Synchronizovaný Calamares s upstream

**Opravy chýb:**

- Možnosť "nahradiť oddiel" teraz ponúka výber súborového systému
- Opravená chyba v Slide 3
- nouveau bol opravený a teraz správne načíta modul
- MHWD: Použitie modesetting pre INTEL/ATI a Nouveau
- Odstránenie zfs hook z mkinitcpio na live iso, ktorý spôsoboval problémy pri bootovaní
- Aktualizáciu si môžete stiahnuť z našich zrkadiel na SourceForge

  23.02

---

**Nové funkcie:**

- Pridaný repozitár cachyos-community-v3
- Pridané desktopové prostredia Budgie, Mate a LXDE do netinstallation
- Bluetooth.service je teraz predvolene povolený
- F2FS a grub sú opäť povolené a fungujú
- Aktualizácie balíčkov: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Opravy chýb:**

- Rate-mirrors teraz používa nerankované zrkadlá, ak sa nepodarí ich ohodnotenie
- cachyos-rate-mirrors má dlhší fetch-mirrors-timeout
- Github bol pridaný do hostov, aby sa predišlo problémom so zoznamom zrkadiel
- Aktualizované boot záznamy pre BIOS v syslinux

  23.01

---

**Funkcie:**

- Calamares slidy boli prepracované a aktualizované
- Pridané desktopové prostredie UKUI do netinstallation
- Pridané desktopové prostredie Cinnamon do netinstallation
- Cmdline: zswap je teraz predvolene zakázaný, pretože CachyOS poskytuje zram ako predvolené
- Calamares aktualizovaný na najnovší commit
- LLVM 15 je teraz predvolene dodávaný
- Aktualizácie balíčkov: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- Aktualizovaný CLI inštalátor

**Opravy chýb:**

- shellprocess remove-ucode teraz beží aj pri offline inštalácii
- pamac bol odstránený z netinstall
- ohodnotené cachyos zrkadlá sa teraz správne kopírujú do cieľovej inštalácie
- power-profile-daemon už nie je predvolene povolený

  22.12

---

**Funkcie:**

- Nové pozadie GRUB na ISO bootloaderi
- memtest je teraz zahrnutý pre UEFI systémy
- CachyOS-sddm-téma bola pridaná do inštalácie KDE
- Pridaný automatický verziový skript pri vytváraní ISO
- Calamares aktualizovaný na najnovší commit
- Zrkadlá sú teraz hodnotené pomocou "cachyos-rate-mirrors", ktoré hodnotia naše a arch zrkadlá
- Aktualizácie balíčkov: Kernel 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Kofuku desktopové prostredie bolo odstránené
- extra ISO s llvm 15 zahrnuté na podporu novších AMD kariet

**Opravy chýb:**

- Calamares bol opravený pri použití GNOME na ISO
- zfshostid teraz správne funguje pre offline aj online inštaláciu
- Pridanie "kms" hook do modulu initcpiocfg, aby sa dodržali predvolené hodnoty archlinux
- A ďalšie opravy ISO

  22.11

---

**Funkcie:**

- Calamares a jeho konfigurácia sú dodávané v jednom balíčku
- Úplné vyčistenie balíčkov v netinstall
- Pridanie modulu, ktorý automaticky odstráni nepotrebný ucode
- Požadovaná RAM znížená na 2.5GB
- Balíčky potrebné pre btrfs sa teraz inštalujú len pre btrfs
- Calamares aktualizovaný na najnovší commit
- ISO bootloader teraz má pozadie
- Bežné aktualizácie balíčkov (mesa, kernel, ...)
- Nahradenie systemd-network networkmanagerom

**Opravy chýb:**

- qemu-quest-agent.service bol odstránený z ISO
- copytoram bol úplne zakázaný, pretože to prerušuje offline inštaláciu
- mkinitcpio.conf bol aktualizovaný
- A ďalšie opravy ISO

  22.10

---

**Funkcie:**

- Pacman teraz používa Architecture=auto pre inštaláciu x86-64-v3, pretože sme pridali patch, ktorý umožňuje pacmanu automaticky detekovať x86-64-v3
- Pacman teraz zobrazuje, z ktorého repozitára bol balíček nainštalovaný
- Výber bootloadera automaticky deteguje, či je prítomné EFI, ak nie, predvolí sa grub
- Voľba swap bola teraz predvolene zakázaná, pretože zram sa automaticky dynamicky generuje
- Calamares aktualizovaný na najnovší commit
- Minimálna požiadavka na RAM bola nastavená na 4GB
- cachyos-grub-téma bola odstránená

**Opravy chýb:**

- Detekcia SSD a HDD v fstab bola zakázaná, kým nebude k dispozícii upstream oprava
- Opravená dvojitá BTRFS subvolume
- Pridaný chýbajúci microcode do ISO grub bootloader
- Pridaný fallback bootmode, ktorý nenastavuje žiadny modeset (nomodeset)
- A ďalšie opravy ISO

  22.09

---

**Funkcie:**

- Calamares je teraz na najnovšej vetve 3.3. Prináša opravy chýb a nové funkcie pre calamares
- TUI-Inštalátor je teraz zahrnutý v GUI ISO, môžete ho použiť s "cachyos-installer"
- Calamares teraz automaticky deteguje, či je cieľový súborový systém SSD alebo HDD a upraví podľa toho možnosti fstab
- Nvidia pre najnovšie GPU (od 9xx) má teraz vlastný bootovací záznam, aby sa predišlo problémom s nouveau
- Možnosti mountovania v fstab a zfs boli aktualizované
- FireFox už nebude predvolene inštalovaný, pretože cachy-browser je predvolený

**Opravy chýb:**

- cachyos-gaming-meta bol odstránený z modulu netinstall, aby sa predišlo problémom počas inštalácie
- netinstall balíčky boli aktualizované a dostali niekoľko opráv
- Opravená inštalácia OpenBox
- Bežné opravy prekladov

  22.07

---

**Funkcie:**

- Výber bootloadera: Používateľ si teraz môže vybrať pri online inštalácii medzi grub a systemd-boot
- Pri online inštalácii bude vždy nainštalovaný najnovší calamares, čo pomáha opravovať chyby "za chodu"
- Calamares teraz obsahuje modul mhwd, ktorý automaticky inštaluje potrebné ovládače (voľné ovládače)
- Calamares má nové obrázkové slidy pri inštalácii
- Možnosti mountovania v fstab a zfs boli aktualizované
- Podpora HiDPI

**Opravy chýb:**

- Chyba s locales v calamares bola opravená
- F2FS bol odstránený pre grub bootloader, pretože momentálne nefunguje (problém s calamares), stále ho možno použiť so systemd-boot
- Calamares teraz zobrazuje správny predvolený súborový systém
- Gnome ISO bolo opravené
- Pridané chýbajúce balíčky do live ISO pre offline inštaláciu
- Opravený btrfs swap luksencryption
- Bežné opravy prekladov

  22.06

---

Nasledujúce známe chyby boli opravené:

- Inštalácia zlyhala, keď bol použitý generický CPU
- KDE automaticky pripojovalo zfs oddiely, čo malo za následok, že automatické prihlásenie do ISO už nefungovalo

**Vylepšenia:**

- Firewall na serveri bol opravený, cloudflare blokoval používateľov ako "botov", čo malo za následok chybu pri inštalácii
- Pridaná podpora témy pre Gnome, XFCE, OpenBox
- Aktualizovaná naša wiki

**_CachyOS - Kernel - Manager_**
Sme tiež nadšení, že môžeme oznámiť náš CachyOS-Kernel-Manager.
Tu máte možnosť nainštalovať jadro z repozitára a tiež konfigurovať svoje vlastné jadro pomocou GUI, čo veľmi uľahčuje jeho prispôsobenie podľa svojich potrieb.

Nasledujúce možnosti môžete vybrať pre kompiláciu jadra:

- Plánovač (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA vypnuté alebo zapnuté
- KBUILD CFLAGS (-O3 alebo -O2)
- Nastaviť výkonový správca ako predvolený
- Povoliť BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- bez tickless (idle, periodic, full)
- deaktivovať MQ-Deadline I/O plánovač
- deaktivovať Kyber I/O plánovač
- Povoliť alebo zakázať MG-LRU
- Povoliť alebo zakázať DAMON
- Povoliť alebo zakázať špekulatívnu stránkovú chybu
- Povoliť alebo zakázať LRNG (Linux Random Number Generator)
- Aplikovať automatickú optimalizáciu jadra (automaticky deteguje váš CPU March)
- Vybrať optimalizáciu jadra (Zobrazí sa zoznam rôznych CPU-March a môžete vybrať svoje)
- Deaktivovať debug (zníži veľkosť jadra)
- Povoliť alebo zakázať nf cone
- Povoliť LTO (Full, Thin, No)

  22.05

---

CachyOS bol založený pred rokom. Po takmer roku vývoja sme naozaj hrdí, že môžeme oznámiť naše prvé stabilné vydanie GUI inštalátora.
Strávili sme veľa času skúmaním správy repozitára, vývoja jadra, infraštruktúry, témy, ... a nakoniec sme všetko vložili do CachyOS GUI inštalátora.
Všetky funkcie, na ktorých sme pracovali a implementovali do inštalátora, sa snažia ponúknuť používateľom úplne prispôsobiteľný zážitok.

Najvzrušujúcejšie zmeny sú, že teraz pre online inštaláciu používame pacstrap, ktorý poskytuje úplne čisté inštalované prostredie a podporujeme úplnú natívnu podporu pre súborový systém zfs

Pretože Discord obmedzuje dĺžku správ, celé oznámenie nájdete tu:

[https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/](https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/)

Stiahnutie nájdete tu:
[https://mirror.cachyos.org/ISO/kde/220522/](https://mirror.cachyos.org/ISO/kde/220522/)
[https://sourceforge.net/projects/cachyos-arch/](https://sourceforge.net/projects/cachyos-arch/)
