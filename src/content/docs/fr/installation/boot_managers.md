---
title: Lesgestionnaires de démarrage inclus
description: Description et recommandations pour les getsionnaires actuellement inclus dans CachyOS
---

Afin d’offrir la meilleur expérience possible sur un large éventail d’appareils, CachyOS offre actuellement les gestionnaires de démarrage suivant : systemd-boot, rEFInd and Grub.
Ce Wiki  va vous décrire l’ensemble des fonctionnalités de chaque gestionnaire de démarrage et va aussi inclure nos conseils pour votre choix.

## Préambule: Gestionnaire de démarrage ! = Chargeur de démarrage

Lorsqu'on parle de systèmes UEFI, le terme correct pour désigner le menu de démarrage présenté par systemd-boot, rEFInd et même GRUB est

**gestionnaire de démarrage**.

En guise d'explication simplifiée, un gestionnaire de démarrage présente uniquement les options de démarrage et confie le contrôle du processus de démarrage au système d'exploitation.
Tandis qu'un chargeur de démarrage gère la tâche de chargement d'un noyau de système d'exploitation en mémoire, souvent avec des fichiers de support tels qu'un fichier de disque RAM initial Linux, et de démarrage du noyau en cours d'exécution.

For a more detailed explanation and the reason both terms are often used interchangeably,
please see "[Managing EFI Boot Loaders for Linux: Basic Principles](https://www.rodsbooks.com/efi-bootloaders/principles.html)" by Rod Smith.

## systemd-boot
Part of systemd family, systemd-boot was created to be as simple as possible, therefore it only has support for UEFI based systems. This simple yet efficient design ensures it is reliable and fast. However this comes at the cost of advanced features supported by other boot managers.

### Pros
- Fastest out of the three boot managers.
- Very simple configuration.
- Boot entries are separated into multiple files making it easier to manage.
- Simple yet modern design.

### Cons
 - Does not support BIOS systems.
 - Lacks any kind of theming or customization.
 - Config is not auto-generated unless configured to do so. CachyOS includes systemd-boot manager to offer auto-generated configuration.
 - Only able to read boot images on EFI supported filesystems (FAT, FAT16, FAT32)
 - Inability to find boot images on partitions other than its own without manual intervention.

### Partitioning layout
- Minimum 1GB (2GB recommended) FAT32 EFI boot partition (/boot)
- Minimum 5.5GB user selected root filesystem (/)

### Recommendation:
Systemd-boot is the recommended boot manager for CachyOS. Choose this one if you do not need any of the features specific to grub and rEFInd.


## rEFInd
A fork of rEFIt, rEFInd was primarily made to make it easier for MacOS users to multi-boot. However rEFInd has evolved into being hardware agnostic making it a great choice for multi-booting on any system. The main draw of rEFInd is its ability to scan all storage devices at boot and correspondingly display entries for each OS/Kernel found.

### Pros
- Autodetection of all operating systems and kernels on storage devices.
- Little to no configuration required due to aforementioned autodetection.
- Easily able to support secure boot
- Much more graphical UI reminiscent of the MacOS Boot selector.
- Great theming support
- CachyOS provides a different partition layout for rEFInd to further increase multi-booting compatibility with other OS such as Windows.
- Able to read boot images from EFI filesystems (FAT,FAT16,FAT32) as well as EXT4 and BTRFS.

### Cons
- Does not support BIOS systems.
- Slightly slower due to the autodetection feature.

### Partitioning Layout
- Minimum 50MB FAT32 EFI partition (/boot/efi)
- Minimum 1GB (2GB recommended) ext4 boot partition (/boot)
- Minimum 5.5GB user selected root filesystem (/)

### Recommendation
rEFInd is the recommended boot manager for booting with multiple operating systems.


## Grub
Grub is the oldest of the available boot managers and consequently the only one that supports BIOS booting. It has a very large featureset, works on almost every machine and is the most commonly used Linux boot manager.
The following is a list of its main pros and cons.

### Pros
- Able to read boot images from almost all available linux filesystems.
- Widely used and very easy to find information online.
- Able to decrypt encrypted boot partitions.
- The only boot*loader* offered allowing it to boot BIOS machines.
- Looks dated. However has great theme support to compensate.

### Cons
- Bloated due to needing to support much older hardware and needing lots of filesystem drivers.
- Slightly slower than other boot managers due to aforementioned bloat.
- Complicated config that needs to be regenerated every time a kernel is updated. (However this is done automatically.)

### Partitioning layout

#### BIOS
- Minimum 6.5GB user selected root filesystem (/)

#### UEFI
- Minimum 50MB EFI partition (/boot/efi)
- Minimum 6.5GB user selected root filesystem (/)

### Recommendation
Grub is the only available boot manager if your machine only supports BIOS booting. It is also the only boot manager that supports boot partition encryption (Different from disk encryption). If you do not fit those criteria alternative boot managers are recommended.


## TL:DR
Choose Grub if your machine is BIOS only, pick rEFInd if you plan on having multiple operating systems on your machine (Especially Windows), otherwise go with systemd-boot.
