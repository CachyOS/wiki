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
  cs: {
    label: 'Čeština',
    lang: 'cs',
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
        Head: './src/components/starlight/Head.astro',
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
          langs: ['ini'],
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
            sk: 'Začíname',
            cs: 'Začínáme',
          },
          items: [
            {
              label: 'Why CachyOS?',
              translations: {
                sk: 'Prečo CachyOS?',
                cs: 'Proč CachyOS?',
              },
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              translations: {
                sk: 'Sťahovanie CachyOS',
                cs: 'Stažení CachyOS',
              },
              link: 'cachyos_basic/download',
            },
          ],
        },
        {
          label: 'Installation',
          translations: {
            sk: 'Inštalácia',
            cs: 'Instalace',
          },
          items: [
            {
              label: 'Installation Prepare',
              translations: {
                sk: 'Príprava na inštaláciu',
                cs: 'Příprava Instalace',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot managers',
              translations: {
                sk: 'Boot manažéry',
                cs: 'Boot manažeři',
              },
              link: 'installation/bootmanagers',
            },
            {
              label: 'Filesystem',
              translations: {
                sk: 'Súborový systém',
                cs: 'Filesystem',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              translations: {
                sk: 'Snímky obrazovky',
                cs: 'Screenshots',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                sk: 'Desktopové prostredia',
                cs: 'Desktop prostředí',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                sk: 'Inštalácia Root',
                cs: 'Instalace na kořenový oddíl',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation on VirtualBox',
              translations: {
                sk: 'Inštalácia na VirtualBox',
                cs: 'Instalace na VirtualBox',
              },
              link: 'installation/installation_virtualbox',
            },
            {
              label: 'Installation on VMware Workstation',
              translations: {
                sk: 'Inštalácia na VMware Workstation',
                cs: 'Instalace na VMware Workstation',
              },
              link: 'installation/installation_vmware',
            },
            {
              label: 'Installation Dual Boot',
              translations: {
                sk: 'Inštalácia Dual Root',
                cs: 'Instalace duálního zavaděče',
              },
              link: 'installation/installation_dualboot',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                sk: 'Inštalácia na T2 MacBook',
                cs: 'Instalace na MacBook T2',
              },
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Installation Handheld Edition',
              translations: {
                sk: 'Inštalácia Handheld Edition',
                cs: 'Instalace verze pro přenosné zařízení',
              },
              link: 'installation/installation_handheld',
            },
            {
              label: 'Updating CachyOS',
              translations: {
                sk: 'Aktualizácia CachyOS',
                cs: 'Aktualizace CachyOS',
              },
              link: 'installation/updating_cachyos',
            },
          ],
        },
        {
          label: 'Configuration',
          translations: {
            sk: 'Konfigurácia',
            cs: 'Nastavení',
          },
          items: [
            {
              label: 'Secure Boot Setup',
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Setup',
              translations: {
                sk: 'Nastavenie po inštalácii',
                cs: 'Nastavení po instalaci',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Bootloader Configuration',
              link: 'configuration/bootloader_configuration',
            },
            {
              label: 'Dual GPU Laptops (NVIDIA + iGPU)',
              translations: {
                sk: 'Dvojité GPU notebooky (NVIDIA + iGPU)',
                cs: 'Notebooky s dvojitou GPU (NVIDIA + iGPU)',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              link: 'configuration/gaming',
            },
            {
              label: 'General System Tweaks',
              translations: {
                sk: 'Všeobecné systémové úpravy',
                cs: 'Obecná úprava systému',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'Kernel Manager',
              translations: {
                sk: 'Správca jadra',
                cs: 'Správce jader',
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
            sk: 'CachyOS Repozitáre',
            cs: 'CachyOS repozitáře',
          },
          items: [
            {
              label: 'What are the CachyOS repositories?',
              translations: {
                sk: 'Čo sú repozitáre CachyOS?',
                cs: 'Co jsou CachyOS repozitáře?',
              },
              link: 'cachyos_repositories/what_are_the_cachyos_repo',
            },
            {
              label: 'How to add CachyOS repositories?',
              translations: {
                sk: 'Ako pridať repozitáre CachyOS?',
                cs: 'Jak přidat CachyOS repozitáře?',
              },
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'PGO, BOLT and other Optimization',
              translations: {
                sk: 'PGO, BOLT a iné optimalizácie',
                cs: 'PGO, BOLT a další optimalizace',
              },
              link: 'cachyos_repositories/other_optimization',
            },
          ],
        },
        {
          label: 'Kernel',
          translations: {
            sk: 'Jadro',
            cs: 'Kernel',
          },
          items: [
            {
              label: 'CachyOS Kernel Features',
              translations: {
                sk: 'Funkcie jadra CachyOS',
                cs: 'Funkce CachyOS kernelu',
              },
              link: 'kernel/kernel',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                sk: 'sched-ext návod',
                cs: 'sched-ext Tutoriál',
              },
              link: 'kernel/sched-ext',
            },
            {
              label: 'Modules Handling (NVIDIA/ZFS)',
              translations: {
                sk: 'Správa modulov (NVIDIA/ZFS)',
                cs: 'Správa modulů (NVIDIA/ZFS)',
              },
              link: 'kernel/modules',
            },
          ],
        },
        {
          label: 'Support',
          translations: {
            sk: 'Podpora',
            cs: 'Podpora',
          },
          items: [
            {
              label: 'FAQ',
              translations: {
                cs: 'Často kladené otázky',
              },
              link: 'support/faq',
            },
            {
              label: 'Troubleshooting',
              translations: {
                sk: 'Riešenie problémov',
                cs: 'Řešení potíží',
              },
              link: 'support/troubleshooting',
            },
            {
              label: 'Getting Help',
              translations: {
                sk: 'Získanie pomoci',
                cs: 'Jak získat pomoc',
              },
              link: 'support/getting_help',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                sk: 'Odoslanie chýb',
                cs: 'Nahlášení chyb',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                sk: 'Odoslanie požiadaviek na balíčky',
                cs: 'Žádosti o balíčky',
              },
              link: 'support/submitting_package_requests',
            },
          ],
        },
        {
          label: 'Changelogs',
          translations: {
            sk: 'Zmenové logy',
            cs: 'Změny',
          },
          items: [
            {
              label: 'GUI Installer and ISO',
              translations: {
                sk: 'GUI Inštalátor a ISO',
                cs: 'Grafický instalátor a ISO',
              },
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              translations: {
                sk: 'CLI Inštalátor',
                cs: 'Příkazový řádek instalátoru',
              },
              link: 'changelogs/cli_installer',
            },
          ],
        },
        {
          label: 'Policy',
          translations: {
            sk: 'Politika',
            cs: 'Podmínky',
          },
          items: [
            {
              label: 'Community Rules',
              link: 'policy/community-rules',
            },
            {
              label: 'Code of Conduct',
              translations: {
                sk: 'Kódex správania',
                cs: 'Kodex chování',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                sk: 'Podmienky služby',
                cs: 'Obchodní podmínky',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                sk: 'Zásady ochrany osobných údajov',
                cs: 'Zásady ochrany osobních údajů',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                sk: 'Politika repozitárov',
                cs: 'Repozitářní politika',
              },
              link: 'policy/repository_policy',
            },
            {
              label: 'Social',
              translations: {
                sk: 'Sociálne siete',
                cs: 'Sociální sítě',
              },
              link: 'policy/social',
            },
            {
              label: 'Donation',
              translations: {
                sk: 'Darcovstvo',
                cs: 'Dobrovolné příspěvky',
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
