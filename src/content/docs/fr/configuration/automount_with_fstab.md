---
title: Montage automatique de disques supplémentaires au démarrage via fstab
description: Montez des disques statiques supplémentaires au démarrage en utilisant le fichier situé dans /etc/fstab
---

Ce tutoriel décrit les bases de l'utilisation du fichier fstab situé dans /etc/ afin de monter des disques statiques au démarrage. Il explique brièvement comment trouver l'UUID d'une partition ou d'un disque, la fonction de certaines options, et propose des lectures complémentaires si les informations fournies s'avéraient insuffisantes.

## Prérequis
- Accès root (superutilisateur)

## Ajouter des entrées à /etc/fstab

### 1. Lister les UUID de vos partitions
Dans l'émulateur de terminal de votre choix (Konsole, Alacritty, Kitty, etc.), exécutez la commande suivante :

```sh
lsblk -f

# NAME        FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
# zram0                                                                              [SWAP]
# nvme0n1
# ├─nvme0n1p1 vfat   FAT32       E04D-9F05
# ├─nvme0n1p2
# ├─nvme0n1p3 ntfs               08A24E90A24E81E4                      715.4G    50%
# ├─nvme0n1p4 vfat   FAT32       E09C-D4DA                             628.1M    39% /boot
# ├─nvme0n1p5 ext4   1.0         187a9f06-9411-48d9-b941-f03c2e605812  203.6G    47% /
# └─nvme0n1p6 ntfs
```

Dans notre exemple, nous savons que nous voulons monter une partition Windows, qui est en ntfs. Nous savons aussi qu'environ la moitié de son espace est disponible. Nous pouvons donc en déduire que la partition que nous voulons monter est `nvme0n1p3` et que son UUID est `08A24E90A24E81E4`, avec un système de fichiers `ntfs` dans cet exemple.

### 2. Identifier votre partition

Souvent, `lsblk -f` vous fournira toutes les informations nécessaires pour monter votre disque via /etc/fstab. Si vous n'êtes toujours pas sûr de la partition à choisir, vous pouvez exécuter la commande suivante :

```sh
sudo fdisk -l

# Device              Start        End    Sectors  Size Type
# /dev/nvme0n1p1       2048     206847     204800  100M EFI System
# /dev/nvme0n1p2     206848     239615      32768   16M Microsoft reserved
# /dev/nvme0n1p3     239616 2997384182 2997144567  1.4T Microsoft basic data
# /dev/nvme0n1p4 2997385216 2999482367    2097152    1G EFI System
# /dev/nvme0n1p5 2999482368 3905454079  905971712  432G Linux root (x86-64)
# /dev/nvme0n1p6 3905454080 3907026943    1572864  768M Windows recovery environment
```

Nous connaissons déjà notre UUID dans cet exemple. Cependant, `fdisk -l` peut rendre les choses un peu plus claires en nous montrant la taille exacte de la partition (1.4T) ainsi que son type (Microsoft basic data).

Cela devrait nous confirmer sans l'ombre d'un doute que la partition que nous voulons est bien `nvme0n1p3` avec un UUID de `08A24E90A24E81E4` comme décrit précédemment. Nous le savions déjà, mais maintenant nous en sommes absolument certains.

Une fois que vous êtes sûr d'avoir trouvé la bonne partition, copiez l'UUID. Pour copier depuis l'émulateur de terminal, la combinaison de touches est généralement `ctrl+shift+C`.


### 3. Ajouter une entrée à /etc/fstab

Maintenant que nous avons obtenu l'UUID de notre partition, il est temps d'ouvrir le fichier fstab.

N'hésitez pas à utiliser votre éditeur de texte préféré. Dans cet exemple, nous utiliserons nano. Pour modifier le fichier fstab, il doit être ouvert en tant que root :

```sh
sudo nano /etc/fstab
```

À l'aide des flèches directionnelles, naviguez jusqu'en bas du fichier fstab, puis créez notre nouvelle entrée sur une nouvelle ligne vide :

```sh
UUID=08A24E90A24E81E4 /media/windows ntfs3 defaults,nofail 0 0
```
Voici la décomposition de cette entrée :

- `UUID=08A24E90A24E81E4` est le système de fichiers que nous voulons monter, identifié par son UUID. Il existe d'autres méthodes pour identifier votre système de fichiers, bien que l'UUID soit généralement la plus sûre. Des méthodes supplémentaires sont listées [ici](https://wiki.archlinux.org/title/Fstab#Identifying_file_systems).

- `/media/windows` est le point de montage de notre disque. La [Norme sur la hiérarchie des systèmes de fichiers Linux (FHS)](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html) stipule que `/media/` est l'emplacement approprié pour monter des disques amovibles. `windows` indique le répertoire dans lequel nous souhaitons monter notre disque. Chaque disque que nous voulons monter nécessitera son propre répertoire.

- `ntfs3` est le type de système de fichiers à utiliser. Dans notre exemple, nous utilisons explicitement le pilote de noyau ntfs3. D'autres exemples seraient `ext4`, `xfs` ou similaires. Cette déclaration explicite du type de système de fichiers peut être remplacée par `auto` pour permettre à la commande `mount` de faire sa meilleure estimation.

- `defaults,nofail` sont les options que nous voulons passer à la commande `mount` pour ce disque. `nofail` signifie que si ce disque ne parvient pas à se monter, cela ne provoquera pas d'erreur au démarrage. Le démarrage se poursuivra normalement. `defaults` implique un ensemble d'options logiques standard. Typiquement `rw`, `ro`, ou similaires.

- `le premier 0` (dump) est généralement obsolète dans les systèmes modernes. Laisser cette valeur à 0 ne posera aucun problème. N'hésitez pas à en lire plus à ce sujet [ici](https://linux.die.net/man/8/dump).

- `le second 0` (pass) définit l'ordre des vérifications du système de fichiers au démarrage. Pour une partition racine, cette valeur devrait être 1, sauf si votre système de fichiers racine est btrfs ou xfs, auquel cas elle devrait être 0. Tous les autres systèmes de fichiers dans votre fstab devraient avoir soit 0 (désactivé), soit 2. Plus d'informations [ici](https://man.archlinux.org/man/fsck.8).

Les options sont expliquées [ici](https://man7.org/linux/man-pages/man5/fstab.5.html) et [ici](https://man7.org/linux/man-pages/man8/mount.8.html) de manière beaucoup plus détaillée.

#### Plus d'infos
Pour information, toutes les options après la déclaration du type de système de fichiers sont facultatives si vous ne les modifiez pas par rapport aux valeurs par défaut.

Ainsi

`UUID=<UUID de la partition> /media/foo un_fs`

et

`UUID=<UUID de la partition> /media/foo un_fs defaults 0 0`

sont équivalents. `un_fs` suivi de rien est implicitement `un_fs defaults 0 0`.

#### Important pour les partitions Windows

Si vous suivez ce guide avec une partition Windows, vos options devraient être `uid=1000,gid=1000,rw,user,exec,umask=000` en remplaçant uid et gid par votre identifiant d'utilisateur et de groupe. Si vous n'accordez pas les permissions `user` et `exec`, Windows pourrait verrouiller votre disque, vous empêchant de modifier quoi que ce soit. Cela peut se produire indépendamment des permissions si vous ne désactivez pas le démarrage rapide (fast boot) de Windows.

Si vous ne définissez pas `umask=000`, certains fichiers pourraient être non modifiables en fonction des permissions de montage par défaut.



### 4. Finalisation

Si vous souhaitez monter maintenant le disque pour lequel vous avez créé une entrée, vous devez exécuter la commande suivante :

```sh
sudo systemctl daemon-reload
```

puis :

```sh
sudo mount -a
```

Votre disque devrait maintenant apparaître sous `/media/windows`, et il y apparaîtra à chaque redémarrage.

```sh
ls /media/windows
# '$Recycle.Bin'             Linux                  SteamLibrary
# AMD                       Modding                swapfile.sys
# Apps                      pagefile.sys          'System Volume Information'
# bootTel.dat               PerfLogs               Users
# Development               ProgramData            WiiU
# 'Documents and Settings'  'Program Files'         Windows
# DumpStack.log.tmp        'Program Files (x86)'   XboxGames
# FanControl                Recovery               xiv_modding
# Games                     RetroArch-Win64
# Intel                    'Ship of Harkinian'
 ```

 Si vous souhaitez créer un lien vers votre disque nouvellement monté dans votre répertoire personnel, vous pouvez exécuter la commande suivante :

 ```sh
 ln -s /media/windows ~/Windows
 ```

 Pour montrer que cela a fonctionné :

 ```sh
ls ~/Windows
# '$Recycle.Bin'             Linux                  SteamLibrary
# AMD                       Modding                swapfile.sys
# Apps                      pagefile.sys          'System Volume Information'
# bootTel.dat               PerfLogs               Users
# Development               ProgramData            WiiU
#'Documents and Settings'  'Program Files'         Windows
# DumpStack.log.tmp        'Program Files (x86)'   XboxGames
# FanControl                Recovery               xiv_modding
# Games                     RetroArch-Win64
# Intel                    'Ship of Harkinian'
 ```


## TL;DR (En résumé)

- Trouvez l'**UUID** de votre partition
```sh
lsblk -f
```

- Ouvrez `/etc/fstab`
```sh
sudo nano /etc/fstab
```

- Créez une entrée à la fin du fichier
```sh
UUID= <UUID de la partition un_fs defaults 0 0 >/media/foo
```
En remplaçant `<UUID de la partition>`, `foo`, et `un_fs` par votre UUID, votre répertoire et votre système de fichiers (par ex., ext4), et en ajoutant toute autre option que vous pourriez souhaiter après `defaults`, comme `_netdev` pour un NAS, ou `nofail` pour tout disque non critique.

- Rechargez votre daemon

```sh
sudo systemctl daemon-reload
```

- Montez votre disque
```sh
sudo mount -a
```

Ce disque est maintenant monté, et le sera également au démarrage à l'avenir.

## Lectures complémentaires
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html - Norme sur la hiérarchie des systèmes de fichiers (FHS)
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s11.html - FHS sur `/media/`
- https://linux.die.net/man/8/dump - manuel pour `dump`
- https://man.archlinux.org/man/fsck.8 - manuel pour `fsck`
- https://man.archlinux.org/man/fstab.5.en - page de manuel pour fstab
- https://wiki.archlinux.org/title/Fstab - wiki Arch Linux pour fstab
