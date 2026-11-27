---
title: Bestandssystemen
description: Beschrijving en aanbevelingen voor de beschikbare bestandssystemen. (ext4, f2fs, btrfs, xfs, zfs)
ai_translated: true
---

CachyOS biedt 5 verschillende bestandssystemen, zodat de gebruiker kan kiezen wat het beste bij zijn of haar behoeften past. Hieronder worden de voordelen, nadelen en aanbevelingen voor elk bestandssysteem besproken. Voor elk bestandssysteem zijn de benodigde vereisten/hulpprogramma's vooraf geïnstalleerd op CachyOS.

:::note
BTRFS is het standaard en aanbevolen bestandssysteem voor CachyOS. Kies dit als je twijfelt.
:::

## XFS

XFS is een journaling-bestandssysteem dat is gemaakt en ontwikkeld door Silicon Graphics, Inc. Het is gemaakt in 1993, in 2001 geporteerd naar Linux, en wordt nu breed ondersteund door de meeste Linux-distributies.

### Voordelen

- XFS is oorspronkelijk ontworpen met snelheid en extreme schaalbaarheid in gedachten.
- Betrouwbaar: XFS maakt gebruik van verschillende technologieën om gegevensbeschadiging te voorkomen.
- Bestand tegen fragmentatie dankzij de extent-gebaseerde opzet en de strategie van uitgestelde toewijzing.

### Nadelen

- Kan niet worden verkleind.

### Userspace-hulpprogramma

Het pakket met de userspace-hulpmiddelen om XFS-bestandssystemen te beheren is `xfsprogs`.

### Aanbeveling

XFS is het aanbevolen bestandssysteem voor gebruikers die geen geavanceerde functies nodig hebben en gewoon een snel en betrouwbaar bestandssysteem willen.

## BTRFS

BTRFS is een modern copy-on-write (COW)-bestandssysteem dat in 2007 is gemaakt en in 2013 stabiel is verklaard in de Linux-kernel. Het wordt breed ondersteund en staat vooral bekend om zijn geavanceerde functies.

### Voordelen

- Transparante compressie. BTRFS ondersteunt het transparant comprimeren van bestanden, wat zonder tussenkomst van de gebruiker aanzienlijke ruimtebesparing oplevert. **CachyOS wordt standaard geleverd met ZSTD-compressie op niveau 3.**
- Snapshotfunctionaliteit. BTRFS benut zijn COW-karakter om snapshots van subvolumes te maken die zeer weinig daadwerkelijke ruimte innemen.
- Subvolumefunctionaliteit die meer controle over het bestandssysteem geeft.
- Kan worden vergroot of verkleind.
- Zeer snelle ontwikkeling.

### Nadelen

- Vereist soms defragmentatie of balancing.
- Minder geschikt voor draaiende schijven vanwege de eerdergenoemde fragmentatie.

### Userspace-hulpprogramma

Het userspace-hulpprogrammapakket voor Btrfs is `btrfs-progs`

### Indeling van subvolumes

CachyOS levert direct een subvolume-indeling om snapshotfunctionaliteit eenvoudig te maken.

- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Aanbeveling

BTRFS wordt aanbevolen voor gebruikers die snapshot-/back-upfunctionaliteit en transparante compressie willen.

## EXT4

EXT4 (fourth extended filesystem) is het meest gebruikte Linux-bestandssysteem. EXT4 werd in 2008 stabiel verklaard in de Linux-kernel.

### Voordelen

- Kan in sommige scenario's even snel of sneller zijn dan XFS.
- Zeer gangbaar, waardoor er veel informatie en hulpbronnen beschikbaar zijn.
- Betrouwbaar. EXT4 heeft bewezen zeer betrouwbaar te zijn.
- Kan worden vergroot of verkleind.
  - Verkleinen wordt alleen offline ondersteund en vereist dat het bestandssysteem niet gemount is.

### Nadelen

- Mist veel van de geavanceerde functies die andere bestandssystemen bieden.

### Userspace-hulpprogramma's

Het pakket om ext4 te beheren is `e2fsprogs`

### Aanbeveling

EXT4 wordt aanbevolen voor gebruikers die het eenvoudigste en meest gebruikte bestandssysteem willen.

## ZFS

ZFS is een geavanceerd bestandssysteem dat oorspronkelijk in 2005 door Sun Microsystems is ontwikkeld. ZFS heeft veel functies, maar valt onder de CDDL-licentie, waardoor het niet in de Linux-kernel kan worden opgenomen en een apart geïnstalleerde module vereist.

:::caution
Gebruik geen Real-time-kernel in combinatie met ZFS; dit is niet compatibel vanwege licentieproblemen.
:::

### Voordelen

- Gepoolde opslag (zpool)
- Snapshots met COW
- Compressie
- Ondersteuning voor Raid-Z
- De ARC-cache zorgt voor extreem snelle leestijden bij veelgebruikte bestanden.

### Nadelen

- Zeer ingewikkeld om te gebruiken en te begrijpen vanwege functies als zpool en ARC.
- ARC heeft veel RAM nodig om effectief te zijn.
- Niet opgenomen in de Linux-kernel en daardoor afhankelijk van een kernelmodule van derden (OpenZFS)
- Niet compatibel met Real-time preemption

### Benodigde hulpmiddelen

'ZFS-Module': CachyOS levert een voorgecompileerde zfs-module voor elke kernelversie.
`zfs-utils` voor de userspace-hulpprogramma's.

### Aanbeveling

ZFS zou alleen gebruikt moeten worden door gevorderde gebruikers die de geavanceerde functies willen gebruiken, zoals gepoolde opslag of de ARC-cache.

## F2FS

F2FS (Flash-Friendly File System) is een flash-bestandssysteem dat oorspronkelijk door Samsung is gemaakt en ontwikkeld voor de Linux-kernel. F2FS is gemaakt om specifiek in te spelen op het NAND-flashgeheugen dat in moderne opslag wordt gebruikt.

### Voordelen

- Ontworpen met flashvriendelijkheid in gedachten.
- Transparante compressie die wordt gebruikt om schrijfacties naar de schijf te verminderen (de ruimtebesparing is momenteel niet bruikbaar voor de gebruiker).
- Betere wear leveling, wat de levensduur van NAND-flash verder verlengt.

### Nadelen

- Kan niet worden verkleind.
- De ruimtebesparing door compressie kan momenteel niet door de gebruiker worden benut. Dit wordt in de toekomst mogelijk toegevoegd.
- Relatief zwakke fsck (bestandssysteemcontrole).
- Teruggaan naar een kernel die ouder is dan de versie waarmee het bestandssysteem is aangemaakt, kan problemen veroorzaken.
- Vereist een workaround bij gebruik met GRUB op een MBR/BIOS-systeem.

### Userspace-hulpprogramma's

Het belangrijkste hulpprogramma voor f2fs is `f2fs-tools`

### Aanbeveling

- F2FS wordt aanbevolen voor gebruikers die de levensduur van hun NAND-flashapparaten willen maximaliseren.
- Limine is de aanbevolen bootloader voor F2FS-gebruikers op MBR/BIOS-systemen, omdat deze geen workaround vereist zoals GRUB.

## TL:DR

Gebruik het standaardbestandssysteem **BTRFS**, omdat dit als stabiel wordt beschouwd en veel handige functies heeft (snapshots, compressie, enz.). Gebruik **XFS** of **EXT4** voor een eenvoudig
en snel bestandssysteem.
