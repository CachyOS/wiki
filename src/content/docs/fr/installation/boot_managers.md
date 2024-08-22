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

- Ne supporte pas les systèmes BIOS.
- Manque de personnalisation et de thèmes.
- La configuration n'est pas générée automatiquement, sauf si elle est configurée pour le faire. CachyOS inclut le gestionnaire de démarrage systemd pour offrir une configuration générée automatiquement.
- Capable de lire uniquement les images de démarrage sur les systèmes de fichiers pris en charge par EFI (FAT, FAT16, FAT32)
- Impossibilité de trouver des images de démarrage sur des partitions autres que la sienne sans intervention manuelle.

### Disposition de partitionnement
- Partition de démarrage EFI FAT32 d'au moins 1 Go (2 Go recommandés) (/boot)
- Système de fichiers racine sélectionné par l'utilisateur d'au moins 5,5 Go (/)

### Recommendation:

Systemd-boot est le gestionnaire de démarrage recommandé pour CachyOS. Choisissez-le si vous n'avez besoin d'aucune des fonctionnalités spécifiques à grub et rEFInd.

## rEFInd

rEFInd, un fork de rEFIt, a été conçu à l'origine pour faciliter le démarrage multiple des utilisateurs de MacOS. Cependant, rEFInd a évolué pour devenir indépendant du matériel, ce qui en fait un excellent choix pour le démarrage multiple sur n'importe quel système. Le principal attrait de rEFInd est sa capacité à analyser tous les périphériques de stockage au démarrage et à afficher en conséquence les entrées pour chaque système d'exploitation/noyau trouvé.

### Les avantages

- Détection automatique de tous les systèmes d'exploitation et noyaux sur les périphériques de stockage.
- Peu ou pas de configuration requise en raison de la détection automatique mentionnée ci-dessus.
- Prise en charge facile du démarrage sécurisé
- Interface utilisateur beaucoup plus graphique rappelant le sélecteur de démarrage MacOS.
- Excellent support de thème
- CachyOS fournit une disposition de partition différente pour rEFInd afin d'augmenter encore la compatibilité de démarrage multiple avec d'autres systèmes d'exploitation tels que Windows.
- Capable de lire les images de démarrage à partir des systèmes de fichiers EFI (FAT, FAT16, FAT32) ainsi que EXT4 et BTRFS.

### Les inconvénients

- Ne prend pas en charge les systèmes BIOS.
- Légèrement plus lent en raison de la fonction de détection automatique.

### Disposition de partitionnement

- Partition EFI FAT32 d'au moins 50 Mo (/boot/efi)
- Partition de démarrage ext4 d'au moins 1 Go (2 Go recommandés) (/boot)
- Système de fichiers racine sélectionné par l'utilisateur d'au moins 5,5 Go (/)

### Recommandation

rEFInd est le gestionnaire de démarrage recommandé pour le démarrage avec plusieurs systèmes d'exploitation.


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
