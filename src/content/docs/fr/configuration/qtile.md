---
title: Qtile Configuration
description: CachyOS Qtile keybinds & FAQ
---

**For more information about Qtile. Please check out their wiki for reference**
*   https://docs.qtile.org/en/stable/

#### Credits go to Aarrayy for making this Qtile setup
> X11 and Wayland session

# Keybinds

Most of the key combinations require the use of the mod key which in our case is the Windows key (referenced as SUPER), you can change it on the config file.
Some of them might make use of mod1 (ALT key).

### Open terminal

* SUPER + Return

### Kill focused window

* SUPER + Q

### Go to workspace (1-9)

* SUPER + 1-9 (Number row, number pad does not count)

### Open rofi (Program launcher)

* ALT + Space

### Move focus to (Left,Right,Down,Up)

* SUPER + H (Left)
* SUPER + L (Right)
* SUPER + J (Down)
* SUPER + K (Up)
* SUPER + Space (Move windows between left/right columns or move up/down in current stack)

### Move focused window to (Left,Right,Down,Up)

* SUPER + Shift + H (Left)
* SUPER + Shift + L (Right)
* SUPER + Shift + J (Down)
* SUPER + Shift + K (Up)

### Grow focused window to (Left,Right,Down,Up)

* SUPER + Control + H (Left)
* SUPER + Control + L (Right)
* SUPER + Control + J (Down)
* SUPER + Control + K (Up)

### Reset all window sizes of current workspace to their original size

* SUPER + N

### Toggle fullscreen in focused window

* SUPER + F

### Toggle floating in focused window

* SUPER + V

### Toggle between split and unsplit sides of stack

* SUPER + Shift + Return

### Toggle between layouts

* SUPER + TAB

### Reload Qtile configuration file

* SUPER + Control + R

### Exit Qtile (end running X session)

* SUPER + Control + Q

### Execute flameshot (Utility for taking screenshots)

* Print

### Capture a full-screen screenshot (Saved in $HOME/Pictures)

* Control + Print

### Open File Manager (Thunar by default)

* SUPER + E

### Drag a floating window around with your mouse

* SUPER + Left Click

### Grow a floating window with your mouse

* SUPER + Right Click

### Bring window to the front

* SUPER + Scroll wheel button

### Stick window (For example sticking Firefox PIP will now follow you between workspaces)

* SUPER + S


# FAQ

## Why is the volume widget showing an error or it's stuck at 0%?
* Sometimes this is due to Qtile volume widget not being able to detect your default Output Device, you can take a look in the wiki for more information.
*    https://docs.qtile.org/en/latest/manual/ref/widgets.html#pulsevolume

## Is there a autostart.sh script?
* Its located in scripts/ from Qtile folder

## Does Qtile's bar interacts with the mouse?
* It does, for example if you scroll on the tiny dots which are your workspaces (Active,Inactive,Empty etc) you'll switch to the Left or Right or even click in one of them.
* Another example is the layout (columns by default), clicking on it allows you to switch between the available layouts
* CPU and RAM usage by clicking it's going to open Btop (TUI System Monitor)
* Increase/Lower/Mute/ by interacting on the volume widget

