---
title: GUI-Installer
description: Changelogs von Calamares und der grafischen Live-ISO
sidebar:
  order: 1
---
26.06
----

**Funktionen:**

* **Pakete:**
  * Python verwendet nun erweitertes PGO, um die Leistung zu verbessern
  * Ein [GCC-Patch](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) für das generische x86-Branch-Misprediction-Tuning wurde hinzugefügt, wodurch GCC die Kosten von Sprungvorhersagefehlern auf modernen Intel- und AMD-CPUs besser berücksichtigt
  * Eine Regression aus Phoronix-Benchmarks bei der Verwendung von OpenBLAS auf CPUs mit hoher Kernanzahl wurde behoben
  * `proton-cachyos` wurde in `proton-cachyos-native` umbenannt
* **pacman:** [Netzwerkisolation für Scriptlets und Hooks](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9) hinzugefügt
* **Installer:**
  * Desktop-Option „CachyOS Hyprland Noctalia“ samt Vorschauvideo hinzugefügt
  * `paru` aus der Installation entfernt; Nutzern wird empfohlen, stattdessen [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system) über dessen GUI oder CLI als Alternative zu verwenden
  * SDDM als Display-Manager für MangoWM hinzugefügt
  * GNOME-Systemüberwachung durch Resources ersetzt
  * `realtime-privileges` zur Audio-Paketgruppe hinzugefügt
  * Erkennung von Tastaturlayout und -variante in der Live-Sitzung verbessert
* **CachyOS-Welcome:**
  * Unterstützung für DNS over QUIC (DoQ) über `blocky` hinzugefügt
  * Eine eigene Seite zur Fehlerbehebung hinzugefügt
  * Unterstützung für das Ptyxis-Terminal hinzugefügt
  * Aserbaidschanische und griechische Übersetzungen hinzugefügt
  * Französische Readme- und Mitwirkungsseiten hinzugefügt
  * Italienische, deutsche, französische, japanische und bulgarische Übersetzungen aktualisiert
* **chwd:**
  * Türkische Übersetzung hinzugefügt
  * `cachyos-handheld` aus den Handheld-Paketlisten entfernt
  * Behebt Treiberkonflikte auf Multi-GPU-Systemen, die inkompatible Treiberzweige erfordern (z. B. gemischte NVIDIA-Generationen), indem der beste gemeinsame Treiber installiert oder auf die primäre GPU zurückgegriffen wird
  * 32-Bit-Vulkan-Treiber für virtuelle Maschinen hinzugefügt
* **cachyos-settings:** Start-Timeouts von 15 Sekunden und Herunterfahr-Timeouts von 10 Sekunden auf Benutzerdienste angewendet, um 90-sekündige Verzögerungen beim Herunterfahren zu verhindern

**Fehlerbehebungen:**

* **Installer:**
  * Reihenfolge der Tastaturlayouts und Verarbeitung der `locale1`-Konfiguration behoben
  * Kopieren der korrekten Pacman-Konfiguration in das installierte System behoben
  * Übrig gebliebene `/etc/calamares`-Verzeichnisse nach der Installation entfernt
  * Calamares-Bereinigung hinter alle Installationsskripte verschoben
  * Redundanten Limine-Post-Install-Schritt entfernt
* **CachyOS-Welcome:**
  * Absturz beim Auswählen von „Apps installieren“ ohne installiertes `cachyos-pi` verhindert; die Schaltfläche wird nun ausgeblendet, wenn sie nicht verfügbar ist
  * Absturz behoben, wenn die gespeicherte Einstellungsdatei nicht gelesen oder verarbeitet werden konnte; bei Fehlern werden die Einstellungen nun auf die Standardwerte zurückgesetzt
  * Erkennung von Tweaks (einschließlich `graphical-session.target.wants`) sowie das globale Deaktivieren von Benutzerdienst-Tweaks über polkit korrigiert
* **chwd:**
  * Hersteller-IDs für virtuelle Maschinen korrigiert
  * Unnötige Aktivierung des `fprintd`-Dienstes entfernt
  * Schutzmechanismus gegen das Entfernen von Mesa behoben

26.04
----

**Funktionen:**

* **Installer:**
  * Shelly hat Octopi als grafischen Paketmanager ersetzt
  * Direkt nach der Installation wird nun ein sauberer Snapshot erstellt und dauerhaft aufbewahrt, um einen grundlegenden Wiederherstellungspunkt bereitzustellen
  * GRUB `os-prober` ist nun standardmäßig aktiviert
  * MangoWM als Desktop-Option mit Dotfiles hinzugefügt
  * UKUI-Desktop entfernt
  * AMD-GPUs verwenden nun ein anderes Plymouth-Theme, da der `amdgpu`-Treiber das vorherige Theme auf Laptops mit angeschlossenem Zweitmonitor nicht zuverlässig darstellen kann
  * GNOME-Paketauswahl bereinigt und modernisiert
  * Option zur Installation von `MangoWM` mit der `DMS`-Shell hinzugefügt
* **CachyOS-Welcome:**
  * Unterstützung für DNS-over-HTTPS (DoH) über `blocky` hinzugefügt
  * Unterstützung für benutzerdefinierte DNS-Server sowie eine Anzeige bzw. Zurücksetzung für automatisches DHCP hinzugefügt
  * DNS-Server zeigen nun Metadaten (Region, Homepage, Filterung) an und unterstützen individuelle Latenztests
  * Umschalter für die VRAM-Verwaltung `dmemcg-booster` hinzugefügt (installiert unter KDE zusätzlich `plasma-foreground-booster`)
  * Vollständige Tastaturnavigation für bessere Barrierefreiheit hinzugefügt
  * PNG-Social-Icons durch scharfe, HiDPI-fähige SVGs ersetzt
  * `wezterm` zum Terminal-Helfer hinzugefügt
* **chwd:**
  * Native USB-Geräteerkennung (über libusb/sysfs) und Gehäusetyp-Erkennung hinzugefügt
  * Unterstützung für die Fingerabdruck-Sudo-Integration (`fprint`) hinzugefügt
  * Erkennung von CPU-Familie und -Modell zur Unterstützung von `intel-lpmd` hinzugefügt
  * **Handhelds:** Genaue Erkennungsmuster für Xbox ROG Ally hinzugefügt
  * **Netzwerk:** Marvell AVASTAR 88W8897 WLAN-Profil (Surface Pro 4) hinzugefügt
  * NVIDIA-Profile für Laptops und Desktop-Umgebungen aufgeteilt
  * Profile für virtuelle Maschinen aufgeteilt und aktualisiert
* **cachyos-settings:** Standard-NVMe-I/O-Scheduler von `none` auf `kyber` umgestellt

**Fehlerbehebungen:**

* **Installer:**
  * Die Partitionierungsmethode wird nun im Debug-Protokoll ausgegeben
  * Alte Microcode-Pakete werden nun entfernt, wenn eine bestehende Boot-Partition wiederverwendet wird
* **CachyOS-Welcome:**
  * Fehler behoben, durch den Verbindungsprüfungen fälschlicherweise `true` zurückgaben, wenn der Ping fehlschlug
  * Sicherstellung, dass Symbole für externe Links in dunklen Designs sichtbar sind
  * Verhindert, dass mehrere Instanzen der Willkommens-App gleichzeitig gestartet werden
  * `StartupWMClass` für eine bessere `.desktop`-Fensterzuordnung hinzugefügt
* **chwd:**
  * `kms`-Hook aus `mkinitcpio.conf` auf nicht-portablen Desktops entfernt, um NVIDIA-Treiberkonflikte zu beheben
  * Suche nach installierten Kerneln in NVIDIA-Profilen genauer gestaltet
  * Erzwungene Xorg-Sitzung aus den NVIDIA-470xx-Profilen entfernt (behebt Kompatibilität mit `plasma-login-manager`)
  * Veraltetes `WaylandEnable=false` für GDM in Profilen für virtuelle Maschinen entfernt
  * Falsche Handheld-Erkennungen behoben (z. B. bestimmte MSI-Laptops, die fälschlicherweise als MSI Claw erkannt wurden)
* **cachyos-settings:**
  * `S01x`-Energieverwaltung aufgrund von Problemen mit dem NVIDIA-595-Treiber entfernt
  * `AggressiveVblank` aufgrund von VR-Problemen mit dem NVIDIA-Treiber deaktiviert

26.03
----

**Funktionen:**

* **Installer:**
  * Unterstützung für GIF-/WebP-Videos in der Desktop-Auswahl hinzugefügt, um die Desktops vorzustellen. Dies ist für Plasma, GNOME, Niri und COSMIC aktiviert
  * Unterstützung für JPEG XL in der Desktop-Auswahl hinzugefügt, um die Bildgrößen zu reduzieren
  * Cachy-Update ist nun standardmäßig für GNOME- und KDE-Installationen aktiviert
  * Logik für die Microcode-Installation verbessert – die Hardware wird nun erkannt und direkt der passende Microcode installiert, anstatt beide zu installieren und den nicht benötigten anschließend wieder zu entfernen
  * Fehlermeldung bei zu kleiner EFI-Partition verbessert
  * Liste der Desktopumgebungen von einsteigerfreundlichen, leicht zugänglichen Setups bis hin zu fortgeschritteneren wie WMs sortiert
* **CachyOS-Welcome:**
  * Schaltfläche zum einfachen Installieren und Aktivieren von „Winboat“ für eine unkomplizierte Windows-Docker-VM hinzugefügt
  * Unterstützung für den FFMUC-DNS-Server in der DNS-Auswahl hinzugefügt
  * Ukrainische Übersetzung hinzugefügt
* **chwd:** Größe des initramfs für NVIDIA-dGPU-Konfigurationen massiv verringert
* **linux-cachyos:** Anstatt eine `0001-cachyos-base-all.patch`-Datei zu erzeugen, wird nun für jede Version unseres gepatchten Kernels ein Release in einem Linux-Repository erstellt
* **cachyos-rate-mirrors:** Erlebnis für Nutzer in China und Russland durch eine ordentliche Prüfung vor dem Bewerten der Mirrors massiv verbessert
* **cachyos-settings:** Unterstützung zum automatischen Setzen der WLAN-Regulierungsdomäne basierend auf der Zeitzone hinzugefügt
* **Website:** Das Website-Design wurde überarbeitet und an modernere Standards angepasst
* **GitHub:** Issue-Vorlagen zu wichtigen GitHub-Repositories hinzugefügt, um die Qualität von Fehlerberichten zu verbessern und Nutzern eine Hilfestellung zu geben
* **Mirrors:** Neue Mirrors in Russland (jura12, cachy-arch.ru), Schweden (Zyner) und Kanada (All Things Linux)

**Fehlerbehebungen:**

* **Installer:**
  * Unterstützung für bcachefs aus der Dateisystemauswahl entfernt, da `bcachefs-dkms` erforderlich ist
  * Verschlüsselung mit LUKS2 für bestimmte Geräte behoben
  * Aktivierung des Display-Managers „ly“ behoben
* **cachyos-settings:** `cachyos-bugreport.sh` schwärzt nun IP-Adresse, Benutzername, Hostname und MAC-Adresse
* **chwd:**
  * Generische Handheld-Profile und verbesserte Unterstützung für Handheld-GPUs
  * `fwupd` ist nun für Lenovo-Handhelds aktiviert


**Changelog für die Handheld-Edition:**

* **gamescope-session:** `gamescope-session-plus` durch `gamescope-session-cachyos` ersetzt, einen Fork von Valves `gamescope-session`
  * Ermöglicht Firmware-Updates für Steam Deck und Lenovo Legion Go
* **plasma-login-manager:** SDDM durch `plasma-login-manager` als Login-Manager ersetzt
* **Bootloader:** Limine ist nun standardmäßig mit automatischen Snapshots vorausgewählt. `systemd-boot` bleibt weiterhin wählbar
* **Installer:** Handheld-Calamares mit dem Calamares der Desktop-Edition zusammengeführt
* **ISO:** Die ISO verwendet nun Wayland anstelle von X11

26.01
----

**Funktionen:**

* **Installer:**
  * Bootloader-Auswahl nach Calamares verschoben; die Verwaltung ist nun in einem einzigen Paket gebündelt.
  * Die Architekturerkennung wird nun **vor** der Installation des Basissystems durchgeführt, um die Downloadgröße zu verringern.
  * GRUB verwendet nun LUKS2 für die Verschlüsselung.
  * `--needed` wird an `pacman` übergeben, um eine doppelte Installation von Paketen zu vermeiden.
  * Einstufige Kompression auf NVMe für Btrfs verwendet.
  * Xorg-Abhängigkeiten aus Wayland-Desktopumgebungen entfernt.
* **ISO:**
  * Für die ISO-Umgebung auf `plasma-login-manager` umgestellt.
  * Die ISO enthält nun sowohl den Stable- als auch den LTS-Kernel. Der Stable-Kernel ist standardmäßig ausgewählt.
  * Die ISO-Sitzung wurde von X11 auf Wayland umgestellt.
* **Netinstall:**
  * Plasma-Installationen verwenden nun `plasma-login-manager` statt SDDM.
  * Niri verwendet nun `noctalia-shell` und aktualisierte Dotfiles.
  * Den GNOME-Installationsprozess bereinigt.
* **Folien:** Tippfehler in den Calamares-Folien behoben und eine neue Folie hinzugefügt, die das Wiki vorstellt.
* **Mirrors:** Die Mirror-Statusseite (<https://packages.cachyos.org/mirrors>) zeigt nun den Synchronisationsstatus der CachyOS-Mirrors an.
* **cachyos-settings:** `EnableAggressiveVblank` für das NVIDIA-Modul aktiviert. Dies verkürzt die Zeit in der oberen Interrupt-Hälfte für Display-Interrupts mit geringer Latenz.
* **chwd:**
  * Installiert `nouveau-fw`, um VA-API-Unterstützung in Nouveau für Karten der NVIDIA-Kepler-Familie zu aktivieren.
  * AI-SDK-Unterstützung für mehrere neue AMD-GPUs hinzugefügt.
  * HHD durch `steamos-manager` und `inputplumber` ersetzt.
* **Proton-CachyOS:**
  * Unterstützung für FSR4 MLFG (Machine Learning Frame Generation) hinzugefügt; wird bei Verwendung von `PROTON_FSR4_[RDNA3_]UPGRADE` automatisch aktiviert
  * Unterstützung für das `d7vk`-Modul hinzugefügt. Kann über `PROTON_DXVK_DDRAW=1` aktiviert werden
  * Patches für haptisches Feedback des DualSense importiert
  * `WINE_BLOCK_HOSTS` hinzugefügt, um zu verhindern, dass Wine sich mit bestimmten Domains verbindet
  * Aktiviert `ENABLE_HDR_WSI=1` automatisch bei Verwendung von `winewayland` auf NVIDIA-dGPUs
  * Probleme mit dem Tastaturlayout bei Verwendung von `winewayland.drv` behoben
  * Einen langjährigen Patch entfernt, der zu verschlechterten 1%-Low-FPS führte
  * `protonfixes` gepatcht, um die DLSS-Preset-Auswahl und die `libxess_dx11.dll`-Umleitung besser zu handhaben
  * `proton-cachyos-slr` wird nun standardmäßig in „gaming-meta“ verwendet. Die native Version wird weiterhin unterstützt.


**Fehlerbehebungen:**

* **Limine:** Größe der Boot-Partition auf 4192 MB erhöht, um den hohen Anforderungen von `limine-snapper-sync` gerecht zu werden.
* **Installer:**
  * Der Installer blockiert bzw. verhindert nun das Fortfahren, wenn die EFI-Partition bei den Optionen „Daneben“ oder „Partition ersetzen“ zu klein ist.
  * Fehler behoben, bei dem nach der Auswahl eines Desktops, dem Weitergehen zum nächsten Schritt, dem Zurückgehen und der Auswahl eines anderen Desktops beide ausgewählt waren.
* **chwd:** Umgebungsvariable entfernt, die `libva-nvidia-driver` erzwang, da sie auf Dual-GPU-Systemen Probleme verursachte.
* **cachyos-hello**: Fehler behoben, durch den `cachy-update` als deaktiviert angezeigt wurde, obwohl es aktiviert war.
* **Controller**: Eingabeprobleme mehrerer Controller durch Aktualisierung der Input-Regeln auf den neuesten Stand behoben.
* **Framework 16 (Zen5)**: Fehler behoben, durch den die Sitzung beim Schreiben in Calamares einfror.

25.11
----

**Funktionen:**

* **ISO/Installer:** Orca und espeak-ng für bessere Barrierefreiheit hinzugefügt
* **initcpiocfg:** `systemd`-Hook auf unterstützten Konfigurationen aktiviert
* **Netinstall:** Hyprland-Dotfiles wurden entfernt
* **pacstrap:** Installiert `bcachefs-dkms`, wenn `bcachefs` als Dateisystem ausgewählt wird
* **Calamares:** Unterstützung für `plasma-login-manager` und `cosmic-greeter` hinzugefügt
* **Cosmic:** Von SDDM zu `cosmic-greeter` gewechselt
* **Schriftarten:** Schriftarten für asiatische Nutzer verbessert
* **chwd:**
  * Installiert `intel-media-sdk` und `vpl-gpu-rt` auf unterstützten GPUs
  * Nouveau NvBoost für Fermi-GPUs aktiviert
  * Unterstützung für den alten NVIDIA-Treiber 390xx eingestellt
  * Unterstützung für Xbox ROG Ally/X hinzugefügt
* **cachyos-hello:**
  * Internen Paketinstaller entfernt; öffnet stattdessen den CachyOS-Paketinstaller
  * CLI-Schnittstelle für die GUI-Funktionen hinzugefügt
  * Diverse Fehlerbehebungen bei der ISO-Versionsprüfung
* **cachyos-settings:** `zram-generator`: Kompression für nicht komprimierbare Seiten entfernt
* **Proton-CachyOS:**
  * `dxvk-gplasync` als alternatives DXVK hinzugefügt. Kann über `PROTON_DXVK_GPLASYNC=1` aktiviert werden
  * `DISABLE_LAYER_MESA_ANTI_LAG` bei Verwendung von `PROTON_FSR4_UPGRADE` hinzugefügt
  * Mehrere **Wayland-Fehlerbehebungen** (Vollbild-Offset, Tote Tasten, DPI-Verhalten, Videoausgabe-Anpassungen) und Verbesserungen an `winewayland.drv` integriert
  * **Spielspezifischen Shader-Cache** eingeführt und optimiert sowie größere Shader-Caches (insbesondere für NVIDIA) hinzugefügt
  * Upscaler-Upgrades für FSR3 und XeSS hinzugefügt

**Fehlerbehebungen:**

* **Limine:**
  * Installation von Limine ohne Eintragsregistrierung bei fehlerhaftem UEFI behoben
  * Verwendet die systemd-Variante des `btrfs-overlayfs`-Hooks
* **Calamares:** `attr2` als Option aus den XFS-Mount-Einstellungen entfernt
* **chwd:** USB-Ethernet-Schnittstelle des T2-Chips deaktiviert

25.08
----

**Funktionen:**

* **Dienste:** **packages.cachyos.org** hinzugefügt – eine Paketsuche analog zur Arch-Linux-Website, mit einer Option zum Ausschließen von CachyOS-Paketen.
* **Kernel:** Der Installer installiert nun nach der Installation zusätzlich **linux-cachyos-lts** als sekundären/Backup-Kernel. Wir empfehlen dennoch die Verwendung des Stable-Kernels.
* **ISO:** Der Kernel der Live-ISO wurde aufgrund anhaltender Probleme mit dem Stable-Kernel von Stable auf LTS umgestellt, um die Boot-Zuverlässigkeit zu verbessern.
* **Desktop:** **Niri** als Desktop-Option inklusive einiger vorkonfigurierter Dotfiles hinzugefügt.
* **NVIDIA:** **S0ix**-Standby auf unterstützter Hardware für modernen Energiespar-Standby aktiviert.
* **GRUB:** Bootfähige Snapshots werden nun automatisch aktiviert und eingerichtet, wenn das Root-Dateisystem **Btrfs** verwendet.
* **Tweaks:** **Cachy-Update** in die Tweaks-Seite der Willkommens-App integriert. Cachy-Update fügt einen Timer und ein Symbol im Systemabschnitt hinzu, das über Updates benachrichtigt und diese per Klick ausführen lässt.
* **Proton-CachyOS:**
    - Downloader für DLSS-DLLs (Version **310.3.0**) hinzugefügt, ähnlich dem FSR4-Downloader. Verwende die Umgebungsvariable `PROTON_DLSS_UPGRADE=1` zum Aktivieren.
    - Umgebungsvariable `PROTON_DLSS_INDICATOR=1` hinzugefügt, um das DLSS-HUD zu aktivieren.
    - Downloader für XeSS-DLLs (Version **2.1.0**) hinzugefügt, ähnlich dem DLSS-Downloader. Verwende die Umgebungsvariable `PROTON_XESS_UPGRADE=1` zum Aktivieren.
    - `PROTON_FSR4_RDNA3_UPGRADE` für RDNA3-GPUs hinzugefügt. Macht dasselbe wie `PROTON_FSR4_UPGRADE`, setzt aber zusätzlich einige weitere notwendige Variablen.
    - Vollständigere Implementierungen von in Proton fehlenden NVIDIA-Bibliotheken hinzugefügt. Dies sollte helfen, Optionen wie PhysX in Spielen zu aktivieren, in denen sie zuvor deaktiviert waren. Du kannst sie auch einzeln über `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` und `PROTON_NVIDIA_NVOPTIX` aktivieren.
    - Spielspezifischen Shader-Cache hinzugefügt, standardmäßig aktiviert und mit `PROTON_LOCAL_SHADER_CACHE=0` deaktivierbar. Shader werden für jedes Spiel unter `<steamlibrary>/shadercache/<appid>` zwischengespeichert, ähnlich wie bei aktiviertem Shader-Pre-Caching. Beim erneuten Aufbau des Shader-Caches für jedes Spiel kommt es zu Rucklern, aber die zwischengespeicherten Shader werden nicht mehr wegen begrenzter Cache-Größe verdrängt.
    - [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) als optionalen DXVK-Ersatz für ältere GPUs hinzugefügt, die Vulkan 1.3 nicht ordnungsgemäß unterstützen. Es nutzt den `async`-Branch und SOLLTE DAHER NICHT in Spielen mit Anti-Cheat oder allgemein in Mehrspielerspielen verwendet werden. Du wurdest gewarnt. Zum Aktivieren `PROTON_DXVK_SAREK=1` verwenden.
    - `PROTON_FSR3_UPGRADE` hinzugefügt, um FSR-3.1-DLLs auf neuere Versionen zu aktualisieren.

**Fehlerbehebungen:**

* **Limine:**
    - Fehler bei `limine bios-install /dev/sdaX` behoben, wenn auf MBR-Systemen der Einhängepunkt **/boot** als Boot-Speicherort ausgewählt wurde.
    - Nicht initialisierten Wert des `bootLoader`-Pfads behoben, der auf MBR-Systemen zu Installationsfehlern führte, wenn der Bootloader-Speicherort nicht ausdrücklich ausgewählt wurde.
    - Warnung zur Verwendung des **bios-grub**-Flags auf der Boot-Partition hinzugefügt, das zu einem „Stage 3 file not found“-Fehler führen kann.
    - Out-of-the-box-Dual-Boot mit Windows für BIOS-Installationen behoben.
    - Fehler behoben, durch den Btrfs-Snapshots bei Verwendung von **GNOME (GDM)** nicht booteten.
* **Launch Installer:** Fallback-IPs für die Online-Prüfung hinzugefügt, falls das Anpingen von **cachyos.org** fehlschlägt.

25.07
----

**Funktionen:**

- **Shell**: Die Benutzer-Shell kann nun bei der Installation zwischen fish, zsh und bash gewählt werden. Fish bleibt standardmäßig aktiviert.
- **chwd**: Installiert `plasma-x11` für ältere NVIDIA-Treiber
- **Netinstall**: `fwupd` zu KDE Plasma und GNOME hinzugefügt
- **mesa-git**: Unterstützung für AMD Anti-Lag hinzugefügt
- **firefox**: Eine alternative Firefox-Variante namens „firefox-pure“ wurde eingeführt, die Verbesserungen am `userjs`-Profil enthält. Zusätzlich wurde „cachyos-firefox-settings“ hinzugefügt, das zusätzlich zu Firefox installiert werden kann.
- **Proton-CachyOS**:
  - Upstream-Commits von wine-wayland importiert
  - Umgebungsvariable „PROTON_FSR4_UPGRADE“ hinzugefügt, die automatisch die neueste FSR4-DLL herunterlädt und für ein automatisches Upgrade in Spielen mit FSR-3.1-Unterstützung ersetzt
  - Viele Wayland-bezogene Patches aus dem Upstream-Wine hinzugefügt, die nach Wine 10.0 veröffentlicht wurden.
  - Patches für eine bessere Anti-Cheat-Integration hinzugefügt. Danke an NelloKudo
  - Patches für AMDs Anti-Lag 2 für `vkd3d-proton` und Wine hinzugefügt
  - `umu-protonfixes` auf den neuesten Commit aktualisiert

**Fehlerbehebungen:**

- **Keyring**: Handhabung der Keyring-Installation verbessert, um Probleme zu vermeiden und mehrere Wiederholungsversuche durchzuführen.
- **systemd-oomd**: `systemd-oomd` deaktiviert, da es im Zusammenspiel mit `le9` Probleme hatte und Anwendungen viel zu früh beendete

**Changelog für die Handheld-Edition:**

- **handheld-settings**: Mehrere Optimierungen von SteamOS in die Handheld-Edition übernommen
- **pipewire**: Minimales Quantum auf 256 gesetzt
- **SteamDeck-OLED**: Installiert `galileo-mura` für das Steam Deck OLED
- **Lenovo Legion Go S**: Unterstützung für das Lenovo Legion Go S hinzugefügt

25.05
----

**Funktionen:**

- **ISO**: Automatische Erkennung beim Booten der ISO hinzugefügt, um die NVIDIA-GPU des Systems zu identifizieren und das passende Modul zu laden (z. B. `nvidia-open`, `nvidia`), was eine bessere Unterstützung für die 10xx-Serie und ältere Karten bietet.
- **Plymouth**: Neue Plymouth-Animation hinzugefügt.
  - Danke an Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) für die Arbeit daran!
- **Browser**: Cachy-Browser wurde eingestellt. Wir bieten nun Firefox als standardmäßig vorinstallierten Browser an. Eine Anleitung zur Migration von Profilen zu Firefox (und seinen Forks) findest du hier: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: `kcalc`, `filelight`, `plymouth-kcm` und `kio-admin` zur KDE-Installation hinzugefügt.
- **mkinitcpio**: Fallback-initramfs standardmäßig deaktiviert. Dies spart erheblich Speicherplatz.
- **Mirrors**: Neuen 10-Gbps-Mirror in Bangladesch hinzugefügt. Danke an Limda für das Hosting!
- **Proton**:
  - Fast alle Patches von **Proton CachyOS 9.0** wurden rebased.
  - Den Wayland-Treiber für Steam-Linux-Runtime-Builds aktiviert. Mit `PROTON_ENABLE_WAYLAND=1` aktivierbar. Danke an [GloriousEggroll](https://github.com/GloriousEggroll), der dies ermöglicht hat.
  - Viele Wayland-bezogene Patches aus dem Upstream-Wine hinzugefügt, die nach Wine 10.0 veröffentlicht wurden.
  - Verschiedene Probleme mit dem Wayland-Treiber und Vulkan-Spielen behoben. Danke an [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) für die ganze harte Arbeit.
  - Stub-Implementierung für `amdxc64.dll` hinzugefügt, um FSR4 zu ermöglichen. Verwende `FSR4_UPGRADE=1`, um FSR-3.1-Spiele auf FSR4 zu aktualisieren. Nochmals danke an [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Anleitung: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - DualSense-bezogene Patches für eine vollständigere Audiogeräte-Erkennung für kabelgebundene, klangbasierte Haptik hinzugefügt. Einige Spiele, die auf dieses spezielle Verhalten angewiesen waren, sollten diese Funktion nun unterstützen. Danke an [ClearlyClaire](https://github.com/ClearlyClaire) für die ursprünglichen Patches und an [Exotic0015](https://github.com/Exotic0015) für die Untersuchung seit **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Den Patch für Dragon Age Inquisition entfernt, da er nicht funktionierte. Bitte verwende für dieses Spiel vorerst **Proton CachyOS 9.0**.
- **GRUB**: Neues GRUB-Theme hinzugefügt. Danke an [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Fehlerbehebungen:**

- **Mirrors**: Problem behoben, durch das Nutzer aus Russland nicht mehr installieren konnten. Dies wurde behoben, indem CDN77 nicht mehr verwendet wird, welches Russland zu blockieren begonnen hatte.
- **kde-settings**: Das Discover-Symbol in der Kontrollleiste deaktiviert.
- **ddcutil**: Die Vorabversion ddcutil 2.2.1 veröffentlicht, um ein Problem zu beheben, bei dem AMD-GPUs beim Anschauen von YouTube-Videos einfroren.

**Changelog für die Handheld-Edition:**

- **os-branch**: Der Spielmodus zeigt nun korrekt an, dass CachyOS Linux verwendet wird.
- **audio**: Convolver-Profile aktualisiert.
- **steamos-manager**: Wird für GPU-Takt- und TDP-Verwaltung, BIOS-/Dock-Updates, Speichergeräte-Wartung, Formatierung externer Speicher und das Akkuladelimit beim Steam Deck verwendet.
- **steamos-powerbuttond**: Diese Komponente ersetzt das standardmäßige `powerbuttond` für ein besseres Standby-Erlebnis.
- **jupiter-hw-support**: Auf 20250501 aktualisiert.

25.04
----

**Funktionen:**

- **occt**: OCCT zur ISO hinzugefügt, um eine Live-Umgebung für Stresstests bereitzustellen
  - Danke an Marek für diese Idee!

**Fehlerbehebungen:**

- **kernel**: Behebt Modulabsturz auf Asus-Laptops
- **limine**: Limine hat nun `mkinitcpio-limine-hook` installiert und erstellt Bootloader-Einträge automatisch

**Changelog für die Handheld-Edition:**

- **audio**: Audioprofile für ROG Ally X und Legion Go hinzugefügt
- **gamescope**: `gamescope-plus` durch Upstream-`gamescope` ersetzt

25.03
----

**Funktionen**:

- **Bootloader**: Unterstützung für den Limine-Bootloader hinzugefügt
- **Bootloader**: Unterstützung für automatische Snapshots für den Limine-Bootloader hinzugefügt
- **Samba**: Paket „cachyos-samba-settings“ hinzugefügt, um eine Samba-Freigabe einfach einzurichten
- **NVIDIA**: GSP-Firmware für das proprietäre NVIDIA-Modul wieder aktiviert
- **Kernel**: Unterstützung für den Asus-Armoury-Treiber hinzugefügt
- **Secure Boot**: Das Skript „sbctl-batch-sign“ verbessert, sodass nur gewünschte Dateien signiert werden
- **udev**: Verwendung von `ntfs3` als Standardtreiber für NTFS-Partitionen wieder rückgängig gemacht
  - Info: Die Verwendung des NTFS3-Kernel-Treibers als Standard führte bei einigen Nutzern zu Problemen. Daher haben wir dies wieder rückgängig gemacht.
- **wine**: Wine und Wine-Staging nutzen nun standardmäßig WoW64 und NTSync
- **scx-manager**: Den grafischen sched-ext-Manager aus dem Kernel Manager in eine eigene Anwendung ausgelagert
- **Hardware-Unterstützung**: Unterstützung für RDNA4, RTX 5070 Ti und 5070 hinzugefügt.
- **Einstellungen**: Unterstützung für DLSS Swapper hinzugefügt – ein Skript, das automatisch die neueste DLSS-Version und das neueste Preset aktualisiert und verwendet
- **Paket-Updates**: linux-cachyos 6.14.0, NVIDIA 570.133.07, GNOME 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Fehlerbehebungen**:

- **initcpiocfg**: Das Hinzufügen des Moduls „crc32c-intel“ zu `mkinitcpio` entfernt – es ist veraltet und nutzt nun standardmäßig das Modul „crc32c“
- **chwd**: Bei T2-MacBooks wird das Offloading für `brcmfmac` deaktiviert
- **chwd**: Den NVIDIA-390.xx-Treiber nicht auf Laptops installieren

25.02
----

**Funktionen**:

- **Kernel**:
  - Propeller-Optimierung wird nun auf den Standard-Kernel **linux-cachyos** für alle verfügbaren Architekturen angewendet.
    - **Hinweis**: In Kombination mit AutoFDO kann dies die Leistung je nach Workload um etwa 10 % verbessern.
- **NVIDIA**: Unterstützung für die Blackwell-Architektur hinzugefügt.
- **ISO**: Das Modul `nvidia-open` wird standardmäßig verwendet, um Blackwell-Unterstützung bereitzustellen. Nutzer mit GPUs älter als Turing sollten die erste oder die Fallback-Boot-Option verwenden.
- **Einstellungen**: Tippen zum Klicken (Tap-to-Click) für X11-Sitzungen standardmäßig aktiviert.
- **udev**: `ntfs3` als Standardtreiber für NTFS-Partitionen verwenden.
- **game-performance**: Bildschirmschoner während des Spielens deaktiviert.
- **kernel-manager (sched-ext)**: Unterstützung für den Server-Modus hinzugefügt.
- **kernel**: Fehlerbehebungen für die AMD-Preferred-Core-Funktion hinzugefügt.
- **chwd**: Workaround für RTD3 wieder hinzugefügt.
- **Paket-Updates**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Fehlerbehebungen**:

- **chwd**: Problem behoben, bei dem Hybrid-Laptops mit Intel- und NVIDIA-Hardware ihre GPU in DaVinci Resolve nicht nutzen konnten.
- **glibc**: Fix für CVE-2025-0395 hinzugefügt.
- **kernel-manager**: Versucht nun, das vorgefertigte NVIDIA-Modul zu installieren, falls es für den Standard-Arch-Kernel verfügbar ist.
- **kernel-manager**: Zusätzliche Prüfung hinzugefügt, um ein Überschreiben des Wertes zu vermeiden, falls kein Modul verfügbar ist.

**Changelog für die Handheld-Edition:**

- **hooks**: Verwendung von nativ kompiliertem Proton wieder erlaubt.
- **Sonstiges**: Mehrere Updates und Fehlerbehebungen.

24.12
----

**Funktionen**:

- Kernel:
  - AutoFDO wird nun auf den Standard-Kernel `linux-cachyos` für alle verfügbaren Architekturen angewendet
    - **Hinweis**: Leistungsverbesserungen sind aufgrund aktueller Einschränkungen vorerst minimal. Das Zusammenführen von Profilen erfordert LLVM 19, und Propeller-Optimierung hängt davon ab. Wir erwarten, dass LLVM 19 und besser optimierte Profile gegen Ende des Jahres nach der Umstellung von Arch Linux auf LLVM 19 verfügbar sein werden
- chwd: Rusticl ist nun korrekt konfiguriert
- chwd: Fehlerprotokollierung bei Hook-Aufrufen verbessert
- chwd: Auswahl der VAAPI-Treiber behoben
- cachyos-settings: Ein Skript hinzugefügt, das das Ausführen von Anwendungen über Zink erleichtert
- Sysctl-Konfiguration: Mehrere Einstellungen überarbeitet und optimiert
- Kernel Manager: Unterstützung für `scx_loader` hinzugefügt, was natives Umschalten des Schedulers ermöglicht
- Installer: Bluetooth-Dienst ist nun standardmäßig aktiviert
- Netinstall:
  - `wireless-regdb` zu den installierten Paketen hinzugefügt
    - Dies konfiguriert die Verbindung für passende Kanäle und schaltet zusätzliche Kanäle frei, was potenziell die Internetgeschwindigkeit verbessert
    - **Hinweis**: Standardmäßig ist eine generische Region eingestellt; für optimale Leistung wird empfohlen, sie an deine Region anzupassen
- **Paket-Updates**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Fehlerbehebungen**

- Installer: Installationsprotokolle öffnen keine Debug-Terminalfenster mehr
- Partitionsverwaltung:
  - Korrekte `umask`-Einstellungen stellen sicher, dass `/boot` ohne ausreichende Berechtigungen nicht zugänglich ist
- Launch Installer: Internetverbindungsprüfungen wurden behoben

**Changelog für die Handheld-Edition:**

- Handheld-bezogene Pakete aktualisiert
- Problem bei der Verarbeitung von Energieprofilen behoben
- Unterstützung für WiFi 6 hinzugefügt

24.11
----

**Funktionen:**

- thp-shrinker: Den Wert von `max_ptes_none` für mit Nullen gefüllte Seiten auf 80 % gesetzt. Dies verringert den Speicherverbrauch bei `THP always`, während die gleiche Leistung erhalten bleibt
- NVIDIA: GSP-Firmware wird nun automatisch deaktiviert, wenn Nutzer selbst auf den proprietären Treiber wechseln
- chwd: NVIDIA: Der Dienst `nvidia-powerd` wird auf Laptops aktiviert, um die maximal verfügbare TDP zu erreichen
- proton-cachyos: DLSS Frame Generation funktioniert nun. Dies wird voraussichtlich künftig auch im Upstream-Proton funktionieren
- kernel: AMD Cache Optimizer wird nun angewendet. Nutzer mit Dual-X3D-CCD-CPUs können nun zwischen bevorzugten Frequenz- oder Cache-Kernen wechseln
- kernel: amd-pstate: Leistungsverbesserungen für `amd-pstate` auf Strix Point zurückportiert
- kernel: Upstream-Fixes für TDP-Probleme auf AMD-RDNA2- und RDNA3-GPUs hinzugefügt
- kernel: Timing-Fixes für Displays mit 5120x1440x240-Konfiguration hinzugefügt
- kernel: Experimenteller, per AutoFDO optimierter Kernel im Repository unter „linux-cachyos-autofdo“
- ISO: Prüfung hinzugefügt, ob der Nutzer die Handheld-Edition ausführt, und Warnung ausgegeben, wenn die Installation auf einem nicht unterstützten Gerät gestartet wird
- ISO: Prüfung hinzugefügt, ob der Nutzer die neueste ISO verwendet, und Warnung ausgegeben, falls nicht

**Fehlerbehebungen:**

- refind: Partitionierung: Vom 3-teiligen auf ein 2-teiliges Partitionslayout umgestellt
- netinstall: `kdeplasma-addons` zur Plasma-Installation hinzugefügt
- calamares: Problem beim Partitionieren mit einer Swap-Partition behoben

**Changelog für die Handheld-Edition:**

- Die Unterstützung für das ROG Ally X sollte verbessert worden sein

24.10
----

**Funktionen:**

- Paket-Updates: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Fehlerbehebungen:**

- sddm: Neueres `sddm` übernommen, um Anmeldungen in Wayland-Sitzungen zu beheben
- ISO: `xf86-video-amdgpu` hinzugefügt, um das Laden grafischer Sitzungen auf einigen Systemen zu beheben
- chwd: Neuinstallation von Profilen behoben

24.09
----

**Funktionen:**

- Pakete: Eine Reihe von Paketen wie LLVM, Clang, svt-av1 und nodejs mit PGO optimiert. Dies führte beispielsweise zu einem 10 % schnelleren Clang-Compiler
- Repository: Das Repository wird nun häufiger synchronisiert und aktualisiert, was zu noch geringerer Verzögerung führt. Das Synchronisationsintervall wurde von alle 3 Stunden auf stündlich verkürzt.
- Repository: Ab dem 27.09.2024 aktivieren Pakete, die mit `-fpic` kompiliert werden, automatisch `-fno-semantic-interposition`. Dies kann bei vielen Paketen eine Leistungssteigerung bewirken.
- zlib-ng: Wird nun als Ersatz für `zlib` verwendet
- sddm: Bei der KDE-Installation verwendet `sddm` nun standardmäßig Wayland als Compositor.
- cachyos-settings: NetworkManager verwendet nun `systemd-resolved` als Backend, was beim DNS-Caching hilft
- cachyos-settings: Verwendet `time.google.com` als Zeitserver, um Probleme mit der Zeitsynchronisation auf manchen Systemen zu vermeiden
- gcc: Fixes für das Tuning von `znver5` hinzugefügt
- gcc: Patches und Flags aus Clear Linux übernommen (Cherry-Pick)
- glibc: „evex“-Patches sowie Cherry-Picks aus Clear Linux hinzugefügt
- wiki: Das Wiki hat viele neue Ergänzungen und Überarbeitungen erhalten
- chwd: Geräteverwaltung vereinfacht
- chwd: Alle Profile sind nun speziell für PCI-Geräte ausgelegt
- chwd: `--autoconfigure` hinzugefügt, um die Treiberinstallation automatisch durchzuführen
- Paket-Updates: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Fehlerbehebungen:**

- Launch-Installer: Fixes hinzugefügt, um die Hardware-Uhr vor Beginn der Installation zu synchronisieren
- calamares: Fix zum Aushängen des Dateisystems nach der Installation hinzugefügt
- keyring: Bereinigt den Keyring und erstellt ihn vor dem Installationsstart neu; dies behebt seltene Keyring-Probleme
- sysctl: Core-Dumps wurden wieder aktiviert
- chwd: `libva-nvidia-driver` aus dem PRIME-Profil entfernt, um mögliche Konflikte zu verhindern und die Kompatibilität mit Software wie Spectacle zu verbessern
- cachyos-settings: Workaround für GNOME-Wayland-Abstürze hinzugefügt
- cachyos-fish/zsh-config: Wayland-spezifische Workarounds entfernt

**Changelog für die Handheld-Edition:**

- Ally/Ally X: HHD wurde durch `inputplumber` ersetzt, da `hhd` den Kernel-Treiber dafür nicht korrekt nutzt, was zu Problemen führt.
- Handheld-bezogene Pakete aktualisiert

24.08
----

**Funktionen:**

- chwd: NVIDIA verwendet nun standardmäßig das offene Modul für unterstützte Karten
- Desktop: COSMIC-Desktopumgebung zu den Installationsoptionen hinzugefügt
- NVIDIA: Der neueste 560-Beta-Treiber ist nun Standard; `egl-wayland` wurde gepatcht, um Abstürze in Firefox und anderen Anwendungen zu beheben
- Mirrors: CDN77 sponserte CachyOS Object Storage mit weltweitem Cache, was die Verbindungsgeschwindigkeiten für Nutzer deutlich verbessert
- Mirrors: CachyOS stellt nun einen eigenen Arch-Linux-Mirror bereit, um Synchronisationsprobleme zu vermeiden; dieser wird während der Installation zusammen mit Fallback-Mirrors als Standard festgelegt
- SecureBoot: Skript und Anleitung im Wiki für einfache Secure-Boot-Unterstützung eingeführt
- cachy-chroot: Automatisches Einhängen über `fstab` für vereinfachtes Chrooting hinzugefügt
- cachy-chroot: Unterstützung für LUKS-Verschlüsselung implementiert
- kernel-manager: Unterstützung zum Setzen von sched-ext-Flags in der sched-ext-Konfiguration hinzugefügt
- kernel-manager: Option zum Bauen von `nvidia-open` eingeführt
- kernel-manager: Option zum Merken der zuletzt verwendeten Einstellungen auf der Konfigurationsseite hinzugefügt
- Paket-Updates: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Fehlerbehebungen:**

- chwd: Verbesserung der PRIME-Profilerkennung basierend auf dem Gerätenamen
- chwd: RTD3-Workaround aufgrund von Problemen auf einigen Systemen entfernt
- cachyos-rate-mirrors: Bewertung der Mirrors beim Betrieb auf der Live-ISO deaktiviert
- cachy-chroot: Behebt einen Absturz, wenn eine Partition keinen gültigen Dateisystemtyp (`fstype`) oder keine gültige UUID hatte (z. B. Microsoft-Wiederherstellungspartition)
- calamares: Keyring-Initialisierung überarbeitet
- kernel-manager: Unterstützung zum Bauen benutzerdefinierter `pkgbase` mit aktivierten LTO-Kerneln und -Modulen behoben
- kernel-manager: Verzögerung bei der Passwortabfrage behoben
- ISO: `radeon.modeset=1` durch `amdgpu.modeset=1` für moderne GPUs ersetzt
- game-performance: Fehlschlag verhindert, wenn kein Profil verfügbar ist

**Changelog für die Handheld-Edition:**

- Geräteunterstützung: Unterstützung für das Ally X hinzugefügt, danke an Luke Jones
- libei: Unterstützung für `libei` implementiert, ersetzt `libextest`
- packagekit: Installation von `packagekit` blockiert, um Probleme bei System-Updates über Discover zu vermeiden
- Hook: `pacman`-Hook hinzugefügt, der mit nativ kompilierten Proton-Versionen in Konflikt steht, um potenzielle Probleme zu vermeiden
- `jupiter-fan-control`, `steamdeck-dsp` und Steam-Deck-Firmware aktualisiert

24.07
----

**Funktionen:**

- Repository: Einführung des Zen-4-optimierten Repositories, das für Zen4- und Zen5-CPUs verwendet wird
- ISO: Automatische Architekturprüfung für das Zen4/Zen5-Repository hinzugefügt
- chwd: GC-Unterstützung für AMD-GPUs hinzugefügt, was bei der Erkennung offiziell von ROCm unterstützter GPUs hilft
- chwd: Verwendet `libva-nvidia-driver` auf unterstützten Karten
- ksmctl: Werkzeug zum Aktivieren/Deaktivieren von KSM eingeführt: `ksmctl --enable`
- Kernel: Für den Kernel `linux-cachyos` ist nun ein Paket `linux-cachyos-dbg` verfügbar, das ein nicht gestripptes `vmlinux` für Debugging-Zwecke enthält
- Kernel: `amd cpb boost` ist nun verfügbar und `power-profiles-daemon` wurde gepatcht, sodass bei aktivem Profil „powersave“ der Boost auf AMD-CPUs deaktiviert wird
- Kernel: Energiespar-Patch für AMD-SoCs bei der Videowiedergabe hinzugefügt
- kernel-manager: Unterstützung zum Verwalten von sched-ext-Schedulern und Abrufen von Informationen über die GUI hinzugefügt
- Steam/Proton: Es gibt nun ein Skript „game-performance“, das zu den Steam-Startoptionen hinzugefügt werden kann
- power-profiles: Auf CPUs mit AMD-Pstate-Unterstützung wird die niedrigste lineare Frequenz nun höher angesetzt, was Latenz und 1%-Lows verbessern kann
- kwin: Backport für Tearing hinzugefügt und getestet. Unter NVIDIA funktioniert dies nur bei nativen Wayland-Anwendungen
- netinstall: Cutefish wurde als installierbare Desktopumgebung entfernt
- Mirrors: Österreich- und China-Mirror hinzugefügt; der China-Mirror wird von der TUNA University gehostet. Dies sollte vielen Nutzern aus China sehr helfen
- Paket-Updates: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Fehlerbehebungen:**

- ISO: `copytoram` auf `auto` statt `yes` gesetzt
- ISO: Standby-Modus auf der Live-ISO für Laptops behoben
- Launch Installer: Installiert das neueste `archlinux-keyring` vor Beginn der Installation, um Probleme beim Abrufen von `archlinux-keyring` im Chroot zu vermeiden
- Mirror-Bewertung: Bewertet bei der Installation nur Tier-1-Mirrors
- pacman.conf: Nicht genutztes Pacman-Repository entfernt
- cachy-chroot: Keine `.snapshot`-Subvolumes anzeigen
- Calamares: Das Modul „Preservefiles“ nicht verwenden, da Nutzer Probleme damit melden.

**Changelog für die Handheld-Edition:**

- Konfigurationsdatei zum Anwenden unterschiedlicher Skalierung hinzugefügt: `/home/$USER/.config/deckscale`
- Umschalten des Spielmodus robuster gemacht
- WLAN-/Bluetooth-Firmware für das Steam Deck aktualisiert
- Automatisches Einhängen für den Spielmodus implementiert
- `gamescope-session`-Anpassungen für Wine-CPU-Topologie, HDR und Hintergrundbeleuchtung hinzugefügt
- Auswahl der Bildwiederholrate behoben
- `jupiter-hw-support`, `steamdeck-dsp`, `jupiter-fan-control` und `gamescope-session-git` aktualisiert

24.06
----

**Funktionen:**

- chwd: Handheld-Hardwareerkennung eingeführt
- chwd: Unterstützung für T2-MacBooks eingeführt
- chwd: Erkennung von Netzwerktreibern hinzugefügt
- Installation: MacBook-T2-Unterstützung hinzugefügt
- ISO: `cachy-chroot` hinzugefügt. Dies ist ein Skript, das dem Nutzer beim Chrooten in das System hilft.
- ISO: Umstellung auf Microcode-Hooks; dies erfordert die neueste Ventoy-Version (1.0.98)
- ISO: `copytoram` aktiviert; dies muss nicht mehr deaktiviert werden, da wir keine Offline-Installation mehr anbieten
- Dateisystem: Btrfs ist nun das standardmäßig ausgewählte Dateisystem
- netinstall: `ufw` anstelle von `firewalld` verwenden
- Calamares: Branding-Folien aktualisiert
- Folien: An die neuesten Änderungen angepasst
- Paket-Updates: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Fehlerbehebungen:**

- Calamares: `umount`: Emergency wieder aktiviert
- Qtile: Multimedia-Tasten funktionieren nun korrekt
- NVIDIA: Erforderliche Dienste und Optionen für funktionierenden Standby unter Wayland aktiviert
- netinstall: `b43-fwcutter` aus der Installation entfernt
- netinstall: `hyprland-git` durch `hyprland` ersetzt
- netinstall: `linux-cachyos-lts` aus der Auswahl entfernt, um Probleme mit fehlenden Modulen zu vermeiden
- Calamares: Shellprocess: Mirror-Bewertung vor die Installation des Keyrings verschoben

**Changelog der experimentellen Handheld-Version:**

- Standardmäßig KDE Vapor Theme (SteamOS-Theme)
- Standard-Dateisystem: Btrfs
- Standard-Kernel: `linux-cachyos-deckify`
- SDDM verwendet nun Wayland
- Umgebungsvariable für HHD zur Verringerung der Latenz
- Kernel-Argumente hinzugefügt, um das Umschalten des Spielmodus zu verbessern
- Der Benutzername kann nun bearbeitet werden
- Die Hardwareerkennung konfiguriert und installiert erforderliche Pakete je nach verwendetem Gerät
- Maliit-Tastatur nutzt nun den dunklen Modus
- Valves `powerbuttond` für ordnungsgemäßen Standby
- Verknüpfungen können nun zu Steam hinzugefügt werden
- `scx-scheds` auf den neuesten Git-Commit aktualisiert, inklusive der neuesten Verbesserungen für den LAVD-Scheduler
- Automount zu `cachyos-handheld` hinzugefügt
- CachyOS kann nun Steam-Deck-BIOS-Updates auf dem Steam Deck durchführen

24.05
----

**Funktionen:**

- Dateisysteme: Bcachefs als Dateisystemoption eingeführt
- pacstrap: Erkennung hinzugefügt, ob Bcachefs verwendet wird, um die entsprechenden `bcachefs-tools` zu installieren
- CachyOS-AI-SDK: Neue Installationsoption eingeführt, die ein sofort einsatzbereites NVIDIA-SDK-Setup bietet
- CachyOS-Deckify: Variante für Handhelds (experimentell) bereitgestellt; siehe [hier](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) für weitere Details
- Btrfs: Automatisches Snapper für Snapshots, installierbar über die CachyOS-Hello-App.
- ISO: Offline-Installer entfernt
- Paket-Updates: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Fehlerbehebungen:**

- settings.conf: Hardwareerkennung vor `netinstall` verschoben
- pacstrap: `btrfs-assistant` statt `btrfs-assistant-git` verwenden
- plymouth: `plymouth`-Hook bei ZFS + Verschlüsselung entfernt
- ISO: Verschiedene Konfigurationsdateien für KDE hinzugefügt, um eine Bildschirmsperre während der Installation zu verhindern
- services-systemd: `fstrim.timer` korrekt aktivieren
- umount: Emergency deaktiviert, um Probleme bei der ZFS-Installation zu vermeiden
- shellprocess: Überreste der Offline-Installation bereinigen

24.04
----

**Funktionen:**

- Plymouth: `plymouth` für eine gestaltete Boot-Animation verwenden
- ISO: Zurück auf X11 gewechselt aufgrund von Problemen beim Einstellen des Tastaturlayouts in Calamares
- rEFInd: Neues Partitionierungslayout (getrenntes `/boot` und `/boot/efi`)
- netinstall: KDE: `xwaylandvideobridge` standardmäßig installieren
- netinstall: `lightdm` statt `ly` für verschiedene Desktopumgebungen verwenden aufgrund eines Fehlers in `ly`
- systemd-boot: `@saved` für `systemd-boot` verwenden, damit der zuletzt gewählte Boot-Eintrag gemerkt wird
- cachyos-keyring: Paket `cachyos-keyring` überarbeitet und einen `cachyos-trusted`-Keyring bereitgestellt
- ISO: ZSTD-19-Kompression für das `mkinitcpio`-Image der ISO verwenden
- Paket-Updates: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 und cachyos-settings 39-2

**Fehlerbehebungen:**

- Autologin: Autologin-Option in Kombination mit `sddm` behoben
- xz: Gepatchtes `xz`-Paket bereitgestellt
- libarchive: Commit eines bösartigen `xz`-Akteurs entschärft
- cachyos-settings: udev-Regel: `watermark_scale_factor` nicht auf 125 setzen, da dies den RAM-Verbrauch erheblich erhöht
- calamares: pacman-keyring: Einfachere Methode zur Integration des Keyrings in die Installation verwendet

24.03.1
----

**Funktionen:**

- netinstall: Zusätzliche Kernel aus der Netinstall-Auswahl entfernt, um Verwirrung bei Nutzern zu vermeiden. Andere benutzerdefinierte Kernel können über den Kernel Manager installiert werden
- Kernel Manager: NVIDIA-Module werden bei Erkennung automatisch installiert, auf Qt6 umgestellt, benutzerdefinierte Namen bei Verwendung der LTO-Option behoben
- Package Installer: Auf Qt6 umgestellt, für pacman 6.1 aktualisiert
- Paket-Updates: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Fehlerbehebungen:**

- NVIDIA: NVIDIA-Modul gepatcht, um `nvidia.drm.modeset` früher zu übernehmen und Probleme mit NVIDIA-Grafikkarten zu vermeiden
- rEFInd: Den LTS-Kernel nicht installieren, um Probleme zu vermeiden
- shellprocess: Das Verzeichnis des Live-Benutzers vollständig entfernen

24.03
----

**Funktionen:**

- ISO: Plasma 6 ist nun in der ISO enthalten und nutzt standardmäßig Wayland; die GNOME-ISO wurde eingestellt, um Verwirrung bezüglich Netinstall zu vermeiden
- Calamares: Auf Qt6 umgestellt
- refind: F2FS und ZFS inklusive LUKS2-Verschlüsselung als Option hinzugefügt
- Mirrors: Wir bieten nun 2 globale CDNs an. Eines wird bei Cloudflare R2 und eines bei Digital Ocean gehostet
- mirrorlist: Den Online-Installer direkt vom CDN abrufen, um eine schnellere Auslieferung zu ermöglichen
- initcpiocfg: Den neuen `microcode`-Hook zum frühen Laden des Microcodes verwenden
- Bootloader: Den Microcode nicht mehr über den Bootloader laden
- Paket-Updates: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Fehlerbehebungen:**

- pacstrap: Keine Konfigurationspakete installieren, um dem Nutzer eine sauberere Auswahl bei der Installation zu bieten
- shellprocess_pacman: Auch die bewerteten `cachyos-v4-mirrorlists` auf das Zielsystem kopieren

24.02
-----

**Funktionen:**

- refind: Layout von `/boot/efi` auf `/boot` geändert, um mehr Optionen für Dateisysteme und Verschlüsselung zu bieten
- Live-ISO: Live-ISO bereinigt und synchronisiert
- Launch Installer: Empfehlung für die Online-Installation hinzugefügt
- shell-configs: Option zum Deaktivieren von `fastfetch` beim Terminalstart sowie ein Alias „update“ hinzugefügt
- netinstall: `phonon-qt5-vlc` zu KDE hinzugefügt
- Paket-Updates: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Funktionen:**

- x86-64-v4: Automatische Erkennung und Aktivierung des Repositories bei der Installation
- linux-cachyos: Das `sched-ext`-Scheduler-Framework ist nun im Standard-Kernel enthalten
- xwayland: Explicit-Sync-Patches standardmäßig bereitgestellt
- Paket-Updates: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Fehlerbehebungen:**

- chwd: Bei NVIDIA-Karten der Ada-Lovelace-Generation werden die NVIDIA-Module direkt in das initramfs gepackt, um Probleme mit Early KMS zu vermeiden

23.12
-----

**Fehlerbehebungen:**

- zfs: `compatibility=grub` zu den Pool-Optionen hinzugefügt, um Kompatibilität sicherzustellen
- grub/xfs: Patch zu GRUB hinzugefügt für Kompatibilität mit dem neuen XFS-`bigtime`-Standard
- netinstall: `xdg-desktop-portal-hyprland` statt `xdg-desktop-portal-hyprland-git`

23.11
-----

**Funktionen:**

- nvidia: `nvidia`-Modul statt DKMS verwenden
- Calamares mit Upstream synchronisiert
- Paket-Updates: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Fehlerbehebungen:**

- nvidia-hook: `nvidia-hook` wieder hinzugefügt, um Probleme während der Installation mit dem neuen Modul zu vermeiden
- netinstall: Pakete aufgrund jüngster Änderungen an der KF5-Paketierung umbenannt
- netinstall: `xdg-desktop-portal-gnome` zur GNOME-Installation hinzugefügt

23.09
-----

**Funktionen:**

- systemd-boot: Standardmäßig LUKS2 verwenden
- netinstall: Eigene Kategorie für CachyOS-Pakete bereitgestellt
- Calamares mit Upstream synchronisiert
- Paket-Updates: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Fehlerbehebungen:**

- shellprocess_sdboot: Verwendung von „sudo“ beim Erzeugen der Boot-Einträge während der Installation vermeiden

23.08
-----

**Funktionen:**

- Calamares mit Upstream synchronisiert
- Paket-Updates: linux-cachyos 6.4.10, nvidia-utils 535.98

**Fehlerbehebungen:**

- Keyring wurde aktualisiert und funktioniert nun korrekt

23.07
-----

**Funktionen:**

- CachyOS-Settings enthält nun „bpftune“, das die Netzwerkeinstellungen je nach Nutzung automatisch optimiert
- CachyOS-Qtile-Settings: Komfortverbesserungen, bessere Symbole, ...
- Paket-Updates: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3

**Fehlerbehebungen:**

- `rate-mirrors` wurde behoben
- `chwd` (Hardwareerkennung) hat mehrere Fehlerbehebungen erhalten
- Installation proprietärer Treiber für Hybrid-Setups im Installer behoben
- Einfrieren von Calamares behoben, das in einigen seltenen Konfigurationen, hauptsächlich in VMs, auftrat
- Folien: Tippfehler auf Folie 6 behoben

23.06
-----

**Fehlerbehebungen:**

- Offline-Installation: Calamares behoben

23.05
-----

**Funktionen:**

- Layout der CachyOS-Git-Migration spiegelt sich nun in der Installation wider
- `chwd` (`mhwd`) hat mehrere Fehlerbehebungen erhalten
- Pacman: Wir haben eine Funktion hinzugefügt, die es ermöglicht, unseren Nutzern vor dem Aktualisieren eine Nachricht anzuzeigen
- Calamares wurde mit Upstream synchronisiert
- Paket-Updates: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Fehlerbehebungen:**

- netinstall: Kleinere Anpassungen aufgrund von Paketänderungen
- Folien: Folie 6 an die neuesten Änderungen angepasst

23.04
-----

**Funktionen:**

- Einführung der Qtile-Desktopumgebung
- Überarbeitetes `mhwd`: Neuimplementierung in Rust; vereinfachte Profile für GPUs und Netzwerkkarten; große Mengen alten Codes entfernt
- Paket-Updates: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Fehlerbehebungen:**

- f2fs: Mount-Option „atgc“ entfernt, da sie Probleme mit systemd verursacht

23.03.1
-------

**Funktionen:**

- Paket-Updates: linux-cachyos 6.2.7, cachy-browser 111.0

**Fehlerbehebungen:**

- Calamares mit dem Display-Manager `lightdm` aufgrund fehlerhafter Calamares-Upstream-Commits behoben
- Keyring-Problem bei der Offline-Installation behoben
- rEFInd: `linux-cachyos-lts` als Standard verwenden. Der aktuelle 6.2-Kernel scheint nicht gut mit rEFInd zusammenzuarbeiten

23.03
-----

**Neue Funktionen:**

- Bootloader rEFInd hinzugefügt
- Automatische NVIDIA-Treiberinstallation über MHWD
- Verschlüsselungsunterstützung für ZFS-Installationen
- Hyprland zur Netinstallation hinzugefügt
- CachyOS-KDE-Settings verwendet nun das KDE-Standardtheme, die CachyOS-Themes bleiben jedoch vorinstalliert und nutzbar
- Paket-Updates: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Das Bootloader-Modul von Calamares vollständig überarbeitet und verbessert
- Die ISO wird nun mit einem GPG-Schlüssel signiert
- MHWD verbessert und aktualisiert
- Calamares mit Upstream synchronisiert

**Fehlerbehebungen:**

- Die Option „Partition ersetzen“ bietet nun eine Dateisystemauswahl
- Tippfehler auf Folie 3 behoben
- `nouveau` wurde behoben und lädt das Modul nun korrekt
- MHWD: `modesetting` für Intel/ATI und Nouveau verwenden
- Den `zfs`-Hook aus `mkinitcpio` auf der Live-ISO entfernt, der Probleme beim Booten verursachte
- Du kannst das Update von unseren Mirrors auf SourceForge herunterladen.

23.02
-----

**Neue Funktionen:**

- Das Repository `cachyos-community-v3` wurde hinzugefügt
- Die Desktopumgebungen Budgie, MATE und LXDE wurden zur Netinstallation hinzugefügt
- `bluetooth.service` ist nun standardmäßig aktiviert
- F2FS und GRUB sind wieder aktiviert und funktionsfähig
- Paket-Updates: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Fehlerbehebungen:**

- `rate-mirrors` greift nun auf unbewertete Mirrors zurück, falls die Bewertung fehlschlägt
- `cachyos-rate-mirrors` hat ein längeres `fetch-mirrors-timeout`
- GitHub wurde zur `hosts`-Datei hinzugefügt, um Mirrorlist-Probleme zu vermeiden
- Boot-Einträge für BIOS wurden in Syslinux aktualisiert

23.01
-----

**Funktionen:**

- Calamares-Folien überarbeitet und aktualisiert
- UKUI-Desktopumgebung zur Netinstallation hinzugefügt
- Cinnamon-Desktopumgebung zur Netinstallation hinzugefügt
- Cmdline: `zswap` ist nun standardmäßig deaktiviert, da CachyOS standardmäßig ZRAM bereitstellt
- Calamares auf den neuesten Commit aktualisiert
- LLVM 15 wird nun standardmäßig ausgeliefert
- Paket-Updates: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI-Installer wurde aktualisiert

**Fehlerbehebungen:**

- Der Shellprocess `remove-ucode` wird nun auch bei der Offline-Installation ausgeführt
- `pamac` wurde aus dem Netinstall entfernt
- Die bewerteten CachyOS-Mirrors werden nun korrekt auf das Installationsziel kopiert
- `power-profile-daemon` wird nicht mehr standardmäßig aktiviert

22.12
-----

**Funktionen:**

- Neuer GRUB-Hintergrund im ISO-Bootloader
- `memtest` ist nun für UEFI-Systeme enthalten
- `CachyOS-sddm-theme` zur KDE-Installation hinzugefügt
- Automatisches Versionsskript beim Erstellen der ISO hinzugefügt
- Calamares auf den neuesten Commit aktualisiert
- Die Mirrors werden nun mit „cachyos-rate-mirrors“ bewertet, welches unsere und die Arch-Mirrors bewertet
- Paket-Updates: 6.1.1-Kernel, mesa 22.3.1, plasma 5.26.4, ...
- Die Kofuku-Desktopumgebung wurde entfernt
- Zusätzliche ISO mit enthaltenem LLVM 15 zur Unterstützung neuerer AMD-Karten

**Fehlerbehebungen:**

- Calamares bei Verwendung von GNOME als ISO behoben
- `zfshostid` funktioniert nun korrekt für die Offline- und Online-Installation
- Hook „kms“ zum `initcpiocfg`-Modul hinzugefügt, um den Arch-Linux-Standards zu entsprechen
- Und weitere ISO-Fehlerbehebungen

22.11
-----

**Funktionen:**

- Calamares und seine Konfiguration werden in einem Paket ausgeliefert
- Vollständige Bereinigung der Pakete im Netinstall
- Ein Modul hinzugefügt, das nicht benötigten Microcode automatisch entfernt
- Erforderlicher Arbeitsspeicher auf 2,5 GB gesenkt
- Pakete, die für Btrfs erforderlich sind, werden nun nur noch bei Btrfs installiert
- Calamares auf den neuesten Commit aktualisiert
- Der ISO-Bootloader hat nun ein Hintergrundbild
- Allgemeine Paket-Upgrades (mesa, Kernel, ...)
- `systemd-network` durch `networkmanager` ersetzt

**Fehlerbehebungen:**

- `qemu-quest-agent.service` wurde aus der ISO entfernt
- `copytoram` vollständig deaktiviert, da es die Offline-Installation kaputt macht
- `mkinitcpio.conf` wurde aktualisiert
- Und weitere ISO-Fehlerbehebungen

22.10
-----

**Funktionen:**

- Pacman verwendet nun `Architecture=auto` für x86-64-v3-Installationen, da wir einen Patch hinzugefügt haben, mit dem Pacman x86-64-v3 automatisch erkennt
- Pacman zeigt nun an, aus welchem Repository ein Paket installiert wurde
- Die Bootloader-Auswahl erkennt automatisch, ob EFI vorhanden ist; falls nicht, wird standardmäßig GRUB verwendet
- Die Swap-Auswahl wurde nun standardmäßig deaktiviert, da ZRAM automatisch dynamisch erzeugt wird
- Calamares auf den neuesten Commit aktualisiert
- Minimale RAM-Anforderung auf 4 GB festgelegt
- `cachyos-grub-theme` wurde entfernt

**Fehlerbehebungen:**

- SSD- und HDD-`fstab`-Erkennung wurde deaktiviert, bis ein Upstream-Fix vorliegt
- Doppeltes Btrfs-Subvolume wurde behoben
- Fehlenden Microcode zum ISO-GRUB-Bootloader hinzugefügt
- Einen Fallback-Bootmodus hinzugefügt, der kein `modeset` setzt (`nomodeset`)
- Und weitere ISO-Fehlerbehebungen

22.09
-----

**Funktionen:**

- Calamares befindet sich nun auf dem neuesten 3.3-Zweig. Dies bringt Fehlerbehebungen und neue Funktionen für Calamares
- Der TUI-Installer ist nun in der GUI-ISO enthalten; du kannst ihn mit „cachyos-installer“ verwenden
- Calamares erkennt nun automatisch, ob das Zieldateisystem auf einer SSD oder HDD liegt, und passt die `fstab`-Optionen entsprechend an
- NVIDIA für neuere GPUs (ab der 9xx-Serie) hat nun einen eigenen Boot-Eintrag, um Probleme mit Nouveau zu vermeiden
- `fstab`- und ZFS-Mount-Optionen wurden aktualisiert
- Firefox wird nicht mehr standardmäßig installiert, da `cachy-browser` standardmäßig installiert ist

**Fehlerbehebungen:**

- `cachyos-gaming-meta` wurde aus dem Netinstall-Modul entfernt, um Probleme während des Installationsvorgangs zu vermeiden
- Netinstall-Pakete wurden aktualisiert und haben einige Fehlerbehebungen erhalten
- OpenBox-Installation wurde behoben
- Übliche Übersetzungskorrekturen

22.07
-----

**Funktionen:**

- Bootloader-Auswahl: Nutzer können bei der Online-Installation nun zwischen GRUB und systemd-boot wählen
- Bei der Online-Installation wird nun immer das neueste Calamares installiert, was hilft, Fehlerbehebungen direkt auszuliefern
- Calamares verfügt nun über ein `mhwd`-Modul, das die benötigten Treiber automatisch installiert (freie Treiber)
- Calamares hat neue Bildfolien bei der Installation
- `fstab`- und ZFS-Mount-Optionen wurden aktualisiert
- HiDPI-Unterstützung

**Fehlerbehebungen:**

- Der Locales-Fehler in Calamares wurde behoben
- F2FS wurde für den GRUB-Bootloader entfernt, da es derzeit nicht funktioniert (Calamares-Problem); mit systemd-boot kann es weiterhin verwendet werden
- Calamares zeigt nun das richtige Standard-Dateisystem an
- GNOME-ISO wurde behoben
- Fehlende Pakete auf der Live-ISO für die Offline-Installation wurden hinzugefügt
- Btrfs-Swap-LUKS-Verschlüsselung wurde behoben
- Übliche Übersetzungskorrekturen

22.06
-----

Folgende bekannte Fehler wurden behoben:

- Installation schlug fehl, wenn eine generische CPU verwendet wurde
- KDE hängte ZFS-Partitionen automatisch ein, was dazu führte, dass die automatische Anmeldung in die ISO nicht mehr funktionierte

**Verbesserungen:**

- Die Firewall des Servers wurde korrigiert; Cloudflare blockierte Nutzer als „Bots“, was zu einem Fehler bei der Installation führte
- Theme-Unterstützung für GNOME, XFCE und OpenBox hinzugefügt
- Unser Wiki aktualisiert

**_CachyOS - Kernel - Manager_**
Außerdem freuen wir uns, unseren CachyOS-Kernel-Manager anzukündigen.
Dort hast du die Möglichkeit, den Kernel aus dem Repository zu installieren und außerdem über eine GUI deinen eigenen Kernel-Build zu konfigurieren, sodass du ihn ganz einfach an deine eigenen Bedürfnisse anpassen kannst.

Folgende Optionen kannst du für das Kompilieren eines Kernels auswählen:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA deaktiviert oder aktiviert
- KBUILD CFLAGS (-O3 oder -O2)
- `performance`-Governor als Standard festlegen
- BBR2 aktivieren
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodic, full)
- MQ-Deadline-I/O-Scheduler deaktivieren
- Kyber-I/O-Scheduler deaktivieren
- MG-LRU aktivieren oder deaktivieren
- DAMON aktivieren oder deaktivieren
- Speculative Page Fault aktivieren oder deaktivieren
- LRNG (Linux Random Number Generator) aktivieren oder deaktivieren
- Automatische Kernel-Optimierung anwenden (erkennt deine CPU-March automatisch)
- Kernel-Optimierung per Auswahl anwenden (du siehst eine Liste verschiedener CPU-Marches und kannst deine per Nummer auswählen)
- Debug deaktivieren (verringert die Größe des Kernels)
- nf cone aktivieren oder deaktivieren
- LTO aktivieren (Full, Thin, No)

22.05
-----

CachyOS wurde vor einem Jahr gegründet. Nach fast einem Jahr Entwicklung sind wir sehr stolz darauf, unser erstes stabiles Release des GUI-Installers anzukündigen.
Wir haben viel Zeit in Repository-Verwaltung, Kernel-Entwicklung, Infrastruktur, Theming usw. investiert und schließlich alles im CachyOS-GUI-Installer zusammengeführt.
Alle Funktionen, an denen wir gearbeitet und die wir in den Installer integriert haben, zielen darauf ab, den Nutzern ein vollständig anpassbares Erlebnis zu bieten.

Die spannendsten Änderungen sind, dass wir für die Online-Installation nun `pacstrap` verwenden, was eine vollkommen saubere installierte Umgebung liefert, und dass wir vollständige native Unterstützung für das ZFS-Dateisystem bieten.

Da Discord die Länge von Nachrichten begrenzt, findest du die vollständige Ankündigung hier:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Den Download findest du hier:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
