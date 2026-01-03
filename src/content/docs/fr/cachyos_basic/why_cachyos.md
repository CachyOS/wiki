---
title: Pourquoi CachyOS?
description: Pourquoi CachyOS pourrait être une meilleure option pour vous
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS est une distribution Arch Linux axée sur la performance, conçue pour offrir un environnement informatique stable, efficace et convivial. Elle propose toute la puissance et la flexibilité d'un système en publication continue (rolling-release), améliorée par des optimisations avancées et une chaîne d'outils personnalisée qui simplifie l'expérience utilisateur tant pour les débutants que pour les utilisateurs expérimentés.

## Performance et Optimisation

### Paquets et Dépôts Optimisés

CachyOS fournit une large sélection de **[paquets optimisés](https://packages.cachyos.org/)** spécialement compilés pour diverses architectures de processeurs modernes. Cela inclut le support des systèmes `x86-64-v3`, `x86-64-v4`, et `Zen4+`, garantissant que vos logiciels sont conçus pour tirer pleinement parti des capacités de votre matériel pour une amélioration significative des performances.

Pour un aperçu plus détaillé de nos dépôts optimisés, consultez notre guide détaillé sur les **[Dépôts Optimisés](/fr/features/optimized_repos)**.

### Noyau Personnalisé Optimisé pour la Performance et la Stabilité

En plus de l'ensemble de patchs de base du noyau CachyOS qui ajuste divers paramètres du noyau pour améliorer la réactivité du bureau, CachyOS sélectionne soigneusement des ensembles de patchs qui n'ont pas encore été intégrés à la branche principale ou qui ne sont pas inclus dans la version stable du noyau.

Par conséquent, ces patchs subissent des tests internes avant d'être mis à la disposition des utilisateurs afin de s'assurer que la stabilité n'est pas affectée. Pour une liste complète des patchs fournis par CachyOS, voir [Noyau](/features/kernel).

### Support d'Ordonnanceurs de Processeur Avancés

CachyOS fournit des noyaux avec les dernières optimisations d'ordonnanceur de processeur pour garantir un bureau fluide et interactif, même sous une charge importante.

* **EEVDF (L'ordonnanceur par défaut du noyau Linux) :** Bien qu'excellent pour le débit général, le noyau CachyOS inclut des **[réglages EEVDF personnalisés](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** pour améliorer la réactivité du bureau.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer) :** Pour les utilisateurs qui ont besoin d'une interactivité maximale, nos noyaux prennent en charge l'ordonnanceur BORE, un ensemble de patchs qui améliore EEVDF pour offrir une expérience plus fluide lors de charges de travail intensives.

Pour plus d'informations sur les noyaux proposés par CachyOS et le framework sched-ext, consultez la documentation sur le **[Noyau](/fr/features/kernel)** et **[sched-ext](/fr/configuration/sched-ext)**.

## Outils Conviviaux et Personnalisation

### [Détection Automatique du Matériel](/fr/features/chwd/chwd/)

CachyOS inclut un outil de détection de matériel personnalisé qui identifie et installe automatiquement les pilotes et paquets nécessaires pour votre système. Cela élimine le besoin de rechercher manuellement les pilotes, vous faisant gagner du temps et des efforts après l'installation.

### Processus d'Installation Personnalisable

L'installateur de CachyOS permet aux utilisateurs de personnaliser leur système en choisissant l'environnement de bureau, les paquets, le système de fichiers, le gestionnaire de démarrage, le noyau, et plus encore, pour répondre à leurs besoins :

- [Environnements de Bureau](/fr/installation/desktop_environments/)
- [Gestionnaires de Démarrage](/fr/installation/boot_managers/)
- [Variantes du Noyau](/fr/features/kernel#variantes)
- [Systèmes de Fichiers](/fr/installation/filesystem)
- [Paquets Personnalisés à inclure lors de l'installation](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### Applications Personnalisées de CachyOS

CachyOS développe et maintient sa propre suite d'applications pour simplifier la gestion du système et améliorer votre expérience.

Liste des applications que CachyOS développe et maintient actuellement :

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** Une application d'accueil pour contrôler les ajustements, appliquer des correctifs et installer des paquets.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** Une interface utilisateur graphique (GUI) pour une installation facile des applications.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Installez facilement des noyaux depuis le dépôt, configurez les vôtres et gérez le framework `sched-ext`.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Classe automatiquement les miroirs d'Arch et de CachyOS pour des vitesses de téléchargement optimales avec `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Génère automatiquement de nouvelles entrées de démarrage pour `systemd-boot`, qui peuvent être facilement configurées via `/etc/sdboot-manage.conf`.

## Une Communauté Amicale et Active

La plus grande force de CachyOS est sa communauté en pleine expansion. Les membres de la communauté s'entraident en partageant des astuces, en fournissant du soutien et en contribuant au succès du projet. Vos retours nous aident à améliorer continuellement l'expérience CachyOS.

Rejoignez-nous et faites partie de la communauté sur le **[Discord de CachyOS](https://discord.gg/cachyos-862292009423470592)** et le **[Forum de CachyOS](https://discuss.cachyos.org/)**.
