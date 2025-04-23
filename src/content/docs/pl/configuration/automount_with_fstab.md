---
title: Automatyczne montowanie dodatkowych dysków przy użyciu fstab podczas rozruchu
description: Montowanie dodatkowych dysków statycznych podczas rozruchu przy użyciu pliku /etc/fstab
---

Ten poradnik opisuje podstawy wykorzystania pliku fstab znajdującego się w /etc/ do montowania dysków statycznych podczas rozruchu systemu. Wyjaśni pokrótce, jak znaleźć UUID partycji lub dysku, co oznaczają niektóre opcje oraz gdzie szukać dalszych informacji, jeśli podane tu okażą się niewystarczające.

## Wymagania wstępne
- Dostęp roota

## Dodawanie wpisów do /etc/fstab

### 1. Wyświetl UUID swoich partycji
W wybranym emulatorze terminala (Konsole, Alacritty, Kitty itp.) uruchom następujące polecenie:

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

W naszym przykładzie wiemy, że chcemy zamontować partycję Windows, która ma system plików ntfs, i wiemy, że mniej więcej połowa jej miejsca jest dostępna. Na tej podstawie możemy ustalić, że partycją, którą chcemy zamontować, jest `nvme0n1p3`, jej UUID to `08A24E90A24E81E4`, a system plików w tym przykładzie to `ntfs`.

### 2. Identyfikacja partycji

Często polecenie `lsblk -f` dostarczy na tym etapie wszystkich informacji potrzebnych do zamontowania dysku za pomocą /etc/fstab. Jeśli jednak okaże się, że informacje są niewystarczające, możesz uruchomić:

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

W tym przykładzie znamy już UUID, jednak `fdisk -l` może to nieco bardziej wyjaśnić, pokazując dokładny rozmiar partycji (1,4 T) oraz jej typ (Microsoft basic data).

To powinno nas ostatecznie upewnić, że partycja, której szukamy, to `nvme0n1p3` o UUID `08A24E90A24E81E4`, jak wspomniano wcześniej. Wiedzieliśmy to już, ale teraz mamy pewność.

Gdy masz pewność, że znalazłeś właściwą partycję, skopiuj jej UUID. Kopiowanie z emulatora terminala odbywa się zazwyczaj za pomocą `Ctrl+Shift+C`.


### 3. Dodawanie wpisu do /etc/fstab

Teraz, gdy uzyskaliśmy UUID naszej partycji, nadszedł czas, aby otworzyć plik fstab.

Możesz użyć dowolnego edytora tekstu, w tym przykładzie użyjemy nano. Aby edytować plik fstab, należy go otworzyć z uprawnieniami roota:

```sh
❯ sudo nano /etc/fstab
```

Używając klawiszy strzałek, przejdź na koniec pliku fstab, a następnie w nowej linii utwórz nowy wpis:

```sh
UUID=08A24E90A24E81E4 /media/windows ntfs3 defaults,nofail 0 0
```
Znaczenie poszczególnych części tego wpisu jest następujące:

- `UUID=08A24E90A24E81E4` To jest system plików, który chcemy zamontować, zidentyfikowany przez jego UUID. Istnieją inne metody identyfikacji systemu plików, chociaż UUID jest zazwyczaj najbezpieczniejszą opcją. Dodatkowe metody wymieniono [tutaj](https://wiki.archlinux.org/title/Fstab#Identifying_file_systems).

- `/media/windows` Standard [Linux Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html) określa, że `/media/` jest właściwą lokalizacją do montowania dysków wymiennych. `windows` wskazuje katalog, w którym chcemy zamontować nasz dysk. Każdy dysk, który chcemy zamontować, będzie potrzebował własnego katalogu.

- `ntfs3` To jest typ systemu plików dla naszego systemu plików. W naszym przykładzie jawnie używamy sterownika jądra ntfs3. Inne przykłady to `ext4`, `xfs` lub podobne. Tę jawną deklarację typu systemu plików można zastąpić opcją `auto`, aby pozwolić poleceniu mount na samodzielne odgadnięcie typu.

- `defaults,nofail` Opcje, które chcemy przekazać poleceniu mount dla tego dysku. `nofail` oznacza, że jeśli montowanie tego dysku się nie powiedzie, nie spowoduje to błędu podczas rozruchu. Rozruch będzie kontynuowany normalnie. `defaults` oznacza standardowy zestaw logicznych opcji. Zazwyczaj `rw`, `ro` lub podobne.

- `pierwsze 0` Opcja dump, zazwyczaj przestarzała w nowoczesnych systemach. Pozostawienie jej wartości 0 niczemu nie zaszkodzi. Możesz przeczytać o niej więcej [tutaj](https://linux.die.net/man/8/dump).

- `drugie 0` Ta opcja określa kolejność sprawdzania systemu plików podczas rozruchu. Dla partycji głównej (root) powinna wynosić 1 (chyba że system plików root to btrfs lub xfs, wtedy powinna wynosić 0). Wszystkie inne systemy plików w pliku fstab powinny mieć wartość 0 (wyłączone) lub 2. Więcej informacji [tutaj](https://man.archlinux.org/man/fsck.8).

Opcje są wyjaśnione bardziej szczegółowo [tutaj](https://man7.org/linux/man-pages/man5/fstab.5.html) i [tutaj](https://man7.org/linux/man-pages/man8/mount.8.html).

#### Więcej informacji
Nawiasem mówiąc, wszystkie opcje po deklaracji typu systemu plików są opcjonalne, jeśli nie zmieniasz ich wartości domyślnych.

Zatem

`UUID=<UUID partycji> /media/foo somefs`

oraz

`UUID=<UUID partycji> /media/foo somefs defaults 0 0`

są równoważne. `somefs` bez dodatkowych opcji jest równoznaczne z `somefs defaults 0 0`

#### Ważne dla partycji Windows

Jeśli wykonujesz ten poradnik dla partycji Windows, twoje opcje powinny wyglądać następująco: `uid=1000,gid=1000,rw,user,exec,umask=000`, zastępując uid i gid identyfikatorem twojego użytkownika i grupy. Jeśli nie nadasz uprawnień `user` i `exec`, Windows może zablokować dysk, uniemożliwiając modyfikację czegokolwiek. Może się to zdarzyć niezależnie od uprawnień, jeśli nie wyłączysz szybkiego uruchamiania (fast boot) w Windows.

Jeśli nie ustawisz `umask=000`, niektóre pliki mogą być niezapisywalne.



### 4. Kończenie pracy

Jeśli chcesz zamontować teraz dysk, dla którego utworzyłeś wpis, musisz uruchomić:

```sh
❯ sudo systemctl daemon-reload
```

a następnie:

```sh
❯ sudo mount -a
```

Twój dysk powinien być teraz widoczny w `/media/windows` i będzie się tam pojawiał przy następnym rozruchu oraz w przyszłości.

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

 Jeśli chcesz utworzyć dowiązanie do nowo zamontowanego dysku w swoim katalogu domowym, możesz uruchomić:

 ```sh
 ❯ ln -s /media/windows ~/Windows
 ```

 Aby pokazać, że zadziałało:

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


## W skrócie:

- Znajdź UUID swojej partycji
```sh
lsblk -f
```

- Otwórz /etc/fstab
```sh
sudo nano /etc/fstab
```

- Utwórz wpis na końcu pliku
```sh
UUID=<UUID partycji> /media/foo somefs defaults 0 0
```
Zastąp `<UUID partycji>`, `foo` i `somefs` odpowiednio swoim UUID, katalogiem i systemem plików (np. ext4), a także ustaw inne opcje, których możesz potrzebować po `defaults`, takie jak `_netdev` dla NAS lub `nofail` dla każdego dysku niekrytycznego.

- Przeładuj demona systemd

```sh
❯ sudo systemctl daemon-reload
```

- Zamontuj dysk
```sh
❯ sudo mount -a
```

Ten dysk jest teraz zamontowany i będzie również montowany podczas rozruchu systemu w przyszłości.

## Lektura uzupełniająca
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html - Filesystem Hierarchy Standard
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s11.html - FHS o `/media/`
- https://linux.die.net/man/8/dump - podręcznik dla `dump`
- https://man.archlinux.org/man/fsck.8 - podręcznik dla `fsck`
- https://man.archlinux.org/man/fstab.5.en - strona podręcznika (man page) dla fstab
- https://wiki.archlinux.org/title/Fstab - Wiki Arch Linux dla fstab
