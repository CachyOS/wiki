---
title: Dateisysteme
description: Beschreibung und Empfehlungen für die verfügbaren Dateisysteme (ext4, f2fs, btrfs, xfs, zfs, bcachefs).
---

CachyOS bietet 5 Dateisysteme, damit der Benutzer das auswählen kann, was seinen Bedürfnissen am besten entspricht. Im Folgenden werden die Vor- und Nachteile sowie Empfehlungen für jedes Dateisystem erläutert. Jedes Dateisystem wird mit seinen Anforderungen/Dienstprogrammen auf CachyOS vorinstalliert geliefert.

:::note
BTRFS ist das Standard- und empfohlene Dateisystem für CachyOS. Wähle es, wenn du dir unsicher bist.
:::

## XFS
XFS ist ein Journaling-Dateisystem, das von Silicon Graphics, Inc. erstellt und entwickelt wurde. Es wurde 1993 erstellt, 2001 auf Linux portiert und wird heute von den meisten Linux-Distributionen umfassend unterstützt.
### Vorteile
- Schnell, XFS wurde ursprünglich mit Blick auf Geschwindigkeit und extreme Skalierbarkeit entwickelt.
- Zuverlässig, XFS verwendet verschiedene Technologien, um Datenbeschädigung zu verhindern.
- Widerstandsfähig gegen Fragmentierung aufgrund seiner Extent-basierten Natur und verzögerten Allokationsstrategie.
### Nachteile
- Kann nicht verkleinert werden.

### Userspace-Dienstprogramm
Das Paket, das Userspace-Tools zur Verwaltung von XFS-Dateisystemen enthält, ist `xfsprogs`.

### Empfehlung:
XFS ist das empfohlene Dateisystem für Benutzer, die keine erweiterten Funktionen benötigen und einfach ein schnelles und zuverlässiges Dateisystem wünschen.

## BTRFS
BTRFS ist ein modernes Copy-on-Write(COW)-Dateisystem, das 2007 erstellt und 2013 im Linux-Kernel als stabil deklariert wurde. Es wird umfassend unterstützt und ist hauptsächlich für seinen erweiterten Funktionsumfang bekannt.
### Vorteile
- Transparente Komprimierung. BTRFS unterstützt die transparente Komprimierung von Dateien, um erhebliche Platzeinsparungen ohne Benutzereingriff zu ermöglichen. CachyOS wird standardmäßig mit ZSTD-Komprimierung auf Stufe 3 ausgeliefert.
- Snapshot-Funktionalität. BTRFS nutzt seine COW-Natur, um die Erstellung von Snapshots von Subvolumes zu ermöglichen, die sehr wenig tatsächlichen Speicherplatz beanspruchen.
- Subvolume-Funktionalität, die eine größere Kontrolle über das Dateisystem ermöglicht.
- Kann vergrößert oder verkleinert werden.
- Sehr schnelle Entwicklung.
### Nachteile
- Erfordert manchmal Defragmentierung oder Balancing.
- Schlechtere Leistung auf rotierenden Festplatten aufgrund der oben genannten Fragmentierung.
### Userspace-Dienstprogramm
Das Btrfs-Userspace-Dienstprogramm-Paket ist `btrfs-progs`.

### Subvolume-Layout
CachyOS bietet ein Subvolume-Layout, das sofort einsatzbereit ist, um eine einfache Snapshot-Funktionalität zu ermöglichen.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Empfehlung:
BTRFS wird für Benutzer empfohlen, die Snapshot-/Backup-Funktionalität und transparente Komprimierung wünschen.

## EXT4
EXT4 (fourth extended filesystem) ist das am häufigsten verwendete Linux-Dateisystem. EXT4 wurde 2008 im Linux-Kernel als stabil eingestuft.
### Vorteile
- Sehr verbreitet, was einen einfachen Zugriff auf zahlreiche Ressourcen ermöglicht.
- Zuverlässig. EXT4 hat sich als sehr zuverlässig erwiesen.
- Kann vergrößert oder verkleinert werden.
### Nachteile
- Basiert auf einer alten Codebasis.
- Es fehlen viele der erweiterten Funktionen, die andere Dateisysteme bieten.

### Userspace-Dienstprogramme
Das Paket zur Verwaltung von ext4 ist `e2fsprogs`.

### Empfehlung:
EXT4 wird für Benutzer empfohlen, die das einfachste und am häufigsten verwendete Dateisystem wünschen.

## ZFS

ZFS ist ein fortschrittliches Dateisystem, das ursprünglich 2005 von Sun Microsystems entwickelt wurde. ZFS verfügt über viele Funktionen, ist jedoch unter der CDDL lizenziert, was bedeutet, dass es nicht in den Linux-Kernel aufgenommen werden kann und ein separates Modul installiert werden muss.

:::caution
Verwende keinen Echtzeit-Kernel zusammen mit ZFS, da dies aufgrund von Lizenzproblemen nicht kompatibel ist.
:::

### Vorteile
- Gepoolter Speicher (zpool)
- Snapshots mit COW
- Komprimierung
- Raid-Z-Unterstützung
- Der ARC-Cache ermöglicht wahnsinnig schnelle Lesezeiten für häufig aufgerufene Dateien.
### Nachteile
- Sehr kompliziert zu bedienen und zu verstehen aufgrund von Funktionen wie zpool und ARC.
- ARC benötigt viel RAM, um effektiv zu sein.
- Nicht im Linux-Kernel enthalten, daher abhängig von einem Kernelmodul eines Drittanbieters (OpenZFS)
- Inkompatibel mit Echtzeit-Präemption

### Erforderliche Tools
'ZFS-Modul' CachyOS bietet ein vorkompiliertes ZFS-Modul für jede Kernel-Version.
`zfs-utils` für die Userspace-Dienstprogramme.

### Empfehlung:
ZFS sollte nur von fortgeschrittenen Benutzern verwendet werden, die die erweiterten Funktionen von ZFS wie gepoolten Speicher oder den ARC-Cache nutzen möchten.

## F2FS
F2FS oder das Flash-Friendly File System ist ein Flash-Dateisystem, das von Samsung ursprünglich für den Linux-Kernel erstellt und entwickelt wurde. F2FS wurde speziell für den in modernen Speichern verwendeten NAND-Flash entwickelt.
### Vorteile
- Mit Blick auf Flash-Freundlichkeit entwickelt.
- Transparente Komprimierung zur Reduzierung von Festplattenschreibvorgängen (Platzersparnis derzeit nicht vom Benutzer nutzbar)
- Schneller als andere Dateisysteme wie EXT4.
- Besseres Wear-Leveling, das die Lebensdauer von NAND-Flash weiter verlängert.
### Nachteile
- Kann nicht verkleinert werden.
- Platzersparnisse durch Komprimierung können derzeit nicht vom Benutzer genutzt werden. Dies kann in Zukunft hinzugefügt werden.
- Relativ schwaches fsck (Dateisystemprüfung).
- Das Downgrade auf einen Kernel, der älter als die Version ist, die das Dateisystem erstellt hat, kann Probleme verursachen.

### Userspace-Dienstprogramme
Das Hauptdienstprogramm für f2fs ist `f2fs-tools`.

### Empfehlung:
F2FS wird nur für Benutzer empfohlen, die die Lebensdauer ihres NAND-Flash maximieren möchten.

## BcacheFS
Bcachefs ist ein fortschrittliches neues Dateisystem für Linux mit Schwerpunkt auf Zuverlässigkeit und Robustheit sowie dem vollständigen Funktionsumfang, den man von einem modernen Dateisystem erwarten würde.

:::caution[ACHTUNG]
Bcachefs gilt immer noch als experimentell und kann Probleme verursachen.
:::

### Vorteile
- Copy on Write (CoW) - wie BTRFS oder ZFS
- Komprimierung
- Caching, Datenplatzierung
- Replikation
- Skalierbar
### Nachteile
- Experimentell
- Einrichtung kann kompliziert sein

## TL;DR
Verwende das Standarddateisystem **BTRFS**, da es als stabil gilt und viele nützliche Funktionen bietet (Snapshots, Komprimierung usw.). Verwende **XFS** oder **EXT4** für ein einfaches
und schnelles Dateisystem.
