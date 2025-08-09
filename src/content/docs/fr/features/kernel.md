---
title: Noyau CachyOS
description: Fonctionnalités et modifications du noyau CachyOS
---

Le noyau CachyOS est un noyau personnalisé qui utilise des améliorations, des configurations et des patchs issus de l'amont.

## Fonctionnalités

- Choix entre 3 ordonnanceurs de noyau et divers ordonnanceurs [sched-ext](/fr/configuration/sched-ext) pour une réactivité améliorée
- Améliorations de l'AMD P-State
- Dernière version de BBRv3 de Google
- le9uo pour une réactivité significativement améliorée en cas de forte charge de la mémoire
- Ensemble de patchs NTSYNC à jour, utilisé avec une version compatible de wine/proton
- Compatibilité avec les appareils T2 MacOS grâce aux patchs de [t2linux](https://github.com/t2linux/linux-t2-patches/)
- Permet de lire la consommation d'énergie du CPU par cœur pour les utilisateurs d'AMD
- ACS Override et v4l2loopback
- Module VHBA pour l'émulation de périphériques CD/DVD-ROM
- Dernier ensemble de patchs ZSTD
- Divers autres patchs visant à améliorer les performances (options de compilation optimisées, améliorations cryptographiques, ajustements de la gestion de la mémoire)

Pour une liste plus détaillée des patchs que CachyOS propose, veuillez consulter la
[liste complète des fonctionnalités](https://github.com/CachyOS/linux-cachyos/?tab=readme-ov-file#features), le [dépôt kernel-patches](https://github.com/CachyOS/kernel-patches)
et l'[arbre source Linux de CachyOS](https://github.com/CachyOS/linux).

## Variantes

CachyOS offre une gamme variée d'options de noyaux. Tous les noyaux que nous fournissons sont livrés avec l'[ensemble de patchs de base CachyOS](https://github.com/CachyOS/kernel-patches).
Pour chacun des noyaux, il existe une [variante `-lto` correspondante](#convention-de-nommage-des-paquets) qui
est compilée avec [clang](https://clang.llvm.org/) au lieu de [GCC](https://gcc.gnu.org/).

- **linux-cachyos**
    - Le noyau par défaut. C'est le noyau recommandé si vous n'êtes pas sûr de savoir lequel utiliser.
    - Fréquence de 1000Hz (tickrate) pour une meilleure réactivité.
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).
    - Compilé avec GCC.
    - Profilé avec notre propre profil [AutoFDO](https://cachyos.org/blog/2411-kernel-autofdo/) pour des performances améliorées. [Script](https://github.com/CachyOS/cachyos-benchmarker/blob/master/kernel-autofdo.sh) utilisé pour profiler le noyau.
- **linux-cachyos-bore**
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).
- **linux-cachyos-bmq**
    - Utilise l'ordonnanceur BMQ de [Project C](https://gitlab.com/alfredchen/projectc/) par Alfred Chen.
        - **Ne prend pas en charge sched-ext**.
- **linux-cachyos-deckify**
    - Le noyau par défaut pour les consoles portables. Il est **non recommandé** et **non pris en charge** d'utiliser un autre noyau sur les consoles portables.
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).
    - Des patchs spécifiques aux consoles portables sont ajoutés à l'ensemble de patchs de base pour améliorer la compatibilité et l'expérience globale sur ces appareils.
- **linux-cachyos-eevdf**
    - Modifie l'ordonnanceur de noyau par défaut pour une meilleure réactivité.
- **linux-cachyos-lts**
    - Basé sur le dernier noyau Long Term Support (Support à Long Terme).
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).
    - Minimalement patché par rapport aux autres noyaux pour assurer une stabilité maximale.
- **linux-cachyos-hardened**
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).
    - Inclut l'ensemble de patchs [linux-hardened](https://github.com/anthraxx/linux-hardened).
    - Configuration du noyau basée sur la [configuration de linux-hardened](https://gitlab.archlinux.org/archlinux/packaging/packages/linux-hardened/-/blob/main/config).
        - Contient un durcissement très agressif qui nuit considérablement aux performances et à l'expérience utilisateur.
        - **Ne prend pas en charge sched-ext**.
- **linux-cachyos-rc**
    - Basé sur le dernier noyau principal de l'[arbre de Linus](https://github.com/torvalds/linux/).
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).
    - Noyau principal pour introduire de nouvelles fonctionnalités dans notre ensemble de patchs.
- **linux-cachyos-server**
    - Optimisé pour les charges de travail de serveur par rapport à une utilisation de bureau.
        - Fréquence de 300Hz (tickrate).
        - Pas de préemption.
        - EEVDF de base.
- **linux-cachyos-rt-bore**
    - Préemption en temps réel.
    - Utilise l'ordonnanceur [BORE](https://github.com/firelzrd/bore-scheduler).

:::note
Sauf indication contraire, vous pouvez supposer que toutes les autres variantes de noyau
ont la même configuration que le noyau par défaut.
:::

Veuillez ouvrir un ticket sur le [GitHub de linux-cachyos](https://github.com/CachyOS/linux-cachyos) pour toute suggestion ou amélioration qui pourrait être ajoutée au noyau par défaut.

## Modules de noyau précompilés

Pour s'adapter à une base d'utilisateurs plus large, CachyOS fournit certains modules de noyau bien connus et très utilisés avec le noyau. Cela signifie que les utilisateurs n'auront plus
à recompiler ces modules après chaque mise à jour du noyau ou à chaque nouvelle installation de noyau, mais devront simplement les installer depuis le dépôt car ils
sont déjà précompilés. Cela rend effectivement obsolètes tous les paquets `-dkms` qu'un utilisateur pourrait avoir et qui fournissent le même module que la version précompilée.

### ZFS

[ZFS](https://openzfs.org/wiki/Main_Page) est l'un des nombreux systèmes de fichiers pris en charge par CachyOS. En raison de sa licence
[CDDL](https://opensource.org/license/cddl-1-0), il est incompatible avec la licence du noyau Linux et ne peut donc pas être intégré directement. Le module fourni inclut
les dernières fonctionnalités et corrections de l'amont pour assurer la compatibilité avec le dernier noyau.

### NVIDIA

CachyOS fournit des versions précompilées des modules de noyau propriétaires et [open-source](https://github.com/NVIDIA/open-gpu-kernel-modules/). Le développement
du module de noyau de NVIDIA se faisant en dehors de l'arbre principal et ne suivant donc pas le rythme de publication du noyau, la configuration de base peut parfois être incompatible avec le dernier
noyau. Pour contourner ce problème, CachyOS applique des patchs créés par la communauté ou partagés directement par NVIDIA.

## Autre

Le noyau CachyOS possède également d'autres fonctionnalités notables qui, bien que subtiles, améliorent l'expérience utilisateur :

- Inclut une variante de débogage du noyau qui fournit un binaire de noyau non strippé à des fins de débogage. Ce paquet est nécessaire pour profiler le noyau avec AutoFDO.
- [Binder](https://developer.android.com/reference/android/os/Binder), le module nécessaire pour [Waydroid](https://waydro.id/) est activé par défaut dans la configuration du noyau
et déjà [configuré](https://github.com/CachyOS/linux-cachyos/blob/master/linux-cachyos/config#L10559).

## Convention de nommage des paquets

```sh
linux-cachyos              # Paquet de base pour le noyau par défaut. Compilé avec GCC
linux-cachyos-hardened     # Paquet de base pour le noyau durci. Compilé avec GCC
linux-cachyos-hardened-lto # Équivalent compilé avec clang pour linux-cachyos-hardened
linux-cachyos-hardened-{,lto-}headers
linux-cachyos-hardened-{,lto-}nvidia
linux-cachyos-hardened-{,lto-}nvidia-open
linux-cachyos-hardened-{,lto-}zfs
linux-cachyos-hardened-{,lto-}dbg
```

## FAQ

### Pourquoi AutoFDO n'est-il pas utilisé pour toutes les autres variantes de noyau ?

Parce que sa compilation est coûteuse, car elle nécessite essentiellement de compiler le noyau deux fois, ce qui entraîne plus de temps et de ressources consacrés à la compilation. Le processus de construction d'un noyau avec AutoFDO comprend les étapes suivantes :

1) Compiler le noyau avec les capacités AutoFDO et de débogage activées.
2) Créer un profil, c'est-à-dire exécuter des charges de travail afin de collecter des données de profilage pour les optimisations possibles.
3) Recompiler le noyau avec le profil AutoFDO.

Par conséquent, il n'est pour l'instant présent que dans la variante [linux-cachyos](/fr/features/kernel#variantes).

Pour plus d'informations sur AutoFDO, cliquez [ici.](https://cachyos.org/blog/2411-kernel-autofdo/)

### Le noyau temps réel améliore-t-il les performances de jeu ?

Non. Le noyau temps réel rend beaucoup plus de code préemptible par rapport à un noyau normal entièrement préemptible. Cela signifie que beaucoup plus de tâches (y compris
les processus de jeu) sont fréquemment préemptées et céderont de force les ressources système, ce qui entraîne une baisse des performances.
