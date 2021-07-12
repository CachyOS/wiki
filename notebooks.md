---
title: Notebook-Setup
description: 
published: 1
date: 2021-07-12T11:31:17.200Z
tags: laptop, notebook, nvidia
editor: markdown
dateCreated: 2021-07-04T00:59:16.282Z
---

# Optimus Manager - how to switch to NVIDIA	GPU on laptop
Modern laptops have two graphics cards, especialy if we talk about gaming laptops.
**iGPU** - integrated GPU, longer battery life and lower performance. 
**dGPU** - discrete GPU, high perofrmance, but drain a lot of battery, we use that for gaming, rendering, video encoding etc.

Microsoft Windows automatically switch between iGPU and dGPU - depends on usage.
Here is a guide how to setup system, if we want to use NVIDIA GPU for gaming.

Tested on laptop with Intel CPU and NVIDIA GPU, but latest Optimus Manager also have support for AMD CPU.

## Preparing iGPU and dGPU
Let's go configure **mkinitcpio** which loads various kernel modules.
Note: If you have AMD CPU, **don't use** `i915` and `intel_agp`
`sudo nano /etc/mkinitcpio.conf`
Just write each one module to MODULES section.
`MODULES="i915 intel_agp nvidia"`
<kbd>CTRL+O</kbd> save that
<kbd>CTRL+X</kbd> exit nano

## Addition one kernel parameters nvidia-drm.modeset=1
### How to configure that with GRUB
Just use following commands
`sudo nano /etc/default/grub`
Just find line where is GRUB_CMDLINE_LINUX_DEFAULT, you have more parameters here, just add nvidia-drm.modeset=1 and keep other parameters here.
`GRUB_CMDLINE_LINUX_DEFAULT="nvidia-drm.modeset=1`

To (re-)generate all existing presets ramdisk and update GRUB.
`sudo mkinitcpio -P`
`grub-mkconfig -o /boot/grub/grub.cfg`

### How to configure SystemD-boot
(under development)

## Installing Optimus Manager from AUR
You need to git for using AUR.
`sudo pacman -S git`

Instaling optimus-manager
`git clone https://aur.archlinux.org/optimus-manager.git`
`cd optimus-manager`
`makepkg -si`

Instaling optimus-manager-qt
`git clone https://aur.archlinux.org/optimus-manager-qt.git`
`cd optimus-manager-qt`

> KDE Plasma need change one line in PKGBUILD.
{.is-warning}

`nano PKGBUILD `
You need change from `_with_plasma=false` to `_with_plasma=true`
<kbd>CTRL+O</kbd> save that
<kbd>CTRL+X</kbd> exit nano
`makepkg -si`

Last thing, we need turn on service for optimus manager
`sudo systemctl enable optimus-manager.service`
`sudo systemctl start optimus-manager.service`

You can reboot now, after reboot you will have fully working Optimus Manager.
You can find icon In the right part of the bottom bar.

**You can end up right here.**

# Optional configuration
## For Turing generation cards with Intel Coffee Lake or above CPUs, it is possible to fully power down the GPU when not in use.
**PCI-Express Runtime D3 (RTD3) Power Management**
The feature is only supported on laptop with Turing GPUs (RTX 20xx/GTX 16xx) and above, and Intel Coffee Lake CPUs (8th gen) and above. 
`sudo nano /etc/udev/rules.d/80-nvidia-pm.rules`

> #Enable runtime PM for NVIDIA VGA/3D controller devices on driver bind
> ACTION=="bind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030000", TEST=="power/control", ATTR{power/control}="auto"
> ACTION=="bind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030200", TEST=="power/control", ATTR{power/control}="auto"
> 
> #Disable runtime PM for NVIDIA VGA/3D controller devices on driver unbind
> ACTION=="unbind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030000", TEST=="power/control", ATTR{power/control}="on"
> ACTION=="unbind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030200", TEST=="power/control", ATTR{power/control}="on"

<kbd>CTRL+O</kbd> save that
<kbd>CTRL+X</kbd> exit nano

`sudo nano /etc/modprobe.d/nvidia.conf`
`options nvidia "NVreg_DynamicPowerManagement=0x02"`
<kbd>CTRL+O</kbd> save that
<kbd>CTRL+X</kbd> exit nano

So we need relaod udev rules now.
`sudo udevadm control --reload`
`sudo udevadm trigger`

So we need configure optimus-manager with **(RTD3) Power Management**
`sudo nano /etc/optimus-manager/optimus-manager.conf`

Edit config optimus-manager.conf file.
`dynamic_power_management=fine`
`reboot`

So you can use hybrid mode and laptop will works like on Microsoft Windows.
