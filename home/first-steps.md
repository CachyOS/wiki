---
title: Getting Started: Essential Tasks After Installing CachyOS
description: Steps to configure after installing CachyOS
published: 1
date: 2023-04-13T18:02:38.862Z
tags: 
editor: markdown
dateCreated: 2021-08-11T06:07:58.712Z
---

## 1\. Update your system:

#### 1\. Updating System with Octopi:

Octopi is a graphical package manager for Arch-based distributions that provides a convenient way to manage packages and updates.
To update your system with Octopi, follow these steps:

1.  Launch Octopi from the application menu
2.  In the main window, click on the "System Upgrade" button
3.  Octopi will check for available updates and present them to you.
4.  To proceed with the update, click the "Apply" button.
5.  Octopi will download and install the updates.
6.  It is advised to reboot your computer after a big update (especially if the kernel version changes).

#### 2\. Updating System with Pacman:

1.  Open a terminal emulator(or press `ctrl+alt+t`)
2.  Run the following command to update the system: `sudo pacman -Syu`

That's it! Now your system is up-to-date and ready for use.

## 2\. Improve performance:

The system's swap space preference can be adjusted using the `vm.swappiness` sysctl parameter. The default value is "30", which means that the kernel will avoid swapping processes to disk as much as possible and will instead try to keep as much data as possible in memory. A lower swappiness value generally leads to improved performance but may lead to decreased stability if the system runs out of memory.

The `vm.vfs_cache_pressure` is a kernel parameter that sets the tendency of the kernel to reclaim inode and dentry cache. By default, it is set to "100" and a lower value means the kernel will tend to cache more inode and dentry information in memory. To improve performance, you can try to lower the value of `vm.vfs_cache_pressure` to improve file system performance by having more file system metadata cached in memory.

Both values can be changed in the `/etc/sysctl.d/99-cachyos-settings.conf` file.

## 3\. Enable Firewall protection:

To enable firewall protection, follow these steps:

1.  Install the ufw (Uncomplicated Firewall) package using Pacman:

```bash
sudo pacman -S ufw
```

2.  Enable the firewall with this command:

```bash
sudo ufw enable
```

3.  By default, ufw allows all incoming and outgoing traffic, you can add specific rules to the firewall to block or allow specific connections. For example:

```bash
sudo ufw allow ssh
```

4.  To check the status of the firewall, use the following command:

```bash
sudo ufw status verbose
```

> 
> Note: Be careful when configuring firewall rules, as improperly configured rules can lock you out of your own system.
{.is-info}


## 4\. Install apps:

CachyOS comes pre-installed with many useful apps, but you may want to install additional ones to match your workflow.
Here are some popular apps you may consider installing:

*   GIMP (image processor)
*   VLC (media player)
*   Stacer (system monitor)
*   Skype, Telegram, Discord, Signal (messenger apps)
*   Steam (for gaming)
*   Spotify (music)
*   MailSpring (email client)
*   Super Productivity (to-do list manager and Pomodoro timer)
*   Visual Studio Code (code editor)
*   Blender (3D software)
*   Krita (digital painting)

You can easily install these apps using the command line. For example, `paru -S vlc mailspring spotify gimp`. If you get an error message, try using a different command or check the name of the app in the database.

## 5\. Enable global menu:
For some apps like Visual Studio Code, the global menu may not work or may be attached to the parent app instead of the panel. To enable global menu support, run the command `sudo pacman -S appmenu-gtk-module libdbusmenu-glib` and restart the app.

## 6\. Enable trim operations on SSD/NVME:
If you have an SSD or NVME, it would be highly recommended to enable fstrim to ensure your SSD or NVME stays in good working condition.
```
sudo systemctl enable --now fstrim.timer
```

## 7\. Set up Bluetooth headphones:
To auto-connect your headphones, follow the steps in the Arch wiki guide: [https://wiki.archlinux.org/title/bluetooth\_headset#Headset\_via\_Bluez5/PulseAudio](https://wiki.archlinux.org/title/bluetooth_headset#Headset_via_Bluez5/PulseAudio). If Pulseaudio doesn't work, you may need to manually reconnect the headphones each time you restart your computer.
