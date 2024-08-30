---
title: Available Shells
---

CachyOS currently uses the **Fish shell** as default.
You're open to use which ever you feel most comfortable with.

## Zsh

We currently ship an OOB ZSH config with commonly used plugins and configurations.
You can find it [here](https://github.com/CachyOS/cachyos-zsh-config).
to change your default shell to Zsh, run the following command:

```bash
chsh -s /usr/bin/zsh
```

## Fish

Fish being our favorite pick. We include an OOB config made by us, the complete setup can be found [here](<https://github.com/CachyOS/cachyos-fish-config>).
To change your default shell to Fish, run the following command:

```bash
chsh -s /usr/bin/fish
```

## Bash

This is the default shell on almost all Linux Distributions. Bash is a mature and capable shell, offering features like intelligent auto-completion, easy history management, but it's approach is more traditional and lacks a fancy plugin ecosystem like Zsh and Fish does. To change your default shell to Bash, run the following command:

```bash
chsh -s /usr/bin/bash
```
