---
title: Updating CachyOS
description: How to update CachyOS?
---

CachyOS is a rolling system, which means updates come all time automatically via the package manager.
If there is a manual adjustment required, we notify users via Social Media or pacman.

We have integrated a function to fetch an update message inside pacman. This needs to be confirmed by the user
before updating their system. Once confirmed, this message will not appear anymore when updating.

pacman
------

Pacman is the ONLY suggested method to update your system.
Use following command to update your system:
```bash
sudo pacman -Syu
```

