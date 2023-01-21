---
title: CachyOS GUI Installer Changelog
description: Changelog for the CachyOS GUI Installer
published: 1
date: 2023-01-21T22:56:03.354Z
tags: cachyos, changelog, clamares, gui-installer, linux-cachyos
editor: markdown
dateCreated: 2023-01-21T19:28:01.996Z
---

# 22.05

CachyOS was founded a year ago. After almost one year of development, we are really proud to announce our first Stable Release of GUI Installer.
We spent a lot of time investigating repo management, kernel development, infrastructure, theming, ... and finally put them all into the CachyOS GUI Installer.
All the features we worked on and implemented into the Installer are just trying to offer users a completely customizable experience.

The most exciting changes are that we use now for the online install pacstrap which provide then a complete clear installed environment and we do support a complete native support for the zfs filesystem

Since Discord restrict the length of the messages the full announcement can be found here:

https://forum.cachyos.org/d/34-cachyos-gui-installer-stable-release

Download can be found here:
https://mirror.cachyos.org/ISO/kde/220522/
https://sourceforge.net/projects/cachyos-arch/


 # 22.06

Following known bugs has been fixed:

- Install failed when a generic CPU was used
- KDE did automatically mount zfs paritions which resulted that the auto login into the ISO did not worked anymore

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
- Apply Kernel Optimization slecting (You will see a list of different CPU-Marches and can select with a number yours)
- Disable debug (it lowers the size of the kernel)
- Enable or disable nf cone
- Enable LTO (Full, Thin, No)

# 22.07

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



# 22.09

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

# 22.10

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


# 22.11

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
- copytoram got completly disabled, it breaks the offline installation
- mkinitcpio.conf got updated
- And more ISO fixes

# 22.12

**Features:**

- New GRUB background at the ISO bootloader
- memtest is now included for UEFI Systems
- CachyOS-sddm-theme got added to the KDE Installation
- Automatic version script added when creating the ISO
- Calamares updated to the latest commit
- The mirrors are now ranked with "cachyos-rate-mirros", which ranks our mirrors and the arch ones
- Packages Update: 6.1.1 Kernel, mesa 22.3.1, plasma 5.26.4,...
- The Kofuku Desktop Enviroment got removed
- extra ISO with llvm 15 included to provide support for newer AMD Cards


**Bug-fixes:**

- Calamares got fixed when using GNOME as ISO
- zfshostid does now work proper for the offline and online installation
- Add "kms" hook to the initcpiocfg module to follow archlinux defaults
- And more ISO fixes

# 23.01

**Features:**

- Calamares Slides got reworked and updated
- UKUI Desktop Enviroment got added to the Netinstallation
- Cinnamon Desktop Enviroment got added to the Netinstallation
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
