---
title: Automatické připojení dalších disků přes fstab při startu systému
description: Připojení dalších statických disků při startu systému pomocí souboru /etc/fstab
---

Tento návod popisuje základy použití souboru fstab, který se nachází v /etc/, pro připojení statických disků během spouštění systému. Stručně vysvětlí, jak najít UUID oddílu nebo disku, co znamenají některé volby a kde hledat další informace, pokud by poskytnuté informace nebyly dostatečné.

## Předpoklady
- Přístup s právy roota

## Přidávání záznamů do /etc/fstab

### 1. Vypište UUID vašich oddílů
V emulátoru terminálu dle vašeho výběru (Konsole, Alacritty, Kitty atd.) spusťte následující příkaz:

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

V našem příkladu víme, že chceme připojit oddíl s Windows, který je typu ntfs, a víme, že je k dispozici zhruba polovina jeho prostoru. Z toho můžeme usoudit, že oddíl, který chceme připojit, je `nvme0n1p3` a jeho UUID je `08A24E90A24E81E4`, se souborovým systémem `ntfs` v tomto příkladu.

### 2. Identifikace vašeho oddílu

Často vám `lsblk -f` v tomto bodě poskytne všechny informace potřebné k připojení disku přes /etc/fstab. Pokud byste však měli pocit, že informace chybí, můžete spustit následující příkaz:

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

V tomto příkladu již známe naše UUID, nicméně `fdisk -l` nám to může trochu více objasnit tím, že ukáže přesnou velikost oddílu (1.4T) a také jeho typ (Microsoft basic data).

To by nám mělo naprosto jasně ukázat, že oddíl, který chceme, je `nvme0n1p3` s UUID `08A24E90A24E81E4`, jak bylo popsáno dříve. Věděli jsme to už předtím, ale teď to víme jistě.

Jakmile jste si jisti, že jste našli správný oddíl, zkopírujte UUID. Kopírování z emulátoru terminálu se obvykle provádí pomocí `ctrl+shift+C`.


### 3. Přidání záznamu do /etc/fstab

Nyní, když jsme získali UUID našeho oddílu, je čas otevřít soubor fstab.

Neváhejte použít textový editor dle vašeho výběru, v tomto příkladu použijeme nano. Aby bylo možné soubor fstab editovat, musí být otevřen jako root:

```sh
❯ sudo nano /etc/fstab
```

Pomocí šipek přejděte na konec souboru fstab a na novém řádku vytvoříme náš nový záznam:

```sh
UUID=08A24E90A24E81E4 /media/windows ntfs3 defaults,nofail 0 0
```
Rozpis tohoto záznamu je následující:

- `UUID=08A24E90A24E81E4` Toto je souborový systém, který chceme připojit, identifikovaný podle jeho UUID. Existují i jiné metody identifikace souborového systému, ačkoli UUID bývá nejbezpečnější. Další metody jsou uvedeny [zde](https://wiki.archlinux.org/title/Fstab#Identifying_file_systems).

- `/media/windows` [Linux Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html) uvádí, že `/media/` je správné místo pro připojování vyměnitelných disků. `windows` označuje adresář, do kterého chceme náš disk připojit. Každý disk, který chceme připojit, bude potřebovat svůj vlastní adresář.

- `ntfs3` Toto je typ souborového systému pro náš souborový systém. V našem příkladu explicitně používáme ovladač kernelu ntfs3. Jinými příklady by byly `ext4`, `xfs` nebo podobné. Toto explicitní určení typu souborového systému může být nahrazeno `auto`, aby příkaz mount mohl provést nejlepší odhad.

- `defaults,nofail` Volby, které chceme předat příkazu mount pro tento disk. `nofail` znamená, že pokud se tento disk nepodaří připojit, nezpůsobí to chybu při spouštění systému. Spouštění bude pokračovat jako obvykle. `defaults` znamená standardní sadu logických voleb. Typicky `rw`, `ro` nebo podobné.

- `první 0` dump, toto je v moderních systémech obvykle zastaralé. Ponechání této hodnoty na 0 ničemu neuškodí. Více si o tom můžete přečíst [zde](https://linux.die.net/man/8/dump).

- `druhá 0` Toto nastavuje pořadí pro kontrolu souborového systému při spouštění. Pro kořenový oddíl (pokud váš kořenový souborový systém není btrfs nebo xfs, což by mělo být nastaveno na 0) by to mělo být 1. Všechny ostatní souborové systémy ve vašem fstab by měly mít buď 0 (vypnuto), nebo 2. Více informací [zde](https://man.archlinux.org/man/fsck.8).

Volby jsou mnohem podrobněji vysvětleny [zde](https://man7.org/linux/man-pages/man5/fstab.5.html) a [zde](https://man7.org/linux/man-pages/man8/mount.8.html).

#### Další info
Mimochodem, všechny volby za deklarací typu souborového systému jsou volitelné, pokud je neměníte z výchozího nastavení.

Tedy

`UUID=<UUID oddílu> /media/foo somefs`

a

`UUID=<UUID oddílu> /media/foo somefs defaults 0 0`

jsou ekvivalentní. `somefs` následované ničím je implicitně `somefs defaults 0 0`.

#### Důležité pro oddíly s Windows

Pokud postupujete podle tohoto průvodce s oddílem Windows, vaše volby by měly být `uid=1000,gid=1000,rw,user,exec,umask=000`, přičemž uid a gid nahradíte vaším ID uživatele a ID skupiny. Pokud neposkytnete oprávnění user a exec, Windows může váš disk uzamknout a nebudete moci nic měnit. To se může stát bez ohledu na oprávnění, pokud nevypnete rychlé spouštění (fast boot).

Pokud nenastavíte umask=000, některé soubory mohou být nezapisovatelné v závislosti na situaci.



### 4. Dokončení

Pokud si přejete nyní připojit disk, pro který jste vytvořili záznam, musíte spustit následující příkaz:

```sh
❯ sudo systemctl daemon-reload
```

a poté:

```sh
❯ sudo mount -a
```

Váš disk by se nyní měl objevit pod `/media/windows` a objeví se tam i při příštím spuštění a i v budoucnu.

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

 Pokud si přejete vytvořit odkaz na váš nově připojený disk ve vašem domovském adresáři, můžete spustit následující příkaz:

 ```sh
 ❯ ln -s /media/windows ~/Windows
 ```

 Pro ověření, že to fungovalo:

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

- Najděte UUID vašeho oddílu
```sh
lsblk -f
```

- Otevřete /etc/fstab
```sh
sudo nano /etc/fstab
```

- Vytvořte záznam na konci souboru
```sh
UUID=<UUID oddílu> /media/foo somefs defaults 0 0
```
Nahraďte `<UUID oddílu>`, `foo` a `somefs` vaším UUID, adresářem a souborovým systémem, např. ext4, a také nastavte jakékoli další volby, které byste mohli chtít po defaults, jako je `_netdev` pro NAS nebo `nofail` pro jakýkoli nekritický disk.

- Znovu načtěte vaše daemony

```sh
❯ sudo systemctl daemon-reload
```

- Připojte váš disk
```sh
❯ sudo mount -a
```

Tento disk je nyní připojen a bude se připojovat i při každém dalším spuštění.

## Další čtení
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html - Standard hierarchie souborového systému (Filesystem Hierarchy Standard)
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s11.html - FHS o `/media/`
- https://linux.die.net/man/8/dump - manuál pro `dump`
- https://man.archlinux.org/man/fsck.8 - manuál pro `fsck`
- https://man.archlinux.org/man/fstab.5.en - man stránka pro fstab
- https://wiki.archlinux.org/title/Fstab - Arch Linux wiki pro fstab
