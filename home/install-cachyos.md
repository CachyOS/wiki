---
title: How to install CachyOS
description: CachyOS Installation via GUI/CLI Installer
published: 1
date: 2022-11-17T19:24:05.237Z
tags: cachyos, calamares, cli-installer, gui-installer, install-cachyos
editor: markdown
dateCreated: 2022-11-17T13:07:22.546Z
---

# How to install CachyOS

## Requirements
### minimum system requirements
- Three gigabyte (GB) of memory
- Thirty gigabytes (GB) of hard disk space
- A one gigahertz (Ghz) processor
- A high definition (HD) graphics card and monitor
- A broadband internet connection

### Recommended system requirements

- Four gigabyte (GB) of memory
- Fifthy gigabytes (GB) of hard disk space
- a x86-64-v3 supported processor, to get the performance improvement of the cachyos-v3 repos
- 50 mbits or better internet connection for the online installation

# GUI Installer

## Choosing between the bootloaders
We provide currently two different bootloaders for the online installation, you will be asked for which one when clicking the `Launch Installer` button in CachyOS Hello.
We suggest to use systemd-boot, since it is quite simple, brings a faster boot time then grub.
Boot entries for different kernels are automatically generated at systemd boot and grub.

Systemd-boot can be only used for systems which have UEFI support.
GRUB does support MBR and UEFI.

## Choosing between filesystems
It can between five different filesystems choosed, following are available:

- xfs
- ext4
- btrfs
- f2fs
- zfs

1. XFS is a high-performance journaling file system created by Silicon Graphics, Inc. XFS is particularly proficient at parallel IO due to its allocation group based design. This enables extreme scalability of IO threads, filesystem bandwidth, file and filesystem size when spanning multiple storage devices.
2. Ext4 is the evolution of the most used Linux filesystem, Ext3. In many ways, Ext4 is a deeper improvement over Ext3 than Ext3 was over Ext2. Ext3 was mostly about adding journaling to Ext2, but Ext4 modifies important data structures of the filesystem such as the ones destined to store the file data. The result is a filesystem with an improved design, better performance, reliability, and features.
3. Btrfs is a modern copy on write (CoW) filesystem for Linux aimed at implementing advanced features while also focusing on fault tolerance, repair and easy administration. Jointly developed at multiple companies, Btrfs is licensed under the GPL and open for contribution from anyone.
4. F2FS (Flash-Friendly File System) is a file system intended for NAND-based flash memory equipped with Flash Translation Layer.
5. ZFS is an advanced filesystem created by Sun Microsystems (now owned by Oracle) and released for OpenSolaris in November 2005. Described as "The last word in filesystems", ZFS is stable, fast, secure, and future-proof. Being licensed under the CDDL, and thus incompatible with GPL, it is not possible for ZFS to be distributed along with the Linux Kernel. This requirement, however, does not prevent a native Linux kernel module from being developed and distributed by a third party, as is the case with OpenZFS, previously named ZFS on Linux (ZOL).

**!!ATTENTION!!:** 
If installing ZFS, the parition needs to be cleared before the installation with gparted or partitionmanager. When you cleared your drive, reboot and start the installer. Choose ZFS and everything works fine! :)

## Desktop environments
