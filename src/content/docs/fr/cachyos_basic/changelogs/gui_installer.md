---
title: Installateur graphique
description: Journaux des modifications de Calamares et de l'ISO Live graphique
sidebar:
  order: 1
ai_translated: true
---
26.06
----

**Fonctionnalités :**

* **Paquets :**
  * Python utilise désormais le PGO étendu pour améliorer les performances
  * Ajout d'un [correctif GCC](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict) pour l'ajustement générique de la mauvaise prédiction de branchement x86, améliorant la prise en compte des coûts de mauvaise prédiction de branchement par GCC sur les processeurs Intel et AMD modernes
  * Correction d'une régression détectée dans les benchmarks Phoronix lorsque OpenBLAS était utilisé sur des processeurs à grand nombre de cœurs
  * Renommage de `proton-cachyos` en `proton-cachyos-native`
* **pacman :** Ajout de [l'isolation réseau pour les scriptlets et les hooks](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Installateur :**
  * Ajout de l'option de bureau CachyOS Hyprland Noctalia et d'une vidéo d'aperçu
  * Suppression de `paru` de l'installation ; il est recommandé aux utilisateurs d'utiliser [Shelly](https://wiki.cachyos.org/configuration/post_install_setup/#updating-the-system), via son interface graphique ou en ligne de commande, comme alternative
  * Ajout de SDDM comme gestionnaire d'affichage pour MangoWM
  * Remplacement de GNOME System Monitor par Resources
  * Ajout de `realtime-privileges` au groupe de paquets audio
  * Amélioration de la détection de la disposition et de la variante du clavier en session live
* **CachyOS-Welcome :**
  * Ajout de la prise en charge du DNS sur QUIC (DoQ) via `blocky`
  * Ajout d'une page dédiée au dépannage
  * Ajout de la prise en charge du terminal Ptyxis
  * Ajout des traductions en azerbaïdjanais et en grec
  * Ajout du fichier readme et des pages de participation en français
  * Mise à jour des traductions en italien, allemand, français, japonais et bulgare
* **chwd :**
  * Ajout de la traduction en turc
  * Suppression de `cachyos-handheld` des listes de paquets pour consoles portables
  * Résolution des conflits de pilotes sur les systèmes multi-GPU nécessitant des branches de pilotes incompatibles (par ex., générations NVIDIA mixtes), en installant le meilleur pilote commun ou en basculant sur le GPU principal
  * Ajout du pilote Vulkan 32 bits pour les machines virtuelles
* **cachyos-settings :** Application de délais d'expiration de 15 secondes au démarrage et de 10 secondes à l'arrêt pour les services utilisateur, évitant les délais d'arrêt de 90 secondes

**Correctifs :**

* **Installateur :**
  * Correction de l'ordre des dispositions de clavier et de la gestion de la configuration `locale1`
  * Correction de la copie de la bonne configuration pacman dans le système installé
  * Suppression des répertoires `/etc/calamares` résiduels après l'installation
  * Déplacement du nettoyage de Calamares après tous les scripts d'installation
  * Suppression de l'étape redondante post-installation de Limine
* **CachyOS-Welcome :**
  * Prévention d'un plantage lors de la sélection de « Install Apps » sans `cachyos-pi` installé ; le bouton est désormais masqué lorsqu'il est indisponible
  * Correction d'un plantage lorsque le fichier de paramètres enregistré ne pouvait pas être lu ou analysé ; les paramètres sont désormais réinitialisés aux valeurs par défaut en cas d'échec
  * Correction de la détection des ajustements (y compris `graphical-session.target.wants`) et de la désactivation globale des ajustements de services utilisateur via polkit
* **chwd :**
  * Correction des identifiants de fournisseur des machines virtuelles
  * Suppression de l'activation inutile du service `fprintd`
  * Correction de la protection de suppression de Mesa

26.04
----

**Fonctionnalités :**

* **Installateur :**
  * Shelly remplace désormais Octopi comme gestionnaire de paquets graphique
  * Un instantané propre est désormais créé immédiatement après l'installation et conservé de manière permanente, fournissant un point de restauration de référence
  * `os-prober` de GRUB est désormais activé par défaut
  * Ajout de MangoWM comme option de bureau avec ses dotfiles
  * Suppression du bureau UKUI
  * Les GPU AMD utilisent désormais un autre thème Plymouth, car le pilote amdgpu ne parvient pas à afficher correctement le thème précédent sur les ordinateurs portables connectés à un moniteur secondaire
  * Nettoyage et modernisation de la sélection de paquets GNOME
  * Ajout d'une option pour installer `MangoWM` avec le shell `DMS`
* **CachyOS-Welcome :**
  * Ajout de la prise en charge du DNS sur HTTPS (DoH) via `blocky`
  * Ajout de la prise en charge des serveurs DNS personnalisés et d'un indicateur/réinitialisation automatique DHCP
  * Les serveurs DNS affichent désormais leurs métadonnées (région, page d'accueil, filtrage) et prennent en charge le test de latence individuel
  * Ajout de l'interrupteur de gestion de la VRAM `dmemcg-booster` (installe également `plasma-foreground-booster` sous KDE)
  * Ajout de la prise en charge complète de la navigation au clavier pour l'accessibilité
  * Remplacement des icônes sociales PNG par des SVG nets et adaptés aux écrans HiDPI
  * Ajout de `wezterm` à l'assistant de terminal
* **chwd :**
  * Ajout de la détection native des périphériques USB (via libusb/sysfs) et de la détection du type de châssis
  * Ajout de la prise en charge de l'intégration sudo des empreintes digitales (`fprint`)
  * Ajout de la détection de la famille et du modèle de processeur pour prendre en charge `intel-lpmd`
  * **Consoles portables :** Ajout des motifs exacts pour la Xbox ROG Ally
  * **Réseau :** Ajout du profil Wi-Fi Marvell AVASTAR 88W8897 (Surface Pro 4)
  * Séparation des profils NVIDIA pour les ordinateurs portables et les ordinateurs de bureau
  * Séparation et mise à jour des profils pour les machines virtuelles
* **cachyos-settings :** Passage de l'ordonnanceur d'E/S NVMe par défaut de `none` à `kyber`

**Correctifs :**

* **Installateur :**
  * La méthode de partitionnement est désormais affichée dans le journal de débogage
  * Les anciens paquets de microcode sont désormais supprimés lors de la réutilisation d'une partition de démarrage existante
* **CachyOS-Welcome :**
  * Correction des vérifications de connectivité qui renvoyaient incorrectement vrai en cas d'échec du ping
  * Visibilité assurée des icônes de liens externes dans les thèmes sombres
  * Prévention du lancement simultané de plusieurs instances de l'application d'accueil
  * Ajout de `StartupWMClass` pour une meilleure correspondance des fenêtres `.desktop`
* **chwd :**
  * Suppression du hook `kms` de `mkinitcpio.conf` sur les ordinateurs de bureau non portables pour corriger les conflits de pilotes NVIDIA
  * Recherche plus précise des noyaux installés dans les profils NVIDIA
  * Suppression de la session Xorg forcée dans les profils NVIDIA 470xx (corrige la compatibilité avec `plasma-login-manager`)
  * Suppression du paramètre obsolète `WaylandEnable=false` pour GDM dans les profils de machines virtuelles
  * Correction des détections faux-positives de consoles portables (par ex., certains ordinateurs portables MSI pris à tort pour la MSI Claw)
* **cachyos-settings :**
  * Suppression de la gestion d'alimentation `S01x` en raison de problèmes avec le pilote NVIDIA 595
  * Désactivation de `AggressiveVblank` en raison de problèmes liés à la VR avec le pilote NVIDIA

26.03
----

**Fonctionnalités :**

* **Installateur :**
  * Ajout de la prise en charge des vidéos GIF/WebP dans la sélection de bureau pour présenter les bureaux. Activé pour Plasma, GNOME, Niri et COSMIC
  * Ajout de la prise en charge de JPEG XL dans la sélection de bureau pour réduire la taille des images
  * Cachy-Update est désormais activé par défaut pour les installations GNOME et KDE
  * Amélioration de la logique d'installation du microcode — il détecte désormais le matériel et installe le bon microcode au lieu d'installer les deux puis de supprimer l'inutile
  * Amélioration du message d'erreur lorsque la partition EFI est trop petite
  * Tri de la liste des environnements de bureau des configurations simples et accessibles vers les plus avancées comme les gestionnaires de fenêtres
* **CachyOS-Welcome :**
  * Ajout d'un bouton pour installer et activer facilement « Winboat » afin de disposer d'une machine virtuelle Docker Windows simple
  * Ajout de la prise en charge du serveur DNS FFMUC dans la sélection DNS
  * Ajout de la traduction en ukrainien
* **chwd :** Réduction massive de la taille de l'initramfs pour les configurations avec GPU dédié NVIDIA
* **linux-cachyos :** Au lieu de générer un fichier `0001-cachyos-base-all.patch`, une version est désormais générée dans un dépôt Linux pour chaque publication de notre noyau patché
* **cachyos-rate-mirrors :** Amélioration massive de l'expérience pour les utilisateurs en Chine et en Russie grâce à une vérification appropriée avant d'évaluer les miroirs
* **cachyos-settings :** Ajout de la prise en charge du réglage automatique du domaine réglementaire sans fil en fonction du fuseau horaire
* **site web :** Le design du site web a été retravaillé et amélioré pour suivre des standards plus modernes
* **GitHub :** Ajout de modèles de tickets aux principaux dépôts GitHub pour améliorer la qualité des rapports de bogues et guider l'utilisateur
* **Miroirs :** Nouveaux miroirs en Russie (jura12, cachy-arch.ru), en Suède (Zyner) et au Canada (All Things Linux)

**Correctifs :**

* **Installateur :**
  * Suppression de la prise en charge de bcachefs dans la sélection de systèmes de fichiers en raison de l'exigence de bcachefs-dkms
  * Correction du chiffrement lorsque LUKS2 est utilisé sur certains périphériques
  * Correction de l'activation du gestionnaire d'affichage « ly »
* **cachyos-settings :** `cachyos-bugreport.sh` masque désormais l'adresse IP, le nom d'utilisateur, le nom d'hôte et l'adresse MAC
* **chwd :**
  * Profils génériques pour consoles portables et amélioration de la prise en charge des GPU de consoles portables
  * fwupd est désormais activé pour les consoles portables Lenovo


**Journal des modifications pour l'édition Handheld :**

* **gamescope-session :** Remplacement de gamescope-session-plus par gamescope-session-cachyos, un fork de gamescope-session de Valve
  * Active les mises à jour de micrologiciel pour les appareils Steam Deck et Lenovo Legion Go
* **plasma-login-manager :** Remplacement de SDDM par plasma-login-manager comme gestionnaire de connexion
* **gestionnaires d'amorçage :** Limine est désormais sélectionné par défaut avec des instantanés automatiques. systemd-boot reste sélectionnable
* **Installateur :** Fusion de Calamares Handheld avec le Calamares de l'édition bureau
* **ISO :** L'ISO utilise désormais Wayland au lieu de X11

26.01
----

**Fonctionnalités :**

* **Installateur :**
  * Déplacement de la sélection du gestionnaire d'amorçage dans Calamares ; la gestion est désormais consolidée dans un seul paquet.
  * La détection de l'architecture est désormais effectuée **avant** l'installation du système de base afin de réduire la taille du téléchargement.
  * GRUB utilise désormais LUKS2 pour le chiffrement.
  * Passage de `--needed` à pacman pour éviter d'installer les paquets deux fois.
  * Utilisation de la compression à un seul niveau sur NVMe pour Btrfs
  * Suppression des dépendances xorg sur les environnements de bureau Wayland.
* **ISO :**
  * Passage à `plasma-login-manager` pour l'environnement de l'ISO.
  * L'ISO contient désormais les noyaux Stable et LTS. Le noyau Stable est sélectionné par défaut.
  * Passage de la session ISO de X11 à Wayland.
* **Netinstall :**
  * Les installations Plasma utilisent désormais `plasma-login-manager` au lieu de SDDM.
  * Niri utilise désormais `noctalia-shell` et des dotfiles mis à jour.
  * Nettoyage du processus d'installation de GNOME.
* **Diapositives :** Correction de fautes de frappe dans les diapositives Calamares et ajout d'une nouvelle diapositive présentant le Wiki.
* **Miroirs :** La page d'état des miroirs (<https://packages.cachyos.org/mirrors>) affiche désormais l'état de synchronisation des miroirs CachyOS.
* **cachyos-settings :** Activation de `EnableAggressiveVblank` pour le module NVIDIA. Cela réduit le temps passé dans la moitié supérieure des interruptions pour des interruptions d'affichage à faible latence.
* **chwd :**
  * Installe `nouveau-fw` pour activer la prise en charge de VA-API dans Nouveau pour les cartes NVIDIA de la famille Kepler.
  * Ajout de la prise en charge AI-SDK pour plusieurs nouveaux GPU AMD.
  * Remplacement de HHD par `steamos-manager` et `inputplumber`.
* **Proton-CachyOS :**
  * Ajout de la prise en charge de FSR4 MLFG (Machine Learning Frame Generation) ; activée automatiquement lors de l'utilisation de `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Ajout de la prise en charge du module `d7vk`. Elle peut être activée via `PROTON_DXVK_DDRAW=1`
  * Importation des correctifs de retour haptique DualSense
  * Ajout de `WINE_BLOCK_HOSTS` pour empêcher Wine de se connecter à certains domaines
  * Activation automatique de `ENABLE_HDR_WSI=1` lors de l'utilisation de `winewayland` sur les GPU dédiés NVIDIA
  * Correction des problèmes de disposition de clavier lors de l'utilisation de `winewayland.drv`
  * Suppression d'un ancien correctif qui dégradait le 1% low FPS
  * Correction de `protonfixes` pour mieux gérer la sélection des préréglages DLSS et la redirection de `libxess_dx11.dll`
  * `proton-cachyos-slr` est désormais utilisé par défaut dans « gaming-meta ». La version native reste prise en charge.


**Correctifs :**

* **Limine :** Augmentation de la taille de la partition de démarrage à 4192 Mo pour répondre aux besoins élevés de `limine-snapper-sync`.
* **Installateur :**
  * L'installateur bloque/empêche désormais de continuer si la partition EFI est trop petite lors de l'utilisation des options « installer à côté » ou « remplacer la partition ».
  * Correction d'un problème où, après avoir sélectionné un bureau, avancé d'une étape, puis être revenu en arrière pour choisir un autre bureau, les deux restaient sélectionnés.
* **chwd :** Suppression de la variable d'environnement forçant `libva-nvidia-driver`, car elle causait des problèmes sur les systèmes multi-GPU.
* **cachyos-hello :** Correction d'un problème où cachy-update apparaissait comme désactivé alors qu'il était activé.
* **Manettes :** Correction des entrées de plusieurs manettes grâce à la mise à jour des règles d'entrée vers les plus récentes.
* **Framework 16 (Zen5) :** Correction d'un problème de gel de la session lors de l'écriture dans calamares

25.11
----

**Fonctionnalités :**

* **ISO/Installateur :** Ajout d'Orca et d'espeak-ng pour une meilleure accessibilité
* **initcpiocfg :** Activation du hook systemd sur les configurations prises en charge
* **Netinstall :** Les dotfiles Hyprland ont été supprimés
* **pacstrap :** Installation de `bcachefs-dkms` si `bcachefs` est sélectionné comme système de fichiers
* **Calamares :** Ajout de la prise en charge de plasma-login-manager et cosmic-greeter
* **Cosmic :** Passage de SDDM à cosmic-greeter
* **Polices :** Amélioration des polices pour les utilisateurs asiatiques
* **chwd :**
  * Installe `intel-media-sdk` et `vpl-gpu-rt` sur les GPU pris en charge
  * Activation de Nouveau NvBoost pour les GPU Fermi
  * Suppression de la prise en charge de l'ancien pilote NVIDIA 390xx
  * Ajout de la prise en charge de la Xbox ROG Ally/X
* **cachyos-hello :**
  * Suppression de l'installateur de paquets interne ; ouvre l'installateur de paquets CachyOS à la place
  * Ajout d'une interface CLI pour les fonctionnalités de l'interface graphique
  * Divers correctifs de vérification de version de l'ISO
* **cachyos-settings :** zram-generator : Suppression de la compression pour les pages incompressibles
* **Proton-CachyOS :**
  * Ajout de `dxvk-gplasync` comme alternative à DXVK. Activé via `PROTON_DXVK_GPLASYNC=1`
  * Ajout de `DISABLE_LAYER_MESA_ANTI_LAG` lors de l'utilisation de `PROTON_FSR4_UPGRADE`
  * Intégration de plusieurs **correctifs Wayland** (décalage en plein écran, touches mortes, comportement DPI, ajustements de sortie vidéo) et améliorations de `winewayland.drv`
  * Introduction et ajustement du comportement du **cache de shaders par jeu** et de caches de shaders plus grands (en particulier pour NVIDIA)
  * Ajout des mises à niveau d'upscalers FSR3 et XeSS

**Correctifs :**

* **Limine :**
  * Correction de l'installation de Limine sans enregistrement d'entrée sur les UEFI défectueux
  * Utilisation de la variante systemd du hook `btrfs-overlayfs`
* **Calamares :** Suppression de `attr2` comme option dans les paramètres de montage XFS
* **chwd :** Désactivation de l'interface USB Ethernet de la puce T2

25.08
----

**Fonctionnalités :**

* **Services :** Ajout de **packages.cachyos.org**, un équivalent de recherche de paquets au site web d'Arch Linux, avec une option pour exclure les paquets CachyOS.
* **Noyau :** L'installateur installe désormais en plus **linux-cachyos-lts** comme noyau secondaire/de secours après l'installation. Nous recommandons toujours d'utiliser le noyau Stable.
* **ISO :** Passage du noyau de l'ISO live de Stable à LTS en raison de problèmes persistants avec le noyau Stable, améliorant la fiabilité du démarrage.
* **Bureau :** Ajout de **Niri** comme option de bureau, incluant quelques dotfiles préconfigurés.
* **NVIDIA :** Activation de la veille **S0ix** sur le matériel pris en charge pour une mise en veille moderne à faible consommation.
* **GRUB :** Les instantanés amorçables sont désormais automatiquement activés et configurés lorsque le système de fichiers racine utilise **Btrfs**.
* **Ajustements :** Intégration de **Cachy-Update** dans la page Ajustements de l'application Welcome. Cachy-Update ajoute un minuteur et un indicateur dans la zone de notification pour informer les utilisateurs des mises à jour et leur permettre de mettre à jour en un clic.
* **Proton-CachyOS :**
    - Ajout d'un outil de téléchargement pour les DLL DLSS (version **310.3.0**), similaire à celui pour FSR4. Utilisez la variable d'environnement `PROTON_DLSS_UPGRADE=1` pour l'activer.
    - Ajout de la variable d'environnement `PROTON_DLSS_INDICATOR=1` pour activer le HUD DLSS.
    - Ajout d'un outil de téléchargement pour les DLL XeSS (version **2.1.0**), similaire à celui pour DLSS. Utilisez la variable d'environnement `PROTON_XESS_UPGRADE=1` pour l'activer.
    - Ajout de `PROTON_FSR4_RDNA3_UPGRADE` pour les GPU RDNA3. Fait la même chose que `PROTON_FSR4_UPGRADE` mais définit également d'autres variables nécessaires.
    - Ajout d'implémentations plus complètes des bibliothèques Nvidia manquantes dans Proton. Cela devrait aider à activer des options comme PhysX dans des jeux où elles étaient auparavant désactivées. Vous pouvez aussi les activer individuellement avec `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` et `PROTON_NVIDIA_NVOPTIX`.
    - Ajout d'un cache de shaders par jeu, activé par défaut, désactivable avec `PROTON_LOCAL_SHADER_CACHE=0`. Les shaders seront mis en cache dans `<steamlibrary>/shadercache/<appid>` pour chaque jeu, de façon similaire au pré-chargement des shaders. Vous aurez des saccades le temps que le cache de shaders de chaque jeu soit reconstruit, mais les shaders mis en cache ne seront pas évincés à cause d'une taille de cache limitée.
    - Ajout de [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) comme remplacement optionnel de DXVK pour les GPU plus anciens qui ne prennent pas correctement en charge Vulkan 1.3. Il utilise la branche `async`, il NE DOIT donc PAS être utilisé avec des jeux utilisant un anti-triche ou des jeux multijoueurs en général. Vous aurez été prévenu. Utilisez `PROTON_DXVK_SAREK=1` pour l'activer.
    - Ajout de `PROTON_FSR3_UPGRADE` pour mettre à niveau les DLL FSR 3.1 vers des versions plus récentes.

**Correctifs :**

* **Limine :**
    - Correction de l'erreur `limine bios-install /dev/sdaX` lors de la sélection du point de montage **/boot** comme emplacement d'amorçage sur les systèmes MBR.
    - Correction d'une valeur non initialisée du chemin `bootLoader`, qui provoquait des échecs d'installation sur les systèmes MBR lorsque l'emplacement du gestionnaire d'amorçage n'était pas explicitement sélectionné.
    - Ajout d'un avertissement concernant l'utilisation du drapeau **bios-grub** sur la partition de démarrage, qui peut provoquer une erreur « Stage 3 file not found ».
    - Correction du dual-boot prêt à l'emploi avec Windows pour les installations BIOS.
    - Correction de l'échec du démarrage des instantanés Btrfs lors de l'utilisation de **GNOME (GDM)**.
* **Lancement de l'installateur :** Ajout d'adresses IP de secours pour la vérification en ligne en cas d'échec du ping vers **cachyos.org**.

25.07
----

**Fonctionnalités :**

- **Shell** : Le shell utilisateur peut désormais être choisi au moment de l'installation entre fish, zsh et bash. Fish reste activé par défaut.
- **chwd** : Installation de plasma-x11 pour les anciens pilotes NVIDIA
- **Netinstall** : Ajout de fwupd à KDE Plasma et Gnome
- **mesa-git** : Ajout de la prise en charge d'AMD Anti Lag
- **firefox** : Introduction d'un firefox alternatif appelé « firefox-pure », incluant des améliorations avec le profil userjs. De plus, « cachyos-firefox-settings » a été ajouté et peut être installé par-dessus firefox.
- **Proton-CachyOS** :
  - Importation des commits wine-wayland en amont
  - Ajout de la variable d'environnement « PROTON_FSR4_UPGRADE », qui téléchargera automatiquement la dernière DLL FSR4 puis la remplacera pour une mise à niveau automatique sur les jeux prenant en charge FSR 3.1
  - Ajout de nombreux correctifs liés à Wayland provenant de Wine en amont publiés après Wine 10.0.
  - Ajout de correctifs pour améliorer l'intégration des systèmes anti-triche. Merci à NelloKudo
  - Ajout de correctifs pour AMD Anti Lag 2 pour vkd3d-proton et wine
  - Mise à jour de umu-protonfixes vers le dernier commit

**Correctifs :**

- **Trousseau de clés** : Amélioration de la gestion de l'installation du trousseau de clés afin d'éviter les problèmes et effectuer plusieurs tentatives.
- **systemd-oomd** : Désactivation de systemd-oomd, car il rencontrait des problèmes avec le9 et fermait les applications beaucoup trop tôt

**Journal des modifications pour l'édition Handheld :**

- **handheld-settings** : Importation de plusieurs ajustements de SteamOS vers l'édition Handheld
- **pipewire** : Définition du quantum minimal à 256
- **SteamDeck-OLED** : Installation de galileo-mura pour le Steam Deck OLED
- **Lenovo Legion Go S** : Ajout de la prise en charge du Lenovo Legion Go S

25.05
----

**Fonctionnalités :**

- **ISO** : Ajout d'une détection automatique lors du démarrage de l'ISO pour identifier le GPU NVIDIA du système et charger le module approprié (par ex. nvidia-open, nvidia), offrant une meilleure prise en charge des séries 10xx et plus anciennes.
- **Plymouth** : Ajout d'une nouvelle animation Plymouth.
  - Merci à Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) pour son travail !
- **Navigateur** : Cachy-Browser a été déprécié. Nous fournissons désormais Firefox comme navigateur préinstallé par défaut. Un guide pour migrer les profils vers Firefox (et ses forks) est disponible ici : [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall** : Ajout de kcalc, filelight, plymouth-kcm et kio-admin à l'installation KDE.
- **mkinitcpio** : Désactivation de l'initramfs de secours par défaut. Cela permet d'économiser une quantité importante d'espace.
- **Miroirs** : Ajout d'un nouveau miroir à 10 Gbps au Bangladesh. Merci à Limda pour l'hébergement !
- **Proton** :
  - Rebasage de presque tous les correctifs de **Proton CachyOS 9.0**.
  - Activation du pilote Wayland pour les builds Steam Linux Runtime. À activer avec `PROTON_ENABLE_WAYLAND=1`. Merci à [GloriousEggroll](https://github.com/GloriousEggroll) d'avoir rendu cela possible.
  - Ajout de nombreux correctifs liés à Wayland provenant de Wine en amont publiés après Wine 10.0.
  - Correction de divers problèmes avec le pilote Wayland et les jeux Vulkan. Merci à [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) pour tout son travail acharné.
  - Ajout d'une implémentation stub pour `amdxc64.dll` afin d'activer FSR4. Utilisez `FSR4_UPGRADE=1` pour mettre à niveau les jeux FSR3.1 vers FSR4. Merci encore à [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instructions : [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Ajout de correctifs liés à la DualSense pour une détection plus complète des périphériques audio destinée aux retours haptiques filaires basés sur le son. Certains jeux qui reposaient sur ce comportement spécifique devraient désormais disposer de cette fonctionnalité. Merci à [ClearlyClaire](https://github.com/ClearlyClaire) pour les correctifs originaux et à [Exotic0015](https://github.com/Exotic0015) pour s'y être penché depuis **Proton CachyOS 9.0**. En amont : [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Suppression du correctif Dragon Age Inquisition car il ne fonctionnait pas. Veuillez utiliser **Proton CachyOS 9.0** pour l'instant avec ce jeu.
- **GRUB** : Ajout d'un nouveau thème GRUB. Merci à [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Correctifs :**

- **Miroirs** : Correction d'un problème empêchant les utilisateurs de Russie d'installer le système. Cela a été atténué en n'utilisant plus CDN77, que la Russie avait commencé à bloquer.
- **kde-settings** : Désactivation de l'icône Discover dans la barre des tâches.
- **ddcutil** : Publication de la pré-version ddcutil 2.2.1 pour corriger un problème de gel des GPU AMD lors du visionnage de vidéos YouTube.

**Journal des modifications pour l'édition Handheld :**

- **os-branch** : Le mode Jeu affiche désormais correctement que CachyOS Linux est utilisé.
- **audio** : Mise à jour des profils de convolver.
- **steamos-manager** : Utilisé pour la gestion de la fréquence GPU et du TDP, les mises à jour BIOS/dock, la maintenance des périphériques de stockage, le formatage du stockage externe et la limite de charge de la batterie pour le Steam Deck.
- **steamos-powerbuttond** : Ce composant remplace le powerbuttond standard pour une meilleure expérience de mise en veille.
- **jupiter-hw-support** : Mise à jour vers 20250501.

25.04
----

**Fonctionnalités :**

- **occt** : Ajout d'OCCT à l'ISO pour disposer d'un environnement live de test de charge
  - Merci à Marek pour cette idée !

**Correctifs :**

- **noyau** : Corrige un plantage de module sur les ordinateurs portables Asus
- **limine** : Limine dispose désormais de mkinitcpio-limine-hook installé et créera automatiquement les entrées du gestionnaire d'amorçage

**Journal des modifications pour l'édition Handheld :**

- **audio** : Ajout des profils audio pour ROG Ally X et Legion Go
- **gamescope** : Remplacement de gamescope-plus par gamescope en amont

25.03
----

**Fonctionnalités :**

- **Gestionnaire d'amorçage** : Ajout de la prise en charge du gestionnaire d'amorçage Limine
- **Gestionnaire d'amorçage** : Ajout de la prise en charge des instantanés automatiques pour le gestionnaire d'amorçage Limine
- **Samba** : Ajout du paquet « cachyos-samba-settings » pour configurer facilement un partage Samba
- **NVIDIA** : Réactivation du micrologiciel GSP pour le module NVIDIA propriétaire
- **Noyau** : Ajout de la prise en charge du pilote Asus Armoury
- **Démarrage sécurisé** : Amélioration du script « sbctl-batch-sign » pour ne signer que les fichiers souhaités
- **udev** : Retour en arrière sur l'utilisation de ntfs3 comme pilote par défaut pour les partitions NTFS
  - Info : L'utilisation du pilote noyau NTFS3 par défaut a entraîné des problèmes chez certains utilisateurs. Nous l'avons donc annulée.
- **wine** : Wine et Wine-Staging utilisent désormais par défaut WoW64 et NTSync
- **scx-manager** : Extraction du gestionnaire graphique sched-ext hors de Kernel Manager vers sa propre application
- **Prise en charge matérielle** : Ajout de la prise en charge pour RDNA4, RTX 5070 Ti et 5070.
- **Paramètres** : Ajout de la prise en charge de DLSS Swapper - il s'agit d'un script qui met automatiquement à jour et utilise la dernière version et le dernier préréglage DLSS
- **Mises à jour de paquets** : linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Correctifs :**

- **initcpiocfg** : Suppression de l'ajout du module « crc32c-intel » dans mkinitcpio - Il a été déprécié et utilise désormais le module « crc32c » par défaut
- **chwd** : Désactivation du déchargement de brcmfmac sur les MacBook T2
- **chwd** : Ne pas installer le pilote NVIDIA 390.xx sur les ordinateurs portables

25.02
----

**Fonctionnalités :**

- **Noyau** :
  - L'optimisation Propeller est désormais appliquée au noyau **linux-cachyos** par défaut pour toutes les architectures disponibles.
    - **Note** : En combinaison avec AutoFDO, cela peut améliorer les performances d'environ 10 %, selon la charge de travail.
- **NVIDIA** : Ajout de la prise en charge de l'architecture Blackwell.
- **ISO** : Utilisation du module nvidia-open par défaut pour prendre en charge Blackwell. Les utilisateurs disposant de GPU plus anciens que Turing doivent utiliser la première option ou l'option de démarrage de secours.
- **Paramètres** : Activation du toucher pour cliquer par défaut dans les sessions X11.
- **udev** : Utilisation de ntfs3 comme pilote par défaut pour les partitions NTFS.
- **game-performance** : Désactivation de l'économiseur d'écran pendant l'exécution des jeux.
- **kernel-manager (sched-ext)** : Ajout de la prise en charge du mode serveur.
- **noyau** : Ajout de correctifs pour la fonctionnalité AMD preferred core.
- **chwd** : Réajout du contournement pour RTD3.
- **Mises à jour de paquets** : linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Correctifs :**

- **chwd** : Correction d'un problème empêchant les ordinateurs portables hybrides avec matériel Intel et NVIDIA d'utiliser leur GPU dans DaVinci Resolve.
- **glibc** : Ajout d'un correctif pour CVE-2025-0395.
- **kernel-manager** : Tentative d'installation du module NVIDIA précompilé, s'il est disponible pour le noyau Arch par défaut.
- **kernel-manager** : Ajout d'une vérification supplémentaire pour éviter d'écraser la valeur si un module n'est pas disponible.

**Journal des modifications pour l'édition Handheld :**

- **hooks** : Autorisation à nouveau d'utiliser Proton compilé nativement.
- **divers** : Plusieurs mises à jour et correctifs.

24.12
----

**Fonctionnalités :**

- Noyau :
  - AutoFDO est désormais appliqué au noyau `linux-cachyos` par défaut pour toutes les architectures disponibles
    - **Note** : Les gains de performance sont minimes pour le moment en raison de limitations actuelles. La fusion des profils nécessite LLVM 19, et l'optimisation Propeller en dépend. Nous prévoyons que LLVM 19 et des profils plus optimisés seront disponibles d'ici la fin de l'année, suite à l'adoption de LLVM 19 par Arch Linux
- chwd : Rusticl est désormais configuré correctement
- chwd : amélioration de la journalisation des erreurs lors des appels de hooks
- chwd : correction de la sélection des pilotes VAAPI
- cachyos-settings : Ajout d'un script pour faciliter l'exécution d'applications via Zink
- Configuration Sysctl : Remaniement et optimisation de plusieurs paramètres
- Kernel Manager : Ajout de la prise en charge de `scx_loader`, permettant le changement natif d'ordonnanceur
- Installateur : Le service Bluetooth est désormais activé par défaut
- Netinstall :
  - Ajout de `wireless-regdb` aux paquets installés
    - Cela configure la connexion pour utiliser les canaux appropriés et débloque des canaux supplémentaires, améliorant potentiellement la vitesse d'Internet
    - **Note** : Une région générique est définie par défaut ; il est recommandé de la personnaliser selon votre région pour des performances optimales
- **Mises à jour de paquets** : NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Corrections de bogues**

- Installateur : Les journaux d'installation n'ouvrent plus de fenêtres de terminal de débogage
- Gestion des partitions :
  - Des paramètres `umask` appropriés garantissent que `/boot` est inaccessible sans permissions suffisantes
- Lancement de l'installateur : Les vérifications de connectivité Internet ont été corrigées

**Journal des modifications pour l'édition Handheld :**

- Mise à jour des paquets liés aux consoles portables
- Correction d'un problème avec la gestion des profils d'alimentation
- Ajout de la prise en charge du WiFi 6

24.11
----

**Fonctionnalités :**

- thp-shrinker : Définition de la valeur max_ptes_none à 80 % pour les pages remplies de zéros. Cela réduira l'utilisation mémoire lorsque THP est sur always, tout en maintenant les mêmes performances
- NVIDIA : Le micrologiciel GSP est désormais automatiquement désactivé si l'utilisateur passe par lui-même au pilote propriétaire
- chwd : NVIDIA : les services nvidia-powerd sont activés pour les ordinateurs portables, afin d'atteindre le TDP maximal disponible
- proton-cachyos : DLSS Frame Generation fonctionne désormais. Cela devrait également fonctionner à l'avenir dans Proton en amont
- noyau : AMD Cache Optimizer est désormais appliqué. Les utilisateurs équipés de processeurs à double CCD x3d peuvent désormais choisir entre privilégier les cœurs de fréquence ou de cache
- noyau : amd-pstate : Rétroportage des correctifs de performance amd-pstate pour Strix Point
- noyau : Ajout de correctifs en amont pour les problèmes de TDP sur les GPU AMD rdna2 et rdna3
- noyau : Ajout de correctifs de synchronisation pour les écrans en configuration 5120x1440x240
- noyau : Noyau expérimental optimisé avec AutoFDO dans le dépôt sous le nom « linux-cachyos-autofdo »
- ISO : Ajout d'une vérification si l'utilisateur exécute l'édition handheld et d'un avertissement s'il démarre l'installation sur un appareil non pris en charge
- ISO : Ajout d'une vérification si l'utilisateur utilise la dernière ISO, et d'un avertissement dans le cas contraire

**Corrections de bogues :**

- refind : partitionnement : passage d'une disposition à 3 partitions à une disposition à 2 partitions
- netinstall : ajout de kdeplasma-addons à l'installation Plasma
- calamares : Correction d'un problème lors du partitionnement avec une partition swap

**Journal des modifications pour l'édition Handheld :**

- La prise en charge de la Rog Ally X devrait être améliorée

24.10
----

**Fonctionnalités :**

- Mises à jour de paquets : linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Corrections de bogues :**

- sddm : Intégration d'une version plus récente de sddm pour corriger les connexions aux sessions Wayland
- ISO : Ajout de xf86-video-amdgpu pour corriger le chargement de la session graphique sur certaines configurations
- chwd : Correction de la réinstallation des profils

24.09
----

**Fonctionnalités :**

- Paquets : Optimisation de plusieurs paquets avec PGO, tels que LLVM, Clang, svt-av1 et nodejs. Cela a permis, par exemple, d'obtenir un compilateur Clang 10 % plus rapide
- Dépôt : Le dépôt est désormais synchronisé et mis à jour plus fréquemment, ce qui réduit encore les délais. L'intervalle de synchronisation a été réduit de toutes les 3 heures à toutes les heures.
- Dépôt : À partir du 27.09.2024, les paquets compilés avec -fpic activeront automatiquement -fno-semantic-interposition. Cela peut apporter un gain de performance pour de nombreux paquets.
- zlib-ng : Est désormais utilisé en remplacement de zlib
- sddm : Sur l'installation KDE, sddm utilisera désormais Wayland par défaut comme compositeur. # Fournir les changements de migration dans l'article de publication
- cachyos-settings : NetworkManager utilise désormais systemd-resolved comme backend, ce qui améliore la mise en cache DNS
- cachyos-settings : Utilisation de time.google.com comme serveur de synchronisation horaire pour éviter les problèmes de synchronisation sur certaines configurations
- gcc : Ajout de correctifs pour l'optimisation de znver5
- gcc : Reprise de correctifs et d'options depuis Clear Linux
- glibc : Ajout des correctifs « evex » ainsi que des reprises de Clear Linux
- wiki : Le Wiki a reçu de nombreux ajouts et remaniements
- chwd : Simplification de la gestion des périphériques
- chwd : Tous les profils sont désormais spécifiquement conçus pour les périphériques PCI
- chwd : Ajout de `--autoconfigure` pour gérer automatiquement l'installation des pilotes
- Mises à jour de paquets : linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Corrections de bogues :**

- Launch-Installer : Ajout de correctifs pour synchroniser l'horloge matérielle avant de démarrer l'installation
- calamares : Ajout d'un correctif pour démonter le système de fichiers après l'installation
- trousseau de clés : Nettoyage et recréation du trousseau de clés avant de démarrer l'installation ; cela corrige de rares problèmes de trousseau
- sysctl : Les vidages mémoire (core dumps) ont été réactivés
- chwd : Suppression de `libva-nvidia-driver` du profil PRIME pour éviter d'éventuels conflits et améliorer la compatibilité avec des logiciels comme Spectacle
- cachyos-settings : Ajout d'un contournement pour les plantages de GNOME Wayland
- cachyos-fish/zsh-config : Suppression des contournements spécifiques à Wayland

**Journal des modifications pour l'édition Handheld :**

- Ally/Ally X : HHD a été remplacé par inputplumber, car hhd n'utilise pas correctement le pilote noyau correspondant, ce qui entraînait des problèmes.
- Mise à jour des paquets liés aux consoles portables

24.08
----

**Fonctionnalités :**

- chwd : NVIDIA utilise désormais le module open par défaut pour les cartes prises en charge
- Bureau : Ajout de l'environnement de bureau Cosmic aux options d'installation
- NVIDIA : Le dernier pilote 560 Beta est désormais le pilote par défaut ; egl-wayland a été patché pour corriger les plantages dans Firefox et d'autres applications
- miroirs : CDN77 a sponsorisé CachyOS avec du stockage objet doté d'un cache mondial, améliorant considérablement les vitesses de connexion pour les utilisateurs
- miroirs : CachyOS fournit désormais son propre miroir Arch Linux pour éviter les problèmes de synchronisation, défini par défaut lors de l'installation avec des miroirs de secours
- Démarrage sécurisé : Introduction d'un script et d'un tutoriel dans le Wiki pour faciliter la prise en charge du démarrage sécurisé (Secure Boot)
- cachy-chroot : Ajout du montage automatique via fstab pour simplifier le chroot
- cachy-chroot : Implémentation de la prise en charge du chiffrement LUKS
- kernel-manager : Ajout de la prise en charge de la définition des options sched-ext dans la configuration sched-ext
- kernel-manager : Introduction d'une option pour compiler nvidia-open
- kernel-manager : Ajout d'une option pour mémoriser les derniers paramètres utilisés dans la page de configuration
- Mises à jour de paquets : linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Corrections de bogues :**

- chwd : Amélioration de la détection du profil PRIME en fonction du nom du périphérique
- chwd : Suppression du contournement RTD3 en raison de problèmes sur certaines configurations
- cachyos-rate-mirrors : Désactivation du classement des miroirs lors de l'exécution sur l'ISO Live
- cachy-chroot : Correction d'un plantage lorsqu'une partition n'avait pas de fstype ou d'uuid valide (par ex. partition de récupération Microsoft)
- calamares : Refonte de l'initialisation du trousseau de clés
- kernel-manager : Correction de la prise en charge de la compilation de pkgbase personnalisés avec des noyaux LTO et des modules activés
- kernel-manager : Correction du délai d'invite de mot de passe
- ISO : Remplacement de radeon.modeset=1 par amdgpu.modeset=1 pour les GPU modernes
- game-performance : Prévention d'un échec lorsque le profil est indisponible

**Journal des modifications pour l'édition Handheld :**

- prise en charge matérielle : Ajout de la prise en charge de l'Ally X, merci à Luke Jones
- libei : Implémentation de la prise en charge de libei, en remplacement de libextest
- packagekit : Blocage de l'installation de packagekit pour éviter des problèmes avec les mises à jour système via Discover
- hook : Ajout d'un hook pacman pour entrer en conflit avec les versions de Proton compilées nativement, évitant d'éventuels problèmes
- Mise à jour de jupiter-fan-control, steamdeck-dsp et du micrologiciel Steam Deck

24.07
----

**Fonctionnalités :**

- Dépôt : Introduction du dépôt optimisé Zen 4, qui sera utilisé pour les processeurs Zen4 et Zen5
- ISO : Ajout d'une vérification automatique de l'architecture pour le dépôt Zen4/Zen5
- chwd : Ajout de la prise en charge GC pour les GPU AMD, ce qui aide à détecter les GPU officiellement pris en charge par ROCm
- chwd : Utilisation de libva-nvidia-driver sur les cartes prises en charge
- ksmctl : Introduction d'un outil pour activer/désactiver KSM : `ksmctl --enable`
- noyau : Un paquet « linux-cachyos-dbg » est désormais disponible pour le noyau « linux-cachyos », contenant un vmlinux non allégé (unstripped) à des fins de débogage
- noyau : amd cpb boost est désormais disponible et power-profiles-daemon est patché ; si le profil « powersave » est défini, il désactivera le boost sur les processeurs AMD
- noyau : Ajout d'un correctif d'économie d'énergie pour les SoC AMD lors de la lecture vidéo
- kernel-manager : Ajout de la prise en charge de la gestion des ordonnanceurs sched-ext et de l'obtention d'informations via l'interface graphique
- steam/proton : Un script « game-performance » est désormais disponible et peut être ajouté aux options de lancement de Steam
- power-profiles : Sur les processeurs prenant en charge AMD Pstate, la fréquence linéaire minimale est désormais réglée plus haut, ce qui peut améliorer la latence et les 1% lows
- kwin : Ajout d'un rétroportage pour le tearing, qui a été testé. Sur NVIDIA, cela fonctionne uniquement sur les applications Wayland natives
- netinstall : Cutefish a été retiré des environnements de bureau installables
- Miroirs : Ajout de miroirs en Autriche et en Chine ; le miroir en Chine est hébergé par l'université TUNA. Cela devrait beaucoup aider les utilisateurs en Chine
- Mises à jour de paquets : linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Corrections de bogues :**

- ISO : Définition de copytoram sur auto au lieu de yes
- ISO : Correction de la mise en veille sur l'ISO Live pour les ordinateurs portables
- Lancement de l'installateur : Installation du dernier archlinux-keyring avant le début de l'installation pour éviter des problèmes lors de sa récupération dans le chroot
- Classement des miroirs : Classement uniquement des miroirs Tier 1 au moment de l'installation
- pacman.conf : Suppression du dépôt pacman inutilisé
- cachy-chroot : Ne pas afficher les sous-volumes .snapshot
- Calamares : Ne plus utiliser le module « Preservefiles », car les utilisateurs signalent des problèmes avec celui-ci.

**Journal des modifications pour l'édition Handheld :**

- Ajout d'un fichier de configuration pour appliquer différentes mises à l'échelle, `'/home/$USER/.config/deckscale`
- Rendre le basculement vers le GameMode plus robuste
- Mise à jour du micrologiciel Wi-Fi/Bluetooth pour le Steam Deck
- Implémentation du montage automatique pour le GameMode
- Ajout d'ajustements gamescope-session pour la topologie CPU Wine, le HDR et le rétroéclairage
- Correction de la sélection du taux de rafraîchissement
- Mise à jour de jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Fonctionnalités :**

- chwd : Introduction de la détection matérielle des consoles portables
- chwd : Introduction de la prise en charge des MacBook T2
- chwd : Ajout de la détection des pilotes réseau
- Installation : Ajout de la prise en charge des MacBook T2
- ISO : Ajout de cachy-chroot. Il s'agit d'un script qui aide l'utilisateur à effectuer un chroot dans le système.
- ISO : Passage aux hooks de microcode ; cela nécessite l'utilisation de la dernière version de Ventoy (1.0.98)
- ISO : Activation de copytoram ; il n'est plus nécessaire de le désactiver car nous ne proposons plus l'installation hors ligne
- système de fichiers : BTRFS est désormais le système de fichiers sélectionné par défaut
- netinstall : Utilisation d'ufw au lieu de firewalld
- Calamares : Mise à jour des diapositives de présentation
- Diapositives : Mises à jour pour les derniers changements
- Mises à jour de paquets : linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Corrections de bogues :**

- Calamares : umount : Réactivation de emergency
- Qtile : Les contrôles multimédias fonctionnent désormais correctement
- NVIDIA : Activation des services et options nécessaires pour un fonctionnement correct de la mise en veille sous Wayland
- netinstall : Suppression de b43-fwcutter de l'installation
- netinstall : Remplacement de hyprland-git par hyprland
- netinstall : Suppression de linux-cachyos-lts de la sélection pour éviter des problèmes de modules manquants
- Calamares : Shellprocess : Déplacement du classement des miroirs avant l'installation du trousseau de clés

**Journal des modifications de la version expérimentale Handheld :**

- Thème KDE Vapor par défaut (thème SteamOS)
- Système de fichiers par défaut : BTRFS
- Noyau par défaut : linux-cachyos-deckify
- SDDM utilise désormais Wayland
- Drapeau d'environnement pour HHD afin de réduire la latence
- Ajout d'arguments noyau pour améliorer le comportement du basculement en Game Mode
- Le nom d'utilisateur peut désormais être modifié
- La détection matérielle configure et installe les paquets requis selon l'appareil utilisé
- Le clavier Mallit utilise désormais le mode sombre
- Powerbuttond de Valve pour une mise en veille correcte
- Les raccourcis peuvent désormais être ajoutés à Steam
- Mise à jour de scx-scheds vers le dernier commit git, apportant les dernières améliorations pour l'ordonnanceur LAVD
- Ajout du montage automatique à cachyos-handheld
- CachyOS peut désormais effectuer les mises à jour du BIOS du Steam Deck sur le Steam Deck

24.05
----

**Fonctionnalités :**

- Systèmes de fichiers : Introduction de Bcachefs comme option de système de fichiers
- pacstrap : Ajout d'une détection si Bcachefs est utilisé et installation des paquets Bcachefs-tools correspondants
- CachyOS-AI-SDK : Introduction d'une nouvelle option d'installation pour fournir une configuration NVIDIA SDK prête à l'emploi
- CachyOS-Deckify : Mise à disposition d'une variante pour consoles portables (expérimentale), voir [ici](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) pour plus de détails
- BTRFS : Snapper automatique pour les instantanés, installable depuis l'application CachyOS hello.
- ISO : Abandon de l'installateur hors ligne
- Mises à jour de paquets : Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Corrections de bogues :**

- settings.conf : Déplacement de la détection matérielle avant netinstall
- pacstrap : Utilisation de btrfs-assistant au lieu de btrfs-assistant-git
- plymouth : suppression du hook plymouth sur zfs + chiffrement
- ISO : Ajout de divers fichiers de configuration pour KDE afin d'éviter le verrouillage de l'écran pendant l'installation
- services-systemd : Activation correcte de fstrim.timer
- umount : Désactivation de emergency pour éviter des problèmes avec l'installation zfs
- shellprocess : Nettoyage des résidus de l'installation hors ligne

24.04
----

**Fonctionnalités :**

- Plymouth : Utilisation de plymouth pour fournir une animation de démarrage thématisée
- ISO : Retour à X11 en raison de problèmes lors de la définition de la disposition du clavier dans calamares
- rEFInd : Nouvelle disposition de partitionnement (`/boot` et `/boot/efi` séparés)
- netinstall : KDE : Installation de xwaylandvideobridge par défaut
- netinstall : Utilisation de lightdm au lieu de ly pour divers environnements de bureau, en raison d'un bogue dans ly
- systemd-boot : Utilisation de `@saved` pour systemd-boot afin qu'il mémorise l'entrée de démarrage précédemment sélectionnée
- cachyos-keyring : Refactorisation du paquet cachyos-keyring et fourniture d'un trousseau cachyos-trusted
- ISO : Utilisation de la compression ZSTD 19 pour l'image mkinitcpio de l'ISO
- Mises à jour de paquets : xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 et cachyos-settings 39-2

**Corrections de bogues :**

- Connexion automatique : Correction de l'option de connexion automatique lorsqu'elle est utilisée avec sddm
- xz : Fourniture d'un paquet xz patché
- libarchive : Atténuation du commit d'un acteur malveillant sur xz
- cachyos-settings : règle udev : ne pas définir watermark_scale_factor à 125, car cela augmente considérablement l'utilisation de la RAM
- calamares : pacman-keyring : Utilisation d'une méthode plus simple pour intégrer le trousseau de clés dans l'installation

24.03.1
----

**Fonctionnalités :**

- netinstall : Suppression des noyaux supplémentaires dans la sélection netinstall pour éviter toute confusion chez les utilisateurs. D'autres noyaux personnalisés peuvent être installés via Kernel Manager
- Kernel Manager : Les modules NVIDIA sont automatiquement installés lorsqu'ils sont détectés, rebasé sur QT6, correction des noms personnalisés lors de l'utilisation de l'option LTO
- Package Installer : Rebasé sur QT6, mis à jour pour pacman 6.1
- Mises à jour de paquets : linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Corrections de bogues :**

- NVIDIA : module nvidia patché pour prendre le contrôle de nvidia.drm.modeset plus tôt afin d'éviter des problèmes sur les cartes graphiques NVIDIA
- Refind : Ne pas installer le noyau lts pour éviter des problèmes
- shellprocess : Suppression complète du répertoire liveusers

24.03
----

**Fonctionnalités :**

- ISO : Plasma 6 est désormais fourni dans l'ISO et utilise Wayland par défaut ; l'ISO GNOME a été supprimée pour éviter toute confusion à propos de netinstall
- Calamares : Rebasé sur QT6
- refind : Ajout de f2fs et zfs comme options, incluant le chiffrement luks2
- miroirs : Nous fournissons désormais 2 CDN mondiaux. L'un hébergé par Cloudflare R2 et l'autre par Digital Ocean
- mirrorlist : Récupération directe de l'installateur en ligne depuis le CDN pour offrir une distribution plus rapide
- initcpiocfg : Utilisation du nouveau hook microcode pour le chargement anticipé du ucode
- gestionnaire d'amorçage : Ne plus charger le microcode avec le gestionnaire d'amorçage
- Mises à jour de paquets : linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Corrections de bogues :**

- pacstrap : Ne pas installer les paquets de configuration afin d'offrir à l'utilisateur une sélection plus propre de l'installation
- shellprocess_pacman : Copier également les listes de miroirs cachyos-v4 classées vers la cible

24.02
-----

**Fonctionnalités :**

- refind : Modification de la disposition de `/boot/efi` vers `/boot` pour offrir davantage d'options de systèmes de fichiers et de chiffrement
- Live-ISO : Nettoyage et synchronisation de l'ISO Live
- Lancement de l'installateur : Ajout d'une recommandation pour l'installation en ligne
- configurations de shell : Ajout d'une option pour désactiver fastfetch au démarrage du terminal et ajout d'un alias « update »
- netinstall : Ajout de phonon-qt5-vlc à kde
- Mises à jour de paquets : linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Fonctionnalités :**

- x86-64-v4 : Détection automatique et activation du dépôt lors de l'installation
- linux-cachyos : le framework d'ordonnancement sched-ext est désormais fourni dans le noyau par défaut
- xwayland : Fourniture par défaut des correctifs de synchronisation explicite
- Mises à jour de paquets : linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Corrections de bogues :**

- chwd : Pour les cartes Nvidia Ada Lovelace, les modules nvidia sont directement intégrés dans l'initramfs afin d'éviter les problèmes avec le KMS précoce

23.12
-----

**Corrections de bogues :**

- zfs : Ajout de `compatibility=grub` aux options du pool pour assurer la compatibilité
- grub/xfs : Ajout d'un correctif à grub pour assurer la compatibilité avec la nouvelle option par défaut xfs bigtime
- netinstall : xdg-desktop-portal-hyprland au lieu de xdg-desktop-portal-hyprland-git

23.11
-----

**Fonctionnalités :**

- nvidia : Utilisation du module nvidia au lieu de dkms
- Calamares synchronisé avec l'amont
- Mises à jour de paquets : linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Corrections de bogues :**

- nvidia-hook : Réajout de nvidia-hook pour éviter des problèmes lors de l'installation avec le nouveau module
- netinstall : Des paquets ont été renommés suite aux changements récents dans l'empaquetage KF5
- netinstall : xdg-desktop-portal-gnome a été ajouté à l'installation GNOME

23.09
-----

**Fonctionnalités :**

- systemd-boot : Passage à luks2 par défaut
- netinstall : Mise à disposition d'une catégorie dédiée pour les paquets CachyOS
- Calamares synchronisé avec l'amont
- Mises à jour de paquets : linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Corrections de bogues :**

- shellprocess_sdboot : Éviter d'utiliser « sudo » lors de la génération des entrées de démarrage pendant le processus d'installation

23.08
-----

**Fonctionnalités :**

- Calamares synchronisé avec l'amont
- Mises à jour de paquets : linux-cachyos 6.4.10, nvidia-utils 535.98

**Corrections de bogues :**

- Le trousseau de clés a été mis à jour et fonctionne désormais correctement

23.07
-----

**Fonctionnalités :**

- CachyOS-Settings inclut désormais « bpftune », qui ajuste automatiquement les paramètres réseau en fonction de l'utilisation
- CachyOS-Qtile-Settings : Améliorations de confort d'utilisation, meilleures icônes, ...
- Mises à jour de paquets : linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Corrections de bogues :**

- rate-mirrors a été corrigé
- chwd (Hardware Detection) a reçu plusieurs correctifs
- correction de l'installation des pilotes non libres pour les configurations hybrides dans l'installateur
- correction des gels de Calamares, qui se produisaient dans de rares configurations, principalement en VM
- Diapositives : Correction d'une faute de frappe sur la diapositive 6

23.06
-----

**Corrections de bogues :**

- Installation hors ligne : Correction de calamares

23.05
-----

**Fonctionnalités :**

- La disposition de la migration Git de CachyOS est désormais reflétée dans l'installation
- chwd (mhwd) a reçu plusieurs correctifs
- Pacman : Nous avons ajouté une fonctionnalité permettant d'afficher un message à nos utilisateurs avant une mise à jour
- Calamares a été synchronisé avec l'amont
- Mises à jour de paquets : linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Corrections de bogues :**

- netinstall : correctifs mineurs dus à des changements de paquets
- Diapositives : La diapositive 6 a été mise à jour pour refléter les derniers changements

23.04
-----

**Fonctionnalités :**

- Introduction de l'environnement de bureau Qtile
- Refonte de mhwd : réécriture en Rust ; profils simplifiés pour les GPU et cartes réseau ; suppression d'une grande quantité de code ancien
- Mises à jour de paquets : linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Corrections de bogues :**

- f2fs : Suppression des options de montage « atgc » car elles posent des problèmes avec systemd

23.03.1
-------

**Fonctionnalités :**

- Mises à jour de paquets : linux-cachyos 6.2.7, cachy-browser 111.0

**Corrections de bogues :**

- Calamares a été corrigé avec le gestionnaire d'affichage lightdm suite à des commits défectueux en amont de calamares
- Le problème de trousseau de clés de l'installation hors ligne a été corrigé
- Refind : Utilisation de linux-cachyos-lts par défaut. La version 6.2 actuelle ne semble pas bien fonctionner avec refind

23.03
-----

**Nouvelles fonctionnalités :**

- Ajout du gestionnaire d'amorçage refind
- Installation automatique des pilotes Nvidia à l'aide de MHWD
- Prise en charge du chiffrement pour l'installation ZFS
- Ajout de Hyprland à l'installation réseau (netinstallation)
- CachyOS-KDE-Settings utilise désormais le thème par défaut de KDE, mais les thèmes CachyOS restent préinstallés et utilisables
- Mises à jour de paquets : linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Refonte complète et amélioration du module calamares pour le gestionnaire d'amorçage
- L'ISO est désormais signée avec une clé GPG
- MHWD a été amélioré et mis à jour
- Synchronisation de Calamares avec l'amont

**Corrections de bogues :**

- L'option « remplacer la partition » propose désormais une sélection de système de fichiers
- Correction d'une faute de frappe dans la diapositive 3
- nouveau a été corrigé et charge désormais le module correctement
- MHWD : Utilisation de modesetting pour INTEL/ATI et Nouveau
- Suppression du hook zfs de mkinitcpio sur l'ISO live, qui causait des problèmes au démarrage
- Vous pouvez télécharger la mise à jour depuis nos miroirs sur SourceForge.

23.02
-----

**Nouvelles fonctionnalités :**

- Le dépôt cachyos-community-v3 a été ajouté
- Les environnements de bureau Budgie, Mate et LXDE ont été ajoutés à l'installation réseau (Netinstallation)
- Bluetooth.service est désormais activé par défaut
- F2FS et grub sont de nouveau activés et fonctionnels
- Mises à jour de paquets : linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Corrections de bogues :**

- Rate-mirrors bascule désormais vers des miroirs non classés s'il échoue à les évaluer
- cachyos-rate-mirrors dispose d'un délai d'expiration fetch-mirrors plus long
- Github a été ajouté au fichier hosts pour éviter des problèmes de liste de miroirs
- Les entrées de démarrage pour BIOS ont été mises à jour dans syslinux

23.01
-----

**Fonctionnalités :**

- Les diapositives Calamares ont été retravaillées et mises à jour
- L'environnement de bureau UKUI a été ajouté à l'installation réseau (Netinstallation)
- L'environnement de bureau Cinnamon a été ajouté à l'installation réseau (Netinstallation)
- Cmdline : zswap est désormais désactivé par défaut car CachyOS fournit zram par défaut
- Calamares mis à jour vers le dernier commit
- LLVM 15 est désormais fourni par défaut
- Mises à jour de paquets : linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- L'installateur CLI a été mis à jour

**Corrections de bogues :**

- remove-ucode shellprocess s'exécute désormais également lors de l'installation hors ligne
- pamac a été supprimé de l'installation réseau (netinstall)
- Les miroirs cachyos classés sont désormais correctement copiés vers la cible d'installation
- power-profile-daemon n'est plus activé par défaut

22.12
-----

**Fonctionnalités :**

- Nouvel arrière-plan GRUB dans le gestionnaire d'amorçage de l'ISO
- memtest est désormais inclus pour les systèmes UEFI
- CachyOS-sddm-theme a été ajouté à l'installation KDE
- Script de versionnement automatique ajouté lors de la création de l'ISO
- Calamares mis à jour vers le dernier commit
- Les miroirs sont désormais classés avec « cachyos-rate-mirrors », qui classe nos miroirs et ceux d'Arch
- Mises à jour de paquets : Noyau 6.1.1, mesa 22.3.1, plasma 5.26.4,...
- L'environnement de bureau Kofuku a été supprimé
- ISO supplémentaire incluant llvm 15 pour prendre en charge les cartes AMD plus récentes

**Corrections de bogues :**

- Calamares a été corrigé lors de l'utilisation de GNOME comme ISO
- zfshostid fonctionne désormais correctement pour l'installation hors ligne et en ligne
- Ajout du hook « kms » au module initcpiocfg pour suivre les valeurs par défaut d'archlinux
- Et d'autres correctifs de l'ISO

22.11
-----

**Fonctionnalités :**

- Calamares et sa configuration sont fournis dans un seul paquet
- Nettoyage complet des paquets dans netinstall
- Ajout d'un module qui supprime automatiquement les ucodes inutiles
- RAM requise réduite à 2,5 Go
- Les paquets requis pour btrfs ne sont désormais installés que pour btrfs
- Calamares mis à jour vers le dernier commit
- Le gestionnaire d'amorçage de l'ISO dispose désormais d'un arrière-plan
- Mises à jour courantes de paquets (mesa, noyau, ...)
- Remplacement de systemd-network par networkmanager

**Corrections de bogues :**

- qemu-quest-agent.service a été supprimé de l'ISO
- copytoram a été complètement désactivé, il cassait l'installation hors ligne
- mkinitcpio.conf a été mis à jour
- Et d'autres correctifs de l'ISO

22.10
-----

**Fonctionnalités :**

- Pacman utilise désormais `Architecture=auto` pour l'installation x86-64-v3, car nous avons ajouté un correctif permettant à pacman de détecter automatiquement x86-64-v3
- Pacman affiche désormais depuis quel dépôt un paquet a été installé
- La sélection du gestionnaire d'amorçage détecte automatiquement si l'EFI est présent ; sinon, elle utilise grub par défaut
- Le choix du swap a été désactivé par défaut, car zram est généré automatiquement de manière dynamique
- Calamares mis à jour vers le dernier commit
- La RAM minimale requise a été fixée à 4 Go
- cachyos-grub-theme a été supprimé

**Corrections de bogues :**

- La détection SSD et HDD dans fstab a été désactivée jusqu'à ce qu'il y ait un correctif en amont
- Le double sous-volume BTRFS a été corrigé
- Ajout du microcode manquant au gestionnaire d'amorçage grub de l'ISO
- Ajout d'un mode de démarrage de secours, qui ne définit aucun modeset (nomodeset)
- Et d'autres correctifs de l'ISO

22.09
-----

**Fonctionnalités :**

- Calamares est désormais sur la dernière branche 3.3. Elle apporte des corrections de bogues et de nouvelles fonctionnalités à calamares
- L'installateur TUI est désormais inclus dans l'ISO graphique ; vous pouvez l'utiliser avec « cachyos-installer »
- Calamares détecte désormais automatiquement si le système de fichiers cible est un SSD ou un HDD et ajuste les options fstab en conséquence
- Nvidia pour les derniers GPU (à partir de la série 9xx) dispose désormais de sa propre entrée de démarrage, pour éviter les problèmes avec nouveau
- Les options de montage fstab et zfs ont été mises à jour
- FireFox ne sera plus installé par défaut puisque cachy-browser est installé par défaut

**Corrections de bogues :**

- cachyos-gaming-meta a été supprimé du module netinstall pour éviter des problèmes lors du processus d'installation
- Les paquets netinstall ont été mis à jour et ont reçu quelques correctifs
- L'installation d'OpenBox a été corrigée
- Corrections habituelles de traduction

22.07
-----

**Fonctionnalités :**

- Sélection du gestionnaire d'amorçage : l'utilisateur peut désormais choisir lors de l'installation en ligne entre grub et systemd-boot
- Lors de l'installation en ligne, la toute dernière version de calamares sera désormais toujours installée, ce qui aide à déployer des correctifs « à la volée »
- Calamares dispose désormais d'un module mhwd qui installe automatiquement les pilotes nécessaires (pilotes libres)
- Calamares dispose de nouvelles diapositives d'images lors de l'installation
- Les options de montage fstab et zfs ont été mises à jour
- Prise en charge HiDPI

**Corrections de bogues :**

- Le bogue des paramètres régionaux (locales) dans calamares a été corrigé
- F2FS a été supprimé pour le gestionnaire d'amorçage grub car il ne fonctionne actuellement pas (problème calamares), il peut toujours être utilisé avec systemd-boot
- Calamares affiche désormais le bon système de fichiers par défaut
- L'ISO Gnome a été corrigée
- Les paquets manquants dans l'ISO live ont été ajoutés pour l'installation hors ligne
- Le chiffrement luks avec btrfs et swap a été corrigé
- Corrections habituelles de traduction

22.06
-----

Les bogues connus suivants ont été corrigés :

- L'installation échouait lorsqu'un processeur générique était utilisé
- KDE montait automatiquement les partitions zfs, ce qui empêchait la connexion automatique dans l'ISO de fonctionner

**Améliorations :**

- Le pare-feu du serveur a été corrigé ; cloudflare bloquait des utilisateurs en tant que « bots », ce qui entraînait une erreur lors de l'installation
- Ajout de la prise en charge des thèmes pour Gnome, XFCE, OpenBox
- Mise à jour de notre wiki

**_CachyOS - Kernel - Manager_**
Nous sommes également ravis d'annoncer notre CachyOS-Kernel-Manager.
Vous y avez la possibilité d'installer le noyau depuis le dépôt et aussi de configurer via une interface graphique votre propre compilation de noyau, ce qui le rend très facile à personnaliser selon vos besoins.

Voici les options que vous pouvez sélectionner pour une compilation du noyau :

- Ordonnanceur (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA désactivé ou activé
- KBUILD CFLAGS (-O3 ou -O2)
- Définir le gouverneur performance par défaut
- Activer BBR2
- Fréquence d'horloge (Tickrate) (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, periodic, full)
- désactiver l'ordonnanceur d'E/S MQ-Deadline
- désactiver l'ordonnanceur d'E/S Kyber
- Activer ou désactiver MG-LRU
- Activer ou désactiver DAMON
- Activer ou désactiver Speculative page fault
- Activer ou désactiver LRNG (Linux Random Number Generator)
- Appliquer l'optimisation automatique du noyau (détecte automatiquement la microarchitecture de votre CPU)
- Appliquer l'optimisation du noyau par sélection (vous verrez une liste de différentes microarchitectures CPU et pourrez sélectionner la vôtre avec un numéro)
- Désactiver le débogage (réduit la taille du noyau)
- Activer ou désactiver nf cone
- Activer LTO (Full, Thin, No)

22.05
-----

CachyOS a été fondé il y a un an. Après presque un an de développement, nous sommes vraiment fiers d'annoncer notre première version stable de l'installateur graphique.
Nous avons passé beaucoup de temps à étudier la gestion des dépôts, le développement du noyau, l'infrastructure, les thèmes, ... et avons finalement tout réuni dans l'installateur graphique de CachyOS.
Toutes les fonctionnalités sur lesquelles nous avons travaillé et que nous avons implémentées dans l'installateur visent simplement à offrir aux utilisateurs une expérience entièrement personnalisable.

Les changements les plus enthousiasmants sont que nous utilisons désormais pacstrap pour l'installation en ligne, ce qui fournit un environnement installé complètement propre, et que nous prenons en charge nativement de manière complète le système de fichiers zfs.

Discord limitant la longueur des messages, l'annonce complète est disponible ici :

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Les téléchargements sont disponibles ici :
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
