---
title: Système de fichiers
description: Description et recommandations pour les différents types de fichiers disponibles. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

# Système de fichiers

CachyOS propose 5 systèmes de fichiers pour permettre à l'utilisateur de choisir celui qui correspond le mieux à ses besoins. Ci-dessous vous trouverez les avantages, les inconvénients et les recommandations pour chacun des système de fichiers. Chaque système de fichiers est livré avec ses exigences/utilitaires préinstallés sur CachyOS.


:::note
Par défaut, le systéme BTRFS sera choisi à l'installation si aucun autre systéme de fichiers est choisi par l'utilisateur
:::

## XFS

XFS est un système de fichiers journalisé créé et développé par la société Silicon Graphics. Il a été créé en 1993, porté sur Linux en 2001 et est désormais largement pris en charge par la plupart des distributions Linux.

### Avantages

- Rapide, XFS a été conçu à l'origine avec une vitesse et une évolutivité extrême à l'esprit.
- Fiable, XFS utilise plusieurs technologies pour empêcher la corruption des données.
- Résistant à la fragmentation en raison de sa nature étendue et de sa stratégie d'allocation différée.

### Inconvénients

- Ne peut pas être réduit.

### utilitaire d'espace utilisateur

Le paquet contenant les outils de l'espace utilisateur pour gérer les systèmes de fichiers XFS est « xfsprogs ».

### Recommandation :

XFS est le système de fichiers recommandé pour les utilisateurs qui n'ont pas besoin de fonctionnalités avancées et qui souhaitent simplement un système de fichiers rapide et fiable.

## BTRFS

BTRFS est un système de fichiers moderne de copie sur écriture (COW) créé en 2007 et déclaré stable dans le noyau Linux en 2013. Il est largement pris en charge et est principalement connu pour son ensemble de fonctionnalités avancées.

### Avantages

- Compression transparente. BTRFS prend en charge la compression transparente des fichiers pour permettre des économies d'espace importantes sans intervention de l'utilisateur. CachyOS est livré avec une compression ZSTD définie au niveau 3 par défaut.
- Fonctionnalité d'instantané. BTRFS exploite sa nature COW pour permettre la création d'instantanés de sous-volumes qui occupent très peu d'espace réel.
- Fonctionnalité de sous-volume permettant un meilleur contrôle du système de fichiers.
- Capable de croître ou de diminuer.
- Développement très rapide.

### Inconvénients

- Nécessite parfois une défragmentation ou un équilibrage.
- Pire sur les disques rotatifs en raison de la fragmentation susmentionnée.

### Utilitaire d'espace utilisateur

Le package d'utilitaires d'espace utilisateur de Btrfs est `btrfs-progs`

### Disposition des sous-volumes

CachyOS fournit une disposition de sous-volumes prête à l'emploi pour permettre une fonctionnalité de capture instantanée facile.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Recommandation :

BTRFS est recommandé pour les utilisateurs qui souhaitent une fonctionnalité de capture instantanée/sauvegarde et une compression transparente.


## EXT4

EXT4 (quatrième version du système de fichiers étendu) est le système de fichiers Linux le plus couramment utilisé. EXT4 a été rendu stable dans le noyau Linux en 2008.

### Avantages

- Très courant, il permet un accès facile à de nombreuses ressources.
- Fiable. EXT4 a fait ses preuves en tant que système très fiable.
- Capable de croître ou de diminuer.

### Inconvénients

- Construit sur une ancienne base de code.
- Manque de nombreuses fonctionnalités avancées que d'autres systèmes de fichiers offrent.

### Utilitaires de l'espace utilisateur

Le package pour gérer ext4 est `e2fsprogs`

### Recommandation :

EXT4 est recommandé aux utilisateurs qui veulent le système de fichiers le plus simple et le plus couramment utilisé.

## ZFS

ZFS est un système de fichiers avancé développé à l'origine par Sun Microsystems en 2005. ZFS possède de nombreuses fonctionnalités, mais il est sous licence CDDL, ce qui signifie qu'il ne peut pas être inclus dans le noyau Linux et nécessite l'installation d'un module séparé.

### Avantages

- Stockage mutualisé (zpool)
- Instantanés utilisant COW
- Compression
- Prise en charge de Raid-Z
- Le cache ARC permet des temps de lecture incroyablement rapides sur les fichiers fréquemment consultés.

### Inconvénients

- Très compliqué à utiliser et à comprendre en raison de fonctionnalités telles que zpool et ARC.
- ARC nécessite beaucoup de RAM pour être efficace.
- Non inclus dans le noyau Linux, il dépend donc d'un module de noyau tiers (OpenZFS)

### Outils requis

'ZFS-Module' CachyOS fournit un module zfs précompilé pour chaque version du noyau.
`zfs-utils` pour les utilitaires de l'espace utilisateur.

### Recommandation :

ZFS ne doit être utilisé que par des utilisateurs avancés qui souhaitent bénéficier des fonctionnalités avancées de ZFS telles que le stockage mutualisé ou le cache ARC.

## F2FS

F2FS ou Flash-Friendly File System, est un système de fichiers flash créé et développé par Samsung à l'origine pour le noyau Linux. F2FS a été créé pour répondre spécifiquement aux besoins du flash NAND utilisé dans le stockage moderne.

### Avantages

- Conçu dans un souci de compatibilité avec le flash.
- Compression transparente utilisée pour réduire les écritures sur disque (économies d'espace non utilisables actuellement par l'utilisateur)
- Plus rapide que d'autres systèmes de fichiers comme EXT4.
- Meilleur nivellement de l'usure prolongeant encore la durée de vie du flash NAND.

### Inconvénients

- Ne peut pas rétrécir.
- Les économies d'espace grâce à la compression ne peuvent actuellement pas être utilisées par l'utilisateur. Cela peut être ajouté à l'avenir.
- Fsck relativement faible. (Fsck = vérification du système de fichiers)
- La rétrogradation vers un noyau plus ancien que la version qui a créé le système de fichiers peut entraîner des problèmes.

### Utilitaires de l'espace utilisateur

L'utilitaire principal de f2fs est `f2fs-tools`

### Recommandation :

F2FS est uniquement recommandé aux utilisateurs qui souhaitent maximiser la durée de vie de leur mémoire flash NAND.

## BcacheFS

Bcachefs est un nouveau système de fichiers avancé pour Linux, qui met l'accent sur la fiabilité, la robustesse et l'ensemble complet des fonctionnalités que l'on attend d'un système de fichiers moderne.

:::caution[ATTENTION]
Bcachefs est toujours considéré comme expérimental et peut présenter des problèmes.
:::

### Avantages

- Copie sur écriture (CoW) - comme BTRFS ou ZFS
- Compression
- Mise en cache, placement des données
- Réplication
- Évolutif

### Inconvénients

- Expérimental
- La configuration peut être compliquée

## Résumé

Utilisez le système de fichiers par défaut **BTRFS** car il est considéré comme stable et possède de nombreuses fonctionnalités intéressantes (instantanés, compression, etc.). Utilisez **XFS** ou **EXT4** pour un système de fichiers simple
et rapide.

:::note
Les différences de performances des systèmes de fichiers entre BTRFS, XFS, Ext4 sont négligeables.
:::
