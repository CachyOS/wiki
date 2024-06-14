---
title: Updating CachyOS
description: How to update CachyOS?
---

CachyOS is a rolling release distribution. This means that everytime a new package update is released, it will become
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

