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
- Transparent compression. BTRFS supports transparently compressing files to allow for signifcant space savings with no user intervention.
- Snapshot functionality. BTRFS leverages its COW nature to allow for the creation of snapshots of the filesystem that take up very little actual space.
