---
title: Configuration du gestionnaire de démarrage
description: Configurer les paramètres du gestionnaire de démarrage et passer des paramètres au noyau sur la ligne de commande
---

## systemd-boot

systemd-boot possède deux types de fichiers de configuration : un pour systemd-boot lui-même dans `/boot/loader/loader.conf`, et un pour chaque
entrée de noyau individuelle dans `/boot/loader/entry`.

### Configuration du chargeur

Dans ce fichier de configuration, vous pouvez changer l'entrée par défaut et le délai d'attente de systemd-boot.

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # Cette option configure la résolution de la console.
```

### Configuration de la ligne de commande du noyau

Nous fournissons un outil pour faciliter la configuration de systemd-boot : [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
L'un des avantages de cet outil est la configuration globale de la ligne de commande du noyau. Le fichier de configuration pour `sdboot-manage` se trouve dans `/etc/sdboot-manage.conf`.

Modifiez la ligne `LINUX_OPTIONS=` dans `/etc/sdboot-manage.conf` pour changer les paramètres du noyau.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```

Après avoir effectué des changements, régénérez toutes les entrées systemd-boot avec la commande suivante

```shell
❯ sudo sdboot-manage gen
```

## rEFInd

Comme [systemd-boot](/fr/configuration/boot_manager_configuration#systemd-boot), rEFInd possède deux fichiers de configuration. `refind.conf` situé dans
`boot/efi/EFI/refind` sert principalement à changer le comportement de rEFInd, tandis que `/boot/refind_linux.conf` sert à gérer vos options de démarrage.
`refind.conf` contient des commentaires détaillés expliquant toutes ses options.

### Configuration de la ligne de commande du noyau

Pour passer des paramètres au noyau sur la ligne de commande, modifiez "Boot using default options" dans `/boot/refind_linux.conf`

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Les changements apportés aux deux fichiers de configuration prendront effet immédiatement. Il n'est pas nécessaire d'exécuter une commande pour "sauvegarder" les changements.

## GRUB

Contrairement à [systemd-boot](/fr/configuration/boot_manager_configuration#systemd-boot) et [rEFInd](/fr/configuration/boot_manager_configuration#refind),
GRUB n'a qu'un seul fichier de configuration situé dans `/etc/default/grub`. Ce fichier contient une documentation assez complète qui explique ce que
chaque option fait.

### Cacher le menu de démarrage GRUB

Pour cacher le menu GRUB, il suffit de régler les options suivantes en conséquence.

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Appuyez sur ÉCHAP pour accéder à l'invite de commande GRUB. De là, exécutez `normal` ou `exit` pour revenir au menu de démarrage familier de GRUB.

### Configuration de la ligne de commande du noyau

Pour passer des paramètres au noyau sur la ligne de commande avec GRUB, nous devons modifier `GRUB_CMDLINE_LINUX_DEFAULT` dans `/etc/default/grub`.

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Chaque fois que nous modifions le fichier de configuration de GRUB, nous devons recréer la configuration avec la commande suivante :

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

## Limine
Limine est un chargeur de démarrage moderne connu pour sa configuration simple. Ce guide couvre les bases pour vous aider à démarrer.

La configuration se fait principalement dans `/boot/limine.conf` (ou parfois dans la partition système EFI) pour les paramètres du menu, et dans `/etc/default/limine` pour les paramètres du noyau.

### Configuration du menu de démarrage

Ce fichier contrôle le comportement et l'apparence du menu de démarrage. Les modifications apportées ici prennent effet immédiatement après l'enregistrement – aucune commande supplémentaire n'est nécessaire.

* **Délai (Timeout) :** Définit le nombre de secondes que Limine attend avant de démarrer automatiquement l'entrée par défaut.
  ```shell
  # /boot/limine.conf

  timeout: 5
  ```
* **Entrée par défaut (Default Entry) :** Spécifie quelle entrée du menu démarre par défaut. Les entrées sont numérotées à partir de 1. Si non définie, la valeur par défaut est 1.
  ```shell
  # /boot/limine.conf

  default_entry: 2 # Démarrer la deuxième entrée par défaut
  ```
  :::tip
   Si `default_entry` pointe vers un répertoire (par exemple, `/+CachyOS`), le démarrage automatique sera désactivé. Pour démarrer automatiquement une entrée dans un répertoire, `default_entry` doit pointer directement vers le numéro de cette entrée spécifique.
  :::

**Exemple (`/boot/limine.conf`) :**

```shell
# /boot/limine.conf

timeout: 5
default_entry: 2 # Pointeur direct vers l'entrée 'linux-cachyos' ci-dessous

/+CachyOS        # Entrée 1 : Un répertoire (utilisez /+ pour dérouler par défaut)
//linux-cachyos  # Entrée 2 : L'entrée de démarrage réelle
    protocol: linux
    kernel_path: boot():/vmlinuz-linux-cachyos
    cmdline: quiet splash root=UUID=... rw # Paramètres de base du noyau
    module_path: boot():/initramfs-linux-cachyos.img
```

:::note
`boot():/` fait référence à la racine du disque de démarrage.
:::

### Personnalisation (Theming)

Vous pouvez personnaliser l'apparence visuelle du menu de démarrage de Limine :

* **Fond d'écran (Wallpaper) :** Définir une image de fond. Les formats pris en charge incluent BMP, PNG et JPEG.
  ```shell
  # /boot/limine.conf

  wallpaper: boot():/splash.png
  wallpaper_style: stretched # Options : 'stretched', 'tiled', 'centered'
  backdrop: 000000           # Couleur de fond (hexadécimal RRGGBB) si le style est 'centered'
  ```
* **Polices (Fonts) :** Utiliser un [fichier de police personnalisé](https://github.com/viler-int10h/vga-text-mode-fonts) et ajuster sa taille.
  ```shell
  # /boot/limine.conf

  term_font: boot():/custom_font.F16
  term_font_scale: 2x2 # Met à l'échelle la taille de la police, utile pour les écrans haute résolution
  ```
* **Couleurs (Colors) :** Modifier les couleurs du texte et de l'arrière-plan du terminal.
  ```shell
  # /boot/limine.conf

  term_background: 80000000 # Exemple : Noir semi-transparent (AARRGGBB)
  # D'autres options de couleur comme term_foreground, etc., sont disponibles.
  ```

### Configuration de la ligne de commande du noyau

Sur CachyOS, les entrées du noyau dans le menu de démarrage Limine sont **gérées automatiquement**. Lorsque vous installez ou supprimez des noyaux, le hook `limine-mkinitcpio-hook` utilise l'utilitaire `limine-entry-tool` en arrière-plan pour mettre à jour les entrées de démarrage.

Bien que les entrées soient gérées automatiquement, vous pouvez **configurer les paramètres du noyau** (aussi connus sous le nom de ligne de commande du noyau) qui sont passés au noyau lors du démarrage.

1. **Modifier le fichier de configuration :** Modifiez les variables `KERNEL_CMDLINE` dans `/etc/default/limine`. Vous pouvez définir des paramètres par défaut pour tous les noyaux ou des paramètres spécifiques pour certains noms de noyau (par exemple, `linux-cachyos`).
   ```shell
   # /etc/default/limine

   # Paramètres par défaut pour la plupart des noyaux
   KERNEL_CMDLINE[default]="quiet splash rd.udev.log_priority=3"

   # Paramètres spécifiques pour le noyau 'linux-cachyos'
   KERNEL_CMDLINE["linux-cachyos"]="quiet splash mitigations=off"

   # Paramètres pour les entrées de secours (si générées)
   # KERNEL_CMDLINE[fallback]="..."
   ```
2. **Appliquer les changements :** Après avoir enregistré `/etc/default/limine`, vous devez régénérer vos images initramfs et mettre à jour les entrées Limine pour appliquer les nouveaux paramètres du noyau. Exécutez la commande suivante :
   ```bash
   sudo limine-mkinitcpio
   ```
   Cette commande déclenche le processus `mkinitcpio`, qui inclut le hook `limine-mkinitcpio-hook`, garantissant que vos modifications dans `/etc/default/limine` sont incorporées dans les entrées de démarrage à `/boot/limine.conf`.


## En savoir plus

- [Page de manuel de loader.conf](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd : Configuration du gestionnaire de démarrage](https://www.rodsbooks.com/refind/configfile.html)
- [Manuel GRUB : Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)
- [Documentation officielle de la configuration de Limine](https://github.com/limine-bootloader/limine/blob/v9.x/CONFIG.md)
- [Projet limine-entry-tool](https://gitlab.com/Zesko/limine-entry-tool)
