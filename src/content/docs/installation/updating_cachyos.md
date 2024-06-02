---
title: Updating CachyOS
description: How to update CachyOS?
---

CachyOS is a rolling system, which means updates come all time automatically via the package manager.
If there is a manual adjustment required, we notify users via Social Media or pacman.

We have integrated into pacman to fetch an update message, which needs to be confirmed before the user is updating their system.
Once confirmed this message wont come anymore at updating.

pacman
------

Pacman is the ONLY suggested method to update your system.
Use following command to update your system:
```bash
sudo pacman -Syu
```

