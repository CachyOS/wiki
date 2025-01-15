---
title: Hyprland configuration
description: CachyOS Hyprland keybinds & FAQ
---

:::caution
Since Hyprland started their rework. Please be aware that it is not currently stable and you can experience bugs/unexpected crashes. Use at your own risk.
Even their "stable" version is also broken and buggy therefore we do not plan to provide support outside of our dotfiles. Refer to their [wiki](<https://wiki.hyprland.org/>) instead.
:::

:::tip
Start Hyprland using the non systemd entry otherwise it won't start and lead to a black screen.

Example: **`Hyprland`** instead of **`Hyprland(systemd)`**.
:::

Our main goal with our setup is to have a working Hyprland but keeping it simple therefore some essential tools and programs might be missing such as a GUI File Manager.

Take a look into our [Hyprland FAQ.](/desktop_environments/hyprland#faq)

**Dotfiles maintained by [msmafra](https://github.com/msmafra) and [Lysec](https://github.com/Ly-sec)**

## Keybinds

Most of the key combinations require the use of the mod key which in our case is the Windows key (referenced as SUPER),  you can change it on the config file.

### Open terminal

* SUPER + Return

### Go to workspace (1-9)

* SUPER + 1-9 (Number row, number pad does not count)

### Change focus to (Left,Right,Up,Down)

* SUPER + ArrowKeys

### Move between workspaces with the scroll wheel

* Super + Scroll

### Move between workspaces with comma and period

* Super + period (Next workspace)
* Super + comma (Previous workspace)

### Move focused window to workspace (1-9) but don't go there

* SUPER + Shift + 1-9

### Same as above but also switch to said workspace

* SUPER + CTRL + 1-9

### Open Rofi (Program Launcher)

* SUPER + Space
  
### Close focused window

* SUPER + Q

### Move focused window to direction (Up,Down,Left,Right)

* SUPER + Shift + ArrowKeys

### Resize focused window

* SUPER + CTRL + Shift + J (Downwards)
* SUPER + CTRL + Shift + K (Upwards)
* SUPER + CTRL + Shift + H (Left)
* SUPER + CTRL + Shift + L (Right)
* SUPER + CTRL + Shift + ArrowKey (Any direction)

### Toggle focused window into Floating or Fullscreen state

* SUPER + F (Fullscreen)
* SUPER + V (Floating)

### Enter resize submap state (Allows resizing), H,J,K,L or via arrow keys

* SUPER + R
* ESC to exit

### Move window dragging the mouse

* SUPER + Left click

### Resize window

* SUPER + Right click (keep it pressed and drag your cursor on any direction)

### Volume control (Multimedia keys) such as VolUP, VolDOWN and MUTE

### Brightness control should work depending on Hardware

### Playback control for pausing, playing, next and previous via multimedia keys (Laptop or keyboard)

### Pin focused window so it shows on all workspaces (Floating)

* SUPER + Y

### Toggle current window to a group

* SUPER + K

### Change active group

* SUPER + TAB

### Reload Waybar

* SUPER + O

### Lower gap between windows

* SUPER + G

### Reset gaps to default value

* SUPER + Shift + G

### Open file manager (Variable not configured by default)

* SUPER + E

### Screenshot

* Print (PrtSc)

## FAQ

### Why does my Discord, Thunar and Nautilus have a weird background?

This is because the window has a modified opacity

* Consider modifying the window rule in the [Hyprland](https://github.com/CachyOS/cachyos-hyprland-settings/blob/master/etc/skel/.config/hypr/config/windowrules.conf#L21) config file.

```sh title='Example'
windowrulev2 = opacity 0.92, class:^(thunar|nemo)$
```

### Is there a File Manager included?

* No, install one you like
