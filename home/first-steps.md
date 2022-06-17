---
title: First Steps
description: Things to do after installing cachyOS
published: 1
date: 2022-06-17T13:31:43.396Z
tags: 
editor: markdown
dateCreated: 2021-08-11T06:07:58.712Z
---

# Things to do after installation

## 1. ***Update your system***
There are two ways to update your system:
1. Discover (Software Updater)
2. Terminal command 


For the first option you have to open Discover (in KDE , also called software update) and then choose the option Updates at the left tab.

The second option is to open your terminal (shortcut : `ctrl+alt+t`) and type the command `sudo pacman -Syyu` and hit enter, and follow the instructions, if any.

It is advised to reboot your computer after a big update (especially if kernel version changes).

## 2. ***Reduce Swappiness***
-Things to add
## 3. ***Enable Firewall protection***
-Things to add

## 4. ***Install the Apps That You Use***
By default, CachyOS comes pre-bundled with tons of useful apps for your everyday use. But these might not be the apps you are accustomed to using daily. As such, the next thing you should be focused on is to install all the apps that you use to recreate your workflow.

Now, if you are new to Linux and don’t know what apps to install, here is a list of some of the must-have Linux apps that you should consider having on your CachyOS system.

GIMP – Image processor. Alternative to Photoshop.
VLC – Media Player. You already know what it is.
Stacer – System monitor.
Skype, Telegram, Discord, Signal – Almost all popular messenger apps are supported.
Steam – All you gamers already know what it is.
Spotify – For your music needs.
MailSpring – Email Client. More feature-rich than the default ThunderBird.
Super Productivity – An awesome to-do list manager and Pomodoro timer app.
Visual studio code - An awesome code editor
Blender - Awesome and powerful free 3D software 
Krita - An amazing piece of software for Digital Painting

**We do also include a dedicated GUI for managing packages named Pamac (made by the people who made Manjaro's distro), you should find it as Add/Remove Software and its really easy to use for new people coming to any Arch based distro.**


You can easily install these softwares by running one of the command `sudo pacman -S nameofapp` or `paru -S nameofapp` or `yay -S nameofapp`

For eg : `paru -S vlc mailspring spotify gimp` can be used to install some of these apps
Note : If you get and error saying 'error: target not found: appname' you should try the other alternative `pacman -S appname` and vice versa. You should also check if the name you are using is the name of the app in the database, for eg. vscode can be installed using `paru -S visual-studio-code-bin` . Google it, if in confusion.


## 5. ***Global Menu***
For some apps (like VSCode) the global menu doesn't seem to work or is attached to the parent app instead of being attached to the panel, Hence to enable global menu support for GTK and Electron, you need to install some packages :
Run this command -> `sudo pacman -S appmenu-gtk-module libdbusmenu-glib` and restart the app.

## 6. ***Set up Bluetooth headphones***
If your current headset doesn't auto connect you would need to configure your device to auto connect to your headphones, The Arch wiki gives a comprehensive guide on the same - https://wiki.archlinux.org/title/bluetooth_headset#Headset_via_Bluez5/PulseAudio , just read and follow the steps and you would be good to go.
For some headphones Pulseaudio doesn't seem to work and you'd need to reconnect the headphones manually each time you restart your computer. To solve this issue replace Pulseaudio with Pipewire, using this https://wiki.archlinux.org/title/bluetooth_headset#Headset_via_Pipewire