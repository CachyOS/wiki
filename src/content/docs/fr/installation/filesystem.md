---
title: Systèmes de fichiers
description: Description et recommandations pour les systèmes de fichiers disponibles. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS propose 5 systèmes de fichiers différents pour permettre à l'utilisateur de choisir celui qui correspond le mieux à ses besoins. Ce qui suit passera en revue les avantages, les inconvénients et les recommandations pour chaque système de fichiers. Chaque système de fichiers est livré avec ses exigences et utilitaires préinstallés sur CachyOS.

:::note
BTRFS est le système de fichiers par défaut et recommandé pour CachyOS. Choisissez-le en cas de doute.
:::

## XFS
XFS est un système de fichiers journalisé créé et développé par Silicon Graphics, Inc. Il a été créé en 1993, porté sur Linux en 2001, et est maintenant largement pris en charge par la plupart des distributions Linux.
### Avantages
- Rapide, XFS a été conçu à l'origine avec la vitesse et une scalabilité extrême à l'esprit.
- Fiable, XFS utilise plusieurs technologies pour prévenir la corruption des données.
- Résistant à la fragmentation grâce à sa nature basée sur les extents et sa stratégie d'allocation différée.
### Inconvénients
- Ne peut pas être réduit.

### Utilitaire en espace utilisateur
Le paquet contenant les outils en espace utilisateur pour gérer les systèmes de fichiers XFS est `xfsprogs`.

### Recommandation :
XFS est le système de fichiers recommandé pour les utilisateurs qui n'ont pas besoin de fonctionnalités avancées et qui veulent simplement un système de fichiers rapide et fiable.


## BTRFS
BTRFS est un système de fichiers moderne avec copie sur écriture (copy-on-write, COW) créé en 2007 et déclaré stable dans le noyau Linux en 2013. Il est largement pris en charge et est principalement connu pour son ensemble de fonctionnalités avancées.
### Avantages
- Compression transparente. BTRFS prend en charge la compression transparente des fichiers pour permettre des économies d'espace significatives sans intervention de l'utilisateur. CachyOS est livré avec la compression ZSTD réglée au niveau 3 par défaut.
- Fonctionnalité d'instantanés (snapshots). BTRFS tire parti de sa nature COW pour permettre la création d'instantanés de sous-volumes qui occupent très peu d'espace réel.
- Fonctionnalité de sous-volumes permettant un meilleur contrôle sur le système de fichiers.
- Peut être agrandi ou réduit.
- Développement très rapide.
### Inconvénients
- Nécessite parfois une défragmentation ou un rééquilibrage.
- Moins performant sur les disques rotatifs en raison de la fragmentation susmentionnée.
### Utilitaire en espace utilisateur
Le paquet utilitaire en espace utilisateur pour Btrfs est `btrfs-progs`.

### Organisation des sous-volumes
CachyOS fournit une organisation des sous-volumes prête à l'emploi pour permettre une fonctionnalité d'instantanés facile.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Recommandation :
BTRFS est recommandé pour les utilisateurs qui souhaitent une fonctionnalité d'instantanés/sauvegarde et une compression transparente.


## EXT4
EXT4 (fourth extended filesystem) est le système de fichiers Linux le plus couramment utilisé. EXT4 a été rendu stable dans le noyau Linux en 2008.
### Avantages
- Très courant, permettant un accès facile à de nombreuses ressources.
- Fiable. EXT4 a fait ses preuves en matière de fiabilité.
- Peut être agrandi ou réduit.
### Inconvénients
- Construit sur une ancienne base de code.
- Manque de nombreuses fonctionnalités avancées offertes par d'autres systèmes de fichiers.

### Utilitaires en espace utilisateur
Le paquet pour gérer ext4 est `e2fsprogs`.

### Recommandation :
EXT4 est recommandé pour les utilisateurs qui veulent le système de fichiers le plus simple et le plus couramment utilisé.


## ZFS

ZFS est un système de fichiers avancé initialement développé par Sun Microsystems en 2005. ZFS possède de nombreuses fonctionnalités, mais il est sous licence CDDL, ce qui signifie qu'il ne peut pas être inclus dans le noyau Linux et nécessite l'installation d'un module séparé.

:::caution
N'utilisez pas un noyau temps réel avec ZFS, ce n'est pas compatible en raison de problèmes de licence.
:::

### Avantages
- Stockage en pool (zpool)
- Instantanés utilisant le COW
- Compression
- Prise en charge de Raid-Z
- Le cache ARC permet des temps de lecture incroyablement rapides sur les fichiers fréquemment consultés.
### Inconvénients
- Très compliqué à utiliser et à comprendre en raison de fonctionnalités comme zpool et ARC.
- L'ARC nécessite beaucoup de RAM pour être efficace.
- Non inclus dans le noyau Linux, donc dépendant d'un module de noyau tiers (OpenZFS).
- Incompatible avec la préemption temps réel.

### Outils requis
'ZFS-Module' CachyOS fournit un module ZFS précompilé pour chaque version du noyau.
`zfs-utils` pour les utilitaires en espace utilisateur.

### Recommandation :
ZFS ne doit être utilisé que par les utilisateurs avancés qui souhaitent utiliser ses fonctionnalités avancées, telles que le stockage en pool ou le cache ARC.


## F2FS
F2FS (Flash-Friendly File System) est un système de fichiers flash initialement créé et développé par Samsung pour le noyau Linux. F2FS a été créé pour répondre spécifiquement aux besoins du stockage à mémoire flash NAND utilisé dans les supports de stockage modernes.
### Avantages
- Conçu pour être adapté à la mémoire flash.
- Compression transparente utilisée pour réduire les écritures sur disque (les économies d'espace ne sont actuellement pas utilisables par l'utilisateur).
- Plus rapide que d'autres systèmes de fichiers comme EXT4.
- Meilleure répartition de l'usure (wear leveling), ce qui prolonge encore la durée de vie de la mémoire flash NAND.
### Inconvénients
- Ne peut pas être réduit.
- Les économies d'espace dues à la compression ne peuvent actuellement pas être utilisées par l'utilisateur. Cela pourrait être ajouté à l'avenir.
- `fsck` (vérification du système de fichiers) relativement faible.
- Revenir à une version du noyau antérieure à celle qui a créé le système de fichiers peut causer des problèmes.

### Utilitaires en espace utilisateur
L'utilitaire principal pour f2fs est `f2fs-tools`.

### Recommandation :
F2FS n'est recommandé que pour les utilisateurs qui veulent maximiser la durée de vie de leur mémoire flash NAND.

## BcacheFS
Bcachefs est un nouveau système de fichiers avancé pour Linux, qui met l'accent sur la fiabilité et la robustesse et dispose de l'ensemble complet des fonctionnalités que l'on attend d'un système de fichiers moderne.

:::caution[ATTENTION]
Bcachefs est encore considéré comme expérimental et peut présenter des problèmes.
:::

### Avantages
- Copie sur écriture (CoW) - comme BTRFS ou ZFS
- Compression
- Mise en cache, Placement des données
- Réplication
- Scalable
### Inconvénients
- Expérimental
- La configuration peut être compliquée

## TL;DR
Utilisez le système de fichiers par défaut **BTRFS** car il est considéré comme stable et possède de nombreuses fonctionnalités intéressantes (instantanés, compression, etc.). Utilisez **XFS** ou **EXT4** pour un système de fichiers simple et rapide.
