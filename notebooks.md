---
title: Laptop with Dual GPU Setup Guide
description: 
published: 1
date: 2022-07-30T14:53:07.043Z
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
Here is a guide on how to setup the same for CachyOS, specially if you plan to use it for gaming or streaming, 3D developing, etc.

Tested on laptop with Intel CPU and NVIDIA GPU, but since release 1.4 Optimus Manager also has support for AMD CPUs.

## Preparing iGPU and dGPU for the Linux Kernel
Let's start by configuring **mkinitcpio** which loads various kernel modules.

### Intel iGPU
Set `i915 intel_agp nvidia` to the MODULES section in `/etc/mkinitcpio.conf`:
```
MODULES="i915 intel_agp nvidia"
```

### AMD iGPU
#### with [AMDGPU driver](https://wiki.archlinux.org/title/AMDGPU)
Set `amdgpu nvidia` to the MODULES section in `/etc/mkinitcpio.conf`:
```conf
MODULES="amdgpu nvidia"
```
#### with [radeon driver](https://wiki.archlinux.org/title/ATI)
Set `radeon nvidia` to the MODULES section in `/etc/mkinitcpio.conf`:
```conf
MODULES="radeon nvidia"
```

## Enable "Direct Rendering Manager" (DRM KMS)
To enable DRM we need to add necessary kernel parameter in the bootloader, each bootloader has a different way to do that. 
### Using GRUB
Add `nvidia-drm.modeset=1` to GRUB_CMDLINE_LINUX_DEFAULT in `/etc/default/grub`, it'll look something like this:
```conf
GRUB_CMDLINE_LINUX_DEFAULT="nvidia-drm.modeset=1 ..."
```
Now you have to use these two commands to save the modification into all the installed kernels and update GRUB.
```sh
sudo mkinitcpio -P
grub-mkconfig -o /boot/grub/grub.cfg
```

### Using systemd-boot
(under development)

## Installing Optimus Manager

Installing optimus-manager & optimus-manager-qt (a system tray for optimus-manager)
`sudo pacman -S optimus-manager optimus-manager-qt`

Last step, we need to enable and start the service for optimus manager
`sudo systemctl enable --now optimus-manager.service`

You can reboot now, after rebooting, you will have a fully working Optimus Manager, which you can **find the icon on the bottom right corner of the taskbar.**

Congrats! You are done with the setup.

# Optional configuration
## For Turing generation cards with Intel Coffee Lake or above CPUs, it is possible to fully power down the GPU when not in use.
**PCI-Express Runtime D3 (RTD3) Power Management**
The feature is only supported on laptop with Turing GPUs (RTX 20xx/GTX 16xx) and above, and Intel Coffee Lake CPUs (8th gen) and above. 
Add these rules into `/etc/udev/rules.d/80-nvidia-pm.rules`

```
#Enable runtime PM for NVIDIA VGA/3D controller devices on driver bind
ACTION=="bind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030000", TEST=="power/control", ATTR{power/control}="auto"
ACTION=="bind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030200", TEST=="power/control", ATTR{power/control}="auto"

#Disable runtime PM for NVIDIA VGA/3D controller devices on driver unbind
ACTION=="unbind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030000", TEST=="power/control", ATTR{power/control}="on"
ACTION=="unbind", SUBSYSTEM=="pci", ATTR{vendor}=="0x10de", ATTR{class}=="0x030200", TEST=="power/control", ATTR{power/control}="on"
```

Next add the following text to `/etc/modprobe.d/nvidia.conf`
```
options nvidia "NVreg_DynamicPowerManagement=0x02"
```

To apply these changes right now:
```
sudo udevadm control --reload
sudo udevadm trigger
```

Now you need to edit optimus-manager's configuration file to enable **(RTD3) Power Management** by adding `dynamic_power_management=fine` to `/etc/optimus-manager/optimus-manager.conf`

And finally reboot your system.

Your laptop's hybrid mode should work like it does on Windows!.
