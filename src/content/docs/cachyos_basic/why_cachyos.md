---
title: Why CachyOS?
description: Why CachyOS may be better for you
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
---

CachyOS is a performance-centric Arch Linux distribution designed to deliver a stable, efficient, and user-friendly computing environment. It offers the full power and flexibility of a rolling-release system, enhanced by advanced optimizations and a custom toolchain that streamlines the user experience for both new and experienced users.

## Performance and Optimization

### Optimized Packages and Repositories

CachyOS provides a large selection of **[optimized packages](https://packages.cachyos.org/)** specifically compiled for various modern CPU architectures. This includes support for `x86-64-v3`, `x86-64-v4`, and `Zen4+` systems, ensuring your software is built to take full advantage of your hardware's capabilities for a significant performance boost.

For a more in depth look of our optimized repositories, see our detailed guide on **[Optimized Repositories](/features/optimized_repos)**.

### Custom Kernel Tuned for Performance and Stability

Aside from the CachyOS base kernel patch set that tunes various kernel parameters to improve desktop responsiveness, CachyOS cherry-picks patch sets that have not been mainlined or are not included in the stable revision of the kernel.

Therefore, these patches undergo internal testing before being released to users to ensure that stability isn't impacted. For a complete list of the patches that CachyOS provides, see [Kernel](/features/kernel).

### Advanced CPU Scheduler Support

CachyOS ships kernels with the latest CPU scheduler optimizations to ensure a smooth and interactive desktop, even under heavy load.

* **EEVDF (The default Linux kernel scheduler):** While excellent for general throughput, the CachyOS kernel includes custom **[EEVDF tunables](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** to improve desktop responsiveness.

* **[BORE](https://github.com/firelzrd/bore-scheduler) (Burst-Oriented Response Enhancer):** For users who need maximum interactivity, our kernels support the BORE scheduler, a patch set that enhances EEVDF to deliver a more fluid experience during intensive workloads.

For more information about the kernels offered by CachyOS and the sched-ext framework, see the **[Kernel](/features/kernel)** and **[sched-ext](/configuration/sched-ext)** documentation.

## User-Friendly Tools and Customization

### [Automated Hardware Detection](/features/chwd/chwd/)

CachyOS includes a custom hardware detection tool that automatically identifies and installs the necessary drivers and packages for your system. This eliminates the need for manual driver searching, saving you time and effort after installation.

### Customizable Installation Process

The CachyOS installer lets users customize their system by choosing the desktop environment, packages, filesystem, boot manager, kernel, and more to fit their needs:

- [Desktop Environments](/installation/desktop_environments/)
- [Boot Managers](/installation/boot_managers/)
- [Kernel Flavors](/features/kernel#variants)
- [Filesystems](/installation/filesystem)
- [Custom Packages to include during installation](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### CachyOS Custom Applications

CachyOS develops and maintains its own suite of applications to simplify system management and enhance your experience.

List of applications that CachyOS currently develops and maintains:

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome):** A welcome application for controlling tweaks, applying fixes, and installing packages.
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller):** A graphical user interface (GUI) for easy installation of applications.
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager):** Easily install kernels from the repository, configure your own, and manage the `sched-ext` framework.
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors):** Automatically ranks Arch and CachyOS mirrors for optimal download speeds with `pacman`.
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager):** Automatically generates new boot entries for `systemd-boot`, which can be easily configured via `/etc/sdboot-manage.conf`.

## A Friendly and Active Community

The greatest strength of CachyOS is its expanding community. Community members help one another by sharing tips, providing support, and contributing to the project's success. Your feedback helps us to continuously improve the CachyOS experience.

Join us and become a part of the community on the **[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** and the **[CachyOS Forum](https://discuss.cachyos.org/)**.
