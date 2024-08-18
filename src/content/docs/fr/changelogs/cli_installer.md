---
title: CachyOS CLI Installer Chagelog
description: Changelogs CLI Installer
---
# 0.8.4

## Features ✨

- **Improved Partition Handling:**  Significant refactoring and improvements have been made to how the installer handles partitions, leading to better accuracy and reliability.
- **Kernel Parameter Generation:** The installer now automatically generates kernel parameters based on the detected partition scheme.
- **Enhanced `gucc` Library:**  The `gucc` library has been significantly enhanced, now encompassing refind installation and configuration capabilities.

## Chores 🧹

- **Clang-Format and Clang-Tidy:** Codebase consistency and quality have been improved through the application of clang-format and clang-tidy.
- **Refactoring with String Views:**  Several areas of the codebase now utilize string_view literals for improved performance and readability.
- **Doctest Implementation:**  C asserts have been replaced with doctest for more robust and informative testing.
- **Refactored Tests:** Test suites have been refactored for clarity and maintainability.
- **Refind Handling in `gucc`:**  Refind-related code has been refactored and moved into the `gucc` library for better organization and maintainability.

## Bug Fixes 🐛

- **Btrfs Subvolume Detection:** Issues with detecting existing btrfs subvolumes have been resolved.
- **Partition Information Accuracy:** Improvements have been made to ensure the accurate collection and display of partition information.
- **Root Mount Point for Refind:**  A bug affecting the root mount point used by refind has been fixed.
- **UUID Detection:** The process of detecting partition UUIDs during initialization has been improved.
- **Meson Build Fixes:**  Issues encountered during the meson build process have been addressed.
- **Btrfs Subvolume Appending:**  A bug related to appending btrfs subvolumes in development environments has been fixed.
- **Rootfs in Predefined Configurations:**  An issue with the rootfs of partition schemes derived from predefined configurations has been resolved.
- **Refind Read-Write Mounting:**  Ensured that refind mounts the necessary partitions with read-write permissions.

# 0.8.3

## Chores 🧹

- Updated the CPR dependency to a newer version for improved functionality.
- Explicitly instructed CTRE (Compile Time Regular Expressions library) to utilize the C++23 standard for consistency and potential performance enhancements.
- Increased the connection check timeout in the utilities section to accommodate potential network delays or slow responses. 

# 0.8.2

## Fixes 🐛

- Resolved an issue where "gucc" didn't correctly handle btrfs subvolume mountpoints.
- Improved "gucc" to handle different btrfs subvolume mount statuses.

## Chores 🧹

- Fixed a typo in the README file and updated the version information.

# 0.8.1

## Fixes 🐛

- Resolved an issue where ISA repos were incorrectly enabled on Oracle VM.
- Addressed command style inconsistencies for improved user experience.

## Chores 🧹

- Removed unnecessary ucode logic related to refind, streamlining the codebase. 

# 0.8.0

## Features ✨

- Added parser for network package profiles.
- Introduced the ability to fetch environment packages from a TOML file parsed by gucc.
- Implemented a helper function in gucc to download files from URLs 📥.
- Added support for fetching network profiles from a URL with a fallback mechanism within gucc.
- Integrated the installation of network profiles with the binary distribution.
- Moved the mounting of specified partitions and detection logic into gucc.
- Introduced `utils::exec_checked` for safer execution of external commands.

## Improvements ✅

- Enhanced test coverage for crypttab functionality in gucc 🧪.
- Improved logging in gucc by setting up the logger appropriately.
- **Updated C++ version to C++23** ⬆️.
- Refactored codebase to utilize C++23 features like `std::ranges` and `contains` for better readability and efficiency.
- Refactored various components to utilize `utils::exec_checked`.

## Fixes 🐛

- Resolved an issue with hardcoded library types in gucc.
- Addressed missing logger implementation and header file in gucc.
- Enabled CPR library for non-development environment builds.
- Fixed static build process.
- Addressed issues introduced in commit [`a70e641e364`](https://github.com/CachyOS/New-Cli-Installer/commit/a70e641e364).
- Fixed compilation errors in the TUI component.
- Corrected a dependency issue where FTXUI's dependency on range-v3 was not public.

## Chores 🧹

- Updated CI checks, build processes, and fixed related issues.
- Removed the reverted installation of network profiles alongside the binary distribution.
- Refactored and cleaned up code in various components: TUI, utils, chwd_profiles, user, and tests.
- Removed the unused range-v3 library from installer dependencies.
- Updated README file.
