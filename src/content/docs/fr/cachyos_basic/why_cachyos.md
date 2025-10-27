---
title: Pourquoi CachyOS?
description: En quoi CachyOS peut vous être bénéfique?
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS est une distribution Arch Linux axée sur la performance, conçue pour offrir un environnement informatique stable, efficace et convivial. Elle combine toute la puissance et la flexibilité d’un système à publication continue (["Rolling Release"](https://fr.wikipedia.org/wiki/Rolling_release)), enrichie par des optimisations avancées et une chaîne d’outils personnalisée qui simplifie l’expérience utilisateur, aussi bien pour les nouveaux venus que pour les utilisateurs expérimentés.

## Performance et Optimisation

### Paquets et Dépôts Optimisés

CachyOS propose une large sélection de **[paquets optimisés](https://packages.cachyos.org/)**, compilés spécifiquement pour différentes architectures CPU modernes. Cela inclut le support des systèmes `x86-64-v3`, `x86-64-v4`, et `Zen4+`, garantissant que vos logiciels tirent pleinement parti des capacités de votre matériel pour un gain de performance significatif.

Pour une analyse plus approfondie de nos dépôts optimisés, consultez notre guide détaillé sur les **[Dépôts Optimisés](/fr/features/optimized_repos)**.

### Noyau Customisé Optimisé pour la Performance et la Stabilité

En plus de l’ensemble de correctifs du noyau CachyOS, qui ajuste divers paramètres pour améliorer la réactivité du bureau, CachyOS intègre des ensembles de correctifs sélectionnés qui ne sont pas encore intégrés dans la branche principale ou dans la version stable du noyau.

Ces correctifs subissent donc des tests internes avant d’être publiés pour les utilisateurs, afin de garantir que la stabilité ne soit pas compromise. Pour une liste complète des correctifs fournis par CachyOS, consultez la page [Noyau](/fr/features/kernel).

### Prise en charge des ordonnanceurs CPU Avancés

CachyOS fournit des noyaux intégrant les dernières optimisations d’ordonnancement CPU afin d’assurer un bureau fluide et réactif, même sous forte charge.

* **EEVDF (l’ordonnanceur par défaut du noyau Linux):** Bien qu’excellent pour le débit global, le noyau CachyOS inclut des **[paramètres EEVDF personnalisés](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** pour améliorer la réactivité du bureau.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** Pour les utilisateurs recherchant une interactivité maximale, nos noyaux prennent en charge l’ordonnanceur BORE, un ensemble de correctifs qui améliore EEVDF pour offrir une expérience plus fluide lors de charges intensives.

Pour plus d’informations sur les noyaux proposés par CachyOS et le framework sched-ext, consultez la documentation **[Noyau](/fr/features/kernel)** et **[sched-ext](/fr/configuration/sched-ext)**.

## Outils Conviviaux et Personnalisation

### [Détection Automatique du Matériel](/fr/features/chwd/chwd/)

CachyOS inclut un outil personnalisé de détection du matériel qui identifie automatiquement et installe les pilotes et paquets nécessaires à votre système. Cela élimine la recherche manuelle de pilotes, vous faisant gagner du temps et des efforts après l’installation.

### Processus d’Installation Personnalisable

L’installateur CachyOS permet aux utilisateurs de personnaliser leur système en choisissant l’environnement de bureau, les paquets, le système de fichiers, le gestionnaire d’amorçage, le noyau, et bien plus encore :

- [Environnements de Bureau](/fr/installation/desktop_environments/)
- [Gestionnaires d'Amorçage](/fr/installation/boot_managers/)
- [Variantes de Noyaux](/fr/features/kernel#variants)
- [Systèmes de Fichiers](/fr/installation/filesystem)
- [Paquets Personnalisés à Inclure Durant l'Installation](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Applications personnalisées CachyOS

CachyOS développe et maintient sa propre suite d’applications afin de simplifier la gestion du système et d’améliorer votre expérience.

Liste des applications actuellement développées et maintenues par CachyOS :

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Une application d’accueil permettant de gérer les ajustements, d’appliquer des correctifs et d’installer des paquets.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Une interface graphique (GUI) pour installer facilement des applications.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Permet d’installer facilement des noyaux depuis le dépôt, de configurer le vôtre et de gérer le framework `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** lasse automatiquement les miroirs Arch et CachyOS pour des vitesses de téléchargement optimales avec `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Génère automatiquement de nouvelles entrées d’amorçage pour `systemd-boot`, facilement configurables via `/etc/sdboot-manage.conf`.

## Une Communauté Active et Accueillante

La plus grande force de CachyOS réside dans sa communauté grandissante. Les membres s’entraident en partageant des astuces, en offrant du support et en contribuant au succès du projet. Vos retours nous aident à améliorer continuellement l’expérience CachyOS.

Rejoignez-nous et devenez membre de la communauté sur le **[Discord CachyOS](https://discord.com/invite/cachyos-862292009423470592)** et le **[Forum CachyOS](https://discuss.cachyos.org/)**.
