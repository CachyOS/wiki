---
title: Dateisysteme
description: Beschreibung und Empfehlungen für die verfügbaren Dateisysteme. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS bietet 5 verschiedene Dateisysteme an, damit der Benutzer das für seine Bedürfnisse am besten geeignete auswählen kann. Im Folgenden werden die Vor- und Nachteile sowie Empfehlungen für jedes Dateisystem erläutert. Jedes Dateisystem wird mit den erforderlichen Programmen/Werkzeugen auf CachyOS vorinstalliert geliefert.

:::note
BTRFS ist das standardmäßige und empfohlene Dateisystem für CachyOS. Wählen Sie es, wenn Sie sich unsicher sind.
:::

## XFS

XFS ist ein Journaling-Dateisystem, das von Silicon Graphics, Inc. entwickelt wurde. Es wurde 1993 erschaffen, 2001 auf Linux portiert und wird heute von den meisten Linux-Distributionen unterstützt.

### Vorteile

- Schnell, XFS wurde ursprünglich mit Blick auf Geschwindigkeit und extreme Skalierbarkeit entwickelt.
- Zuverlässig, XFS nutzt mehrere Technologien, um Datenkorruption zu verhindern.
- Widerstandsfähig gegen Fragmentierung aufgrund seiner Extent-basierten Natur und der verzögerten Zuweisungsstrategie.

### Nachteile

- Kann nicht verkleinert werden.

### Userspace-Programm

Das Paket, das die Userspace-Tools zur Verwaltung von XFS-Dateisystemen enthält, ist `xfsprogs`.

### Empfehlung

XFS ist das empfohlene Dateisystem für Benutzer, die keine fortgeschrittenen Funktionen benötigen und einfach ein schnelles und zuverlässiges Dateisystem wünschen.

## BTRFS

BTRFS ist ein modernes Copy-on-Write(COW)-Dateisystem, das 2007 entwickelt und 2013 im Linux-Kernel für stabil erklärt wurde. Es wird breit unterstützt und ist hauptsächlich für seinen fortschrittlichen Funktionsumfang bekannt.

### Vorteile

- Transparente Komprimierung. BTRFS unterstützt das transparente Komprimieren von Dateien, um erhebliche Speicherplatzersparnisse ohne Benutzereingriff zu ermöglichen. CachyOS wird standardmäßig mit ZSTD-Komprimierung auf Stufe 3 ausgeliefert.
- Snapshot-Funktionalität. BTRFS nutzt seine COW-Natur, um die Erstellung von Snapshots von Subvolumes zu ermöglichen, die sehr wenig tatsächlichen Speicherplatz beanspruchen.
- Subvolume-Funktionalität, die eine größere Kontrolle über das Dateisystem ermöglicht.
- Kann vergrößert oder verkleinert werden.
- Sehr schnelle Entwicklung.

### Nachteile

- Erfordert manchmal Defragmentierung oder Balancing.
- Schlechter auf rotierenden Festplatten aufgrund der oben erwähnten Fragmentierung.

### Userspace-Programm

Das Btrfs-Userspace-Programmpaket ist `btrfs-progs`.

### Subvolume-Layout

CachyOS bietet von Haus aus ein Subvolume-Layout, um eine einfache Snapshot-Funktionalität zu ermöglichen.

- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Empfehlung

BTRFS wird für Benutzer empfohlen, die Snapshot-/Backup-Funktionalität und transparente Komprimierung wünschen.

## EXT4

EXT4 (fourth extended filesystem) ist das am häufigsten verwendete Linux-Dateisystem. EXT4 wurde 2008 im Linux-Kernel als stabil eingestuft.

### Vorteile

- Sehr verbreitet, was einfachen Zugang zu einer Fülle von Ressourcen ermöglicht.
- Zuverlässig. EXT4 hat eine nachgewiesene Erfolgsbilanz als sehr zuverlässiges Dateisystem.
- Kann vergrößert oder verkleinert werden.

### Nachteile

- Basiert auf einer alten Codebasis.
- Es fehlen viele der fortschrittlichen Funktionen, die andere Dateisysteme bieten.

### Userspace-Programme

Das Paket zur Verwaltung von ext4 ist `e2fsprogs`.

### Empfehlung

EXT4 wird für Benutzer empfohlen, die das einfachste und am häufigsten verwendete Dateisystem wünschen.

## ZFS

ZFS ist ein fortschrittliches Dateisystem, das ursprünglich 2005 von Sun Microsystems entwickelt wurde. ZFS hat viele Funktionen, ist aber unter der CDDL lizenziert, was bedeutet, dass es nicht in den Linux-Kernel aufgenommen werden kann und ein separates Modul installiert werden muss.

:::caution
Verwenden Sie keinen Echtzeit-Kernel zusammen mit ZFS, da er aufgrund von Lizenzproblemen nicht kompatibel ist.
:::

### Vorteile

- Geteilter Speicher (zpool)
- Snapshots mit COW
- Komprimierung
- Raid-Z-Unterstützung
- ARC-Cache ermöglicht wahnsinnig schnelle Lesezeiten bei häufig aufgerufenen Dateien.

### Nachteile

- Sehr kompliziert in der Anwendung und im Verständnis aufgrund von Funktionen wie zpool und ARC.
- ARC benötigt viel RAM, um effektiv zu sein.
- Nicht im Linux-Kernel enthalten und daher von einem Drittanbieter-Kernelmodul (OpenZFS) abhängig.
- Inkompatibel mit Echtzeit-Preemption.

### Erforderliche Tools

'ZFS-Module' CachyOS stellt für jede Kernel-Version ein vorkompiliertes zfs-Modul zur Verfügung.
`zfs-utils` für die Userspace-Programme.

### Empfehlung

ZFS sollte nur von fortgeschrittenen Benutzern verwendet werden, die seine fortschrittlichen Funktionen wie geteilten Speicher oder den ARC-Cache nutzen möchten.

## F2FS

F2FS (Flash-Friendly File System) ist ein Flash-Dateisystem, das ursprünglich von Samsung für den Linux-Kernel entwickelt wurde. F2FS wurde speziell für den NAND-Flash entwickelt, der in modernen Speichermedien verwendet wird.

### Vorteile

- Entwickelt mit Blick auf die Schonung von Flash-Speicher.
- Transparente Komprimierung zur Reduzierung von Schreibvorgängen (die Speicherplatzersparnis ist für den Benutzer derzeit nicht nutzbar).
- Schneller als andere Dateisysteme wie EXT4.
- Besseres Wear-Leveling, was die Lebensdauer von NAND-Flash weiter verlängert.

### Nachteile

- Kann nicht verkleinert werden.
- Die Platzersparnis durch Komprimierung kann derzeit nicht vom Benutzer genutzt werden. Dies könnte in Zukunft hinzugefügt werden.
- Relativ schwacher fsck (Dateisystem-Check).
- Ein Downgrade auf einen Kernel, der älter ist als die Version, die das Dateisystem erstellt hat, kann zu Problemen führen.

### Userspace-Programme

Das Hauptprogramm für f2fs ist `f2fs-tools`.

### Empfehlung

F2FS wird nur für Benutzer empfohlen, die die Lebensdauer ihres NAND-Flash-Speichers maximieren möchten.

## BcacheFS

Bcachefs ist ein fortschrittliches neues Dateisystem für Linux, mit einem Schwerpunkt auf Zuverlässigkeit und Robustheit und dem kompletten Satz an Funktionen, die man von einem modernen Dateisystem erwartet.

:::caution[ACHTUNG]
Bcachefs wird noch als experimentell betrachtet und kann Probleme aufweisen.
:::

### Vorteile

- Copy-on-Write (CoW) - wie BTRFS oder ZFS
- Komprimierung
- Caching, Datenplatzierung
- Replikation
- Skalierbar

### Nachteile

- Experimentell
- Die Einrichtung kann kompliziert sein

## Kurz gesagt

Verwenden Sie das Standard-Dateisystem **BTRFS**, da es als stabil gilt und viele nützliche Funktionen bietet (Snapshots, Komprimierung usw.). Verwenden Sie **XFS** oder **EXT4** für ein einfaches
und schnelles Dateisystem.
