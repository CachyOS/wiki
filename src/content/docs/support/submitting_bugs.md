---
title: Submitting Bugs
---

# Describe your Issue

- What is not working?
- Does downgrading package X fix the issue?
- Use the search function for equal issues

# Provide Logs

CachyOS does provide a great tool to gather logs, called `cachyos-bugreport.sh`.
This tool will collect logs from:

- dmesg
- journalctl

When the logs are collected, it will ask the user, if this should be uploaded to our paste services.

Run the following command in the terminal, and post the link with the bugs into the topic:

```sh
sudo cachyos-bugreport.sh
```

# Links for submitting report

- Github: https://github.com/CachyOS/distribution
- Forum: https://discuss.cachyos.org/c/feedback/bugreports/10
