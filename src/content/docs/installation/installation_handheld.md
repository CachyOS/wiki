---
title: Handheld Edition Installation
description: How to install CachyOS on Handheld Devices
---

CachyOS does provide an Edition for handheld devices, like the Steam Deck, Rog Ally and Legion Go.
This Edition provides a SteamOS like experience with Game Mode Switching, Gaming Applications preinstalled and so on.

The Handheld Edition does utilize the LAVD Scheduler as default, which is an optimized scheduler for handheld devices.
This will provide better frametimes for Gaming.

The Handheld Edition does use as default the systemd-boot Bootloader and there is no selection available, like it is on the default CachyOS Edition.
This is intended to simplify the process.

## Installation on Root

1. Download the latest Handheld ISO from the website/forum
2. Flash the ISO, see https://wiki.cachyos.org/installation/installation_prepare/
3. Boot into the ISO
4. Click the Launch Installer Button
5. Calamares will open now and follow the Steps in Calamares
6. At the partition step, please use the Erase Disk Option. When coming from other Distributions, which uses a different partition layout the replace partition option can be problematic
7. Install the System

After the Installation is completed, you need to reboot the device. Calamares does give for this a prompt.

The first boot can take a bit of time, since Steam is getting downloaded and started.
This process can take up to 2 minutes.


## Installation with Dual Boot

1. Download the latest Handheld ISO from the website/forum
2. Flash the ISO, see https://wiki.cachyos.org/installation/installation_prepare/
3. Boot into the ISO
4. Click the Launch Installer Button
5. Calamares will open now and follow the Steps in Calamares
6. At the partition step you need to select manual partition and create following partition:
2GB /boot
XGB /
7. Proceed with the Steps and install the system

After the Installation is completed, you need to reboot the device. Calamares does give for this a prompt.

The first boot can take a bit of time, since Steam is getting downloaded and started.
This process can take up to 2 minutes.

## Installation with Secure Boot Support

ToDo
