---
title: Détection Matérielle CachyOS
description: Détection et Configuration Matérielle pour CachyOS
---

La [détection matérielle de CachyOS](https://github.com/CachyOS/chwd/) (plus connue sous le nom de **`chwd`**) nous permet de prendre en charge une grande variété de matériel en installant les paquets et pilotes nécessaires au système en cours d'exécution. Cela inclut les systèmes équipés de cartes graphiques NVIDIA, les Macbooks T2, et les appareils portables tels que le Steam Deck et le ROG Ally.

## Utilisation

**`chwd`** est généralement exécuté lors de l'installation afin de fournir les paquets nécessaires au système. Cependant, il est également possible de l'utiliser après l'installation.

### Configuration Automatique

**`chwd`** prend en charge l'installation et la configuration des pilotes et paquets nécessaires pour que le système puisse fonctionner dans des conditions optimales.

```sh
❯ sudo chwd -a
```

### Installer un profil

Une alternative à la méthode ci-dessus consiste à installer chaque profil spécifique.

```sh title='Lister tous les profils disponibles'
❯ chwd --list-all
╭─────────────────────────┬─────────╮
│ Name                    ┆ NonFree │
╞═════════════════════════╪═════════╡
│ nvidia-open-dkms.prime  ┆ true    │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ nvidia-dkms             ┆ true    │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ macbook-t2              ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ phoenix                 ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ steam-deck              ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ amd                     ┆ false   │
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┼╌╌╌╌╌╌╌╌╌┤
│ intel                   ┆ false   │
╰─────────────────────────┴─────────╯
```

```sh title='Installation d’un profil chwd'
❯ sudo chwd -i amd
>Installation de amd...

>amd a été installé avec succès
```

### Autres

Consultez l'aide de **`chwd`** pour la syntaxe des commandes et autres usages.

```sh
❯ chwd --help
Usage: chwd [OPTIONS]

Options:
  -i, --install <profile>          Installer un profil
  -r, --remove <profile>           Supprimer un profil
  -d, --detail                     Afficher des informations détaillées pour les listes
  -f, --force                      Forcer la réinstallation
      --list-installed             Lister les noyaux installés
      --list                       Lister les profils disponibles pour tous les appareils
      --list-all                   Lister tous les profils
  -a, --autoconfigure [<classid>]  Configuration automatique
      --ai_sdk                     Activer/Désactiver les profils AI SDK
      --pmcachedir <PMCACHEDIR>    [défaut: /var/cache/pacman/pkg]
      --pmconfig <PMCONFIG>        [défaut: /etc/pacman.conf]
      --pmroot <PMROOT>            [défaut: /]
  -h, --help                       Afficher l'aide
  -V, --version                    Afficher la version
```
