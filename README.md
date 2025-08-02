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

### Basic Guide

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
git add <modified-files> # Alternatively you can use git add -A for all files or git add -u for untracked files
git commit # For a simple commit message, you can do git commit -m "Commit Message"
git push origin <new-branch>
```

### Previewing local changes

```bash
bun install # Install dependencies used by our wiki
bun run dev # Runs a local copy of the wiki, complete with your modifications!

bun run build # Builds the wiki for production to make sure everything works as expected
bun run preview # Preview the production build (lunaria might show an error if there are uncommitted changes, this is normal)
```

Finally, you can open a [pull request](https://github.com/CachyOS/wiki/compare) to get your changes reviewed and hopefully merged.

Happy contributing!

## 🧑‍🤝‍🧑 Translations

We are always open to community members adding new translations to the wiki. This helps **immensely** for non-English speakers.

You can use the localization tracker at [https://wiki.cachyos.org/localization](https://wiki.cachyos.org/localization) to see the status of our existing translations.

### Getting started

Firstly, you need to add your language to the list of available locales to the site. This is done in `lunaria.config.json`.
Please refer to the [ISO 639-1 list of language codes](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes#Table).

```jsonc
// lunaria.config.json
//...
"locales": [
  {
    "label": "Your Language",
    "lang": "xx", // Refer to two-letter language codes from the ISO 639-1 list linked above.
  }
];
//...
```

Next, you can start adding your own translations. To do this, add a subdirectory to `src/content/docs` with your two-letter language code.

```sh
├── astro.config.mjs
├── src
│   └── content
│       └── i18n
│           └── xx.json # Your language code
│       └── docs
│           ├── cachyos_basic
│           │   ├── download.mdx
│           │   └── why_cachyos.md
│           └── xx # Your language code
│               └── cachyos_basic
│                   ├── download.mdx
│                   └── why_cachyos.md
└── tsconfig.json
```

Now you can start adding your own translations!.

As a final step, you want your translated page to be indexed, this is done again in our `astro.config.mjs`

```mjs
// astro.config.mjs

    {
        label: 'Why CachyOS?',
        translations: {
        xx: '<why-cachyos-in-yourlanguage>',
        },
        link: 'cachyos_basic/why_cachyos',
    },
```

Please refer to our [basic guide](#basic-guide) for committing and pushing changes.
When you're done, you can open a [pull request](https://github.com/CachyOS/wiki/compare)

Happy translating!
