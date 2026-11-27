---
title: Grafický inštalátor
description: Zoznam zmien pre Calamares a grafické Live ISO
sidebar:
  order: 1
ai_translated: true
---
26.06
----

**Funkcie:**

* **Balíky:**
  * Python teraz využíva rozšírené PGO na zlepšenie výkonu
  * Pridaná [oprava pre GCC](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) na ladenie nesprávneho predpovedania vetvenia pre generickú architektúru x86, čo zlepšuje spôsob, akým GCC zohľadňuje náklady na nesprávne predpovedanie vetvenia na moderných procesoroch Intel a AMD
  * Opravená regresia zistená v testoch Phoronix Benchmarks pri použití knižnice OpenBLAS na procesoroch s vysokým počtom jadier
  * Premenovaný balík `proton-cachyos` na `proton-cachyos-native`
* **pacman:** Pridaná [sieťová izolácia pre skriptlety a hooky](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Inštalátor:**
  * Pridaná možnosť pracovného prostredia CachyOS Hyprland Noctalia a ukážkové video
  * Odstránený `paru` z inštalácie; ako alternatívu používateľom odporúčame používať [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), či už cez jeho GUI alebo CLI
  * Pridaný SDDM ako správca obrazovky pre MangoWM
  * Nástroj GNOME System Monitor bol nahradený aplikáciou Resources
  * Do skupiny audio balíkov bol pridaný balík `realtime-privileges`
  * Vylepšená detekcia rozloženia a variantu klávesnice v live relácii
* **CachyOS-Welcome:**
  * Pridaná podpora DNS over QUIC (DoQ) prostredníctvom `blocky`
  * Pridaná samostatná stránka na riešenie problémov
  * Pridaná podpora terminálu Ptyxis
  * Pridané lokalizácie do azerbajdžančiny a gréčtiny
  * Pridané francúzske stránky s informáciami a zapojením sa do komunity
  * Aktualizované preklady do taliančiny, nemčiny, francúzštiny, japončiny a bulharčiny
* **chwd:**
  * Pridaná turecká lokalizácia
  * Odstránený balík `cachyos-handheld` zo zoznamov balíkov pre handheldy
  * Rieši konflikty ovládačov v systémoch s viacerými GPU vyžadujúcich nekompatibilné vetvy ovládačov (napr. zmiešané generácie kariet NVIDIA), pričom nainštaluje najlepší spoločný ovládač alebo sa vráti k primárnemu GPU
  * Pridaný 32-bitový ovládač Vulkan pre virtuálne stroje
* **cachyos-settings:** Použité 15-sekundové limity spustenia a 10-sekundové limity vypnutia pre používateľské služby, čím sa predchádza 90-sekundovým oneskoreniam pri vypínaní

**Opravy:**

* **Inštalátor:**
  * Opravené poradie rozložení klávesnice a spracovanie konfigurácie `locale1`
  * Opravené kopírovanie správnej konfigurácie pacmana do nainštalovaného systému
  * Odstránené zvyšné priečinky `/etc/calamares` po inštalácii
  * Čistenie Calamares presunuté až za všetky inštalačné skripty
  * Odstránený nadbytočný krok po inštalácii pre Limine
* **CachyOS-Welcome:**
  * Zabránené pádu aplikácie pri výbere „Install Apps“ bez nainštalovaného balíka `cachyos-pi`; tlačidlo je teraz skryté, keď nie je dostupné
  * Opravený pád aplikácie, keď nebolo možné načítať alebo spracovať uložený súbor nastavení; pri zlyhaní sa teraz nastavenia obnovia na predvolené hodnoty
  * Opravená detekcia vylepšení (vrátane `graphical-session.target.wants`) a globálne zakázanie vylepšení používateľských služieb cez polkit
* **chwd:**
  * Opravené identifikátory výrobcov virtuálnych strojov
  * Odstránená zbytočná aktivácia služby `fprintd`
  * Opravená ochrana proti odstráneniu balíkov Mesa

26.04
----

**Funkcie:**

* **Inštalátor:**
  * Shelly teraz nahradil Octopi ako grafický správca balíkov
  * Ihneď po inštalácii sa teraz vytvorí čistá snímka (snapshot) a natrvalo sa uchová, čím poskytuje základný bod obnovenia
  * GRUB `os-prober` je teraz predvolene povolený
  * Pridané MangoWM ako možnosť pracovného prostredia vrátane dotfiles
  * Odstránené pracovné prostredie UKUI
  * Grafické karty AMD GPU teraz používajú inú tému Plymouth, keďže ovládač amdgpu nedokáže spoľahlivo vykresľovať predchádzajúcu tému na notebookoch s pripojeným sekundárnym monitorom
  * Prečistený a modernizovaný výber balíkov pre GNOME
  * Pridaná možnosť nainštalovať `MangoWM` so shellom `DMS`
* **CachyOS-Welcome:**
  * Pridaná podpora DNS-over-HTTPS (DoH) cez `blocky`
  * Pridaná podpora vlastných DNS serverov a automatický indikátor/reset DHCP
  * DNS servery teraz zobrazujú metadáta (región, domovská stránka, filtrovanie) a podporujú individuálne testovanie odozvy (latencie)
  * Pridaný prepínač správy VRAM `dmemcg-booster` (v KDE dodatočne nainštaluje `plasma-foreground-booster`)
  * Pridaná plná podpora ovládania klávesnicou na zlepšenie prístupnosti
  * Ikony sociálnych sietí vo formáte PNG boli nahradené ostrými SVG ikonami s podporou HiDPI
  * Do pomocníka pre terminály bol pridaný `wezterm`
* **chwd:**
  * Pridaná natívna detekcia USB zariadení (cez libusb/sysfs) a detekcia typu šasi
  * Pridaná podpora integrácie snímača odtlačkov prstov (`fprint`) pre sudo
  * Pridaná detekcia rodiny/modelu CPU na podporu `intel-lpmd`
  * **Handheldy:** Pridané presné vzory pre Xbox ROG Ally
  * **Sieť:** Pridaný profil pre Wi-Fi Marvell AVASTAR 88W8897 (Surface Pro 4)
  * Rozdelené profily NVIDIA pre notebooky a stolné počítače
  * Rozdelené a aktualizované profily pre virtuálne stroje
* **cachyos-settings:** Predvolený I/O plánovač pre NVMe bol zmenený z `none` na `kyber`

**Opravy:**

* **Inštalátor:**
  * Metóda delenia disku sa teraz zapisuje do ladiaceho denníka (debug log)
  * Staré balíky mikrokódu sa teraz pri opätovnom použití existujúcej zavádzacej (boot) partície odstránia
* **CachyOS-Welcome:**
  * Opravené kontroly pripojenia, ktoré nesprávne vracali hodnotu true, keď ping zlyhal
  * Zabezpečené, aby boli ikony externých odkazov viditeľné aj v tmavých témach
  * Zabránené súčasnému spusteniu viacerých inštancií uvítacej aplikácie
  * Pridaný parameter `StartupWMClass` pre lepšie párovanie okien podľa `.desktop` súborov
* **chwd:**
  * Odstránený hook `kms` zo súboru `mkinitcpio.conf` na neprenosných stolných počítačoch na opravu konfliktov ovládačov NVIDIA
  * Spresnené vyhľadávanie nainštalovaných jadier v profiloch NVIDIA
  * Odstránená vynútená relácia Xorg z profilov NVIDIA 470xx (opravuje kompatibilitu s `plasma-login-manager`)
  * Odstránené zastarané nastavenie `WaylandEnable=false` pre GDM v profiloch virtuálnych strojov
  * Opravené falošne pozitívne detekcie handheldov (napr. konkrétne notebooky MSI nesprávne identifikované ako MSI Claw)
* **cachyos-settings:**
  * Odstránená správa napájania `S01x` z dôvodu problémov s ovládačom NVIDIA 595
  * Zakázaná funkcia `AggressiveVblank` z dôvodu problémov súvisiacich s VR pri ovládači NVIDIA

26.03
----

**Funkcie:**

* **Inštalátor:**
  * Pridaná podpora zobrazovania videí GIF/WebP vo výbere pracovného prostredia na ukážku jednotlivých prostredí. Je to povolené pre Plasma, GNOME, Niri a COSMIC
  * Pridaná podpora formátu JPEG XL vo výbere pracovného prostredia na zmenšenie veľkosti obrázkov
  * Cachy-Update je teraz predvolene povolený pri inštaláciách GNOME a KDE
  * Vylepšená logika inštalácie mikrokódu — teraz deteguje hardvér a nainštaluje správny mikrokód namiesto inštalácie oboch a následného odstránenia nepotrebného
  * Vylepšené chybové hlásenie, keď je partícia EFI príliš malá
  * Zoznam pracovných prostredí bol zoradený od jednoduchých a prístupných zostáv až po pokročilejšie, ako sú správcovia okien (WM)
* **CachyOS-Welcome:**
  * Pridané tlačidlo na jednoduchú inštaláciu a povolenie nástroja „Winboat“ pre jednoduchý virtuálny stroj Windows v Dockeri
  * Pridaná podpora pre DNS server FFMUC vo výbere DNS
  * Pridaný ukrajinský preklad
* **chwd:** Výrazne zmenšená veľkosť initramfs pre konfigurácie s dedikovanou kartou NVIDIA (dGPU)
* **linux-cachyos:** Namiesto generovania súboru `0001-cachyos-base-all.patch` sa teraz pre každé vydanie nášho upraveného jadra vytvára vydanie (release) v repozitári Linuxu
* **cachyos-rate-mirrors:** Výrazne vylepšený zážitok pre používateľov v Číne a Rusku vďaka správnej kontrole pred hodnotením zrkadiel
* **cachyos-settings:** Pridaná podpora automatického nastavenia bezdrôtovej regulačnej domény na základe časového pásma
* **webová stránka:** Dizajn webovej stránky bol prepracovaný a vylepšený tak, aby zodpovedal modernejším štandardom
* **GitHub:** Pridané šablóny hlásení problémov (issue templates) do dôležitých repozitárov na GitHube na zlepšenie kvality hlásení chýb a poskytnutie návodu pre používateľov
* **Zrkadlá:** Nové zrkadlá v Rusku (jura12, cachy-arch.ru), Švédsku (Zyner) a Kanade (All Things Linux)

**Opravy:**

* **Inštalátor:**
  * Odstránená podpora pre bcachefs vo výbere súborového systému z dôvodu požiadavky na balík bcachefs-dkms
  * Opravené šifrovanie pri použití LUKS2 pre konkrétne zariadenia
  * Opravené povoľovanie správcu obrazovky „ly“
* **cachyos-settings:** Skript `cachyos-bugreport.sh` teraz skrýva IP adresu, používateľské meno, názov hostiteľa (hostname) a MAC adresu
* **chwd:**
  * Generické profily pre handheldy a vylepšená podpora GPU v handheldoch
  * Pre handheldy Lenovo je teraz povolený nástroj fwupd


**Zoznam zmien pre Handheld edíciu:**

* **gamescope-session:** Balík gamescope-session-plus bol nahradený balíkom gamescope-session-cachyos, ktorý je odvodený od Valve gamescope-session
  * Povoľuje aktualizácie firmvéru pre zariadenia Steam Deck a Lenovo Legion Go
* **plasma-login-manager:** SDDM bol nahradený balíkom plasma-login-manager ako správca prihlásenia
* **zavádzače:** Ako predvolený je teraz vybraný Limine s automatickými snímkami. systemd-boot bude naďalej voliteľný
* **Inštalátor:** Calamares pre Handheld edíciu bol zlúčený s Calamares pre desktopovú edíciu
* **ISO:** ISO teraz používa Wayland namiesto X11

26.01
----

**Funkcie:**

* **Inštalátor:**
  * Výber zavádzača bol presunutý do Calamares; správa je teraz zjednotená v jednom balíku.
  * Detekcia architektúry sa teraz vykonáva **pred** inštaláciou základného systému, aby sa zmenšila veľkosť sťahovania.
  * GRUB teraz na šifrovanie používa LUKS2.
  * Odovzdávanie parametra `--needed` do pacmanu, aby sa predišlo dvojitej inštalácii balíkov.
  * Použitie jednoúrovňovej kompresie na diskoch NVMe pre Btrfs.
  * Odstránené závislosti na xorg v pracovných prostrediach používajúcich Wayland.
* **ISO:**
  * Prechod na `plasma-login-manager` pre prostredie ISO.
  * ISO teraz obsahuje stabilné (Stable) aj LTS jadro. Stabilné jadro je vybrané predvolene.
  * Relácia ISO bola prepnutá z X11 na Wayland.
* **Netinstall:**
  * Inštalácie Plasma teraz používajú `plasma-login-manager` namiesto SDDM.
  * Niri teraz používa `noctalia-shell` a aktualizované dotfiles.
  * Prečistený proces inštalácie GNOME.
* **Prezentácia (Slides):** Opravené preklepy v snímkach Calamares a pridaná nová snímka predstavujúca Wiki.
* **Zrkadlá:** Stránka stavu zrkadiel (<https://packages.cachyos.org/mirrors>) teraz zobrazuje stav synchronizácie zrkadiel CachyOS.
* **cachyos-settings:** Povolený parameter `EnableAggressiveVblank` pre modul NVIDIA. Tým sa znižuje čas strávený v hornej polovici obsluhy prerušenia pre prerušenia displeja s nízkou latenciou.
* **chwd:**
  * Inštaluje `nouveau-fw` na povolenie podpory VA-API v Nouveau pre karty rodiny NVIDIA Kepler.
  * Pridaná podpora AI-SDK pre niekoľko nových GPU od AMD.
  * HHD bol nahradený balíkmi `steamos-manager` a `inputplumber`.
* **Proton-CachyOS:**
  * Pridaná podpora FSR4 MLFG (Machine Learning Frame Generation); automaticky sa povolí pri použití `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Pridaná podpora modulu `d7vk`. Dá sa povoliť pomocou `PROTON_DXVK_DDRAW=1`
  * Importované opravy pre haptickú spätnú väzbu ovládača DualSense
  * Pridaná premenná `WINE_BLOCK_HOSTS` na zabránenie pripájania Wine ku konkrétnym doménam
  * Automatické povolenie `ENABLE_HDR_WSI=1` pri použití `winewayland` na dedikovaných kartách NVIDIA (dGPU)
  * Opravené problémy s rozložením klávesnice pri použití `winewayland.drv`
  * Odstránená dlhoročná oprava, ktorá spôsobovala zhoršené 1 % nízke FPS
  * Upravené `protonfixes` na lepšie spracovanie výberu predvoľby DLSS a presmerovania `libxess_dx11.dll`
  * `proton-cachyos-slr` sa teraz používa ako predvolený v balíku „gaming-meta“. Natívna verzia bude naďalej podporovaná.


**Opravy:**

* **Limine:** Zväčšená veľkosť zavádzacej partície na 4192 MB, aby vyhovela vysokým nárokom nástroja `limine-snapper-sync`.
* **Inštalátor:**
  * Inštalátor teraz zablokuje pokračovanie a zabráni mu, ak je partícia EFI príliš malá pri použití možností „vedľa seba“ (alongside) alebo „nahradiť partíciu“ (replace partition).
  * Opravený problém, keď po výbere pracovného prostredia, prechode o krok ďalej, návrate späť a výbere iného pracovného prostredia zostali vybrané obe prostredia.
* **chwd:** Odstránená premenná prostredia vynucujúca `libva-nvidia-driver`, keďže spôsobovala problémy na systémoch s dvoma GPU.
* **cachyos-hello**: Opravený problém, keď sa cachy-update zobrazoval ako zakázaný, hoci bol povolený.
* **Ovládač (Controller)**: Opravený vstup viacerých herných ovládačov vďaka aktualizácii pravidiel vstupu na najnovšiu verziu.
* **Framework 16 (Zen5)**: Opravený problém, keď relácia zamrzla pri písaní v inštalátore calamares.

25.11
----

**Funkcie:**

* **ISO/Inštalátor:** Pridané nástroje Orca a espeak-ng pre lepšiu prístupnosť
* **initcpiocfg:** Povolený systemd hook v podporovaných konfiguráciách
* **Netinstall:** Dotfiles pre Hyprland boli odstránené
* **pacstrap:** Inštaluje `bcachefs-dkms`, ak je ako súborový systém vybraný `bcachefs`
* **Calamares:** Pridaná podpora pre plasma-login-manager a cosmic-greeter
* **Cosmic:** Prechod zo SDDM na cosmic-greeter
* **Písma:** Vylepšené písma pre ázijských používateľov
* **chwd:**
  * Inštaluje `intel-media-sdk` a `vpl-gpu-rt` na podporovaných GPU
  * Povolený Nouveau NvBoost pre GPU Fermi
  * Ukončená podpora staršieho ovládača NVIDIA 390xx
  * Pridaná podpora pre Xbox ROG Ally/X
* **cachyos-hello:**
  * Odstránený interný inštalátor balíkov; namiesto neho sa otvára inštalátor balíkov CachyOS
  * Pridané rozhranie CLI pre funkcie grafického rozhrania
  * Rôzne opravy kontroly verzie ISO
* **cachyos-settings:** zram-generator: Odstránená kompresia pre nekomprimovateľné stránky
* **Proton-CachyOS:**
  * Pridaný `dxvk-gplasync` ako alternatívny DXVK. Dá sa povoliť pomocou `PROTON_DXVK_GPLASYNC=1`
  * Pridané `DISABLE_LAYER_MESA_ANTI_LAG` pri použití `PROTON_FSR4_UPGRADE`
  * Pridaných viacero **opráv pre Wayland** (posun pri celej obrazovke, mŕtve klávesy, správanie DPI, úpravy výstupu videa) a vylepšenia pre `winewayland.drv`
  * Zavedené a doladené správanie **vyrovnávacej pamäte shaderov pre jednotlivé hry** a väčšie vyrovnávacie pamäte shaderov (najmä pre NVIDIA)
  * Pridané aktualizácie upscalerov FSR3 a XeSS

**Opravy:**

* **Limine:**
  * Opravená inštalácia Limine bez registrácie záznamu na chybnom UEFI
  * Používa systemd variant hooku `btrfs-overlayfs`
* **Calamares:** Odstránená možnosť `attr2` z nastavení pripojenia XFS
* **chwd:** Zakázané USB sieťové rozhranie Ethernet čipu T2

25.08
----

**Funkcie:**

* **Služby:** Pridaný portál **packages.cachyos.org**, ekvivalent vyhľadávania balíkov na webe Arch Linuxu, s možnosťou vylúčiť balíky CachyOS.
* **Jadro:** Inštalátor teraz po inštalácii dodatočne nainštaluje aj **linux-cachyos-lts** ako sekundárne/záložné jadro. Naďalej však odporúčame používať stabilné (Stable) jadro.
* **ISO:** Jadro live ISO bolo prepnuté zo Stable na LTS z dôvodu pretrvávajúcich problémov so stabilným jadrom, čím sa zlepšila spoľahlivosť zavádzania.
* **Pracovné prostredie:** Pridané prostredie **Niri** ako možnosť inštalácie vrátane niekoľkých predkonfigurovaných dotfiles.
* **NVIDIA:** Povolený režim spánku **S0ix** na podporovanom hardvéri pre moderný úsporný pohotovostný režim.
* **GRUB:** Spustiteľné snímky sú teraz automaticky povolené a nastavené, ak koreňový súborový systém používa **Btrfs**.
* **Vylepšenia (Tweaks):** Do stránky Tweaks v uvítacej aplikácii bol integrovaný **Cachy-Update**. Cachy-Update pridáva časovač a ikonu v systémovej lište na upozorňovanie používateľov na aktualizácie a umožňuje aktualizovať jedným kliknutím.
* **Proton-CachyOS:**
    - Pridaný nástroj na sťahovanie DLL knižníc DLSS (verzia **310.3.0**), podobne ako pri sťahovaní FSR4. Na povolenie použite premennú prostredia `PROTON_DLSS_UPGRADE=1`.
    - Pridaná premenná prostredia `PROTON_DLSS_INDICATOR=1` na povolenie ukazovateľa DLSS HUD.
    - Pridaný nástroj na sťahovanie DLL knižníc XeSS (verzia **2.1.0**), podobne ako pri DLSS. Na povolenie použite premennú prostredia `PROTON_XESS_UPGRADE=1`.
    - Pridaná premenná `PROTON_FSR4_RDNA3_UPGRADE` pre GPU RDNA3. Robí to isté ako `PROTON_FSR4_UPGRADE`, ale zároveň nastavuje niektoré ďalšie potrebné premenné.
    - Pridané úplnejšie implementácie knižníc Nvidia chýbajúcich v Protone. Malo by to pomôcť s povolením možností ako PhysX v hrách, kde boli predtým nedostupné. Môžete ich povoliť aj jednotlivo pomocou `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` a `PROTON_NVIDIA_NVOPTIX`.
    - Pridaná vyrovnávacia pamäť shaderov pre jednotlivé hry, predvolene povolená; dá sa zakázať pomocou `PROTON_LOCAL_SHADER_CACHE=0`. Shadery sa budú ukladať do `<steamlibrary>/shadercache/<appid>` pre každú hru, podobne ako keď je povolené predbežné ukladanie shaderov do vyrovnávacej pamäte. Počas opätovného zostavovania vyrovnávacej pamäte shaderov pre každú hru dôjde k zasekávaniu, ale uložené shadery sa nebudú vyraďovať kvôli obmedzenej veľkosti vyrovnávacej pamäte.
    - Pridaný [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) ako voliteľná náhrada DXVK pre staršie GPU, ktoré riadne nepodporujú Vulkan 1.3. Používa vetvu `async`, takže by sa NEMAL používať s hrami využívajúcimi anti-cheat ani s hrami pre viacerých hráčov všeobecne. Boli ste varovaní. Na povolenie použite `PROTON_DXVK_SAREK=1`.
    - Pridaná premenná `PROTON_FSR3_UPGRADE` na aktualizáciu DLL knižníc FSR 3.1 na novšie verzie.

**Opravy:**

* **Limine:**
    - Opravená chyba `limine bios-install /dev/sdaX` pri výbere pripojovacieho bodu **/boot** ako umiestnenia zavádzača na systémoch MBR.
    - Opravená neinicializovaná hodnota cesty `bootLoader`, ktorá spôsobovala zlyhania inštalácie na systémoch MBR, keď umiestnenie zavádzača nebolo výslovne vybrané.
    - Pridané varovanie o používaní príznaku **bios-grub** na zavádzacej partícii, čo môže spôsobiť chybu „Stage 3 file not found“.
    - Opravený dual-boot s Windows bez nutnosti ďalších úprav pri inštaláciách v režime BIOS.
    - Opravené zlyhávanie spúšťania snímok Btrfs pri použití **GNOME (GDM)**.
* **Spúšťač inštalátora (Launch Installer):** Pridané záložné IP adresy pre kontrolu online pripojenia v prípade, že príkaz ping na **cachyos.org** zlyhá.

25.07
----

**Funkcie:**

- **Shell**: Používateľský shell je teraz možné vybrať počas inštalácie spomedzi fish, zsh a bash. Fish zostáva predvolene povolený.
- **chwd**: Inštaluje plasma-x11 pre staršie ovládače NVIDIA
- **Netinstall**: Pridaný fwupd do KDE Plasma a Gnome
- **mesa-git**: Pridaná podpora pre AMD Anti Lag
- **firefox**: Predstavená alternatívna verzia Firefoxu s názvom „firefox-pure“, ktorá obsahuje vylepšenia s profilom userjs. Okrem toho bol pridaný balík „cachyos-firefox-settings“, ktorý je možné nainštalovať k prehliadaču firefox.
- **Proton-CachyOS**:
  - Importované commity wine-wayland z upstreamu
  - Pridaná premenná prostredia „PROTON_FSR4_UPGRADE“, ktorá automaticky stiahne najnovšiu DLL knižnicu FSR4 a nahradí ju na automatický prechod v hrách podporujúcich FSR 3.1
  - Pridaných mnoho opráv súvisiacich s Waylandom z upstreamu Wine vydaných po Wine 10.0.
  - Pridané opravy na lepšiu integráciu anti-cheatu. Poďakovanie patrí NelloKudo
  - Pridané opravy pre AMD Anti Lag 2 pre vkd3d-proton a wine
  - Aktualizované umu-protonfixes na najnovší commit

**Opravy:**

- **Kľúčenka (Keyring)**: Vylepšené spracovanie inštalácie kľúčenky, aby sa predišlo problémom a vykonalo sa niekoľko opakovaných pokusov.
- **systemd-oomd**: Zakázaný systemd-oomd, keďže mal problémy so spoluprácou s le9 a ukončoval aplikácie príliš skoro

**Zoznam zmien pre Handheld edíciu:**

- **handheld-settings**: Importovaných niekoľko vylepšení zo SteamOS do Handheld edície
- **pipewire**: Nastavené minimálne kvantum na 256
- **SteamDeck-OLED**: Inštalácia galileo-mura pre Steam Deck OLED
- **Lenovo Legion Go S**: Pridaná podpora pre Lenovo Legion Go S

25.05
----

**Funkcie:**

- **ISO**: Pridaná automatická detekcia počas spúšťania ISO na identifikáciu NVIDIA GPU v systéme a načítanie príslušného modulu (napr. nvidia-open, nvidia), čo poskytuje lepšiu podporu pre sériu 10xx a staršie.
- **Plymouth**: Pridaná nová animácia Plymouth.
  - Ďakujeme Erenovi ([https://github.com/erenyldz89](https://github.com/erenyldz89)) za prácu na tejto novinke!
- **Prehliadač**: Cachy-Browser bol označený za zastaraný. Ako predvolený predinštalovaný prehliadač teraz poskytujeme Firefox. Návod na migráciu profilov do Firefoxu (a jeho forkov) nájdete tu: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Pridané balíky kcalc, filelight, plymouth-kcm a kio-admin do inštalácie KDE.
- **mkinitcpio**: Predvolene zakázaný záložný initramfs (fallback). Tým sa ušetrí značné množstvo miesta.
- **Zrkadlá**: Pridané nové 10 Gbps zrkadlo v Bangladéši. Ďakujeme Limde za jeho hosťovanie!
- **Proton**:
  - Rebasovaná takmer všetka sada opráv z **Proton CachyOS 9.0**.
  - Povolený ovládač Wayland pre zostavy Steam Linux Runtime. Povoľte ho pomocou `PROTON_ENABLE_WAYLAND=1`. Ďakujeme [GloriousEggroll](https://github.com/GloriousEggroll) za uskutočnenie tejto funkcie.
  - Pridaných mnoho opráv súvisiacich s Waylandom z upstreamu Wine vydaných po Wine 10.0.
  - Opravené rôzne problémy s ovládačom Wayland a hrami používajúcimi Vulkan. Ďakujeme [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) za všetku náročnú prácu.
  - Pridaná zástupná implementácia (stub) pre `amdxc64.dll` na povolenie FSR4. Použite `FSR4_UPGRADE=1` na aktualizáciu hier s FSR3.1 na FSR4. Opäť ďakujeme [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Návod: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Pridané opravy pre DualSense na kompletnejšiu funkčnosť detekcie zvukového zariadenia pre káblovú haptiku založenú na zvuku. Niektoré hry, ktoré sa spoliehali na toto konkrétne správanie, by teraz túto funkciu mali mať k dispozícii. Ďakujeme [ClearlyClaire](https://github.com/ClearlyClaire) za pôvodné opravy a [Exotic0015](https://github.com/Exotic0015) za skúmanie tejto problematiky od verzie **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Odstránená oprava pre hru Dragon Age Inquisition, keďže nefungovala. Pre túto hru zatiaľ použite **Proton CachyOS 9.0**.
- **GRUB**: Pridaná nová téma GRUB. Ďakujeme [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Opravy:**

- **Zrkadlá**: Opravený problém, keď používatelia z Ruska už nemohli inštalovať systém. Problém sa vyriešil nepoužívaním siete CDN77, ktorú Rusko začalo blokovať.
- **kde-settings**: Zakázaná ikona Discover na paneli úloh.
- **ddcutil**: Vydaná predbežná verzia ddcutil 2.2.1 na opravu problému, keď GPU od AMD zamŕzali pri sledovaní videí na YouTube.

**Zoznam zmien pre Handheld edíciu:**

- **os-branch**: Herný režim (Game Mode) teraz správne zobrazuje, že sa používa CachyOS Linux.
- **audio**: Aktualizované profily konvolvéra.
- **steamos-manager**: Používa sa na správu taktov GPU a TDP, aktualizácie BIOS-u a dokovacej stanice, údržbu úložných zariadení, formátovanie externých úložísk a limit nabíjania batérie pre Steam Deck.
- **steamos-powerbuttond**: Tento komponent nahrádza štandardný powerbuttond pre lepší zážitok z režimu spánku.
- **jupiter-hw-support**: Aktualizované na verziu 20250501.

25.04
----

**Funkcie:**

- **occt**: Do ISO bol pridaný nástroj OCCT, aby bolo v live prostredí k dispozícii záťažové testovanie
  - Ďakujeme Marekovi za tento nápad!

**Opravy:**

- **jadro**: Opravuje pád modulu na notebookoch Asus
- **limine**: Limine má teraz nainštalovaný mkinitcpio-limine-hook a bude automaticky vytvárať záznamy zavádzača

**Zoznam zmien pre Handheld edíciu:**

- **audio**: Pridané zvukové profily pre ROG Ally X a Legion Go
- **gamescope**: gamescope-plus bol nahradený upstreamovou verziou gamescope

25.03
----

**Funkcie**:

- **Zavádzač**: Pridaná podpora pre zavádzač Limine
- **Zavádzač**: Pridaná podpora automatických snímok pre zavádzač Limine
- **Samba**: Pridaný balík „cachyos-samba-settings“ na jednoduché nastavenie pripojenia Samba
- **NVIDIA**: Znovu povolený firmvér GSP pre uzavretý modul NVIDIA
- **Jadro**: Pridaná podpora pre ovládač Asus Armoury
- **Secure Boot**: Vylepšený skript „sbctl-batch-sign“, aby podpisoval iba požadované súbory
- **udev**: Vrátené používanie ntfs3 ako predvoleného ovládača pre partície NTFS
  - Informácia: Používanie jadrového ovládača NTFS3 ako predvoleného spôsobilo niektorým používateľom problémy. Preto sme túto zmenu opäť vrátili späť.
- **wine**: Wine a Wine-Staging teraz predvolene používajú WoW64 a NTSync
- **scx-manager**: Grafický správca sched-ext bol presunutý zo Správcu jadra (Kernel Manager) do vlastnej samostatnej aplikácie
- **Podpora hardvéru**: Pridaná podpora pre RDNA4, RTX 5070 Ti a 5070.
- **Nastavenia**: Pridaná podpora DLSS Swapper — ide o skript, ktorý automaticky aktualizuje a používa najnovšiu verziu a predvoľbu DLSS
- **Aktualizácie balíkov**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Opravy**:

- **initcpiocfg**: Odstránené pridávanie modulu „crc32c-intel“ do mkinitcpio — toto bolo označené za zastarané a teraz sa predvolene používa modul „crc32c“
- **chwd**: T2 MacBook zakazuje presmerovanie spracovania (offloading) pri brcmfmac
- **chwd**: Neinštalovať ovládač NVIDIA 390.xx na notebooky

25.02
----

**Funkcie**:

- **Jadro**:
  - Optimalizácia Propeller je teraz aplikovaná na predvolené jadro **linux-cachyos** pre všetky dostupné architektúry.
    - **Poznámka**: V kombinácii s AutoFDO to môže zvýšiť výkon približne o 10 % v závislosti od pracovnej záťaže.
- **NVIDIA**: Pridaná podpora architektúry Blackwell.
- **ISO**: Používanie modulu nvidia-open ako predvoleného na zabezpečenie podpory Blackwell. Používatelia s GPU staršími ako Turing by mali použiť prvú alebo záložnú možnosť spustenia.
- **Nastavenia**: Predvolene povolené klepnutie na kliknutie (tap-to-click) pre relácie X11.
- **udev**: Použitie ntfs3 ako predvoleného ovládača pre partície NTFS.
- **game-performance**: Zakázaný šetrič obrazovky počas hrania hier.
- **kernel-manager (sched-ext)**: Pridaná podpora serverového režimu.
- **jadro**: Pridané opravy pre funkciu preferovaného jadra AMD (preferred core).
- **chwd**: Znovu pridané dočasné riešenie pre RTD3.
- **Aktualizácie balíkov**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Opravy**:

- **chwd**: Opravený problém, keď hybridné notebooky s hardvérom Intel a NVIDIA nemohli používať svoje GPU v programe DaVinci Resolve.
- **glibc**: Pridaná oprava pre CVE-2025-0395.
- **kernel-manager**: Pokus o inštaláciu predzostaveného modulu NVIDIA, ak je dostupný pre predvolené jadro Arch.
- **kernel-manager**: Pridaná dodatočná kontrola, aby sa hodnota neprepísala v prípade, že modul nie je dostupný.

**Zoznam zmien pre Handheld edíciu:**

- **hooky**: Opäť povolené používanie natívne kompilovaného Protonu.
- **rôzne**: Niekoľko aktualizácií a opráv.

24.12
----

**Funkcie**:

- Jadro:
  - AutoFDO je teraz aplikované na predvolené jadro `linux-cachyos` pre všetky dostupné architektúry
    - **Poznámka**: Zlepšenia výkonu sú zatiaľ minimálne z dôvodu súčasných obmedzení. Zlučovanie profilov vyžaduje LLVM 19 a optimalizácia Propeller od neho závisí. Očakávame, že LLVM 19 a optimalizovanejšie profily budú dostupné koncom roka po prijatí LLVM 19 v Arch Linuxe
- chwd: Rusticl je teraz správne nakonfigurovaný
- chwd: vylepšené zaznamenávanie chýb počas volaní hookov
- chwd: opravený výber ovládačov VAAPI
- cachyos-settings: Pridaný skript na uľahčenie spúšťania aplikácií cez Zink
- Konfigurácia Sysctl: Prepracovaných a optimalizovaných niekoľko nastavení
- Správca jadra (Kernel Manager): Pridaná podpora pre `scx_loader`, čo umožňuje natívne prepínanie plánovačov
- Inštalátor: Služba Bluetooth je teraz predvolene povolená
- Netinstall:
  - Medzi inštalované balíky bol pridaný `wireless-regdb`
    - Tým sa pripojenie nakonfiguruje na používanie vhodných kanálov a odomknú sa ďalšie kanály, čo môže potenciálne zvýšiť rýchlosť internetu
    - **Poznámka**: Predvolene je nastavený všeobecný región; pre optimálny výkon sa odporúča nastaviť váš región
- **Aktualizácie balíkov**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Opravy chýb**

- Inštalátor: Záznamy z inštalácie už neotvárajú ladiace okná terminálu
- Správa partícií:
  - Správne nastavenia `umask` zabezpečujú, že priečinok `/boot` je bez dostatočných oprávnení neprístupný
- Spúšťač inštalátora (Launch Installer): Opravené kontroly internetového pripojenia

**Zoznam zmien pre Handheld edíciu:**

- Aktualizované balíky súvisiace s handheldmi
- Opravený problém so spracovaním profilu napájania
- Pridaná podpora pre WiFi 6

24.11
----

**Funkcie:**

- thp-shrinker: Nastavená hodnota max_ptes_none na 80 % pre stránky vyplnené nulami. Tým sa zníži využitie pamäte pri trvalom používaní THP pri zachovaní rovnakého výkonu
- NVIDIA: Firmvér GSP sa teraz automaticky zakáže, ak používateľ sám prepne na uzavretý ovládač
- chwd: NVIDIA: služby nvidia-powerd sa na notebookoch povolia, aby sa dosiahlo čo najvyššie dostupné TDP
- proton-cachyos: Generovanie snímok DLSS Frame Generation teraz funguje. Očakáva sa, že v budúcnosti bude fungovať aj v upstreamovom Protone
- jadro: Teraz je aplikovaný AMD Cache Optimizer. Používatelia s procesormi s dvoma X3D CCD čipletmi teraz môžu prepínať medzi uprednostňovaním frekvencie alebo vyrovnávacej pamäte jadier
- jadro: amd-pstate: Spätne portované opravy výkonu amd-pstate pre Strix Point
- jadro: Pridané upstreamové opravy problémov s TDP na GPU AMD RDNA2 a RDNA3
- jadro: Pridané opravy časovania pre displeje s konfiguráciou 5120x1440x240
- jadro: Experimentálne jadro optimalizované pomocou AutoFDO v repozitári pod názvom „linux-cachyos-autofdo“
- ISO: Pridaná kontrola, či používateľ spúšťa Handheld edíciu, a upozornenie, ak spúšťa inštaláciu na nepodporovanom zariadení
- ISO: Pridaná kontrola, či používateľ používa najnovšie ISO; ak nie, zobrazí sa upozornenie

**Opravy chýb:**

- refind: rozdelenie disku: zmena z 3-členného rozloženia partícií na 2-členné
- netinstall: pridaný balík kdeplasma-addons do inštalácie Plasma
- calamares: Opravený problém pri delení disku s odkladacou (swap) partíciou

**Zoznam zmien pre Handheld edíciu:**

- Podpora pre Rog Ally X by mala byť vylepšená

24.10
----

**Funkcie:**

- Aktualizácie balíkov: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Opravy chýb:**

- sddm: Nasadený novší sddm na opravu prihlasovania do relácie wayland
- ISO: Pridaný xf86-video-amdgpu na opravu načítania grafickej relácie na niektorých zostavách
- chwd: Opravená opätovná inštalácia profilov

24.09
----

**Funkcie:**

- Balíky: Optimalizovalo sa množstvo balíkov pomocou PGO, ako sú LLVM, Clang, svt-av1 a nodejs. To prinieslo napríklad o 10 % rýchlejší kompilátor Clang
- Repozitár: Repozitár sa teraz synchronizuje a aktualizuje častejšie, čo znamená ešte menšie oneskorenie. Interval synchronizácie bol skrátený z každých 3 hodín na každú hodinu.
- Repozitár: Od 27. 9. 2024 balíky kompilované s prepínačom -fpic automaticky povolia -fno-semantic-interposition. To môže priniesť zvýšenie výkonu pri mnohých balíkoch.
- zlib-ng: Teraz sa používa ako náhrada za zlib
- sddm: Pri inštalácii KDE bude sddm teraz predvolene používať Wayland ako kompozítor.
- cachyos-settings: NetworkManager teraz používa systemd-resolved ako backend, čo pomáha s ukladaním DNS do vyrovnávacej pamäte
- cachyos-settings: Používanie time.google.com ako servera na synchronizáciu času, aby sa predišlo problémom so synchronizáciou času na niektorých zostavách
- gcc: Pridané opravy na ladenie pre znver5
- gcc: Prevzaté opravy a prepínače z Clear Linuxu
- glibc: Pridané opravy „evex“ a prevzaté opravy z Clear Linuxu
- wiki: Wiki získala mnoho nových prírastkov a prepracovaní
- chwd: Zjednodušené spracovanie zariadení
- chwd: Všetky profily sú teraz špecificky navrhnuté pre zariadenia PCI
- chwd: Pridaný prepínač `--autoconfigure` na automatickú správu inštalácie ovládačov
- Aktualizácie balíkov: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Opravy chýb:**

- Launch-Installer: Pridané opravy na synchronizáciu hardvérových hodín pred spustením inštalácie
- calamares: Pridaná oprava na odpojenie súborového systému po inštalácii
- kľúčenka (keyring): Vyčistenie kľúčenky a jej opätovné vytvorenie pred spustením inštalácie; to opravuje zriedkavé problémy s kľúčenkou
- sysctl: Výpisy jadra (core dumps) boli opäť povolené
- chwd: Odstránený `libva-nvidia-driver` z profilu PRIME, aby sa predišlo možným konfliktom a zlepšila kompatibilita so softvérom ako Spectacle
- cachyos-settings: Pridané dočasné riešenie pre pády GNOME Wayland
- cachyos-fish/zsh-config: Odstránené špecifické úpravy pre wayland

**Zoznam zmien pre Handheld edíciu:**

- Ally/Ally X: HHD bol nahradený nástrojom inputplumber, keďže hhd nepoužíva príslušný jadrový ovládač správne, čo vedie k problémom.
- Aktualizované balíky súvisiace s handheldmi

24.08
----

**Funkcie:**

- chwd: NVIDIA teraz používa modul open ako predvolený pre podporované karty
- Pracovné prostredie: Do možností inštalácie pridané pracovné prostredie Cosmic Desktop Environment
- NVIDIA: Najnovší ovládač 560 Beta je teraz predvolený; egl-wayland upravený na opravu pádov vo Firefoxe a ďalších aplikáciách
- zrkadlá: Spoločnosť CDN77 sponzorovala CachyOS službou Object Storage s celosvetovou vyrovnávacou pamäťou, čo výrazne zvyšuje rýchlosť pripojenia pre používateľov
- zrkadlá: CachyOS teraz poskytuje vlastné zrkadlo Arch Linuxu, aby sa predišlo problémom so synchronizáciou, pričom je počas inštalácie nastavené ako predvolené spolu so záložnými zrkadlami
- SecureBoot: Predstavený skript a návod vo Wiki na jednoduchú podporu Secure Boot
- cachy-chroot: Pridané automatické pripájanie cez fstab na zjednodušenie chrootovania
- cachy-chroot: Implementovaná podpora pre šifrovanie LUKS
- kernel-manager: Pridaná podpora nastavenia príznakov sched-ext v konfigurácii sched-ext
- kernel-manager: Predstavená možnosť zostavenia modulu nvidia-open
- kernel-manager: Pridaná možnosť zapamätať si naposledy použité voľby na stránke konfigurácie
- Aktualizácie balíkov: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Opravy chýb:**

- chwd: Vylepšená detekcia profilu PRIME na základe názvu zariadenia
- chwd: Odstránené dočasné riešenie RTD3 z dôvodu problémov na niektorých zostavách
- cachyos-rate-mirrors: Zakázané hodnotenie zrkadiel pri spustení na Live ISO
- cachy-chroot: Opravuje pád, keď partícia nemala platný typ súborového systému (fstype) alebo UUID (napr. Microsoft Recovery Partition)
- calamares: Refaktorovaná inicializácia kľúčenky
- kernel-manager: Opravená podpora zostavovania vlastného pkgbase s jadrami LTO a povolenými modulmi
- kernel-manager: Opravené oneskorenie výzvy na zadanie hesla
- ISO: Parameter radeon.modeset=1 nahradený za amdgpu.modeset=1 pre moderné GPU
- game-performance: Zabránené zlyhaniu, keď profil nie je dostupný

**Zoznam zmien pre Handheld edíciu:**

- podpora zariadení: Pridaná podpora pre Ally X, vďaka Lukovi Jonesovi
- libei: Implementovaná podpora pre libei, ktorá nahrádza libextest
- packagekit: Zablokovaná inštalácia packagekitu, aby sa predišlo problémom s aktualizáciami systému cez Discover
- hook: Pridaný pacman-hook, ktorý koliduje s natívne kompilovanými verziami Protonu, aby sa predišlo potenciálnym problémom
- Aktualizované balíky jupiter-fan-control, steamdeck-dsp a firmvér pre Steam Deck

24.07
----

**Funkcie:**

- Repozitár: Zavedený repozitár optimalizovaný pre Zen 4, ktorý sa bude používať pre procesory Zen4 a Zen5
- ISO: Pridaná automatická kontrola architektúry pre repozitár Zen4/Zen5
- chwd: Pridaná podpora GC pre GPU AMD, čo pomáha pri detekcii GPU s oficiálnou podporou ROCm
- chwd: Používanie libva-nvidia-driver na podporovaných kartách
- ksmctl: Predstavený nástroj na povolenie/zakázanie KSM: `ksmctl --enable`
- jadro: Pre jadro „linux-cachyos“ je teraz dostupný balík „linux-cachyos-dbg“, ktorý obsahuje neodstránený (unstripped) obraz vmlinux na účely ladenia
- jadro: amd cpb boost je teraz dostupný a démon power-profiles-daemon je upravený tak, že ak je nastavený profil „powersave“, zakáže boost na procesoroch AMD
- jadro: Pridaná oprava na šetrenie energie pre SoC AMD pri prehrávaní videa
- kernel-manager: Pridaná podpora správy plánovačov sched-ext a zobrazovania informácií prostredníctvom grafického rozhrania
- steam/proton: Teraz je k dispozícii skript „game-performance“, ktorý možno pridať do možností spustenia v Steame
- power-profiles: Na procesoroch s podporou AMD Pstate je najnižšia lineárna frekvencia teraz nastavená vyššie, čo môže zlepšiť latenciu a 1 % najnižšie hodnoty FPS
- kwin: Pridaný spätný port pre tearing, ktorý bol otestovaný. Na kartách NVIDIA funguje iba v natívnych aplikáciách Wayland
- netinstall: Cutefish bol odstránený spomedzi inštalovateľných pracovných prostredí
- Zrkadlá: Pridané rakúske a čínske zrkadlo; čínske zrkadlo hosťuje Univerzita TUNA. To by malo výrazne pomôcť používateľom z Číny
- Aktualizácie balíkov: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Opravy chýb:**

- ISO: Parameter copytoram nastavený na auto namiesto yes
- ISO: Opravený režim spánku v Live ISO pre notebooky
- Spúšťač inštalátora (Launch Installer): Nainštaluje najnovší archlinux-keyring pred spustením inštalácie, aby sa predišlo problémom pri sťahovaní balíka archlinux-keyring v prostredí chroot
- Hodnotenie zrkadiel (Mirrors Ranking): Počas inštalácie hodnotí iba zrkadlá Tier 1
- pacman.conf: Odstránený nepoužívaný repozitár pacmana
- cachy-chroot: Nezobrazuje podzväzky `.snapshot`
- Calamares: Nepoužíva modul „Preservefiles“, keďže používatelia s ním hlásili problémy.

**Zoznam zmien pre Handheld edíciu:**

- Pridaný konfiguračný súbor na použitie iného škálovania, `/home/$USER/.config/deckscale`
- Zvýšená spoľahlivosť prepínania do režimu GameMode
- Aktualizovaný firmvér Wi-Fi/Bluetooth pre Steam Deck
- Implementované automatické pripájanie (Auto Mount) pre GameMode
- Pridané špecifické úpravy pre gamescope-session týkajúce sa topológie CPU vo Wine, HDR a podsvietenia
- Opravený výber obnovovacej frekvencie
- Aktualizované balíky jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Funkcie:**

- chwd: Zavedená detekcia hardvéru handheldov
- chwd: Zavedená podpora pre MacBooky T2
- chwd: Pridaná detekcia sieťových ovládačov
- Inštalácia: Pridaná podpora pre MacBook T2
- ISO: Pridaný nástroj cachy-chroot. Ide o skript, ktorý používateľovi pomáha pripojiť sa do systému cez chroot.
- ISO: Prechod na hooky mikrokódu; vyžaduje to používanie najnovšieho vydania Ventoy (1.0.98)
- ISO: Povolený parameter copytoram; už ho netreba zakazovať, pretože už neposkytujeme offline inštaláciu
- súborový systém: BTRFS je teraz predvolene vybraný súborový systém
- netinstall: Používa ufw namiesto firewalld
- Calamares: Aktualizované snímky značky (Branding Slides)
- Prezentácia (Slides): Aktualizovaná podľa najnovších zmien
- Aktualizácie balíkov: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Opravy chýb:**

- Calamares: umount: Opätovné povolenie núdzového odpojenia (emergency)
- Qtile: Ovládanie multimédií teraz funguje správne
- NVIDIA: Povolené potrebné služby a možnosti pre fungujúci režim spánku na Waylande
- netinstall: Odstránený balík b43-fwcutter z inštalácie
- netinstall: Balík hyprland-git nahradený za hyprland
- netinstall: Odstránený linux-cachyos-lts z výberu, aby sa predišlo problémom s chýbajúcimi modulmi
- Calamares: Shellprocess: Hodnotenie zrkadiel presunuté pred inštaláciu kľúčenky

**Zoznam zmien z experimentálneho vydania pre Handheld:**

- Predvolená téma KDE Vapor (téma SteamOS)
- Predvolený súborový systém: BTRFS
- Predvolené jadro: linux-cachyos-deckify
- SDDM teraz používa Wayland
- Prepínač prostredia pre HHD na zníženie latencie
- Pridané parametre jadra na zlepšenie správania prepínania do herného režimu (Game Mode)
- Používateľské meno sa teraz dá upravovať
- Detekcia hardvéru konfiguruje a inštaluje potrebné balíky v závislosti od použitého zariadenia
- Klávesnica Maliit teraz používa tmavý režim
- Powerbuttond od Valve pre správny prechod do režimu spánku
- Do Steamu sa teraz dajú pridávať skratky
- Aktualizovaný balík scx-scheds na najnovší commit v gite, ktorý prináša najnovšie vylepšenia pre plánovač LAVD
- Pridané automatické pripájanie do cachyos-handheld
- CachyOS teraz dokáže vykonávať aktualizácie BIOS-u Steam Decku priamo na zariadení Steam Deck

24.05
----

**Funkcie:**

- Súborové systémy: Zavedený Bcachefs ako možnosť súborového systému
- pacstrap: Pridaná detekcia použitia Bcachefs a inštalácia príslušných nástrojov Bcachefs-tools
- CachyOS-AI-SDK: Zavedená nová možnosť inštalácie poskytujúca predpripravené nastavenie NVIDIA SDK ihneď po inštalácii
- CachyOS-Deckify: Poskytuje variant pre handheldy (experimentálny), viac podrobností nájdete [tu](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203)
- BTRFS: Automatický Snapper pre snímky, dá sa nainštalovať priamo z aplikácie CachyOS hello.
- ISO: Odstránený offline inštalátor
- Aktualizácie balíkov: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Opravy chýb:**

- settings.conf: Detekcia hardvéru presunutá pred netinstall
- pacstrap: Používa btrfs-assistant namiesto btrfs-assistant-git
- plymouth: odstránený hook plymouth pri kombinácii zfs + šifrovanie
- ISO: Pridané rôzne konfiguračné súbory pre KDE, aby sa predišlo uzamknutiu obrazovky počas inštalácie
- services-systemd: Správne povolenie časovača fstrim.timer
- umount: Zakázané núdzové odpojenie (emergency), aby sa predišlo problémom s inštaláciou ZFS
- shellprocess: Odstránenie zvyškov po offline inštalácii

24.04
----

**Funkcie:**

- Plymouth: Používanie nástroja plymouth na zobrazenie tématickej animácie pri štarte
- ISO: Návrat späť na X11 z dôvodu problémov pri nastavovaní rozloženia klávesnice v inštalátore calamares
- rEFInd: Nové rozloženie partícií (samostatné `/boot` a `/boot/efi`)
- netinstall: KDE: Predvolene sa inštaluje xwaylandvideobridge
- netinstall: Používa lightdm namiesto ly pre rôzne pracovné prostredia z dôvodu chyby v ly
- systemd-boot: Používa `@saved` pre systemd-boot, čo mu umožňuje zapamätať si naposledy vybranú položku zavádzania
- cachyos-keyring: Refaktorovaný balík cachyos-keyring a pridaná dôveryhodná kľúčenka cachyos-trusted
- ISO: Použitie kompresie ZSTD 19 pre obraz mkinitcpio na ISO
- Aktualizácie balíkov: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 a cachyos-settings 39-2

**Opravy chýb:**

- Automatické prihlásenie (Autologin): Opravená možnosť automatického prihlásenia pri použití spolu so sddm
- xz: Poskytnutý opravený balík xz
- libarchive: Zmiernenie následkov commitu od škodlivého aktéra v xz
- cachyos-settings: udev-rule: nenastavovať watermark_scale_factor na 125, keďže to výrazne zvyšuje využitie RAM
- calamares: pacman-keyring: Použitie jednoduchšej metódy na integráciu kľúčenky do inštalácie

24.03.1
----

**Funkcie:**

- netinstall: Odstránené nadbytočné jadrá z výberu netinstall, aby sa predišlo zmätku u používateľov. Ďalšie vlastné jadrá je možné nainštalovať cez Správcu jadra (Kernel Manager)
- Kernel Manager: Moduly NVIDIA sa pri detekcii nainštalujú automaticky, prepísané pre QT6, opravené vlastné názvy pri použití voľby LTO
- Package Installer: Prepísaný pre QT6, aktualizovaný pre pacman 6.1
- Aktualizácie balíkov: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Opravy chýb:**

- NVIDIA: upravený modul nvidia, aby prevzal správu nvidia.drm.modeset skôr a predišiel problémom na grafikách NVIDIA
- Refind: Neinštalovať jadro lts, aby sa predišlo problémom
- shellprocess: Úplné odstránenie priečinka liveusers

24.03
----

**Funkcie:**

- ISO: Plasma 6 je teraz súčasťou ISO a predvolene používa Wayland; GNOME ISO bolo zrušené, aby sa predišlo nejasnostiam ohľadom netinstall
- Calamares: Prepísaný pre QT6
- refind: Pridané f2fs a zfs ako možnosti vrátane šifrovania luks2
- zrkadlá: Teraz poskytujeme 2 globálne siete CDN. Jednu hosťuje Cloudflare R2 a druhú Digital Ocean
- mirrorlist: Sťahovanie online inštalátora priamo z CDN na zabezpečenie rýchlejšieho doručenia
- initcpiocfg: Použitie nového hooku microcode na skoré načítanie mikrokódu (ucode)
- zavádzač: Už nenačítava mikrokód prostredníctvom zavádzača
- Aktualizácie balíkov: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Opravy chýb:**

- pacstrap: Neinštalovať konfiguračné balíky, aby mal používateľ čistejší výber pri inštalácii
- shellprocess_pacman: Skopírovať do cieľového systému aj ohodnotené zoznamy zrkadiel cachyos-v4-mirrorlists

24.02
-----

**Funkcie:**

- refind: Zmena rozloženia z `/boot/efi` na `/boot` s cieľom poskytnúť viac možností súborových systémov a šifrovania
- Live-ISO: Prečistenie a synchronizácia Live-ISO
- Spúšťač inštalátora (Launch Installer): Pridané odporúčanie pre online inštaláciu
- konfigurácie shellu: Pridaná možnosť zakázať fastfetch pri spustení terminálu a pridaný alias „update“
- netinstall: Pridaný phonon-qt5-vlc do kde
- Aktualizácie balíkov: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Funkcie:**

- x86-64-v4: Automatická detekcia a povolenie repozitára pri inštalácii
- linux-cachyos: rámec plánovača sched-ext je teraz poskytovaný v predvolenom jadre
- xwayland: Predvolene poskytované opravy explicitnej synchronizácie
- Aktualizácie balíkov: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Opravy chýb:**

- chwd: Pre karty Nvidia Ada Lovelace sa moduly nvidia priamo zabalia do obrazu initramfs, aby sa predišlo problémom so skorým KMS (early kms)

23.12
-----

**Opravy chýb:**

- zfs: Pridaný parameter `compatibility=grub` do možností poolu na zabezpečenie kompatibility
- grub/xfs: Pridaná oprava do grub na zabezpečenie kompatibility s novým predvoleným nastavením xfs bigtime
- netinstall: xdg-desktop-portal-hyprland namiesto xdg-desktop-portal-hyprland-git

23.11
-----

**Funkcie:**

- nvidia: Používa modul nvidia namiesto dkms
- Calamares synchronizovaný s upstreamom
- Aktualizácie balíkov: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Opravy chýb:**

- nvidia-hook: Opätovne pridaný nvidia-hook, aby sa predišlo problémom pri inštalácii s novým modulom
- netinstall: Balíky boli premenované v dôsledku nedávnych zmien v balíkovaní KF5
- netinstall: Do inštalácie GNOME bol pridaný xdg-desktop-portal-gnome

23.09
-----

**Funkcie:**

- systemd-boot: Predvolene používa luks2
- netinstall: Poskytuje vlastnú kategóriu pre balíky CachyOS
- Calamares synchronizovaný s upstreamom
- Aktualizácie balíkov: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Opravy chýb:**

- shellprocess_sdboot: Nepoužívať „sudo“ pri generovaní záznamov zavádzača počas procesu inštalácie

23.08
-----

**Funkcie:**

- Calamares synchronizovaný s upstreamom
- Aktualizácie balíkov: linux-cachyos 6.4.10, nvidia-utils 535.98

**Opravy chýb:**

- Kľúčenka bola aktualizovaná a teraz funguje správne

23.07
-----

**Funkcie:**

- CachyOS-Settings teraz obsahuje nástroj „bpftune“, ktorý automaticky upravuje sieťové nastavenia v závislosti od používania
- CachyOS-Qtile-Settings: Zmeny zlepšujúce používateľský zážitok, lepšie ikony, ...
- Aktualizácie balíkov: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Opravy chýb:**

- rate-mirrors bol opravený
- chwd (Detekcia hardvéru) dostal viacero opráv
- opravená inštalácia neslobodných ovládačov pre hybridnú zostavu v inštalátore
- opravené zamŕzanie Calamares, ktoré sa vyskytovalo na niektorých zriedkavých konfiguráciách, najmä vo virtuálnych strojoch
- Prezentácia (Slides): Oprava preklepu na snímke 6

23.06
-----

**Opravy chýb:**

- Offline inštalácia: Oprava pre calamares

23.05
-----

**Funkcie:**

- Rozloženie migrácie CachyOS na Git sa teraz odráža aj v inštalácii
- chwd (mhwd) dostal viacero opráv
- Pacman: Pridali sme funkciu, ktorá umožňuje zobraziť našim používateľom správu pred aktualizáciou
- Calamares bol synchronizovaný s upstreamom
- Aktualizácie balíkov: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Opravy chýb:**

- netinstall: drobné opravy v dôsledku zmien balíkov
- Prezentácia (Slides): Snímka 6 bola aktualizovaná tak, aby odrážala najnovšie zmeny

23.04
-----

**Funkcie:**

- Predstavené pracovné prostredie Qtile
- Prepracovaný mhwd: Prepísané v jazyku Rust; zjednodušené profily pre GPU a sieťové karty; odstránené množstvo zastaraného kódu
- Aktualizácie balíkov: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Opravy chýb:**

- f2fs: Odstránená možnosť pripojenia „atgc“, keďže má problémy so systemd

23.03.1
-------

**Funkcie:**

- Aktualizácie balíkov: linux-cachyos 6.2.7, cachy-browser 111.0

**Opravy chýb:**

- Opravený Calamares so správcom obrazovky lightdm v dôsledku chybných upstreamových commitov v calamares
- Opravený problém s kľúčenkou pri offline inštalácii
- Refind: Používa linux-cachyos-lts ako predvolené jadro. Zdá sa, že aktuálne jadro 6.2 nefunguje dobre spolu s refindom

23.03
-----

**Nové funkcie:**

- Pridaný zavádzač refind
- Automatická inštalácia ovládača Nvidia pomocou MHWD
- Podpora šifrovania pre inštaláciu ZFS
- Pridaný Hyprland do sieťovej inštalácie (netinstallation)
- CachyOS-KDE-Settings teraz používa predvolenú tému KDE, no témy CachyOS sú stále predinštalované a dostupné na použitie
- Aktualizácie balíkov: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Kompletne prepracovaný a vylepšený modul zavádzača v calamares
- ISO je teraz podpísané GPG kľúčom
- MHWD bolo vylepšené a aktualizované
- Calamares synchronizovaný s upstreamom

**Opravy chýb:**

- Možnosť „nahradiť partíciu“ (replace partition) teraz ponúka výber súborového systému
- Opravený preklep na snímke 3
- nouveau bol opravený a teraz správne načítava modul
- MHWD: Použitie modesetting pre INTEL/ATI a Nouveau
- Odstránený hook zfs z mkinitcpio na live iso, ktorý spôsoboval problémy pri zavádzaní systému
- Aktualizáciu si môžete stiahnuť z našich zrkadiel na SourceForge.

23.02
-----

**Nové funkcie:**

- Bol pridaný repozitár cachyos-community-v3
- Pracovné prostredia Budgie, Mate a LXDE boli pridané do sieťovej inštalácie (Netinstallation)
- Služba Bluetooth.service je teraz predvolene povolená
- F2FS a grub sú opäť povolené a funkčné
- Aktualizácie balíkov: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Opravy chýb:**

- Rate-mirrors sa teraz pri zlyhaní hodnotenia vráti k neohodnoteným zrkadlám
- cachyos-rate-mirrors má dlhší časový limit fetch-mirrors-timeout
- Github bol pridaný do hosts, aby sa predišlo problémom so zoznamom zrkadiel
- Záznamy zavádzania pre BIOS boli aktualizované v syslinuxe

23.01
-----

**Funkcie:**

- Snímky Calamares (Slides) boli prepracované a aktualizované
- Pracovné prostredie UKUI bolo pridané do sieťovej inštalácie (Netinstallation)
- Pracovné prostredie Cinnamon bolo pridané do sieťovej inštalácie (Netinstallation)
- Cmdline: zswap je teraz predvolene zakázaný, pretože CachyOS predvolene poskytuje zram
- Calamares aktualizovaný na najnovší commit
- LLVM 15 je teraz dodávané ako predvolené
- Aktualizácie balíkov: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI inštalátor bol aktualizovaný

**Opravy chýb:**

- shellprocess remove-ucode sa teraz spúšťa aj pri offline inštalácii
- pamac bol odstránený z netinstallu
- Ohodnotené zrkadlá cachyos sa teraz správne kopírujú do cieľovej inštalácie
- power-profile-daemon sa už predvolene nepovoľuje

22.12
-----

**Funkcie:**

- Nové pozadie GRUB v zavádzači ISO
- memtest je teraz súčasťou systémov UEFI
- Do inštalácie KDE bola pridaná téma CachyOS-sddm-theme
- Pridaný automatický skript verzie pri vytváraní ISO
- Calamares aktualizovaný na najnovší commit
- Zrkadlá sú teraz hodnotené nástrojom „cachyos-rate-mirrors“, ktorý hodnotí naše zrkadlá aj zrkadlá Arch Linuxu
- Aktualizácie balíkov: jadro 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- Pracovné prostredie Kofuku bolo odstránené
- extra ISO s integrovaným llvm 15 na poskytnutie podpory pre novšie karty AMD

**Opravy chýb:**

- Opravený Calamares pri použití GNOME ako ISO
- zfshostid teraz funguje správne pre offline aj online inštaláciu
- Pridaný hook „kms“ do modulu initcpiocfg podľa predvolených nastavení Arch Linuxu
- A ďalšie opravy ISO

22.11
-----

**Funkcie:**

- Calamares a jeho konfigurácia sa dodávajú v jednom balíku
- Kompletné prečistenie balíkov v netinstalle
- Pridaný modul, ktorý automaticky odstraňuje nepotrebný mikrokód (ucode)
- Požadovaná pamäť RAM znížená na 2,5 GB
- Balíky potrebné pre btrfs sa teraz inštalujú iba pre btrfs
- Calamares aktualizovaný na najnovší commit
- Zavádzač ISO má teraz pozadie
- Bežné aktualizácie balíkov (mesa, jadro, ...)
- Náhrada systemd-network za networkmanager

**Opravy chýb:**

- Služba qemu-quest-agent.service bola odstránená z ISO
- copytoram bolo úplne zakázané, keďže narúša offline inštaláciu
- Aktualizovaný súbor mkinitcpio.conf
- A ďalšie opravy ISO

22.10
-----

**Funkcie:**

- Pacman teraz používa Architecture=auto pre inštaláciu x86-64-v3, keďže sme pridali opravu, vďaka ktorej pacman automaticky deteguje x86-64-v3
- Pacman teraz zobrazuje, z ktorého repozitára bol balík nainštalovaný
- Výber zavádzača automaticky deteguje prítomnosť EFI; ak nie je prítomné, predvolene vyberie grub
- Výber odkladacieho priestoru (swap) bol predvolene zakázaný, pretože zram sa generuje automaticky a dynamicky
- Calamares aktualizovaný na najnovší commit
- Minimálna požiadavka na RAM bola nastavená na 4 GB
- cachyos-grub-theme bol odstránený

**Opravy chýb:**

- Detekcia SSD a HDD pre fstab bola zakázaná, kým nebude k dispozícii oprava v upstreamovej verzii
- Opravený zdvojený podzväzok BTRFS
- Pridaný chýbajúci mikrokód do zavádzača grub na ISO
- Pridaný záložný režim zavádzania, ktorý nenastavuje žiadny modeset (nomodeset)
- A ďalšie opravy ISO

22.09
-----

**Funkcie:**

- Calamares je teraz na najnovšej vetve 3.3. Prináša opravy chýb a nové funkcie do calamares
- TUI inštalátor je teraz súčasťou GUI ISO, môžete ho spustiť príkazom „cachyos-installer“
- Calamares teraz automaticky zisťuje, či je cieľový súborový systém na SSD alebo HDD, a podľa toho upraví možnosti vo fstab
- Nvidia pre najnovšie GPU (počnúc sériou 9xx) má teraz vlastnú položku zavádzania, aby sa predišlo problémom s nouveau
- Aktualizované možnosti pripojenia pre fstab a zfs
- Firefox sa už nebude inštalovať ako predvolený prehliadač, keďže predvolene sa inštaluje cachy-browser

**Opravy chýb:**

- cachyos-gaming-meta bol odstránený z modulu netinstall, aby sa predišlo problémom počas procesu inštalácie
- Balíky v netinstalle boli aktualizované a dostali niekoľko opráv
- Opravená inštalácia OpenBox
- Bežné opravy prekladov

22.07
-----

**Funkcie:**

- Výber zavádzača: Používateľ si teraz pri online inštalácii môže vybrať medzi grub a systemd-boot
- Pri online inštalácii sa teraz vždy nainštaluje najnovší calamares, čo pomáha vykonávať opravy chýb „za chodu“
- Calamares teraz obsahuje modul mhwd, ktorý automaticky nainštaluje potrebné ovládače (slobodné ovládače)
- Calamares má pri inštalácii nové obrázkové snímky
- Aktualizované možnosti pripojenia pre fstab a zfs
- Podpora HiDPI

**Opravy chýb:**

- Opravená chyba s lokalizáciami (locales) v calamares
- F2FS bolo odstránené pre zavádzač grub, keďže momentálne nefunguje (chyba calamares), stále ho však možno použiť so systemd-boot
- Calamares teraz zobrazuje správny predvolený súborový systém
- Opravené Gnome ISO
- Do live ISO boli pridané chýbajúce balíky pre offline inštaláciu
- Opravené šifrovanie luks pre btrfs swap
- Bežné opravy prekladov

22.06
-----

Boli opravené nasledujúce známe chyby:

- Inštalácia zlyhala pri použití generického CPU
- KDE automaticky pripájalo partície ZFS, čo spôsobilo, že automatické prihlásenie do ISO prestalo fungovať

**Vylepšenia:**

- Firewall servera bol opravený; cloudflare blokoval používateľov ako „botov“, čo následne viedlo k chybe pri inštalácii
- Pridaná podpora tém pre Gnome, XFCE, OpenBox
- Aktualizovaná naša wiki

**_CachyOS - Kernel - Manager_**
S radosťou tiež oznamujeme náš CachyOS-Kernel-Manager.
Máte v ňom možnosť nainštalovať jadro z repozitára a taktiež si pomocou grafického rozhrania nakonfigurovať vlastné zostavenie jadra, vďaka čomu si ho veľmi jednoducho prispôsobíte presne podľa vašich potrieb.

Pre kompiláciu jadra si môžete vybrať nasledujúce možnosti:

- Plánovač (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA zakázané alebo povolené
- KBUILD CFLAGS (-O3 alebo -O2)
- Nastaviť performance governor ako predvolený
- Povoliť BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodic, full)
- zakázať I/O plánovač MQ-Deadline
- zakázať I/O plánovač Kyber
- Povoliť alebo zakázať MG-LRU
- Povoliť alebo zakázať DAMON
- Povoliť alebo zakázať Speculative page fault
- Povoliť alebo zakázať LRNG (Linux Random Number Generator)
- Použiť automatickú optimalizáciu jadra (automaticky deteguje architektúru vášho CPU)
- Použiť výber optimalizácie jadra (zobrazí sa zoznam rôznych CPU architektúr a zadaním čísla si môžete vybrať tú vašu)
- Zakázať ladenie (zmenší veľkosť jadra)
- Povoliť alebo zakázať nf cone
- Povoliť LTO (Full, Thin, No)

22.05
-----

CachyOS vznikol pred rokom. Po takmer roku vývoja s hrdosťou oznamujeme naše prvé stabilné vydanie grafického inštalátora (GUI Installer).
Strávili sme veľa času skúmaním správy repozitárov, vývoja jadra, infraštruktúry, témovania, ... a nakoniec sme to všetko spojili do grafického inštalátora CachyOS.
Všetky funkcie, na ktorých sme pracovali a ktoré sme implementovali do inštalátora, sa snažia používateľom ponúknuť plne prispôsobiteľný zážitok.

Najzaujímavejšími zmenami sú, že pre online inštaláciu teraz používame pacstrap, čo poskytuje úplne čisté nainštalované prostredie, a podporujeme plnú natívnu podporu súborového systému zfs.

Keďže Discord obmedzuje dĺžku správ, celé oznámenie nájdete tu:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Stiahnutie nájdete tu:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
