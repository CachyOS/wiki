---
title: Laptop with Dual GPU Setup Guide
---

# NVIDIA PRIME Render Offload
## The official way from NVIDIA
Append these environment variables before running the program
```bash
__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia <program>
```
### Steam
```bash
__NV_PRIME_RENDER_OFFLOAD=1 __VK_LAYER_NV_optimus=NVIDIA_only __GLX_VENDOR_LIBRARY_NAME=nvidia %command%
```
:::tip
Please read the [docs from NVIDIA](https://download.nvidia.com/XFree86/Linux-x86_64/435.17/README/primerenderoffload.html) if you are wondering why we added`__VK_LAYER_NV_optimus=NVIDIA_only`
:::

## Wrapper script
Arch Linux provides a package called [`nvidia-prime`](https://archlinux.org/packages/extra/any/nvidia-prime/) that helps you set the environment variables above when you run a program, to use it simply execute the following:

### Installation of the Wrapper script
```bash
sudo pacman -S nvidia-prime
```

You can use `prime-run` now.
```bash
prime-run <program>
```

### GNOME
As of GNOME 3.38 and later, you can select *"Run with Discrete Graphics"* from the context menu when you right-click on an application.


**Clever tool for easy switching between a laptop's integrated GPU and the discrete one.**

Modern laptops have two graphics cards, especially if we talk about gaming laptops.
**iGPU** - integrated GPU, longer battery life, and lower performance.
**dGPU** - discrete GPU, higher performance, but it would drain more battery, highly recommended for gaming, rendering, video encoding, NVENC among other demanding tasks.

Windows automatically switches between the iGPU and dGPU depending on the usage.
Here is a guide on how to set up the same for CachyOS, especially if you plan to use it for gaming or streaming, 3D development, etc.


## Fully power down the GPU when not in use
:::note
This feature is only supported on laptops with Turing GPUs (RTX 20xx/GTX 16xx) and above, and Intel Coffee Lake CPUs (8th gen) and above.
:::

**PCI-Express Runtime D3 (RTD3) Power Management**
Add these rules into `/etc/udev/rules.d/80-nvidia-pm.rules`

```bash
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

To apply these changes right now:
```sh
sudo udevadm control --reload
sudo udevadm trigger
```

## Using nvidia-persistenced
Enable nvidia-persistenced.service to avoid the kernel tearing down the device state whenever the NVIDIA device resources are no longer in use.
```sh
sudo systemctl enable --now nvidia-persistenced.service
```
And finally, reboot your system.
Your laptop's hybrid mode should now work as it does on Windows!
