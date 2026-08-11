---
title: CLI Installer
description: Changelogs CLI Installer
ai_translated: true
---
# 0.8.4

## Features ✨

- **改进的分区处理：** 对安装程序处理分区的方式进行了重大重构和改进，提高了准确性和可靠性。
- **内核参数生成：** 安装程序现在会根据检测到的分区方案自动生成内核参数。
- **增强的 `gucc` 库：** `gucc` 库已得到显著增强，现在包含 refind 安装和配置功能。

## Chores 🧹

- **Clang-Format 和 Clang-Tidy：** 通过应用 clang-format 和 clang-tidy 提高了代码库的一致性和质量。
- **使用 String Views 重构：** 代码库的多个区域现在使用 string_view 字面量以提高性能和可读性。
- **Doctest 实现：** C asserts 已被 doctest 取代，以进行更健壮和更有信息量的测试。
- **重构测试：** 测试套件已重构以提高清晰度和可维护性。
- **`gucc` 中的 Refind 处理：** Refind 相关代码已重构并移至 `gucc` 库中，以提高组织性和可维护性。

## Bug Fixes 🐛

- **Btrfs 子卷检测：** 解决了检测现有 btrfs 子卷的问题。
- **分区信息准确性：** 改进了分区信息的准确收集和显示。
- **Refind 的根挂载点：** 修复了影响 refind 使用的根挂载点的错误。
- **UUID 检测：** 改进了初始化过程中检测分区 UUID 的流程。
- **Meson 构建修复：** 解决了 meson 构建过程中遇到的问题。
- **Btrfs 子卷追加：** 修复了开发环境中追加 btrfs 子卷相关的错误。
- **预定义配置中的 Rootfs：** 解决了源自预定义配置的分区方案的 rootfs 问题。
- **Refind 读写挂载：** 确保 refind 以读写权限挂载必要的分区。

# 0.8.3

## Chores 🧹

- 更新了 CPR 依赖到较新版本以提高功能。
- 明确指示 CTRE（编译时正则表达式库）使用 C++23 标准以保持一致性和潜在的性能提升。
- 增加了实用程序部分中的连接检查超时时间，以适应潜在的网络延迟或慢响应。

# 0.8.2

## Fixes 🐛

- 解决了 "gucc" 未正确处理 btrfs 子卷挂载点的问题。
- 改进了 "gucc" 以处理不同的 btrfs 子卷挂载状态。

## Chores 🧹

- 修复了 README 文件中的拼写错误并更新了版本信息。

# 0.8.1

## Fixes 🐛

- 解决了 ISA repos 在 Oracle VM 上被错误启用的问题。
- 解决了命令风格不一致的问题以改善用户体验。

## Chores 🧹

- 移除了与 refind 相关的多余 ucode 逻辑，简化了代码库。

# 0.8.0

## Features ✨

- 添加了网络包配置文件的解析器。
- 引入了从 gucc 解析的 TOML 文件中获取环境包的功能。
- 在 gucc 中实现了从 URL 下载文件的辅助函数 📥。
- 在 gucc 中添加了对从 URL 获取网络配置文件的支持，并带有回退机制。
- 将网络配置文件的安装与二进制发行版集成。
- 将指定分区的挂载和检测逻辑移入 gucc。
- 引入了 `utils::exec_checked` 以更安全地执行外部命令。

## Improvements ✅

- 增强了 gucc 中 crypttab 功能的测试覆盖率 🧪。
- 通过正确设置日志记录器改进了 gucc 中的日志记录。
- **将 C++ 版本更新为 C++23** ⬆️。
- 重构代码库以利用 C++23 特性如 `std::ranges` 和 `contains`，以提高可读性和效率。
- 重构各个组件以使用 `utils::exec_checked`。

## Fixes 🐛

- 解决了 gucc 中硬编码库类型的问题。
- 解决了 gucc 中缺失日志记录器实现和头文件的问题。
- 为非开发环境构建启用了 CPR 库。
- 修复了静态构建过程。
- 解决了提交 [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364) 中引入的问题。
- 修复了 TUI 组件中的编译错误。
- 纠正了 FTXUI 对 range-v3 的依赖未公开的问题。

## Chores 🧹

- 更新了 CI 检查、构建流程并修复了相关问题。
- 移除了与二进制发行版一起安装网络配置文件的已还原操作。
- 重构并清理了各个组件中的代码：TUI、utils、chwd_profiles、user 和 tests。
- 从安装程序依赖项中移除了未使用的 range-v3 库。
- 更新了 README 文件。
