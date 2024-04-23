---
title: Filesystems
description: Description and recommendations for the available filesystems. (ext4, f2fs, btrfs, xfs, zfs)
---

# Filesystems

CachyOS offers 5 filesystems to allow the user to choose what best fits their needs. The following will go over advantages, disadvantages and recommendations for each filesystem.

## XFS
XFS is a journaling filesystem created and developed by Silicon Graphics, Inc. It was created with 1993, ported to linux in 2001, and is now widely supported by most linux distributions.
### Pros
- Fast, xfs was originally designed with speed and extreme scalability in mind.
- Reliable, xfs makes use of several technologies to prevent data corruption.
- Resistant to fragmentation due to its extent-based nature and delayed allocation strategy.
### Cons
- Cannot be shrunk.

### Userspace utility
The package containing userspace tools to manage xfs filesystems is 'xfsprogs'.

### Recommendation:
XFS is the recommended filesystem for users who do not need advanced features and simply want a fast and reliable filesystem.


## BTRFS
BTRFS is a modern copy-on-write(COW) filesystem created in 2007 and declared stable in the linux kernel in 2013. It is widely supported and is mainly known for its advanced featureset.
### Pros
- Transparent compression. BTRFS supports transparently compressing files to allow for signifcant space savings with no user intervention. CachyOS ships with ZSTD compression by default
- Snapshot functionality. BTRFS leverages its COW nature to allow for the creation of snapshots of subvolumes that take up very little actual space.
- Subvolume functionality allowing for greater control over the filesystem.
- Able to grow or shrink.
- Very fast developement.
### Cons
- Sometimes requires defragmentation or balancing.
- Worse on rotational drives due to aforementioned fragmentation.
- 
### Userspace utility
Btrfs's userspace utility package is 'btrfs-progs'

### Subvolume Layout
CachyOS provides a subvolume layout OOTB to allow easy snapshot functionality.
- Subvol @ = /
- Subvol @home = /home
- Subvol @root = /root
- Subvol @srv = /srv
- Subvol @cache = /var/cache
- Subvol @tmp = /var/tmp
- Subvol @log = /var/log

### Recommendation:
BTRFS is recommended for users who want snapshot/backup functionality and transparent compression.


## Ext4
Ext4 (fourth extended filesystem) is the most commonly used Linux filesystem. Ext4 was made stable in the linux kernel in 2008.
### Pros
- Very common allowing easy access to plenty of resources.
- Reliable. Ext4 has a proven track record of being very reliable.
- Able to grow or shrink.
### Cons
- Built on an old code base.
- Lacks many of the advanced features other filesystems offer.

### Userspace utilities
The package to manage ext4 is 'e2fsprogs'

### Recommendation:
Ext4 is recommended for users who want the simplest and most commonly used filesystem.


## ZFS
ZFS is an advanced filesystem originally developed by Sun Microsystems in 2005. ZFS has many features however it licensed under CDDL which means it can not be included inside the linux kernel and requires a seperate module installed.
### Pros
- Pooled storage (zpool)
- Snapshots using COW
- Raid-Z support
- ARC cache allows insanely fast read times on commonly accessed files.
### Cons
- Very complicated to use and understand due to features like zpool and ARC.
- ARC requires a lot of ram to be effective.
- Not included in the linux kernel therefore dependent on a third party kernel module (OpenZFS)

### Required tools
'zfs-dkms' or the precompiled module for your specific kernel is REQUIRED.
'zfs-utils' for the userspace utilities.

### Recommendation:
ZFS should only be used by advanced users who want the advanced features of ZFS such as pooled storage or the ARC cache.


## F2FS
F2FS or the Flash-Friendly File System, is a flash file system created and developed by Samsung originally for the linux kernel. F2FS was created to cater specifically for the NAND flash used in modern day storage.
### Pros
- Designed with flash friendlyness in mind.
- Transparent compression used to reduce disk writes (Saved storage not usable by user)
- Faster than other filesystems like Ext4.
- Better wear leveling further prolonging the life of NAND flash.
### Cons
- Cannot shrink.
- Space savings from compression cannot be used by the user.
- Relatively weak fsck. (filesystem check)
- Downgrading to a kernel older than the version that created the filesystem may cause issues. 

### Userspace utilities
The main utility for f2fs is 'f2fs-tools'

### Recommendation:
F2FS is only recommended for users who want to maximize the life of their NAND flash.


## TL:DR
Use xfs or ext4 by default, BTRFS if snapshots and compression is something you want and ZFS if the ARC cache or zpools are wanted. 

