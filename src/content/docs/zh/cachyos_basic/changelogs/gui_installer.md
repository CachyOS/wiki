---
title: GUI Installer
description: Calamares 和 GUI Live ISO 的更新日志
sidebar:
  order: 1
ai_translated: true
---
26.06
----

**Features:**

* **Packages:**
  * Python 现在使用扩展的 PGO 来提高性能
  * 添加了 [GCC 补丁](https://www.phoronix.com/news/GCC-x86-Generic-Mispredict)，用于通用 x86 分支误预测调优，改进了 GCC 对现代 Intel 和 AMD CPU 上分支误预测成本的计算
  * 修复了在高核数 CPU 上使用 OpenBLAS 时在 Phoronix Benchmarks 中发现的性能回归
  * 将 `proton-cachyos` 重命名为 `proton-cachyos-native`
* **pacman:** 添加了 [脚本和钩子的网络隔离](https://github.com/CachyOS/pacman/commit/4056cd687f6379e61e7decb9b66e9b57cb3949a9)
* **Installer:**
  * 添加了 CachyOS Hyprland Noctalia 桌面选项和预览视频
  * 从安装中移除了 `paru`；建议使用 [Shelly](https://wiki.cachyos.org/zh/configuration/post_install_setup/#updating-the-system)（通过 GUI 或 CLI）作为替代
  * 为 MangoWM 添加了 SDDM 作为显示管理器
  * 将 GNOME System Monitor 替换为 Resources
  * 将 `realtime-privileges` 添加到音频包组
  * 改进了实时会话的键盘布局和变体检测
* **CachyOS-Welcome:**
  * 通过 `blocky` 添加了 DNS over QUIC (DoQ) 支持
  * 添加了专用的故障排除页面
  * 添加了 Ptyxis 终端支持
  * 添加了阿塞拜疆语和希腊语本地化
  * 添加了法语 readme 和参与页面
  * 更新了意大利语、德语、法语、日语和保加利亚语翻译
* **chwd:**
  * 添加了土耳其语本地化
  * 从掌机包列表中移除了 `cachyos-handheld`
  * 解决了需要不兼容驱动分支的多 GPU 系统上的驱动冲突问题（例如混合 NVIDIA 代际），安装最佳通用驱动或回退到主 GPU
  * 为虚拟机添加了 32 位 Vulkan 驱动
* **cachyos-settings:** 对用户服务应用了 15 秒启动和 10 秒关闭超时，防止 90 秒关机延迟

**Fixes:**

* **Installer:**
  * 修复了键盘布局排序和 `locale1` 配置处理
  * 修复了将正确的 pacman 配置复制到已安装系统的问题
  * 安装后移除了残留的 `/etc/calamares` 目录
  * 将 Calamares 清理移到了所有安装脚本之后
  * 移除了多余的 Limine 安装后步骤
* **CachyOS-Welcome:**
  * 防止在未安装 `cachyos-pi` 时选择"安装应用"导致崩溃；现在不可用时隐藏该按钮
  * 修复了无法读取或解析保存的设置文件时的崩溃；现在失败时会重置为默认设置
  * 纠正了 tweak 检测（包括 `graphical-session.target.wants`）和通过 polkit 全局禁用用户服务 tweak
* **chwd:**
  * 纠正了虚拟机厂商 ID
  * 移除了不必要的 `fprintd` 服务激活
  * 修复了 Mesa 移除保护

26.04
----

**Features:**

* **Installer:**
  * Shelly 现已取代 Octopi 作为 GUI 包管理器
  * 安装后立即创建干净的快照并永久保留，提供基线还原点
  * GRUB `os-prober` 现在默认启用
  * 添加了带有 dotfiles 的 MangoWM 作为桌面选项
  * 移除了 UKUI 桌面
  * AMD GPU 现在使用不同的 Plymouth 主题，因为 amdgpu 驱动在连接了副显示器的笔记本电脑上无法可靠渲染之前的主题
  * 清理并现代化了 GNOME 包选择
  * 添加了安装带有 `DMS` shell 的 `MangoWM` 的选项
* **CachyOS-Welcome:**
  * 通过 `blocky` 添加了 DNS-over-HTTPS (DoH) 支持
  * 添加了自定义 DNS 服务器支持和 DHCP 自动指示器/重置
  * DNS 服务器现在显示元数据（区域、主页、过滤）并支持单独延迟测试
  * 添加了 VRAM 管理开关 `dmemcg-booster`（在 KDE 上额外安装 `plasma-foreground-booster`）
  * 添加了完整的键盘导航支持以提高可访问性
  * 将 PNG 社交图标替换为清晰的、支持 HiDPI 的 SVG
  * 在终端助手添加了 `wezterm`
* **chwd:**
  * 添加了原生 USB 设备检测（通过 libusb/sysfs）和机箱类型检测
  * 添加了指纹（`fprint`）sudo 集成支持
  * 添加了 CPU 系列/型号检测以支持 `intel-lpmd`
  * **掌机：** 为 Xbox ROG Ally 添加了精确模式
  * **网络：** 添加了 Marvell AVASTAR 88W8897 Wi-Fi 配置文件（Surface Pro 4）
  * 将 NVIDIA 配置文件拆分为笔记本电脑和桌面环境
  * 拆分并更新了虚拟机配置文件
* **cachyos-settings:** 将 NVMe I/O 调度器的默认值从 `none` 切换为 `kyber`

**Fixes:**

* **Installer:**
  * 分区方法现在会打印到调试日志
  * 重用现有引导分区时现在会移除旧的微码包
* **CachyOS-Welcome:**
  * 修复了 ping 失败时连通性检查错误返回 true 的问题
  * 确保外部链接图标在深色主题中可见
  * 防止欢迎应用同时启动多个实例
  * 添加了 `StartupWMClass` 以改进 `.desktop` 窗口匹配
* **chwd:**
  * 在非便携桌面上从 `mkinitcpio.conf` 中移除了 `kms` 钩子，以修复 NVIDIA 驱动冲突
  * 使 NVIDIA 配置文件中的已安装内核搜索更准确
  * 从 NVIDIA 470xx 配置文件中移除了强制 Xorg 会话（修复了与 `plasma-login-manager` 的兼容性）
  * 从虚拟机配置文件中移除了过时的 GDM `WaylandEnable=false`
  * 修复了错误的掌机检测（例如特定 MSI 笔记本被误认为 MSI Claw）
* **cachyos-settings:**
  * 由于 NVIDIA 595 驱动的问题，移除了 `S01x` 电源管理
  * 由于 NVIDIA 驱动的 VR 相关问题，禁用了 `AggressiveVblank`

26.03
----

**Features:**

* **Installer:**
  * 添加了在桌面选择中显示 GIF/WebP 视频的支持，以展示桌面。已为 Plasma、GNOME、Niri 和 COSMIC 启用
  * 在桌面选择中添加了对 JPEG XL 的支持，以减少图像大小
  * Cachy-Update 现在对 GNOME 和 KDE 安装默认启用
  * 改进了微码安装逻辑——现在会检测硬件并安装正确的微码，而不是安装两者然后移除不需要的
  * 改进了 EFI 分区太小时错误消息
  * 将桌面环境列表从简单易用的设置排序到更高级的设置如 WM
* **CachyOS-Welcome:**
  * 添加了一个按钮，可以轻松安装和启用"Winboat"，以便轻松使用 Windows Docker VM
  * 在 DNS 选择中添加了对 FFMUC DNS 服务器的支持
  * 添加了乌克兰语翻译
* **chwd:** 大幅减少了 NVIDIA dGPU 配置的 initramfs 大小
* **linux-cachyos:** 不再生成 `0001-cachyos-base-all.patch`，现在在 Linux 仓库中为每个补丁内核版本生成一个版本
* **cachyos-rate-mirrors:** 通过在评级镜像之前进行正确检查，大幅改善了中国和俄罗斯用户的体验
* **cachyos-settings:** 添加支持根据时区自动设置无线监管区域
* **website:** 网站设计已重新设计和改进，以遵循更现代的标准
* **GitHub:** 在重要的 GitHub 仓库中添加了问题模板，以提高 bug 报告的质量并为用户提供指导
* **Mirrors:** 新镜像：俄罗斯（jura12, cachy-arch.ru）、瑞典（Zyner）和加拿大（All Things Linux）

**Fixes:**

* **Installer:**
  * 由于需要 bcachefs-dkms，从文件系统选择中移除了 bcachefs 支持
  * 修复了特定设备使用 LUKS2 时的加密问题
  * 修复了启用"ly"显示管理器的问题
* **cachyos-settings:** `cachyos-bugreport.sh` 现在会隐藏 IP、用户名、主机名和 MAC 地址
* **chwd:**
  * 通用掌机配置文件和改进的掌机 GPU 支持
  * Lenovo 掌机现在启用了 fwupd


**掌机版更新日志：**

* **gamescope-session:** 用 gamescope-session-cachyos 替换了 gamescope-session-plus，后者是从 Valve 的 gamescope-session 分支而来
  * 为 Steam Deck 和 Lenovo Legion Go 设备启用了固件更新
* **plasma-login-manager:** 用 plasma-login-manager 替换了 SDDM 作为登录管理器
* **bootloaders:** Limine 现在被选为默认，带有自动快照。systemd-boot 仍然可以选择
* **Installer:** 将掌机 Calamares 与桌面版 calamares 合并
* **ISO:** ISO 现在使用 Wayland 而不是 X11

26.01
----

**Features:**

* **Installer:**
  * 将引导加载器选择移至 Calamares；管理现在整合到一个包中。
  * 架构检测现在在基础系统安装**之前**执行，以减少下载大小。
  * GRUB 现在使用 LUKS2 进行加密。
  * 向 pacman 传递 --needed 以避免安装两次包。
  * 对 NVMe 上的 Btrfs 使用单级压缩
  * 从 Wayland 桌面环境中移除了 xorg 依赖。
* **ISO:**
  * ISO 环境切换为使用 `plasma-login-manager`。
  * ISO 现在包含 Stable 和 LTS 内核。默认选择 Stable 内核。
  * ISO 会话从 X11 切换为 Wayland。
* **Netinstall:**
  * Plasma 安装现在使用 `plasma-login-manager` 而不是 SDDM。
  * Niri 现在使用 `noctalia-shell` 和更新的 dotfiles。
  * 清理了 GNOME 安装过程。
* **Slides:** 修复了 Calamares 幻灯片中的拼写错误，并添加了展示 Wiki 的新幻灯片。
* **Mirrors:** 镜像状态页面（<https://packages.cachyos.org/mirrors>）现在显示 CachyOS 镜像的同步状态。
* **cachyos-settings:** 为 NVIDIA 模块启用了 `EnableAggressiveVblank`。这减少了低延迟显示中断在中断上半部花费的时间。
* **chwd:**
  * 安装 `nouveau-fw` 以在 Nouveau 中为 NVIDIA Kepler 系列显卡启用 VA-API 支持。
  * 为几块新的 AMD GPU 添加了 AI-SDK 支持。
  * 用 `steamos-manager` 和 `inputplumber` 替换了 HHD。
* **Proton-CachyOS:**
  * 添加了 FSR4 MLFG（机器学习帧生成）支持；使用 `PROTON_FSR4_[RDNA3_]UPGRADE` 时自动启用
  * 添加了 `d7vk` 模块支持。可通过 `PROTON_DXVK_DDRAW=1` 启用
  * 导入了 DualSense 触觉反馈补丁
  * 添加了 `WINE_BLOCK_HOSTS` 以防止 Wine 连接到特定域名
  * 在 NVIDIA dGPU 上使用 `winewayland` 时自动启用 `ENABLE_HDR_WSI=1`
  * 修复了使用 `winewayland.drv` 时的键盘布局问题
  * 移除了一个长期存在的补丁，该补丁导致 1% low FPS 下降
  * 修补了 `protonfixes` 以更好地处理 DLSS 预设选择和 `libxess_dx11.dll` 重定向
  * proton-cachyos-slr 现在在"gaming-meta"中用作默认。仍然支持原生版本。


**Fixes:**

* **Limine:** 将引导分区大小增加到 4192MB，以容纳 `limine-snapper-sync` 的高要求。
* **Installer:** 
  * 当使用"并行安装"或"替换分区"选项且 EFI 分区太小时，安装程序现在会阻止/防止继续。
  * 修复了一个问题：选择桌面并前进一步后，再返回选择另一个桌面会导致两者都被选中。
* **chwd:** 移除了强制 `libva-nvidia-driver` 的环境变量，因为它在双 GPU 系统上导致问题。
* **cachyos-hello:** 修复了 cachy-update 显示为禁用但实际上已启用的问题。
* **Controller:** 由于更新输入规则到最新版本，修复了几个控制器的输入问题。
* **Framework 16 (Zen5):** 修复了向 calamares 写入时会话冻结的问题。

25.11
----

**Features:**

* **ISO/Installer:** 添加了 Orca 和 espeak-ng 以提高可访问性
* **initcpiocfg:** 在支持的配置上启用了 systemd 钩子
* **Netinstall:** Hyprland dotfiles 已被移除
* **pacstrap:** 如果选择 `bcachefs` 作为文件系统，则安装 `bcachefs-dkms`
* **Calamares:** 添加了对 plasma-login-manager 和 cosmic-greeter 的支持
* **Cosmic:** 从 SDDM 切换为 cosmic-greeter
* **Fonts:** 改进了亚洲用户的字体
* **chwd:**
  * 在支持的 GPU 上安装 `intel-media-sdk` 和 `vpl-gpu-rt`
  * 为 Fermi GPU 启用了 Nouveau NvBoost
  * 移除了对 390xx 旧版 NVIDIA 驱动的支持
  * 添加了对 Xbox ROG Ally/X 的支持
* **cachyos-hello:**
  * 移除了内部包安装器；改为打开 CachyOS 包安装器
  * 为 GUI 功能添加了 CLI 接口
  * 各种 ISO 版本检查修复
* **cachyos-settings:** zram-generator：移除了对不可压缩页面的压缩
* **Proton-CachyOS:**
  * 添加了 `dxvk-gplasync` 作为替代 DXVK。可通过 `PROTON_DXVK_GPLASYNC=1` 启用
  * 使用 `PROTON_FSR4_UPGRADE` 时添加了 `DISABLE_LAYER_MESA_ANTI_LAG`
  * 引入了多个 **Wayland 修复**（全屏偏移、死键、DPI 行为、视频输出调整）和 `winewayland.drv` 改进
  * 引入并调优了 **每游戏着色器缓存** 行为和更大的着色器缓存（特别是 NVIDIA）
  * 添加了 FSR3 和 XeSS 渲染器升级

**Fixes:**

* **Limine:**
  * 修复了在损坏的 UEFI 上安装 Limine 时不注册条目的问题
  * 使用 systemd 版本的 `btrfs-overlayfs` 钩子
* **Calamares:** 从 XFS 挂载设置选项中移除了 `attr2`
* **chwd:** 禁用了 T2 芯片的 USB 以太网接口

25.08
----

**Features:**

* **Services:** 添加了 **packages.cachyos.org**，一个与 Arch Linux 网站等效的包搜索工具，可选择排除 CachyOS 包。
* **Kernel:** 安装程序现在在安装后额外安装 **linux-cachyos-lts** 作为第二/备用内核。我们仍推荐使用 Stable 内核。
* **ISO:** 由于 Stable 内核的持续问题，将实时 ISO 的内核从 Stable 切换为 LTS，提高了引导可靠性。
* **Desktop:** 添加了 **Niri** 作为桌面选项，包括一些预配置的 dotfiles。
* **NVIDIA:** 在支持的硬件上启用了 **S0ix** 睡眠，用于现代低功耗待机。
* **GRUB:** 当根文件系统使用 **Btrfs** 时，可引导快照现在会自动启用和设置。
* **Tweaks:** 将 **Cachy-Update** 集成到欢迎应用的 Tweaks 页面。Cachy-Update 添加了计时器和系统托盘指示器以通知用户更新，并让他们点击即可更新。
* **Proton-CachyOS:**
    - 添加了 DLSS dll 下载器（版本 **310.3.0**），类似于 FSR4 下载器。使用 `PROTON_DLSS_UPGRADE=1` 环境变量启用。
    - 添加了 `PROTON_DLSS_INDICATOR=1` 环境变量以启用 DLSS hud。
    - 添加了 XeSS dll 下载器（版本 **2.1.0**），类似于 DLSS 下载器。使用 `PROTON_XESS_UPGRADE=1` 环境变量启用。
    - 添加了 `PROTON_FSR4_RDNA3_UPGRADE` 用于 RDNA3 GPU。与 `PROTON_FSR4_UPGRADE` 功能相同，但还会设置一些其他必要变量。
    - 添加了 Proton 中缺失的 Nvidia 库的完整实现。应有助于启用以前禁用的选项，如 PhysX。您也可以使用 `PROTON_NVIDIA_NVCUDA`、`PROTON_NVIDIA_NVENC`、`PROTON_NVIDIA_NVML` 和 `PROTON_NVIDIA_NVOPTIX` 单独启用它们。
    - 添加了每游戏着色器缓存，默认启用，可使用 `PROTON_LOCAL_SHADER_CACHE=0` 禁用。着色器将缓存在每个游戏的 `<steamlibrary>/shadercache/<appid>` 下，类似于启用着色器预缓存时。由于每个游戏的着色器缓存重建会出现卡顿，但缓存的着色器不会因缓存大小限制而被驱逐。
    - 添加了 [dxvk-sarek](https://github.com/pythonlover02/DXVK-Sarek) 作为旧 GPU（不支持 Vulkan 1.3）的可选 DXVK 替代品。它使用 `async` 分支，因此**不应**与使用反作弊的游戏或多人游戏一起使用。警告已给出。使用 `PROTON_DXVK_SAREK=1` 启用。
    - 添加了 `PROTON_FSR3_UPGRADE` 以将 FSR 3.1 DLL 升级到更新版本。

**Fixes:**

* **Limine:**
    - 修复了在 MBR 系统上选择 **/boot** 挂载点作为引导位置时 `limine bios-install /dev/sdaX` 错误。
    - 修复了未初始化的 `bootLoader` 路径值，这导致在引导加载器位置未明确选择时 MBR 系统安装失败。
    - 添加了关于在引导分区上使用 **bios-grub** 标志的警告，这可能导致"Stage 3 file not found"错误。
    - 修复了 BIOS 安装的原生与 Windows 双引导。
    - 修复了使用 **GNOME (GDM)** 时 Btrfs 快照无法启动的问题。
* **Launch Installer:** 如果 ping **cachyos.org** 失败，添加了在线检查的备用 IP。

25.07
----

**Features:**

- **Shell:** 用户现在可以在安装时选择 fish、zsh 和 bash 之间的 shell。Fish 保持默认启用。
- **chwd:** 为旧版 NVIDIA 驱动安装 plasma-x11
- **Netinstall:** 在 KDE Plasma 和 Gnome 中添加了 fwupd
- **mesa-git:** 添加了对 AMD Anti Lag 的支持
- **firefox:** 引入了一个名为"firefox-pure"的替代 firefox，其中包括 userjs 配置的改进。此外，还添加了"cachyos-firefox-settings"，可以安装在 firefox 之上。
- **Proton-CachyOS:**
  - 导入了上游 wine-wayland 提交
  - 添加了"PROTON_FSR4_UPGRADE"环境变量，将自动下载最新的 FSR4 DLL 并替换它，以在支持 FSR 3.1 的游戏上自动升级
  - 添加了许多 Wine 10.0 之后发布上游 Wine 的 Wayland 相关补丁。
  - 添加了帮助更好反作弊集成的补丁。感谢 NelloKudo
  - 为 vkd3d-proton 和 wine 添加了 AMD 的 Anti Lag 2 补丁
  - 将 umu-protonfixes 更新到最新提交

**Fixes:**

- **Keyring:** 改进了密钥环安装的处理，以避免问题并进行多次重试。
- **systemd-oomd:** 禁用了 systemd-oomd，因为它与 le9 一起处理时有问题，并且过早地杀死了应用程序

**掌机版更新日志：**

- **handheld-settings:** 将 SteamOS 的几个 tweak 导入到掌机版
- **pipewire:** 将最小量子设置为 256
- **SteamDeck-OLED:** 为 Steam Deck OLED 安装 galileo-mura
- **Lenovo Legion Go S:** 添加了对 Lenovo Legion Go S 的支持

25.05
----

**Features:**

- **ISO:** 在 ISO 启动期间添加了自动检测，以识别系统的 NVIDIA GPU 并加载适当的模块（例如 nvidia-open、nvidia），为 10xx 系列及更早版本提供更好的支持。
- **Plymouth:** 添加了新的 Plymouth 动画。
  - 感谢 Eren（[https://github.com/erenyldz89](https://github.com/erenyldz89)）的工作！
- **Browser:** Cachy-Browser 已弃用。我们现在提供 Firefox 作为默认预安装的浏览器。迁移配置文件到 Firefox（及其分支）的指南可以在这里找到：[https://wiki.cachyos.org/zh/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox](https://wiki.cachyos.org/zh/support/faq/#migrating-your-profile-from-cachy-browser-to-firefox)
- **netinstall:** 在 KDE 安装中添加了 kcalc、filelight、plymouth-kcm 和 kio-admin。
- **mkinitcpio:** 默认禁用了备用 initramfs。这将节省大量空间。
- **Mirrors:** 在孟加拉国添加了新的 10 Gbps 镜像。感谢 Limda 托管！
- **Proton:**
  - 重新基于 **Proton CachyOS 9.0** 的几乎所有补丁。
  - 为 Steam Linux Runtime 构建启用了 Wayland 驱动。使用 `PROTON_ENABLE_WAYLAND=1` 启用。感谢 [GloriousEggroll](https://github.com/GloriousEggroll) 使其成为可能。
  - 添加了许多 Wine 10.0 之后发布上游 Wine 的 Wayland 相关补丁。
  - 修复了 Wayland 驱动和 Vulkan 游戏的各种问题。感谢 [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty) 的所有辛勤工作。
  - 添加了 `amdxc64.dll` 的存根实现以启用 FSR4。使用 `FSR4_UPGRADE=1` 将 FSR3.1 游戏升级到 FSR4。再次感谢 [Etaash-mathamsetty](https://github.com/Etaash-mathamsetty)。说明：[https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4](https://github.com/Etaash-mathamsetty/wine-builds/releases/tag/fsr4)
  - 添加了 DualSense 相关补丁，以更完整的音频设备检测功能用于有线声音触觉。一些依赖该特定行为的游戏现在应具有该功能。感谢 [ClearlyClaire](https://github.com/ClearlyClaire) 的原始补丁和 [Exotic0015](https://github.com/Exotic0015) 自 **Proton CachyOS 9.0** 以来的研究。上游：[https://gitlab.winehq.org/wine/wine/-/merge_requests/7238](https://gitlab.winehq.org/wine/wine/-/merge_requests/7238)
  - 移除了 Dragon Age Inquisition 补丁，因为它不起作用。请暂时对该游戏使用 **Proton CachyOS 9.0**。
- **GRUB:** 添加了新的 GRUB 主题。感谢 [diegons490](https://github.com/diegons490/cachyos-grub-theme)。

**Fixes:**

- **Mirrors:** 修复了俄罗斯用户无法安装的问题。这是通过不使用 CDN77 来缓解的，俄罗斯已经开始阻止它。
- **kde-settings:** 在任务栏中禁用了 Discover 图标。
- **ddcutil:** 推送了 ddcutil 2.2.1 预发布版，以修复 AMD GPU 在观看 YouTube 视频时冻结的问题。

**掌机版更新日志：**

- **os-branch:** Game Mode 现在正确显示正在使用 CachyOS Linux。
- **audio:** 更新了 convolver 配置文件。
- **steamos-manager:** 用于 GPU 时钟和 TDP 管理、BIOS/底座更新、存储设备维护、外部存储格式化和 Steam Deck 的电池充电限制。
- **steamos-powerbuttond:** 此组件替换了标准 powerbuttond，以获得更好的睡眠体验。
- **jupiter-hw-support:** 更新到 20250501。

25.04
----

**Features:**

- **occt:** 在 ISO 中添加了 OCCT，以便进行压力测试的实时环境
  - 感谢 Marek 提供这个想法！

**Fixes:**

- **kernel:** 修复了 Asus 笔记本上的模块崩溃
- **limine:** Limine 现在安装了 mkinitcpio-limine-hook，并将自动创建引导加载器条目

**掌机版更新日志：**

- **audio:** 为 ROG Ally X 和 Legion Go 添加了音频配置文件
- **gamescope:** 用上游 gamescope 替换了 gamescope-plus

25.03
----

**Features**:

- **Bootloader:** 添加了对 Limine 引导加载器的支持
- **Bootloader:** 添加了对 Limine 引导加载器自动快照的支持
- **Samba:** 添加了"cachyos-samba-settings"包，以轻松设置 Samba 挂载
- **NVIDIA:** 为闭源 NVIDIA 模块重新启用了 GSP Firmware
- **Kernel:** 添加了对 Asus Armoury 驱动的支持
- **Secure Boot:** 改进了"sbctl-batch-sign"脚本，仅签名所需的文件
- **udev:** 恢复了使用 ntfs3 作为 NTFS 分区的默认驱动
  - Info: 默认使用 NTFS3 内核驱动导致一些用户出现问题。因此，我们再次恢复了它。
- **wine:** Wine 和 Wine-Staging 现在默认为 WoW64 和 NTSync
- **scx-manager:** 将 sched-ext GUI 管理器从 Kernel Manager 移出到其自己的应用程序
- **Hardware Support:** 添加了对 RDNA4、RTX 5070 Ti 和 5070 的支持。
- **Settings:** 添加了 DLSS Swapper 支持——这是一个脚本，自动更新并使用最新的 dlss 版本和预设
- **Package Updates:** linux-cachyos 6.14.0, NVIDIA 570.133.07, Gnome 48, Plasma 6.3.3, mesa 25.0.2, linux-api-headers 6.14.0, linux-tools 6.14.0

**Fixes**:

- **initcpiocfg:** 从 mkinitcpio 中移除了"crc32c-intel"模块添加——这已被弃用，现在默认为"crc32c"模块
- **chwd:** T2 MacBook 禁用 brcmfmac 卸载
- **chwd:** 不为笔记本电脑安装 NVIDIA 390.xx 驱动

25.02
----

**Features**:

- **Kernel:**
  - Propeller Optimization 现在应用于所有可用架构的默认 **linux-cachyos** 内核。
    - **注意：** 与 AutoFDO 结合使用，根据工作负载不同，可以提高约 10% 的性能。
- **NVIDIA:** 添加了对 Blackwell 架构的支持。
- **ISO:** 默认使用 nvidia-open 模块以提供 Blackwell 支持。Turing 之前 GPU 的用户应使用第一个或备用引导选项。
- **Settings:** 默认启用了 X11 会话的点击触控。
- **udev:** 使用 ntfs3 作为 NTFS 分区的默认驱动。
- **game-performance:** 运行游戏时禁用屏幕保护程序。
- **kernel-manager (sched-ext):** 添加了对服务器模式的支持。
- **kernel:** 添加了 AMD 首选核心功能的修复。
- **chwd:** 重新添加了 RTD3 的变通方法。
- **Package Updates:** linux-cachyos 6.13.0, NVIDIA 570.86.16, LLVM 19, glibc 2.41, mesa 24.3.4.

**Fixes**:

- **chwd:** 修复了带有 Intel 和 NVIDIA 硬件的混合笔记本电脑无法在 DaVinci Resolve 中使用 GPU 的问题。
- **glibc:** 添加了 CVE-2025-0395 的修复。
- **kernel-manager:** 如果可用，尝试为默认 Arch 内核安装预构建的 NVIDIA 模块。
- **kernel-manager:** 添加了额外检查，以避免在模块不可用时覆盖值。

**掌机版更新日志：**

- **hooks:** 再次允许使用原生编译的 Proton。
- **misc:** 多个更新和修复。

24.12
----

**Features**:

- Kernel:
  - AutoFDO 现在应用于所有可用架构的默认 `linux-cachyos` 内核
    - **注意：** 由于当前限制，性能提升目前很小。合并配置文件需要 LLVM 19，Propeller Optimization 也依赖它。我们预计 LLVM 19 和更多优化的配置文件将在年底可用，跟随 Arch Linux 采用 LLVM 19
- chwd: Rusticl 现在正确配置
- chwd: 改进了钩子调用期间的错误日志
- chwd: 修复了 VAAPI 驱动选择
- cachyos-settings: 添加了便于通过 Zink 运行应用程序的脚本
- Sysctl Configuration: 重新设计和优化了几个设置
- Kernel Manager: 添加了对 `scx_loader` 的支持，启用原生调度器切换
- Installer: Bluetooth 服务现在默认启用
- Netinstall:
  - 在已安装的包中添加了 `wireless-regdb`
    - 这配置连接使用适当的频道并解锁额外频道，可能提高网速
    - **注意：** 默认设置通用区域；建议自定义为您的区域以获得最佳性能
- **Package Updates:** NVIDIA 565.77, linux-cachyos 6.12.6, mesa 24.3.2, scx-scheds 1.0.8, zfs 2.2.7

**Bug Fixes**

- Installer: 安装日志不再生成调试终端窗口
- Partition Management:
  - 正确的 `umask` 设置确保 `/boot` 在没有足够权限时无法访问
- Launch Installer: 修复了互联网连通性检查

**Changelog Handheld Edition:**

- 更新了掌机相关包
- 修复了电源配置文件处理的问题
- 添加了对 WiFi 6 的支持

24.11
----

**Features:**

- thp-shrinker: 将零填充页面的 max_ptes_none 值设置为 80%。这将减少使用 THP always 时的内存使用，同时保持相同的性能
- NVIDIA: 如果用户自行切换到闭源驱动，GSP Firmware 现在会自动禁用
- chwd: NVIDIA: 为笔记本电脑启用 nvidia-powerd 服务，以达到最大可用 tdp
- proton-cachyos: DLSS Frame Generation 现在可以工作。预计未来在上游 proton 中也能工作
- kernel: AMD Cache Optimizer 现在已应用。具有双 x3d CCD 的 CPU 用户现在可以在频率或缓存核心之间切换
- kernel: amd-pstate: 为 Strix Point 反向移植了 amd-pstate 性能修复
- kernel: 添加了 amd rdna2 和 rdna3 gpu 上 tdp 问题的上游修复
- kernel: 添加了 5120x1440x240 配置显示器的时序修复
- kernel: 实验性 AutoFDO 优化内核在仓库中的"linux-cachyos-autofdo"下
- ISO: 添加了检查，如果用户运行掌机版并在不支持的设备上开始安装则警告
- ISO: 添加了检查，如果用户使用最新的 ISO，如果没有则警告他们

**Bug Fixes:**

- refind: partitioning: 从 3-way 分区布局更改为 2-way
- netinstall: 在 Plasma 安装中添加了 kdeplasma-addons
- calamares: 修复了使用 swap 分区分区时的问题

**Changelog Handheld Edition:**

- Rog Ally X Support 应该有所改进

24.10
----

**Features:**

- Package Updates: linux-cachyos 6.11.1, mesa 24.2.4, scx-scheds 1.0.5, python 3.12.7

**Bug Fixes:**

- sddm: 拉入了更新版本的 sddm 以修复 wayland 会话登录
- ISO: 添加了 xf86-video-amdgpu 以修复某些设置上的图形会话加载
- chwd: 修复了配置文件重新安装

24.09
----

**Features:**

- Packages: 使用 PGO 优化了一批包，如 LLVM、Clang、svt-av1 和 nodejs。例如，这使得 Clang 编译器快了 10%
- Repository: 仓库现在同步和更新更频繁，这意味着延迟更少。同步间隔已从每 3 小时减少到每小时。
- Repository: 从 2024 年 9 月 27 日开始，使用 -fpic 编译的包将自动启用 -fno-semantic-interposition。这可以为许多包提供性能提升。
- zlib-ng: 现在用作 zlib 的替代品
- sddm: 在 KDE 安装上，sddm 现在默认使用 Wayland 作为合成器。# Provide Migration changes in release post
- cachyos-settings: NetworkManager 现在使用 systemd-resolved 作为后端，有助于 DNS 缓存
- cachyos-settings: 使用 time.google.com 作为 timesync 服务器，以避免某些设置上的 timesync 问题
- gcc: 添加了 znver5 调优的修复
- gcc: 从 Clear Linux 拣选了补丁和标志
- glibc: 添加了"evex"补丁以及从 Clear Linux 拣选的内容
- wiki: Wiki 收到了许多新添加和重新设计
- chwd: 简化了设备处理
- chwd: 所有配置文件现在专为 PCI 设备设计
- chwd: 添加 --autoconfigure 以自动处理驱动安装
- Package Updates: linux-cachyos 6.11.0, mesa 24.2.3, Plasma 6.1.5, NVIDIA 560.35.03, calamares 3.3.10, QT 6.7.3

**Bug Fixes:**

- Launch-Installer: 添加了修复，在安装开始之前同步硬件时钟
- calamares: 添加了安装后卸载文件系统的修复
- keyring: 在安装开始之前清理并重新创建密钥环；这修复了罕见的密钥环问题
- sysctl: Core dumps 已再次启用
- chwd: 从 PRIME 配置文件中移除了 `libva-nvidia-driver`，以防止潜在冲突并提高与 Spectacle 等软件的兼容性
- cachyos-settings: 添加了 GNOME Wayland 崩溃的变通方法
- cachyos-fish/zsh-config: 移除了 wayland 特定的 quirks

**Changelog for Handheld Edition:**

- Ally/Ally X: HHD 被 inputplumber 替换，因为 hhd 没有正确使用内核驱动，这导致问题。
- 更新了掌机相关包

24.08
----

**Features:**

- chwd: NVIDIA 现在对支持的卡默认使用 open 模块
- Desktop: 在安装选项中添加了 Cosmic Desktop Environment
- NVIDIA: 最新的 560 Beta 驱动现在是默认；egl-wayland 已修补以修复 Firefox 和其他应用程序中的崩溃
- mirrors: CDN77 用带有全球缓存的对象存储赞助 CachyOS，显著提高了用户的连接速度
- mirrors: CachyOS 现在提供自己的 Arch Linux 镜像以避免同步问题，在安装期间设置为默认，并带有备用镜像
- SecureBoot: 在 Wiki 中引入了脚本和教程，以轻松支持 Secure Boot
- cachy-chroot: 添加了通过 fstab 自动挂载以简化 chrooting
- cachy-chroot: 实现了对 LUKS 加密的支持
- kernel-manager: 添加了对在 sched-ext 配置中设置 sched-ext 标志的支持
- kernel-manager: 引入了构建 nvidia-open 的选项
- kernel-manager: 添加了在配置页面记住上次使用的选项的选项
- Package Updates: linux-cachyos 6.10.5, mesa 24.2.0, Plasma 6.1.4, NVIDIA 560.31.02

**Bug Fixes:**

- chwd: 改进了基于设备名称的 PRIME 配置文件检测
- chwd: 由于某些设置上的问题，移除了 RTD3 变通方法
- cachyos-rate-mirrors: 在 Live ISO 上运行时禁用了镜像排名
- cachy-chroot: 修复了分区没有有效 fstype 或 uuid 时的崩溃（例如 Microsoft Recovery Partition）
- calamares: 重构了密钥环初始化
- kernel-manager: 修复了启用 LTO 内核和模块时构建自定义 pkgbase 的支持
- kernel-manager: 修复了密码提示延迟
- ISO: 用 amdgpu.modeset=1 替换了 radeon.modeset=1 以用于现代 GPU
- game-performance: 当配置文件不可用时防止失败

**Changelog for Handheld Edition:**

- device support: 添加了对 Ally X 的支持，感谢 Luke Jones
- libei: 实现了对 libei 的支持，替换了 libextest
- packagekit: 阻止了 packagekit 安装以防止通过 Discover 进行系统更新的问题
- hook: 添加了 pacman-hook 与原生编译的 Proton 版本冲突，避免潜在问题
- 更新了 jupiter-fan-control、steamdeck-dsp 和 Steam Deck 固件

24.07
----

**Features:**

- Repository: 引入了 Zen 4 优化仓库，这将用于 Zen4 和 Zen5 CPU
- ISO: 为 Zen4/Zen5 仓库添加了自动架构检查
- chwd: 为 AMD GPU 添加了 GC 支持，这有助于检测官方 ROCm 支持的 GPU
- chwd: 在支持的卡上使用 libva-nvidia-driver
- ksmctl: 引入工具启用/禁用 KSM：ksmctl --enable
- kernel: 对于"linux-cachyos"内核，现在有一个"linux-cachyos-dbg"包可用，其中包含用于调试目的的未剥离 vmlinux
- kernel: amd cpb boost 现在可用，power-profiles-daemon 已修补，如果设置了"powersave"配置文件，它将禁用 amd cpu 上的 boost
- kernel: 为 AMD SoC 的视频播放添加了省电补丁
- kernel-manager: 添加了对管理 sched-ext 调度器并通过 GUI 获取信息的支持
- steam/proton: 现在有一个"game-performance"脚本，可以添加到 steam 的启动选项中
- power-profiles: 在 AMD Pstate 支持的 CPU 上，最低 Linear 频率现在设置得更高，这可以改善延迟和 1% lows
- kwin: 添加了 tearing 的反向移植，这已经过测试。在 NVIDIA 上，它仅适用于原生 wayland 应用程序
- netinstall: Cutefish 已作为可安装的桌面环境被弃用
- Mirrors: 添加了奥地利和中国镜像，中国镜像由 TUNA 大学托管。这应该帮助很多中国用户
- Package Updates: linux-cachyos 6.9.9, mesa 24.1.3, NVIDIA 555.58.02, Plasma 6.1.2, LLVM 18.1.8

**Bug Fixes:**

- ISO: 将 copytoram 设置为 auto 而不是 yes
- ISO: 修复了笔记本电脑上 Live ISO 的睡眠
- Launch Installer: 在安装开始之前安装最新的 archlinux-keyring，以避免在 chroot 中获取 archlinux-keyring 时出现问题
- Mirrors Ranking: 在安装时仅排名 Tier 1 镜像
- pacman.conf: 移除未使用的 pacman 仓库
- cachy-chroot: 不显示 .snapshot 子卷
- Calamares: 不使用"Preservefiles"模块，因为用户报告了问题。

**Changelog for Handheld Edition:**

- 添加了配置文件以应用不同的缩放，'/home/$USER/.config/deckscale
- 使 GameMode 切换更健壮
- 更新了 Steam Deck 的 Wifi/Bluetooth 固件
- 为 GameMode 实现了自动挂载
- 为 Wine CPU Topology、HDR 和 Backlight 添加了 gamescope-session quirks
- 修复了刷新率选择
- 更新了 jupiter-hw-support、steamdeck-dsp、jupiter-fan-control、gamescope-session-git

24.06
----

**Features:**

- chwd: 引入了掌机硬件检测
- chwd: 引入了 T2 MacBook 支持
- chwd: 添加了网络驱动检测
- Installation: 添加了 MacBook T2 支持
- ISO: 添加了 cachy-chroot。这是一个帮助用户 chroot 到系统的脚本。
- ISO: 切换到 Microcode Hooks；这需要使用的最新 Ventoy 版本（1.0.98）
- ISO: 启用 copytoram；不再需要禁用，因为我们不再提供离线安装
- filesystem: BTRFS 现在是默认选择的文件系统
- netinstall: 使用 ufw 而不是 firewalld
- Calamares: 更新品牌幻灯片
- Slides: 更新了最新更改
- Package Updates: linux-cachyos 6.9.3, mesa 24.1.1, xwayland 24.1, NVIDIA 555.52.04, Plasma 6.0.5

**Bug Fixes:**

- Calamares: umount: 再次启用 emergency
- Qtile: 多媒体控制现在正常工作
- NVIDIA: 启用 Wayland 上正常睡眠所需的选项和服务
- netinstall: 从安装中移除 b43-fwcutter
- netinstall: 用 hyprland 替换 hyprland-git
- netinstall: 从选择中移除 linux-cachyos-lts 以避免缺失模块的问题
- Calamares: Shellprocess: 在安装密钥环之前移动镜像排名

**Changelog from Experimental Handheld Release:**

- 默认使用 KDE Vapor 主题（SteamOS 主题）
- 默认文件系统：BTRFS
- 默认内核：linux-cachyos-deckify
- SDDM 现在使用 Wayland
- HHD 的环境标志以减少延迟
- 添加了内核参数以改善 Game Mode 切换行为
- 用户名现在可以编辑
- 硬件检测根据使用的设备配置和安装所需的包
- Mallit Keyboard 现在使用深色模式
- Valve 的 Powerbuttond 用于正确睡眠

- Shortcuts can now be added to Steam
- Updated scx-scheds to latest git commit, providing the latest enhancements for the LAVD Scheduler
- Added automount to cachyos-handheld
- CachyOS can now perform Steam Deck BIOS updates on the Steam Deck

24.05
----

**Features:**

- Filesystems: Introduce Bcachefs as a filesystem option
- pacstrap: Add detection if Bcachefs is used and install corresponding Bcachefs-tools
- CachyOS-AI-SDK: Introduce new install option to provide a OOB NVIDIA SDK Setup
- CachyOS-Deckify: Provide variant for Handhelds (experimental), see [here](https://discuss.cachyos.org/t/information-experimental-cachyos-deckify/203) for more details
- BTRFS: Automatic Snapper for snapshots, can be installed from within the CachyOS hello app.
- ISO: Drop Offline Installer
- Package Updates: Python 3.12, gcc 14.1.1, mesa 24.0.6, xwayland 24.1rc2, NVIDIA 550.78

**Bug-Fixes:**

- settings.conf: Move hardware detection before netinstall
- pacstrap: Use btrfs-assistant instead of btrfs-assistant-git
- plymouth: remove plymouth hook on zfs + encryption
- ISO: Add various config files for KDE, to avoid getting screen locking during installation
- services-systemd: Properly enable fstrim.timer
- umount: Disable emergency to avoid issues with the zfs installation
- shellprocess: Cleanup leftovers from the offline installation

24.04
----

**Features:**

- Plymouth: Use plymouth to provide a themed boot animation
- ISO: Switch back to X11 due to issues when setting the keyboard layout in calamares
- rEFInd: New partitioning layout (separate /boot and /boot/efi)
- netinstall: KDE: Install xwaylandvideobridge by default
- netinstall: Use lightdm instead of ly for various Desktop Environments, due to a bug in ly
- systemd-boot: Use @saved for systemd-boot to allow it to remember the previously selected boot entry
- cachyos-keyring: Refactor cachyos-keyring package and provide a cachyos-trusted keyring
- ISO: Use ZSTD 19 Compression for the mkinitcpio image of the ISO
- Package Updates: xz 5.6.1-3, linux-cachyos 6.8.2, pacman 6.1.0-5, mesa 24.0.4, Plasma 6.0.3, nvidia 550.67 and cachyos-settings 39-2

**Bug-Fixes:**

- Autologin: Fixed the autologin option when used together with sddm
- xz: Provide a patched xz package
- libarchive: Mitigate commit from malicious xz actor
- cachyos-settings: udev-rule: don't set watermark_scale_factor to 125, since it significantly increases RAM usage
- calamares: pacman-keyring: Use simpler method to integrate the keyring into the installation

24.03.1
----

**Features:**

- netinstall: Remove extra kernels in the netinstall selection to avoid confusion by users. Other custom kernels can be installed via Kernel Manager
- Kernel Manager: NVIDIA Modules are automatically installed when detected, Rebased for QT6, Fixed custom names when using LTO Option
- Package Installer: Rebased on QT6, updated for pacman 6.1
- Package Updates: linux-cachyos 6.8.1, pacman 6.1, mesa 24.0.3, Plasma 6.0.2, llvm 17.0.6

**Bug-Fixes:**

- NVIDIA: patched nvidia module to take the ownership of nvidia.drm.modeset earlier to avoid issues on nvidia graphics
- Refind: Don't install the lts kernel to avoid issues
- shellprocess: Remove the liveusers directory completely

24.03
----

**Features:**

- ISO: Plasma 6 is now shipped in the ISO and uses Wayland as default, GNOME ISO got dropped to avoid confusion about netinstall
- Calamares: Rebased for QT6
- refind: Add f2fs and zfs as option including luks2 encryption
- mirrors: We provide now 2 global CDNs. One hosted by Cloudflare R2 and one hosted by Digital Ocean
- mirrorlist: Fetch the online installer directly from cdn to provide a faster delivery
- initcpiocfg: Use the new microcode hook for early loading the ucode
- bootloader: Dont load the microcode with the bootloader anymore
- Package Updates: linux-cachyos 6.7.9, mesa 24.0.2, zfs-utils 2.2.3

**Bug-Fixes:**

- pacstrap: Do not install config packages to provide the user a more clean selection of the installation
- shellprocess_pacman: Also copy the ranked cachyos-v4-mirrorlists to the target

24.02
-----

**Features:**

- refind: Change layout from /boot/efi to /boot to provide more options of filesystems and encryption
- Live-ISO: Cleanup and Sync the Live-ISO
- Launch Installer: Add recommendation for the online installation
- shell-configs: Add option to disable fastfetch when starting the terminal and add an "update" alias
- netinstall: Add phonon-qt5-vlc to kde
- Package Updates: linux-cachyos 6.7.5, mesa 23.3.5, gcc 13.2.1-12, glibc 2.39, mesa 24.0.1, nvidia 550.54.14

24.01
-----

**Features:**

- x86-64-v4: Autodetection and enabling the repository at installation
- linux-cachyos: the sched-ext scheduler framework is now provided in the default kernel
- xwayland: Provide explicit sync patches as default
- Package Updates: linux-cachyos 6.7, mesa 23.3.3, gcc 13.2.1-8, xorg-xwayland 23.2.4

**Bug Fixes:**

- chwd: For Ada Lovelace Nvidia cards the nvidia modules get directly packed into the initramfs to avoid issues with the early kms

23.12
-----

**Bug-fixes:**

- zfs: Add compatibility=grub to the pool options to ensure the compatibility
- grub/xfs: Add a patch to grub to have compatibility with the new xfs bigtime default
- netinstall: xdg-desktop-portal-hyprland instead of xdg-desktop-portal-hyprland-git

23.11
-----

**Features:**

- nvidia: Use nvidia module instead of dkms
- Calamares synced with upstream
- Package updates: linux-cachyos 6.6.1, nvidia-utils 545.29.02, mesa 23.2.1, zfs-utils 2.2.0, mkinitcpio 37

**Bug-fixes:**

- nvidia-hook: Added nvidia-hook back to avoid issues at installation time with the new module
- netinstall: Packages got renamed due the recent changes at the KF5 packaging
- netinstall: xdg-desktop-portal-gnome got added to the GNOME Installation

23.09
-----

**Features:**

- systemd-boot: Default to luks2
- netinstall: Provide a own category for CachyOS Packages
- Calamares synced with upstream
- Package updates: linux-cachyos 6.5.3, nvidia-utils 535.104.05, mesa 23.2.7

**Bug-fixes:**

- shellprocess_sdboot: Avoid using "sudo", when generating the boot entries at the installation process

23.08
-----

**Features:**

- Calamares synced with upstream
- Package updates: linux-cachyos 6.4.10, nvidia-utils 535.98

**Bug-fixes:**

- Keyring got updated and works now correctly

23.07
-----

**Features:**

- CachyOS-Settings includes now "bpftune", which automatically tweaks the network settings depending on the usage
- CachyOS-Qtile-Settings: Quality of Life changes, better icons, ...
- Package updates: linux-cachyos 6.4.2, cachy-browser 115.0.1, mesa 23.1.3,

**Bug-fixes:**

- rate-mirrors got fixed
- chwd (Hardware Detection) got multiple fixes
- fixed installation of nonfree drivers for hybrid setup in the installer
- fixed Calamares freezes, which happened in some rare configurations, mainly VM
- Slides: Slide 6 typo fix

23.06
-----

**Bug-fixes:**

- Offline Installation: Fix calamares

23.05
-----

**Features:**

- CachyOS Git Migration layout is now reflected in the installation
- chwd (mhwd) got multiple fixes
- Pacman: We added a feature, which makes it possible to provide a message to our users before updating
- Calamares got synced with upstream
- Package updates: linux-cachyos 6.3.4, cachy-browser 113.0.1, mesa 23.1.1, python 3.11

**Bug-fixes:**

- netinstall: minimal fixes due package changes
- Slides: Slide 6 got updated to reflect the latest changes

23.04
-----

**Features:**

- Introduce the Qtile desktop environment
- Reworked mhwd: Rust rewrite; Simplified profiles for GPUs and network cards; Removed bunch of ancient code
- Package updates: linux-cachyos 6.2.12, cachy-browser 112.0.1, mesa 23.0.3, zfs-utils 2.1.11

**Bug-fixes:**

- f2fs: Remove "atgc" mount options since it has issues with systemd

23.03.1
-------

**Features:**

- Package updates: linux-cachyos 6.2.7, cachy-browser 111.0

**Bug-fixes:**

- Calamares got fixed with the lightdm displaymanager due faulty calamares upstream commits
- Offline installation keyring issue got fixed
- Refind: Use linux-cachyos-lts as default. Current 6.2 seems not to work well together with refind

23.03
-----

**New Features:**

- Added the refind bootloader
- Automatic Nvidia driver installation using MHWD
- Encryption support for ZFS installation
- Added Hyprland to netinstallation
- CachyOS-KDE-Settings now uses the KDE default theme, but the CachyOS Themes are still preinstalled and available for use
- Package updates: linux-cachyos 6.2.2, mesa 23.0.0, cachy-browser 110.0.1, plasma 5.27.2
- Fully reworked and improved the bootloader calamares module
- The ISO gets now signed with a GPG key
- MHWD got improved and updated
- Synced Calamares with upstream

**Bug-fixes:**

- The "replace partition" option now offers a filesystem selection
- Fixed a typo in slide 3
- nouveau got fixed and does now proper load the module
- MHWD: Use modesetting for INTEL/ATI and Nouveau
- Removed the zfs hook from mkinitcpio on the live iso, which caused issues when booting
- You can download the update from our mirrors on SourceForge.

23.02
-----

**New Features:**

- The cachyos-community-v3 repo has been added
- Budgie, Mate, and LXDE desktop environments have been added to the Netinstallation
- Bluetooth.service is now enabled by default
- F2FS and grub are enabled and working again
- Package Updates: linux-cachyos 6.1.10, mesa 22.3.4, zfs-utils 2.1.9, glibc 2.37, cachy-browser 109.0.1

**Bug-fixes:**

- Rate-mirrors now fall back to unranked mirrors if it fails to rate them
- cachyos-rate-mirrors has a longer fetch-mirrors-timeout
- Github has been added to the hosts to avoid mirrorlist issues
- Boot entries for BIOS have been updated in syslinux

23.01
-----

**Features:**

- Calamares Slides got reworked and updated
- UKUI Desktop Environment got added to the Netinstallation
- Cinnamon Desktop Environment got added to the Netinstallation
- Cmdline: zswap is now disabled as default because CachyOS provides zram as default
- Calamares updated to the latest commit
- LLVM 15 is now shipped as default
- Package Updates: linux-cachyos 6.1.7, mesa 22.3.3, Plasma 5.26.5, llvm 15.0.7, gcc 12.1.1, binutils 2.40, zfs-utils 2.1.8, nvidia 525.85.05
- CLI Installer got updated

**Bug-fixes:**

- remove-ucode shellprocess does also run now at the offline installation
- pamac got removed from the netinstall
- The ranked cachyos mirrors gets now correctly copied to the install target
- power-profile-daemon don't gets enabled anymore as default

22.12
-----

**Features:**

- New GRUB background at the ISO bootloader
- memtest is now included for UEFI Systems
- CachyOS-sddm-theme got added to the KDE Installation
- Automatic version script added when creating the ISO
- Calamares updated to the latest commit
- The mirrors are now ranked with "cachyos-rate-mirros", which ranks our mirrors and the arch ones
- Packages Update: 6.1.1 Kernel, mesa 22.3.1, plasma 5.26.4,...
- The Kofuku Desktop Environment got removed
- extra ISO with llvm 15 included to provide support for newer AMD Cards

**Bug-fixes:**

- Calamares got fixed when using GNOME as ISO
- zfshostid does now work proper for the offline and online installation
- Add "kms" hook to the initcpiocfg module to follow archlinux defaults
- And more ISO fixes

22.11
-----

**Features:**

- Calamares and its config are shipped in one package
- Complete Cleanup of the packages in the netinstall
- Add a module which automatically removes the not needed ucode
- required RAM decreased to 2.5GB
- Packages which are required for btrfs, are now only installed for btrfs
- Calamares updated to the latest commit
- The ISO Bootloader has now a background
- Common package upgrades (mesa, kernel, ...)
- Replace systemd-network with networkmanager

**Bug-fixes:**

- qemu-quest-agent.service got removed from the ISO
- copytoram got completely disabled, it breaks the offline installation
- mkinitcpio.conf got updated
- And more ISO fixes

22.10
-----

**Features:**

- Pacman uses now Architecture=auto for x86-64-v3 installation, since we added a patch that pacman does autodetect x86-64-v3
- Pacman does show now, from which repo a package was installed
- Bootloader selection auto detect if EFI is present, if not it will default to grub
- Swap choice has been disabled now as default, since zram gets automatically dynamically generated
- Calamares updated to the latest commit
- Minimum RAM requirement has been set to 4GB
- cachyos-grub-theme got removed

**Bug-fixes:**

- SSD and hdd fstab detection has been disabled until there is a upstream fix
- double BTRFS subvolume has been fixed
- Added missing microcode to the ISO grub bootloader
- Added a fallback bootmode, which does not set any modeset (nomodeset)
- And more ISO fixes

22.09
-----

**Features:**

- Calamares is now on the latest 3.3 branch. Its brings bugfixes and new features to calamares
- TUI-Installer is now included in the GUI ISO, you can use it with "cachyos-installer"
- Calamares does now auto detect, if the target filesystem is a ssd or hdd and adjust to it the fstab options
- Nvidia for latest gpu's (starting at 9xx) has now a own boot entry, to avoid issues with nouveau
- fstab and zfs mount options got updated
- FireFox won't be installed as default anymore since cachy-browser is installed as default

**Bug-fixes:**

- cachyos-gaming-meta has been removed from the netinstall module to avoid issues at the installation process
- netinstall packages has been updated and got some fixes
- OpenBox installation has been fixed
- usual translation fixes

22.07
-----

**Features:**

- Boot-loader selection: User can now choose on the online installation between grub and systemd-boot
- At online installation will now always the newest calamares installed, which helps to do bug fixes on the "air"
- Calamares has now a mhwd module which automatically installs the needed drivers (free drivers)
- Calamares has new picture slides at the installation
- fstab and zfs mount options got updated
- HiDPI support

**Bug-fixes:**

- The locales bug in calamares got fixed
- F2FS has been removed for the grub boot loader since it is currently not working (calamares issue), it can be still with systemd-boot used
- Calamares shows now the correct default filesystem
- Gnome ISO got fixed
- Missing packages at the live ISO has been added for the offline installation
- btrfs swap luksencryption got fixed
- usual translation fixes

22.06
-----

Following known bugs has been fixed:

- Install failed when a generic CPU was used
- KDE did automatically mount zfs partitions which resulted that the auto login into the ISO did not worked anymore

**Improvements:**

- The firewall from the server has been corrected, cloudflare did blocked users as "bots", which resulted then into a error at installing
- Added theming support for Gnome, XFCE, OpenBox
- Updated our wiki

**_CachyOS - Kernel - Manager_**
Also we are excited to announce our CachyOS-Kernel-Manager.
Their you have the possibility to install the kernel from the repo and also configure with a GUI your own kernel build which makes is very easy to customize it to his own suits.

Following options you can select for a kernel compile:

- Scheduler (BMQ, BORE, cacULE, cfs, PDS, TT)
- NUMA disabled or enabled
- KBUILD CFLAGS (-O3 or -O2)
- Set performance governor as default
- Enable BBR2
- Tickrate (500Hz, 600Hz, 750Hz, 1000Hz)
- tickless (idle, perodic, full)
- disable MQ-Deadline I/O Scheduler
- disable Kyber I/O Scheduler
- Enable or disable MG-LRU
- Enable or disable DAMON
- Enable or disable Speculative page fault
- Enable or disable LRNG (Linux Random Number Generator)
- Apply Kernel automatic Optimization (Does automatically detect your CPU March)
- Apply Kernel Optimization selecting (You will see a list of different CPU-Marches and can select with a number yours)
- Disable debug (it lowers the size of the kernel)
- Enable or disable nf cone
- Enable LTO (Full, Thin, No)

22.05
-----

CachyOS was founded a year ago. After almost one year of development, we are really proud to announce our first Stable Release of GUI Installer.
We spent a lot of time investigating repo management, kernel development, infrastructure, theming, ... and finally put them all into the CachyOS GUI Installer.
All the features we worked on and implemented into the Installer are just trying to offer users a completely customizable experience.

The most exciting changes are that we use now for the online install pacstrap which provide then a complete clear installed environment and we do support a complete native support for the zfs filesystem

Since Discord restrict the length of the messages the full announcement can be found here:

<https://discuss.cachyos.org/t/cachyos-gui-installer-changelog/>

Download can be found here:
<https://mirror.cachyos.org/ISO/kde/220522/>
<https://sourceforge.net/projects/cachyos-arch/>
