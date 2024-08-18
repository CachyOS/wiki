---
title: Kernel Modules on CachyOS
---

CachyOS does provide Kernel Modules precompiled for every kernel from us.

## ZFS Module

Since we are providing ZFS support directly in the installer, we want to ensure that the ZFS Module is always compatible with our kernel version.

This can be achieved by compiling the module directly inside the kernel and packaging the module into its own package.
We also pull in upstream patches into the module to ensure compatibility with the latest kernel.

The ZFS Module is simply named as the installed kernel + "-zfs" as ending.
Here some examples:

```
linux-cachyos (Base Kernel)
linux-cachyos-headers (Kernel Headers)
linux-cachyos-zfs (ZFS Module for it)

linux-cachyos-bore-lto (Base Kernel)
linux-cachyos-bore-lto-headers (Kernel Headers)
linux-cachyos-bore-lto-zfs (ZFS Module)
```

If you're installing a different kernel, when using the ZFS Filesystem, be sure to also install the zfs module with it.

## NVIDIA Module

We provide a pre-compiled NVIDIA module, which makes "nvidia-dkms" not required anymore.
The main advantage of this pre-compiled module is that users don't have to compile their own NVIDIA module every time a new kernel package is installed, saving
precious time and CPU cycles in the process.

Also we can ensure that the module is correctly compiling for the users.
We are also pulling patches into the module, if required to ensure compatibility with the latest kernel version.

The NVIDIA Module is simply named as the installed kernel + "-nvidia" as ending.
Here some examples:

```
linux-cachyos:
linux-cachyos (Base Kernel)
linux-cachyos-headers (Kernel Headers)
linux-cachyos-nvidia (NVIDIA Module for it)

linux-cachyos-bore-lto:
linux-cachyos-bore-lto (Base Kernel)
linux-cachyos-bore-lto-headers (Kernel Headers)
linux-cachyos-bore-lto-nvidia (NVIDIA Module)
```

## Other patched Modules in the CachyOS Kernel

Here you can find a list of external modules patched into the CachyOS Kernel:

- OpenRGB
- v4l2loopback
