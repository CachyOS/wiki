---
title: Accélération matérielle pour les navigateurs basés sur Chromium
description: Configurez l'accélération matérielle pour le décodage/encodage vidéo dans les navigateurs basés sur Chromium sur CachyOS. Inclut la configuration pour les GPU AMD et un modèle pour d'autres GPU/navigateurs.
---

# Accélération matérielle pour les navigateurs basés sur Chromium

Ce guide explique comment activer l'accélération matérielle dans les navigateurs basés sur Chromium sur CachyOS. Cela délègue les tâches vidéo/graphiques à votre GPU, améliorant ainsi les performances.

## Prérequis

*   **Navigateur basé sur Chromium :** (par ex., Chrome, Brave, Ungoogled Chromium, Edge)
*   **Pilotes/API GPU :** Pilotes Mesa (AMD/Intel) ou NVIDIA à jour, avec Vulkan/VA-API/VDPAU configurés.
*   **`amdgpu_top` (pour les utilisateurs AMD) :** Installez `amdgpu_top` depuis le dépôt via le gestionnaire de paquets si vous souhaitez surveiller l'activité du GPU AMD depuis le terminal.

## Contribution

Ce guide est extensible. Si vous disposez d'une configuration d'accélération matérielle fonctionnelle pour un GPU et un navigateur basé sur Chromium spécifiques, contribuez en ajoutant une nouvelle section sous « Configurations GPU et Navigateur ». Incluez :

*   **Nom du navigateur**
*   **Modèle du GPU**
*   **Indicateurs (Flags) :** Le contenu de `~/.config/[browser]-flags.conf`.
*   **Chemin du fichier :** Le chemin complet vers le fichier des indicateurs.
*   **Notes (Facultatif) :** Pilotes, paquets ou spécificités de configuration clés.

## Étapes de configuration

1.  **Identifier le fichier des indicateurs :** Localisez le chemin du fichier des indicateurs de votre navigateur dans « Configurations GPU et Navigateur ».
2.  **Modifier le fichier des indicateurs :** Ouvrez/créez le fichier en utilisant `nano` (ou votre éditeur de texte préféré comme `micro`, `vim`).
    ```bash
    nano [CHEMIN_VERS_LE_FICHIER_DES_INDICATEURS_DE_VOTRE_NAVIGATEUR]
    # Exemple : nano ~/.config/chrome-flags.conf
    ```
3.  **Ajouter les indicateurs :** Collez les indicateurs pertinents pour votre GPU/navigateur dans le fichier.
4.  **Enregistrer et fermer.**
5.  **Redémarrer le navigateur :** Fermez toutes les instances du navigateur et relancez-le.
6.  **Vérifier :** Rendez-vous sur `chrome://gpu` (ou `brave://gpu`, `edge://gpu`, etc.). Confirmez le statut « Hardware accelerated » sous « Video Acceleration Information » et « Graphics Feature Status ».

## Astuces de vérification

Pour vérifier de manière définitive si l'accélération matérielle est active pendant la lecture vidéo, utilisez ces méthodes :

### 1. Vérifier l'utilisation du GPU AMD (`amdgpu_top`)

Si vous avez un GPU AMD et que `amdgpu_top` est installé, ouvrez un terminal et exécutez-le :

```bash
amdgpu_top
````

Pendant qu'une vidéo est en cours de lecture dans votre navigateur (par ex., sur YouTube), observez la section `media` dans `amdgpu_top`. Vous devriez y voir une certaine utilisation, indiquant que le moteur multimédia de votre GPU est actif. Si elle reste à 0 % pendant la lecture vidéo, l'accélération matérielle pour le décodage n'est peut-être pas totalement engagée.

### 2. Vérifier les outils de développement du navigateur (Décodeur vidéo)

Cette méthode fournit une confirmation directe depuis le navigateur lui-même :

1.  Ouvrez votre navigateur basé sur Chromium.
2.  Commencez à lire une vidéo (par ex., sur YouTube ou un fichier local).
3.  Ouvrez les outils de développement : Appuyez sur `F12` ou `Ctrl+Maj+I`.
4.  Allez à l'onglet **Media**. Si vous ne le voyez pas, cliquez sur les trois points (`...`) ou `>>` (Plus d'onglets) dans la barre d'outils des outils de développement, puis sélectionnez `Media`.
5.  Dans la section « Players » sur la gauche, cliquez sur l'entrée correspondant à votre vidéo.
6.  Dans le panneau principal, faites défiler jusqu'à la section **Video Decoder**.
7.  Recherchez l'étiquette `Hardware decoder`. Elle devrait être à `true`. Si elle indique `false` ou affiche un nom de décodeur logiciel (par ex., `FFmpegVideoDecoder`, `VpxVideoDecoder`, `Dav1dVideoDecoder`), l'accélération matérielle n'est pas active pour cette vidéo.

## Configurations GPU et Navigateur

### AMD Radeon RX 6900 XT (Google Chrome)

- **Navigateur :** Google Chrome
- **GPU :** AMD Radeon RX 6900 XT
- **Fichier des indicateurs :** `~/.config/chrome-flags.conf`

```bash
--use-gl=angle
--use-angle=vulkan
--enable-features=Vulkan,VulkanFromANGLE,DefaultANGLEVulkan,AcceleratedVideoDecodeLinuxZeroCopyGL,AcceleratedVideoEncoder,VaapiIgnoreDriverChecks,UseMultiPlaneFormatForHardwareVideo
--ozone-platform-hint=x11
```

**Notes :** Utilise Vulkan (via ANGLE) et VA-API. `--ozone-platform-hint=x11` peut être utile même sur Wayland pour certains chemins d'accélération.

---

### Modèle pour contribuer

### [Votre Navigateur] - [Votre Modèle de GPU] (Contribution de [Votre Nom/Pseudo])

- **Navigateur :** [par ex., Brave, Ungoogled Chromium, Microsoft Edge, Vivaldi, Opera, Chromium]
- **GPU :** [par ex., NVIDIA GeForce RTX 3080, Intel Iris Xe]
- **Chemin du fichier des indicateurs :** (Crucial, varie selon le navigateur !)
    - **Chemins `.conf` courants :**
        - **Chromium :** `~/.config/chromium-flags.conf`
        - **Brave Browser :** `~/.config/brave-browser-flags.conf`
        - **Ungoogled Chromium :** `~/.config/ungoogled-chromium-flags.conf`
    - **Modification du fichier `.desktop` :** Certains navigateurs (Brave, Edge, Vivaldi, Opera) peuvent nécessiter de modifier la ligne `Exec=` dans leur fichier `.desktop` (copiez-le d'abord de `/usr/share/applications/` vers `~/.local/share/applications/`).

**Contenu des indicateurs (pour le fichier `.conf` ou la ligne `Exec=`) :**

```bash
# Collez vos indicateurs ici.
# Pour les fichiers .desktop, les indicateurs sont séparés par des espaces après l'exécutable.
```

**Notes (Facultatif) :**

- Pilotes requis (par ex., `nvidia-dkms`, `intel-media-driver`).
- Considérations de configuration spécifiques ou instructions de modification du fichier `.desktop`.
