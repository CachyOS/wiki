---
title: Configuration Shell
---

CachyOS currently does use the fish shell as default.
Is is possible to change the default shell.


## Zsh

We are shipping already an OOB zsh config with common used plugins and configuration.
You can find it [here](https://github.com/CachyOS/cachyos-zsh-config).
to change your default shell to zsh, run following command:

```bash
chsh -s /usr/bin/zsh
```

## Fish

Fish has also an OOB Configuration, which can be found [here](https://github.com/CachyOS/cachyos-zsh-config).
to change your default shell to fish, run following command:

```bash
chsh -s /usr/bin/fish
```

## Bash

This is the common used default shell. Bash does not provide features like auto completion, a easy history, ...
to change your default shell to bash, run following command:

```bash
chsh -s /usr/bin/bash
```
