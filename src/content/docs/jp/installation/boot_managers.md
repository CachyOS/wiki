---
title: Angebotene Bootmanager
description: Beschreibung und Empfehlungen für die aktuell angebotenen Bootmanager
---

Um die beste Erfahrung auf einer Vielzahl von Geräten zu bieten, bietet CachyOS derzeit die folgenden Bootmanager an: systemd-boot, rEFInd und GRUB.
Dieser Wiki-Artikel beschreibt den Funktionsumfang jedes Bootmanagers und enthält auch unsere Empfehlungen für die Auswahl. Für die
Konfiguration siehe [Bootmanager-Konfiguration](/de/configuration/boot_manager_configuration).

## systemd-boot

Als Teil der systemd-Familie wurde systemd-boot so einfach wie möglich gestaltet und unterstützt daher nur UEFI-basierte Systeme. Dieses einfache, aber effiziente Design gewährleistet Zuverlässigkeit und Geschwindigkeit. Dies geht jedoch auf Kosten erweiterter Funktionen, die von anderen Bootmanagern unterstützt werden.

### Vorteile
- Sehr einfache Konfiguration.
- Booteinträge sind in mehrere Dateien aufgeteilt, was die Verwaltung erleichtert.

### Nachteile
 - Unterstützt keine BIOS-Systeme.
 - Sehr schlichtes Design ohne jegliche Theming- oder Anpassungsmöglichkeiten.
 - Die Konfiguration wird nicht automatisch generiert, es sei denn, sie ist entsprechend konfiguriert. CachyOS enthält einen systemd-boot-Manager, um eine automatisch generierte Konfiguration anzubieten.
 - Kann Boot-Images nur auf EFI-unterstützten Dateisystemen (FAT, FAT16, FAT32) lesen.
 - Kann Boot-Images nicht auf anderen Partitionen als der eigenen finden.
 - Unterstützt Btrfs-Snapshot-Rollbacks nicht richtig, da Kernel-Images auf der Boot-Partition und nicht auf dem Root-Dateisystem gespeichert werden müssen.

### Empfehlung

Systemd-boot ist der empfohlene und standardmäßige Bootmanager für CachyOS. Wählen Sie diesen, wenn Sie sich nicht sicher sind.

## rEFInd

rEFInd ist ein Fork von rEFIt und wurde hauptsächlich entwickelt, um MacOS-Benutzern das Multi-Booten zu erleichtern. rEFInd hat sich jedoch zu einem hardwareunabhängigen Tool entwickelt, was es zu einer guten Wahl für Multi-Booting auf jedem System macht. Der Hauptvorteil von rEFInd ist seine Fähigkeit, beim Booten alle Speichergeräte zu scannen und entsprechend Einträge für jedes gefundene Betriebssystem/jeden gefundenen Kernel anzuzeigen.

### Vorteile

- Automatische Erkennung aller Betriebssysteme und Kernel auf Speichergeräten.
- Aufgrund der oben genannten automatischen Erkennung ist wenig bis keine Konfiguration erforderlich.
- Viel grafischere Benutzeroberfläche, die an die MacOS-Bootauswahl erinnert.
- Große Theming-Unterstützung
- Optionale Touchscreen-Unterstützung
- Kann Boot-Images von EFI-Dateisystemen (FAT, FAT16, FAT32) sowie EXT4 und BTRFS lesen. Die Unterstützung für andere Dateisysteme kann durch die Installation von EFI-Treibern aus dem Paket ``efifs`` hinzugefügt werden.

### Nachteile

- Unterstützt keine BIOS-Systeme.

### Empfehlung

rEFInd ist der empfohlene Bootmanager für das Booten mit mehreren Betriebssystemen.

## GRUB

GRUB ist der älteste der verfügbaren Bootmanager. Er verfügt über einen sehr großen Funktionsumfang, funktioniert auf fast jeder Maschine und ist der am häufigsten verwendete Linux-Bootmanager. Im Folgenden finden Sie eine Liste seiner wichtigsten Vor- und Nachteile.

### Vorteile
- Kann Boot-Images von fast allen verfügbaren Linux-Dateisystemen lesen.
- Weit verbreitet und sehr einfach, Informationen online zu finden.
- Kann verschlüsselte Boot-Partitionen entschlüsseln.
- Der einzige angebotene Bootloader, der das Booten von BIOS-Maschinen ermöglicht.
- Sieht veraltet aus. Hat aber eine großartige Theme-Unterstützung, um dies auszugleichen.

### Nachteile
- Aufgebläht, da er viel ältere Hardware und viele Dateisystemtreiber unterstützen muss.
- Deutlich langsamer im Vergleich zu systemd-boot und rEFInd.

### Empfehlung

GRUB ist der einzige Bootmanager, der die Verschlüsselung von Boot-Partitionen unterstützt (anders als die Festplattenverschlüsselung).

## Limine

Limine ist ein moderner, fortschrittlicher und portabler Multiprotokoll-Bootloader. Er dient als Referenzimplementierung für das Limine-Bootprotokoll und unterstützt das Booten von Linux sowie das Chainloading anderer Bootloader.

### Vorteile

- Unterstützt mehrere Bootprotokolle, darunter Multiboot2 und die Linux-Bootprotokolle.
- Er kann sowohl auf UEFI- als auch auf BIOS-Systemen booten, was ihn vielseitig für verschiedene Hardwarekonfigurationen macht.
- Hat Theming-Funktionen ähnlich wie GRUB.
- Direkte Unterstützung für Btrfs-Snapshots, die standardmäßig für Installationen mit Btrfs als Dateisystem aktiviert ist.

### Nachteile

- Unterstützt nur wenige Dateisysteme, wie FAT12, FAT16, FAT32 und ISO9660 für die `/boot`-Partition, was zusätzliche Einrichtung für Systeme erfordern kann, die andere Dateisysteme verwenden.
- Im Gegensatz zu einigen anderen Bootloadern fügt Limine nicht automatisch einen Eintrag zum NVRAM auf UEFI-Systemen hinzu; dies muss manuell mit Tools wie `efibootmgr` erfolgen oder über `limine-entry-tool` gehandhabt werden, das bei CachyOS standardmäßig vorinstalliert ist.

### Empfehlung

Limine wird für Benutzer empfohlen, die einen schlanken und vielseitigen Bootloader benötigen, der sowohl UEFI- als auch BIOS-Systeme unterstützt. Er eignet sich besonders für diejenigen, die eine einfache Einrichtung mit Theming-Optionen und Btrfs-Snapshot-Unterstützung bevorzugen. Darüber hinaus dient Limine als moderner Ersatz für GRUB, das in letzter Zeit weniger Updates erhalten hat und aufgrund seiner EFI/Dateisystemtreiber mit mehreren Sicherheitsproblemen konfrontiert war.

## TL;DR
Wählen Sie GRUB, wenn die verwendete Maschine nur BIOS unterstützt, wählen Sie rEFInd, wenn Sie planen, mehrere Betriebssysteme auf der Maschine zu haben (insbesondere Windows), andernfalls wählen Sie systemd-boot.
