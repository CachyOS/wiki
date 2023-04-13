---
title: CachyOS - Gaming
description:  It covers essential package installation, Steam gaming with Proton, various Proton version options, Lutris as a central hub for all games, and script installers for popular games like League of Legends.
published: 1
date: 2023-04-13T09:11:53.089Z
tags: 
editor: markdown
dateCreated: 2023-01-16T19:09:36.842Z
---

Gaming on CachyOS
=================
Welcome to the world of gaming on CachyOS, a leading Arch-based distribution! This guide will help you get started with playing your favorite games on this operating system.

Prerequisites
-------------
Before we dive into the fun stuff, it is essential to ensure that your graphics card drivers are installed and working properly. If your graphics card is not functioning optimally, you will not be able to play games.

Essential Packages
------------------
To make things easier for you, CachyOS has grouped all the necessary packages for gaming into one command. This makes the installation process faster and less complicated. Simply run the following command in the terminal:
```
sudo pacman -Sy cachyos-gaming-meta
```

> The `cachyos-gaming-meta` package installs the following [packages](https://github.com/CachyOS/CachyOS-PKGBUILDS/blob/master/cachyos-gaming-meta/PKGBUILD). *If you find that you are missing any packages, please do not hesitate to let the CachyOS team know.*

Steam
-----
For Steam users, playing games on CachyOS is easy! Just open Steam and select the Proton option, and you're ready to enjoy your games.
> Notebook users with NVIDIA GPUs should refer to the following guide: [NVIDIA PRIME Render Offload](https://wiki.cachyos.org/en/notebooks)

Proton
------
Don't worry, setting up Proton is not complicated at all! With just a few clicks, you can have it up and running. Check out the step-by-step guide below with accompanying screenshots.
![screenshot_20230116_212054.png](/screenshot_20230116_212054.png)
![screenshot_20230116_212256.png](/screenshot_20230116_212256.png)
![screenshot_20230116_212402.png](/screenshot_20230116_212402.png)
![screenshot_20230116_212343.png](/screenshot_20230116_212343.png)

You can use Proton to play your Windows games on Linux.
> To check whether your game is compatible with Linux, please visit: [proton-db](https://www.protondb.com/).

CachyOS offers several Proton versions to improve gaming performance, such as `proton-cachyos`, `proton-ge-custom`, and `proton-tkg-git`, as well as the official Proton versions `proton-experimental` and `proton`.

[Bottles](https://usebottles.com/)
-------
Bottles Gaming Environment comes preconfigured to support a large set of Windows video games on Linux. 
Thanks to Bottles installer you can have immediate access to the most famous game stores (e.g. **Epic Games Store**, **EA Launcher**, **Battle.net** etc.) and then play your favorite games, just like on Windows.

[Lutris](https://lutris.net/)
------
Lutris provides a centralized hub for all your games on your Linux distribution. With Lutris, you can manage your game runners, such as Wine, Proton, or emulators, with custom parameters. To install Lutris, run the following command in the terminal:

Script Installers
-----------------
To simplify the installation of many games, Lutris provides script installers.
For instance, you can install [League Of Legends scripts](https://lutris.net/games/league-of-legends/) with minimal effort. It is recommended to use the WINE Standard version, and the installation instructions provided by the script should be followed.

**With this guide, you are now ready to start gaming on CachyOS. Enjoy!**