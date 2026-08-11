---
title: Why CachyOS?
description: Why CachyOS may be better for you
tableOfContents:
  minHeadingLevel: 1
  maxHeadingLevel: 4
ai_translated: true
---

CachyOS 是一个以性能为中心的 Arch Linux 发行版，旨在提供稳定、高效和易用的计算环境。它提供了滚动发布系统的全部功能和灵活性，并通过高级优化和自定义工具链增强了用户体验，无论是新用户还是经验丰富的用户都能受益。

## 性能和优化

### 优化的包和仓库

CachyOS 提供了大量专门为各种现代 CPU 架构编译的 **[优化包](https://packages.cachyos.org/)**。这包括对 `x86-64-v3`、`x86-64-v4` 和 `Zen4+` 系统的支持，确保您的软件充分利用硬件功能，实现显著的性能提升。

如需深入了解我们的优化仓库，请参阅关于 **[优化仓库](/zh/features/optimized_repos)** 的详细指南。

### 为性能和稳定性调优的自定义内核

除了 CachyOS 基础内核补丁集（调优各种内核参数以提高桌面响应性）外，CachyOS 还精选了尚未主线化或未包含在内核稳定版本中的补丁集。

因此，这些补丁在发布给用户之前会经过内部测试，以确保稳定性不受影响。如需查看 CachyOS 提供的完整补丁列表，请参阅 [内核](/zh/features/kernel)。

### 高级 CPU 调度器支持

CachyOS 随附具有最新 CPU 调度器优化的内核，以确保即使在重负载下也能保持流畅和交互式的桌面体验。

* **EEVDF（Linux 内核默认调度器）：** 虽然对通用吞吐量非常出色，但 CachyOS 内核包含自定义 **[EEVDF 可调参数](https://github.com/CachyOS/linux/blob/6.15/cachy/kernel/sched/fair.c#L79-81)** 以提高桌面响应性。

* **[BORE](https://github.com/firelzrd/bore-scheduler)（Burst-Oriented Response Enhancer）：** 对于需要最大交互性的用户，我们的内核支持 BORE 调度器，这是一个增强 EEVDF 的补丁集，可在密集工作负载期间提供更流畅的体验。
  * 在 `linux-cachyos-bore` 内核变体上可用。

如需了解 CachyOS 提供的内核和 sched-ext 框架的更多信息，请参阅 **[内核](/zh/features/kernel)** 和 **[sched-ext](/zh/configuration/sched-ext)** 文档。

## 用户友好的工具和自定义

### [自动化硬件检测](/zh/features/chwd/chwd/)

CachyOS 包含自定义硬件检测工具，可自动识别并安装系统所需的驱动和包。这消除了手动搜索驱动的需要，在安装后为您节省时间和精力。

### 可自定义的安装过程

CachyOS 安装程序让用户可以通过选择桌面环境、包、文件系统、引导管理器、内核等来自定义系统，以满足他们的需求：

- [桌面环境](/zh/installation/desktop_environments/)
- [引导管理器](/zh/installation/boot_managers/)
- [内核变体](/zh/features/kernel#variants)
- [文件系统](/zh/installation/filesystem)
- [安装期间包含的自定义包](https://github.com/CachyOS/cachyos-calamares/blob/cachyos-limine-qt6/src/modules/netinstall/netinstall.yaml)

### CachyOS 自定义应用程序

CachyOS 开发和维护自己的应用程序套件，以简化系统管理并增强您的体验。

CachyOS 目前开发和维护的应用程序列表：

-   **[CachyOS Hello](https://github.com/CachyOS/CachyOS-Welcome)：** 一个欢迎应用程序，用于控制 tweak、应用修复和安装包。
-   **[CachyOS Package Installer](https://github.com/CachyOS/packageinstaller)：** 一个图形用户界面（GUI），用于轻松安装应用程序。
-   **[CachyOS Kernel Manager](https://github.com/CachyOS/kernel-manager)：** 轻松从仓库安装内核、配置自己的内核并管理 `sched-ext` 框架。
-   **[cachyos-rate-mirrors](https://github.com/CachyOS/rate-mirrors)：** 自动对 Arch 和 CachyOS 镜像进行排名，以通过 `pacman` 获得最佳下载速度。
-   **[systemd-boot-manager](https://github.com/CachyOS/systemd-boot-manager)：** 自动为 `systemd-boot` 生成新的引导条目，可以通过 `/etc/sdboot-manage.conf` 轻松配置。

## 友好且活跃的社区

CachyOS 最大的优势是其不断扩大的社区。社区成员通过分享技巧、提供支持和为项目的成功做出贡献来互相帮助。您的反馈帮助我们不断改进 CachyOS 体验。

加入我们，成为 **[CachyOS Discord](https://discord.gg/cachyos-862292009423470592)** 和 **[CachyOS 论坛](https://discuss.cachyos.org/)** 社区的一部分。
