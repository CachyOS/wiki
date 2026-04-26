---
title: GUI Installer
description: Changelogs of Calamares and the GUI Live ISO
sidebar:
  order: 1
---
26.04
----

**Features:**

* **Installer:**
  * Shelly now replaced Octopi as the GUI package manager
  * A clean snapshot is now created immediately after installation and retained permanently, providing a baseline restore point
  * GRUB `os-prober` is now enabled by default
  * Added MangoWM as Desktop Option with dotfiles
  * Dropped the UKUI desktop
  * AMD GPUs now use a different Plymouth theme, as the amdgpu driver is unable to render the previous theme reliably on laptops with a secondary monitor attached
  * Cleaned up and modernised the GNOME package selection
  * Added option to install `MangoWM` with `DMS` shell
* **CachyOS-Welcome:**
  * Added DNS-over-HTTPS (DoH) support via `blocky`
  * Added custom DNS server support and DHCP automatic indicator/reset
  * DNS servers now display metadata (region, homepage, filtering) and support individual latency testing
  * Added VRAM management toggle `dmemcg-booster` (additionally installs `plasma-foreground-booster` on KDE)
  * Added full keyboard navigation support for accessibility
  * Replaced PNG social icons with crisp, HiDPI-aware SVGs
  * Added `wezterm` to the terminal helper
* **chwd:**
  * Added native USB device detection (via libusb/sysfs) and chassis type detection
  * Added support for fingerprint (`fprint`) sudo integration
  * Added CPU family/model detection to support `intel-lpmd`
  * **Handhelds:** Added exact patterns for Xbox ROG Ally
  * **Network:** Added Marvell AVASTAR 88W8897 Wi-Fi profile (Surface Pro 4)
  * Split NVIDIA profiles for laptops and desktop environments
  * Split and updated profiles for Virtual Machines
* **cachyos-settings:** Switched the default NVMe I/O scheduler from `none` to `kyber`

**Fixes:**

* **Installer:**
  * The partition method is now printed to the debug log
  * Old microcode packages are now removed when reusing an existing boot partition
* **CachyOS-Welcome:**
  * Fixed connectivity checks incorrectly returning true when ping fails
  * Ensured external link icons are visible in dark themes
  * Prevented multiple instances of the welcome app from launching simultaneously
  * Added `StartupWMClass` for improved `.desktop` window matching
* **chwd:**
  * Removed the `kms` hook from `mkinitcpio.conf` on non-portable desktops to fix NVIDIA driver conflicts
  * Made the installed kernel search in NVIDIA profiles more accurate
  * Removed forced Xorg session from the NVIDIA 470xx profiles (fixes compatibility with `plasma-login-manager`)
  * Removed outdated `WaylandEnable=false` for GDM in Virtual Machine profiles
  * Fixed false-positive handheld detections (e.g., specific MSI laptops being mistaken for the MSI Claw)
* **cachyos-settings:**
  * Dropped `S01x` power management due to issues with the NVIDIA 595 driver
  * Disabled `AggressiveVblank` due to VR-related issues with the NVIDIA driver

26.03
----

**Features:**

* **Installer:**
  * Added support to show GIF/WebP videos in the Desktop Selection to showcase the desktops. This is enabled for Plasma, GNOME, Niri and COSMIC
  * Added support for JPEG XL in the Desktop Selection to reduce image sizes
  * Cachy-Update is now enabled by default for the GNOME and KDE installations
  * Improved microcode installation logic — it will now detect the hardware and install the proper microcode instead of installing both and then removing the unneeded one
  * Improved error message when the EFI partition is too small
  * Sorted the Desktop Environment list from easy and accessible setups to more advanced ones like WMs
* **CachyOS-Welcome:**
  * Added a button to easily install and enable "Winboat" for an easy Windows Docker VM
  * Added support for FFMUC DNS server in DNS selection
  * Added Ukrainian translation
* **chwd:** Decreased the initramfs size massively for NVIDIA dGPU configurations
* **linux-cachyos:** Instead of generating a `0001-cachyos-base-all.patch`, a release is now generated in a Linux repository for each release of our patched kernel
* **cachyos-rate-mirrors:** Improved the experience for users in China&Russia massively with a proper check before rating the mirrors
* **cachyos-settings:** Added support to automatically set the wireless regulatory domain based on timezone
* **website:** The website design has been reworked and improved to follow more modern standards
* **GitHub:** Added issue templates to important GitHub repos to improve the quality of bug reports and provide guidance for the user
* **Mirrors:** New mirrors in Russia (jura12, cachy-arch.ru), Sweden (Zyner), and Canada (All Things Linux)

**Fixes:**

* **Installer:**
  * Removed support for bcachefs in the filesystem selection due to the requirement of bcachefs-dkms
  * Fixed encryption when LUKS2 is used for specific devices
  * Fixed enabling the "ly" display manager
* **cachyos-settings:** `cachyos-bugreport.sh` now redacts IP, username, hostname, and MAC address
* **chwd:**
  * Generic handheld profiles and improved support for handheld GPUs
  * fwupd is now enabled for Lenovo handhelds


**Changelog for Handheld Edition:**

* **gamescope-session:** Replaced gamescope-session-plus with gamescope-session-cachyos, which is forked from Valve's gamescope-session
  * Enables firmware updates for Steam Deck and Lenovo Legion Go devices
* **plasma-login-manager:** Replaced SDDM with plasma-login-manager for the login manager
* **bootloaders:** Limine is now selected as default with automatic snapshots. systemd-boot will still be selectable
* **Installer:** Merged Handheld Calamares with desktop edition calamares together
* **ISO:** ISO now uses Wayland instead of X11

26.01
----

**Features:**

* **Installer:**
  * Moved bootloader selection to Calamares; management is now consolidated into a single package.
  * Architecture detection is now performed **before** the base system installation to reduce download size.
  * GRUB now uses LUKS2 for encryption.
  * Pass --needed to pacman to avoid installing packages twice.
  * Use single-level compression on NVMe for Btrfs
  * Removed xorg dependecies on Wayland desktops environments.
* **ISO:**
  * Switched to `plasma-login-manager` for the ISO environment.
  * The ISO now contains both Stable and LTS kernels. The Stable kernel is selected by default.
  * Switched the ISO session from X11 to Wayland.
* **Netinstall:**
  * Plasma installations now use `plasma-login-manager` instead of SDDM.
  * Niri now uses `noctalia-shell` and updated dotfiles.
  * Cleaned up the GNOME installation process.
* **Slides:** Fixed typos in the Calamares slides and added a new slide showcasing the Wiki.
* **Mirrors:** The mirror status page (<https://packages.cachyos.org/mirrors>) now displays the syncing state of CachyOS mirrors.
* **cachyos-settings:** Enabled `EnableAggressiveVblank` for the NVIDIA module. This reduces time spent in the interrupt top half for low-latency display interrupts.
* **chwd:**
  * Installs `nouveau-fw` to enable VA-API support in Nouveau for NVIDIA Kepler-family cards.
  * Added AI-SDK support for several new AMD GPUs.
  * Replaced HHD with `steamos-manager` and `inputplumber`.
* **Proton-CachyOS:**
  * Added FSR4 MLFG (Machine Learning Frame Generation) support; automatically enabled when using `PROTON_FSR4_[RDNA3_]UPGRADE`
  * Added `d7vk` module support. This can be enabled via `PROTON_DXVK_DDRAW=1`
  * Imported DualSense haptic feedback patches
  * Added `WINE_BLOCK_HOSTS` to prevent Wine from connecting to specific domains
  * Automatically enable `ENABLE_HDR_WSI=1` when using `winewayland` on NVIDIA dGPUs
  * Fixed keyboard layout issues when using `winewayland.drv`
  * Removed a long-standing patch that was causing degraded 1% low FPS
  * Patched `protonfixes` to better handle DLSS preset selection and `libxess_dx11.dll` redirection
  * proton-cachyos-slr is now used as default in the “gaming-meta”. The native version will be still supported.


**Fixes:**

* **Limine:** Increased boot partition size to 4192MB to accommodate high requirements from `limine-snapper-sync`.
* **Installer:** 
  * The installer now blocks/prevents proceeding if the EFI partition is too small when using "alongside" or "replace partition" options.
  * Fixed an issue, when selected a desktop and go a step further, then going back again and selecting a different desktop it would result that both are selected.
* **chwd:** Removed the environment variable forcing `libva-nvidia-driver`, as it caused issues on dual-GPU systems.
* **cachyos-hello**: Fixed an issue that cachy-update shows being disabled, while its enabled.
* **Controller**: Fixed several controllers input due updating the input rules to the latest.
* **Framework 16 (Zen5)**: Fixed an issue that the session freeze, when writing into calamares

25.11
----

**Features:**

* **ISO/Installer:** Added Orca and espeak-ng for better accessibility
* **initcpiocfg:** Enabled systemd hook on supported configurations
* **Netinstall:** Hyprland dotfiles have been removed
* **pacstrap:** Install `bcachefs-dkms` if `bcachefs` is selected as the filesystem
* **Calamares:** Added support for plasma-login-manager and cosmic-greeter
* **Cosmic:** Switched from SDDM to cosmic-greeter
* **Fonts:** Improved fonts for Asian users
* **chwd:**
  * Installs `intel-media-sdk` and `vpl-gpu-rt` on supported GPUs
  * Enabled Nouveau NvBoost for Fermi GPUs
  * Dropped support for 390xx legacy NVIDIA driver
  * Added support for Xbox ROG Ally/X
* **cachyos-hello:**
  * Removed internal package installer; opens CachyOS package installer instead
  * Added CLI interface for the GUI functionality
  * Various ISO version check fixes
* **cachyos-settings:** zram-generator: Removed compression for incompressible pages
* **Proton-CachyOS:**
  * Added `dxvk-gplasync` as alternative DXVK. This can be enabled via `PROTON_DXVK_GPLASYNC=1`
  * Added `DISABLE_LAYER_MESA_ANTI_LAG` when using `PROTON_FSR4_UPGRADE`
  * Brought in multiple **Wayland fixes** (fullscreen offset, dead keys, DPI behavior, video output tweaks) and `winewayland.drv` improvements
  * Introduced and tuned **per-game shader cache** behavior and larger shader caches (especially for NVIDIA)
  * Added FSR3 and XeSS upscaler upgrades

**Fixes:**

* **Limine:**
  * Fixed installation of Limine without entry registering on broken UEFI
  * Uses systemd variant of `btrfs-overlayfs` hook
* **Calamares:** Removed `attr2` as an option on XFS mount settings
* **chwd:** Disabled T2 chip's USB Ethernet interface

25.08
----

**Features:**

* **Services:** Added **packages.cachyos.org**, a package search equivalent to Arch Linux’s website, with an option to exclude CachyOS packages.
* **Kernel:** The installer now additionally installs **linux-cachyos-lts** as a secondary/backup kernel after installation. We still recommend using the Stable kernel.
* **ISO:** Switched the live ISO’s kernel from Stable to LTS due to ongoing issues with the Stable kernel, improving boot reliability.
* **Desktop:** Added **Niri** as a desktop option, including a few preconfigured dotfiles.
* **NVIDIA:** Enabled **S0ix** sleep on supported hardware for modern low-power standby.
* **GRUB:** Bootable snapshots are now automatically enabled and set up when the root filesystem uses **Btrfs**.
* **Tweaks:** Integrated **Cachy-Update** into the Welcome app’s Tweaks page. Cachy-Update adds a timer and a system tray indicator to notify users about updates and lets them update with a click.
* **Proton-CachyOS:**
    - Added downloader for DLSS dlls (version **310.3.0**), similar to the FSR4 downloader. Use `PROTON_DLSS_UPGRADE=1` environment variable to enable it.
    - Added `PROTON_DLSS_INDICATOR=1` environment variable to enable DLSS hud.
    - Added downloader for XeSS dlls (version **2.1.0**), similar to the DLSS downloader. Use `PROTON_XESS_UPGRADE=1` environment variable to enable it.
    - Added `PROTON_FSR4_RDNA3_UPGRADE` for RDNA3 GPUs. Does the same thing as `PROTON_FSR4_UPGRADE` but also sets some other necessary variables.
    - Added completer implementations of Nvidia libraries missing from Proton. Should help with enabling options such as PhysX on games they were disabled before. You can also enable them individually using `PROTON_NVIDIA_NVCUDA`, `PROTON_NVIDIA_NVENC`, `PROTON_NVIDIA_NVML` and `PROTON_NVIDIA_NVOPTIX`.
    - Added per-game shader cache, enabled by default, can be disabled with `PROTON_LOCAL_SHADER_CACHE=0`. Shaders will be cached under `<steamlibrary>/shadercache/<appid>` for each game, similarly to when shader pre-caching is enabled. You will get stuttering as the shader cache for each game is rebuilt but the cached shaders won't be evicted due to limited cache size.
    - Added [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) as an optional DXVK replacement for older GPUs that don't properly support Vulkan 1.3. It is using the `async` branch, so it SHOULD NOT to be used with games using anti-cheat or multiplayer games in general. You have been warned. Use `PROTON_DXVK_SAREK=1` to enable.
    - Added `PROTON_FSR3_UPGRADE` to upgrade FSR 3.1 DLLs to newer versions.

**Fixes:**

* **Limine:**
    - Fixed `limine bios-install /dev/sdaX` error when selecting the **/boot** mount point as the boot location on MBR systems.
    - Fixed uninitialized value of the `bootLoader` path, which caused installation failures on MBR systems when the bootloader location wasn’t explicitly selected.
    - Added a warning about using the **bios-grub** flag on the boot partition, which can cause a “Stage 3 file not found” error.
    - Fixed out-of-the-box dual-boot with Windows for BIOS installations.
    - Fixed Btrfs snapshots failing to boot when using **GNOME (GDM)**.
* **Launch Installer:** Added fallback IPs for the online check if pinging **cachyos.org** fails.

25.07
----

**Features:**

- **Shell**: The user shell can now be chosen at installation time between fish, zsh and bash. Fish stays enabled by default.
- **chwd**: Install plasma-x11 for legacy NVIDIA Drivers
- **Netinstall**: Added fwupd to KDE Plasma and Gnome
- **mesa-git**: Added support for AMD Anti Lag
- **firefox**: Introduced an alternative firefox called "firefox-pure", which includes improvement with the userjs profile. Additionally, there has been "cachyos-firefox-settings" added, which can be installed on top of firefox.
- **Proton-CachyOS**:
  - Imported upstream wine-wayland commits
  - Added "PROTON_FSR4_UPGRADE" env variable, which will automatically download the latest FSR4 DLL and then replace it for an automatic upgrade on FSR 3.1 supported games
  - Added many Wayland-related patches from upstream Wine that were released after Wine 10.0.
  - added patches to help with better anticheat integration. Thanks to NelloKudo
  - Added patches for AMD's Anti Lag 2 for vkd3d-proton and wine
  - Updated umu-protonfixes to latest commit

**Fixes:**

- **Keyring**: Improved the handling of the keyring installation to avoid issues and do several retries.
- **systemd-oomd**: Disabled systemd-oomd, since it had problems handling this together with le9 and killed applications way to early

**Changelog for Handheld Edition:**

- **handheld-settings**: Imported several tweaks of SteamOS to the Handheld Edition
- **pipewire**: Set minimum quantum to 256
- **SteamDeck-OLED**: Install galileo-mura for Steam Deck OLED
- **Lenovo Legion Go S**: Added support for the Lenovo Legion Go S

25.05
----

**Features:**

- **ISO**: Added automatic detection during ISO boot to identify the system's NVIDIA GPU and load the appropriate module (e.g., nvidia-open, nvidia), providing better support for 10xx series and older.
- **Plymouth**: Added a new Plymouth animation.
  - Thanks to Eren ([https://github.com/erenyldz89](https://github.com/erenyldz89)) for working on this!
- **Browser**: Cachy-Browser has been deprecated. We now provide Firefox as the default preinstalled browser. A guide to migrate profiles to Firefox (and its forks) can be found here: [https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall**: Added kcalc, filelight, plymouth-kcm, and kio-admin to the KDE installation.
- **mkinitcpio**: Disabled fallback initramfs by default. This will save a significant amount of space.
- **Mirrors**: Added a new 10 Gbps mirror in Bangladesh. Thanks to Limda for hosting this!
- **Proton**:
  - Rebased almost all patches from **Proton CachyOS 9.0**.
  - Enabled the Wayland driver for Steam Linux Runtime builds. Enable with `PROTON_ENABLE_WAYLAND=1`. Thanks to [GloriousEggroll](https://github.com/GloriousEggroll) for making it happen.
  - Added many Wayland-related patches from upstream Wine that were released after Wine 10.0.
  - Fixed various issues with the Wayland driver and Vulkan games. Thanks to [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) for all the hard work.
  - Added a stub implementation for `amdxc64.dll` to enable FSR4. Use `FSR4_UPGRADE=1` to upgrade FSR3.1 games to FSR4. Thanks again to [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty). Instructions: [https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - Added DualSense-related patches for more complete audio device detection functionality for wired sound-based haptics. Some games that relied on that specific behaviour should now have that functionality. Thanks to [ClearlyClaire](https://github.com/ClearlyClaire) for the original patches and [Exotic0015](https://github.com/Exotic0015) for looking into it since **Proton CachyOS 9.0**. Upstream: [https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - Removed the Dragon Age Inquisition patch as it was not working. Please use **Proton CachyOS 9.0** for now with that game.
- **GRUB**: Added a new GRUB theme. Thanks to [diegons490](https://github.com/diegons490/cachyos-grub-theme).

**Fixes:**

- **Mirrors**: Fixed an issue where users from Russia could no longer install. This was mitigated by not using CDN77, which Russia had started to block.
- **kde-settings**: Disabled the Discover icon in the taskbar.
- **ddcutil**: Pushed the ddcutil 2.2.1 pre-release to fix an issue where AMD GPUs were freezing when watching YouTube videos.

**Changelog for Handheld Edition:**

- **os-branch**: Game Mode now correctly shows that CachyOS Linux is being used.
- **audio**: Updated convolver profiles.
- **steamos-manager**: This is used for GPU clock and TDP management, BIOS/dock updates, storage device maintenance, external storage formatting, and battery charge limit for the Steam Deck.
- **steamos-powerbuttond**: This component replaces the standard powerbuttond for a better sleep experience.
- **jupiter-hw-support**: Updated to 20250501.

25.04
----

**Features:**

- **occt**: Added OCCT to the ISO to have a live environment for stress testing
  - Thanks to Marek for providing this idea!

**Fixes:**

- **kernel**: Fixes module crash on Asus laptops
- **limine**: Limine now has mkinitcpio-limine-hook installed and will automatically create bootloader entries

**Changelog for Handheld Edition:**

- **audio**: Added audio profiles for ROG Ally X and Legion Go
- **gamescope**: Replaced gamescope-plus with upstream gamescope

25.03
----

**Features**:

- **Bootloader**: Added support for Limine bootloader
- **Bootloader**: Added support for automatic snapshots for Limine bootloader
- **Samba**: Added "cachyos-samba-settings" package to easily set up a Samba mount
- **NVIDIA**: Re-enabled GSP Firmware for the closed source NVIDIA module
- **Kernel**: Added support for the Asus Armoury driver
- **Secure Boot**: Improved "sbctl-batch-sign" script to sign only wanted files
- **udev**: Reverted using ntfs3 as the default driver for NTFS partitions
  - Info: Using the NTFS3 Kernel driver as default resulted in issues for some users. Therefore, we reverted it again.
- **wine**: Wine and Wine-Staging defaulting now to WoW64 and NTSync
- **scx-manager**: Moved out sched-ext GUI manager from Kernel Manager to its own application
- **Hardware Support**: Added support for RDNA4, RTX 5070 Ti, and 5070.
- **Settings**: Added DLSS Swapper Support - this is a script, which automatically updates and uses the latest dlss version and preset
- **Package Updates**: linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Fixes**:

- **initcpiocfg**: Removed "crc32c-intel" module adding to mkinitcpio - This has been deprecated and now defaults to the "crc32c" module
- **chwd**: T2 MacBook disable offloading the brcmfmac
- **chwd**: Do not install NVIDIA 390.xx driver for laptops

25.02
----

**Features**:

- **Kernel**:
  - Propeller Optimization is now applied to the default **linux-cachyos** kernel for all available architectures.
    - **Note**: In combination with AutoFDO, this can improve performance by around 10%, depending on the workload.
- **NVIDIA**: Added support for the Blackwell Architecture.
- **ISO**: Using the nvidia-open module as the default to provide Blackwell support. Users with GPUs older than Turing should use the first or fallback boot option.
- **Settings**: Enabled tap-to-click for X11 sessions by default.
- **udev**: Use ntfs3 as the default driver for NTFS partitions.
- **game-performance**: Disabled the screensaver while running games.
- **kernel-manager (sched-ext)**: Added support for server mode.
- **kernel**: Added fixes for the AMD preferred core feature.
- **chwd**: Re-added the workaround for RTD3.
- **Package Updates**: linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Fixes**:

- **chwd**: Fixed an issue where hybrid laptops with Intel and NVIDIA hardware could not use their GPU in DaVinci Resolve.
- **glibc**: Added a fix for CVE-2025-0395.
- **kernel-manager**: Attempted to install the prebuilt NVIDIA module, if available for the default Arch kernel.
- **kernel-manager**: Added an extra check to avoid overwriting the value in case a module is not available.

**Changelog for Handheld Edition:**

- **hooks**: Allowed the use of natively compiled Proton again.
- **misc**: Several updates and fixes.

24.12
----

**Features**:

- Kernel:
  - AutoFDO is now applied to the default `linux-cachyos` kernel for all available architectures
    - **Note**: Performance improvements are minimal for now due to current limitations. Merging profiles requires LLVM 19, and Propeller Optimization depends on it. We anticipate LLVM 19 and more optimized profiles to be available by the end of the year, following Arch Linux's adoption of LLVM 19
- chwd: Rusticl is now configured correctly
- chwd: improved error logging during hooks calls
- chwd: fixed VAAPI drivers selection
- cachyos-settings: Added a script to facilitate running applications via Zink
- Sysctl Configuration: Reworked and optimized several settings
- Kernel Manager: Added support for `scx_loader`, enabling native scheduler switching
- Installer: Bluetooth service is now enabled by default
- Netinstall:
  - Added `wireless-regdb` to the installed packages
    - This configures the connection to use appropriate channels and unlocks additional channels, potentially improving internet speed
    - **Note**: A generic region is set by default; customizing it to your region is recommended for optimal performance
- **Package Updates**: NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Bug Fixes**

- Installer: Installation logs no longer spawn debug terminal windows
- Partition Management:
  - Proper `umask` settings ensure `/boot` is inaccessible without sufficient permissions
- Launch Installer: Internet connectivity checks have been fixed

**Changelog Handheld Edition:**

- Updated handheld related packages
- Fixed issue with the power profile handling
- Added support for WiFi 6

24.11
----

**Features:**

- thp-shrinker: Put max_ptes_none value to 80% for zero filled pages. This will reduce the memory usage for when THP always is used, while maintaining the same performance
- NVIDIA: GSP Firmware gets now automatically disabled, if the users switches on their own to the closed driver
- chwd: NVIDIA: nvidia-powerd services gets enabled for laptops, to reach the most available tdp
- proton-cachyos: DLSS Frame Generation is now working. This is also expected to work in the future in the upstream proton
- kernel: AMD Cache Optimizer is now applied. Users with dual x3d CCD's cpus can now switch between having frequency or cache cores preferred
- kernel: amd-pstate: Backported amd-pstate performance fixes for Strix Point
- kernel: Added upstream fixes for the tdp issues on amd rdna2 and rdna3 gpus
- kernel: Added timing fixes for displays with 5120x1440x240 configuration
- kernel: Experimental AutoFDO optimized kernel in the repository under "linux-cachyos-autofdo"
- ISO: Added check, if user running handheld edition and warn then, if they are starting the installation on an unsupported device
- ISO: Added check, if the user is using the latest ISO, if not warn them

**Bug Fixes:**

- refind: partitioning: changed from 3-way partition layout to 2-way
- netinstall: added kdeplasma-addons to the Plasma installation
- calamares: Fixed an issue, while partitioning with a swap partition

**Changelog Handheld Edition:**

- Rog Ally X Support should have been improved

24.10
----

**Features:**

- Package Updates: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Bug Fixes:**

- sddm: Pulled in newer sddm to fix wayland session logins
- ISO: Added xf86-video-amdgpu to fix graphical session loading on some setups
- chwd: Fixed reinstallation of profiles

24.09
----

**Features:**

- Packages: Optimized a bunch of packages with PGO, like LLVM, Clang, svt-av1, and nodejs. This yielded, for example, a 10% faster Clang compiler
- Repository: The repository is now synced and updated more frequently, meaning there will be even less delay. The sync interval has been decreased from every 3 hours to every hour.
- Repository: Starting from 27.09.2024, packages compiled with -fpic will automatically enable -fno-semantic-interposition. This can provide a performance improvement for many packages.
- zlib-ng: Is now used as a replacement for zlib
- sddm: On the KDE Installation, sddm will now default to Wayland as the compositor. # Provide Migration changes in release post
- cachyos-settings: NetworkManager now uses systemd-resolved as the backend, which helps with DNS caching
- cachyos-settings: Use time.google.com as the timesync server to avoid issues with timesync on some setups
- gcc: Added fixes for the tuning of znver5
- gcc: Cherry-picked patches and flags from Clear Linux
- glibc: Added "evex" patches as well as cherry-picks from Clear Linux
- wiki: The Wiki received many new additions and reworks
- chwd: Simplified device handling
- chwd: All profiles are now specifically designed for PCI devices
- chwd: Add --autoconfigure to automatically handle the driver installation
- Package Updates: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Bug Fixes:**

- Launch-Installer: Added fixes to sync the hardware clock before starting the installation
- calamares: Added fix for unmounting the filesystem after installation
- keyring: Clean up the keyring and recreate it before starting installation; this fixes rare keyring issues
- sysctl: Core dumps have been enabled again
- chwd: Removed `libva-nvidia-driver` from the PRIME profile to prevent potential conflicts and improve compatibility with software like Spectacle
- cachyos-settings: Added workaround for GNOME Wayland crashes
- cachyos-fish/zsh-config: Dropped wayland specific quirks

**Changelog for Handheld Edition:**

- Ally/Ally X: HHD got replaced with inputplumber, since hhd does not use the kernel driver for it correctly, which results in issues.
- Handheld related packages updated

24.08
----

**Features:**

- chwd: NVIDIA now uses the open module as default for supported cards
- Desktop: Added Cosmic Desktop Environment to the installation options
- NVIDIA: Latest 560 Beta driver is now the default; egl-wayland patched to fix crashes in Firefox and other applications
- mirrors: CDN77 sponsored CachyOS with Object Storage featuring a worldwide cache, significantly improving connection speeds for users
- mirrors: CachyOS now provides its own Arch Linux mirror to avoid syncing issues, set as default during installation along with fallback mirrors
- SecureBoot: Introduced script and tutorial in the Wiki for easy Secure Boot support
- cachy-chroot: Added auto-mount via fstab for simplified chrooting
- cachy-chroot: Implemented support for LUKS Encryption
- kernel-manager: Added support for setting sched-ext flags in the sched-ext configuration
- kernel-manager: Introduced option to build nvidia-open
- kernel-manager: Added option to remember last used options in configure page
- Package Updates: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Bug Fixes:**

- chwd: Improved PRIME profile detection based on device name
- chwd: Removed RTD3 workaround due to issues on some setups
- cachyos-rate-mirrors: Disabled mirror ranking when running on Live ISO
- cachy-chroot: Fixes a crash when a partition didn't have a valid fstype or uuid (eg Microsoft Recovery Partition)
- calamares: Refactored keyring initialization
- kernel-manager: Fixed support for building custom pkgbase with LTO kernels and modules enabled
- kernel-manager: Fixed password prompt delay
- ISO: Replaced radeon.modeset=1 with amdgpu.modeset=1 for modern GPUs
- game-performance: Prevented failure when profile is unavailable

**Changelog for Handheld Edition:**

- device support: Added support for Ally X, thanks to Luke Jones
- libei: Implemented support for libei, replacing libextest
- packagekit: Blocked packagekit installation to prevent issues with system updates via Discover
- hook: Added pacman-hook to conflict with natively compiled Proton versions, avoiding potential issues
- Updated jupiter-fan-control, steamdeck-dsp, and Steam Deck firmware

24.07
----

**Features:**

- Repository: Introduce Zen 4 optimized repository, this will be used for Zen4 and Zen5 CPU's
- ISO: Add automatic architecture check for Zen4/Zen5 repository
- chwd: Added GC support for AMD GPU's, this helps for detecting official ROCm supported GPUs
- chwd: Use libva-nvidia-driver on supported cards
- ksmctl: Introduce tool to enable/disable KSM: ksmctl --enable
- kernel: For the "linux-cachyos" kernel is now a "linux-cachyos-dbg" package available, this contains an unstripped vmlinux for debugging purposes
- kernel: amd cpb boost is now available and the power-profiles-daemon is patched, if the "powersave" profile is set, it will disable the boost on amd cpus
- kernel: Added power saving patch for AMD SoCs for video playback
- kernel-manager: Added support for managing sched-ext schedulers and getting information via GUI
- steam/proton: There is now a "game-performance" script, which can be added to steam's launch options
- power-profiles: On AMD Pstate supported CPUs the lowest Linear frequency is now set higher, this can improve latency and 1% lows
- kwin: Added back-port for tearing, this has been tested. On NVIDIA, it only works on native wayland applications
- netinstall: Cutefish has been dropped as installable Desktop Environment
- Mirrors: Added Austria and China Mirror, the China Mirror is hosted by the TUNA University. This should help a lot of users from China
- Package Updates: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Bug Fixes:**

- ISO: Set copytoram to auto instead of yes
- ISO: Fixed Sleep on Live ISO for Laptops
- Launch Installer: Install the latest archlinux-keyring, before the installation starts to avoid issues, when fetching the archlinux-keyring in the chroot
- Mirrors Ranking: Rank only Tier 1 Mirror's at installation time
- pacman.conf: Remove not used pacman repository
- cachy-chroot: Do not show .snapshot subvolumes
- Calamares: Do not use "Preservefiles" module, since user a reporting issues with it.

**Changelog for Handheld Edition:**

- Added configuration file to apply different scaling, '/home/$USER/.config/deckscale
- Make GameMode switching more robust
- Updated Wifi/Bluetooth Firmware for Steam Deck
- Implemented Auto Mount for GameMode
- Added gamescope-session quirks for Wine CPU Topology, HDR, and Backlight
- Fixed Refresh Rate Selection
- Updated jupiter-hw-support, steamdeck-dsp, jupiter-fan-control, gamescope-session-git

24.06
----

**Features:**

- chwd: Introduce handheld hardware detection
- chwd: Introduce T2 MacBook support
- chwd: Add network driver detection
- Installation: Added MacBook T2 support
- ISO: Add cachy-chroot. This is a script that helps the user to chroot into the system.
- ISO: Switch to Microcode Hooks; this requires using the latest Ventoy release (1.0.98)
- ISO: Enable copytoram; this no longer needs to be disabled because we don't provide the offline installation anymore
- filesystem: BTRFS is now the default selected file system
- netinstall: Use ufw instead of firewalld
- Calamares: Update Branding Slides
- Slides: Updated for latest changes
- Package Updates: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Bug Fixes:**

- Calamares: umount: Enable emergency again
- Qtile: Multimedia Controls are now working correctly
- NVIDIA: Enable required services and options for working sleep on Wayland
- netinstall: Remove b43-fwcutter from installation
- netinstall: Replace hyprland-git with hyprland
- netinstall: Drop linux-cachyos-lts from selection to avoid issues with missing modules
- Calamares: Shellprocess: Move mirror ranking before installing keyring

**Changelog from Experimental Handheld Release:**

- Default to KDE Vapor Theme (SteamOS Theme)
- Default file system: BTRFS
- Default kernel: linux-cachyos-deckify
- SDDM now uses Wayland
- Environment Flag for HHD to reduce latency
- Added Kernel Arguments to improve Game Mode Switching behavior
- The username can now be edited
- Hardware Detection configures and installs required packages depending on the device used
- Mallit Keyboard now uses Dark Mode
- Valve's Powerbuttond for proper sleeping
- Shortcuts can now be added to Steam
- Updated scx-scheds to latest git commit, providing the latest enhancements for the LAVD Scheduler
- Added automount to cachyos-handheld
- CachyOS can now perform Steam Deck BIOS updates on the Steam Deck

24.05
----

**Features:**

- Filesystems: Introduce Bcachefs as a filesystem option
- pacstrap: Add detection if Bcachefs is used and install corresponding Bcachefs-tools
- CachyOS-AI-SDK: Introduce new install option to provide a OOB NVIDIA SDK Setup
- CachyOS-Deckify: Provide variant for Handhelds (experimental), see [here](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) for more details
- BTRFS: Automatic Snapper for snapshots, can be installed from within the CachyOS hello app.
- ISO: Drop Offline Installer
- Package Updates: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Bug-Fixes:**

- settings.conf: Move hardware detection before netinstall
- pacstrap: Use btrfs-assistant instead of btrfs-assistant-git
- plymouth: remove plymouth hook on zfs + encryption
- ISO: Add various config files for KDE, to avoid getting screen locking during installation
- services-systemd: Properly enable fstrim.timer
- umount: Disable emergency to avoid issues with the zfs installation
- shellprocess: Cleanup leftovers from the offline installation

24.04
----

**Features:**

- Plymouth: Use plymouth to provide a themed boot animation
- ISO: Switch back to X11 due to issues when setting the keyboard layout in calamares
- rEFInd: New partitioning layout (separate /boot and /boot/efi)
- netinstall: KDE: Install xwaylandvideobridge by default
- netinstall: Use lightdm instead of ly for various Desktop Environments, due to a bug in ly
- systemd-boot: Use @saved for systemd-boot to allow it to remember the previously selected boot entry
- cachyos-keyring: Refactor cachyos-keyring package and provide a cachyos-trusted keyring
- ISO: Use ZSTD 19 Compression for the mkinitcpio image of the ISO
- Package Updates: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 and cachyos-settings 39-2

**Bug-Fixes:**

- Autologin: Fixed the autologin option when used together with sddm
- xz: Provide a patched xz package
- libarchive: Mitigate commit from malicious xz actor
- cachyos-settings: udev-rule: don't set watermark_scale_factor to 125, since it significantly increases RAM usage
- calamares: pacman-keyring: Use simpler method to integrate the keyring into the installation

24.03.1
----

**Features:**

- netinstall: Remove extra kernels in the netinstall selection to avoid confusion by users. Other custom kernels can be installed via Kernel Manager
- Kernel Manager: NVIDIA Modules are automatically installed when detected, Rebased for QT6, Fixed custom names when using LTO Option
- Package Installer: Rebased on QT6, updated for pacman 6.1
- Package Updates: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Bug-Fixes:**

- NVIDIA: patched nvidia module to take the ownership of nvidia.drm.modeset earlier to avoid issues on nvidia graphics
- Refind: Don't install the lts kernel to avoid issues
- shellprocess: Remove the liveusers directory completely

24.03
----

**Features:**

- ISO: Plasma 6 is now shipped in the ISO and uses Wayland as default, GNOME ISO got dropped to avoid confusion about netinstall
- Calamares: Rebased for QT6
- refind: Add f2fs and zfs as option including luks2 encryption
- mirrors: We provide now 2 global CDNs. One hosted by Cloudflare R2 and one hosted by Digital Ocean
- mirrorlist: Fetch the online installer directly from cdn to provide a faster delivery
- initcpiocfg: Use the new microcode hook for early loading the ucode
- bootloader: Dont load the microcode with the bootloader anymore
- Package Updates: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Bug-Fixes:**

- pacstrap: Do not install config packages to provide the user a more clean selection of the installation
- shellprocess_pacman: Also copy the ranked cachyos-v4-mirrorlists to the target

24.02
-----

**Features:**

- refind: Change layout from /boot/efi to /boot to provide more options of filesystems and encryption
- Live-ISO: Cleanup and Sync the Live-ISO
- Launch Installer: Add recommendation for the online installation
- shell-configs: Add option to disable fastfetch when starting the terminal and add an "update" alias
- netinstall: Add phonon-qt5-vlc to kde
- Package Updates: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Features:**

- x86-64-v4: Autodetection and enabling the repository at installation
- linux-cachyos: the sched-ext scheduler framework is now provided in the default kernel
- xwayland: Provide explicit sync patches as default
- Package Updates: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Bug Fixes:**

- chwd: For Ada Lovelace Nvidia cards the nvidia modules get directly packed into the initramfs to avoid issues with the early kms

23.12
-----

**Bug-fixes:**

- zfs: Add compatibility=grub to the pool options to ensure the compatibility
- grub/xfs: Add a patch to grub to have compatibility with the new xfs bigtime default
- netinstall: xdg-desktop-portal-hyprland instead of xdg-desktop-portal-hyprland-git

23.11
-----

**Features:**

- nvidia: Use nvidia module instead of dkms
- Calamares synced with upstream
- Package updates: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Bug-fixes:**

- nvidia-hook: Added nvidia-hook back to avoid issues at installation time with the new module
- netinstall: Packages got renamed due the recent changes at the KF5 packaging
- netinstall: xdg-desktop-portal-gnome got added to the GNOME Installation

23.09
-----

**Features:**

- systemd-boot: Default to luks2
- netinstall: Provide a own category for CachyOS Packages
- Calamares synced with upstream
- Package updates: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Bug-fixes:**

- shellprocess_sdboot: Avoid using "sudo", when generating the boot entries at the installation process

23.08
-----

**Features:**

- Calamares synced with upstream
- Package updates: linux-cachyos 6.4.10, nvidia-utils 535.98

**Bug-fixes:**

- Keyring got updated and works now correctly

23.07
-----

**Features:**

- CachyOS-Settings includes now "bpftune", which automatically tweaks the network settings depending on the usage
- CachyOS-Qtile-Settings: Quality of Life changes, better icons, ...
- Package updates: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Bug-fixes:**

- rate-mirrors got fixed
- chwd (Hardware Detection) got multiple fixes
- fixed installation of nonfree drivers for hybrid setup in the installer
- fixed Calamares freezes, which happened in some rare configurations, mainly VM
- Slides: Slide 6 typo fix

23.06
-----

**Bug-fixes:**

- Offline Installation: Fix calamares

23.05
-----

**Features:**

- CachyOS Git Migration layout is now reflected in the installation
- chwd (mhwd) got multiple fixes
- Pacman: We added a feature, which makes it possible to provide a message to our users before updating
- Calamares got synced with upstream
- Package updates: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Bug-fixes:**

- netinstall: minimal fixes due package changes
- Slides: Slide 6 got updated to reflect the latest changes

23.04
-----

**Features:**

- Introduce the Qtile desktop environment
- Reworked mhwd: Rust rewrite; Simplified profiles for GPUs and network cards; Removed bunch of ancient code
- Package updates: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Bug-fixes:**

- f2fs: Remove "atgc" mount options since it has issues with systemd

23.03.1
-------

**Features:**

- Package updates: linux-cachyos 6.2.7, cachy-browser 111.0

**Bug-fixes:**

- Calamares got fixed with the lightdm displaymanager due faulty calamares upstream commits
- Offline installation keyring issue got fixed
- Refind: Use linux-cachyos-lts as default. Current 6.2 seems not to work well together with refind

23.03
-----

**New Features:**

- Added the refind bootloader
- Automatic Nvidia driver installation using MHWD
- Encryption support for ZFS installation
- Added Hyprland to netinstallation
- CachyOS-KDE-Settings now uses the KDE default theme, but the CachyOS Themes are still preinstalled and available for use
- Package updates: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Fully reworked and improved the bootloader calamares module
- The ISO gets now signed with a GPG key
- MHWD got improved and updated
- Synced Calamares with upstream

**Bug-fixes:**

- The "replace partition" option now offers a filesystem selection
- Fixed a typo in slide 3
- nouveau got fixed and does now proper load the module
- MHWD: Use modesetting for INTEL/ATI and Nouveau
- Removed the zfs hook from mkinitcpio on the live iso, which caused issues when booting
- You can download the update from our mirrors on SourceForge.

23.02
-----

**New Features:**

- The cachyos-community-v3 repo has been added
- Budgie, Mate, and LXDE desktop environments have been added to the Netinstallation
- Bluetooth.service is now enabled by default
- F2FS and grub are enabled and working again
- Package Updates: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Bug-fixes:**

- Rate-mirrors now fall back to unranked mirrors if it fails to rate them
- cachyos-rate-mirrors has a longer fetch-mirrors-timeout
- Github has been added to the hosts to avoid mirrorlist issues
- Boot entries for BIOS have been updated in syslinux

23.01
-----

**Features:**

- Calamares Slides got reworked and updated
- UKUI Desktop Environment got added to the Netinstallation
- Cinnamon Desktop Environment got added to the Netinstallation
- Cmdline: zswap is now disabled as default because CachyOS provides zram as default
- Calamares updated to the latest commit
- LLVM 15 is now shipped as default
- Package Updates: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI Installer got updated

**Bug-fixes:**

- remove-ucode shellprocess does also run now at the offline installation
- pamac got removed from the netinstall
- The ranked cachyos mirrors gets now correctly copied to the install target
- power-profile-daemon don't gets enabled anymore as default

22.12
-----

**Features:**

- New GRUB background at the ISO bootloader
- memtest is now included for UEFI Systems
- CachyOS-sddm-theme got added to the KDE Installation
- Automatic version script added when creating the ISO
- Calamares updated to the latest commit
- The mirrors are now ranked with "cachyos-rate-mirros", which ranks our mirrors and the arch ones
- Packages Update: 6.1.1 Kernel, mesa 22.3.1, plasma 5.26.4,...
- The Kofuku Desktop Environment got removed
- extra ISO with llvm 15 included to provide support for newer AMD Cards

**Bug-fixes:**

- Calamares got fixed when using GNOME as ISO
- zfshostid does now work proper for the offline and online installation
- Add "kms" hook to the initcpiocfg module to follow archlinux defaults
- And more ISO fixes

22.11
-----

**Features:**

- Calamares and its config are shipped in one package
- Complete Cleanup of the packages in the netinstall
- Add a module which automatically removes the not needed ucode
- required RAM decreased to 2.5GB
- Packages which are required for btrfs, are now only installed for btrfs
- Calamares updated to the latest commit
- The ISO Bootloader has now a background
- Common package upgrades (mesa, kernel, ...)
- Replace systemd-network with networkmanager

**Bug-fixes:**

- qemu-quest-agent.service got removed from the ISO
- copytoram got completely disabled, it breaks the offline installation
- mkinitcpio.conf got updated
- And more ISO fixes

22.10
-----

**Features:**

- Pacman uses now Architecture=auto for x86-64-v3 installation, since we added a patch that pacman does autodetect x86-64-v3
- Pacman does show now, from which repo a package was installed
- Bootloader selection auto detect if EFI is present, if not it will default to grub
- Swap choice has been disabled now as default, since zram gets automatically dynamically generated
- Calamares updated to the latest commit
- Minimum RAM requirement has been set to 4GB
- cachyos-grub-theme got removed

**Bug-fixes:**

- SSD and hdd fstab detection has been disabled until there is a upstream fix
- double BTRFS subvolume has been fixed
- Added missing microcode to the ISO grub bootloader
- Added a fallback bootmode, which does not set any modeset (nomodeset)
- And more ISO fixes

22.09
-----

**Features:**

- Calamares is now on the latest 3.3 branch. Its brings bugfixes and new features to calamares
- TUI-Installer is now included in the GUI ISO, you can use it with "cachyos-installer"
- Calamares does now auto detect, if the target filesystem is a ssd or hdd and adjust to it the fstab options
- Nvidia for latest gpu's (starting at 9xx) has now a own boot entry, to avoid issues with nouveau
- fstab and zfs mount options got updated
- FireFox won't be installed as default anymore since cachy-browser is installed as default

**Bug-fixes:**

- cachyos-gaming-meta has been removed from the netinstall module to avoid issues at the installation process
- netinstall packages has been updated and got some fixes
- OpenBox installation has been fixed
- usual translation fixes

22.07
-----

**Features:**

- Boot-loader selection: User can now choose on the online installation between grub and systemd-boot
- At online installation will now always the newest calamares installed, which helps to do bug fixes on the "air"
- Calamares has now a mhwd module which automatically installs the needed drivers (free drivers)
- Calamares has new picture slides at the installation
- fstab and zfs mount options got updated
- HiDPI support

**Bug-fixes:**

- The locales bug in calamares got fixed
- F2FS has been removed for the grub boot loader since it is currently not working (calamares issue), it can be still with systemd-boot used
- Calamares shows now the correct default filesystem
- Gnome ISO got fixed
- Missing packages at the live ISO has been added for the offline installation
- btrfs swap luksencryption got fixed
- usual translation fixes

22.06
-----

Following known bugs has been fixed:

- Install failed when a generic CPU was used
- KDE did automatically mount zfs partitions which resulted that the auto login into the ISO did not worked anymore

**Improvements:**

- The firewall from the server has been corrected, cloudflare did blocked users as "bots", which resulted then into a error at installing
- Added theming support for Gnome, XFCE, OpenBox
- Updated our wiki

**_CachyOS - Kernel - Manager_**
Also we are excited to announce our CachyOS-Kernel-Manager.
Their you have the possibility to install the kernel from the repo and also configure with a GUI your own kernel build which makes is very easy to customize it to his own suits.

Following options you can select for a kernel compile:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA disabled or enabled
- KBUILD CFLAGS (-O3 or -O2)
- Set performance governor as default
- Enable BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, perodic, full)
- disable MQ-Deadline I/O Scheduler
- disable Kyber I/O Scheduler
- Enable or disable MG-LRU
- Enable or disable DAMON
- Enable or disable Speculative page fault
- Enable or disable LRNG (Linux Random Number Generator)
- Apply Kernel automatic Optimization (Does automatically detect your CPU March)
- Apply Kernel Optimization selecting (You will see a list of different CPU-Marches and can select with a number yours)
- Disable debug (it lowers the size of the kernel)
- Enable or disable nf cone
- Enable LTO (Full, Thin, No)

22.05
-----

CachyOS was founded a year ago. After almost one year of development, we are really proud to announce our first Stable Release of GUI Installer.
We spent a lot of time investigating repo management, kernel development, infrastructure, theming, ... and finally put them all into the CachyOS GUI Installer.
All the features we worked on and implemented into the Installer are just trying to offer users a completely customizable experience.

The most exciting changes are that we use now for the online install pacstrap which provide then a complete clear installed environment and we do support a complete native support for the zfs filesystem

Since Discord restrict the length of the messages the full announcement can be found here:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Download can be found here:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
