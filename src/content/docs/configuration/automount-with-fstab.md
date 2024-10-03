---
title: Automount Additional Drives Through fstab
description: Mount additional static drives at boot by utilizing the file found at /etc/fstab
---

This tutorial will describe the basics of utilizing the fstab file located in /etc/ in order to mount static drives during boot. It will briefly explain how to find a partition or drive's UUID, what some options do, and further reading should the information provided be insufficient.

## Prerequisites
- Root access

## Adding Entries to /etc/fstab

### 1. Determine the UUID of your partition
