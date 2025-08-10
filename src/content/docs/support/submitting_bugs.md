---
title: Submitting Bugs
---

# Describe your Issue

- *What is not working?*
- *Does downgrading package X fix the issue?*
- *Use the search function for equal issues*
- *Have you made modifications on your own?*
  - Example: `Adding an additional flag in a modprobe file`

# Provide Logs

CachyOS provides a great tool to gather logs from the system called `cachyos-bugreport.sh`.
This tool will collect logs from:

- dmesg
- journalctl
- inxi `(To collect hardware information)`

When the logs are collected, the user will be prompted to decide whether to upload them to our paste website.

**Run the following command in the terminal, and post the link with the bugs into the topic:**

```sh
sudo cachyos-bugreport.sh
```

# Links for submitting report

- Github: <https://github.com/CachyOS/distribution>
- Forum: <https://discuss.cachyos.org/c/feedback/bugreports/10>
- Discord: [Support Channel](https://discord.com/channels/862292009423470592/862294383470051348)
