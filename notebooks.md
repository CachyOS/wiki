---
title: Laptop with Dual GPU Setup Guide
description: 
published: 1
date: 2022-07-30T09:52:49.983Z
tags: laptop, notebook, nvidia
editor: markdown
dateCreated: 2021-07-04T00:59:16.282Z
---

# Optimus Manager 
**Clever tool for an easy switching between a laptop's integrated GPU and the discrete one.**

Modern laptops have two graphics cards, especially if we talk about gaming laptops.
**iGPU** - integrated GPU, longer battery life and lower performance. 
**dGPU** - discrete GPU, higher performance, but it would drain more battery, highly recommended for gaming, rendering, video encoding, NVENC among other demanding tasks.

Windows automatically switches between the iGPU and dGPU depending on the usage.
Here is a guide on how to setup the same for CachyOS, specially if you plan to use it for gaming or streaming, 3D developing etc.

Tested on laptop with Intel CPU and NVIDIA GPU, but latest Optimus Manager release also has support for AMD CPUs.

## Preparing iGPU and dGPU for the Linux Kernel
Let's start by configuring **mkinitcpio** which loads various kernel modules.
Note: If you have AMD CPU, **don't use** `i915` and `intel_agp`
`sudo nano /etc/mkinitcpio.conf`
Set the following to the MODULES section.
`MODULES="i915 intel_agp nvidia"`
<kbd>CTRL+O</kbd> to save
<kbd>CTRL+X</kbd> exit nano

## Adding a kernel parameter to enable "Direct Rendering Manager" (DRM KMS)
### (For a better experience and extra features)
### The easy way of doing it is by modifying the GRUB configuration file
Just use the following commands:
`sudo nano /etc/default/grub`
Now look for the following line: GRUB_CMDLINE_LINUX_DEFAULT, you will have more parameters here, just add nvidia-drm.modeset=1 next to them (with a space between) and save the changes as we have done before.
`GRUB_CMDLINE_LINUX_DEFAULT="nvidia-drm.modeset=1`

Now you have to use these two commands to save the modification into all the installed kernels and update GRUB.
`sudo mkinitcpio -P`
`grub-mkconfig -o /boot/grub/grub.cfg`

### How to configure it with systemd-boot instead
(under development)

## Installing Optimus Manager from AUR

Installing optimus-manager
`sudo pacman -S optimus-manager`

Installing optimus-manager-qt (same as optimus-manager but it uses a different framework and has better compatibility with KDE Plasma)
`sudo pacman -S optimus-manager-qt`

Last step, we need to turn on and start the service for optimus manager
`sudo systemctl enable optimus-manager.service`
`sudo systemctl start optimus-manager.service`

You can reboot now, after rebooting, you will have a fully working Optimus Manager.

**You can find the icon on the bottom right corner of the taskbar.**

Congrats! you are done with the setup.

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

<kbd>CTRL+O</kbd> save changes
<kbd>CTRL+X</kbd> exit nano

`sudo nano /etc/modprobe.d/nvidia.conf`
`options nvidia "NVreg_DynamicPowerManagement=0x02"`
<kbd>CTRL+O</kbd> save changes
<kbd>CTRL+X</kbd> exit nano

To apply these changes right now.
`sudo udevadm control --reload`
`sudo udevadm trigger`

Now you need to edit optimus-manager's configuration file to enable **(RTD3) Power Management**
`sudo nano /etc/optimus-manager/optimus-manager.conf`

Edit the following in optimus-manager.conf file.
`dynamic_power_management=fine`
`reboot` (to reboot the system)

Now your laptop's hybrid mode should work like it does on Windows!.
