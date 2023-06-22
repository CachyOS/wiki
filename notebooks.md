---
title: Laptop with Dual GPU Setup Guide
description: 
published: 1
date: 2023-06-22T06:45:34.151Z
tags: laptop, notebook, nvidia
editor: markdown
dateCreated: 2021-07-04T00:59:16.282Z
---

# NVIDIA PRIME Render Offload
## The official way from NVIDIA
Append these enviroment variables before running the program
```
__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia <program>
```
### Steam
```
__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia %command%
```
> Please read the [docs from NVIDIA](https://download.nvidia.com/XFree86/Linux-x86_64/435.17/README/primerenderoffload.html) if you are wondering why we added`__VK_LAYER_NV_optimus=NVIDIA_only`

## Wrapper script
Arch Linux provides a package called [`nvidia-prime`](https://archlinux.org/packages/extra/any/nvidia-prime/) that helps you set the enviroment variable above when you run a program, to use it simply execute this:

### Installation of the Wrapper script
```
sudo pacman -S nvidia-prime
```

You can use `prime-run` now.
```
prime-run <program>
```

### GNOME
As of GNOME 3.38 and later, you can select *"Run with Discrete Graphics"* from the context menu when you right-click on an application.


# Optimus Manager (legacy)
> We don't recommend using **Optimus Manager**, as it may result in significant issues with NVIDIA GPUs. The creator of Optimus Manager no longer feels confident in maintaining it, as mentioned in this GitHub issue: https://github.com/Askannz/optimus-manager/issues/543
**We recommend utilizing NVIDIA PRIME Render Offload!** 
**Optimus Manager is still available as legacy support** for users who genuinely require it, especially in cases where NVIDIA PRIME Render Offload cannot fulfill their needs.
{.is-warning}

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
> The `intel_agp` module may cause issues with hibernation on some systems, see https://bbs.archlinux.org/viewtopic.php?id=262043. Try omitting the module if you encounter issues.

### AMD iGPU
#### with [AMDGPU driver](https://wiki.archlinux.org/title/AMDGPU)
Set `amdgpu nvidia` to the MODULES section in `/etc/mkinitcpio.conf`:
```conf
MODULES="amdgpu nvidia"
```
<!---
TODO: is the old radeon really support PRIME?
-->
#### with [radeon driver](https://wiki.archlinux.org/title/ATI)
Set `radeon nvidia` to the MODULES section in `/etc/mkinitcpio.conf`:
```conf
MODULES="radeon nvidia"
```

## Enable "Direct Rendering Manager" (DRM KMS)
To enable DRM we need to add necessary kernel parameter in the bootloader, each bootloader has a different way to do that. 

> DRM KMS is already enabled by default in CachyOS as of cachyos-settings v23
{.is-note}

### Using GRUB
Add `nvidia-drm.modeset=1` to GRUB_CMDLINE_LINUX_DEFAULT in `/etc/default/grub`, it'll look something like this:
```conf
GRUB_CMDLINE_LINUX_DEFAULT="nvidia-drm.modeset=1 ..."
```
Now you have to use these two commands to save the modification into all the installed kernels and update GRUB.
```sh
sudo mkinitcpio -P
sudo grub-mkconfig -o /boot/grub/grub.cfg
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

> With the CachyOS-Settings v27 update, the settings related to **PCI-Express Runtime D3 (RTD3) Power Management** are already enabled by default.
{.is-info}

## Fully power down the GPU when not in use
> The feature is only supported on laptop with Turing GPUs (RTX 20xx/GTX 16xx) and above, and Intel Coffee Lake CPUs (8th gen) and above.
{.is-info}

**PCI-Express Runtime D3 (RTD3) Power Management**
Add these rules into `/etc/udev/rules.d/80-nvidia-pm.rules`

```
# Load and unload nvidia-modeset module
ACTION=="add", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe nvidia-modeset"
ACTION=="remove", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe -r nvidia-modeset"

# Load and unload nvidia-drm module
ACTION=="add", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe nvidia-drm"
ACTION=="remove", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe -r nvidia-drm"

# Load and unload nvidia-uvm module
ACTION=="add", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe nvidia-uvm"
ACTION=="remove", DEVPATH=="/bus/pci/drivers/nvidia", RUN+="/sbin/modprobe -r nvidia-uvm"

# Enable runtime PM for NVIDIA VGA/3D controller devices on driver bind
ACTION=="bind", SUBSYSTEM=="pci", DRIVERS=="nvidia", ATTR{vendor}=="0x10de", ATTR{class}=="0x03[0-9]*", TEST=="power/control", ATTR{power/control}="auto"

# Disable runtime PM for NVIDIA VGA/3D controller devices on driver unbind
ACTION=="unbind", SUBSYSTEM=="pci", DRIVERS=="nvidia", ATTR{vendor}=="0x10de", ATTR{class}=="0x03[0-9]*", TEST=="power/control", ATTR{power/control}="on"
```
> The top three `ACTION=="add"` rules are not needed when running Linux kernel `5.5` and newer, see https://download.nvidia.com/XFree86/Linux-x86_64/530.30.02/README/dynamicpowermanagement.html.

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

## Using nvidia-persistenced
Enable nvidia-persistenced.service to avoid the kernel tearing down the device state whenever the NVIDIA device resources are no longer in use. 
```
sudo systemctl enable --now nvidia-persistenced.service
```
And finally reboot your system.
Your laptop's hybrid mode should work like it does on Windows!