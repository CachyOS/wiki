import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export const locales = {
  root: {
    label: 'English',
    lang: 'en',
  },
  ru: {
    label: 'Русский',
    lang: 'ru',
  },
  de: {
    label: 'Deutsch',
    lang: 'de',
  },
};
const site = 'https://wiki.cachyos.org/';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    react(),
    starlight({
      lastUpdated: true,
      customCss: ['./src/tailwind.css'],
      title: 'CachyOS',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/cachyos/wiki/edit/next/',
      },
      social: {
        github: 'https://github.com/cachyos',
        twitter: 'https://twitter.com/cachyos',
        telegram: 'https://t.me/+oR-kWT47vRdmMDli',
        discord: 'https://discord.gg/cachyos-862292009423470592',
        //reddit: 'https://www.reddit.com/r/cachyos',
        //patreon: 'https://www.patreon.com/CachyOS'
      },
      head: [
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: site + 'og.jpg?v=1',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'twitter:image',
            content: site + 'og.jpg?v=1',
          },
        },
      ],
      locales,
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Why CachyOS?',
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              link: 'cachyos_basic/download',
            },
          ],
        },
        {
          label: 'Installation',
          items: [
            {
              label: 'Installation Prepare',
              link: 'installation/installation_prepare',
            },
            {
              label: 'Bootloader',
              link: 'installation/bootloader',
            },
            {
              label: 'Filesystem',
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation Dual Boot',
              link: 'installation/installation_dualboot',
            },
            {
              label: 'Installation on Root with Secure Boot',
              link: 'installation/installation_secureboot',
            },
            {
              label: 'Updating CachyOS',
              link: 'installation/updating_cachyos.md',
            },
          ],
        },
        {
          label: 'Configuration',
          items: [
            {
              label: 'Post Install Setup',
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Dual GPU Laptops (NVIDIA + iGPU)',
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Modules Handling (NVIDIA/ZFS)',
              link: 'configuration/modules',
            },
            {
              label: 'General System Tweaks',
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'Kernel Manager',
              link: 'configuration/kernel_manager.mdx',
            },
            {
              label: 'Shell (Bash, zsh, fish)',
              link: 'configuration/shell',
            },
            {
              label: 'KDE Plasma',
              link: 'configuration/kde_plasma',
            },
            {
              label: 'GNOME',
              link: 'configuration/gnome',
            },
            {
              label: 'Hyprland',
              link: 'configuration/hyprland',
            },
            {
              label: 'i3',
              link: 'configuration/i3',
            },
          ],
        },
        {
          label: 'CachyOS Repositories',
          items: [
            {
              label: 'What are the CachyOS repositories?',
              link: 'cachyos_repositories/what_are_the_cachyos_repo',
            },
            {
              label: 'How to add CachyOS repositories?',
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'PGO, BOLT and other Optimization',
              link: 'cachyos_repositories/other_optimization',
            },
          ],
        },
        {
          label: 'Kernel',
          items: [
            {
              label: 'What are the CachyOS repositories?',
              link: 'kernel/kernel',
            },
          ],
        },
        {
          label: 'Support',
          items: [
            {
              label: 'Troubleshooting',
              link: 'support/troubleshooting',
            },
            {
              label: 'Getting Help',
              link: 'support/getting_help',
            },
            {
              label: 'Submitting Bugs',
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              link: 'support/submitting_package_requests',
            },
          ],
        },
        {
          label: 'Changelogs',
          items: [
            {
              label: 'GUI Installer and ISO',
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              link: 'changelogs/cli_installer',
            },

          ],
        },
        {
          label: 'Policy',
          items: [
            {
              label: 'Code of Conduct',
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Use',
              link: 'policy/terms_of_use',
            },
            {
              label: 'Privacy Policy',
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              link: 'policy/privacy_policy',
            },
            {
              label: 'Social',
              link: 'policy/social',
            },
            {
              label: 'Donation',
              link: 'policy/donation',
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
