---
title: CachyOS CLI Installer Chagelog
description: Changelogs CLI Installer
---

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
