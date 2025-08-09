---
title: Pourquoi choisir CachyOS ?
description: Pourquoi CachyOS pourrait vous convenir
---

CachyOS propose une expérience Arch Linux complète et soignée, avec un installateur convivial, des bureaux préconfigurés et des optimisations de performances, sans compromettre l'expérience utilisateur ni la sécurité du système.

Vous trouverez ci-dessous quelques-unes des fonctionnalités clés offertes par CachyOS pour garantir une expérience de bureau améliorée.

## Paquets et dépôts optimisés

CachyOS offre une vaste sélection de paquets optimisés pour diverses configurations matérielles, y compris les systèmes `x86-64-v3`, `x86-64-v4` et `Zen4+`, afin d'améliorer les performances globales.

Pour plus d'informations, consultez la page [**Dépôts optimisés.**](/fr/features/optimized_repos)

## Noyau personnalisé optimisé pour la performance et la stabilité

En plus de l'ensemble de patchs de base du noyau CachyOS qui ajuste divers paramètres du noyau pour améliorer la réactivité du bureau, CachyOS sélectionne rigoureusement des ensembles de patchs qui n'ont pas encore été intégrés à la branche principale ou qui ne sont pas inclus dans la version stable du noyau.

Par conséquent, ces patchs subissent des tests internes avant d'être mis à la disposition des utilisateurs afin de s'assurer que la stabilité n'est pas affectée. Pour une liste complète des patchs fournis par CachyOS, voir [Noyau](/fr/features/kernel).

## Prise en charge d'ordonnanceurs de processeur personnalisés

Par défaut, EEVDF est réglé pour répartir équitablement le temps processeur disponible entre toutes les tâches, et il est principalement orienté vers les charges de travail axées sur le débit. Le noyau CachyOS [**configure certains paramètres EEVDF**](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81) pour donner la priorité à l'interactivité du bureau.

Cependant, EEVDF n'a pas été conçu à l'origine pour l'interactivité du bureau. Dans cette optique, CachyOS fournit des noyaux patchés avec l'ordonnanceur
[BORE (Burst-Oriented Response Enhancer)](https://github.com/firelzrd/bore-scheduler) qui améliore EEVDF pour une meilleure interactivité sous de lourdes charges de travail.

Depuis la version 6.12, le noyau Linux permet de brancher à chaud des ordonnanceurs BPF et de remplacer EEVDF par un autre ordonnanceur.

Pour plus d'informations sur les noyaux proposés par CachyOS et les ordonnanceurs sched-ext, voir [Noyau](/fr/features/kernel) et [sched-ext](/fr/configuration/sched-ext).

## Détection du matériel

CachyOS inclut son propre outil de détection du matériel, qui identifie et installe automatiquement les pilotes et paquets nécessaires pour chaque système, simplifiant ainsi le processus de post-installation pour les utilisateurs.

## Processus d'installation personnalisable

L'installateur de CachyOS permet aux utilisateurs de personnaliser leur système en choisissant l'environnement de bureau, les paquets, le système de fichiers, le gestionnaire de démarrage, le noyau, et bien plus encore, pour l'adapter à leurs besoins :
- [**Environnements de bureau**](/fr/installation/desktop_environments/)
- [**Gestionnaires de démarrage**](/fr/installation/boot_managers/)
- [**Variantes du noyau**](/fr/features/kernel#variants)
- [**Systèmes de fichiers**](/fr/installation/filesystem)
- [**Paquets personnalisés à inclure lors de l'installation**](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

## Applications CachyOS

Par défaut, CachyOS fournit sa propre suite d'applications, telles que CachyOS Hello et l'Installateur de paquets CachyOS.

Liste des applications que CachyOS développe et maintient actuellement :

- [**CachyOS Kernel Manager**](https://github.com/CachyOS/kernel-manager) : Installez facilement des noyaux depuis le dépôt ou configurez votre propre noyau en y incluant vos propres patchs, et gérez même le framework sched-ext via [**scx_loader**](<https://github.com/sched-ext/scx/tree/main/rust/scx_loader>).
- [**CachyOS Hello**](https://github.com/CachyOS/CachyOS-Welcome) : Application pour gérer les ajustements, appliquer des correctifs, installer des paquets et fournir plus d'informations sur CachyOS.
- [**CachyOS Package Installer**](https://github.com/CachyOS/packageinstaller) : Interface graphique pour une installation facile des applications.
- [**cachyos-rate-mirrors**](https://github.com/CachyOS/rate-mirrors) : Classe automatiquement les miroirs Arch et CachyOS pour des vitesses de téléchargement optimales avec pacman.
- [**systemd-boot-manager**](https://github.com/CachyOS/systemd-boot-manager) : Génère automatiquement de nouvelles entrées pour le gestionnaire de démarrage systemd-boot, qui peuvent être facilement configurées dans `/etc/sdboot-manage.conf`.

## Une communauté amicale et active

La plus grande force de CachyOS est sa communauté en pleine expansion. Sans son soutien, CachyOS n'aurait pas atteint son succès actuel. Les membres de la communauté s'entraident en partageant des astuces et des conseils pour améliorer l'expérience Linux.

Rejoignez-nous sur le [**Discord de CachyOS**](https://discord.com/invite/cachyos-862292009423470592) et le [**Forum de CachyOS**](https://discuss.cachyos.org/).
