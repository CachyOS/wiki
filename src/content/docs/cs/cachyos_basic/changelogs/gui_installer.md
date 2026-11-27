---
title: Grafický instalátor
description: Seznamy změn instalátoru Calamares a grafického Live ISO
sidebar:
  order: 1
ai_translated: true
---
26.06
----

**Nové funkce:**

* **Balíčky:**
  * Python nyní využívá rozšířené PGO ke zvýšení výkonu
  * Přidána [oprava pro GCC](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) pro obecné ladění chybné predikce větvení x86, která zlepšuje způsob, jakým GCC zohledňuje cenu chybné predikce větvení na moderních procesorech Intel a AMD
  * Opravena regrese zjištěná v testech Phoronix Benchmarks při použití OpenBLAS na procesorech s vysokým počtem jader
  * Balíček `proton-cachyos` byl přejmenován na `proton-cachyos-native`
* **pacman:** Přidána [síťová izolace pro skriptlety a hooky](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Instalátor:**
  * Přidána možnost pracovního prostředí CachyOS Hyprland Noctalia včetně náhledového videa
  * Balíček `paru` byl z instalace odstraněn; uživatelům se jako alternativa doporučuje používat [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), buď prostřednictvím grafického rozhraní, nebo z příkazového řádku (CLI)
  * Přidán SDDM jako správce zobrazení pro MangoWM
  * Nástroj GNOME System Monitor byl nahrazen aplikací Resources
  * Do skupiny zvukových balíčků přidán balíček `realtime-privileges`
  * Vylepšena detekce rozložení klávesnice a jejích variant v živém prostředí (live session)
* **CachyOS-Welcome:**
  * Přidána podpora DNS over QUIC (DoQ) prostřednictvím `blocky`
  * Přidána vyhrazená stránka pro řešení problémů (Troubleshooting)
  * Přidána podpora terminálu Ptyxis
  * Přidány lokalizace do ázerbájdžánštiny a řečtiny
  * Přidány francouzské stránky Readme a Zapojení do komunity
  * Aktualizovány italské, německé, francouzské, japonské a bulharské překlady
* **chwd:**
  * Přidána turecká lokalizace
  * Odstraněn balíček `cachyos-handheld` ze seznamů balíčků pro handheldy
  * Řeší konflikty ovladačů v systémech s více GPU vyžadujícími nekompatibilní větve ovladačů (např. kombinace různých generací NVIDIA), přičemž nainstaluje nejlepší společný ovladač nebo se přepne na primární GPU
  * Přidán 32bitový ovladač Vulkan pro virtuální stroje
* **cachyos-settings:** Na uživatelské služby byly aplikovány časové limity 15 sekund pro spuštění a 10 sekund pro vypnutí, čímž se předchází 90sekundovým prodlevám při vypínání

**Opravy:**

* **Instalátor:**
  * Opraveno pořadí rozložení klávesnice a zpracování konfigurace `locale1`
  * Opraveno kopírování správné konfigurace pacmana do nainstalovaného systému
  * Po instalaci odstraněny zbývající adresáře `/etc/calamares`
  * Úklid po instalátoru Calamares přesunut až za všechny instalační skripty
  * Odstraněn nadbytečný poinstalační krok pro Limine
* **CachyOS-Welcome:**
  * Zabráněno pádu při výběru „Install Apps“ bez nainstalovaného `cachyos-pi`; tlačítko je nyní skryto, pokud nástroj není k dispozici
  * Opraven pád v případě, že se nepodařilo přečíst nebo analyzovat uložený soubor nastavení; při selhání se nyní nastavení obnoví do výchozích hodnot
  * Opravena detekce úprav (včetně `graphical-session.target.wants`) a globální zakazování úprav uživatelských služeb přes polkit
* **chwd:**
  * Opraveny identifikátory výrobců virtuálních strojů
  * Odstraněna zbytečná aktivace služby `fprintd`
  * Opravena pojistka proti odebrání knihovny Mesa

26.04
----

**Nové funkce:**

* **Instalátor:**
  * Shelly nahradil Octopi jako grafický správce balíčků
  * Ihned po instalaci se nyní vytvoří čistý snímek (snapshot), který je trvale uchován a poskytuje výchozí bod obnovení
  * Volba GRUB `os-prober` je nyní ve výchozím nastavení povolena
  * Přidáno MangoWM jako volitelné pracovní prostředí včetně dotfiles
  * Odebráno desktopové prostředí UKUI
  * Grafické karty AMD nyní používají odlišný motiv Plymouth, protože ovladač amdgpu nedokáže předchozí motiv spolehlivě vykreslovat na noteboocích s připojeným sekundárním monitorem
  * Pročištěn a modernizován výběr balíčků pro GNOME
  * Přidána možnost instalace `MangoWM` se shellem `DMS`
* **CachyOS-Welcome:**
  * Přidána podpora DNS-over-HTTPS (DoH) prostřednictvím `blocky`
  * Přidána podpora vlastních DNS serverů a indikátor/reset automatického DHCP
  * DNS servery nyní zobrazují metadata (region, domovskou stránku, filtrování) a podporují individuální testování latence
  * Přidán přepínač správy VRAM `dmemcg-booster` (v KDE navíc instaluje `plasma-foreground-booster`)
  * Přidána plná podpora navigace klávesnicí pro lepší přístupnost
  * Rastrové ikony sociálních sítí (PNG) nahrazeny ostrými vektorovými ikonami SVG s podporou HiDPI
  * Do pomocníka pro výběr terminálu přidán `wezterm`
* **chwd:**
  * Přidána nativní detekce USB zařízení (pomocí libusb/sysfs) a detekce typu šasi
  * Přidána podpora integrace čtečky otisků prstů (`fprint`) se sudo
  * Přidána detekce rodiny a modelu procesoru pro podporu `intel-lpmd`
  * **Handheldy:** Přidány přesné vzory pro Xbox ROG Ally
  * **Síť:** Přidán profil pro Wi-Fi Marvell AVASTAR 88W8897 (Surface Pro 4)
  * Rozděleny profily NVIDIA pro notebooky a stolní počítače
  * Rozděleny a aktualizovány profily pro virtuální stroje
* **cachyos-settings:** Výchozí I/O plánovač pro NVMe změněn z `none` na `kyber`

**Opravy:**

* **Instalátor:**
  * Metoda dělení disku se nyní zapisuje do ladicího protokolu
  * Staré balíčky mikrokódu jsou nyní odstraněny při opětovném použití existujícího spouštěcího oddílu
* **CachyOS-Welcome:**
  * Opraveny kontroly připojení, které nesprávně vracely hodnotu true při selhání příkazu ping
  * Zajištěna viditelnost ikon externích odkazů v tmavých motivech
  * Zabráněno spuštění více instancí uvítací aplikace současně
  * Přidáno `StartupWMClass` pro lepší párování oken se soubory `.desktop`
* **chwd:**
  * Odstraněn hook `kms` z `mkinitcpio.conf` na nepřenosných stolních počítačích pro opravu konfliktů ovladačů NVIDIA
  * Zpřesněno vyhledávání nainstalovaných jader v profilech NVIDIA
  * Odstraněna vynucená relace Xorg z profilů NVIDIA 470xx (opravuje kompatibilitu s `plasma-login-manager`)
  * Odstraněno zastaralé nastavení `WaylandEnable=false` pro GDM v profilech virtuálních strojů
  * Opravena falešně pozitivní detekce handheldů (např. zaměňování některých notebooků MSI za MSI Claw)
* **cachyos-settings:**
  * Odebrána správa napájení `S01x` kvůli problémům s ovladačem NVIDIA 595
  * Zakázáno `AggressiveVblank` kvůli problémům s VR na ovladači NVIDIA

26.03
----

**Nové funkce:**

* **Instalátor:**
  * Přidána podpora zobrazování GIF/WebP videí ve výběru pracovního prostředí pro prezentaci jednotlivých prostředí. Toto je povoleno pro Plasma, GNOME, Niri a COSMIC
  * Přidána podpora formátu JPEG XL ve výběru pracovního prostředí pro zmenšení velikosti obrázků
  * Cachy-Update je nyní ve výchozím nastavení povolen pro instalace GNOME a KDE
  * Vylepšena logika instalace mikrokódu — nyní detekuje hardware a nainstaluje pouze odpovídající mikrokód namísto instalace obou a následného odebrání nepotřebného
  * Vylepšeno chybové hlášení v případě, že je oddíl EFI příliš malý
  * Seznam pracovních prostředí byl seřazen od snadných a přístupných konfigurací po pokročilejší, jako jsou správci oken (WM)
* **CachyOS-Welcome:**
  * Přidáno tlačítko pro snadnou instalaci a povolení nástroje „Winboat“ pro jednoduchý virtuální stroj Windows v Dockeru
  * Přidána podpora DNS serveru FFMUC ve výběru DNS
  * Přidán ukrajinský překlad
* **chwd:** Výrazně zmenšena velikost initramfs pro konfigurace s dedikovanou GPU NVIDIA
* **linux-cachyos:** Namísto generování souboru `0001-cachyos-base-all.patch` se nyní pro každé vydání našeho upraveného jádra vytváří samostatné vydání (release) v linuxovém repozitáři
* **cachyos-rate-mirrors:** Výrazně vylepšena uživatelská zkušenost pro uživatele v Číně a Rusku díky správné kontrole před hodnocením zrcadel
* **cachyos-settings:** Přidána podpora automatického nastavení bezdrátové regulační domény na základě časového pásma
* **Webové stránky:** Design webových stránek byl přepracován a vylepšen podle modernějších standardů
* **GitHub:** Do důležitých repozitářů na GitHubu byly přidány šablony hlášení problémů (issue templates), které zlepšují kvalitu hlášení chyb a poskytují uživatelům vodítko
* **Zrcadla:** Nová zrcadla v Rusku (jura12, cachy-arch.ru), Švédsku (Zyner) a Kanadě (All Things Linux)

**Opravy:**

* **Instalátor:**
  * Odstraněna podpora bcachefs z výběru souborových systémů kvůli nutnosti použití bcachefs-dkms
  * Opraveno šifrování při použití LUKS2 pro specifická zařízení
  * Opraveno povolení správce zobrazení „ly“
* **cachyos-settings:** Skript `cachyos-bugreport.sh` nyní začerňuje IP adresu, uživatelské jméno, název hostitele (hostname) a MAC adresu
* **chwd:**
  * Obecné profily pro handheldy a vylepšená podpora pro GPU v handheldech
  * Služba fwupd je nyní povolena pro handheldy Lenovo

**Seznam změn pro Handheld Edition:**

* **gamescope-session:** Nástroj gamescope-session-plus nahrazen za gamescope-session-cachyos, který vychází z projektu gamescope-session od společnosti Valve
  * Umožňuje aktualizace firmwaru pro zařízení Steam Deck a Lenovo Legion Go
* **plasma-login-manager:** Správce přihlášení SDDM nahrazen správcem plasma-login-manager
* **Zavaděče:** Jako výchozí je nyní vybrán Limine s automatickými snímky. Zavaděč systemd-boot zůstává nadále volitelný
* **Instalátor:** Sloučen instalátor Calamares pro handheldy s instalátorem pro desktopovou edici
* **ISO:** ISO obraz nyní namísto X11 používá Wayland

26.01
----

**Nové funkce:**

* **Instalátor:**
  * Výběr zavaděče přesunut do instalátoru Calamares; jeho správa je nyní sjednocena do jediného balíčku.
  * Detekce architektury se nyní provádí **před** instalací základního systému, čímž se snižuje objem stahovaných dat.
  * GRUB nyní pro šifrování používá LUKS2.
  * Předávání parametru --needed správci pacman, aby se předešlo dvojí instalaci balíčků.
  * Použití jednoúrovňové komprese na NVMe pro souborový systém Btrfs.
  * Odstraněny závislosti na Xorg u pracovních prostředí založených na Waylandu.
* **ISO:**
  * Přechod na `plasma-login-manager` pro prostředí Live ISO.
  * ISO obraz nyní obsahuje jak stabilní jádro (Stable), tak jádro LTS. Stabilní jádro je vybráno jako výchozí.
  * Relace ISO obrazu přepnuta z X11 na Wayland.
* **Netinstall:**
  * Instalace Plasma nyní namísto SDDM používají `plasma-login-manager`.
  * Niri nyní používá `noctalia-shell` a aktualizované dotfiles.
  * Pročištěn instalační proces prostředí GNOME.
* **Prezentace:** Opraveny překlepy ve snímcích instalátoru Calamares a přidán nový snímek představující Wiki.
* **Zrcadla:** Stránka stavu zrcadel (<https://packages.cachyos.org/mirrors>) nyní zobrazuje stav synchronizace zrcadel CachyOS.
* **cachyos-settings:** Povolena volba `EnableAggressiveVblank` pro modul NVIDIA. Ta zkracuje dobu strávenou v horní polovině obsluhy přerušení pro zobrazovací přerušení s nízkou latencí.
* **chwd:**
  * Instaluje `nouveau-fw` pro povolení podpory VA-API v ovladači Nouveau pro karty NVIDIA řady Kepler.
  * Přidána podpora AI-SDK pro několik nových grafických karet AMD.
  * HHD nahrazeno nástroji `steamos-manager` a `inputplumber`.
* **Proton-CachyOS:**
  * Přidána podpora FSR4 MLFG (Machine Learning Frame Generation); automaticky se aktivuje při použití `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Přidána podpora modulu `d7vk`. Lze jej povolit pomocí `PROTON_DXVK_DDRAW=1`
  * Importovány opravy pro haptickou odezvu ovladače DualSense
  * Přidána proměnná `WINE_BLOCK_HOSTS`, která zabraňuje aplikaci Wine připojovat se ke konkrétním doménám
  * Automatické povolení `ENABLE_HDR_WSI=1` při použití `winewayland` na dedikovaných GPU NVIDIA
  * Opraveny problémy s rozložením klávesnice při použití `winewayland.drv`
  * Odstraněna dlouholetá oprava, která způsobovala pokles 1% low FPS
  * Upraven nástroj `protonfixes` pro lepší výběr předvoleb DLSS a přesměrování `libxess_dx11.dll`
  * Balíček proton-cachyos-slr se nyní v rámci „gaming-meta“ používá jako výchozí. Nativní verze bude i nadále podporována.

**Opravy:**

* **Limine:** Velikost spouštěcího oddílu zvětšena na 4192 MB, aby vyhovovala vyšším nárokům nástroje `limine-snapper-sync`.
* **Instalátor:**
  * Instalátor nyní zablokuje pokračování, pokud je oddíl EFI příliš malý při použití možností instalace „vedle stávajícího systému“ nebo „nahradit oddíl“.
  * Opravena chyba, kdy po výběru pracovního prostředí, přechodu o krok dál, návratu zpět a výběru jiného pracovního prostředí zůstala vybrána obě prostředí.
* **chwd:** Odstraněna proměnná prostředí vynucující `libva-nvidia-driver`, protože způsobovala problémy v systémech se dvěma GPU.
* **cachyos-hello:** Opraven problém, kdy se cachy-update zobrazoval jako zakázaný, přestože byl povolen.
* **Ovladač:** Opraven vstup u několika herních ovladačů díky aktualizaci vstupních pravidel na nejnovější verzi.
* **Framework 16 (Zen5):** Opraven problém se zamrzáním relace při zápisu v instalátoru Calamares.

25.11
----

**Nové funkce:**

* **ISO/Instalátor:** Přidány nástroje Orca a espeak-ng pro lepší přístupnost
* **initcpiocfg:** Povolen systemd hook v podporovaných konfiguracích
* **Netinstall:** Odstraněny dotfiles pro Hyprland
* **pacstrap:** Instaluje `bcachefs-dkms`, pokud je jako souborový systém zvolen `bcachefs`
* **Calamares:** Přidána podpora pro plasma-login-manager a cosmic-greeter
* **Cosmic:** Přechod z SDDM na cosmic-greeter
* **Písma:** Vylepšena písma pro asijské uživatele
* **chwd:**
  * Instaluje `intel-media-sdk` a `vpl-gpu-rt` na podporovaných GPU
  * Povoleno Nouveau NvBoost pro GPU Fermi
  * Ukončena podpora zastaralého ovladače NVIDIA 390xx
  * Přidána podpora pro Xbox ROG Ally/X
* **cachyos-hello:**
  * Odstraněn interní instalátor balíčků; místo něj se otevírá CachyOS Package Installer
  * Přidáno rozhraní příkazového řádku (CLI) pro funkce grafického rozhraní
  * Různé opravy kontroly verze ISO
* **cachyos-settings:** zram-generator: Odstraněna komprese pro nekomprimovatelné stránky
* **Proton-CachyOS:**
  * Přidán `dxvk-gplasync` jako alternativa DXVK. Lze povolit pomocí `PROTON_DXVK_GPLASYNC=1`
  * Přidána proměnná `DISABLE_LAYER_MESA_ANTI_LAG` při použití `PROTON_FSR4_UPGRADE`
  * Přineseno několik **oprav pro Wayland** (posun v celoobrazovkovém režimu, mrtvé klávesy, chování DPI, úpravy výstupu videa) a vylepšení `winewayland.drv`
  * Zavedeno a vyladěno chování **mezipaměti shaderů pro jednotlivé hry** a zvětšené mezipaměti shaderů (zejména pro NVIDIA)
  * Přidány aktualizace upscalerů FSR3 a XeSS

**Opravy:**

* **Limine:**
  * Opravena instalace Limine bez registrace položky na poškozeném UEFI
  * Používá systemd variantu hooku `btrfs-overlayfs`
* **Calamares:** Odstraněna volba `attr2` z nastavení připojování XFS
* **chwd:** Zakázáno síťové rozhraní USB Ethernet čipu T2

25.08
----

**Nové funkce:**

* **Služby:** Přidán web **packages.cachyos.org**, obdoba vyhledávání balíčků na stránkách Arch Linuxu, s možností vyloučit balíčky CachyOS.
* **Jádro:** Instalátor nyní po instalaci dodatečně instaluje **linux-cachyos-lts** jako sekundární/záložní jádro. Nadále však doporučujeme používat stabilní jádro (Stable).
* **ISO:** Jádro na Live ISO bylo přepnuto ze Stable na LTS kvůli přetrvávajícím problémům se stabilním jádrem, což zlepšuje spolehlivost spouštění.
* **Pracovní prostředí:** Přidáno **Niri** jako volitelné prostředí včetně několika předkonfigurovaných dotfiles.
* **NVIDIA:** Povolen režim spánku **S0ix** na podporovaném hardwaru pro moderní úsporný pohotovostní režim.
* **GRUB:** Spustitelné snímky (bootable snapshots) jsou nyní automaticky povoleny a nastaveny, pokud kořenový souborový systém používá **Btrfs**.
* **Úpravy (Tweaks):** Do stránky Tweaks v uvítací aplikaci byl integrován nástroj **Cachy-Update**. Cachy-Update přidává časovač a ikonu v oznamovací oblasti, která uživatele upozorňuje na aktualizace a umožňuje je provést jediným kliknutím.
* **Proton-CachyOS:**
    - Přidán nástroj pro stahování knihoven DLSS DLL (verze **310.3.0**), podobný nástroji pro FSR4. Pro povolení použijte proměnnou prostředí `PROTON_DLSS_UPGRADE=1`.
    - Přidána proměnná prostředí `PROTON_DLSS_INDICATOR=1` pro zapnutí překryvného HUD rozhraní DLSS.
    - Přidán nástroj pro stahování knihoven XeSS DLL (verze **2.1.0**), podobný nástroji pro DLSS. Pro povolení použijte proměnnou prostředí `PROTON_XESS_UPGRADE=1`.
    - Přidána proměnná `PROTON_FSR4_RDNA3_UPGRADE` pro GPU RDNA3. Dělá totéž co `PROTON_FSR4_UPGRADE`, ale zároveň nastavuje některé další nezbytné proměnné.
    - Přidány úplnější implementace knihoven Nvidia chybějících v Protonu. To by mělo pomoci povolit možnosti jako PhysX ve hrách, kde byly dříve nedostupné. Můžete je také povolit jednotlivě pomocí `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` a `PROTON_NVIDIA_NVOPTIX`.
    - Přidána mezipaměť shaderů pro jednotlivé hry (ve výchozím nastavení povolena, lze zakázat pomocí `PROTON_LOCAL_SHADER_CACHE=0`). Shadery se budou ukládat do `<steamlibrary>/shadercache/<appid>` pro každou hru, podobně jako při povoleném předběžném ukládání shaderů do mezipaměti. Při opětovném sestavování mezipaměti shaderů u každé hry se může objevit zasekávání, ale uložené shadery nebudou kvůli omezené velikosti mezipaměti mazány.
    - Přidán [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) jako volitelná náhrada DXVK pro starší GPU, která plně nepodporují Vulkan 1.3. Používá větev `async`, takže BY SE NEMĚL používat u her s ochranou anti-cheat ani u her pro více hráčů obecně. Byli jste varováni. Pro povolení použijte `PROTON_DXVK_SAREK=1`.
    - Přidána proměnná `PROTON_FSR3_UPGRADE` pro aktualizaci knihoven FSR 3.1 DLL na novější verze.

**Opravy:**

* **Limine:**
    - Opravena chyba `limine bios-install /dev/sdaX` při výběru přípojného bodu **/boot** jako umístění zavaděče na systémech s MBR.
    - Opravena neinicializovaná hodnota cesty `bootLoader`, která způsobovala selhání instalace na systémech s MBR, pokud nebylo umístění zavaděče explicitně vybráno.
    - Přidáno varování před použitím příznaku **bios-grub** na spouštěcím oddílu, které může způsobit chybu „Stage 3 file not found“.
    - Opraveno bezproblémové duální spouštění (dual-boot) s Windows pro instalace v režimu BIOS.
    - Opraveno selhávání spouštění ze snímků Btrfs při použití **GNOME (GDM)**.
* **Spuštění instalátoru:** Přidány záložní IP adresy pro kontrolu připojení k internetu v případě, že ping na **cachyos.org** selže.

25.07
----

**Nové funkce:**

- **Shell**: Uživatelský shell lze nyní zvolit přímo při instalaci mezi fish, zsh a bash. Fish zůstává vybrán jako výchozí.
- **chwd**: Instaluje plasma-x11 pro starší ovladače NVIDIA
- **Netinstall**: Přidán fwupd pro KDE Plasma a GNOME
- **mesa-git**: Přidána podpora AMD Anti-Lag
- **firefox**: Představena alternativa Firefoxu nazvaná „firefox-pure“, která obsahuje vylepšení profilu user.js. Dále byl přidán balíček „cachyos-firefox-settings“, který lze nainstalovat nad rámec Firefoxu.
- **Proton-CachyOS**:
  - Importovány commity wine-wayland z upstreamu
  - Přidána proměnná prostředí „PROTON_FSR4_UPGRADE“, která automaticky stáhne nejnovější DLL pro FSR4 a nahradí jej pro automatické vylepšení ve hrách s podporou FSR 3.1
  - Přidáno mnoho oprav souvisejících s Waylandem z upstreamu Wine, které vyšly po verzi Wine 10.0.
  - Přidány opravy pro lepší integraci systémů anti-cheat. Děkujeme NelloKudo
  - Přidány opravy pro AMD Anti-Lag 2 pro vkd3d-proton a Wine
  - Aktualizován balíček umu-protonfixes na nejnovější commit

**Opravy:**

- **Klíčenka (Keyring)**: Vylepšeno zpracování instalace klíčenky, aby se předešlo problémům, včetně přidání několika opakovaných pokusů.
- **systemd-oomd**: Zakázán systemd-oomd, protože měl potíže se souběhem s le9 a ukončoval aplikace příliš brzy

**Seznam změn pro Handheld Edition:**

- **handheld-settings**: Importováno několik úprav ze SteamOS do Handheld Edition
- **pipewire**: Nastaveno minimální kvantum na 256
- **SteamDeck-OLED**: Instaluje galileo-mura pro Steam Deck OLED
- **Lenovo Legion Go S**: Přidána podpora pro Lenovo Legion Go S

25.05
----

**Nové funkce:**

- **ISO**: Přidána automatická detekce při spouštění ISO, která rozpozná grafickou kartu NVIDIA v systému a načte příslušný modul (např. nvidia-open, nvidia), což poskytuje lepší podporu řady 10xx a starších.
- **Plymouth**: Přidána nová animace Plymouth.
  - Děkujeme Erenovi ([https://github.com/erenyldz89](https://github.com/erenyldz89)) za práci na této animaci!
- **Prohlížeč**: Cachy-Browser byl ukončen. Jako výchozí předinstalovaný prohlížeč nyní poskytujeme Firefox. Návod na migraci profilů do Firefoxu (a jeho forků) naleznete zde: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Do instalace KDE přidány balíčky kcalc, filelight, plymouth-kcm a kio-admin.
- **mkinitcpio**: Ve výchozím nastavení zakázán záložní (fallback) initramfs. Tím se ušetří značné množství místa na disku.
- **Zrcadla**: Přidáno nové 10Gbps zrcadlo v Bangladéši. Děkujeme Limda za jeho provoz!
- **Proton**:
  - Přebázována téměř všechna vylepšení z **Proton CachyOS 9.0**.
  - Povolen ovladač Wayland pro sestavení Steam Linux Runtime. Povolíte jej pomocí `PROTON_ENABLE_WAYLAND=1`. Děkujeme [GloriousEggroll](https://github.com/GloriousEggroll) za realizaci.
  - Přidáno mnoho oprav souvisejících s Waylandem z upstreamu Wine, které vyšly po verzi Wine 10.0.
  - Opraveny různé problémy s ovladačem Wayland a hrami pod Vulkanem. Děkujeme [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) za veškerou usilovnou práci.
  - Přidána zástupná implementace (stub) pro `amdxc64.dll` umožňující FSR4. Pomocí `FSR4_UPGRADE=1` lze upgradovat hry s FSR 3.1 na FSR4. Opět děkujeme [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instrukce: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Přidány opravy pro DualSense pro úplnější detekci zvukových zařízení u haptiky přenášené po kabelu přes zvuk. Některé hry, které na tomto konkrétním chování spoléhaly, by nyní měly tuto funkci mít. Děkujeme [ClearlyClaire](https://github.com/ClearlyClaire) za původní opravy a [Exotic0015](https://github.com/Exotic0015) za jejich sledování od verze **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Odstraněna oprava pro hru Dragon Age Inquisition, protože nefungovala. Pro tuto hru prosím zatím používejte **Proton CachyOS 9.0**.
- **GRUB**: Přidán nový motiv GRUB. Děkujeme [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Opravy:**

- **Zrcadla**: Opraven problém, kdy uživatelé z Ruska nemohli provést instalaci. Problém byl zmírněn upuštěním od používání CDN77, kterou Rusko začalo blokovat.
- **kde-settings**: Zakázána ikona Discover na hlavním panelu.
- **ddcutil**: Vydána předběžná verze ddcutil 2.2.1 pro opravu problému, kdy grafické karty AMD zamrzaly při sledování videí na YouTube.

**Seznam změn pro Handheld Edition:**

- **os-branch**: Herní režim (Game Mode) nyní správně zobrazuje, že je používán CachyOS Linux.
- **zvuk**: Aktualizovány profily konvolveru.
- **steamos-manager**: Slouží pro správu taktů GPU a TDP, aktualizace BIOSu/doku, údržbu úložných zařízení, formátování externích úložišť a limit nabíjení baterie pro Steam Deck.
- **steamos-powerbuttond**: Tato komponenta nahrazuje standardní powerbuttond pro lepší chování režimu spánku.
- **jupiter-hw-support**: Aktualizováno na verzi 20250501.

25.04
----

**Nové funkce:**

- **occt**: Do ISO přidán nástroj OCCT pro možnost zátěžového testování v živém prostředí
  - Děkujeme Markovi za tento nápad!

**Opravy:**

- **jádro**: Opravuje pád modulu na noteboocích Asus
- **limine**: Limine má nyní nainstalovaný mkinitcpio-limine-hook a automaticky vytváří položky zavaděče

**Seznam změn pro Handheld Edition:**

- **zvuk**: Přidány zvukové profily pro ROG Ally X a Legion Go
- **gamescope**: Nahrazen gamescope-plus upstreamovou verzí gamescope

25.03
----

**Nové funkce**:

- **Zavaděč**: Přidána podpora zavaděče Limine
- **Zavaděč**: Přidána podpora automatických snímků pro zavaděč Limine
- **Samba**: Přidán balíček „cachyos-samba-settings“ pro snadné nastavení připojení Samby
- **NVIDIA**: Znovu povolen firmware GSP pro uzavřený modul NVIDIA
- **Jádro**: Přidána podpora ovladače Asus Armoury
- **Secure Boot**: Vylepšen skript „sbctl-batch-sign“, aby podepisoval pouze požadované soubory
- **udev**: Vráceno zpět používání ntfs3 jako výchozího ovladače pro oddíly NTFS
  - Informace: Používání jaderného ovladače NTFS3 jako výchozího způsobovalo některým uživatelům problémy. Proto jsme tuto změnu vrátili zpět.
- **wine**: Wine a Wine-Staging nyní ve výchozím nastavení používají WoW64 a NTSync
- **scx-manager**: Správce sched-ext s grafickým rozhraním vyčleněn z Kernel Manageru do vlastní samostatné aplikace
- **Podpora hardwaru**: Přidána podpora pro RDNA4, RTX 5070 Ti a 5070.
- **Nastavení**: Přidána podpora DLSS Swapper — jedná se o skript, který automaticky aktualizuje a používá nejnovější verzi a předvolbu DLSS
- **Aktualizace balíčků**: linux-cachyos 6.14.0, NVIDIA 570.133.07, GNOME 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Opravy**:

- **initcpiocfg**: Odstraněno přidávání modulu „crc32c-intel“ do mkinitcpio — byl označen jako zastaralý a nyní se standardně používá modul „crc32c“
- **chwd**: Zakázání hardwarového zpracování (offloadingu) brcmfmac na MacBoocích T2
- **chwd**: Neinstalovat ovladač NVIDIA 390.xx na notebooky

25.02
----

**Nové funkce**:

- **Jádro**:
  - Optimalizace Propeller je nyní aplikována na výchozí jádro **linux-cachyos** pro všechny dostupné architektury.
    - **Poznámka**: V kombinaci s AutoFDO to může zvýšit výkon přibližně o 10 % v závislosti na pracovní zátěži.
- **NVIDIA**: Přidána podpora architektury Blackwell.
- **ISO**: Jako výchozí se používá modul nvidia-open pro zajištění podpory architektury Blackwell. Uživatelé s grafickými kartami staršími než Turing by měli zvolit první nebo záložní možnost spuštění.
- **Nastavení**: Ve výchozím nastavení povoleno klepnutí pro kliknutí (tap-to-click) pro relace X11.
- **udev**: Použití ntfs3 jako výchozího ovladače pro oddíly NTFS.
- **game-performance**: Zakázán spořič obrazovky během hraní her.
- **kernel-manager (sched-ext)**: Přidána podpora serverového režimu.
- **jádro**: Přidány opravy pro funkci AMD preferred core.
- **chwd**: Znovu přidáno náhradní řešení pro RTD3.
- **Aktualizace balíčků**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Opravy**:

- **chwd**: Opraven problém, kdy hybridní notebooky s hardwarem Intel a NVIDIA nemohly používat svou GPU v programu DaVinci Resolve.
- **glibc**: Přidána oprava zranitelnosti CVE-2025-0395.
- **kernel-manager**: Pokus o instalaci předkompilovaného modulu NVIDIA, pokud je dostupný pro výchozí jádro Archu.
- **kernel-manager**: Přidána dodatečná kontrola, aby nedocházelo k přepsání hodnoty v případě, že modul není dostupný.

**Seznam změn pro Handheld Edition:**

- **hooks**: Opět povoleno používání nativně zkompilovaného Protonu.
- **různé**: Několik aktualizací a oprav.

24.12
----

**Nové funkce**:

- Jádro:
  - Optimalizace AutoFDO je nyní aplikována na výchozí jádro `linux-cachyos` pro všechny dostupné architektury
    - **Poznámka**: Zlepšení výkonu jsou zatím minimální kvůli současným omezením. Sloučení profilů vyžaduje LLVM 19 a optimalizace Propeller je na něm závislá. Očekáváme, že LLVM 19 a lépe optimalizované profily budou dostupné do konce roku po přijetí LLVM 19 v Arch Linuxu
- chwd: Rusticl je nyní nakonfigurován správně
- chwd: vylepšené zaznamenávání chyb během volání hooků
- chwd: opraven výběr ovladačů VAAPI
- cachyos-settings: Přidán skript pro usnadnění spouštění aplikací přes Zink
- Konfigurace sysctl: Přepracováno a optimalizováno několik nastavení
- Kernel Manager: Přidána podpora pro `scx_loader`, umožňující nativní přepínání plánovačů
- Instalátor: Služba Bluetooth je nyní ve výchozím nastavení povolena
- Netinstall:
  - Do instalovaných balíčků přidán `wireless-regdb`
    - Ten konfiguruje připojení k používání příslušných kanálů a odemyká další kanály, což může zvýšit rychlost internetu
    - **Poznámka**: Ve výchozím nastavení je nastaven obecný region; pro optimální výkon doporučujeme upravit jej podle vašeho regionu
- **Aktualizace balíčků**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Opravy chyb**

- Instalátor: Záznamy instalace již neotevírají ladicí okna terminálu
- Správa oddílů:
  - Správné nastavení `umask` zajišťuje, že `/boot` není přístupný bez dostatečných oprávnění
- Spuštění instalátoru: Opraveny kontroly připojení k internetu

**Seznam změn pro Handheld Edition:**

- Aktualizovány balíčky související s handheldy
- Opraven problém se správou profilů napájení
- Přidána podpora Wi-Fi 6

24.11
----

**Nové funkce:**

- thp-shrinker: Nastavena hodnota max_ptes_none na 80 % pro stránky vyplněné nulami. Tím se sníží využití paměti při trvalém zapnutí THP (always), přičemž výkon zůstane stejný
- NVIDIA: Firmware GSP se nyní automaticky zakáže, pokud se uživatel sám přepne na uzavřený ovladač
- chwd: NVIDIA: Pro notebooky jsou povoleny služby nvidia-powerd pro dosažení nejvyššího dostupného TDP
- proton-cachyos: Generování snímků DLSS (DLSS Frame Generation) nyní funguje. Očekává se, že v budoucnu bude fungovat i v upstreamovém Protonu
- jádro: Nyní je použit AMD Cache Optimizer. Uživatelé s procesory se dvěma X3D CCD nyní mohou přepínat mezi upřednostňováním frekvenčních jader nebo jader s velkou mezipamětí
- jádro: amd-pstate: Zpětně portovány opravy výkonu amd-pstate pro Strix Point
- jádro: Přidány upstreamové opravy problémů s TDP na grafických kartách AMD RDNA2 a RDNA3
- jádro: Přidány opravy časování pro displeje s konfigurací 5120x1440x240
- jádro: Experimentální jádro optimalizované pomocí AutoFDO v repozitáři pod názvem „linux-cachyos-autofdo“
- ISO: Přidána kontrola, zda uživatel spouští Handheld Edition, a varování v případě spuštění instalace na nepodporovaném zařízení
- ISO: Přidána kontrola, zda uživatel používá nejnovější ISO, a případné varování

**Opravy chyb:**

- refind: dělení disku: změněno z rozložení se 3 oddíly na rozložení se 2 oddíly
- netinstall: do instalace Plasma přidán balíček kdeplasma-addons
- calamares: Opraven problém při rozdělování disku s odkládacím oddílem (swap)

**Seznam změn pro Handheld Edition:**

- Podpora pro ROG Ally X by měla být vylepšena

24.10
----

**Nové funkce:**

- Aktualizace balíčků: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Opravy chyb:**

- sddm: Nasazena novější verze sddm pro opravu přihlašování do relací Wayland
- ISO: Přidán balíček xf86-video-amdgpu pro opravu načítání grafické relace na některých sestavách
- chwd: Opravena přeinstalace profilů

24.09
----

**Nové funkce:**

- Balíčky: Řada balíčků byla optimalizována pomocí PGO, například LLVM, Clang, svt-av1 a nodejs. To přineslo například o 10 % rychlejší překladač Clang
- Repozitář: Repozitář je nyní synchronizován a aktualizován častěji, což znamená ještě menší zpoždění. Interval synchronizace byl zkrácen ze 3 hodin na každou hodinu.
- Repozitář: Od 27. 9. 2024 balíčky kompilované s -fpic automaticky povolí -fno-semantic-interposition. To může u mnoha balíčků přinést zvýšení výkonu.
- zlib-ng: Nyní se používá jako náhrada za zlib
- sddm: V instalaci KDE bude nyní sddm ve výchozím nastavení používat jako kompozitor Wayland. # V příspěvku k vydání uveďte změny migrace
- cachyos-settings: NetworkManager nyní jako backend používá systemd-resolved, což pomáhá s ukládáním DNS do mezipaměti
- cachyos-settings: Použití time.google.com jako serveru pro synchronizaci času, aby se předešlo problémům se synchronizací času na některých sestavách
- gcc: Přidány opravy pro ladění znver5
- gcc: Převzaty opravy a příznaky z Clear Linux
- glibc: Přidány opravy „evex“ a také převzaté opravy z Clear Linux
- wiki: Wiki získala mnoho nových doplnění a přepracování
- chwd: Zjednodušena správa zařízení
- chwd: Všechny profily jsou nyní navrženy speciálně pro zařízení PCI
- chwd: Přidán parametr --autoconfigure pro automatické zpracování instalace ovladačů
- Aktualizace balíčků: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Opravy chyb:**

- Spuštění instalátoru: Přidány opravy pro synchronizaci hardwarových hodin před zahájením instalace
- calamares: Přidána oprava odpojování souborového systému po instalaci
- klíčenka: Vyčištění klíčenky a její opětovné vytvoření před spuštěním instalace; tím se opravují vzácné problémy s klíčenkou
- sysctl: Výpisy paměti (core dumps) byly znovu povoleny
- chwd: Odstraněn balíček `libva-nvidia-driver` z profilu PRIME, aby se předešlo možným konfliktům a zlepšila kompatibilita se softwarem, jako je Spectacle
- cachyos-settings: Přidáno náhradní řešení pro pády GNOME na Waylandu
- cachyos-fish/zsh-config: Odstraněny úpravy specifické pro Wayland

**Seznam změn pro Handheld Edition:**

- Ally/Ally X: Nástroj HHD byl nahrazen nástrojem inputplumber, protože hhd pro něj nepoužívá jaderný ovladač správně, což způsobuje problémy.
- Aktualizovány balíčky související s handheldy

24.08
----

**Nové funkce:**

- chwd: NVIDIA nyní pro podporované karty používá ve výchozím nastavení otevřený modul (open)
- Pracovní prostředí: Do možností instalace přidáno desktopové prostředí Cosmic
- NVIDIA: Nejnovější ovladač 560 Beta je nyní výchozí; egl-wayland upraven pro opravu pádů ve Firefoxu a dalších aplikacích
- zrcadla: Společnost CDN77 sponzorovala CachyOS objektovým úložištěm s celosvětovou mezipamětí, což uživatelům výrazně zlepšilo rychlost připojení
- zrcadla: CachyOS nyní poskytuje vlastní zrcadlo Arch Linuxu, aby se předešlo problémům se synchronizací; při instalaci je nastaveno jako výchozí spolu se záložními zrcadly
- SecureBoot: Představen skript a návod na Wiki pro snadnou podporu Secure Boot
- cachy-chroot: Přidáno automatické připojování přes fstab pro zjednodušení chrootu
- cachy-chroot: Implementována podpora šifrování LUKS
- kernel-manager: Přidána podpora nastavení příznaků sched-ext v konfiguraci sched-ext
- kernel-manager: Představena možnost sestavení nvidia-open
- kernel-manager: Přidána možnost zapamatovat si naposledy použité volby na stránce konfigurace
- Aktualizace balíčků: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Opravy chyb:**

- chwd: Vylepšena detekce profilu PRIME na základě názvu zařízení
- chwd: Odstraněno náhradní řešení pro RTD3 kvůli problémům na některých sestavách
- cachyos-rate-mirrors: Zakázáno hodnocení zrcadel při běhu z Live ISO
- cachy-chroot: Opravuje pád v případě, že oddíl neměl platný typ souborového systému nebo UUID (např. oddíl Microsoft Recovery)
- calamares: Přepracována inicializace klíčenky
- kernel-manager: Opravena podpora sestavování vlastního pkgbase s jádry s LTO a povolenými moduly
- kernel-manager: Opravena prodleva výzvy k zadání hesla
- ISO: Parametr radeon.modeset=1 nahrazen za amdgpu.modeset=1 pro moderní GPU
- game-performance: Zabráněno selhání v případě, že profil není dostupný

**Seznam změn pro Handheld Edition:**

- podpora zařízení: Přidána podpora pro Ally X, děkujeme Lukeu Jonesovi
- libei: Implementována podpora pro libei, která nahrazuje libextest
- packagekit: Zablokována instalace packagekit, aby se předešlo problémům při aktualizaci systému přes Discover
- hook: Přidán pacman-hook pro označení konfliktu s nativně kompilovanými verzemi Protonu, čímž se předchází možným problémům
- Aktualizovány jupiter-fan-control, steamdeck-dsp a firmware pro Steam Deck

24.07
----

**Nové funkce:**

- Repozitář: Představen repozitář optimalizovaný pro Zen 4, bude se používat pro procesory Zen4 a Zen5
- ISO: Přidána automatická kontrola architektury pro repozitář Zen4/Zen5
- chwd: Přidána podpora GC pro GPU AMD, což pomáhá při detekci oficiálně podporovaných GPU pro ROCm
- chwd: Použití libva-nvidia-driver na podporovaných kartách
- ksmctl: Představen nástroj pro povolení/zakázání KSM: ksmctl --enable
- jádro: Pro jádro „linux-cachyos“ je nyní k dispozici balíček „linux-cachyos-dbg“, který obsahuje neosekaný (unstripped) obraz vmlinux pro účely ladění
- jádro: Nyní je k dispozici amd cpb boost a démon power-profiles-daemon je upraven tak, že při nastavení profilu „powersave“ zakáže boost na procesorech AMD
- jádro: Přidána úprava pro úsporu energie na SoC AMD při přehrávání videa
- kernel-manager: Přidána podpora správy plánovačů sched-ext a získávání informací prostřednictvím grafického rozhraní
- steam/proton: Nyní je k dispozici skript „game-performance“, který lze přidat do možností spuštění ve Steamu
- power-profiles: Na procesorech podporujících AMD Pstate je nyní nejnižší lineární frekvence nastavena výše, což může zlepšit latenci a 1% low FPS
- kwin: Přidán zpětný port pro tearing, který byl otestován. Na kartách NVIDIA funguje pouze v nativních aplikacích pro Wayland
- netinstall: Cutefish byl odebrán ze seznamu instalovatelných desktopových prostředí
- Zrcadla: Přidáno zrcadlo v Rakousku a Číně, čínské zrcadlo provozuje univerzita TUNA. To by mělo výrazně pomoci uživatelům z Číny
- Aktualizace balíčků: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Opravy chyb:**

- ISO: Parametr copytoram nastaven na auto namísto yes
- ISO: Opraven režim spánku na Live ISO pro notebooky
- Spuštění instalátoru: Před zahájením instalace se nainstaluje nejnovější archlinux-keyring, aby se předešlo problémům při stahování archlinux-keyring v prostředí chroot
- Hodnocení zrcadel: Při instalaci se hodnotí pouze zrcadla 1. úrovně (Tier 1)
- pacman.conf: Odstraněn nepoužívaný repozitář pacmana
- cachy-chroot: Nezobrazovat podsvazky .snapshot
- Calamares: Nepoužívat modul „Preservefiles“, protože uživatelé s ním hlásili problémy.

**Seznam změn pro Handheld Edition:**

- Přidán konfigurační soubor pro nastavení jiného škálování, `/home/$USER/.config/deckscale`
- Zvýšena spolehlivost přepínání režimu GameMode
- Aktualizován firmware WiFi/Bluetooth pro Steam Deck
- Implementováno automatické připojování (Auto Mount) pro GameMode
- Přidány úpravy gamescope-session pro topologii CPU ve Wine, HDR a podsvícení
- Opraven výběr obnovovací frekvence
- Aktualizovány jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Nové funkce:**

- chwd: Představena detekce hardwaru pro handheldy
- chwd: Představena podpora MacBooku T2
- chwd: Přidána detekce síťových ovladačů
- Instalace: Přidána podpora MacBooku T2
- ISO: Přidán cachy-chroot. Jedná se o skript, který uživateli pomáhá vstoupit přes chroot do systému.
- ISO: Přechod na Microcode Hooks; toto vyžaduje použití nejnovější verze Ventoy (1.0.98)
- ISO: Povoleno copytoram; již jej není nutné vypínat, protože offline instalaci již neposkytujeme
- souborový systém: BTRFS je nyní výchozím vybraným souborovým systémem
- netinstall: Použití ufw namísto firewalld
- Calamares: Aktualizovány prezentační snímky
- Prezentace: Aktualizována pro nejnovější změny
- Aktualizace balíčků: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Opravy chyb:**

- Calamares: umount: Opětovně povolen režim emergency
- Qtile: Multimediální klávesy nyní fungují správně
- NVIDIA: Povoleny potřebné služby a volby pro funkční režim spánku na Waylandu
- netinstall: Odstraněn b43-fwcutter z instalace
- netinstall: Nahrazen hyprland-git za hyprland
- netinstall: Vyřazen linux-cachyos-lts z výběru, aby se předešlo problémům s chybějícími moduly
- Calamares: Shellprocess: Hodnocení zrcadel přesunuto před instalaci klíčenky

**Seznam změn z experimentálního vydání pro handheldy:**

- Výchozí motiv KDE Vapor (motiv SteamOS)
- Výchozí souborový systém: BTRFS
- Výchozí jádro: linux-cachyos-deckify
- SDDM nyní používá Wayland
- Příznak prostředí pro HHD ke snížení latence
- Přidány argumenty jádra pro zlepšení chování přepínání režimu Game Mode
- Uživatelské jméno lze nyní upravit
- Detekce hardwaru konfiguruje a instaluje potřebné balíčky v závislosti na použitém zařízení
- Klávesnice Maliit nyní používá tmavý režim
- Powerbuttond od Valve pro správné uspávání
- Zástupce lze nyní přidávat do Steamu
- Aktualizován scx-scheds na nejnovější git commit, který přináší nejnovější vylepšení pro plánovač LAVD
- Přidáno automatické připojování do cachyos-handheld
- CachyOS nyní dokáže provádět aktualizace BIOSu Steam Decku přímo na Steam Decku

24.05
----

**Nové funkce:**

- Souborové systémy: Představen Bcachefs jako volba souborového systému
- pacstrap: Přidána detekce použití Bcachefs a instalace odpovídajících nástrojů Bcachefs-tools
- CachyOS-AI-SDK: Představena nová možnost instalace poskytující přednastavené prostředí NVIDIA SDK připravené k okamžitému použití
- CachyOS-Deckify: Poskytnuta varianta pro handheldy (experimentální), více podrobností naleznete [zde](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)
- BTRFS: Automatický Snapper pro snímky lze nainstalovat přímo z aplikace CachyOS Hello.
- ISO: Ukončen offline instalátor
- Aktualizace balíčků: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Opravy chyb:**

- settings.conf: Detekce hardwaru přesunuta před netinstall
- pacstrap: Použití btrfs-assistant namísto btrfs-assistant-git
- plymouth: odstranění hooku plymouth při kombinaci zfs + šifrování
- ISO: Přidány různé konfigurační soubory pro KDE, aby nedocházelo k zamykání obrazovky během instalace
- services-systemd: Správně povolen časovač fstrim.timer
- umount: Zakázán režim emergency, aby se předešlo problémům při instalaci se ZFS
- shellprocess: Odstraněny pozůstatky po offline instalaci

24.04
----

**Nové funkce:**

- Plymouth: Použití plymouth pro tematickou animaci při spouštění systému
- ISO: Návrat k X11 kvůli problémům při nastavování rozložení klávesnice v instalátoru Calamares
- rEFInd: Nové rozložení oddílů (samostatné `/boot` a `/boot/efi`)
- netinstall: KDE: Ve výchozím nastavení se instaluje xwaylandvideobridge
- netinstall: Použití lightdm namísto ly u různých desktopových prostředí kvůli chybě v ly
- systemd-boot: Použití @saved pro systemd-boot, aby si pamatoval naposledy vybranou spouštěcí položku
- cachyos-keyring: Přepracován balíček cachyos-keyring a poskytnut důvěryhodný svazek klíčů cachyos-trusted
- ISO: Použití komprese ZSTD 19 pro obraz mkinitcpio na ISO
- Aktualizace balíčků: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 a cachyos-settings 39-2

**Opravy chyb:**

- Automatické přihlášení: Opravena možnost automatického přihlášení při použití společně se sddm
- xz: Poskytnut opravený balíček xz
- libarchive: Zmírněn dopad commitu od škodlivého autora xz
- cachyos-settings: udev-rule: nenastavovat watermark_scale_factor na 125, protože to výrazně zvyšuje spotřebu RAM
- calamares: pacman-keyring: Použita jednodušší metoda integrace klíčenky do instalace

24.03.1
-------

**Nové funkce:**

- netinstall: Odstraněna nadbytečná jádra z výběru netinstall, aby se předešlo matení uživatelů. Další vlastní jádra lze nainstalovat přes Kernel Manager
- Kernel Manager: Moduly NVIDIA jsou po detekci automaticky instalovány, přebázováno na QT6, opraveny vlastní názvy při použití volby LTO
- Package Installer: Přebázováno na QT6, aktualizováno pro pacman 6.1
- Aktualizace balíčků: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Opravy chyb:**

- NVIDIA: upraven modul nvidia tak, aby dříve převzal správu nvidia.drm.modeset a předešlo se problémům na grafikách NVIDIA
- Refind: Neinstalovat jádro lts, aby se předešlo problémům
- shellprocess: Úplné odstranění adresáře liveusers

24.03
-----

**Nové funkce:**

- ISO: V ISO je nyní dodávána Plasma 6 a jako výchozí používá Wayland, GNOME ISO bylo vyřazeno, aby se předešlo nejasnostem ohledně netinstall
- Calamares: Přebázováno na QT6
- refind: Přidány možnosti f2fs a zfs včetně šifrování luks2
- zrcadla: Nyní poskytujeme 2 globální CDN. Jednu provozovanou na Cloudflare R2 a druhou na Digital Ocean
- mirrorlist: Online instalátor se nyní stahuje přímo z CDN pro rychlejší doručení
- initcpiocfg: Použití nového hooku microcode pro včasné načtení mikrokódu (ucode)
- zavaděč: Již nenačítat mikrokód pomocí zavaděče
- Aktualizace balíčků: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Opravy chyb:**

- pacstrap: Neinstalovat konfigurační balíčky, aby měl uživatel čistší výběr při instalaci
- shellprocess_pacman: Kopírovat do cílového systému také ohodnocené seznamy zrcadel cachyos-v4-mirrorlists

24.02
-----

**Nové funkce:**

- refind: Změna rozložení z /boot/efi na /boot pro poskytnutí více možností souborových systémů a šifrování
- Live-ISO: Vyčištění a synchronizace Live-ISO
- Spuštění instalátoru: Přidáno doporučení pro online instalaci
- shell-configs: Přidána možnost zakázat fastfetch při spuštění terminálu a přidán alias „update“
- netinstall: Přidán phonon-qt5-vlc do KDE
- Aktualizace balíčků: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Nové funkce:**

- x86-64-v4: Automatická detekce a povolení repozitáře při instalaci
- linux-cachyos: framework plánovače sched-ext je nyní poskytován ve výchozím jádru
- xwayland: Ve výchozím nastavení poskytovány opravy explicit sync
- Aktualizace balíčků: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Opravy chyb:**

- chwd: U karet NVIDIA Ada Lovelace jsou moduly nvidia zabaleny přímo do initramfs, aby se předešlo problémům s časným KMS

23.12
-----

**Opravy chyb:**

- zfs: Přidání compatibility=grub do voleb poolu pro zajištění kompatibility
- grub/xfs: Přidána oprava do grubu pro zajištění kompatibility s novým výchozím nastavením xfs bigtime
- netinstall: xdg-desktop-portal-hyprland namísto xdg-desktop-portal-hyprland-git

23.11
-----

**Nové funkce:**

- nvidia: Použití modulu nvidia namísto dkms
- Calamares synchronizován s upstreamem
- Aktualizace balíčků: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Opravy chyb:**

- nvidia-hook: Vrácen zpět nvidia-hook, aby se předešlo problémům při instalaci s novým modulem
- netinstall: Balíčky byly přejmenovány kvůli nedávným změnám v balíčkování KF5
- netinstall: Do instalace GNOME byl přidán balíček xdg-desktop-portal-gnome

23.09
-----

**Nové funkce:**

- systemd-boot: Výchozí použití luks2
- netinstall: Poskytnuta vlastní kategorie pro balíčky CachyOS
- Calamares synchronizován s upstreamem
- Aktualizace balíčků: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Opravy chyb:**

- shellprocess_sdboot: Zamezení používání „sudo“ při generování spouštěcích položek během instalace

23.08
-----

**Nové funkce:**

- Calamares synchronizován s upstreamem
- Aktualizace balíčků: linux-cachyos 6.4.10, nvidia-utils 535.98

**Opravy chyb:**

- Klíčenka byla aktualizována a nyní funguje správně

23.07
-----

**Nové funkce:**

- CachyOS-Settings nyní obsahuje „bpftune“, který automaticky ladí síťová nastavení v závislosti na používání
- CachyOS-Qtile-Settings: Vylepšení použitelnosti, lepší ikony, ...
- Aktualizace balíčků: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Opravy chyb:**

- Opraven nástroj rate-mirrors
- chwd (Detekce hardwaru) obdržel několik oprav
- Opravena instalace nesvobodných ovladačů pro hybridní sestavy v instalátoru
- Opraveno zamrzání Calamares, ke kterému docházelo u některých vzácných konfigurací, převážně ve virtuálních strojích
- Prezentace: Oprava překlepu na 6. snímku

23.06
-----

**Opravy chyb:**

- Offline instalace: Oprava instalátoru Calamares

23.05
-----

**Nové funkce:**

- Rozložení po migraci CachyOS na Git se nyní promítá do instalace
- chwd (mhwd) obdržel několik oprav
- Pacman: Přidali jsme funkci, která umožňuje zobrazit zprávu našim uživatelům před aktualizací
- Calamares byl synchronizován s upstreamem
- Aktualizace balíčků: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Opravy chyb:**

- netinstall: drobné opravy v důsledku změn balíčků
- Prezentace: 6. snímek byl aktualizován tak, aby odrážel nejnovější změny

23.04
-----

**Nové funkce:**

- Představeno desktopové prostředí Qtile
- Přepracován mhwd: Přepis do jazyka Rust; zjednodušené profily pro GPU a síťové karty; odstraněna spousta zastaralého kódu
- Aktualizace balíčků: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Opravy chyb:**

- f2fs: Odstraněna volba připojení „atgc“, protože měla problémy se systemd

23.03.1
-------

**Nové funkce:**

- Aktualizace balíčků: linux-cachyos 6.2.7, cachy-browser 111.0

**Opravy chyb:**

- Calamares opraven pro správce zobrazení lightdm kvůli chybným upstreamovým commitům v Calamares
- Opraven problém s klíčenkou při offline instalaci
- Refind: Použití linux-cachyos-lts jako výchozího jádra. Aktuální 6.2 zřejmě nefunguje dobře společně s rEFIndem

23.03
-----

**Nové funkce:**

- Přidán zavaděč refind
- Automatická instalace ovladačů Nvidia pomocí MHWD
- Podpora šifrování pro instalaci na ZFS
- Přidán Hyprland do síťové instalace (netinstall)
- CachyOS-KDE-Settings nyní používá výchozí motiv KDE, ale motivy CachyOS jsou stále předinstalované a připravené k použití
- Aktualizace balíčků: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Kompletně přepracován a vylepšen modul zavaděče v Calamares
- ISO obraz je nyní podepsán GPG klíčem
- MHWD byl vylepšen a aktualizován
- Synchronizován Calamares s upstreamem

**Opravy chyb:**

- Možnost „nahradit oddíl“ nyní nabízí výběr souborového systému
- Opraven překlep na 3. snímku
- Opraven ovladač nouveau, který nyní správně načítá modul
- MHWD: Použití modesetting pro INTEL/ATI a Nouveau
- Odstraněn hook zfs z mkinitcpio na Live ISO, který způsoboval problémy při spouštění systému
- Aktualizaci si můžete stáhnout z našich zrcadel na SourceForge.

23.02
-----

**Nové funkce:**

- Přidán repozitář cachyos-community-v3
- Do síťové instalace (Netinstall) byla přidána desktopová prostředí Budgie, MATE a LXDE
- Služba Bluetooth.service je nyní ve výchozím nastavení povolena
- F2FS a GRUB jsou opět povoleny a funkční
- Aktualizace balíčků: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Opravy chyb:**

- Rate-mirrors se nyní při selhání hodnocení zrcadel vrátí k nehodnoceným zrcadlům
- cachyos-rate-mirrors má delší časový limit fetch-mirrors-timeout
- Do souboru hosts byl přidán GitHub, aby se předešlo problémům se seznamem zrcadel (mirrorlist)
- Spouštěcí položky pro BIOS byly aktualizovány v syslinuxu

23.01
-----

**Nové funkce:**

- Snímky v Calamares byly přepracovány a aktualizovány
- Do síťové instalace bylo přidáno desktopové prostředí UKUI
- Do síťové instalace bylo přidáno desktopové prostředí Cinnamon
- Cmdline: zswap je nyní ve výchozím nastavení zakázán, protože CachyOS jako výchozí poskytuje zram
- Calamares aktualizován na nejnovější commit
- LLVM 15 je nyní dodáváno jako výchozí
- Aktualizace balíčků: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI instalátor byl aktualizován

**Opravy chyb:**

- shellprocess remove-ucode nyní běží také při offline instalaci
- pamac byl odstraněn ze síťové instalace (netinstall)
- Ohodnocená zrcadla CachyOS se nyní správně kopírují do cílové instalace
- power-profile-daemon již není ve výchozím nastavení povolen

22.12
-----

**Nové funkce:**

- Nové pozadí GRUBu v zavaděči ISO obrazu
- memtest je nyní součástí systému pro UEFI systémy
- Do instalace KDE byl přidán CachyOS-sddm-theme
- Přidán automatický skript pro verzování při vytváření ISO obrazu
- Calamares aktualizován na nejnovější commit
- Zrcadla jsou nyní hodnocena pomocí „cachyos-rate-mirrors“, který hodnotí naše zrcadla i zrcadla Archu
- Aktualizace balíčků: jádro 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Desktopové prostředí Kofuku bylo odebráno
- extra ISO s obsaženým llvm 15 pro podporu novějších karet AMD

**Opravy chyb:**

- Opraven Calamares při použití GNOME jako ISO
- zfshostid nyní funguje správně pro offline i online instalaci
- Přidán hook „kms“ do modulu initcpiocfg v souladu s výchozím nastavením Arch Linuxu
- A další opravy ISO obrazu

22.11
-----

**Nové funkce:**

- Calamares a jeho konfigurace jsou dodávány v jednom balíčku
- Kompletní pročištění balíčků v síťové instalaci (netinstall)
- Přidán modul, který automaticky odstraňuje nepotřebný mikrokód (ucode)
- Požadovaná paměť RAM snížena na 2,5 GB
- Balíčky vyžadované pro Btrfs se nyní instalují pouze pro Btrfs
- Calamares aktualizován na nejnovější commit
- Zavaděč ISO obrazu má nyní pozadí
- Běžné aktualizace balíčků (mesa, jádro, ...)
- Nahrazení systemd-network za NetworkManager

**Opravy chyb:**

- Služba qemu-quest-agent.service byla z ISO odstraněna
- copytoram bylo zcela zakázáno, protože narušuje offline instalaci
- Aktualizován soubor mkinitcpio.conf
- A další opravy ISO obrazu

22.10
-----

**Nové funkce:**

- Pacman nyní pro instalaci x86-64-v3 používá Architecture=auto, protože jsme přidali opravu, díky níž pacman automaticky detekuje x86-64-v3
- Pacman nyní zobrazuje, ze kterého repozitáře byl balíček nainstalován
- Výběr zavaděče automaticky detekuje přítomnost EFI; pokud není přítomno, použije jako výchozí GRUB
- Výběr odkládacího prostoru (swap) byl ve výchozím nastavení zakázán, protože zram je generován automaticky a dynamicky
- Calamares aktualizován na nejnovější commit
- Minimální požadavek na RAM byl stanoven na 4 GB
- Balíček cachyos-grub-theme byl odstraněn

**Opravy chyb:**

- Detekce SSD a HDD v fstab byla zakázána, dokud nebude k dispozici oprava z upstreamu
- Opraven dvojitý podsvazek BTRFS
- Přidán chybějící mikrokód do zavaděče GRUB na ISO obrazu
- Přidán záložní režim spouštění, který nenastavuje žádné modeset parametry (nomodeset)
- A další opravy ISO obrazu

22.09
-----

**Nové funkce:**

- Calamares je nyní na nejnovější větvi 3.3. Přináší opravy chyb a nové funkce pro Calamares
- TUI instalátor je nyní součástí GUI ISO obrazu, můžete jej spustit příkazem „cachyos-installer“
- Calamares nyní automaticky detekuje, zda je cílový souborový systém na SSD nebo HDD, a podle toho upravuje volby v fstab
- Nvidia pro nejnovější GPU (počínaje řadou 9xx) má nyní vlastní spouštěcí položku, aby se předešlo problémům s ovladačem nouveau
- Aktualizovány volby připojování fstab a zfs
- Firefox již nebude instalován jako výchozí, protože jako výchozí je instalován cachy-browser

**Opravy chyb:**

- Balíček cachyos-gaming-meta byl odstraněn z modulu netinstall, aby se předešlo problémům během instalace
- Balíčky v netinstall byly aktualizovány a obdržely několik oprav
- Opravena instalace prostředí OpenBox
- Běžné opravy překladů

22.07
-----

**Nové funkce:**

- Výběr zavaděče: Uživatel si nyní při online instalaci může vybrat mezi GRUB a systemd-boot
- Při online instalaci se nyní vždy nainstaluje nejnovější Calamares, což umožňuje provádět opravy chyb „za chodu“
- Calamares má nyní modul mhwd, který automaticky instaluje potřebné ovladače (svobodné ovladače)
- Calamares má nové obrázkové snímky při instalaci
- Aktualizovány volby připojování fstab a zfs
- Podpora HiDPI

**Opravy chyb:**

- Opravena chyba s locales v Calamares
- F2FS byl pro zavaděč GRUB odebrán, protože momentálně nefunguje (chyba v Calamares), stále jej však lze používat se systemd-boot
- Calamares nyní zobrazuje správný výchozí souborový systém
- Opraveno GNOME ISO
- Chybějící balíčky na Live ISO byly přidány pro offline instalaci
- Opraveno šifrování btrfs swap luks
- Běžné opravy překladů

22.06
-----

Následující známé chyby byly opraveny:

- Instalace selhala při použití obecného (generic) CPU
- KDE automaticky připojovalo oddíly ZFS, což způsobilo, že automatické přihlášení do ISO přestalo fungovat

**Vylepšení:**

- Opraven firewall serveru; Cloudflare blokoval uživatele jako „boty“, což vedlo k chybě při instalaci
- Přidána podpora motivů pro GNOME, XFCE a OpenBox
- Aktualizována naše wiki

**_CachyOS - Kernel - Manager_**
S nadšením také oznamujeme náš CachyOS-Kernel-Manager.
V něm máte možnost nainstalovat jádro z repozitáře a také si pomocí grafického rozhraní nakonfigurovat vlastní sestavení jádra, což velmi usnadňuje jeho přizpůsobení vašim potřebám.

Pro kompilaci jádra můžete vybrat následující možnosti:

- Plánovač (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA zakázáno nebo povoleno
- KBUILD CFLAGS (-O3 nebo -O2)
- Nastavení regulátoru (governoru) performance jako výchozího
- Povolení BBR2
- Frekvence časovače / Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodic, full)
- Zakázání I/O plánovače MQ-Deadline
- Zakázání I/O plánovače Kyber
- Povolení nebo zakázání MG-LRU
- Povolení nebo zakázání DAMON
- Povolení nebo zakázání Speculative page fault
- Povolení nebo zakázání LRNG (Linux Random Number Generator)
- Použití automatické optimalizace jádra (automaticky detekuje mikroarchitekturu vašeho CPU)
- Použití optimalizace jádra výběrem (zobrazí se seznam různých mikroarchitektur CPU a číslem si můžete vybrat tu svou)
- Zakázání ladicích informací / debug (zmenšuje velikost jádra)
- Povolení nebo zakázání nf cone
- Povolení LTO (Full, Thin, No)

22.05
-----

CachyOS byl založen před rokem. Po téměř roce vývoje s velkou hrdostí oznamujeme naše první stabilní vydání grafického instalátoru (GUI Installer).
Strávili jsme spoustu času zkoumáním správy repozitářů, vývojem jádra, infrastrukturou, tvorbou motivů, ... a nakonec jsme to vše spojili do grafického instalátoru CachyOS.
Všechny funkce, na kterých jsme pracovali a které jsme do instalátoru implementovali, se snaží uživatelům nabídnout plně přizpůsobitelný zážitek.

Nejzajímavějšími změnami je to, že pro online instalaci nyní používáme pacstrap, což poskytuje zcela čisté nainstalované prostředí, a plně nativní podporu souborového systému ZFS.

Protože Discord omezuje délku zpráv, celé oznámení naleznete zde:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Stažení naleznete zde:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
