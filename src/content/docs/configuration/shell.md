---
title: Configuration Shell
---

CachyOS currently uses the Fish shell as default.
:::note
It is possible to change the default shell.
:::

## Zsh

We currently ship an OOB ZSH config with commonly used plugins and configurations.
You can find it [here](https://github.com/CachyOS/cachyos-zsh-config).
to change your default shell to zsh, run the following command:

```bash
chsh -s /usr/bin/zsh
```

## Fish

Fish also includes an OOB config made by us, which can be found [here](https://github.com/CachyOS/cachyos-fish-config).
to change your default shell to fish, run the following command:

```bash
chsh -s /usr/bin/fish
```

## Bash

This is the common used default shell. Bash does not provide fancy features like auto completion, an easy history management etc, to change your default shell to Bash, run the following command:

```bash
chsh -s /usr/bin/bash
```
