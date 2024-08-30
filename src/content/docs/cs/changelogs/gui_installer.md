---
title: GUI Instalátor changelog
description: Changelog Calamares a GUI Live ISO
---
24.06
----

**Novinky:**
- chwd: Zavedení detekce hardware pro přenosná zařízení
- chwd: Podpora T2 MacBooků
- chwd: Přidání detekce síťových ovladačů
- Instalace: Přidána podpora pro MacBooky s čipem T2
- ISO: Přidán skript cachy-chroot, který umožňuje uživateli chrootovat do systému.
- ISO: Přepnutí na Microcode Hooks; vyžaduje nejnovější verzi Ventoy (1.0.98)
- ISO: Povolení možnosti copytoram; již není nutné ji zakazovat, protože již neposkytujeme offline instalaci
- Souborový systém: BTRFS je nyní výchozí volbou
- Netinstall: Použití ufw místo firewalld
- Calamares: Aktualizace značkovacích snímků
- Snímky: Aktualizovány podle nejnovějších změn
- Aktualizace balíků: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Opravy chyb:**
- Calamares: umount: Opět povolen nouzový režim
- Qtile: Multimediální ovládání nyní správně funguje
- NVIDIA: Povolení potřebných služeb a možností pro správný spánek v prostředí Wayland
- Netinstall: Odstranění b43-fwcutter z instalace
- Netinstall: Nahrazení hyprland-git verzí hyprland
- Netinstall: Odstranění linux-cachyos-lts z výběru kvůli problémům s chybějícími moduly
- Calamares: Shellprocess: Přesunutí hodnocení zrcadel před instalaci klíčů

**Změny z experimentální verze pro přenosná zařízení:**
- Výchozí téma: KDE Vapor Theme (SteamOS Theme)
- Výchozí souborový systém: BTRFS
- Výchozí jádro: linux-cachyos-deckify
- SDDM nyní používá Wayland
- Environment Flag pro HHD ke snížení latence
- Přidání kernelových argumentů pro lepší chování režimu Game Mode
- Uživatelské jméno nyní může být upraveno
- Detekce hardware konfiguruje a instaluje potřebné balíčky v závislosti na použitém zařízení
- Klávesnice Mallit nyní používá tmavý režim
- Valve's Powerbuttond pro správné uspávání
- Zkratky nyní mohou být přidány do Steamu
- Aktualizace scx-scheds na nejnovější git commit, poskytující nejnovější vylepšení pro plánovač LAVD Scheduler
- Přidání automount do cachyos-handheld
- CachyOS nyní může provádět aktualizace BIOSu na Steam Decku

24.05
----

**Novinky:**
- Souborové systémy: Přidání Bcachefs jako možnosti souborového systému
- pacstrap: Detekce použití Bcachefs a instalace odpovídajících Bcachefs-tools
- CachyOS-AI-SDK: Zavedení nové instalační možnosti pro OOB NVIDIA SDK Setup
- CachyOS-Deckify: Poskytnutí varianty pro přenosná zařízení (experimentální), více informací [zde](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)
- BTRFS: Automatický Snapper pro snapshoty, může být nainstalován z aplikace CachyOS hello.
- ISO: Odstranění Offline Installeru
- Aktualizace balíků: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2 , NVIDIA 550.78

**Opravy chyb:**
- settings.conf: Přesun detekce hardware před netinstall
- pacstrap: Použití btrfs-assistant místo btrfs-assistant-git
- plymouth: odebrání plymouth hooku na zfs + šifrování
- ISO: Přidání různých konfiguračních souborů pro KDE, aby nedošlo k uzamčení obrazovky během instalace
- services-systemd: Správné povolení fstrim.timer
- umount: Zakázání nouzového režimu pro zabránění problémům s instalací zfs
- shellprocess: Úklid zbytků z offline instalace

24.04
----

**Novinky:**
- Plymouth: Použití plymouth pro poskytnutí tématizovaného animovaného bootovacího obrazu
- ISO: Přepnutí zpět na X11 kvůli problémům se nastavením rozložení klávesnice v calamares
- rEFInd: Nové rozložení oddílů (/boot odděleně a /boot/efi)
- Netinstall: KDE: Instalace xwaylandvideobridge jako výchozí
- Netinstall: Použití lightdm místo ly pro různá desktopová prostředí kvůli chybě v ly
- systemd-boot: Použití @saved pro systemd-boot k možnosti zapamatování předchozího výběru zavaděče
- cachyos-keyring: Refaktorizace balíčku cachyos-keyring a poskytnutí důvěryhodného klíčového prstenu cachyos
- ISO: Použití komprese ZSTD 19 pro mkinitcpio obraz ISO
- Aktualizace balíků: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 a cachyos-settings 39-2

**Opravy chyb:**
- Autologin: Oprava možnosti automatického přihlášení při použití sddm
- xz: Poskytnutí opraveného balíčku xz
- libarchive: Zmírnění problému závadným xz aktérem
- cachyos-settings: udev-rule: nedávat watermark_scale_factor na 125, protože výrazně zvyšuje využití paměti RAM
- calamares: pacman-keyring: Použití jednodušší metody pro integraci klíčového prstenu do instalace

24.03.1
----

**Novinky:**
- netinstall: Odstranění nadbytečných jader ve výběru netinstall pro lepší orientaci uživatelů. Ostatní vlastní jádra lze instalovat pomocí Kernel Manageru.
- Kernel Manager: NVIDIA moduly jsou nyní automaticky instalovány při detekci, přepracováno pro QT6, opraveny vlastní názvy při použití možnosti LTO.
- Package Installer: Přepracován pro QT6, aktualizován pro pacman 6.1.
- Aktualizace balíků: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Opravy chyb:**
- NVIDIA: Opraven modul nvidia tak, aby vlastnil dříve nvidia.drm.modeset a předešel tak problémům s grafikou NVIDIA.
- Refind: Nepoužívá se již instalace LTS jádra kvůli potenciálním problémům.
- shellprocess: Úplné odstranění adresáře liveusers.

24.03
----

**Novinky:**
- ISO: Plasma 6 je nyní součástí ISO a jako výchozí je použit Wayland. ISO s GNOME bylo zrušeno kvůli zjednodušení netinstall.
- Calamares: Přepracován pro QT6.
- refind: Přidány možnosti f2fs a zfs včetně šifrování luks2.
- Mirrors: Nově poskytujeme 2 globální CDN. Jedno je hostované na Cloudflare R2 a druhé na Digital Ocean.
- mirrorlist: Online instalátor je nyní stahován přímo z CDN pro rychlejší dodání.
- initcpiocfg: Použití nového microcode hook pro brzké načítání ucode.
- bootloader: Mikrokód již není načítán s bootloaderem.
- Aktualizace balíků: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Opravy chyb:**
- pacstrap: Není již instalováno konfigurační balíčky pro čistší výběr instalace.
- shellprocess_pacman: Kopírování ranked cachyos-v4-mirrorlists na cíl.

24.02
-----

**Novinky:**
- refind: Změna layoutu z /boot/efi na /boot pro více možností souborových systémů a šifrování.
- Live-ISO: Úklid a synchronizace Live-ISO.
- Launch Installer: Doporučení pro online instalaci při spuštění instalátoru.
- shell-configs: Možnost zakázat fastfetch při spuštění terminálu a přidání aliasu "update".
- netinstall: Přidání phonon-qt5-vlc do KDE.
- Aktualizace balíků: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Novinky:**
- x86-64-v4: Autodetekce a povolení repozitáře při instalaci.
- linux-cachyos: Framework sched-ext scheduler je nyní součástí výchozího jádra.
- xwayland: Poskytování explicitních synchronizačních patchů jako výchozí.
- Aktualizace balíků: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Opravy chyb:**
- chwd: Pro grafické karty Nvidia Ada Lovelace jsou moduly nvidia nyní přímo zabaleny do initramfs pro předejití problémům s early kms.

23.12
-----

**Opravy chyb:**
- zfs: Přidání compatibility=grub k volbám poolu pro zajištění kompatibility.
- grub/xfs: Přidání patche do grubu pro kompatibilitu s novým xfs bigtime výchozím nastavením.
- netinstall: xdg-desktop-portal-hyprland místo xdg-desktop-portal-hyprland-git

23.11
-----

**Novinky:**
- nvidia: Použití modulu nvidia místo dkms
- Calamares synchronizován s upstreamem
- Aktualizace balíků: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Opravy chyb:**
- nvidia-hook: Přidán zpět nvidia-hook, aby se předešlo problémům při instalaci s novým modulem
- netinstall: Balíčky byly přejmenovány kvůli nedávným změnám v balení KF5
- netinstall: xdg-desktop-portal-gnome byl přidán do instalace GNOME

23.09
-----

**Novinky:**
- systemd-boot: Výchozí nastavení na luks2
- netinstall: Poskytnutí vlastní kategorie pro balíčky CachyOS
- Calamares synchronizován s upstreamem
- Aktualizace balíků: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Opravy chyb:**
- shellprocess_sdboot: Při generování záznamů o bootu při instalaci se nyní vyhýbá použití "sudo".

23.08
-----

**Novinky:**
- Calamares synchronizován s upstreamem
- Aktualizace balíků: linux-cachyos 6.4.10, nvidia-utils 535.98

**Opravy chyb:**
- Keyring byl aktualizován a nyní správně funguje.

23.07
-----

**Novinky:**
- CachyOS-Settings nyní zahrnuje "bpftune", který automaticky upravuje nastavení sítě podle použití.
- CachyOS-Qtile-Settings: Změny pro zlepšení uživatelského zážitku, lepší ikony, ...
- Aktualizace balíků: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Opravy chyb:**
- rate-mirrors byl opraven.
- chwd (Hardware Detection) dostal několik oprav.
- Opravena instalace nevolných ovladačů pro hybridní nastavení v instalátoru.
- Opraveny zamrzání Calamares, které se vyskytovalo v některých vzácných konfiguracích, zejména ve virtuálním prostředí.
- Slides: Oprava chyby v textu na slide 6.

23.06
-----

**Opravy chyb:**
- Offline instalace: Opraveno Calamares.

23.05
-----

**Novinky:**
- CachyOS Git migrace je nyní reflektována při instalaci.
- chwd (mhwd) dostal několik oprav.
- Pacman: Přidána funkce umožňující zobrazit uživatelům zprávu před aktualizací.
- Calamares byl synchronizován s upstreamem.
- Aktualizace balíků: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Opravy chyb:**
- netinstall: Minimální opravy kvůli změnám v balíčcích.
- Slides: Slide 6 byl aktualizován, aby reflektoval poslední změny.

23.04
-----

**Novinky:**

- Představení desktopového prostředí Qtile
- Přepracované mhwd: Přepsání do Rustu; Zjednodušené profily pro GPU a síťové karty; Odstranění množství starého kódu
- Aktualizace balíků: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Opravy chyb:**

- f2fs: Odstranění možnosti "atgc" pro mount, protože má problémy se systemd

23.03.1
-------

**Novinky:**
- Aktualizace balíků: linux-cachyos 6.2.7, cachy-browser 111.0

**Opravy chyb:**

- Calamares byl opraven s lightdm displaymanagerem kvůli chybným commitům v Calamares upstreamu
- Opraven problém s klíčováním při offline instalaci
- Refind: Použití linux-cachyos-lts jako výchozího. Aktuální verze 6.2 se zdá, že nefunguje dobře s refindem.

23.03
-----

**Nové funkce:**

- Přidán bootloader refind
- Automatická instalace ovladačů Nvidia pomocí MHWD
- Podpora šifrování pro instalaci ZFS
- Přidán Hyprland do netinstallace
- CachyOS-KDE-Settings nyní používá výchozí téma KDE, ale CachyOS motivy jsou stále předinstalovány a dostupné k použití
- Aktualizace balíků: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Zcela přepracováno a vylepšeno calamares modul pro bootloader
- ISO nyní podepsána GPG klíčem
- MHWD byl vylepšen a aktualizován
- Synchronizováno Calamares s upstreamem

**Opravy chyb:**

- Možnost "nahradit oddíl" nyní nabízí výběr souborového systému
- Opravena chyba v textu na slide 3
- Nouveau byl opraven a nyní správně načítá modul
- MHWD: Pro INTEL/ATI a Nouveau se nyní používá modesetting
- Odstraněn zfs hook z mkinitcpio na live iso, který způsoboval problémy při bootování
- Aktualizaci můžete stáhnout z našich zrcadel na SourceForge.

23.02
-----

**Nové funkce:**

- Přidána cachyos-community-v3 repo
- Desktopová prostředí Budgie, Mate a LXDE byla přidána do Netinstallation
- Bluetooth.service je nyní výchozí povolené
- F2FS a grub jsou znovu povoleny a fungují
- Aktualizace balíků: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Opravy chyb:**

- Rate-mirrors nyní pokud selže při hodnocení zrcadel, vrátí se k neohodnoceným zrcadlům
- cachyos-rate-mirrors má delší timeout pro fetch-mirrors
- Github byl přidán mezi hosty, aby se předešlo problémům se seznamem zrcadel
- Boot záznamy pro BIOS byly aktualizovány v syslinux

23.01
-----

**Novinky:**

- Calamares Slides byly přepracovány a aktualizovány
- Desktopové prostředí UKUI bylo přidáno do Netinstallation
- Desktopové prostředí Cinnamon bylo přidáno do Netinstallation
- Cmdline: zswap je nyní výchozím způsobem vypnut, protože CachyOS poskytuje zram jako výchozí
- Calamares aktualizován na nejnovější commit
- Aktualizace balíků: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI Installer byl aktualizován

**Opravy chyb:**

- remove-ucode shellprocess nyní běží při offline instalaci
- pamac byl odstraněn z netinstallace
- Ohodnocená zrcadla cachyos jsou nyní správně zkopírována do cílového systému
- power-profile-daemon již není výchozím nastavením povolen

22.12
-----

**Novinky:**

- Nové pozadí GRUB na ISO bootloaderu
- Pro systémy UEFI je nyní zahrnut memtest
- CachyOS-sddm-theme byl přidán do instalace pro KDE
- Automatický skript verze byl přidán při vytváření ISO
- Calamares aktualizován na nejnovější commit
- Zrcadla jsou nyní hodnocena pomocí "cachyos-rate-mirrors", který hodnotí naše zrcadla a archlinux zrcadla
- Aktualizace balíků: Kernel 6.1.1, mesa 22.3.1, Plasma 5.26.4,...
- Desktopové prostředí Kofuku bylo odstraněno
- Extra ISO s llvm 15 zahrnut pro podporu novějších AMD karet

**Opravy chyb:**

- Opraveno Calamares při použití GNOME jako ISO
- zfshostid nyní správně funguje pro offline a online instalaci
- Přidán "kms" hook do modulu initcpiocfg, aby odpovídal výchozím nastavením Archlinuxu
- A další opravy ISO

22.11
-----

**Novinky:**

- Calamares a jeho konfigurace jsou nyní dodávány jako jeden balík
- Úplné vyčištění balíků v netinstallaci
- Přidán modul, který automaticky odstraňuje nepotřebné ucode
- Požadovaná RAM snížena na 2,5 GB
- Balíky, které jsou potřebné pro btrfs, jsou nyní instalovány pouze pro btrfs
- Calamares aktualizován na nejnovější commit
- Bootloader ISO nyní má pozadí
- Běžné aktualizace balíků (mesa, kernel, ...)
- Nahrazení systemd-network s networkmanager

**Opravy chyb:**

- qemu-quest-agent.service byl odstraněn z ISO
- copytoram byl úplně zakázán, rozkládá offline instalaci
- Aktualizace mkinitcpio.conf
- A další opravy ISO

22.10
-----

**Novinky:**

- Pacman nyní používá Architecture=auto pro instalaci x86-64-v3, protože jsme přidali záplatu, která umožňuje pacmanu automaticky detekovat x86-64-v3
- Pacman nyní zobrazuje, ze kterého repozitáře byl balík nainstalován
- Automatické rozpoznání výběru bootloaderu pokud je přítomné EFI, jinak se použije grub
- Výběr swap byl nyní jako výchozí zakázán, protože zram je automaticky dynamicky generován
- Calamares aktualizován na nejnovější commit
- Minimální požadavek na RAM nastaven na 4 GB
- cachyos-grub-theme byl odstraněn

**Opravy chyb:**

- Detekce fstab pro SSD a HDD byla dočasně vypnuta, dokud není opraveno
- Opraveno zdvojené BTRFS subvolume
- Přidání chybějícího mikrokódu do grub bootloaderu ISO
- Přidán záložní bootmode, který nenastavuje žádný modeset (nomodeset)
- A další opravy ISO

22.09
-----

**Novinky:**

- Calamares je nyní ve verzi 3.3. Dodává opravy chyb a nové funkce do Calamares
- TUI-Installer je nyní zahrnut v GUI ISO, můžete jej použít s "cachyos-installer"
- Calamares nyní automaticky detekuje, zda je cílovým souborovým systémem SSD nebo HDD a přizpůsobí mu fstab možnosti
- Pro novější GPU od 9xx je nyní Nvidia zahrnuta jako vlastní bootovací položka, aby se předešlo problémům s nouveau
- Fstab a zfs mount options byly aktualizovány
- FireFox již není instalován jako výchozí, místo toho je instalován cachy-browser

**Opravy chyb:**

- cachyos-gaming-meta byl odstraněn z netinstallace, aby se předešlo problémům během instalace
- Aktualizace balíků netinstallace a opravy
- Opravena instalace OpenBoxu
- Běžné opravy překladů
Here is the translation of the CachyOS release changelogs from 22.05 to 22.07:

22.07
-----

**Novinky:**

- Výběr bootloaderu: Uživatelé nyní mohou při online instalaci vybírat mezi grubem a systemd-boot
- Při online instalaci bude vždy nainstalován nejnovější calamares, což pomáhá provádět opravy chyb "na letu"
- Calamares nyní obsahuje modul mhwd, který automaticky instaluje potřebné ovladače (free drivers)
- Calamares má nové obrázkové slajdy během instalace
- Aktualizace fstab a zfs mount options
- Podpora pro HiDPI

**Opravy chyb:**

- Opravena chyba s locale v calamares
- F2FS bylo odstraněno pro boot loader grub kvůli aktuálním problémům (problém s calamares), stále je možné jej používat se systemd-boot
- Calamares nyní správně zobrazuje výchozí souborový systém
- Opraveno Gnome ISO
- Chybějící balíčky v live ISO byly přidány pro offline instalaci
- Opravena šifrování btrfs swap luksencryption
- Běžné opravy překladů

22.06
-----

**Opravy chyb:**

- Opraveno selhání instalace při použití generického CPU
- KDE automaticky připojovalo zfs oddíly, což vedlo k problémům s automatickým přihlášením do ISO

**Vylepšení:**

- Firewall na serveru byl opraven, Cloudflare blokoval uživatele jako "boty", což vedlo k chybě při instalaci
- Přidána podpora pro theming pro Gnome, XFCE, OpenBox
- Aktualizována naše wiki

**CachyOS - Kernel - Manager:**

Jsme také nadšeni, že oznámíme náš CachyOS-Kernel-Manager.
Zde máte možnost instalovat jádro z repozitáře a také konfigurovat s GUI vlastní kompilaci jádra, což usnadňuje jeho přizpůsobení podle vlastních potřeb.

Následující možnosti můžete vybrat pro kompilaci jádra:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA vypnuto nebo zapnuto
- KBUILD CFLAGS (-O3 nebo -O2)
- Nastavit výchozí výkonový governor
- Povolit BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodické, plné)
- Vypnout MQ-Deadline I/O Scheduler
- Vypnout Kyber I/O Scheduler
- Povolit nebo vypnout MG-LRU
- Povolit nebo vypnout DAMON
- Povolit nebo vypnout Speculative page fault
- Povolit nebo vypnout LRNG (Linux Random Number Generator)
- Aplikovat automatickou optimalizaci jádra (automaticky detekuje váš CPU March)
- Aplikovat výběr optimalizace jádra (Uvidíte seznam různých CPU-Marches a můžete vybrat svůj číslem)
- Vypnout debug (sníží velikost jádra)
- Povolit nebo vypnout nf cone
- Povolit LTO (Full, Thin, No)

22.05
-----

CachyOS byl založen před rokem. Po téměř roce vývoje jsme opravdu hrdí, že oznámíme naši první stabilní verzi GUI instalátoru.
Věnovali jsme hodně času správě repozitářů, vývoji jádra, infrastruktuře, themingu, ... a nakonec jsme všechno implementovali do GUI instalátoru CachyOS.
Všechny funkce, na kterých jsme pracovali a implementovali je do instalátoru, jsou určeny k poskytnutí uživatelům zcela přizpůsobitelného zážitku.

Nejvíce vzrušující změny jsou, že nyní používáme pro online instalaci pacstrap, který poskytuje kompletně čisté prostředí pro instalaci, a plně podporujeme zfs souborový systém.

Odkaz na plné oznámení naleznete zde:
https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/

Odkaz na stažení najdete zde:
https://mirror.cachyos.org/ISO/kde/220522/
https://sourceforge.net/projects/cachyos-arch/
