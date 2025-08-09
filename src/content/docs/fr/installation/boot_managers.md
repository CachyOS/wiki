---
title: Gestionnaires d'amorçage proposés
description: Description et recommandations pour les gestionnaires d'amorçage actuellement proposés
---

Pour offrir la meilleure expérience sur une large gamme d'appareils, CachyOS propose actuellement les gestionnaires d'amorçage suivants : systemd-boot, rEFInd, GRUB et Limine.

Cet article wiki décrira les fonctionnalités de chaque gestionnaire d'amorçage et inclura nos recommandations sur quand les choisir. Pour la configuration, veuillez consulter la [Configuration du gestionnaire d'amorçage](/fr/configuration/boot_manager_configuration).

## systemd-boot

Faisant partie de la famille systemd, systemd-boot a été créé pour être aussi simple que possible. Par conséquent, il ne prend en charge que les systèmes basés sur l'UEFI. Cette conception simple mais efficace garantit sa fiabilité et sa rapidité. Cependant, cela se fait au détriment des fonctionnalités avancées prises en charge par d'autres gestionnaires d'amorçage.

### Avantages
- Configuration très simple.
- Les entrées de démarrage sont séparées en plusieurs fichiers, ce qui facilite leur gestion.

### Inconvénients
 - Manque de prise en charge correcte pour le BIOS/MBR.
 - Conception très dépouillée, sans aucune forme de thème ou de personnalisation.
 - La configuration n'est pas générée automatiquement, sauf si elle est configurée pour le faire. CachyOS inclut un gestionnaire pour systemd-boot afin de proposer une configuration autogénérée.
 - Ne peut lire les images de démarrage que sur les systèmes de fichiers pris en charge par l'EFI (FAT, FAT16, FAT32).
 - Incapacité à trouver des images de démarrage sur des partitions autres que la sienne.
 - Ne prend pas correctement en charge la restauration des instantanés Btrfs en raison de l'obligation de stocker les images du noyau sur la partition de démarrage plutôt que sur le système de fichiers racine.

## rEFInd

Fork de rEFIt, rEFInd a été principalement conçu pour faciliter le multi-démarrage pour les utilisateurs de MacOS. Cependant, rEFInd a évolué pour devenir agnostique au matériel, ce qui en fait un excellent choix pour le multi-démarrage sur n'importe quel système. L'attrait principal de rEFInd est sa capacité à analyser tous les périphériques de stockage au démarrage et à afficher en conséquence les entrées pour chaque OS/noyau trouvé.

### Avantages

- Détection automatique de tous les systèmes d'exploitation et noyaux sur les périphériques de stockage.
- Peu ou pas de configuration requise grâce à la détection automatique mentionnée ci-dessus.
- Interface utilisateur beaucoup plus graphique rappelant le sélecteur de démarrage de MacOS.
- Excellent support des thèmes.
- Prise en charge facultative de l'écran tactile.
- Capable de lire les images de démarrage à partir des systèmes de fichiers EFI (FAT, FAT16, FAT32) ainsi que EXT4 et BTRFS. La prise en charge d'autres systèmes de fichiers peut être ajoutée en installant des pilotes EFI depuis le paquet ``efifs``.

### Inconvénients

- Ne prend pas en charge les systèmes BIOS.

## GRUB

GRUB est le plus ancien des gestionnaires d'amorçage disponibles. Il dispose d'un très large éventail de fonctionnalités, fonctionne sur presque toutes les machines et est le gestionnaire d'amorçage Linux le plus couramment utilisé.

### Avantages
- Capable de lire les images de démarrage depuis presque tous les systèmes de fichiers Linux disponibles.
- Largement utilisé et les informations en ligne sont faciles à trouver.
- Capable de déchiffrer les partitions de démarrage chiffrées.
- Permet de démarrer sur les machines BIOS.
- D'apparence datée, mais dispose d'un excellent support de thèmes pour compenser.

### Inconvénients
- Lourd car il prend en charge du matériel beaucoup plus ancien et nécessite de nombreux pilotes de système de fichiers.
- Nettement plus lent par rapport à systemd-boot, rEFInd et Limine.

## Limine

Limine est un chargeur d'amorçage multiprotocole moderne, avancé et portable. Il sert d'implémentation de référence pour le protocole d'amorçage Limine et prend en charge le démarrage de Linux ainsi que le chaînage d'autres chargeurs d'amorçage.

### Avantages

- Prend en charge plusieurs protocoles de démarrage, y compris Multiboot2 et les protocoles de démarrage Linux.
- Peut démarrer sur les systèmes UEFI et BIOS, ce qui le rend polyvalent pour différentes configurations matérielles.
- Possède des capacités de personnalisation par thèmes similaires à GRUB.
- Prend en charge directement les instantanés Btrfs, ce qui est activé par défaut pour les installations qui utilisent Btrfs comme système de fichiers.

### Inconvénients

- Ne prend en charge que quelques systèmes de fichiers, tels que FAT12, FAT16, FAT32 et ISO9660 pour la partition `/boot`. Peut nécessiter une configuration supplémentaire pour les systèmes utilisant d'autres systèmes de fichiers.
- Contrairement à d'autres chargeurs d'amorçage, Limine n'ajoute pas automatiquement d'entrée à la NVRAM sur les systèmes UEFI ; cela doit être fait manuellement à l'aide d'outils comme `efibootmgr` ou géré via `limine-entry-tool`, qui est préinstallé par défaut sur CachyOS.

## TL;DR

Choisissez **Limine** pour BTRFS : il offre une configuration facile avec une prise en charge intégrée des instantanés BTRFS, fonctionne sur les systèmes BIOS et UEFI, et gère bien le multi-démarrage avec Windows.

Choisissez **GRUB** uniquement si vous avez spécifiquement besoin de la prise en charge des partitions de démarrage chiffrées.

Envisagez **rEFInd** si vous privilégiez une interface graphique soignée et que vous faites principalement du multi-démarrage sur des systèmes UEFI.

Choisissez **systemd-boot** si vous voulez la configuration la plus simple et n'avez pas besoin de la prise en charge des instantanés BTRFS par défaut.
