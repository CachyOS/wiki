---
title: Precompiled Kernel Modules
---

To complement our large feature set, we decided to provide precompiled kernel modules for the kernels we provide.

## ZFS Module

Since ZFS is one of the many filesystems that we support, it makes sense to have it easily setup during install.
To achieve this, we compile the module directly inside the kernel and package it in a subpackage of the kernel.
Our precompiled ZFS modules are also patched with upstream features and fixes to ensure compatibility with the latest kernel.

## NVIDIA Module

To make it easier for users with NVIDIA hardware, we also provide precompiled kernel modules for NVIDIA, both closed source and
open source kernel modules. The main advantage of these precompiled kernel modules is that users don't have to compile
their own NVIDIA kernel modules every time a new kernel package is installed. This obsoletes both`nvidia-dkms` and `nvidia-open-dkms`.
It also saves precious time and CPU cycles in the process.

## Naming Conventions

For the package names of each precompiled kernel module, simply append the module name at the back of the kernel variant.
Examples are shown below:

```sh
linux-cachyos # Base kernel package
linux-cachyos-headers # Kernel headers, mainly for building
linux-cachyos-nvidia # Precompiled closed source NVIDIA modules for linux-cachyos kernel
linux-cachyos-nvidia-open
linux-cachyos-zfs # Precompiled ZFS modules for linux-cachyos kernel

linux-cachyos-hardened
linux-cachyos-hardened-headers
linux-cachyos-hardened-nvidia
linux-cachyos-hardened-nvidia-open
linux-cachyos-hardened-zfs
```

## Additional Modules

Below you can find a list of modules that are packaged **directly** into the base kernel package:

- Binder - Needed for Waydroid
- OpenRGB
- v4l2loopback
- NTSync
