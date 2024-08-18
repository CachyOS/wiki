---
title: Hyprland configuration
description: CachyOS Hyprland keybinds & FAQ
---


:::caution
Since Hyprland started their rework. Please be aware that it is not currently stable and you can experience bugs/unexpected crashes. Use at your own risk.
Even their "stable" version is also broken and buggy therefore we do not plan to provide support in the future. Refer to their wiki instead.
:::

*   https://wiki.hyprland.org/

Our main goal with our setup is to have a working Hyprland but keep it barebones therefore some essential tools and programs might be missing such as a GUI File Manager, Please check FAQ section (at the bottom)



# Keybinds

Most of the key combinations require the use of the mod key which in our case is the Windows key (referenced as SUPER),  you can change it on the config file.

### Open terminal

*   SUPER + Return

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

### Open rofi (Program Launcher)

* CTRL + Space
  
### Close focused window

* SUPER + Q

### Move focused window to direction (Up,Down,Left,Right)

* SUPER + Shift + ArrowKeys

### Resize focused window

* CTRL + Shift + J (Downwards)
* CTRL + Shift + K (Upwards)
* CTRL + Shift + H (Left)
* CTRL + Shift + L (Right)
* CTRL + Shift + ArrowKeys

### Toggle focused window into floating or fullscreen

* SUPER + F (Fullscreen)
* SUPER + V (Floating)

### Enter resize submap state (Allows resizing), H,J,K,L or via arrow keys

* SUPER + R 
* ESC to exit

### Move window with your mouse

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

### Reload waybar

* SUPER + O

### Lower gap between windows 

* SUPER + G 

### Reset gaps to default value

* SUPER + Shift + G


# FAQ

## Why does my Discord,Thunar,Nautilus have a weird background?
This is because the window has a modified opacity

* Consider modifying Discord's window rule near the bottom of Hyprland's config file:
   `windowrule=opacity 0.96,discord`

## Is there a File Manager included?

* No, install one you like

## How can i take an screenshot?

* SUPER + A (You can draw there too)

## Why Hyprland randomly crashed? 

* Check at the beginning of this page why
