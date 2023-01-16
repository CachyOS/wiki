---
title: Gaming
description: 
published: 1
date: 2023-01-16T20:32:17.926Z
tags: 
editor: markdown
dateCreated: 2023-01-16T19:09:36.842Z
---

# CachyOS - gaming
Here is a guide about gaming on CachyOS or any Arch-based distribution.  
You should have ready graphics card drivers. Of course, no way to play games, if your graphics card doesn't work properly.

## Essential packages
CachyOS can install all stuff needed for gaming by one command. You can also install these packages manually, but we grouped all of these packages for easier, faster installation.  
```
sudo pacman -S cachyos-gaming-meta
```
> `cachyos-gaming-meta` installs following [packages](https://github.com/CachyOS/CachyOS-PKGBUILDS/blob/master/cachyos-gaming-meta/PKGBUILD). *If you miss any package, let us know.*

## Steam
If you play games through Steam. Congratulations. That's all! Let's open Steam, select proton and enjoy your games!

### Proton?
Don't worry nothing hard, just by few clicks by mouse. Here is a screenshots.
![screenshot_20230116_212054.png](/screenshot_20230116_212054.png)
![screenshot_20230116_212256.png](/screenshot_20230116_212256.png)
![screenshot_20230116_212402.png](/screenshot_20230116_212402.png)
![screenshot_20230116_212343.png](/screenshot_20230116_212343.png)

### Proton versions
We provide a lot of different proton versions for play games. If you want to more performance, try `proton-cachyos`


#### Custom proton versions
- proton-cachyos
- proton-ge-custom
- proton-tkg-git

#### Official proton version
- proton-experimental
- proton


