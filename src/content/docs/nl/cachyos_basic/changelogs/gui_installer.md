---
title: GUI-installatieprogramma
description: Changelogs van Calamares en de grafische live-ISO
sidebar:
  order: 1
ai_translated: true
---
26.06
----

**Functies:**

* **Pakketten:**
  * Python gebruikt nu uitgebreide PGO om de prestaties te verbeteren
  * Een [GCC-patch](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) toegevoegd voor het afstemmen van generieke x86-branch-misprediction, waardoor GCC beter rekening houdt met de kosten van verkeerd voorspelde branches op moderne Intel- en AMD-CPU's
  * Een regressie opgelost die in Phoronix-benchmarks werd gevonden wanneer OpenBLAS werd gebruikt op CPU's met veel cores
  * `proton-cachyos` hernoemd naar `proton-cachyos-native`
* **pacman:** [Netwerkisolatie voor scriptlets en hooks](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9) toegevoegd
* **Installatieprogramma:**
  * Bureaubladoptie CachyOS Hyprland Noctalia en een voorbeeldvideo toegevoegd
  * `paru` uit de installatie verwijderd; gebruikers wordt aangeraden als alternatief [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system) te gebruiken, via de GUI of de CLI
  * SDDM toegevoegd als displaymanager voor MangoWM
  * GNOME System Monitor vervangen door Resources
  * `realtime-privileges` toegevoegd aan de audiopakketgroep
  * Detectie van toetsenbordindeling en -variant in de live-sessie verbeterd
* **CachyOS-Welcome:**
  * Ondersteuning voor DNS over QUIC (DoQ) toegevoegd via `blocky`
  * Een aparte pagina voor probleemoplossing toegevoegd
  * Ondersteuning voor de terminal Ptyxis toegevoegd
  * Azerbeidzjaanse en Griekse vertalingen toegevoegd
  * Franse readme- en meedoen-pagina's toegevoegd
  * Italiaanse, Duitse, Franse, Japanse en Bulgaarse vertalingen bijgewerkt
* **chwd:**
  * Turkse vertaling toegevoegd
  * `cachyos-handheld` verwijderd uit de pakketlijsten voor handhelds
  * Lost conflicten tussen stuurprogramma's op op systemen met meerdere GPU's die incompatibele stuurprogrammatakken nodig hebben (bijv. verschillende NVIDIA-generaties door elkaar), door het best passende gemeenschappelijke stuurprogramma te installeren of terug te vallen op de primaire GPU
  * Het 32-bit Vulkan-stuurprogramma toegevoegd voor virtuele machines
* **cachyos-settings:** Time-outs van 15 seconden bij het starten en 10 seconden bij het afsluiten toegepast op gebruikersservices, waardoor vertragingen van 90 seconden bij het afsluiten worden voorkomen

**Fixes:**

* **Installatieprogramma:**
  * Volgorde van toetsenbordindelingen en afhandeling van de `locale1`-configuratie gerepareerd
  * Het kopiëren van de juiste pacman-configuratie naar het geïnstalleerde systeem gerepareerd
  * Achtergebleven mappen `/etc/calamares` na de installatie verwijderd
  * Het opruimen van Calamares verplaatst naar na alle installatiescripts
  * De overbodige Limine-stap na de installatie verwijderd
* **CachyOS-Welcome:**
  * Een crash voorkomen bij het selecteren van "Install Apps" zonder dat `cachyos-pi` is geïnstalleerd; de knop wordt nu verborgen als deze niet beschikbaar is
  * Een crash opgelost wanneer het opgeslagen instellingenbestand niet kon worden gelezen of geparsed; instellingen worden bij een fout nu teruggezet naar de standaardwaarden
  * Detectie van tweaks gecorrigeerd (inclusief `graphical-session.target.wants`) en het globaal uitschakelen van tweaks voor gebruikersservices via polkit
* **chwd:**
  * Leverancier-ID's van virtuele machines gecorrigeerd
  * Onnodige activering van de service `fprintd` verwijderd
  * De beveiliging bij het verwijderen van Mesa gerepareerd

26.04
----

**Functies:**

* **Installatieprogramma:**
  * Shelly heeft Octopi vervangen als grafische pakketbeheerder
  * Direct na de installatie wordt nu een schone snapshot gemaakt die permanent wordt bewaard, als basis-herstelpunt
  * GRUB `os-prober` is nu standaard ingeschakeld
  * MangoWM toegevoegd als bureaubladoptie met dotfiles
  * De UKUI-bureaubladomgeving geschrapt
  * AMD-GPU's gebruiken nu een ander Plymouth-thema, omdat het amdgpu-stuurprogramma het vorige thema niet betrouwbaar kan weergeven op laptops met een tweede monitor aangesloten
  * De pakketselectie van GNOME opgeschoond en gemoderniseerd
  * Optie toegevoegd om `MangoWM` met de `DMS`-shell te installeren
* **CachyOS-Welcome:**
  * Ondersteuning voor DNS-over-HTTPS (DoH) toegevoegd via `blocky`
  * Ondersteuning voor eigen DNS-servers en een automatische DHCP-indicator/reset toegevoegd
  * DNS-servers tonen nu metadata (regio, homepage, filtering) en ondersteunen afzonderlijke latentietests
  * Schakelaar voor VRAM-beheer `dmemcg-booster` toegevoegd (installeert op KDE daarnaast `plasma-foreground-booster`)
  * Volledige ondersteuning voor toetsenbordnavigatie toegevoegd voor toegankelijkheid
  * PNG-iconen voor sociale media vervangen door scherpe, HiDPI-bewuste SVG's
  * `wezterm` toegevoegd aan de terminalhelper
* **chwd:**
  * Native detectie van USB-apparaten (via libusb/sysfs) en detectie van het type behuizing toegevoegd
  * Ondersteuning toegevoegd voor sudo-integratie met vingerafdrukken (`fprint`)
  * Detectie van CPU-familie/-model toegevoegd ter ondersteuning van `intel-lpmd`
  * **Handhelds:** Exacte patronen toegevoegd voor de Xbox ROG Ally
  * **Netwerk:** Wi-Fi-profiel voor Marvell AVASTAR 88W8897 toegevoegd (Surface Pro 4)
  * NVIDIA-profielen opgesplitst voor laptops en desktopomgevingen
  * Profielen voor virtuele machines opgesplitst en bijgewerkt
* **cachyos-settings:** De standaard I/O-scheduler voor NVMe gewijzigd van `none` naar `kyber`

**Fixes:**

* **Installatieprogramma:**
  * De partitiemethode wordt nu in het debuglog weergegeven
  * Oude microcodepakketten worden nu verwijderd bij het hergebruiken van een bestaande bootpartitie
* **CachyOS-Welcome:**
  * Connectiviteitscontroles gerepareerd die onterecht true teruggaven wanneer ping mislukt
  * Ervoor gezorgd dat iconen voor externe links zichtbaar zijn in donkere thema's
  * Voorkomen dat meerdere exemplaren van de welkomstapp tegelijk worden gestart
  * `StartupWMClass` toegevoegd voor betere koppeling van vensters aan `.desktop`-bestanden
* **chwd:**
  * De `kms`-hook verwijderd uit `mkinitcpio.conf` op niet-draagbare desktops om conflicten met het NVIDIA-stuurprogramma op te lossen
  * Het zoeken naar geïnstalleerde kernels in NVIDIA-profielen nauwkeuriger gemaakt
  * Afgedwongen Xorg-sessie verwijderd uit de NVIDIA 470xx-profielen (lost compatibiliteit met `plasma-login-manager` op)
  * Verouderde `WaylandEnable=false` voor GDM verwijderd uit profielen voor virtuele machines
  * Fout-positieve detecties van handhelds opgelost (bijv. specifieke MSI-laptops die voor de MSI Claw werden aangezien)
* **cachyos-settings:**
  * `S01x`-energiebeheer geschrapt vanwege problemen met het NVIDIA 595-stuurprogramma
  * `AggressiveVblank` uitgeschakeld vanwege VR-gerelateerde problemen met het NVIDIA-stuurprogramma

26.03
----

**Functies:**

* **Installatieprogramma:**
  * Ondersteuning toegevoegd om GIF-/WebP-video's te tonen in de bureaubladselectie om de bureaubladomgevingen te laten zien. Dit is ingeschakeld voor Plasma, GNOME, Niri en COSMIC
  * Ondersteuning voor JPEG XL toegevoegd in de bureaubladselectie om afbeeldingen kleiner te maken
  * Cachy-Update is nu standaard ingeschakeld voor installaties met GNOME en KDE
  * Logica voor het installeren van microcode verbeterd: de hardware wordt nu gedetecteerd en de juiste microcode geïnstalleerd, in plaats van beide te installeren en daarna de overbodige te verwijderen
  * Foutmelding verbeterd wanneer de EFI-partitie te klein is
  * De lijst met bureaubladomgevingen gesorteerd van eenvoudige en toegankelijke opstellingen naar geavanceerdere, zoals WM's
* **CachyOS-Welcome:**
  * Een knop toegevoegd om "Winboat" eenvoudig te installeren en in te schakelen voor een eenvoudige Windows-Docker-VM
  * Ondersteuning voor de DNS-server FFMUC toegevoegd in de DNS-selectie
  * Oekraïense vertaling toegevoegd
* **chwd:** De grootte van de initramfs flink verkleind voor configuraties met een NVIDIA-dGPU
* **linux-cachyos:** In plaats van een `0001-cachyos-base-all.patch` te genereren, wordt nu voor elke release van onze gepatchte kernel een release gemaakt in een Linux-repository
* **cachyos-rate-mirrors:** De ervaring voor gebruikers in China en Rusland flink verbeterd met een goede controle voordat de mirrors worden beoordeeld
* **cachyos-settings:** Ondersteuning toegevoegd om het draadloze regulatieve domein automatisch in te stellen op basis van de tijdzone
* **website:** Het ontwerp van de website is herzien en verbeterd om modernere standaarden te volgen
* **GitHub:** Issue-sjablonen toegevoegd aan belangrijke GitHub-repo's om de kwaliteit van bugrapporten te verbeteren en gebruikers te begeleiden
* **Mirrors:** Nieuwe mirrors in Rusland (jura12, cachy-arch.ru), Zweden (Zyner) en Canada (All Things Linux)

**Fixes:**

* **Installatieprogramma:**
  * Ondersteuning voor bcachefs verwijderd uit de selectie van bestandssystemen, omdat bcachefs-dkms vereist is
  * Versleuteling gerepareerd wanneer LUKS2 wordt gebruikt voor specifieke apparaten
  * Het inschakelen van de displaymanager "ly" gerepareerd
* **cachyos-settings:** `cachyos-bugreport.sh` maakt IP-adres, gebruikersnaam, hostnaam en MAC-adres nu onleesbaar
* **chwd:**
  * Generieke handheldprofielen en verbeterde ondersteuning voor GPU's van handhelds
  * fwupd is nu ingeschakeld voor handhelds van Lenovo


**Changelog voor de Handheld Edition:**

* **gamescope-session:** gamescope-session-plus vervangen door gamescope-session-cachyos, een fork van de gamescope-session van Valve
  * Maakt firmware-updates mogelijk voor Steam Deck- en Lenovo Legion Go-apparaten
* **plasma-login-manager:** SDDM vervangen door plasma-login-manager als loginmanager
* **bootloaders:** Limine is nu standaard geselecteerd, met automatische snapshots. systemd-boot blijft selecteerbaar
* **Installatieprogramma:** Calamares voor handhelds samengevoegd met Calamares voor de desktopeditie
* **ISO:** De ISO gebruikt nu Wayland in plaats van X11

26.01
----

**Functies:**

* **Installatieprogramma:**
  * De selectie van de bootloader verplaatst naar Calamares; het beheer is nu samengevoegd in één pakket.
  * Detectie van de architectuur wordt nu uitgevoerd **vóór** de installatie van het basissysteem om de downloadgrootte te beperken.
  * GRUB gebruikt nu LUKS2 voor versleuteling.
  * --needed meegeven aan pacman om te voorkomen dat pakketten twee keer worden geïnstalleerd.
  * Compressie op één niveau gebruiken op NVMe voor Btrfs
  * Xorg-afhankelijkheden verwijderd bij Wayland-bureaubladomgevingen.
* **ISO:**
  * Overgeschakeld naar `plasma-login-manager` voor de ISO-omgeving.
  * De ISO bevat nu zowel de Stable- als de LTS-kernel. De Stable-kernel is standaard geselecteerd.
  * De ISO-sessie overgeschakeld van X11 naar Wayland.
* **Netinstall:**
  * Installaties met Plasma gebruiken nu `plasma-login-manager` in plaats van SDDM.
  * Niri gebruikt nu `noctalia-shell` en bijgewerkte dotfiles.
  * Het installatieproces van GNOME opgeschoond.
* **Dia's:** Typfouten in de dia's van Calamares verbeterd en een nieuwe dia toegevoegd die de wiki laat zien.
* **Mirrors:** De statuspagina van de mirrors (<https://packages.cachyos.org/mirrors>) toont nu de synchronisatiestatus van de CachyOS-mirrors.
* **cachyos-settings:** `EnableAggressiveVblank` ingeschakeld voor de NVIDIA-module. Dit vermindert de tijd die wordt besteed aan de top half van interrupts voor beeldscherminterrupts met lage latentie.
* **chwd:**
  * Installeert `nouveau-fw` om VA-API-ondersteuning in Nouveau mogelijk te maken voor NVIDIA-kaarten uit de Kepler-familie.
  * AI-SDK-ondersteuning toegevoegd voor diverse nieuwe AMD-GPU's.
  * HHD vervangen door `steamos-manager` en `inputplumber`.
* **Proton-CachyOS:**
  * Ondersteuning voor FSR4 MLFG (Machine Learning Frame Generation) toegevoegd; wordt automatisch ingeschakeld bij gebruik van `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Ondersteuning voor de module `d7vk` toegevoegd. Deze kan worden ingeschakeld via `PROTON_DXVK_DDRAW=1`
  * Patches voor haptische feedback van de DualSense geïmporteerd
  * `WINE_BLOCK_HOSTS` toegevoegd om te voorkomen dat Wine verbinding maakt met specifieke domeinen
  * `ENABLE_HDR_WSI=1` wordt automatisch ingeschakeld bij gebruik van `winewayland` op NVIDIA-dGPU's
  * Problemen met de toetsenbordindeling opgelost bij gebruik van `winewayland.drv`
  * Een al lang bestaande patch verwijderd die een slechtere 1% low FPS veroorzaakte
  * `protonfixes` gepatcht om de selectie van DLSS-presets en de omleiding van `libxess_dx11.dll` beter af te handelen
  * proton-cachyos-slr wordt nu standaard gebruikt in de “gaming-meta”. De native versie blijft ondersteund.


**Fixes:**

* **Limine:** De grootte van de bootpartitie verhoogd naar 4192MB vanwege de hoge eisen van `limine-snapper-sync`.
* **Installatieprogramma:**
  * Het installatieprogramma blokkeert nu het verdergaan als de EFI-partitie te klein is bij gebruik van de opties "alongside" of "replace partition".
  * Een probleem opgelost waarbij, als je een bureaubladomgeving selecteerde, een stap verderging, weer terugging en een andere bureaubladomgeving selecteerde, beide geselecteerd bleken te zijn.
* **chwd:** De omgevingsvariabele verwijderd die `libva-nvidia-driver` afdwong, omdat deze problemen veroorzaakte op systemen met twee GPU's.
* **cachyos-hello**: Een probleem opgelost waarbij cachy-update als uitgeschakeld werd weergegeven terwijl het ingeschakeld was.
* **Controller**: De invoer van diverse controllers gerepareerd door de invoerregels bij te werken naar de nieuwste versie.
* **Framework 16 (Zen5)**: Een probleem opgelost waarbij de sessie vastliep bij het typen in Calamares

25.11
----

**Functies:**

* **ISO/Installatieprogramma:** Orca en espeak-ng toegevoegd voor betere toegankelijkheid
* **initcpiocfg:** De systemd-hook ingeschakeld bij ondersteunde configuraties
* **Netinstall:** De Hyprland-dotfiles zijn verwijderd
* **pacstrap:** Installeert `bcachefs-dkms` als `bcachefs` als bestandssysteem is geselecteerd
* **Calamares:** Ondersteuning toegevoegd voor plasma-login-manager en cosmic-greeter
* **Cosmic:** Overgeschakeld van SDDM naar cosmic-greeter
* **Lettertypen:** Lettertypen voor Aziatische gebruikers verbeterd
* **chwd:**
  * Installeert `intel-media-sdk` en `vpl-gpu-rt` op ondersteunde GPU's
  * Nouveau NvBoost ingeschakeld voor Fermi-GPU's
  * Ondersteuning voor het verouderde NVIDIA-stuurprogramma 390xx geschrapt
  * Ondersteuning toegevoegd voor de Xbox ROG Ally/X
* **cachyos-hello:**
  * Interne pakketinstallatie verwijderd; opent in plaats daarvan het CachyOS-pakketinstallatieprogramma
  * CLI-interface toegevoegd voor de GUI-functionaliteit
  * Diverse fixes voor de controle van de ISO-versie
* **cachyos-settings:** zram-generator: Compressie verwijderd voor niet-comprimeerbare pagina's
* **Proton-CachyOS:**
  * `dxvk-gplasync` toegevoegd als alternatieve DXVK. Deze kan worden ingeschakeld via `PROTON_DXVK_GPLASYNC=1`
  * `DISABLE_LAYER_MESA_ANTI_LAG` toegevoegd bij gebruik van `PROTON_FSR4_UPGRADE`
  * Meerdere **Wayland-fixes** doorgevoerd (offset bij volledig scherm, dode toetsen, DPI-gedrag, aanpassingen aan de video-uitvoer) en verbeteringen aan `winewayland.drv`
  * Gedrag van **shadercache per game** en grotere shadercaches geïntroduceerd en afgesteld (vooral voor NVIDIA)
  * Upgrades voor de upscalers FSR3 en XeSS toegevoegd

**Fixes:**

* **Limine:**
  * Installatie van Limine zonder registratie van een item op kapotte UEFI gerepareerd
  * Gebruikt de systemd-variant van de hook `btrfs-overlayfs`
* **Calamares:** `attr2` verwijderd als optie in de mountinstellingen van XFS
* **chwd:** De USB-ethernetinterface van de T2-chip uitgeschakeld

25.08
----

**Functies:**

* **Diensten:** **packages.cachyos.org** toegevoegd, een zoekfunctie voor pakketten vergelijkbaar met de website van Arch Linux, met een optie om CachyOS-pakketten uit te sluiten.
* **Kernel:** Het installatieprogramma installeert na de installatie nu ook **linux-cachyos-lts** als tweede/back-upkernel. We raden nog steeds aan de Stable-kernel te gebruiken.
* **ISO:** De kernel van de live-ISO overgeschakeld van Stable naar LTS vanwege aanhoudende problemen met de Stable-kernel, wat de betrouwbaarheid van het opstarten verbetert.
* **Bureaublad:** **Niri** toegevoegd als bureaubladoptie, inclusief enkele vooraf ingestelde dotfiles.
* **NVIDIA:** **S0ix**-slaapstand ingeschakeld op ondersteunde hardware voor moderne stand-by met laag verbruik.
* **GRUB:** Opstartbare snapshots worden nu automatisch ingeschakeld en ingesteld wanneer het root-bestandssysteem **Btrfs** gebruikt.
* **Tweaks:** **Cachy-Update** geïntegreerd in de pagina Tweaks van de welkomstapp. Cachy-Update voegt een timer en een indicator in het systeemvak toe om gebruikers op updates te wijzen en ze met één klik te laten bijwerken.
* **Proton-CachyOS:**
    - Downloader toegevoegd voor DLSS-DLL's (versie **310.3.0**), vergelijkbaar met de FSR4-downloader. Gebruik de omgevingsvariabele `PROTON_DLSS_UPGRADE=1` om deze in te schakelen.
    - Omgevingsvariabele `PROTON_DLSS_INDICATOR=1` toegevoegd om de DLSS-hud in te schakelen.
    - Downloader toegevoegd voor XeSS-DLL's (versie **2.1.0**), vergelijkbaar met de DLSS-downloader. Gebruik de omgevingsvariabele `PROTON_XESS_UPGRADE=1` om deze in te schakelen.
    - `PROTON_FSR4_RDNA3_UPGRADE` toegevoegd voor RDNA3-GPU's. Doet hetzelfde als `PROTON_FSR4_UPGRADE`, maar stelt ook enkele andere benodigde variabelen in.
    - Completere implementaties toegevoegd van Nvidia-bibliotheken die in Proton ontbreken. Dit zou moeten helpen bij het inschakelen van opties zoals PhysX in games waarin ze eerder waren uitgeschakeld. Je kunt ze ook afzonderlijk inschakelen met `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` en `PROTON_NVIDIA_NVOPTIX`.
    - Shadercache per game toegevoegd, standaard ingeschakeld; kan worden uitgeschakeld met `PROTON_LOCAL_SHADER_CACHE=0`. Shaders worden per game gecachet onder `<steamlibrary>/shadercache/<appid>`, vergelijkbaar met wanneer het vooraf cachen van shaders is ingeschakeld. Je krijgt haperingen terwijl de shadercache voor elke game opnieuw wordt opgebouwd, maar de gecachete shaders worden niet meer verwijderd door een beperkte cachegrootte.
    - [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) toegevoegd als optionele vervanging voor DXVK voor oudere GPU's die Vulkan 1.3 niet goed ondersteunen. Het gebruikt de `async`-tak, dus het MAG NIET worden gebruikt met games die anti-cheat gebruiken of met multiplayergames in het algemeen. Je bent gewaarschuwd. Gebruik `PROTON_DXVK_SAREK=1` om het in te schakelen.
    - `PROTON_FSR3_UPGRADE` toegevoegd om FSR 3.1-DLL's bij te werken naar nieuwere versies.

**Fixes:**

* **Limine:**
    - De fout `limine bios-install /dev/sdaX` opgelost bij het selecteren van het mountpoint **/boot** als opstartlocatie op MBR-systemen.
    - Niet-geïnitialiseerde waarde van het pad `bootLoader` gerepareerd, die tot mislukte installaties leidde op MBR-systemen wanneer de locatie van de bootloader niet expliciet was geselecteerd.
    - Een waarschuwing toegevoegd over het gebruik van de vlag **bios-grub** op de bootpartitie, die de fout “Stage 3 file not found” kan veroorzaken.
    - Kant-en-klare dual boot met Windows gerepareerd voor BIOS-installaties.
    - Btrfs-snapshots die niet opstartten bij gebruik van **GNOME (GDM)** gerepareerd.
* **Launch Installer:** Fallback-IP's toegevoegd voor de onlinecontrole als het pingen van **cachyos.org** mislukt.

25.07
----

**Functies:**

- **Shell**: De shell van de gebruiker kan nu tijdens de installatie worden gekozen uit fish, zsh en bash. Fish blijft standaard ingeschakeld.
- **chwd**: plasma-x11 installeren voor verouderde NVIDIA-stuurprogramma's
- **Netinstall**: fwupd toegevoegd aan KDE Plasma en Gnome
- **mesa-git**: Ondersteuning voor AMD Anti Lag toegevoegd
- **firefox**: Een alternatieve firefox geïntroduceerd, genaamd "firefox-pure", met verbeteringen via het userjs-profiel. Daarnaast is "cachyos-firefox-settings" toegevoegd, dat bovenop firefox kan worden geïnstalleerd.
- **Proton-CachyOS**:
  - Upstream-commits van wine-wayland geïmporteerd
  - Omgevingsvariabele "PROTON_FSR4_UPGRADE" toegevoegd, die automatisch de nieuwste FSR4-DLL downloadt en vervangt voor een automatische upgrade in games die FSR 3.1 ondersteunen
  - Veel Wayland-gerelateerde patches toegevoegd uit upstream Wine die na Wine 10.0 zijn uitgebracht.
  - Patches toegevoegd voor een betere integratie met anti-cheat. Met dank aan NelloKudo
  - Patches toegevoegd voor AMD's Anti Lag 2 voor vkd3d-proton en wine
  - umu-protonfixes bijgewerkt naar de nieuwste commit

**Fixes:**

- **Keyring**: De afhandeling van de installatie van de keyring verbeterd om problemen te voorkomen en meerdere nieuwe pogingen te doen.
- **systemd-oomd**: systemd-oomd uitgeschakeld, omdat het problemen had in combinatie met le9 en applicaties veel te vroeg afsloot

**Changelog voor de Handheld Edition:**

- **handheld-settings**: Diverse tweaks van SteamOS geïmporteerd in de Handheld Edition
- **pipewire**: Minimale quantum ingesteld op 256
- **SteamDeck-OLED**: galileo-mura installeren voor de Steam Deck OLED
- **Lenovo Legion Go S**: Ondersteuning toegevoegd voor de Lenovo Legion Go S

25.05
----

**Functies:**

- **ISO**: Automatische detectie toegevoegd tijdens het opstarten van de ISO om de NVIDIA-GPU van het systeem te herkennen en de juiste module te laden (bijv. nvidia-open, nvidia), wat zorgt voor betere ondersteuning van de 10xx-serie en ouder.
- **Plymouth**: Een nieuwe Plymouth-animatie toegevoegd.
  - Met dank aan Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) voor het werk hieraan!
- **Browser**: Cachy-Browser is uitgefaseerd. We leveren nu Firefox als standaard vooraf geïnstalleerde browser. Een handleiding om profielen over te zetten naar Firefox (en de forks daarvan) vind je hier: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: kcalc, filelight, plymouth-kcm en kio-admin toegevoegd aan de KDE-installatie.
- **mkinitcpio**: De fallback-initramfs standaard uitgeschakeld. Dit bespaart veel ruimte.
- **Mirrors**: Een nieuwe mirror van 10 Gbps toegevoegd in Bangladesh. Met dank aan Limda voor het hosten!
- **Proton**:
  - Bijna alle patches van **Proton CachyOS 9.0** gerebased.
  - Het Wayland-stuurprogramma ingeschakeld voor builds met Steam Linux Runtime. Inschakelen met `PROTON_ENABLE_WAYLAND=1`. Met dank aan [GloriousEggroll](https://github.com/GloriousEggroll) om dit mogelijk te maken.
  - Veel Wayland-gerelateerde patches toegevoegd uit upstream Wine die na Wine 10.0 zijn uitgebracht.
  - Diverse problemen met het Wayland-stuurprogramma en Vulkan-games opgelost. Met dank aan [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) voor al het harde werk.
  - Een stub-implementatie voor `amdxc64.dll` toegevoegd om FSR4 mogelijk te maken. Gebruik `FSR4_UPGRADE=1` om FSR3.1-games te upgraden naar FSR4. Nogmaals met dank aan [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instructies: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - DualSense-gerelateerde patches toegevoegd voor een completere detectie van audioapparaten voor bedrade, op geluid gebaseerde haptiek. Sommige games die op dat specifieke gedrag vertrouwden, zouden die functionaliteit nu moeten hebben. Met dank aan [ClearlyClaire](https://github.com/ClearlyClaire) voor de originele patches en aan [Exotic0015](https://github.com/Exotic0015) die er sinds **Proton CachyOS 9.0** naar heeft gekeken. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - De patch voor Dragon Age Inquisition verwijderd, omdat deze niet werkte. Gebruik voor die game voorlopig **Proton CachyOS 9.0**.
- **GRUB**: Een nieuw GRUB-thema toegevoegd. Met dank aan [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Fixes:**

- **Mirrors**: Een probleem opgelost waarbij gebruikers uit Rusland niet meer konden installeren. Dit is verholpen door CDN77, dat Rusland was gaan blokkeren, niet meer te gebruiken.
- **kde-settings**: Het Discover-icoon in de taakbalk uitgeschakeld.
- **ddcutil**: De pre-release van ddcutil 2.2.1 doorgevoerd om een probleem op te lossen waarbij AMD-GPU's vastliepen bij het kijken van YouTube-video's.

**Changelog voor de Handheld Edition:**

- **os-branch**: Game Mode geeft nu correct aan dat CachyOS Linux wordt gebruikt.
- **audio**: Convolver-profielen bijgewerkt.
- **steamos-manager**: Dit wordt gebruikt voor het beheer van de GPU-klok en TDP, BIOS-/dock-updates, onderhoud van opslagapparaten, het formatteren van externe opslag en de laadlimiet van de batterij voor de Steam Deck.
- **steamos-powerbuttond**: Dit onderdeel vervangt de standaard powerbuttond voor een betere slaapstandervaring.
- **jupiter-hw-support**: Bijgewerkt naar 20250501.

25.04
----

**Functies:**

- **occt**: OCCT toegevoegd aan de ISO om een live-omgeving voor stresstests te hebben
  - Met dank aan Marek voor dit idee!

**Fixes:**

- **kernel**: Lost een crash van een module op Asus-laptops op
- **limine**: Limine heeft nu mkinitcpio-limine-hook geïnstalleerd en maakt automatisch items voor de bootloader aan

**Changelog voor de Handheld Edition:**

- **audio**: Audioprofielen toegevoegd voor de ROG Ally X en Legion Go
- **gamescope**: gamescope-plus vervangen door upstream gamescope

25.03
----

**Functies**:

- **Bootloader**: Ondersteuning toegevoegd voor de Limine-bootloader
- **Bootloader**: Ondersteuning toegevoegd voor automatische snapshots voor de Limine-bootloader
- **Samba**: Pakket "cachyos-samba-settings" toegevoegd om eenvoudig een Samba-mount in te stellen
- **NVIDIA**: GSP-firmware opnieuw ingeschakeld voor de closed-source NVIDIA-module
- **Kernel**: Ondersteuning toegevoegd voor het Asus Armoury-stuurprogramma
- **Secure Boot**: Script "sbctl-batch-sign" verbeterd zodat alleen de gewenste bestanden worden ondertekend
- **udev**: Het gebruik van ntfs3 als standaardstuurprogramma voor NTFS-partities teruggedraaid
  - Info: Het gebruik van het NTFS3-kernelstuurprogramma als standaard leidde bij sommige gebruikers tot problemen. Daarom hebben we het weer teruggedraaid.
- **wine**: Wine en Wine-Staging gebruiken nu standaard WoW64 en NTSync
- **scx-manager**: De sched-ext-GUI-beheerder uit de Kernel Manager gehaald en een eigen applicatie gemaakt
- **Hardwareondersteuning**: Ondersteuning toegevoegd voor RDNA4, RTX 5070 Ti en 5070.
- **Instellingen**: Ondersteuning voor DLSS Swapper toegevoegd - dit is een script dat automatisch de nieuwste DLSS-versie en -preset bijwerkt en gebruikt
- **Pakketupdates**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Fixes**:

- **initcpiocfg**: Het toevoegen van de module "crc32c-intel" aan mkinitcpio verwijderd - deze is verouderd en wordt nu standaard vervangen door de module "crc32c"
- **chwd**: Offloading van brcmfmac uitgeschakeld op T2 MacBooks
- **chwd**: Het NVIDIA 390.xx-stuurprogramma niet installeren op laptops

25.02
----

**Functies**:

- **Kernel**:
  - Propeller-optimalisatie wordt nu toegepast op de standaardkernel **linux-cachyos** voor alle beschikbare architecturen.
    - **Let op**: In combinatie met AutoFDO kan dit, afhankelijk van de workload, de prestaties met ongeveer 10% verbeteren.
- **NVIDIA**: Ondersteuning toegevoegd voor de Blackwell-architectuur.
- **ISO**: De module nvidia-open wordt als standaard gebruikt om Blackwell te ondersteunen. Gebruikers met GPU's ouder dan Turing moeten de eerste of de fallback-opstartoptie gebruiken.
- **Instellingen**: Tikken-om-te-klikken standaard ingeschakeld voor X11-sessies.
- **udev**: ntfs3 gebruiken als standaardstuurprogramma voor NTFS-partities.
- **game-performance**: De schermbeveiliging uitgeschakeld tijdens het spelen van games.
- **kernel-manager (sched-ext)**: Ondersteuning toegevoegd voor de servermodus.
- **kernel**: Fixes toegevoegd voor de functie AMD preferred core.
- **chwd**: De workaround voor RTD3 opnieuw toegevoegd.
- **Pakketupdates**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Fixes**:

- **chwd**: Een probleem opgelost waarbij hybride laptops met Intel- en NVIDIA-hardware hun GPU niet konden gebruiken in DaVinci Resolve.
- **glibc**: Een fix toegevoegd voor CVE-2025-0395.
- **kernel-manager**: Probeert de voorgebouwde NVIDIA-module te installeren, als die beschikbaar is voor de standaard Arch-kernel.
- **kernel-manager**: Een extra controle toegevoegd om te voorkomen dat de waarde wordt overschreven als een module niet beschikbaar is.

**Changelog voor de Handheld Edition:**

- **hooks**: Het gebruik van native gecompileerde Proton weer toegestaan.
- **misc**: Diverse updates en fixes.

24.12
----

**Functies**:

- Kernel:
  - AutoFDO wordt nu toegepast op de standaardkernel `linux-cachyos` voor alle beschikbare architecturen
    - **Let op**: De prestatieverbeteringen zijn voorlopig minimaal vanwege de huidige beperkingen. Het samenvoegen van profielen vereist LLVM 19, en Propeller-optimalisatie is daarvan afhankelijk. We verwachten dat LLVM 19 en beter geoptimaliseerde profielen tegen het einde van het jaar beschikbaar zijn, nadat Arch Linux LLVM 19 heeft overgenomen
- chwd: Rusticl wordt nu correct geconfigureerd
- chwd: verbeterde foutlogging bij het aanroepen van hooks
- chwd: selectie van VAAPI-stuurprogramma's gerepareerd
- cachyos-settings: Een script toegevoegd om het uitvoeren van applicaties via Zink te vergemakkelijken
- Sysctl-configuratie: Diverse instellingen herzien en geoptimaliseerd
- Kernel Manager: Ondersteuning toegevoegd voor `scx_loader`, waarmee native van scheduler kan worden gewisseld
- Installatieprogramma: De Bluetooth-service is nu standaard ingeschakeld
- Netinstall:
  - `wireless-regdb` toegevoegd aan de geïnstalleerde pakketten
    - Dit configureert de verbinding zodat de juiste kanalen worden gebruikt en ontgrendelt extra kanalen, wat de internetsnelheid mogelijk verbetert
    - **Let op**: Standaard is een generieke regio ingesteld; voor optimale prestaties wordt aangeraden deze aan te passen aan jouw regio
- **Pakketupdates**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Bugfixes**

- Installatieprogramma: Installatielogs openen geen debugterminalvensters meer
- Partitiebeheer:
  - Juiste `umask`-instellingen zorgen ervoor dat `/boot` niet toegankelijk is zonder voldoende rechten
- Launch Installer: Controles op internetverbinding zijn gerepareerd

**Changelog Handheld Edition:**

- Handheld-gerelateerde pakketten bijgewerkt
- Probleem met de afhandeling van het energieprofiel opgelost
- Ondersteuning voor WiFi 6 toegevoegd

24.11
----

**Functies:**

- thp-shrinker: De waarde van max_ptes_none op 80% gezet voor met nullen gevulde pagina's. Dit vermindert het geheugengebruik wanneer THP always wordt gebruikt, met behoud van dezelfde prestaties
- NVIDIA: De GSP-firmware wordt nu automatisch uitgeschakeld als gebruikers zelf overschakelen naar het gesloten stuurprogramma
- chwd: NVIDIA: de services van nvidia-powerd worden ingeschakeld voor laptops, om de hoogst beschikbare TDP te bereiken
- proton-cachyos: DLSS Frame Generation werkt nu. Dit zal naar verwachting in de toekomst ook in upstream proton werken
- kernel: AMD Cache Optimizer wordt nu toegepast. Gebruikers met CPU's met twee x3d-CCD's kunnen nu wisselen tussen voorkeur voor frequentie- of cachecores
- kernel: amd-pstate: Prestatiefixes van amd-pstate voor Strix Point gebackport
- kernel: Upstream-fixes toegevoegd voor de TDP-problemen op AMD RDNA2- en RDNA3-GPU's
- kernel: Timingfixes toegevoegd voor beeldschermen met een configuratie van 5120x1440x240
- kernel: Experimentele, met AutoFDO geoptimaliseerde kernel in de repository onder "linux-cachyos-autofdo"
- ISO: Controle toegevoegd of de gebruiker de Handheld Edition gebruikt, met een waarschuwing als de installatie op een niet-ondersteund apparaat wordt gestart
- ISO: Controle toegevoegd of de gebruiker de nieuwste ISO gebruikt, met een waarschuwing als dat niet zo is

**Bugfixes:**

- refind: partitioneren: gewijzigd van een indeling met 3 partities naar 2 partities
- netinstall: kdeplasma-addons toegevoegd aan de Plasma-installatie
- calamares: Een probleem opgelost bij het partitioneren met een swappartitie

**Changelog Handheld Edition:**

- De ondersteuning voor de Rog Ally X zou verbeterd moeten zijn

24.10
----

**Functies:**

- Pakketupdates: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Bugfixes:**

- sddm: Nieuwere sddm binnengehaald om het inloggen op Wayland-sessies te repareren
- ISO: xf86-video-amdgpu toegevoegd om het laden van de grafische sessie op sommige opstellingen te repareren
- chwd: Het opnieuw installeren van profielen gerepareerd

24.09
----

**Functies:**

- Pakketten: Een groot aantal pakketten geoptimaliseerd met PGO, zoals LLVM, Clang, svt-av1 en nodejs. Dit leverde bijvoorbeeld een 10% snellere Clang-compiler op
- Repository: De repository wordt nu vaker gesynchroniseerd en bijgewerkt, wat nog minder vertraging betekent. Het synchronisatie-interval is verlaagd van elke 3 uur naar elk uur.
- Repository: Vanaf 27.09.2024 schakelen pakketten die met -fpic zijn gecompileerd automatisch -fno-semantic-interposition in. Dit kan voor veel pakketten een prestatieverbetering opleveren.
- zlib-ng: Wordt nu gebruikt als vervanging voor zlib
- sddm: Bij de KDE-installatie gebruikt sddm nu standaard Wayland als compositor. # Provide Migration changes in release post
- cachyos-settings: NetworkManager gebruikt nu systemd-resolved als backend, wat helpt bij het cachen van DNS
- cachyos-settings: time.google.com gebruiken als tijdsynchronisatieserver om problemen met timesync op sommige opstellingen te voorkomen
- gcc: Fixes toegevoegd voor het afstemmen op znver5
- gcc: Geselecteerde patches en flags uit Clear Linux overgenomen
- glibc: "evex"-patches en geselecteerde patches uit Clear Linux toegevoegd
- wiki: De wiki heeft veel nieuwe toevoegingen en herzieningen gekregen
- chwd: Afhandeling van apparaten vereenvoudigd
- chwd: Alle profielen zijn nu specifiek ontworpen voor PCI-apparaten
- chwd: --autoconfigure toegevoegd om de installatie van stuurprogramma's automatisch af te handelen
- Pakketupdates: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Bugfixes:**

- Launch-Installer: Fixes toegevoegd om de hardwareklok te synchroniseren voordat de installatie start
- calamares: Fix toegevoegd voor het unmounten van het bestandssysteem na de installatie
- keyring: De keyring opruimen en opnieuw aanmaken voordat de installatie start; dit lost zeldzame problemen met de keyring op
- sysctl: Core dumps zijn weer ingeschakeld
- chwd: `libva-nvidia-driver` verwijderd uit het PRIME-profiel om mogelijke conflicten te voorkomen en de compatibiliteit met software zoals Spectacle te verbeteren
- cachyos-settings: Workaround toegevoegd voor crashes van GNOME onder Wayland
- cachyos-fish/zsh-config: Wayland-specifieke eigenaardigheden geschrapt

**Changelog voor de Handheld Edition:**

- Ally/Ally X: HHD is vervangen door inputplumber, omdat hhd het kernelstuurprogramma niet correct gebruikt, wat tot problemen leidt.
- Handheld-gerelateerde pakketten bijgewerkt

24.08
----

**Functies:**

- chwd: NVIDIA gebruikt nu standaard de open module voor ondersteunde kaarten
- Bureaublad: De bureaubladomgeving Cosmic toegevoegd aan de installatieopties
- NVIDIA: Het nieuwste 560 Beta-stuurprogramma is nu de standaard; egl-wayland gepatcht om crashes in Firefox en andere applicaties te verhelpen
- mirrors: CDN77 heeft CachyOS gesponsord met Object Storage met een wereldwijde cache, wat de verbindingssnelheden voor gebruikers aanzienlijk verbetert
- mirrors: CachyOS levert nu een eigen Arch Linux-mirror om synchronisatieproblemen te voorkomen; deze is tijdens de installatie standaard ingesteld, samen met fallback-mirrors
- SecureBoot: Script en tutorial in de wiki geïntroduceerd voor eenvoudige ondersteuning van Secure Boot
- cachy-chroot: Automatisch mounten via fstab toegevoegd om chrooten te vereenvoudigen
- cachy-chroot: Ondersteuning voor LUKS-versleuteling geïmplementeerd
- kernel-manager: Ondersteuning toegevoegd voor het instellen van sched-ext-flags in de sched-ext-configuratie
- kernel-manager: Optie geïntroduceerd om nvidia-open te bouwen
- kernel-manager: Optie toegevoegd om de laatst gebruikte opties op de configuratiepagina te onthouden
- Pakketupdates: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Bugfixes:**

- chwd: Detectie van het PRIME-profiel verbeterd op basis van de apparaatnaam
- chwd: Workaround voor RTD3 verwijderd vanwege problemen op sommige opstellingen
- cachyos-rate-mirrors: Rangschikken van mirrors uitgeschakeld bij gebruik van de live-ISO
- cachy-chroot: Lost een crash op wanneer een partitie geen geldig fstype of uuid had (bijv. de Microsoft-herstelpartitie)
- calamares: Initialisatie van de keyring gerefactord
- kernel-manager: Ondersteuning gerepareerd voor het bouwen van een eigen pkgbase met LTO-kernels en modules ingeschakeld
- kernel-manager: Vertraging bij de wachtwoordprompt gerepareerd
- ISO: radeon.modeset=1 vervangen door amdgpu.modeset=1 voor moderne GPU's
- game-performance: Voorkomen dat het mislukt wanneer het profiel niet beschikbaar is

**Changelog voor de Handheld Edition:**

- apparaatondersteuning: Ondersteuning toegevoegd voor de Ally X, met dank aan Luke Jones
- libei: Ondersteuning voor libei geïmplementeerd, ter vervanging van libextest
- packagekit: Installatie van packagekit geblokkeerd om problemen met systeemupdates via Discover te voorkomen
- hook: Een pacman-hook toegevoegd die conflicteert met native gecompileerde Proton-versies, om mogelijke problemen te voorkomen
- jupiter-fan-control, steamdeck-dsp en de firmware van de Steam Deck bijgewerkt

24.07
----

**Functies:**

- Repository: Een voor Zen 4 geoptimaliseerde repository geïntroduceerd; deze wordt gebruikt voor Zen4- en Zen5-CPU's
- ISO: Automatische architectuurcontrole toegevoegd voor de Zen4/Zen5-repository
- chwd: GC-ondersteuning toegevoegd voor AMD-GPU's; dit helpt bij het detecteren van GPU's die officieel door ROCm worden ondersteund
- chwd: libva-nvidia-driver gebruiken op ondersteunde kaarten
- ksmctl: Hulpmiddel geïntroduceerd om KSM in/uit te schakelen: ksmctl --enable
- kernel: Voor de kernel "linux-cachyos" is nu een pakket "linux-cachyos-dbg" beschikbaar, met een niet-gestripte vmlinux voor debugdoeleinden
- kernel: amd cpb boost is nu beschikbaar en power-profiles-daemon is gepatcht; als het profiel "powersave" is ingesteld, wordt de boost op AMD-CPU's uitgeschakeld
- kernel: Energiebesparende patch toegevoegd voor AMD-SoC's bij het afspelen van video
- kernel-manager: Ondersteuning toegevoegd voor het beheren van sched-ext-schedulers en het opvragen van informatie via de GUI
- steam/proton: Er is nu een script "game-performance" dat aan de startopties van Steam kan worden toegevoegd
- power-profiles: Op CPU's die AMD Pstate ondersteunen, wordt de laagste lineaire frequentie nu hoger ingesteld; dit kan de latentie en 1% lows verbeteren
- kwin: Backport voor tearing toegevoegd; dit is getest. Op NVIDIA werkt het alleen in native Wayland-applicaties
- netinstall: Cutefish is geschrapt als installeerbare bureaubladomgeving
- Mirrors: Mirrors in Oostenrijk en China toegevoegd; de mirror in China wordt gehost door de TUNA-universiteit. Dit zou veel gebruikers uit China moeten helpen
- Pakketupdates: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Bugfixes:**

- ISO: copytoram ingesteld op auto in plaats van yes
- ISO: Slaapstand op de live-ISO voor laptops gerepareerd
- Launch Installer: De nieuwste archlinux-keyring installeren voordat de installatie start, om problemen te voorkomen bij het ophalen van archlinux-keyring in de chroot
- Rangschikken van mirrors: Alleen Tier 1-mirrors rangschikken tijdens de installatie
- pacman.conf: Ongebruikte pacman-repository verwijderd
- cachy-chroot: .snapshot-subvolumes niet tonen
- Calamares: De module "Preservefiles" niet gebruiken, omdat gebruikers er problemen mee melden.

**Changelog voor de Handheld Edition:**

- Configuratiebestand toegevoegd om een andere schaling toe te passen, '/home/$USER/.config/deckscale
- Wisselen van Game Mode robuuster gemaakt
- Wifi-/Bluetooth-firmware voor de Steam Deck bijgewerkt
- Automatisch mounten voor Game Mode geïmplementeerd
- gamescope-session-quirks toegevoegd voor Wine CPU Topology, HDR en Backlight
- Selectie van de verversingssnelheid gerepareerd
- jupiter-hw-support, steamdeck-dsp, jupiter-fan-control en gamescope-session-git bijgewerkt

24.06
----

**Functies:**

- chwd: Detectie van handheldhardware geïntroduceerd
- chwd: Ondersteuning voor T2 MacBooks geïntroduceerd
- chwd: Detectie van netwerkstuurprogramma's toegevoegd
- Installatie: Ondersteuning voor MacBook T2 toegevoegd
- ISO: cachy-chroot toegevoegd. Dit is een script dat de gebruiker helpt een chroot naar het systeem uit te voeren.
- ISO: Overgeschakeld naar microcode-hooks; hiervoor is de nieuwste release van Ventoy (1.0.98) nodig
- ISO: copytoram ingeschakeld; dit hoeft niet meer uitgeschakeld te worden, omdat we de offline installatie niet meer aanbieden
- bestandssysteem: BTRFS is nu het standaard geselecteerde bestandssysteem
- netinstall: ufw gebruiken in plaats van firewalld
- Calamares: Branding-dia's bijgewerkt
- Dia's: Bijgewerkt voor de nieuwste wijzigingen
- Pakketupdates: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Bugfixes:**

- Calamares: umount: Emergency weer ingeschakeld
- Qtile: Multimediabediening werkt nu correct
- NVIDIA: Vereiste services en opties ingeschakeld voor een werkende slaapstand op Wayland
- netinstall: b43-fwcutter verwijderd uit de installatie
- netinstall: hyprland-git vervangen door hyprland
- netinstall: linux-cachyos-lts uit de selectie geschrapt om problemen met ontbrekende modules te voorkomen
- Calamares: Shellprocess: Rangschikken van mirrors verplaatst naar vóór het installeren van de keyring

**Changelog van de experimentele Handheld-release:**

- Standaard het KDE Vapor-thema (SteamOS-thema)
- Standaardbestandssysteem: BTRFS
- Standaardkernel: linux-cachyos-deckify
- SDDM gebruikt nu Wayland
- Omgevingsvlag voor HHD om de latentie te verminderen
- Kernelargumenten toegevoegd om het wisselen van Game Mode te verbeteren
- De gebruikersnaam kan nu worden bewerkt
- Hardwaredetectie configureert en installeert de benodigde pakketten afhankelijk van het gebruikte apparaat
- Het Mallit-toetsenbord gebruikt nu de donkere modus
- Powerbuttond van Valve voor een correcte slaapstand
- Snelkoppelingen kunnen nu aan Steam worden toegevoegd
- scx-scheds bijgewerkt naar de nieuwste git-commit, met de nieuwste verbeteringen voor de LAVD-scheduler
- Automatisch mounten toegevoegd aan cachyos-handheld
- CachyOS kan nu BIOS-updates voor de Steam Deck uitvoeren op de Steam Deck

24.05
----

**Functies:**

- Bestandssystemen: Bcachefs geïntroduceerd als optie voor het bestandssysteem
- pacstrap: Detectie toegevoegd of Bcachefs wordt gebruikt, waarna de bijbehorende Bcachefs-tools worden geïnstalleerd
- CachyOS-AI-SDK: Nieuwe installatieoptie geïntroduceerd voor een kant-en-klare configuratie van de NVIDIA SDK
- CachyOS-Deckify: Variant voor handhelds geleverd (experimenteel); zie [hier](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) voor meer details
- BTRFS: Automatische Snapper voor snapshots, te installeren vanuit de app CachyOS Hello.
- ISO: Offline installatieprogramma geschrapt
- Pakketupdates: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Bugfixes:**

- settings.conf: Hardwaredetectie verplaatst naar vóór netinstall
- pacstrap: btrfs-assistant gebruiken in plaats van btrfs-assistant-git
- plymouth: plymouth-hook verwijderd bij zfs + versleuteling
- ISO: Diverse configuratiebestanden voor KDE toegevoegd om te voorkomen dat het scherm tijdens de installatie wordt vergrendeld
- services-systemd: fstrim.timer correct ingeschakeld
- umount: Emergency uitgeschakeld om problemen met de zfs-installatie te voorkomen
- shellprocess: Restanten van de offline installatie opgeruimd

24.04
----

**Functies:**

- Plymouth: Plymouth gebruiken voor een opstartanimatie met thema
- ISO: Teruggeschakeld naar X11 vanwege problemen bij het instellen van de toetsenbordindeling in calamares
- rEFInd: Nieuwe partitie-indeling (aparte /boot en /boot/efi)
- netinstall: KDE: xwaylandvideobridge standaard installeren
- netinstall: lightdm gebruiken in plaats van ly voor diverse bureaubladomgevingen, vanwege een bug in ly
- systemd-boot: @saved gebruiken voor systemd-boot zodat het het eerder geselecteerde opstartitem onthoudt
- cachyos-keyring: Pakket cachyos-keyring gerefactord en een vertrouwde keyring cachyos-trusted geleverd
- ISO: ZSTD 19-compressie gebruiken voor de mkinitcpio-image van de ISO
- Pakketupdates: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 en cachyos-settings 39-2

**Bugfixes:**

- Autologin: De optie voor automatisch inloggen gerepareerd bij gebruik samen met sddm
- xz: Een gepatcht xz-pakket geleverd
- libarchive: Commit van de kwaadwillende xz-actor onschadelijk gemaakt
- cachyos-settings: udev-regel: watermark_scale_factor niet op 125 zetten, omdat dit het RAM-gebruik aanzienlijk verhoogt
- calamares: pacman-keyring: Eenvoudigere methode gebruiken om de keyring in de installatie te integreren

24.03.1
----

**Functies:**

- netinstall: Extra kernels verwijderd uit de selectie in netinstall om verwarring bij gebruikers te voorkomen. Andere aangepaste kernels kunnen via de Kernel Manager worden geïnstalleerd
- Kernel Manager: NVIDIA-modules worden automatisch geïnstalleerd wanneer ze worden gedetecteerd, gerebased voor QT6, eigen namen gerepareerd bij gebruik van de LTO-optie
- Package Installer: Gerebased op QT6, bijgewerkt voor pacman 6.1
- Pakketupdates: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Bugfixes:**

- NVIDIA: nvidia-module gepatcht om eerder eigenaar te worden van nvidia.drm.modeset, om problemen op nvidia-graphics te voorkomen
- Refind: De lts-kernel niet installeren om problemen te voorkomen
- shellprocess: De map liveusers volledig verwijderen

24.03
----

**Functies:**

- ISO: Plasma 6 wordt nu in de ISO meegeleverd en gebruikt standaard Wayland; de GNOME-ISO is geschrapt om verwarring over netinstall te voorkomen
- Calamares: Gerebased voor QT6
- refind: f2fs en zfs toegevoegd als optie, inclusief luks2-versleuteling
- mirrors: We bieden nu 2 wereldwijde CDN's. Eén gehost door Cloudflare R2 en één gehost door Digital Ocean
- mirrorlist: Het online installatieprogramma direct van de cdn ophalen voor een snellere levering
- initcpiocfg: De nieuwe microcode-hook gebruiken om de ucode vroeg te laden
- bootloader: De microcode niet meer via de bootloader laden
- Pakketupdates: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Bugfixes:**

- pacstrap: Geen configuratiepakketten installeren, zodat de gebruiker een schonere selectie bij de installatie krijgt
- shellprocess_pacman: Ook de gerangschikte cachyos-v4-mirrorlists naar het doelsysteem kopiëren

24.02
-----

**Functies:**

- refind: Indeling gewijzigd van /boot/efi naar /boot om meer opties voor bestandssystemen en versleuteling te bieden
- Live-ISO: De live-ISO opgeschoond en gesynchroniseerd
- Launch Installer: Aanbeveling voor de online installatie toegevoegd
- shell-configs: Optie toegevoegd om fastfetch uit te schakelen bij het starten van de terminal en een alias "update" toegevoegd
- netinstall: phonon-qt5-vlc toegevoegd aan kde
- Pakketupdates: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Functies:**

- x86-64-v4: Automatische detectie en inschakelen van de repository tijdens de installatie
- linux-cachyos: het sched-ext-schedulerframework wordt nu in de standaardkernel geleverd
- xwayland: Patches voor explicit sync standaard geleverd
- Pakketupdates: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Bugfixes:**

- chwd: Bij Nvidia-kaarten met Ada Lovelace worden de nvidia-modules direct in de initramfs verpakt om problemen met early kms te voorkomen

23.12
-----

**Bugfixes:**

- zfs: compatibility=grub toegevoegd aan de pool-opties om de compatibiliteit te waarborgen
- grub/xfs: Een patch aan grub toegevoegd voor compatibiliteit met de nieuwe standaard bigtime van xfs
- netinstall: xdg-desktop-portal-hyprland in plaats van xdg-desktop-portal-hyprland-git

23.11
-----

**Functies:**

- nvidia: De nvidia-module gebruiken in plaats van dkms
- Calamares gesynchroniseerd met upstream
- Pakketupdates: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Bugfixes:**

- nvidia-hook: nvidia-hook weer toegevoegd om problemen bij de installatie met de nieuwe module te voorkomen
- netinstall: Pakketten zijn hernoemd vanwege de recente wijzigingen in de pakketindeling van KF5
- netinstall: xdg-desktop-portal-gnome toegevoegd aan de GNOME-installatie

23.09
-----

**Functies:**

- systemd-boot: Standaard luks2
- netinstall: Een eigen categorie voor CachyOS-pakketten
- Calamares gesynchroniseerd met upstream
- Pakketupdates: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Bugfixes:**

- shellprocess_sdboot: Geen "sudo" gebruiken bij het genereren van de opstartitems tijdens het installatieproces

23.08
-----

**Functies:**

- Calamares gesynchroniseerd met upstream
- Pakketupdates: linux-cachyos 6.4.10, nvidia-utils 535.98

**Bugfixes:**

- De keyring is bijgewerkt en werkt nu correct

23.07
-----

**Functies:**

- CachyOS-Settings bevat nu "bpftune", dat de netwerkinstellingen automatisch afstemt op het gebruik
- CachyOS-Qtile-Settings: Verbeteringen voor gebruiksgemak, betere iconen, ...
- Pakketupdates: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Bugfixes:**

- rate-mirrors gerepareerd
- chwd (hardwaredetectie) heeft meerdere fixes gekregen
- installatie van niet-vrije stuurprogramma's voor hybride opstellingen in het installatieprogramma gerepareerd
- vastlopen van Calamares opgelost, wat gebeurde bij enkele zeldzame configuraties, vooral in VM's
- Dia's: typfout in dia 6 verbeterd

23.06
-----

**Bugfixes:**

- Offline installatie: calamares gerepareerd

23.05
-----

**Functies:**

- De indeling van de CachyOS Git-migratie wordt nu weerspiegeld in de installatie
- chwd (mhwd) heeft meerdere fixes gekregen
- Pacman: We hebben een functie toegevoegd waarmee we gebruikers vóór het bijwerken een bericht kunnen tonen
- Calamares gesynchroniseerd met upstream
- Pakketupdates: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Bugfixes:**

- netinstall: kleine fixes vanwege pakketwijzigingen
- Dia's: Dia 6 bijgewerkt om de nieuwste wijzigingen te weerspiegelen

23.04
-----

**Functies:**

- De bureaubladomgeving Qtile geïntroduceerd
- mhwd herzien: herschreven in Rust; vereenvoudigde profielen voor GPU's en netwerkkaarten; een hoop oeroude code verwijderd
- Pakketupdates: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Bugfixes:**

- f2fs: Mountoptie "atgc" verwijderd, omdat die problemen gaf met systemd

23.03.1
-------

**Functies:**

- Pakketupdates: linux-cachyos 6.2.7, cachy-browser 111.0

**Bugfixes:**

- Calamares gerepareerd in combinatie met de displaymanager lightdm, vanwege foutieve upstream-commits in calamares
- Probleem met de keyring bij de offline installatie opgelost
- Refind: linux-cachyos-lts als standaard gebruiken. De huidige 6.2 lijkt niet goed samen te werken met refind

23.03
-----

**Nieuwe functies:**

- De bootloader refind toegevoegd
- Automatische installatie van Nvidia-stuurprogramma's met MHWD
- Ondersteuning voor versleuteling bij ZFS-installaties
- Hyprland toegevoegd aan de netinstallatie
- CachyOS-KDE-Settings gebruikt nu het standaardthema van KDE, maar de CachyOS-thema's zijn nog steeds vooraf geïnstalleerd en beschikbaar
- Pakketupdates: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- De bootloader-module van calamares volledig herzien en verbeterd
- De ISO wordt nu ondertekend met een GPG-sleutel
- MHWD verbeterd en bijgewerkt
- Calamares gesynchroniseerd met upstream

**Bugfixes:**

- De optie "replace partition" biedt nu een keuze voor het bestandssysteem
- Typfout in dia 3 verbeterd
- nouveau gerepareerd; de module wordt nu correct geladen
- MHWD: modesetting gebruiken voor INTEL/ATI en Nouveau
- De zfs-hook verwijderd uit mkinitcpio op de live-iso, die problemen veroorzaakte bij het opstarten
- Je kunt de update downloaden van onze mirrors op SourceForge.

23.02
-----

**Nieuwe functies:**

- De repo cachyos-community-v3 is toegevoegd
- De bureaubladomgevingen Budgie, Mate en LXDE zijn toegevoegd aan de netinstallatie
- Bluetooth.service is nu standaard ingeschakeld
- F2FS en grub zijn weer ingeschakeld en werken
- Pakketupdates: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Bugfixes:**

- Rate-mirrors valt nu terug op niet-gerangschikte mirrors als het rangschikken mislukt
- cachyos-rate-mirrors heeft een langere fetch-mirrors-timeout
- Github is toegevoegd aan de hosts om problemen met de mirrorlist te voorkomen
- Opstartitems voor BIOS zijn bijgewerkt in syslinux

23.01
-----

**Functies:**

- De dia's van Calamares zijn herzien en bijgewerkt
- De bureaubladomgeving UKUI is toegevoegd aan de netinstallatie
- De bureaubladomgeving Cinnamon is toegevoegd aan de netinstallatie
- Cmdline: zswap is nu standaard uitgeschakeld, omdat CachyOS standaard zram levert
- Calamares bijgewerkt naar de nieuwste commit
- LLVM 15 wordt nu standaard meegeleverd
- Pakketupdates: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- Het CLI-installatieprogramma is bijgewerkt

**Bugfixes:**

- shellprocess remove-ucode wordt nu ook uitgevoerd bij de offline installatie
- pamac is verwijderd uit de netinstall
- De gerangschikte cachyos-mirrors worden nu correct naar het installatiedoel gekopieerd
- power-profile-daemon wordt niet meer standaard ingeschakeld

22.12
-----

**Functies:**

- Nieuwe GRUB-achtergrond in de bootloader van de ISO
- memtest is nu inbegrepen voor UEFI-systemen
- CachyOS-sddm-theme is toegevoegd aan de KDE-installatie
- Automatisch versiescript toegevoegd bij het maken van de ISO
- Calamares bijgewerkt naar de nieuwste commit
- De mirrors worden nu gerangschikt met "cachyos-rate-mirrors", dat onze mirrors en die van Arch rangschikt
- Pakketupdates: kernel 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- De bureaubladomgeving Kofuku is verwijderd
- extra ISO met llvm 15 om ondersteuning te bieden voor nieuwere AMD-kaarten

**Bugfixes:**

- Calamares gerepareerd bij gebruik van GNOME als ISO
- zfshostid werkt nu correct voor de offline en online installatie
- De hook "kms" toegevoegd aan de module initcpiocfg om de standaarden van archlinux te volgen
- En meer fixes voor de ISO

22.11
-----

**Functies:**

- Calamares en de bijbehorende configuratie worden in één pakket geleverd
- Volledige opschoning van de pakketten in de netinstall
- Een module toegevoegd die de niet-benodigde ucode automatisch verwijdert
- benodigd RAM verlaagd naar 2.5GB
- Pakketten die nodig zijn voor btrfs, worden nu alleen voor btrfs geïnstalleerd
- Calamares bijgewerkt naar de nieuwste commit
- De bootloader van de ISO heeft nu een achtergrond
- Gebruikelijke pakketupgrades (mesa, kernel, ...)
- systemd-network vervangen door networkmanager

**Bugfixes:**

- qemu-quest-agent.service verwijderd uit de ISO
- copytoram volledig uitgeschakeld; het maakt de offline installatie kapot
- mkinitcpio.conf bijgewerkt
- En meer fixes voor de ISO

22.10
-----

**Functies:**

- Pacman gebruikt nu Architecture=auto bij installaties voor x86-64-v3, omdat we een patch hebben toegevoegd waarmee pacman x86-64-v3 automatisch detecteert
- Pacman toont nu uit welke repo een pakket is geïnstalleerd
- De selectie van de bootloader detecteert automatisch of EFI aanwezig is; zo niet, dan wordt standaard grub gebruikt
- De keuze voor swap is nu standaard uitgeschakeld, omdat zram automatisch en dynamisch wordt gegenereerd
- Calamares bijgewerkt naar de nieuwste commit
- De minimale RAM-vereiste is ingesteld op 4GB
- cachyos-grub-theme is verwijderd

**Bugfixes:**

- Detectie van SSD en hdd in fstab is uitgeschakeld totdat er een upstream-fix is
- dubbel BTRFS-subvolume gerepareerd
- Ontbrekende microcode toegevoegd aan de grub-bootloader van de ISO
- Een fallback-opstartmodus toegevoegd die geen modeset instelt (nomodeset)
- En meer fixes voor de ISO

22.09
-----

**Functies:**

- Calamares draait nu op de nieuwste 3.3-tak. Dit brengt bugfixes en nieuwe functies in calamares
- Het TUI-installatieprogramma is nu opgenomen in de GUI-ISO; je kunt het gebruiken met "cachyos-installer"
- Calamares detecteert nu automatisch of het doelbestandssysteem op een ssd of hdd staat en past de fstab-opties daarop aan
- Nvidia voor de nieuwste GPU's (vanaf 9xx) heeft nu een eigen opstartitem, om problemen met nouveau te voorkomen
- mountopties voor fstab en zfs bijgewerkt
- FireFox wordt niet meer standaard geïnstalleerd, omdat cachy-browser standaard wordt geïnstalleerd

**Bugfixes:**

- cachyos-gaming-meta is verwijderd uit de netinstall-module om problemen tijdens het installatieproces te voorkomen
- netinstall-pakketten zijn bijgewerkt en hebben enkele fixes gekregen
- De installatie van OpenBox is gerepareerd
- de gebruikelijke vertaalfixes

22.07
-----

**Functies:**

- Selectie van de bootloader: de gebruiker kan nu bij de online installatie kiezen tussen grub en systemd-boot
- Bij de online installatie wordt nu altijd de nieuwste calamares geïnstalleerd, wat helpt om bugs "on the air" te verhelpen
- Calamares heeft nu een mhwd-module die automatisch de benodigde stuurprogramma's installeert (vrije stuurprogramma's)
- Calamares heeft nieuwe dia's met afbeeldingen tijdens de installatie
- mountopties voor fstab en zfs bijgewerkt
- Ondersteuning voor HiDPI

**Bugfixes:**

- De bug met locales in calamares is opgelost
- F2FS is verwijderd voor de grub-bootloader, omdat dit momenteel niet werkt (probleem in calamares); het kan nog wel met systemd-boot worden gebruikt
- Calamares toont nu het juiste standaardbestandssysteem
- Gnome-ISO gerepareerd
- Ontbrekende pakketten op de live-ISO toegevoegd voor de offline installatie
- btrfs swap met luks-versleuteling gerepareerd
- de gebruikelijke vertaalfixes

22.06
-----

De volgende bekende bugs zijn opgelost:

- De installatie mislukte wanneer een generieke CPU werd gebruikt
- KDE mountte automatisch zfs-partities, waardoor het automatisch inloggen op de ISO niet meer werkte

**Verbeteringen:**

- De firewall van de server is gecorrigeerd; cloudflare blokkeerde gebruikers als "bots", wat leidde tot een fout bij het installeren
- Ondersteuning voor thema's toegevoegd voor Gnome, XFCE en OpenBox
- Onze wiki bijgewerkt

**_CachyOS - Kernel - Manager_**
We zijn ook verheugd onze CachyOS-Kernel-Manager aan te kondigen.
Daarmee kun je de kernel uit de repo installeren en ook met een GUI je eigen kernelbuild configureren, waardoor je deze heel eenvoudig naar eigen wens kunt aanpassen.

De volgende opties kun je selecteren bij het compileren van een kernel:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA uitgeschakeld of ingeschakeld
- KBUILD CFLAGS (-O3 of -O2)
- Performance governor als standaard instellen
- BBR2 inschakelen
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodic, full)
- MQ-Deadline I/O-scheduler uitschakelen
- Kyber I/O-scheduler uitschakelen
- MG-LRU in- of uitschakelen
- DAMON in- of uitschakelen
- Speculative page fault in- of uitschakelen
- LRNG (Linux Random Number Generator) in- of uitschakelen
- Automatische kerneloptimalisatie toepassen (detecteert automatisch de March van je CPU)
- Kerneloptimalisatie met selectie toepassen (je ziet een lijst met verschillende CPU-Marches en kunt de jouwe met een nummer selecteren)
- Debug uitschakelen (verkleint de kernel)
- nf cone in- of uitschakelen
- LTO inschakelen (Full, Thin, No)

22.05
-----

CachyOS is een jaar geleden opgericht. Na bijna een jaar ontwikkeling zijn we er echt trots op onze eerste stabiele release van het GUI-installatieprogramma aan te kondigen.
We hebben veel tijd gestoken in onderzoek naar repobeheer, kernelontwikkeling, infrastructuur, thema's, ... en dat alles uiteindelijk samengebracht in het CachyOS GUI-installatieprogramma.
Alle functies waaraan we hebben gewerkt en die we in het installatieprogramma hebben opgenomen, hebben als doel gebruikers een volledig aanpasbare ervaring te bieden.

De meest opwindende wijzigingen zijn dat we voor de online installatie nu pacstrap gebruiken, wat zorgt voor een volledig schone geïnstalleerde omgeving, en dat we volledige native ondersteuning bieden voor het bestandssysteem zfs

Omdat Discord de lengte van berichten beperkt, is de volledige aankondiging hier te vinden:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Downloaden kan hier:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
