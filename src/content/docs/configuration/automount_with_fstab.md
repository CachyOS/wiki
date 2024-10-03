---
title: Automount Additional Drives Through fstab at Boot
description: Mount additional static drives at boot by utilizing the file found at /etc/fstab
---

This tutorial will describe the basics of utilizing the fstab file located in /etc/ in order to mount static drives during boot. It will briefly explain how to find a partition or drive's UUID, what some options do, and further reading should the information provided be insufficient.

## Prerequisites
- Root access

## Adding Entries to /etc/fstab

### 1. List the UUIDs of your partitions
In the terminal emulator of your choice (Konsole, Alacritty, Kitty, etc.) run the following:

```sh
❯ lsblk -f
NAME        FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
zram0                                                                              [SWAP]
nvme0n1
├─nvme0n1p1 vfat   FAT32       E04D-9F05
├─nvme0n1p2
├─nvme0n1p3 ntfs               08A24E90A24E81E4                      715.4G    50%
├─nvme0n1p4 vfat   FAT32       E09C-D4DA                             628.1M    39% /boot
├─nvme0n1p5 ext4   1.0         187a9f06-9411-48d9-b941-f03c2e605812  203.6G    47% /
└─nvme0n1p6 ntfs
```

In our example, we know that we want to mount a Windows partition, which is ntfs, and we know that roughly half its space is available. Thus we can determine that the partition we want to mount is `nvme0n1p3` and its UUID to be `08A24E90A24E81E4`, with a file system of `ntfs` in this example.

### 2. Identifying your partition

Often `lsblk -f` will provide all the information you need to mount your disk through /etc/fstab at this point. Should you find the information lacking however you can run the following:

```sh
❯ sudo fdisk -l
Device              Start        End    Sectors  Size Type
/dev/nvme0n1p1       2048     206847     204800  100M EFI System
/dev/nvme0n1p2     206848     239615      32768   16M Microsoft reserved
/dev/nvme0n1p3     239616 2997384182 2997144567  1.4T Microsoft basic data
/dev/nvme0n1p4 2997385216 2999482367    2097152    1G EFI System
/dev/nvme0n1p5 2999482368 3905454079  905971712  432G Linux root (x86-64)
/dev/nvme0n1p6 3905454080 3907026943    1572864  768M Windows recovery environment
```

We already know our UUID in this example, however, `fdisk -l` can make it a bit more clear to us by showing the exact size of the partition (1.4T) as well as its type (Microsoft basic data)

That should make it abundantly clear to us that the partition we want is `nvme0n1p3` with a UUID of `08A24E90A24E81E4` as described earlier. We knew earlier, but now we just know it for sure.

Once you are confident you've found the correct partition, copy the UUID. Copying from the terminal emulator is typically done with `ctrl+shift+C`.


### 3. Adding an Entry to /etc/fstab

Now that we've obtained the UUID of our partition, it's time to open up the fstab file.

Feel free to use your text editor of choice, in this example we will use nano. In order to edit the fstab file it must be opened as root:

```sh
❯ sudo nano /etc/fstab
```

Using the arrow keys, navigate to the bottom of the fstab file, and then on a new line we'll create our new entry:

```sh
UUID=08A24E90A24E81E4 /media/windows ntfs3 defaults,nofail 0 0
```
The break down of this entry is as follows:

- `UUID=08A24E90A24E81E4` This is the file system we want to mount, indentified by its UUID. There are other methods to identify your filesystem, though UUID tends to be safest. Additional methods listed [here](https://wiki.archlinux.org/title/Fstab#Identifying_file_systems).

- `/media/windows` The [Linux Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html) says that `/media/` is the proper location for removable drives to be mounted. `windows` indicates the directory we wish to mount our drive to. Each drive we want to mount will need its own directory.

- `ntfs3` This is the filesystem type for our file system. We are explicitly using the ntfs3 kernel driver in our example. Other examples would be `ext4`, `xfs` or similar. This explicit filesystem type declaration can be replaced with `auto` to allow the mount command to make its best guess.

- `defaults,nofail` The options we want to pass to the mount command for this drive. `nofail` meaning that should this drive fail to mount, it will not cause an error while booting. Booting will continue like normal. `defaults` implies a standard set of logical options. Typically `rw`, `ro`, or similar.

- `the first 0` dump, this is typically deprecated in modern systems. Leaving this at 0 won't hurt anything. Feel free to read more about it [here](https://linux.die.net/man/8/dump).

- `the second 0` This sets the order for file system checks at boot time. For a root partition (unless your root file system is btrfs or xfs, which should be set to 0) this should be 1. All other file systems in your fstab should be either 0 (disabled) or 2. More information [here](https://man.archlinux.org/man/fsck.8).

Options are explained [here](https://man7.org/linux/man-pages/man5/fstab.5.html) and [here](https://man7.org/linux/man-pages/man8/mount.8.html) in much more detail.

#### More info
As an aside, all options after the filesystem type declaration are optional if you do not change them from the default.

Thus

`UUID=<partition UUID> /media/foo somefs`

and

`UUID=<partition UUID> /media/foo somefs defaults 0 0`

are equivalent.  `somefs` followed by nothing is implicitly `somefs defaults 0 0`

#### Important for Windows Partitions

If you are following this guide with a Windows partition your options should be `uid=1000,gid=1000,rw,user,exec,umask=000` replacing uid and gid with your user id and group id. If you do not give user, and exec permissions, Windows may lock your drive leaving you unable to modify anything. This may happen regardless of permissions if you do not disable fast boot.

If you do not set umask=000 some files may be unwritable depending



### 4. Finishing Up

If you wish to mount the drive you created an entry for now, you need to run the following:

```sh
❯ sudo systemctl daemon-reload
```

and then:

```sh
❯ sudo mount -a
```

Your drive should now appear under `/media/windows`, and will appear there the next time you boot, as well as moving forward.

```sh
❯ ls /media/windows
'$Recycle.Bin'             Linux                  SteamLibrary
 AMD                       Modding                swapfile.sys
 Apps                      pagefile.sys          'System Volume Information'
 bootTel.dat               PerfLogs               Users
 Development               ProgramData            WiiU
'Documents and Settings'  'Program Files'         Windows
 DumpStack.log.tmp        'Program Files (x86)'   XboxGames
 FanControl                Recovery               xiv_modding
 Games                     RetroArch-Win64
 Intel                    'Ship of Harkinian'
 ```

 If you wish to create a link to your newly mounted drive in your home directory you can run the following

 ```sh
 ❯ ln -s /media/windows ~/Windows`
 ```

 To show it worked

 ```sh
 ❯ ls ~/Windows
 '$Recycle.Bin'             Linux                  SteamLibrary
 AMD                       Modding                swapfile.sys
 Apps                      pagefile.sys          'System Volume Information'
 bootTel.dat               PerfLogs               Users
 Development               ProgramData            WiiU
'Documents and Settings'  'Program Files'         Windows
 DumpStack.log.tmp        'Program Files (x86)'   XboxGames
 FanControl                Recovery               xiv_modding
 Games                     RetroArch-Win64
 Intel                    'Ship of Harkinian'
 ```


## tl;dr

- Find the UUID of your partition
```sh
lsblk -f
```

- Open /etc/fstab
```sh
sudo nano /etc/fstab
```

- Create an entry in the bottom of the file
```sh
UUID=<partition UUID> /media/foo somefs defaults 0 0
```
Replacing `<partition UUID>`, `foo`, and `somefs` with your UUID, directory, and filesystem. eg., ext4, as well as setting any other options you may want after defaults, such as `_netdev` for a NAS, or `nofail` for any non-critical drive.

- Reload your daemon

```sh
❯ sudo systemctl daemon-reload
```

- Mount your drive
```sh
❯ sudo mount -a
```

This drive is now mounted, and will now be mounted on boot moving forward as well.

## Additional reading
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html - Filesystem Hierarchy Standard
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch03s11.html - FHS on `/media/`
- https://linux.die.net/man/8/dump - manual for `dump`
- https://man.archlinux.org/man/fsck.8 - manual for `fsck`
- https://man.archlinux.org/man/fstab.5.en - man page for fstab
- https://wiki.archlinux.org/title/Fstab - Arch Linux wiki for fstab
