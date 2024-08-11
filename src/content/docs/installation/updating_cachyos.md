---
title: Updating CachyOS
description: How to update CachyOS?
---

CachyOS is a rolling release distribution. This means that every time a new package update is released, it will become
available inside the repositories after a very short period of time. All the user needs to do is update the system through `pacman`.
If there is a manual adjustment required, we notify users via Social Media or `pacman`.

We have integrated a function to fetch an update message inside pacman. This needs to be confirmed by the user
before updating their system. Once confirmed, this message will not appear anymore when updating.

pacman
------

`pacman` is the ONLY suggested method to update your system.
Use following command to update your system:
```bash
sudo pacman -Syu
```

:::note
If you want to use a GUI solution to update CachyOS.
Our main recommendation is to avoid at all costs pamac-manager, Discover (KDE) or similar because they're prone to cause issues and break your system.

Instead use Octopi or our Package installer which are safer.
:::