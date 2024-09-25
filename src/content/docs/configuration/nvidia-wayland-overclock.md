---
title: Easy Overclocking and/or Undervolting NVIDIA Cards on CachyOS
description: Overclock and Unvervolt NVIDIA Cards easily on wayland
---

This tutorial describes how to overclock and/or undervolt NVIDIA cards under Linux. While NVIDIA cards don't have the same breadth of tools available as under Windows (no MSI Afterburner or direct control over the voltage curve), there are still relatively easy ways to boost clocks or undervolt your card if you know how to do it.

In this tutorial, we'll set up Python scripts for adjusting various boosts/offsets and create a service to run these scripts automatically after boot.

## Prerequisites

- A CachyOS system with an NVIDIA graphics card
- Root access

## Setup Process

### 1. Prepare the Environment

Open a terminal of your choice (Konsole, Alacritty, etc.) and follow these steps:

1. Switch to root:
   ```
   sudo -i
   ```

2. Create and navigate to the NVIDIA directory:
   ```
   mkdir NVIDIA
   cd NVIDIA
   ```

### 2. Set Up Python Virtual Environment

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   ```
   source /root/NVIDIA/venv/bin/activate.fish
   ```

3. Verify the activation:
   ```
   which pip
   ```
   It should return "/root/NVIDIA/venv/bin/pip".

4. Install required modules:
   ```
   pip install nvidia-ml-py pynvml
   ```

5. Deactivate the virtual environment:
   ```
   deactivate
   ```

### 3. Create the Loader Script

Create a file named `nvidia-oc.sh` in `/root/NVIDIA/`:

```bash
#!/usr/bin/fish
source /root/NVIDIA/venv/bin/activate.fish
python /root/NVIDIA/nvidia-oc.py
deactivate
```

Make the script executable:
```
chmod 770 nvidia-oc.sh
```

### 4. Determine GPU Clock Ranges

Find your card's standard minimum and maximum clocks:

```
nvidia-smi -q -d SUPPORTED_CLOCKS | less
```

Note down the topmost and bottommost 'Graphics:' clock values.

### 5. Create the Python Script

Create a file named `nvidia-oc.py` in `/root/NVIDIA/` with the following content:

```python
from pynvml import *
nvmlInit()

# This sets the GPU to adjust - if this gives you errors or you have multiple GPUs, set to 1 or try other values.
myGPU = nvmlDeviceGetHandleByIndex(0)

# Set Min and Max core clocks
nvmlDeviceSetGpuLockedClocks(myGPU, MINCLOCK, MAXCLOCK)

# Clock offset (0 by default)
nvmlDeviceSetGpcClkVfOffset(myGPU, CLOCKOFFSET)

# Memory Clock offset (0 by default)
nvmlDeviceSetMemClkVfOffset(myGPU, MEMOVERCLOCK)
```

Replace `MINCLOCK`, `MAXCLOCK`, `CLOCKOFFSET`, and `MEMOVERCLOCK` with appropriate values.

### 6. Test the Configuration

Run the script:
```
/root/NVIDIA/nvidia-oc.sh
```

Monitor the GPU:
```
watch nvidia-smi -q -d VOLTAGE,CLOCK
```

Test your configuration with games or other GPU-intensive tasks.

### 7. Create a Systemd Service

Create a file named `nvidia-oc.service` in `/etc/systemd/system/`:

```ini
[Unit]
Description=Set up Nvidia settings
Wants=basic.target

[Service]
Type=oneshot
ExecStart=/root/NVIDIA/nvidia-oc.sh

[Install]
WantedBy=network.target
```

### 8. Enable and Start the Service

```
systemctl daemon-reload
systemctl enable nvidia-oc.service
systemctl start nvidia-oc.service
```

Check the service status:
```
systemctl status nvidia-oc.service
```

## Conclusion

You now have custom clocks and possibly undervolting for your NVIDIA card on boot. Remember to test thoroughly and adjust values as needed for stability and performance.
