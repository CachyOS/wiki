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
  sk: {
    label: 'Slovensky',
    lang: 'sk',
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
      components: {
        Head: "./src/components/starlight/Head.astro",
      },
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
      expressiveCode: {
        shiki: {
          langs: [
            'ini'
          ],
        },
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
          translations: {
            'sk': 'Začíname',
          },
          items: [
            {
              label: 'Why CachyOS?',
              translations: {
                'sk': 'Prečo CachyOS?',
              },
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              translations: {
                'sk': 'Sťahovanie CachyOS',
              },
              link: 'cachyos_basic/download',
            },
          ],
        },
        {
          label: 'Installation',
          translations: {
            'sk': 'Inštalácia',
          },
          items: [
            {
              label: 'Installation Prepare',
              translations: {
                'sk': 'Príprava na inštaláciu',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot managers',
              translations: {
                'sk': 'Boot manažéri',
              },
              link: 'installation/bootmanagers',
            },
            {
              label: 'Filesystem',
              translations: {
                'sk': 'Súborový systém',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              translations: {
                'sk': 'Snímky obrazovky',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                'sk': 'Desktopové prostredia',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                'sk': 'Inštalácia Root',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation Dual Boot',
              translations: {
                'sk': 'Inštalácia Dual Root',
              },
              link: 'installation/installation_dualboot',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                'sk': 'Inštalácia na T2 MacBook',
              },
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Installation on Root with Secure Boot',
              translations: {
                'sk': 'Inštalácia Root so zabezpečeným spustením',
              },
              link: 'installation/installation_secureboot',
            },
             {
              label: 'Installation Handheld Edition',
              translations: {
                'sk': 'Inštalácia Handheld Edition',
              },
              link: 'installation/installation_handheld',
            },
            {
              label: 'Updating CachyOS',
              translations: {
                'sk': 'Aktualizácia CachyOS',
              },
              link: 'installation/updating_cachyos',
            },
          ],
        },
        {
          label: 'Configuration',
          translations: {
            'sk': 'Konfigurácia',
          },
          items: [
            {
              label: 'Post Install Setup',
              translations: {
                'sk': 'Nastavenie po inštalácii',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Dual GPU Laptops (NVIDIA + iGPU)',
              translations: {
                'sk': 'Dvojité GPU notebooky (NVIDIA + iGPU)',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'General System Tweaks',
              translations: {
                'sk': 'Všeobecné systémové úpravy',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'Kernel Manager',
              translations: {
                'sk': 'Správca jadra',
              },
              link: 'configuration/kernel-manager',
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
            {
              label: 'Qtile',
              link: 'configuration/qtile',
            },
          ],
        },
        {
          label: 'CachyOS Repositories',
          translations: {
            'sk': 'CachyOS Repozitáre',
          },
          items: [
            {
              label: 'What are the CachyOS repositories?',
              translations: {
                'sk': 'Čo sú repozitáre CachyOS?',
              },
              link: 'cachyos_repositories/what_are_the_cachyos_repo',
            },
            {
              label: 'How to add CachyOS repositories?',
              translations: {
                'sk': 'Ako pridať repozitáre CachyOS?',
              },
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'PGO, BOLT and other Optimization',
              translations: {
                'sk': 'PGO, BOLT a iné optimalizácie',
              },
              link: 'cachyos_repositories/other_optimization',
            },
          ],
        },
        {
          label: 'Kernel',
          translations: {
            'sk': 'Jadro',
          },
          items: [
            {
              label: 'CachyOS Kernel Features',
              translations: {
                'sk': 'Funkcie jadra CachyOS',
              },
              link: 'kernel/kernel',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                'sk': 'sched-ext návod',
              },
              link: 'kernel/sched-ext',
            },
            {
              label: 'Modules Handling (NVIDIA/ZFS)',
              translations: {
                'sk': 'Správa modulov (NVIDIA/ZFS)',
              },
              link: 'kernel/modules',
            },
          ],
        },
        {
          label: 'Support',
          translations: {
            'sk': 'Podpora',
          },
          items: [
            {
              label: 'FAQ',
              link: 'support/faq',
            },
            {
              label: 'Troubleshooting',
              translations: {
                'sk': 'Riešenie problémov',
              },
              link: 'support/troubleshooting',
            },
            {
              label: 'Getting Help',
              translations: {
                'sk': 'Získanie pomoci',
              },
              link: 'support/getting_help',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                'sk': 'Odoslanie chýb',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                'sk': 'Odoslanie požiadaviek na balíčky',
              },
              link: 'support/submitting_package_requests',
            },
          ],
        },
        {
          label: 'Changelogs',
          translations: {
            'sk': 'Zmenové logy',
          },
          items: [
            {
              label: 'GUI Installer and ISO',
              translations: {
                'sk': 'GUI Inštalátor a ISO',
              },
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              translations: {
                'sk': 'CLI Inštalátor',
              },
              link: 'changelogs/cli_installer',
            },

          ],
        },
        {
          label: 'Policy',
          translations: {
            'sk': 'Politika',
          },
          items: [
            {
              label: 'Code of Conduct',
              translations: {
                'sk': 'Kódex správania',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                'sk': 'Podmienky služby',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                'sk': 'Zásady ochrany osobných údajov',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                'sk': 'Politika repozitárov',
              },
              link: 'policy/repository_policy',
            },
            {
              label: 'Social',
              translations: {
                'sk': 'Sociálne siete',
              },
              link: 'policy/social',
            },
            {
              label: 'Donation',
              translations: {
                'sk': 'Darcovstvo',
              },
              link: 'policy/donation',
            },
          ],
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
