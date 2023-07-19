---
title: Downloads Information
description: Here, you can access the latest ISO images for CachyOS.
published: 1
date: 2023-07-19T18:51:47.159Z
tags: dowloading, download, install, installation, installing, iso
editor: markdown
dateCreated: 2021-07-04T01:43:25.246Z
---

CachyOS can be installed using two types of installers: GUI Installer and CLI Installer.

>Always take one exta step and verify ISO's integrity to avoid any undesired issues at installation or while creating a booteable media. Here is how you can do it:
If you're currently on Windows:
>1)If you downloaded the iso via SourceForge at the right of each file there is a exclamation point and it contains both SHA1 and MD5.
2)Open CMD or PowerShell as Administrator and navigate to the path where the ISO is stored.
3)Type the following command: certUtil -hashfile full_iso_name.iso MD5
Example > <kbd>certUtil cachyos-kde-linux-230709.iso MD5</kbd>
SHA256 > <kbd>certUtil cachyos-kde-linux-230709.iso SHA256</kbd>
4)Compare certUtil hash with SourceForge file information, if both of them match then you are ready to proceed.
{.is-warning}

>Verification from any Linux distro:
1)Open a terminal and navigate to the path where the ISO is stored
2)Type the following command: md5sum full_iso_name.iso    <kbd>Example: md5sum cachyos-kde-linux-230709.iso</kbd>
SHA256 (found in cachyos-kde-linux-230709.iso.sha256 - Open this file with a text editor or use cat command)  if downloading from mirror.cachyos.org <kbd>Example: sha256sum cachyos-kde-linux-230709.iso</kbd>
3)Compare if both hashes  match.{.is-warning}

GUI Installer
-------------

The GUI Installer is available as a net installer ISO, with a size of approximately 2.2GB. During installation, packages can be either downloaded from the Internet or installed offline. You have the option to choose between 11 different desktop environments, as well as customize your installation by adding additional packages during the installation process.

CLI-Installer
-------------

soon:tm:

Download ISOs
-------------

CachyOS ISOs can be downloaded from the following sources:

*   [SourceForge](https://sourceforge.net/projects/cachyos-arch/files/)
*   [CachyOS Mirror](https://mirror.cachyos.org/ISO/).

Both online and offline installers are provided for your convenience.