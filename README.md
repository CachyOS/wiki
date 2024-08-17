# CachyOS Wiki

This repository contains the source code of our [wiki page](https://wiki.cachyos.org).

## 🙋 Contributing

### Requirements

- [bun](https://github.com/oven-sh/bun) - Run a local copy of the website to preview local changes
- [git](https://git-scm.com/downloads) - Avoid editing files from GitHub Web as much as possible. See [here](https://docs.github.com/en/get-started/using-git)
to get started on using git.
- A text editor - Ideally one that parses markdown correctly.

> [!TIP]
> Please take a look at our [TODO list](https://github.com/CachyOS/wiki/issues/50) or other opened [issues](https://github.com/CachyOS/wiki/issues)
> for what things to work on.

1. [Fork](https://github.com/CachyOS/wiki/fork) this repository so you have your own copy of this repository.
2. Clone the forked repository to your computer.

```shell
git clone https://github.com/<your-username>/wiki
```

3. To commit your changes, create a new branch. Do not commit directly to the master branch, regardless of whether it's your own fork.

```shell
git checkout -b <new-branch>
```

4. Now you can start editing the files you see fit.

5. Commit your changes.

```shell
git add <modified-files> # Alternatively you can use git add -a for all files or git add -u for untracked files
git commit # For a simple commit message, you can do git commit -m "Commit Message"
git push origin <new-branch>
```

### Previewing local changes

```bash
bun install # Install dependencies used by our wiki
bun run dev # Runs a local copy of the wiki, complete with your modifications!
```

Finally, you can open a [pull request](https://github.com/CachyOS/wiki/compare) to get your changes reviewed and hopefully merged.

Happy contributing!
