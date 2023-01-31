---
title: Gaming
description: 
published: 1
date: 2023-01-31T22:03:54.823Z
tags: 
editor: markdown
dateCreated: 2023-01-16T19:09:36.842Z
---

Gaming on CachyOS
=================

Welcome to the world of gaming on CachyOS, a leading Arch-based distribution! This guide will help you get started with playing your favorite games on this operating system.

Prerequisites
-------------

Before we dive into the fun stuff, it is essential to ensure that your graphics card drivers are installed and working properly. If your graphics card is not functioning optimally, you won't be able to play games.

Essential Packages
------------------

To make things easier for you, CachyOS has grouped all the necessary packages for gaming into one command. This makes the installation process faster and less complicated. Simply run the following command in the terminal:

```
sudo pacman -S cachyos-gaming-meta
```

> The `cachyos-gaming-meta` package installs the following [packages](https://github.com/CachyOS/CachyOS-PKGBUILDS/blob/master/cachyos-gaming-meta/PKGBUILD). *If you find that you're missing any package, feel free to let the CachyOS team know.*

Steam
-----

For Steam users, playing games on CachyOS is a breeze! Simply open Steam and select the Proton option, and you're ready to enjoy your games.
> Notebook users with NVIDIA GPUs should refer to the following guide: [NVIDIA PRIME Render Offload](https://wiki.cachyos.org/en/notebooks)

Proton
------

Don't worry, Proton is not complicated at all! In just a few clicks, you can have it set up and ready to use. Check out the screenshots below for a step-by-step guide.

![screenshot_20230116_212054.png](/screenshot_20230116_212054.png)
![screenshot_20230116_212256.png](/screenshot_20230116_212256.png)
![screenshot_20230116_212402.png](/screenshot_20230116_212402.png)
![screenshot_20230116_212343.png](/screenshot_20230116_212343.png)

You can use Proton to play your Windows games on Linux.
> To check if your game is compatible with Linux, visit [proton-db](https://www.protondb.com/).

CachyOS provides various Proton versions for improved performance, including `proton-cachyos`, `proton-ge-custom`, `proton-tkg-git`, and the official Proton versions `proton-experimental` and `proton`.

Bottles
-------

Lutris
------

Lutris provides a central hub for all your games on your Linux distro. With Lutris, you can manage your game runners, such as Wine, Proton, or emulators, with custom parameters. To install Lutris, run the following command in the terminal:

```
sudo pacman -S lutris
```

Script Installers
-----------------

For many games, installation is made easy with script installers.

For example, the [League Of Legends scripts](https://lutris.net/games/league-of-legends/) can be installed with minimal effort. We recommend using the WINE Standard version. Simply follow the instructions provided by the script.

With this guide, you are now ready to start gaming on CachyOS. Enjoy!