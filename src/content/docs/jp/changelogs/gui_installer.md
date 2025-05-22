---
title: GUI-Installer-Änderungsprotokolle
description: Änderungsprotokolle von Calamares und der GUI-Live-ISO
---
25.03
----

**Funktionen**:
- **Bootloader**: Unterstützung für Limine-Bootloader hinzugefügt
- **Bootloader**: Unterstützung für automatische Snapshots für Limine-Bootloader hinzugefügt
- **Samba**: Paket "cachyos-samba-settings" hinzugefügt, um die Einrichtung einer Samba-Freigabe zu vereinfachen
- **NVIDIA**: GSP-Firmware für das Closed-Source-NVIDIA-Modul wieder aktiviert
- **Kernel**: Unterstützung für den Asus Armoury-Treiber hinzugefügt
- **Secure Boot**: Verbessertes "sbctl-batch-sign"-Skript, um nur gewünschte Dateien zu signieren
- **udev**: Verwendung von ntfs3 als Standardtreiber für NTFS-Partitionen rückgängig gemacht
  - Info: Die Verwendung des NTFS3-Kernel-Treibers als Standard führte bei einigen Benutzern zu Problemen. Daher haben wir dies wieder rückgängig gemacht.
- **wine**: Wine und Wine-Staging standardmäßig jetzt auf WoW64 und NTSync
- **scx-manager**: Sched-ext-GUI-Manager aus dem Kernel-Manager in eine eigene Anwendung ausgelagert
- **Hardware-Unterstützung**: Unterstützung für RDNA4, RTX 5070 Ti und 5070 hinzugefügt.
- **Einstellungen**: DLSS Swapper-Unterstützung hinzugefügt - dies ist ein Skript, das automatisch die neueste DLSS-Version und das neueste Preset aktualisiert und verwendet
- **Paketaktualisierungen**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Fehlerbehebungen**:
- **initcpiocfg**: Modul "crc32c-intel" aus dem Hinzufügen zu mkinitcpio entfernt - Dies ist veraltet und verwendet jetzt standardmäßig das Modul "crc32c"
- **chwd**: T2 MacBook deaktiviert das Offloading des brcmfmac
- **chwd**: Installiere keinen NVIDIA 390.xx-Treiber für Laptops

25.02
----

**Funktionen**:
- **Kernel**:
  - Die Propeller-Optimierung wird jetzt auf den Standardkernel **linux-cachyos** für alle verfügbaren Architekturen angewendet.
    - **Hinweis**: In Kombination mit AutoFDO kann dies die Leistung je nach Arbeitslast um etwa 10 % verbessern.
- **NVIDIA**: Unterstützung für die Blackwell-Architektur hinzugefügt.
- **ISO**: Verwendung des nvidia-open-Moduls als Standard, um Blackwell-Unterstützung zu bieten. Benutzer mit GPUs, die älter als Turing sind, sollten die erste oder die Fallback-Bootoption verwenden.
- **Einstellungen**: Tippen zum Klicken für X11-Sitzungen standardmäßig aktiviert.
- **udev**: Verwende ntfs3 als Standardtreiber für NTFS-Partitionen.
- **game-performance**: Deaktiviert den Bildschirmschoner während des Spielens.
- **kernel-manager (sched-ext)**: Unterstützung für den Servermodus hinzugefügt.
- **kernel**: Korrekturen für die AMD Preferred Core-Funktion hinzugefügt.
- **chwd**: Workaround für RTD3 wieder hinzugefügt.
- **Paketaktualisierungen**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Fehlerbehebungen**:
- **chwd**: Ein Problem behoben, bei dem Hybrid-Laptops mit Intel- und NVIDIA-Hardware ihre GPU in DaVinci Resolve nicht verwenden konnten.
- **glibc**: Einen Fix für CVE-2025-0395 hinzugefügt.
- **kernel-manager**: Versucht, das vorgefertigte NVIDIA-Modul zu installieren, falls es für den Standard-Arch-Kernel verfügbar ist.
- **kernel-manager**: Eine zusätzliche Prüfung hinzugefügt, um zu vermeiden, dass der Wert überschrieben wird, falls ein Modul nicht verfügbar ist.

**Änderungsprotokoll für die Handheld Edition:**
- **hooks**: Die Verwendung von nativ kompiliertem Proton wieder zugelassen.
- **misc**: Mehrere Aktualisierungen und Fehlerbehebungen.

24.12
----

**Funktionen**:
- Kernel:
  - AutoFDO wird jetzt auf den Standardkernel `linux-cachyos` für alle verfügbaren Architekturen angewendet
    - **Hinweis**: Die Leistungsverbesserungen sind aufgrund aktueller Einschränkungen vorerst minimal. Das Zusammenführen von Profilen erfordert LLVM 19, und die Propeller-Optimierung hängt davon ab. Wir gehen davon aus, dass LLVM 19 und stärker optimierte Profile bis Ende des Jahres verfügbar sein werden, nachdem Arch Linux LLVM 19 übernommen hat
- chwd: Rusticl ist jetzt korrekt konfiguriert
- chwd: verbesserte Fehlerprotokollierung während Hooks-Aufrufen
- chwd: feste VAAPI-Treiberauswahl
- cachyos-settings: Ein Skript hinzugefügt, um das Ausführen von Anwendungen über Zink zu erleichtern
- Sysctl-Konfiguration: Mehrere Einstellungen überarbeitet und optimiert
- Kernel Manager: Unterstützung für `scx_loader` hinzugefügt, wodurch das native Umschalten des Schedulers ermöglicht wird
- Installer: Der Bluetooth-Dienst ist jetzt standardmäßig aktiviert
- Netinstall:
  - `wireless-regdb` zu den installierten Paketen hinzugefügt
    - Dies konfiguriert die Verbindung so, dass sie geeignete Kanäle verwendet und zusätzliche Kanäle freischaltet, wodurch die Internetgeschwindigkeit möglicherweise verbessert wird
    - **Hinweis**: Standardmäßig wird eine generische Region festgelegt. Es wird empfohlen, diese für eine optimale Leistung an Ihre Region anzupassen
- **Paketaktualisierungen**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Fehlerbehebungen**
- Installer: Installationsprotokolle erzeugen keine Debug-Terminalfenster mehr
- Partitionsverwaltung:
  - Richtige `umask`-Einstellungen stellen sicher, dass `/boot` ohne ausreichende Berechtigungen nicht zugänglich ist
- Installer starten: Internetverbindungsprüfungen wurden behoben

**Änderungsprotokoll Handheld Edition:**
- Handheld-bezogene Pakete aktualisiert
- Problem mit der Energieprofilverwaltung behoben
- Unterstützung für WiFi 6 hinzugefügt

24.11
----

**Funktionen:**
- thp-shrinker: Setze den Wert max_ptes_none auf 80 % für mit Nullen gefüllte Seiten. Dies reduziert die Speichernutzung, wenn THP immer verwendet wird, während die gleiche Leistung beibehalten wird
- NVIDIA: Die GSP-Firmware wird jetzt automatisch deaktiviert, wenn die Benutzer selbst auf den geschlossenen Treiber umschalten
- chwd: NVIDIA: nvidia-powerd-Dienste werden für Laptops aktiviert, um die maximal verfügbare TDP zu erreichen
- proton-cachyos: Die DLSS-Frame-Generierung funktioniert jetzt. Dies wird voraussichtlich auch in Zukunft im Upstream-Proton funktionieren
- kernel: AMD Cache Optimizer wird jetzt angewendet. Benutzer mit Dual-x3d-CCD-CPUs können jetzt wählen, ob Frequenz- oder Cache-Kerne bevorzugt werden sollen
- kernel: amd-pstate: AMD-Pstate-Leistungskorrekturen für Strix Point zurückportiert
- kernel: Upstream-Korrekturen für die TDP-Probleme auf AMD RDNA2- und RDNA3-GPUs hinzugefügt
- kernel: Timing-Korrekturen für Displays mit 5120x1440x240-Konfiguration hinzugefügt
- kernel: Experimenteller AutoFDO-optimierter Kernel im Repository unter "linux-cachyos-autofdo"
- ISO: Überprüfung hinzugefügt, ob der Benutzer die Handheld Edition ausführt, und warnt dann, wenn er die Installation auf einem nicht unterstützten Gerät startet
- ISO: Überprüfung hinzugefügt, ob der Benutzer die neueste ISO verwendet, wenn nicht, wird er gewarnt

**Fehlerbehebungen:**
- refind: Partitionierung: von 3-Wege-Partitionslayout auf 2-Wege geändert
- netinstall: kdeplasma-addons zur Plasma-Installation hinzugefügt
- calamares: Ein Problem beim Partitionieren mit einer Swap-Partition behoben

**Änderungsprotokoll Handheld Edition:**
- Die Rog Ally X-Unterstützung sollte verbessert worden sein

24.10
----

**Funktionen:**
- Paketaktualisierungen: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Fehlerbehebungen:**
- sddm: Neueres sddm eingespielt, um Wayland-Sitzungsanmeldungen zu beheben
- ISO: xf86-video-amdgpu hinzugefügt, um das Laden der grafischen Sitzung auf einigen Setups zu beheben
- chwd: Neuinstallation von Profilen behoben

24.09
----

**Funktionen:**
- Pakete: Eine Reihe von Paketen mit PGO optimiert, wie LLVM, Clang, svt-av1 und nodejs. Dies führte beispielsweise zu einem 10 % schnelleren Clang-Compiler.
- Repository: Das Repository wird jetzt häufiger synchronisiert und aktualisiert, was bedeutet, dass es noch weniger Verzögerung gibt. Das Synchronisationsintervall wurde von alle 3 Stunden auf jede Stunde verkürzt.
- Repository: Ab dem 27.09.2024 aktivieren Pakete, die mit -fpic kompiliert wurden, automatisch -fno-semantic-interposition. Dies kann eine Leistungsverbesserung für viele Pakete bringen.
- zlib-ng: Wird jetzt als Ersatz für zlib verwendet
- sddm: Bei der KDE-Installation verwendet sddm jetzt standardmäßig Wayland als Compositor. # Bereitstellung von Migrationsänderungen im Release-Post
- cachyos-settings: NetworkManager verwendet jetzt systemd-resolved als Backend, was beim DNS-Caching hilft
- cachyos-settings: Verwenden Sie time.google.com als Timesync-Server, um Probleme mit der Timesync bei einigen Setups zu vermeiden
- gcc: Korrekturen für das Tuning von znver5 hinzugefügt
- gcc: Cherry-Picked Patches und Flags von Clear Linux
- glibc: "evex"-Patches sowie Cherry-Picks von Clear Linux hinzugefügt
- wiki: Das Wiki hat viele neue Ergänzungen und Überarbeitungen erhalten
- chwd: Vereinfachte Gerätehandhabung
- chwd: Alle Profile sind jetzt speziell für PCI-Geräte konzipiert
- chwd: --autoconfigure hinzugefügt, um die Treiberinstallation automatisch zu verarbeiten
- Paketaktualisierungen: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Fehlerbehebungen:**
- Launch-Installer: Korrekturen hinzugefügt, um die Hardwareuhr vor dem Start der Installation zu synchronisieren
- calamares: Fix für das Aushängen des Dateisystems nach der Installation hinzugefügt
- keyring: Bereinigen Sie den Keyring und erstellen Sie ihn neu, bevor Sie mit der Installation beginnen; dies behebt seltene Keyring-Probleme
- sysctl: Core Dumps wurden wieder aktiviert
- chwd: `libva-nvidia-driver` aus dem PRIME-Profil entfernt, um potenzielle Konflikte zu vermeiden und die Kompatibilität mit Software wie Spectacle zu verbessern
- cachyos-settings: Workaround für GNOME Wayland-Abstürze hinzugefügt
- cachyos-fish/zsh-config: Wayland-spezifische Eigenheiten entfernt

**Änderungsprotokoll für die Handheld Edition:**
- Ally/Ally X: HHD wurde durch inputplumber ersetzt, da hhd den Kernel-Treiber nicht korrekt verwendet, was zu Problemen führt.
- Handheld-bezogene Pakete aktualisiert

24.08
----

**Funktionen:**
- chwd: NVIDIA verwendet jetzt standardmäßig das offene Modul für unterstützte Karten
- Desktop: Cosmic Desktop Environment zu den Installationsoptionen hinzugefügt
- NVIDIA: Der neueste 560 Beta-Treiber ist jetzt der Standard; egl-wayland gepatcht, um Abstürze in Firefox und anderen Anwendungen zu beheben
- Mirrors: CDN77 sponsert CachyOS mit Object Storage mit einem weltweiten Cache, wodurch die Verbindungsgeschwindigkeiten für Benutzer erheblich verbessert werden
- Mirrors: CachyOS bietet jetzt einen eigenen Arch Linux-Mirror, um Synchronisierungsprobleme zu vermeiden, der während der Installation zusammen mit Fallback-Mirrors als Standard festgelegt wird
- SecureBoot: Skript und Tutorial im Wiki für einfache Secure Boot-Unterstützung eingeführt
- cachy-chroot: Auto-Mount über fstab für vereinfachtes Chrooting hinzugefügt
- cachy-chroot: Unterstützung für LUKS-Verschlüsselung implementiert
- kernel-manager: Unterstützung für das Festlegen von sched-ext-Flags in der sched-ext-Konfiguration hinzugefügt
- kernel-manager: Option zum Erstellen von nvidia-open eingeführt
- kernel-manager: Option hinzugefügt, um die zuletzt verwendeten Optionen auf der Konfigurationsseite zu speichern
- Paketaktualisierungen: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Fehlerbehebungen:**
- chwd: Verbesserte PRIME-Profilerkennung basierend auf dem Gerätenamen
- chwd: RTD3-Workaround aufgrund von Problemen bei einigen Setups entfernt
- cachyos-rate-mirrors: Spiegel-Ranking deaktiviert, wenn es auf Live-ISO ausgeführt wird
- cachy-chroot: Behebt einen Absturz, wenn eine Partition keinen gültigen Fstype oder UUID hatte (z. B. Microsoft Recovery Partition)
- calamares: Keyring-Initialisierung refaktorisiert
- kernel-manager: Unterstützung für das Erstellen von benutzerdefiniertem pkgbase mit aktivierten LTO-Kerneln und -Modulen behoben
- kernel-manager: Verzögerung der Passwortabfrage behoben
- ISO: radeon.modeset=1 durch amdgpu.modeset=1 für moderne GPUs ersetzt
- game-performance: Fehler verhindert, wenn das Profil nicht verfügbar ist

**Änderungsprotokoll für die Handheld Edition:**
- Geräteunterstützung: Unterstützung für Ally X hinzugefügt, dank Luke Jones
- libei: Unterstützung für libei implementiert, ersetzt libextest
- packagekit: Packagekit-Installation blockiert, um Probleme mit Systemaktualisierungen über Discover zu verhindern
- hook: Pacman-Hook hinzugefügt, um mit nativ kompilierten Proton-Versionen zu kollidieren, wodurch potenzielle Probleme vermieden werden
- Jupiter-Fan-Control, steamdeck-dsp und Steam Deck-Firmware aktualisiert

24.07
----

**Funktionen:**
- Repository: Einführung eines für Zen 4 optimierten Repositorys, das für Zen4- und Zen5-CPUs verwendet wird
- ISO: Automatische Architekturprüfung für das Zen4/Zen5-Repository hinzufügen
- chwd: GC-Unterstützung für AMD-GPUs hinzugefügt, dies hilft bei der Erkennung offiziell von ROCm unterstützter GPUs
- chwd: Verwenden Sie libva-nvidia-driver auf unterstützten Karten
- ksmctl: Tool zum Aktivieren/Deaktivieren von KSM eingeführt: ksmctl --enable
- kernel: Für den "linux-cachyos"-Kernel ist jetzt ein "linux-cachyos-dbg"-Paket verfügbar, das ein ungestripptes vmlinux für Debugging-Zwecke enthält
- kernel: amd cpb boost ist jetzt verfügbar und der Power-Profiles-Daemon ist gepatcht, wenn das "powersave"-Profil eingestellt ist, wird der Boost auf AMD-CPUs deaktiviert
- kernel: Energiesparpatch für AMD SoCs für die Videowiedergabe hinzugefügt
- kernel-manager: Unterstützung für die Verwaltung von Sched-Ext-Schedulern und das Abrufen von Informationen über die GUI hinzugefügt
- steam/proton: Es gibt jetzt ein "game-performance"-Skript, das zu den Startoptionen von Steam hinzugefügt werden kann
- power-profiles: Auf AMD Pstate-unterstützten CPUs wird die niedrigste lineare Frequenz jetzt höher eingestellt, was die Latenz und die 1%-Tiefs verbessern kann
- kwin: Backport für Tearing hinzugefügt, dies wurde getestet. Auf NVIDIA funktioniert es nur bei nativen Wayland-Anwendungen
- netinstall: Cutefish wurde als installierbare Desktop-Umgebung entfernt
- Mirrors: Austria und China Mirror hinzugefügt, der China Mirror wird von der TUNA University gehostet. Dies sollte vielen Benutzern aus China helfen
- Paketaktualisierungen: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Fehlerbehebungen:**
- ISO: Copytoram auf Auto anstelle von Ja setzen
- ISO: Schlaf auf Live-ISO für Laptops behoben
- Launch Installer: Installieren Sie den neuesten Archlinux-Keyring, bevor die Installation beginnt, um Probleme beim Abrufen des Archlinux-Keyrings im Chroot zu vermeiden
- Mirrors Ranking: Nur Tier 1 Mirror's zur Installationszeit einstufen
- pacman.conf: Nicht verwendetes Pacman-Repository entfernen
- cachy-chroot: Keine .snapshot-Subvolumes anzeigen
- Calamares: Verwenden Sie nicht das Modul "Preservefiles", da Benutzer Probleme damit melden.

**Änderungsprotokoll für die Handheld Edition:**
- Konfigurationsdatei zum Anwenden einer anderen Skalierung hinzugefügt, '/home/$USER/.config/deckscale
- GameMode-Umschaltung robuster machen
- Wifi/Bluetooth-Firmware für Steam Deck aktualisiert
- Auto Mount für GameMode implementiert
- Gamescope-Session-Eigenheiten für Wine CPU-Topologie, HDR und Hintergrundbeleuchtung hinzugefügt
- Aktualisierungsratenauswahl behoben
- Jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git aktualisiert

24.06
----

**Funktionen:**
- chwd: Einführung der Hardwareerkennung für Handheld-Geräte
- chwd: Einführung der T2 MacBook-Unterstützung
- chwd: Netzwerktreibererkennung hinzufügen
- Installation: MacBook T2-Unterstützung hinzugefügt
- ISO: Cachy-Chroot hinzufügen. Dies ist ein Skript, das dem Benutzer hilft, in das System zu chrooten.
- ISO: Wechsel zu Microcode Hooks; dies erfordert die Verwendung der neuesten Ventoy-Version (1.0.98)
- ISO: Copytoram aktivieren; dies muss nicht mehr deaktiviert werden, da wir die Offline-Installation nicht mehr anbieten
- Dateisystem: BTRFS ist jetzt das standardmäßig ausgewählte Dateisystem
- netinstall: Verwenden Sie ufw anstelle von firewalld
- Calamares: Branding-Folien aktualisieren
- Folien: Für die neuesten Änderungen aktualisiert
- Paketaktualisierungen: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Fehlerbehebungen:**
- Calamares: umount: Notfall wieder aktivieren
- Qtile: Multimedia-Steuerelemente funktionieren jetzt korrekt
- NVIDIA: Erforderliche Dienste und Optionen für funktionierenden Schlaf unter Wayland aktivieren
- netinstall: B43-fwcutter von der Installation entfernen
- netinstall: Hyprland-git durch Hyprland ersetzen
- netinstall: Linux-cachyos-lts aus der Auswahl entfernen, um Probleme mit fehlenden Modulen zu vermeiden
- Calamares: Shellprocess: Spiegel-Ranking vor der Installation des Keyrings verschieben

**Änderungsprotokoll von der experimentellen Handheld-Version:**
- Standardmäßig KDE Vapor Theme (SteamOS Theme)
- Standarddateisystem: BTRFS
- Standardkernel: linux-cachyos-deckify
- SDDM verwendet jetzt Wayland
- Umgebungsvariable für HHD zur Reduzierung der Latenz
- Kernel-Argumente hinzugefügt, um das Game Mode Switching-Verhalten zu verbessern
- Der Benutzername kann jetzt bearbeitet werden
- Die Hardwareerkennung konfiguriert und installiert die erforderlichen Pakete je nach verwendetem Gerät
- Die Mallit-Tastatur verwendet jetzt den Dark Mode
- Valve's Powerbuttond für ordnungsgemäßes Schlafen
- Verknüpfungen können jetzt zu Steam hinzugefügt werden
- Scx-Scheds auf den neuesten Git-Commit aktualisiert, der die neuesten Verbesserungen für den LAVD-Scheduler bietet
- Automount zu cachyos-handheld hinzugefügt
- CachyOS kann jetzt Steam Deck BIOS-Updates auf dem Steam Deck durchführen

24.05
----

**Funktionen:**
- Dateisysteme: Einführung von Bcachefs als Dateisystemoption
- pacstrap: Fügt Erkennung hinzu, wenn Bcachefs verwendet wird, und installiert die entsprechenden Bcachefs-Tools
- CachyOS-AI-SDK: Einführung einer neuen Installationsoption zur Bereitstellung eines OOB NVIDIA SDK Setups
- CachyOS-Deckify: Bietet eine Variante für Handhelds (experimentell), siehe [hier](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) für weitere Details
- BTRFS: Automatisches Snapper für Snapshots, kann über die CachyOS Hello App installiert werden.
- ISO: Offline-Installer wird entfernt
- Paketaktualisierungen: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Fehlerbehebungen:**
- settings.conf: Verschieben der Hardwareerkennung vor die Netinstall-Installation
- pacstrap: Verwenden von btrfs-assistant anstelle von btrfs-assistant-git
- plymouth: Entfernen des Plymouth-Hooks bei ZFS + Verschlüsselung
- ISO: Hinzufügen verschiedener Konfigurationsdateien für KDE, um eine Bildschirmsperre während der Installation zu vermeiden
- services-systemd: Korrektes Aktivieren von fstrim.timer
- umount: Deaktivieren von Emergency, um Probleme bei der ZFS-Installation zu vermeiden
- shellprocess: Bereinigen von Überresten der Offline-Installation

24.04
----

**Funktionen:**
- Plymouth: Verwenden von Plymouth, um eine themenbezogene Boot-Animation bereitzustellen
- ISO: Rückkehr zu X11 aufgrund von Problemen beim Festlegen des Tastaturlayouts in Calamares
- rEFInd: Neues Partitionierungslayout (separates /boot und /boot/efi)
- netinstall: KDE: Installiert standardmäßig xwaylandvideobridge
- netinstall: Verwenden von lightdm anstelle von ly für verschiedene Desktop-Umgebungen aufgrund eines Fehlers in ly
- systemd-boot: Verwenden von @saved für systemd-boot, damit es sich den zuvor ausgewählten Booteintrag merken kann
- cachyos-keyring: Refaktorierung des cachyos-keyring-Pakets und Bereitstellung eines cachyos-trusted Keyrings
- ISO: Verwenden von ZSTD 19-Komprimierung für das mkinitcpio-Image der ISO
- Paketaktualisierungen: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 und cachyos-settings 39-2

**Fehlerbehebungen:**
- Autologin: Behebung der Autologin-Option bei Verwendung mit sddm
- xz: Bereitstellung eines gepatchten xz-Pakets
- libarchive: Abschwächung des Commits des bösartigen xz-Akteurs
- cachyos-settings: udev-Regel: Setzen Sie watermark_scale_factor nicht auf 125, da dies die RAM-Auslastung erheblich erhöht
- calamares: pacman-keyring: Verwenden einer einfacheren Methode zur Integration des Keyrings in die Installation

24.03.1
----

**Funktionen:**
- netinstall: Entfernen zusätzlicher Kernel in der Netinstall-Auswahl, um Verwirrung bei den Benutzern zu vermeiden. Andere benutzerdefinierte Kernel können über den Kernel Manager installiert werden
- Kernel Manager: NVIDIA-Module werden bei Erkennung automatisch installiert, Rebased für QT6, feste benutzerdefinierte Namen bei Verwendung der LTO-Option
- Package Installer: Rebased auf QT6, aktualisiert für pacman 6.1
- Paketaktualisierungen: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Fehlerbehebungen:**
- NVIDIA: Gepatchtes NVIDIA-Modul, um den Besitz von nvidia.drm.modeset früher zu übernehmen, um Probleme mit NVIDIA-Grafiken zu vermeiden
- Refind: Installieren Sie den LTS-Kernel nicht, um Probleme zu vermeiden
- shellprocess: Entfernen Sie das liveusers-Verzeichnis vollständig

24.03
----

**Funktionen:**
- ISO: Plasma 6 wird jetzt in der ISO ausgeliefert und verwendet Wayland als Standard, GNOME ISO wurde entfernt, um Verwirrung über Netinstall zu vermeiden
- Calamares: Rebased für QT6
- refind: Hinzufügen von f2fs und zfs als Option einschließlich luks2-Verschlüsselung
- Mirrors: Wir bieten jetzt 2 globale CDNs an. Eines wird von Cloudflare R2 gehostet und eines von Digital Ocean
- mirrorlist: Abrufen des Online-Installers direkt von CDN, um eine schnellere Bereitstellung zu ermöglichen
- initcpiocfg: Verwenden des neuen Microcode-Hooks zum frühen Laden des Ucode
- bootloader: Laden Sie den Microcode nicht mehr mit dem Bootloader
- Paketaktualisierungen: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Fehlerbehebungen:**
- pacstrap: Installieren Sie keine Konfigurationspakete, um dem Benutzer eine sauberere Auswahl der Installation zu ermöglichen
- shellprocess_pacman: Kopieren Sie auch die gerankten cachyos-v4-Mirrorlisten in das Ziel

24.02
-----

**Funktionen:**
- refind: Ändern des Layouts von /boot/efi in /boot, um mehr Optionen für Dateisysteme und Verschlüsselung bereitzustellen
- Live-ISO: Bereinigung und Synchronisierung der Live-ISO
- Launch Installer: Hinzufügen einer Empfehlung für die Online-Installation
- shell-configs: Hinzufügen einer Option zum Deaktivieren von Fastfetch beim Starten des Terminals und Hinzufügen eines "Update"-Alias
- netinstall: Hinzufügen von phonon-qt5-vlc zu kde
- Paketaktualisierungen: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Funktionen:**
- x86-64-v4: Automatische Erkennung und Aktivierung des Repositorys bei der Installation
- linux-cachyos: Das sched-ext-Scheduler-Framework wird jetzt im Standardkernel bereitgestellt
- xwayland: Bereitstellung expliziter Synchronisierungspatches als Standard
- Paketaktualisierungen: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Fehlerbehebungen:**
- chwd: Für Ada Lovelace Nvidia-Karten werden die Nvidia-Module direkt in die Initramfs gepackt, um Probleme mit dem frühen KMS zu vermeiden

23.12
-----

**Fehlerbehebungen:**
- zfs: Hinzufügen von compatibility=grub zu den Pool-Optionen, um die Kompatibilität sicherzustellen
- grub/xfs: Hinzufügen eines Patches zu grub, um die Kompatibilität mit dem neuen xfs bigtime-Standard zu gewährleisten
- netinstall: xdg-desktop-portal-hyprland anstelle von xdg-desktop-portal-hyprland-git

23.11
-----

**Funktionen:**
- nvidia: Verwenden des Nvidia-Moduls anstelle von dkms
- Calamares mit Upstream synchronisiert
- Paketaktualisierungen: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Fehlerbehebungen:**
- nvidia-hook: Nvidia-Hook wieder hinzugefügt, um Probleme bei der Installation mit dem neuen Modul zu vermeiden
- netinstall: Pakete wurden aufgrund der letzten Änderungen an der KF5-Paketierung umbenannt
- netinstall: xdg-desktop-portal-gnome wurde zur GNOME-Installation hinzugefügt

23.09
-----

**Funktionen:**
- systemd-boot: Standardmäßig luks2
- netinstall: Bereitstellung einer eigenen Kategorie für CachyOS-Pakete
- Calamares mit Upstream synchronisiert
- Paketaktualisierungen: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Fehlerbehebungen:**
- shellprocess_sdboot: Vermeiden Sie die Verwendung von "sudo", wenn die Booteinträge während des Installationsprozesses generiert werden

23.08
-----

**Funktionen:**
- Calamares mit Upstream synchronisiert
- Paketaktualisierungen: linux-cachyos 6.4.10, nvidia-utils 535.98

**Fehlerbehebungen:**
- Keyring wurde aktualisiert und funktioniert jetzt korrekt


23.07
-----

**Funktionen:**
- CachyOS-Settings enthält jetzt "bpftune", das die Netzwerkeinstellungen je nach Nutzung automatisch anpasst
- CachyOS-Qtile-Settings: Quality of Life-Änderungen, bessere Icons, ...
- Paketaktualisierungen: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Fehlerbehebungen:**
- rate-mirrors wurde behoben
- chwd (Hardwareerkennung) hat mehrere Korrekturen erhalten
- feste Installation von unfreien Treibern für Hybrid-Setup im Installer
- feste Calamares-Freezes, die in einigen seltenen Konfigurationen, hauptsächlich VM, auftraten
- Slides: Folie 6 Tippfehler behoben

23.06
-----

**Fehlerbehebungen:**
- Offline-Installation: Calamares beheben

23.05
-----

**Funktionen:**
- Das CachyOS Git-Migrationslayout wird jetzt in der Installation widergespiegelt
- chwd (mhwd) hat mehrere Korrekturen erhalten
- Pacman: Wir haben eine Funktion hinzugefügt, die es ermöglicht, unseren Benutzern vor dem Aktualisieren eine Nachricht zukommen zu lassen
- Calamares wurde mit Upstream synchronisiert
- Paketaktualisierungen: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Fehlerbehebungen:**
- netinstall: Minimale Korrekturen aufgrund von Paketänderungen
- Slides: Folie 6 wurde aktualisiert, um die neuesten Änderungen widerzuspiegeln

23.04
-----

**Funktionen:**

- Einführung der Qtile-Desktop-Umgebung
- Überarbeitetes mhwd: Rust-Rewrite; Vereinfachte Profile für GPUs und Netzwerkkarten; Entfernung von altem Code
- Paketaktualisierungen: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Fehlerbehebungen:**

- f2fs: Entfernen Sie die Mount-Optionen "atgc", da sie Probleme mit systemd haben

23.03.1
-------

**Funktionen:**

- Paketaktualisierungen: linux-cachyos 6.2.7, cachy-browser 111.0

**Fehlerbehebungen:**

- Calamares wurde mit dem Lightdm-Displaymanager aufgrund fehlerhafter Calamares-Upstream-Commits behoben
- Das Problem mit dem Offline-Installations-Keyring wurde behoben
- Refind: Verwenden Sie linux-cachyos-lts als Standard. Der aktuelle 6.2 scheint nicht gut mit Refind zusammenzuarbeiten

23.03
-----

**Neue Funktionen:**

- Refind Bootloader hinzugefügt
- Automatische Nvidia-Treiberinstallation mit MHWD
- Verschlüsselungsunterstützung für die ZFS-Installation
- Hyprland zur Netinstallation hinzugefügt
- CachyOS-KDE-Einstellungen verwenden jetzt das KDE-Standarddesign, aber die CachyOS-Designs sind weiterhin vorinstalliert und können verwendet werden
- Paketaktualisierungen: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Das Bootloader-Calamares-Modul wurde komplett überarbeitet und verbessert
- Das ISO wird jetzt mit einem GPG-Schlüssel signiert
- MHWD wurde verbessert und aktualisiert
- Calamares mit Upstream synchronisiert

**Fehlerbehebungen:**

- Die Option "Partition ersetzen" bietet jetzt eine Dateisystemauswahl
- Tippfehler in Folie 3 behoben
- nouveau wurde repariert und lädt jetzt das Modul ordnungsgemäß
- MHWD: Verwende Modesetting für INTEL/ATI und Nouveau
- Der ZFS-Hook wurde aus mkinitcpio auf dem Live-ISO entfernt, was beim Booten Probleme verursachte
- Sie können das Update von unseren Spiegeln auf SourceForge herunterladen.

23.02
-----

**Neue Funktionen:**

- Das cachyos-community-v3-Repository wurde hinzugefügt
- Budgie, Mate und LXDE Desktop-Umgebungen wurden zur Netinstallation hinzugefügt
- Bluetooth.service ist jetzt standardmäßig aktiviert
- F2FS und grub sind wieder aktiviert und funktionieren
- Paketaktualisierungen: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Fehlerbehebungen:**

- Rate-mirrors greift jetzt auf nicht gerankte Spiegel zurück, wenn die Bewertung fehlschlägt
- cachyos-rate-mirrors hat ein längeres Fetch-Mirrors-Timeout
- Github wurde zu den Hosts hinzugefügt, um Mirrorlist-Probleme zu vermeiden
- Boot-Einträge für BIOS wurden in syslinux aktualisiert


23.01
-----

**Funktionen:**

- Calamares-Folien wurden überarbeitet und aktualisiert
- UKUI Desktop Enviroment wurde zur Netinstallation hinzugefügt
- Cinnamon Desktop Enviroment wurde zur Netinstallation hinzugefügt
- Cmdline: zswap ist jetzt standardmäßig deaktiviert, da CachyOS standardmäßig zram bereitstellt
- Calamares auf den neuesten Commit aktualisiert
- LLVM 15 wird jetzt standardmäßig ausgeliefert
- Paketaktualisierungen: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI-Installer wurde aktualisiert

**Fehlerbehebungen:**

- remove-ucode shellprocess wird jetzt auch bei der Offline-Installation ausgeführt
- pamac wurde aus der Netinstall entfernt
- Die gerankten Cachyos-Spiegel werden jetzt korrekt in das Installationsziel kopiert
- power-profile-daemon wird nicht mehr standardmäßig aktiviert


22.12
-----

**Funktionen:**

- Neuer GRUB-Hintergrund im ISO-Bootloader
- memtest ist jetzt für UEFI-Systeme enthalten
- CachyOS-sddm-theme wurde zur KDE-Installation hinzugefügt
- Automatisches Versionsskript beim Erstellen des ISO hinzugefügt
- Calamares auf den neuesten Commit aktualisiert
- Die Spiegel werden jetzt mit "cachyos-rate-mirros" gerankt, das unsere Spiegel und die Arch-Spiegel rankt
- Paketaktualisierungen: 6.1.1 Kernel, mesa 22.3.1, plasma 5.26.4,...
- Die Kofuku Desktop Enviroment wurde entfernt
- Zusätzliches ISO mit llvm 15 enthalten, um Unterstützung für neuere AMD-Karten zu bieten


**Fehlerbehebungen:**

- Calamares wurde bei Verwendung von GNOME als ISO repariert
- zfshostid funktioniert jetzt ordnungsgemäß für die Offline- und Online-Installation
- "kms"-Hook zum initcpiocfg-Modul hinzugefügt, um den Archlinux-Standards zu folgen
- Und weitere ISO-Fixes


22.11
-----

**Funktionen:**

- Calamares und seine Konfiguration werden in einem Paket ausgeliefert
- Vollständige Bereinigung der Pakete in der Netinstall
- Ein Modul hinzugefügt, das automatisch den nicht benötigten Ucode entfernt
- Benötigter RAM auf 2,5 GB reduziert
- Pakete, die für btrfs benötigt werden, werden jetzt nur für btrfs installiert
- Calamares auf den neuesten Commit aktualisiert
- Der ISO-Bootloader hat jetzt einen Hintergrund
- Allgemeine Paketaktualisierungen (mesa, kernel, ...)
- systemd-network durch networkmanager ersetzt


**Fehlerbehebungen:**

- qemu-quest-agent.service wurde aus dem ISO entfernt
- copytoram wurde vollständig deaktiviert, es unterbricht die Offline-Installation
- mkinitcpio.conf wurde aktualisiert
- Und weitere ISO-Fixes


22.10
-----

**Funktionen:**

- Pacman verwendet jetzt Architecture=auto für die x86-64-v3-Installation, da wir einen Patch hinzugefügt haben, der Pacman x86-64-v3 automatisch erkennt
- Pacman zeigt jetzt an, aus welchem Repo ein Paket installiert wurde
- Bootloader-Auswahl erkennt automatisch, ob EFI vorhanden ist, wenn nicht, wird standardmäßig Grub verwendet
- Swap-Auswahl wurde jetzt standardmäßig deaktiviert, da Zram automatisch dynamisch generiert wird
- Calamares auf den neuesten Commit aktualisiert
- Minimale RAM-Anforderung wurde auf 4 GB festgelegt
- cachyos-grub-theme wurde entfernt

**Fehlerbehebungen:**

- SSD- und HDD-Fstab-Erkennung wurde deaktiviert, bis ein Upstream-Fix vorhanden ist
- Doppeltes BTRFS-Subvolume wurde behoben
- Fehlender Microcode zum ISO-Grub-Bootloader hinzugefügt
- Einen Fallback-Bootmodus hinzugefügt, der kein Modeset setzt (nomodeset)
- Und weitere ISO-Fixes


22.09
-----

**Funktionen:**

- Calamares ist jetzt auf dem neuesten 3.3-Branch. Es bringt Fehlerbehebungen und neue Funktionen für Calamares
- Der TUI-Installer ist jetzt im GUI-ISO enthalten, Sie können ihn mit "cachyos-installer" verwenden
- Calamares erkennt jetzt automatisch, ob das Ziel-Dateisystem eine SSD oder HDD ist und passt die Fstab-Optionen daran an
- Nvidia für die neuesten GPUs (ab 9xx) hat jetzt einen eigenen Boot-Eintrag, um Probleme mit Nouveau zu vermeiden
- Fstab- und ZFS-Mount-Optionen wurden aktualisiert
- FireFox wird nicht mehr standardmäßig installiert, da Cachy-Browser standardmäßig installiert ist

**Fehlerbehebungen:**

- cachyos-gaming-meta wurde aus dem Netinstall-Modul entfernt, um Probleme beim Installationsprozess zu vermeiden
- Netinstall-Pakete wurden aktualisiert und haben einige Fehlerbehebungen erhalten
- OpenBox-Installation wurde behoben
- Übliche Übersetzungsfehler behoben


22.07
-----

**Funktionen:**

- Bootloader-Auswahl: Der Benutzer kann jetzt bei der Online-Installation zwischen Grub und Systemd-Boot wählen
- Bei der Online-Installation wird jetzt immer das neueste Calamares installiert, was hilft, Fehlerbehebungen "in der Luft" durchzuführen
- Calamares hat jetzt ein MHWD-Modul, das automatisch die benötigten Treiber installiert (freie Treiber)
- Calamares hat neue Bildfolien bei der Installation
- Fstab- und ZFS-Mount-Optionen wurden aktualisiert
- HiDPI-Unterstützung

**Fehlerbehebungen:**

- Der Locales-Bug in Calamares wurde behoben
- F2FS wurde für den Grub-Bootloader entfernt, da er derzeit nicht funktioniert (Calamares-Problem), er kann weiterhin mit Systemd-Boot verwendet werden
- Calamares zeigt jetzt das korrekte Standard-Dateisystem an
- Gnome ISO wurde behoben
- Fehlende Pakete im Live-ISO wurden für die Offline-Installation hinzugefügt
- Btrfs-Swap-Luksverschlüsselung wurde behoben
- Übliche Übersetzungsfehler behoben

22.06
-----

Folgende bekannte Fehler wurden behoben:

- Installation fehlgeschlagen, wenn eine generische CPU verwendet wurde
- KDE hat automatisch ZFS-Partitionen gemountet, was dazu führte, dass die automatische Anmeldung in die ISO nicht mehr funktionierte

**Verbesserungen:**

- Die Firewall des Servers wurde korrigiert, Cloudflare blockierte Benutzer als "Bots", was dann zu einem Fehler bei der Installation führte
- Theming-Unterstützung für Gnome, XFCE, OpenBox hinzugefügt
- Unser Wiki wurde aktualisiert

**_CachyOS - Kernel - Manager_**
Wir freuen uns auch, unseren CachyOS-Kernel-Manager anzukündigen.
Dort haben Sie die Möglichkeit, den Kernel aus dem Repo zu installieren und mit einer GUI Ihren eigenen Kernel-Build zu konfigurieren, was es sehr einfach macht, ihn an seine eigenen Bedürfnisse anzupassen.

Folgende Optionen können Sie für eine Kernel-Kompilierung auswählen:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA deaktiviert oder aktiviert
- KBUILD CFLAGS (-O3 oder -O2)
- Performance Governor als Standard festlegen
- BBR2 aktivieren
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- Tickless (idle, perodic, full)
- MQ-Deadline I/O Scheduler deaktivieren
- Kyber I/O Scheduler deaktivieren
- MG-LRU aktivieren oder deaktivieren
- DAMON aktivieren oder deaktivieren
- Spekulative Seitenfehler aktivieren oder deaktivieren
- LRNG (Linux Random Number Generator) aktivieren oder deaktivieren
- Kernel automatische Optimierung anwenden (Erkennt automatisch Ihren CPU-March)
- Kernel-Optimierung anwenden (Sie sehen eine Liste verschiedener CPU-Marches und können mit einer Nummer Ihre auswählen)
- Debug deaktivieren (reduziert die Größe des Kernels)
- nf cone aktivieren oder deaktivieren
- LTO aktivieren (Full, Thin, No)


22.05
-----

CachyOS wurde vor einem Jahr gegründet. Nach fast einem Jahr Entwicklungszeit sind wir sehr stolz darauf, unsere erste stabile Version des GUI-Installers anzukündigen.
Wir haben viel Zeit in die Untersuchung von Repo-Management, Kernel-Entwicklung, Infrastruktur, Theming usw. investiert und diese schließlich alle in den CachyOS GUI-Installer integriert.
Alle Funktionen, an denen wir gearbeitet und die wir in den Installer implementiert haben, versuchen lediglich, den Benutzern ein vollständig anpassbares Erlebnis zu bieten.

Die aufregendsten Änderungen sind, dass wir jetzt für die Online-Installation pacstrap verwenden, das dann eine vollständig saubere installierte Umgebung bietet, und dass wir eine vollständige native Unterstützung für das ZFS-Dateisystem bieten.

Da Discord die Länge der Nachrichten einschränkt, finden Sie die vollständige Ankündigung hier:

https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/

Download finden Sie hier:
https://mirror.cachyos.org/ISO/kde/220522/
https://sourceforge.net/projects/cachyos-arch/
