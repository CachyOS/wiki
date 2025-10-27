---
title: Systèmes de fichiers
description: Description et recommandations concernant les systèmes de fichiers disponibles. (ext4, f2fs, btrfs, xfs, zfs, bcachefs)
---

CachyOS propose 5 systèmes de fichiers différents afin de permettre à l’utilisateur de choisir celui qui correspond le mieux à ses besoins.  
Ce document présente les avantages, inconvénients et recommandations pour chacun.  
Chaque système de fichiers dispose de ses utilitaires et dépendances préinstallés sur CachyOS.

:::note
BTRFS est le système de fichiers par défaut et recommandé sur CachyOS. Choisissez-le si vous n’êtes pas sûr.
:::

## XFS

XFS est un système de fichiers journalisé créé et développé par Silicon Graphics, Inc. Il a été conçu en 1993, porté sur Linux en 2001, et est désormais largement pris en charge par la plupart des distributions Linux.

### Avantages

- Rapide — XFS a été conçu dès le départ pour la vitesse et l’évolutivité extrême.  
- Fiable — XFS utilise plusieurs mécanismes pour éviter la corruption de données.  
- Résistant à la fragmentation grâce à son fonctionnement basé sur les étendues (extents) et à son allocation différée.

### Inconvénients

- Ne peut pas être réduit.

### Utilitaire en espace utilisateur

Le paquet contenant les outils utilisateur pour gérer XFS est `xfsprogs`.

### Recommandation

XFS est recommandé pour les utilisateurs ne recherchant pas de fonctionnalités avancées et souhaitant simplement un système de fichiers rapide et fiable.

---

## BTRFS

BTRFS est un système de fichiers moderne à copie-sur-écriture (COW) créé en 2007 et déclaré stable dans le noyau Linux en 2013.  
Il est largement pris en charge et se distingue par ses nombreuses fonctionnalités avancées.

### Avantages

- **Compression transparente.** BTRFS prend en charge la compression automatique des fichiers, offrant un gain d’espace important sans intervention de l’utilisateur.  
  **CachyOS utilise par défaut la compression ZSTD au niveau 3.**
- **Instantanés (snapshots).** Grâce à la nature COW, BTRFS permet de créer des instantanés de sous-volumes occupant très peu d’espace réel.  
- **Sous-volumes** : permettent une meilleure organisation et un contrôle précis du système de fichiers.  
- Peut être agrandi ou réduit.  
- Développement très actif.

### Inconvénients

- Peut nécessiter une défragmentation ou un équilibrage (balancing).  
- Moins performant sur les disques à plateaux (HDD) à cause de la fragmentation.

### Utilitaire en espace utilisateur

Le paquet utilisateur pour Btrfs est `btrfs-progs`.

### Disposition des sous-volumes

CachyOS fournit par défaut une structure de sous-volumes facilitant l’utilisation des instantanés :

- Subvol @ = /  
- Subvol @home = /home  
- Subvol @root = /root  
- Subvol @srv = /srv  
- Subvol @cache = /var/cache  
- Subvol @tmp = /var/tmp  
- Subvol @log = /var/log  

### Recommandation

BTRFS est recommandé pour les utilisateurs souhaitant bénéficier d’instantanés/sauvegardes et de la compression transparente.

---

## EXT4

EXT4 (Fourth Extended Filesystem) est le système de fichiers Linux le plus utilisé. Il a été déclaré stable dans le noyau Linux en 2008.

### Avantages

- Très répandu, offrant un accès facile à une abondante documentation.  
- Fiable — EXT4 a fait ses preuves en termes de stabilité et de fiabilité.  
- Peut être agrandi ou réduit.  
  - Le redimensionnement à la baisse est uniquement possible hors ligne et nécessite le démontage du système de fichiers.

### Inconvénients

- Basé sur une base de code ancienne.  
- Ne propose pas les fonctionnalités avancées présentes dans d’autres systèmes de fichiers.

### Utilitaires en espace utilisateur

Le paquet pour gérer EXT4 est `e2fsprogs`.

### Recommandation

EXT4 est recommandé pour les utilisateurs souhaitant le système de fichiers le plus simple et le plus courant.

---

## ZFS

ZFS est un système de fichiers avancé développé initialement par Sun Microsystems en 2005.  
ZFS offre de nombreuses fonctionnalités, mais sa licence CDDL empêche son inclusion directe dans le noyau Linux, nécessitant un module séparé.

:::caution
N’utilisez pas un noyau temps réel (Real-time) avec ZFS — incompatibilité liée à la licence.
:::

### Avantages

- Stockage en pool (zpool).  
- Instantanés via COW.  
- Compression intégrée.  
- Support du RAID-Z.  
- Le cache ARC permet des vitesses de lecture extrêmement rapides pour les fichiers fréquemment utilisés.

### Inconvénients

- Complexe à utiliser et à comprendre (concepts comme zpool et ARC).  
- Le cache ARC nécessite beaucoup de RAM pour être efficace.  
- Non inclus dans le noyau Linux, dépend d’un module tiers (OpenZFS).  
- Incompatible avec la préemption temps réel.

### Outils requis

`ZFS-Module` — CachyOS fournit un module ZFS précompilé pour chaque version de noyau.  
`zfs-utils` — pour les utilitaires en espace utilisateur.

### Recommandation

ZFS ne devrait être utilisé que par des utilisateurs expérimentés souhaitant exploiter ses fonctionnalités avancées, comme le stockage en pool ou le cache ARC.

---

## F2FS

F2FS (Flash-Friendly File System) est un système de fichiers conçu par Samsung pour le noyau Linux, spécialement optimisé pour la mémoire flash NAND utilisée dans les supports de stockage modernes.

### Avantages

- Conçu pour être optimisé pour la mémoire flash.  
- Compression transparente afin de réduire les écritures disque (économie d’espace non encore exploitable par l’utilisateur).  
- Plus rapide que d’autres systèmes de fichiers tels qu’EXT4.  
- Meilleur équilibrage d’usure, prolongeant la durée de vie des disques NAND.

### Inconvénients

- Ne peut pas être réduit.  
- Les économies d’espace dues à la compression ne sont pas encore disponibles pour l’utilisateur (peut-être dans le futur).  
- Vérification de système de fichiers (`fsck`) relativement faible.  
- Rétrograder vers un noyau plus ancien que celui ayant créé le FS peut causer des problèmes.  
- Nécessite une solution de contournement avec GRUB sur les systèmes MBR/BIOS.

### Utilitaires en espace utilisateur

L’outil principal pour F2FS est `f2fs-tools`.

### Recommandation

- F2FS est recommandé pour les utilisateurs souhaitant maximiser la durée de vie de leurs périphériques NAND flash.  
- Limine est le chargeur d’amorçage recommandé pour les utilisateurs de F2FS sur les systèmes MBR/BIOS, car il ne nécessite pas de contournement comme GRUB.

---

## BcacheFS

Bcachefs est un système de fichiers Linux récent et avancé, axé sur la fiabilité et la robustesse, offrant l’ensemble complet de fonctionnalités attendu d’un système de fichiers moderne.

:::caution[ATTENTION]
Bcachefs est encore considéré comme expérimental et peut présenter des problèmes.
:::

### Avantages

- Copie sur écriture (CoW), comme BTRFS ou ZFS.  
- Compression intégrée.  
- Mise en cache et placement intelligent des données.  
- Réplication.  
- Très évolutif.

### Inconvénients

- Encore expérimental.  
- Configuration parfois complexe.

---

## En Résumé

Utilisez le système de fichiers par défaut **BTRFS**, considéré comme stable et riche en fonctionnalités (instantanés, compression, etc.).  
Utilisez **XFS** ou **EXT4** pour un système de fichiers simple et rapide.