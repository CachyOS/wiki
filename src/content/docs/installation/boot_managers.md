---
title: Offered Boot Managers
description: Description and recommendations for the currently offered boot managers
---

To offer the best experience across a range of devices, CachyOS currently offers the following boot managers: systemd-boot, rEFInd and GRUB.
This wiki article will describe the feature set of each boot manager and also includes our recommendations for when choosing them. For
configuration, please see [Boot Manager Configuration](/configuration/boot_manager_configuration).

## systemd-boot

Part of systemd family, systemd-boot was created to be as simple as possible, therefore it only has support for UEFI based systems. This simple yet efficient design ensures it is reliable and fast. However this comes at the cost of advanced features supported by other boot managers.

### Pros
- Very simple configuration.
- Boot entries are separated into multiple files making it easier to manage.

### Cons
 - Does not support BIOS systems.
 - Very barebones design and lacks any kind of theming or customization.
 - Config is not auto-generated unless configured to do so. CachyOS includes systemd-boot manager to offer auto-generated configuration.
 - Only able to read boot images on EFI supported filesystems (FAT, FAT16, FAT32).
 - Inability to find boot images on partitions other than its own.
 - Does not properly support Btrfs snapshot rollbacks due to requirement to store kernel images on the boot partition rather than the root filesystem.

### Recommendation

Systemd-boot is the recommended and default boot manager for CachyOS. Choose this one if unsure.

## rEFInd

A fork of rEFIt, rEFInd was primarily made to make it easier for MacOS users to multi-boot. However rEFInd has evolved into being hardware agnostic making it a great choice for multi-booting on any system. The main draw of rEFInd is its ability to scan all storage devices at boot and correspondingly display entries for each OS/Kernel found.

### Pros

- Autodetection of all operating systems and kernels on storage devices.
- Little to no configuration required due to aforementioned auto-detection.
- Much more graphical UI reminiscent of the MacOS Boot selector.
- Great theming support
- Optional touch screen support
- Able to read boot images from EFI filesystems (FAT,FAT16,FAT32) as well as EXT4 and BTRFS. Support for other file systems can be added through installation of EFI drivers from the ``efifs`` package.

### Cons

- Does not support BIOS systems.

### Recommendation

rEFInd is the recommended boot manager for booting with multiple operating systems.

## GRUB
GRUB is the oldest of the available boot managers and consequently the only one that supports BIOS booting. It has a very large feature set, works on almost every machine and is the most commonly used Linux boot manager.
The following is a list of its main pros and cons.

### Pros
- Able to read boot images from almost all available Linux filesystems.
- Widely used and very easy to find information online.
- Able to decrypt encrypted boot partitions.
- The only boot loader offered allowing it to boot BIOS machines.
- Looks dated. However has great theme support to compensate.

### Cons
- Bloated due to needing to support much older hardware and needing lots of filesystem drivers.
- Noticeably slower compared to systemd-boot and rEFInd.

### Recommendation
GRUB is the only available boot loader that supports BIOS booting. It is also the only boot manager that supports boot partition encryption (Different from disk encryption).


## TL:DR
Choose GRUB if the used machine is BIOS only, pick rEFInd if planning on having multiple operating systems on the machine (Especially Windows), otherwise go with systemd-boot.
