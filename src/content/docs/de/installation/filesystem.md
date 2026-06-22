---
title: Dateisysteme
description: Beschreibung und Empfehlungen für die verfügbaren Dateisysteme. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS bietet 5 verschiedene Dateisysteme an, damit du das auswählen kannst, was am besten zu deinen Bedürfnissen passt. Im Folgenden werden die Vor- und Nachteile sowie Empfehlungen für jedes Dateisystem erläutert. Jedes Dateisystem wird mit den erforderlichen Anforderungen/Dienstprogrammen auf CachyOS vorinstalliert geliefert.

:::note
BTRFS ist das standardmäßige und empfohlene Dateisystem für CachyOS. Wähl es, wenn du dir unsicher bist.
:::

## XFS

XFS ist ein Journaling-Dateisystem, das von Silicon Graphics, Inc. erstellt und entwickelt wurde. Es wurde 1993 entwickelt, 2001 auf Linux portiert und wird heute von den meisten Linux-Distributionen unterstützt.

### Vorteile

- Bei der Entwicklung von XFS standen von Anfang an Geschwindigkeit und extreme Skalierbarkeit im Vordergrund.
- Schnell, XFS wurde ursprünglich auf Geschwindigkeit und extreme Skalierbarkeit ausgelegt.
- Zuverlässig, XFS nutzt verschiedene Technologien, um Datenkorruption zu verhindern.
- Widerstandsfähig gegen Fragmentierung aufgrund seiner Extent-basierten Natur und der verzögerten Zuweisungsstrategie.

### Nachteile

- Kann nicht verkleinert werden.

### Userspace-Dienstprogramm

Das Paket, das die Userspace-Tools zur Verwaltung von XFS-Dateisystemen enthält, ist `xfsprogs`.

### Empfehlung

XFS ist das empfohlene Dateisystem für Leute, die keine erweiterten Funktionen benötigen und einfach nur ein schnelles und zuverlässiges Dateisystem wollen.

## BTRFS

BTRFS ist ein modernes Copy-on-Write(COW)-Dateisystem, das 2007 entwickelt und 2013 im Linux-Kernel als stabil erklärt wurde. Es wird weithin unterstützt und ist vor allem für seine erweiterten Funktionen bekannt.

### Vorteile

- Transparente Komprimierung. BTRFS unterstützt das transparente Komprimieren von Dateien, um erhebliche Platzersparnisse ohne dein Zutun zu ermöglichen. **CachyOS wird standardmäßig mit ZSTD-Komprimierung auf Stufe 3 ausgeliefert.**
- Snapshot-Funktionalität. BTRFS nutzt seine COW-Eigenschaft, um die Erstellung von Snapshots von Subvolumes zu ermöglichen, die nur sehr wenig tatsächlichen Speicherplatz beanspruchen.
- Subvolume-Funktionalität, die eine größere Kontrolle über das Dateisystem ermöglicht.
- Kann vergrößert oder verkleinert werden.
- Sehr schnelle Entwicklung.

### Nachteile

- Erfordert manchmal Defragmentierung oder Balancing.
- Schlechter auf rotierenden Festplatten aufgrund der oben genannten Fragmentierung.

### Userspace-Dienstprogramm

Das Btrfs Userspace-Dienstprogramm-Paket ist `btrfs-progs`.

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

BTRFS wird für Leute empfohlen, die Snapshot-/Backup-Funktionalität und transparente Komprimierung haben möchten.

## EXT4

EXT4 (fourth extended filesystem) ist das am häufigsten verwendete Linux-Dateisystem. EXT4 wurde 2008 im Linux-Kernel als stabil eingestuft.

### Vorteile

- Kann in manchen Szenarien genauso schnell oder sogar schneller als XFS sein.
- Sehr verbreitet, was einen einfachen Zugang zu vielen Ressourcen ermöglicht.
- Zuverlässig. EXT4 hat eine nachgewiesene Erfolgsbilanz in puncto Zuverlässigkeit.
- Kann vergrößert oder verkleinert werden.
  - Das Verkleinern wird nur offline unterstützt und erfordert, dass das Dateisystem ausgehängt ist.

### Nachteile

- Es fehlen viele der erweiterten Funktionen, die andere Dateisysteme bieten.

### Userspace-Dienstprogramme

Das Paket zur Verwaltung von ext4 ist `e2fsprogs`.

### Empfehlung

EXT4 wird für Leute empfohlen, die das einfachste und am häufigsten verwendete Dateisystem haben wollen.

## ZFS

ZFS ist ein fortschrittliches Dateisystem, das ursprünglich 2005 von Sun Microsystems entwickelt wurde. ZFS hat viele Funktionen, ist aber unter der CDDL lizenziert, was bedeutet, dass es nicht in den Linux-Kernel aufgenommen werden kann und ein separates Modul installiert werden muss.

:::caution
Verwende keinen Real-Time-Kernel zusammen mit ZFS, es ist aufgrund von Lizenzproblemen nicht kompatibel.
:::

### Vorteile

- Gepoolter Speicher (zpool)
- Snapshots mit COW
- Komprimierung
- Raid-Z-Unterstützung
- ARC-Cache ermöglicht wahnsinnig schnelle Lesezeiten bei häufig aufgerufenen Dateien.

### Nachteile

- Sehr kompliziert in der Anwendung und im Verständnis aufgrund von Funktionen wie zpool und ARC.
- ARC benötigt viel RAM, um effektiv zu sein.
- Nicht im Linux-Kernel enthalten, daher abhängig von einem Drittanbieter-Kernelmodul (OpenZFS).
- Inkompatibel mit Real-Time-Preemption.

### Erforderliche Tools

'ZFS-Module': CachyOS stellt für jede Kernel-Version ein vorkompiliertes ZFS-Modul zur Verfügung.
`zfs-utils` für die Userspace-Dienstprogramme.

### Empfehlung

ZFS sollte nur von fortgeschrittenen Leuten genutzt werden, die seine erweiterten Funktionen wie gepoolten Speicher oder den ARC-Cache verwenden möchten.

## F2FS

F2FS (Flash-Friendly File System) ist ein Flash-Dateisystem, das ursprünglich von Samsung für den Linux-Kernel entwickelt wurde. F2FS wurde speziell für den NAND-Flash-Speicher moderner Speichergeräte entwickelt.

### Vorteile

- Wurde mit Blick auf die Flash-Freundlichkeit entwickelt.
- Transparente Komprimierung wird verwendet, um Schreibvorgänge auf die Festplatte zu reduzieren (Platzersparnis ist für den Nutzer derzeit nicht nutzbar).
- Besseres Wear-Leveling, was die Lebensdauer von NAND-Flash weiter verlängert.

### Nachteile

- Kann nicht verkleinert werden.
- Platzersparnisse durch Komprimierung können derzeit nicht vom Nutzer verwendet werden. Dies könnte in Zukunft hinzugefügt werden.
- Relativ schwaches fsck (filesystem check).
- Ein Downgrade auf einen Kernel, der älter ist als die Version, die das Dateisystem erstellt hat, kann zu Problemen führen.
- Erfordert einen Workaround, wenn es mit GRUB auf einem MBR/BIOS-System verwendet wird.

### Userspace-Dienstprogramme

Das Haupt-Dienstprogramm für f2fs ist `f2fs-tools`.

### Empfehlung

- F2FS wird für Leute empfohlen, die die Lebensdauer ihrer NAND-Flash-Geräte maximieren wollen.
- Limine ist der empfohlene Bootloader für F2FS-Nutzer auf MBR/BIOS-Systemen, da er keinen Workaround wie GRUB benötigt.

## TL;DR

Nutze das Standard-Dateisystem **BTRFS**, da es als stabil gilt und eine Menge cooler Features hat (Snapshots, Komprimierung, etc.). Nimm **XFS** oder **EXT4** für ein einfaches
und schnelles Dateisystem.
