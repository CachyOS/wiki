title: Configuration du gestionnaire de démarrage
description: Configurez les paramètres du gestionnaire de démarrage et ecrivez les paramètres de noyau en ligne de commande
---

## systemd-boot

systemd-boot a deux types de fichiers de configuration, l’une est pour systemd-boot lui-même dans `/boot/loader/loader.conf` et l’autre pour chaque entrée individuelle du noyau dans `/boot/loader/entry`.

### Configuration du chargeur
Dans ce fichier de configuration, vous pouvez changer l’entrée par défaut et le décompte avant démarrage de systemd-boot

```shell
# /boot/loader/loader.conf

default @saved
timeout 5
#console-mode keep # Cette option configure la résolution de la console de démarrage.
```
Pour en apprendre plus:

- [guide loader.conf](https://man.archlinux.org/man/loader.conf.5)


###Configuration du noyau en ligne de commande

Nous fournissons un outil pour une configuration simplifiée de systemd-boot [`sdboot-manage`](https://github.com/CachyOS/CachyOS-PKGBUILDS/tree/master/systemd-boot-manager).
L'un des avantages de cet outil est la configuration globale en ligne de commande du noyau. Le fichier de configuration pour `sdboot-manage` est situé dans `/etc/sdboot-manage.conf`.
Editez la ligne `LINUX_OPTIONS=` dans  `/etc/sdboot-manage.conf` pour changer les paramètres du noyau.

```shell
# /etc/sdboot-manage.conf
LINUX_OPTIONS="zswap.enabled=0 nowatchdog quiet splash"
```
Après avoir fait ces modifications, générez à nouveau toutes les entrées sytemd-boot avec la commande suivante:

```shell
❯ sudo sdboot-manage gen
```

## rEFInd

Comme [systemd-boot](/configuration/boot_manager_configuration#systemd-boot), rEFInd posséde deux fichiers de configuration . `refind.conf` situé dans `boot/efi/EFI/refind` sert principalement à modifier le comportement de rEFind alors que `/boot/refind_linux.conf` est pour la gestion de vos options de démarrage.
`refind.conf` contient des commentaires détaillés sur toutes ses options.

### Configuration du noyau en ligne de commande

Pour modifiez les paramétres noyau en ligne de commande, modifiez la ligne "Boot using default options" dans `/boot/refind_linux.conf`

```shell
# /boot/refind_linux.conf

"Boot using default options"     "root=PARTUUID=1cb353ec-7f03-4820-8b4b-03baf53a208f rw zswap.enabled=0 nowatchdog quiet splash"
```

Les changements dans les deux fichiers de configuration prennent effet immédiatement. Lancer une commande pour les "sauvegarder" n’est pas nécessaire.

Pour en apprendre plus:
- [rEFInd: Configuration du gestionnaire de démarrage](https://www.rodsbooks.com/refind/configfile.html)

## GRUB

Contrairement à [systemd-boot](/configuration/boot_manager_configuration#systemd-boot) et [rEFInd](/configuration/boot_manager_configuration#refind),
GRUB posséde un seul fichier de configuration situé dans `/etc/default/grub`. Il y a une plutôt bonne documentation dans ce fichier qui explique ce que chaque option fait.

### Masquage du menu de démarrage GRUB

Pour masquer le menu GRUB, réglez les options suivantes scrupuleusement.

```shell
# /etc/default/grub

GRUB_TIMEOUT='0'
GRUB_TIMEOUT_STYLE=hidden
```

Appuyez sur ESC (touche écahappe) pour avoir accès au GRUB avec une fenêtre d’invité. A partir de là lancez  `normal` ou `exit` pour revenir au menu de démarrage GRUB habituel.

### Configuration du noyau en ligne de commande

Pour régler les paramètres du noyau en ligne de commande avec GRUB, nous avons besoin d’éditer la ligne suivante:
 `GRUB_CMDLINE_LINUX_DEFAULT` within `/etc/default/grub`

```shell
# /etc/default/grub

GRUB_CMDLINE_LINUX_DEFAULT='nowatchdog zswap.enabled=0 quiet splash'
```

Chaque fois que nous modifions le fichier de configuration GRUB, nous avons besoin de refaire le fichier de configuration avec la commande suivante:

```shell
❯ sudo grub-mkconfig -o /boot/grub/grub.cfg
```

En savoir plus (/!\ seulement en anglais!):

- [page du guide loader.conf](https://man.archlinux.org/man/loader.conf.5)
- [rEFInd: Configuration du gestionnaire de démarrage](https://www.rodsbooks.com/refind/configfile.html)
- [Guide de GRUB: Configuration](https://www.gnu.org/software/grub/manual/grub/grub.html#Configuration)

