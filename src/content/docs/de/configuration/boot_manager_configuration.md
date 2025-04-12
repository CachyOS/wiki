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

## Mehr erfahren

- [loader.conf Manual Page](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Konfiguration des Bootmanagers](https://www.rodsbooks.com/refind/configfile.html)
- [GRUB Manual: Konfiguration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
