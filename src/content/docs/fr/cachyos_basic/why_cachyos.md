---
Titre: Pourquoi CachyOS?
Description: Pourquoi CachyOS peut être mieux pour vous?
---

CachyOS offre une brillante expérience de Arch Linux, complète avec un installeur convivial , des environnements de bureau pré-configurés et des performances optimisées sans aucun compromis pour l’expérience utilisateur.

Outre les améliorations de performance, nous fournissons une installation prête à l’emploi  pour les cartes graphiques Nvidia, ZFS qui est intégré dans nos noyaux et dans divers outils.


## Des paquets et dépôts optimisés


CachyOS maintient ses propres dépôts avec  paquets optimisés dédié à votre matériel. Il y a des dépôts x86-64-v3, x86-64-v4 et Zen4 qui existent pour améliorer votre expérience en réduisant la latence, augmentant les performances et appliquant des correctifs spécifiques, etc...

Rendez-vous sur

Rendez-vous sur [cette page](/cachyos_repositories/what_are_the_cachyos_repo) pour plus d’explication détaillées des dépôts optimisés que nous fournissons.


## Support du planificateur de processeur avancé

Tout d’abord comprenons ce qu’est planificateur de processeur. Dans les noyaux Linux, le planificateur de processeur est un composant crucial qui gère comment les tâches (ou processus) sont exécutés par le système. Il décide quelle prochaine tâche doit tourner, s’assurant d’une utilisation efficace des ressources système, pour permettre à de multiple taches de tourner en simultanée.

Par défaut  CachyOS fournit le planificateur BORE (Burst-Oriented Response Enhancer) dans le noyau par défaut,une version étendue de EEVDF + sched-ext, un framework pour démarrer le planificateur de l’espace utilisateur. Nous fournissons aussi d’autres noyaux avec des versions individuelles de l’EEVDF ([Définition](https://fr.wikipedia.org/wiki/Earliest_deadline_first_scheduling)) et du système sched-ext framework (version étendue du [CFS](https://fr.wikipedia.org/wiki/Completely_Fair_Scheduler)) séparément. Vous pouvez choisir votre variante du  noyaux Linux préféré et son planificateur correspondant, en utilisant Le gestionnaire de noyau inclus dans l’installation.

Pour plus d’information sur les noyaux que nous vous proposons, rendez-vous sur cette [page](/kernel/kernel#variants).

## Processus d’installation personnalisable

Démarrer votre voyage avec CachyOS en bootant une [clé bootable USB ](/installation/installation_prepare/#creating-a-bootable-cachyos-usb-drive) que vous avez créée.
Vous serez accueillis par notre programme Hello, une introduction utile à CachyOS. Notre installeur personnalisé Calamares fournit un large éventail de possibilités. Nous offrons une variété d’[environnement de bureau](/installation/desktop_environments/), de [gestionnaire de démarrage ](/installation/boot_managers/)
et de [noyaux](/kernel/kernel#variants) à sélectionner.
Vous choisissez ce dont vous avez besoin et décochez ce dont vous n’avez pas besoin.

Votre système, vos choix.

:::Attention[MISE EN GARDE]
La sélection de plusieurs environnement de bureau n’est pas permise car possiblement source de casse du système. Par exemple, KDE et GNOME. Nous vous recommandons le choix d’un seul environnement de bureau afin d ‘éviter une erreur lors de l’installation.
:::

## Un OS convivial

Par défaut, nous fournissons nos propres applications, comme CachyOS Hello ou CachyOS Package Installer entre autres afin de simplifier et améliorer votre expérience Linux.
Pour exemple, CachyOs Hello propose des options pour mettre à jour votre système, activer des services (Bluetooth par exemple) et classer des miroirs de dépôts. Package Installer va vous aiderà installer des paquets. CachyOS a aussi une bonne et amicale communauté Discord.Communauté Discord qui s’entre-aide. Rejoignez sur [Discord](https://discord.com/invite/cachyos-862292009423470592) ou notre [forum](https://discuss.cachyos.org/)
