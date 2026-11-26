---
title: Installateur CLI
description: Journaux des modifications de l'installateur CLI
ai_translated: true
---
# 0.8.4

## Fonctionnalités ✨

- **Gestion améliorée des partitions :** Une refactorisation importante et des améliorations ont été apportées à la manière dont l'installateur gère les partitions, offrant une meilleure précision et une fiabilité accrue.
- **Génération des paramètres du noyau :** L'installateur génère désormais automatiquement les paramètres du noyau en fonction du schéma de partitionnement détecté.
- **Bibliothèque `gucc` améliorée :** La bibliothèque `gucc` a été considérablement enrichie et prend désormais en charge l'installation et la configuration de refind.

## Maintenance 🧹

- **Clang-Format et Clang-Tidy :** La cohérence et la qualité de la base de code ont été améliorées grâce à l'application de clang-format et clang-tidy.
- **Refactorisation avec des String Views :** Plusieurs parties de la base de code utilisent désormais des littéraux string_view pour de meilleures performances et une meilleure lisibilité.
- **Implémentation de Doctest :** Les assertions C ont été remplacées par doctest pour des tests plus robustes et informatifs.
- **Tests refactorisés :** Les suites de tests ont été refactorisées pour plus de clarté et de maintenabilité.
- **Gestion de refind dans `gucc` :** Le code lié à refind a été refactorisé et déplacé dans la bibliothèque `gucc` pour une meilleure organisation et maintenabilité.

## Corrections de bogues 🐛

- **Détection des sous-volumes Btrfs :** Les problèmes liés à la détection des sous-volumes btrfs existants ont été résolus.
- **Précision des informations de partition :** Des améliorations ont été apportées pour garantir la collecte et l'affichage exacts des informations de partition.
- **Point de montage racine pour refind :** Un bogue affectant le point de montage racine utilisé par refind a été corrigé.
- **Détection des UUID :** Le processus de détection des UUID de partition lors de l'initialisation a été amélioré.
- **Corrections de compilation Meson :** Les problèmes rencontrés lors du processus de compilation avec meson ont été corrigés.
- **Ajout de sous-volumes Btrfs :** Un bogue lié à l'ajout de sous-volumes btrfs dans les environnements de développement a été corrigé.
- **Rootfs dans les configurations prédéfinies :** Un problème concernant le rootfs des schémas de partitionnement issus de configurations prédéfinies a été résolu.
- **Montage en lecture-écriture pour refind :** Assurance que refind monte les partitions nécessaires avec les permissions de lecture et d'écriture.

# 0.8.3

## Maintenance 🧹

- Mise à jour de la dépendance CPR vers une version plus récente pour améliorer les fonctionnalités.
- Configuration explicite de CTRE (bibliothèque Compile Time Regular Expressions) pour utiliser le standard C++23 afin d'assurer la cohérence et d'éventuels gains de performance.
- Augmentation du délai d'expiration de la vérification de connexion dans la section des utilitaires pour tenir compte d'éventuels retards réseau ou de réponses lentes.

# 0.8.2

## Corrections 🐛

- Résolution d'un problème où « gucc » ne gérait pas correctement les points de montage des sous-volumes btrfs.
- Amélioration de « gucc » pour gérer différents états de montage des sous-volumes btrfs.

## Maintenance 🧹

- Correction d'une faute de frappe dans le fichier README et mise à jour des informations de version.

# 0.8.1

## Corrections 🐛

- Résolution d'un problème où les dépôts ISA étaient activés à tort sur Oracle VM.
- Correction des incohérences de style des commandes pour améliorer l'expérience utilisateur.

## Maintenance 🧹

- Suppression de la logique ucode inutile liée à refind, simplifiant ainsi la base de code.

# 0.8.0

## Fonctionnalités ✨

- Ajout d'un analyseur pour les profils de paquets réseau.
- Introduction de la possibilité de récupérer les paquets d'environnement depuis un fichier TOML analysé par gucc.
- Implémentation d'une fonction utilitaire dans gucc pour télécharger des fichiers depuis des URL 📥.
- Ajout de la prise en charge de la récupération des profils réseau depuis une URL avec un mécanisme de repli dans gucc.
- Intégration de l'installation des profils réseau avec la distribution binaire.
- Déplacement du montage des partitions spécifiées et de la logique de détection dans gucc.
- Introduction de `utils::exec_checked` pour une exécution plus sûre des commandes externes.

## Améliorations ✅

- Amélioration de la couverture de tests pour les fonctionnalités crypttab dans gucc 🧪.
- Amélioration de la journalisation dans gucc en configurant correctement le journaliseur.
- **Mise à jour de la version de C++ vers C++23** ⬆️.
- Refactorisation de la base de code pour utiliser des fonctionnalités C++23 telles que `std::ranges` et `contains` pour une meilleure lisibilité et efficacité.
- Refactorisation de divers composants pour utiliser `utils::exec_checked`.

## Corrections 🐛

- Résolution d'un problème lié aux types de bibliothèques codés en dur dans gucc.
- Correction de l'implémentation du journaliseur et du fichier d'en-tête manquants dans gucc.
- Activation de la bibliothèque CPR pour les compilations en environnement hors développement.
- Correction du processus de compilation statique.
- Correction des problèmes introduits dans le commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Correction d'erreurs de compilation dans le composant TUI.
- Correction d'un problème de dépendance où la dépendance de FTXUI envers range-v3 n'était pas publique.

## Maintenance 🧹

- Mise à jour des vérifications CI, des processus de compilation et correction des problèmes associés.
- Suppression de l'installation annulée des profils réseau avec la distribution binaire.
- Refactorisation et nettoyage du code dans divers composants : TUI, utils, chwd_profiles, user et tests.
- Suppression de la bibliothèque inutilisée range-v3 des dépendances de l'installateur.
- Mise à jour du fichier README.
