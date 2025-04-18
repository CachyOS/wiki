---
title: Bootmanager-Konfiguration
description: Konfiguriere die Einstellungen des Bootmanagers und übergebe Kernelparameter an die Kommandozeile
---

## systemd-boot

systemd-boot hat zwei Arten von Konfigurationsdateien: eine für systemd-boot selbst in `/boot/loader/loader.conf` und eine für jeden
einzelnen Kernel-Eintrag in `/boot/loader/entry`.

### Loader-Konfiguration

In dieser Konfigurationsdatei kannst du den Standardeintrag und das Timeout von systemd-boot ändern.

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # Diese Option konfiguriert die Auflösung der Konsole.
```

### Kernel-Kommandozeilen-Konfiguration

Wir stellen ein Tool zur einfacheren Konfiguration von systemd-boot bereit: [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
Einer der Vorteile dieses Tools ist die globale Kernel-Kommandozeilen-Konfiguration. Die Konfigurationsdatei für `sdboot-manage` befindet sich in `/etc/sdboot-manage.conf`.
Bearbeite die Zeile `LINUX_OPTIONS= ` in `/etc/sdboot-manage.conf`, um Kernelparameter zu ändern.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```

Nachdem du Änderungen vorgenommen hast, generiere alle systemd-boot-Einträge mit dem folgenden Befehl neu:

```shell
❯ sudo sdboot-manage gen
```

## rEFInd

Wie [systemd-boot](/de/configuration/boot_manager_configuration#systemd-boot) hat auch rEFInd zwei Konfigurationsdateien. `refind.conf` in
`boot/efi/EFI/refind` dient hauptsächlich dazu, das Verhalten von rEFInd zu ändern, während `/boot/refind_linux.conf` zur Verwaltung deiner Boot-Optionen dient.
`refind.conf` enthält ausführliche Kommentare, die alle Optionen erklären.

### Kernel-Kommandozeilen-Konfiguration

Um Kernelparameter an die Kommandozeile zu übergeben, ändere "Boot using default options" in `/boot/refind_linux.conf`.

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Änderungen an beiden Konfigurationsdateien werden sofort wirksam. Es ist nicht erforderlich, einen Befehl zum "Speichern" der Änderungen auszuführen.

## GRUB

Im Gegensatz zu [systemd-boot](/de/configuration/boot_manager_configuration#systemd-boot) und [rEFInd](/de/configuration/boot_manager_configuration#refind) hat
GRUB nur eine Konfigurationsdatei in `/etc/default/grub`. Diese Datei enthält eine recht gute Dokumentation, die erklärt, was
jede Option bewirkt.

### Ausblenden des GRUB-Bootmenüs

Um das GRUB-Menü auszublenden, setze einfach die folgenden Optionen entsprechend:

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Drücke ESC, um zum GRUB-Prompt zu gelangen. Von hier aus kannst du `normal` oder `exit` ausführen, um zum bekannten GRUB-Bootmenü zurückzukehren.

### Kernel-Kommandozeilen-Konfiguration

Um Kernelparameter mit GRUB an die Kommandozeile zu übergeben, müssen wir `GRUB_CMDLINE_LINUX_DEFAULT` in `/etc/default/grub` bearbeiten.

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Jedes Mal, wenn wir die GRUB-Konfigurationsdatei ändern, müssen wir die Konfiguration mit dem folgenden Befehl neu erstellen:

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Limine
Limine ist ein moderner Bootloader, der für seine einfache Konfiguration bekannt ist. Diese Anleitung behandelt die Grundlagen, um Ihnen den Einstieg zu erleichtern.

Die Konfiguration erfolgt hauptsächlich in `/boot/limine.conf` (oder manchmal in der EFI-Systempartition) für Menüeinstellungen und in `/etc/default/limine` für Kernel-Parameter.

### Konfiguration des Bootmenüs

Diese Datei steuert das Verhalten und das Aussehen des Bootmenüs. Änderungen hier werden sofort nach dem Speichern wirksam – es sind keine zusätzlichen Befehle erforderlich.

* **Timeout:** Legt fest, wie viele Sekunden Limine wartet, bevor der Standardeintrag automatisch gebootet wird.
  ```shell
  # /boot/limine.conf

  timeout: 5
  ```
* **Standardeintrag:** Gibt an, welcher Menüeintrag standardmäßig gebootet wird. Die Einträge sind ab 1 nummeriert. Wenn nicht festgelegt, ist der Standardwert 1.
  ```shell
  # /boot/limine.conf

  default_entry: 2 # Standardmäßig den zweiten Eintrag booten
  ```
  :::tipp
  Wenn `default_entry` auf ein Verzeichnis verweist (z. B. `/+CachyOS`), wird der automatische Start deaktiviert. Um einen Eintrag innerhalb eines Verzeichnisses automatisch zu starten, muss `default_entry` direkt auf die Nummer dieses spezifischen Eintrags verweisen.
  :::

**Beispiel (`/boot/limine.conf`):**

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Verweist direkt auf den unten stehenden 'linux-cachyos'-Eintrag

/+CachyOS        # Eintrag 1: Ein Verzeichnis (verwenden Sie /+, um standardmäßig zu erweitern)
//linux-cachyos  # Eintrag 2: Der tatsächlich bootfähige Eintrag
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Grundlegende Kernel-Parameter
    module_path: boot():/initramfs-linux-cachyos.img
```

:::hinweis
`boot():/` bezieht sich auf das Stammverzeichnis des Boot-Laufwerks.
:::

### Theming

Sie können das Erscheinungsbild des Limine-Bootmenüs anpassen:

* **Hintergrundbild:** Legen Sie ein Hintergrundbild fest. Unterstützte Formate sind BMP, PNG und JPEG.
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Optionen: 'stretched' (gestreckt), 'tiled' (gekachelt), 'centered' (zentriert)
  backdrop: 000000           # Hintergrundfarbe (RRGGBB Hex), wenn Stil 'centered' ist
  ```
* **Schriftarten:** Verwenden Sie eine [benutzerdefinierte Schriftartdatei](https://github.com/viler-int10h/vga-text-mode-fonts) und passen Sie deren Größe an.
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Skaliert die Schriftgröße, nützlich für hochauflösende Displays
  ```
* **Farben:** Ändern Sie die Text- und Hintergrundfarben des Terminals.
  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Beispiel: Halbtransparentes Schwarz (AARRGGBB)
  # Andere Farboptionen wie term_foreground usw. sind verfügbar.
  ```

### Konfiguration der Kernel-Kommandozeile

Unter CachyOS werden Kernel-Einträge im Limine-Bootmenü **automatisch verwaltet**. Wenn Sie Kernel installieren oder entfernen, verwendet der `limine-mkinitcpio-hook` im Hintergrund das `limine-entry-tool`-Dienstprogramm, um die Booteinträge zu aktualisieren.

Obwohl die Einträge automatisch verwaltet werden, können Sie die **Kernel-Parameter** (auch als Kernel-Kommandozeile bekannt) konfigurieren, die beim Booten an den Kernel übergeben werden.

1. **Konfigurationsdatei bearbeiten:** Ändern Sie die `KERNEL_CMDLINE`-Variablen in `/etc/default/limine`. Sie können Standardparameter für alle Kernel oder spezifische Parameter für bestimmte Kernelnamen (z. B. `linux-cachyos`) festlegen.
   ```shell
   # /etc/default/limine

   # Standardparameter für die meisten Kernel
   KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

   # Spezifische Parameter für den 'linux-cachyos'-Kernel
   KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

   # Parameter für Fallback-Einträge (falls generiert)
   # KERNEL_CMDLINE[fallback]="..."
   ```
2. **Änderungen anwenden:** Nach dem Speichern von `/etc/default/limine` müssen Sie Ihre Initramfs-Images neu generieren und die Limine-Einträge aktualisieren, um die neuen Kernel-Parameter anzuwenden. Führen Sie den folgenden Befehl aus:
   ```bash
   sudo limine-mkinitcpio
   ```
   Dieser Befehl löst den `mkinitcpio`-Prozess aus, der den `limine-mkinitcpio-hook` beinhaltet. Dadurch wird sichergestellt, dass Ihre Änderungen in `/etc/default/limine` in die Booteinträge unter `/boot/limine.conf` übernommen werden.

## Mehr erfahren

- [loader.conf Manual Page](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Konfiguration des Bootmanagers](https://www.rodsbooks.com/refind/configfile.html)
- [GRUB Manual: Konfiguration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Offizielle Limine-Konfigurationsdokumentation](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [limine-entry-tool-Projekt](https://gitlab.com/Zesko/limine-entry-tool)
