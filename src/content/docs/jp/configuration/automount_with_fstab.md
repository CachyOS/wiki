---
title: Zusätzliche Laufwerke beim Booten über fstab automatisch einbinden
description: Binden Sie zusätzliche statische Laufwerke beim Booten ein, indem Sie die Datei unter /etc/fstab verwenden.
---

Dieses Tutorial beschreibt die Grundlagen der Verwendung der Datei fstab unter /etc/, um statische Laufwerke während des Bootens einzubinden. Es wird kurz erklärt, wie man die UUID einer Partition oder eines Laufwerks findet, was einige Optionen bewirken, und es werden weiterführende Informationen bereitgestellt, falls die bereitgestellten Informationen nicht ausreichen.

## Voraussetzungen
- Root-Zugriff

## Hinzufügen von Einträgen zu /etc/fstab

### 1. Auflisten der UUIDs Ihrer Partitionen
Führen Sie im Terminalemulator Ihrer Wahl (Konsole, Alacritty, Kitty usw.) Folgendes aus:

```sh
❯ lsblk -f
NAME        FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
zram0                                                                              [SWAP]
nvme0n1
├─nvme0n1p1 vfat   FAT32       E04D-9F05
├─nvme0n1p2
├─nvme0n1p3 ntfs               08A24E90A24E81E4                      715.4G    50%
├─nvme0n1p4 vfat   FAT32       E09C-D4DA                             628.1M    39% /boot
├─nvme0n1p5 ext4   1.0         187a9f06-9411-48d9-b941-f03c2e605812  203.6G    47% /
└─nvme0n1p6 ntfs
```

In unserem Beispiel wissen wir, dass wir eine Windows-Partition einbinden wollen, die ntfs ist, und wir wissen, dass etwa die Hälfte ihres Speicherplatzes verfügbar ist. Daher können wir feststellen, dass die Partition, die wir einbinden wollen, `nvme0n1p3` ist und ihre UUID `08A24E90A24E81E4` ist, mit einem Dateisystem vom Typ `ntfs` in diesem Beispiel.

### 2. Identifizieren Ihrer Partition

Oft liefert `lsblk -f` an dieser Stelle alle Informationen, die Sie benötigen, um Ihr Laufwerk über /etc/fstab einzubinden. Sollten Sie jedoch feststellen, dass die Informationen fehlen, können Sie Folgendes ausführen:

```sh
❯ sudo fdisk -l
Device              Start        End    Sectors  Size Type
/dev/nvme0n1p1       2048     206847     204800  100M EFI System
/dev/nvme0n1p2     206848     239615      32768   16M Microsoft reserved
/dev/nvme0n1p3     239616 2997384182 2997144567  1.4T Microsoft basic data
/dev/nvme0n1p4 2997385216 2999482367    2097152    1G EFI System
/dev/nvme0n1p5 2999482368 3905454079  905971712  432G Linux root (x86-64)
/dev/nvme0n1p6 3905454080 3907026943    1572864  768M Windows recovery environment
```

Wir kennen unsere UUID in diesem Beispiel bereits, aber `fdisk -l` kann es uns etwas deutlicher machen, indem es die genaue Größe der Partition (1,4T) sowie ihren Typ (Microsoft basic data) anzeigt.

Das sollte uns deutlich machen, dass die Partition, die wir wollen, `nvme0n1p3` mit einer UUID von `08A24E90A24E81E4` ist, wie bereits beschrieben. Wir wussten es schon vorher, aber jetzt wissen wir es ganz sicher.

Sobald Sie sicher sind, dass Sie die richtige Partition gefunden haben, kopieren Sie die UUID. Das Kopieren aus dem Terminalemulator erfolgt in der Regel mit `Strg+Umschalt+C`.

### 3. Hinzufügen eines Eintrags zu /etc/fstab

Nachdem wir die UUID unserer Partition erhalten haben, ist es an der Zeit, die fstab-Datei zu öffnen.

Sie können Ihren bevorzugten Texteditor verwenden, in diesem Beispiel verwenden wir nano. Um die fstab-Datei zu bearbeiten, muss sie als Root geöffnet werden:

```sh
❯ sudo nano /etc/fstab
```

Navigieren Sie mit den Pfeiltasten zum Ende der fstab-Datei, und erstellen Sie dann in einer neuen Zeile unseren neuen Eintrag:

```sh
UUID=08A24E90A24E81E4 /media/windows ntfs3 defaults,nofail 0 0
```
Die Aufschlüsselung dieses Eintrags ist wie folgt:

- `UUID=08A24E90A24E81E4` Dies ist das Dateisystem, das wir einbinden wollen, identifiziert durch seine UUID. Es gibt andere Methoden, um Ihr Dateisystem zu identifizieren, aber UUID ist in der Regel am sichersten. Zusätzliche Methoden sind [hier](https://wiki.archlinux.org/title/Fstab#Identifying_file_systems) aufgeführt.

- `/media/windows` Der [Linux Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html) besagt, dass `/media/` der richtige Ort für die Einbindung von Wechseldatenträgern ist. `windows` gibt das Verzeichnis an, in das wir unser Laufwerk einbinden möchten. Jedes Laufwerk, das wir einbinden möchten, benötigt ein eigenes Verzeichnis.

- `ntfs3` Dies ist der Dateisystemtyp für unser Dateisystem. Wir verwenden in unserem Beispiel explizit den ntfs3-Kernel-Treiber. Andere Beispiele wären `ext4`, `xfs` oder ähnliches. Diese explizite Deklaration des Dateisystemtyps kann durch `auto` ersetzt werden, damit der Mount-Befehl seine beste Vermutung anstellen kann.

- `defaults,nofail` Die Optionen, die wir an den Mount-Befehl für dieses Laufwerk übergeben wollen. `nofail` bedeutet, dass, sollte dieses Laufwerk nicht eingebunden werden können, dies keinen Fehler beim Booten verursacht. Das Booten wird wie gewohnt fortgesetzt. `defaults` impliziert eine Reihe von logischen Standardoptionen. Typischerweise `rw`, `ro` oder ähnliches.

- `die erste 0` dump, dies ist in modernen Systemen in der Regel veraltet. Wenn Sie dies auf 0 belassen, schadet das nicht. Weitere Informationen finden Sie [hier](https://linux.die.net/man/8/dump).

- `die zweite 0` Dies legt die Reihenfolge für Dateisystemprüfungen beim Booten fest. Für eine Root-Partition (es sei denn, Ihr Root-Dateisystem ist btrfs oder xfs, was auf 0 gesetzt werden sollte) sollte dies 1 sein. Alle anderen Dateisysteme in Ihrer fstab sollten entweder 0 (deaktiviert) oder 2 sein. Weitere Informationen finden Sie [hier](https://man.archlinux.org/man/fsck.8).

Optionen werden [hier](https://man7.org/linux/man-pages/man5/fstab.5.html) und [hier](https://man7.org/linux/man-pages/man8/mount.8.html) ausführlicher erläutert.

#### Mehr Infos
Nebenbei bemerkt, alle Optionen nach der Deklaration des Dateisystemtyps sind optional, wenn Sie sie nicht von der Standardeinstellung ändern.

Somit sind

`UUID=<Partition-UUID> /media/foo somefs`

und

`UUID=<Partition-UUID> /media/foo somefs defaults 0 0`

äquivalent. `somefs`, gefolgt von nichts, ist implizit `somefs defaults 0 0`

#### Wichtig für Windows-Partitionen

Wenn Sie dieser Anleitung mit einer Windows-Partition folgen, sollten Ihre Optionen `uid=1000,gid=1000,rw,user,exec,umask=000` sein, wobei Sie uid und gid durch Ihre Benutzer-ID und Gruppen-ID ersetzen. Wenn Sie keine Benutzer- und Ausführungsberechtigungen erteilen, kann Windows Ihr Laufwerk sperren, so dass Sie nichts mehr ändern können. Dies kann unabhängig von den Berechtigungen geschehen, wenn Sie den Schnellstart nicht deaktivieren.

Wenn Sie umask=000 nicht setzen, können einige Dateien je nach Fall nicht beschreibbar sein.

### 4. Fertigstellung

Wenn Sie das Laufwerk, für das Sie einen Eintrag erstellt haben, jetzt einbinden möchten, müssen Sie Folgendes ausführen:

```sh
❯ sudo systemctl daemon-reload
```

und dann:

```sh
❯ sudo mount -a
```

Ihr Laufwerk sollte nun unter `/media/windows` erscheinen und wird dort beim nächsten Booten sowie in Zukunft erscheinen.

```sh
❯ ls /media/windows
'$Recycle.Bin'             Linux                  SteamLibrary
 AMD                       Modding                swapfile.sys
 Apps                      pagefile.sys          'System Volume Information'
 bootTel.dat               PerfLogs               Users
 Development               ProgramData            WiiU
'Documents and Settings'  'Program Files'         Windows
 DumpStack.log.tmp        'Program Files (x86)'   XboxGames
 FanControl                Recovery               xiv_modding
 Games                     RetroArch-Win64
 Intel                    'Ship of Harkinian'
 ```

 Wenn Sie einen Link zu Ihrem neu eingebundenen Laufwerk in Ihrem Home-Verzeichnis erstellen möchten, können Sie Folgendes ausführen

 ```sh
 ❯ ln -s /media/windows ~/Windows
 ```

 Um zu zeigen, dass es funktioniert hat

 ```sh
 ❯ ls ~/Windows
 '$Recycle.Bin'             Linux                  SteamLibrary
 AMD                       Modding                swapfile.sys
 Apps                      pagefile.sys          'System Volume Information'
 bootTel.dat               PerfLogs               Users
 Development               ProgramData            WiiU
'Documents and Settings'  'Program Files'         Windows
 DumpStack.log.tmp        'Program Files (x86)'   XboxGames
 FanControl                Recovery               xiv_modding
 Games                     RetroArch-Win64
 Intel                    'Ship of Harkinian'
 ```

## tl;dr

- Finden Sie die UUID Ihrer Partition
```sh
lsblk -f
```

- Öffnen Sie /etc/fstab
```sh
sudo nano /etc/fstab
```

- Erstellen Sie einen Eintrag am Ende der Datei
```sh
UUID=<Partition-UUID> /media/foo somefs defaults 0 0
```
Ersetzen Sie `<Partition-UUID>`, `foo` und `somefs` durch Ihre UUID, Ihr Verzeichnis und Ihr Dateisystem. z.B. ext4, sowie alle anderen Optionen, die Sie nach defaults setzen möchten, wie z.B. `_netdev` für ein NAS oder `nofail` für ein nicht-kritisches Laufwerk.

- Laden Sie Ihren Daemon neu

```sh
❯ sudo systemctl daemon-reload
```

- Binden Sie Ihr Laufwerk ein
```sh
❯ sudo mount -a
```

Dieses Laufwerk ist nun eingebunden und wird auch beim Booten in Zukunft eingebunden.

## Zusätzliche Lektüre
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html - Filesystem Hierarchy Standard
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s11.html - FHS auf `/media/`
- https://linux.die.net/man/8/dump - Handbuch für `dump`
- https://man.archlinux.org/man/fsck.8 - Handbuch für `fsck`
- https://man.archlinux.org/man/fstab.5.en - Manpage für fstab
- https://wiki.archlinux.org/title/Fstab - Arch Linux Wiki für fstab
