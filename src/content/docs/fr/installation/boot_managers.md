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

Pour plus d’explications détaillées  et la raison de l’utilisation des deux termes de façon interchangeable, veuillez vous rendre sur ce lien "[La gestion des chargeurs de démarrage EFI sur Linux Linux: Les principes de base](https://www.rodsbooks.com/efi-bootloaders/principles.html)" par Rod Smith.


## systemd-boot

Faisant parti de la famille systemd, systemd-boot a été créé pour etre le plus simple possible, par conséquent, il ne supporte que les systèmes basés sur UEFI. Cette conception simple mais efficace, lui assure rapidité et fiabilité. Cependant, cela se fait au détriment de fonctionnalités avancées prises en charge par d’autres gestionnaires de démarrage.

### Les avantages

- Le plus rapide des trois gestionnaires de démarrage.
- Une configuration vraiment simple.
- Les entrées de démarrages  sont séparées en plusieurs fichier ce qui les rend faciles à gérer.
- Design simple mais moderne.

### Les inconvénients

 – Ne supporte pas les systèmes BIOS.
 – Manque de personnalisation et de thèmes.
 - La configuration n'est pas générée automatiquement, sauf si elle est configurée pour le faire. CachyOS inclut le gestionnaire de démarrage systemd pour offrir une configuration générée automatiquement.
- Capable de lire uniquement les images de démarrage sur les systèmes de fichiers pris en charge par EFI (FAT, FAT16, FAT32)
- Impossibilité de trouver des images de démarrage sur des partitions autres que la sienne sans intervention manuelle.

### Disposition de partitionnement
- Partition de démarrage EFI FAT32 d'au moins 1 Go (2 Go recommandés) (/boot)
- Système de fichiers racine sélectionné par l'utilisateur d'au moins 5,5 Go (/)

### Recommendation:

Systemd-boot est le gestionnaire de démarrage recommandé pour CachyOS. Choisissez-le si vous n'avez besoin d'aucune des fonctionnalités spécifiques à grub et rEFInd.



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
