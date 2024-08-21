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
  id: {
    label: 'Indonesian',
    lang: 'id',
  },
  fr: {
    label: 'Français',
    lang: 'fr',
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
            fr: 'Commençons',
          },
          items: [
            {
              label: 'Why CachyOS?',
              translations: {
                sk: 'Prečo CachyOS?',
                cs: 'Proč CachyOS?',
                fr: 'Pourquoi CachyOS?',
              },
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              translations: {
                sk: 'Sťahovanie CachyOS',
                cs: 'Stažení CachyOS',
                fr: 'Télécharger CachyOS',
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
            fr: 'Installation',
          },
          items: [
            {
              label: 'Installation Prepare',
              translations: {
                sk: 'Príprava na inštaláciu',
                cs: 'Příprava Instalace',
                fr: 'Préparation à l\'installation',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot Managers',
              translations: {
                sk: 'Boot manažéry',
                cs: 'Boot manažeři',
                fr: 'Gestionnaire de démarrage',
              },
              link: 'installation/boot_managers',
            },
            {
              label: 'Filesystem',
              translations: {
                sk: 'Súborový systém',
                cs: 'Filesystem',
                fr: 'Système de fichiers',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              translations: {
                sk: 'Snímky obrazovky',
                cs: 'Screenshots',
                fr: 'Capture d\'écrans',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                sk: 'Desktopové prostredia',
                cs: 'Desktop prostředí',
                fr: 'Environnements de bureau',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                sk: 'Inštalácia Root',
                cs: 'Instalace na kořenový oddíl',
                fr: 'Installation à la racine',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation on VirtualBox',
              translations: {
                sk: 'Inštalácia na VirtualBox',
                cs: 'Instalace na VirtualBox',
                fr: 'Installation dans VirtualBox',
              },
              link: 'installation/installation_virtualbox',
            },
            {
              label: 'Installation on VMware Workstation',
              translations: {
                sk: 'Inštalácia na VMware Workstation',
                cs: 'Instalace na VMware Workstation',
                fr: 'Installation dans VMware Workstation',
              },
              link: 'installation/installation_vmware',
            },
            {
              label: 'Installation Dual Boot',
              translations: {
                sk: 'Inštalácia Dual Root',
                cs: 'Instalace duálního zavaděče',
                fr:'Installation en Dual Boot',
              },
              link: 'installation/installation_dualboot',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                sk: 'Inštalácia na T2 MacBook',
                cs: 'Instalace na MacBook T2',
                fr: 'Installation sur un MacBook T2',
              },
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Installation Handheld Edition',
              translations: {
                sk: 'Inštalácia Handheld Edition',
                cs: 'Instalace verze pro přenosné zařízení',
                fr: 'Installation sur machine portable',
              },
              link: 'installation/installation_handheld',
            },
            {
              label: 'Updating CachyOS',
              translations: {
                sk: 'Aktualizácia CachyOS',
                cs: 'Aktualizace CachyOS',
                fr: 'Mettre à jour CachyOS',
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
            fr: 'Configuration';
          },
          items: [
            {
              label: 'Secure Boot Setup',
              translations: {
                fr: 'Réglage du Démarrage Sécurisé',
              }   ,
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Setup',
              translations: {
                sk: 'Nastavenie po inštalácii',
                cs: 'Nastavení po instalaci',
                fr: 'Réglage Post installation',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Boot Manager Configuration',
              translations: {
                fr: 'Configuration des gestionnaires de démarrage',
              },
              link: 'configuration/boot_manager_configuration',
            },
            {
              label: 'Dual GPU Laptops (NVIDIA + iGPU)',
              translations: {
                sk: 'Dvojité GPU notebooky (NVIDIA + iGPU)',
                cs: 'Notebooky s dvojitou GPU (NVIDIA + iGPU)',
                fr: 'PC portable et Double GPU (NVIDIA + iGPU)',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              translations: {
                fr: 'Le jeu',
                },
              link: 'configuration/gaming',
            },
            {
              label: 'General System Tweaks',
              translations: {
                sk: 'Všeobecné systémové úpravy',
                cs: 'Obecná úprava systému',
                fr: 'Ajustements du système',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'Kernel Manager',
              translations: {
                sk: 'Správca jadra',
                cs: 'Správce jader',
                fr: 'Gestionnaire de noyaux',
              },
              link: 'configuration/kernel-manager',
            },
            {
              label: 'Shell (Bash, zsh, fish)',
              translations: {
                fr: 'Terminaux: Bash/Zsh/Fish',
              },
              link: 'configuration/shell',
            },
            {
              label: 'KDE Plasma',
              translations: {
                fr: 'Bureau KDE Plasma',
              },
              link: 'configuration/kde_plasma',
            },
            {
              label: 'GNOME',
              translations: {
                fr: 'Bureau GNOME',
              },
              link: 'configuration/gnome',
            },
            {
              label: 'Hyprland',
              translations: {
                fr: 'Bureau Hyprland',
              },
              link: 'configuration/hyprland',
            },
            {
              label: 'i3',
              translations: {
                fr: 'Bureau I3',
              },
              link: 'configuration/i3',
            },
            {
              label: 'Qtile',
              translations: {
                fr: 'Bureau Qti',
              },
              link: 'configuration/qtile',
            },
          ],
        },
        {
          label: 'CachyOS Repositories',
          translations: {
            sk: 'CachyOS Repozitáre',
            cs: 'CachyOS repozitáře',
            fr: 'Les dépôts CachyOS',
          },
          items: [
            {
              label: 'What are the CachyOS repositories?',
              translations: {
                sk: 'Čo sú repozitáre CachyOS?',
                cs: 'Co jsou CachyOS repozitáře?',
                fr: 'Que sont les dépôts CachyOS?',
              },
              link: 'cachyos_repositories/what_are_the_cachyos_repo',
            },
            {
              label: 'How to add CachyOS repositories?',
              translations: {
                sk: 'Ako pridať repozitáre CachyOS?',
                cs: 'Jak přidat CachyOS repozitáře?',
                fr: 'Ajouter les dépôts CachyOS',
              },
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'PGO, BOLT and other Optimization',
              translations: {
                sk: 'PGO, BOLT a iné optimalizácie',
                cs: 'PGO, BOLT a další optimalizace',
                fr: 'Optimisations pour PGO, BOLT et autres',
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
            fr: 'Les noyaux',
          },
          items: [
            {
              label: 'CachyOS Kernel Features',
              translations: {
                sk: 'Funkcie jadra CachyOS',
                cs: 'Funkce CachyOS kernelu',
                fr: 'Les fonctionnalités des kernel CachyOS',
              },
              link: 'kernel/kernel',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                sk: 'sched-ext návod',
                cs: 'sched-ext Tutoriál',
                fr: 'Tutoriel sched-ext',
              },
              link: 'kernel/sched-ext',
            },
            {
              label: 'Modules Handling (NVIDIA/ZFS)',
              translations: {
                sk: 'Správa modulov (NVIDIA/ZFS)',
                cs: 'Správa modulů (NVIDIA/ZFS)',
                fr: 'Gestion des modules (NVIDIA/ZFS)',
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
            fr: 'Support',
          },
          items: [
            {
              label: 'FAQ',
              translations: {
                cs: 'Často kladené otázky',
                fr: 'Foire aux questions (FAQ)','
              },
              link: 'support/faq',
            },
            {
              label: 'Troubleshooting',
              translations: {
                sk: 'Riešenie problémov',
                cs: 'Řešení potíží',
                fr: 'Dépannage',
              },
              link: 'support/troubleshooting',
            },
            {
              label: 'Getting Help',
              translations: {
                sk: 'Získanie pomoci',
                cs: 'Jak získat pomoc',
                fr: 'Demander de l\'aide',
              },
              link: 'support/getting_help',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                sk: 'Odoslanie chýb',
                cs: 'Nahlášení chyb',
                fr: 'Remonter des bugs',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                sk: 'Odoslanie požiadaviek na balíčky',
                cs: 'Žádosti o balíčky',
                fr: 'Soumettre des demandes de paquets',
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
            fr: 'Journaux des modifications',
          },
          items: [
            {
              label: 'GUI Installer and ISO',
              translations: {
                sk: 'GUI Inštalátor a ISO',
                cs: 'Grafický instalátor a ISO',
                fr: 'Installeur graphique et image ISO',
              },
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              translations: {
                sk: 'CLI Inštalátor',
                cs: 'Příkazový řádek instalátoru',
                fr: 'Installeur en ligne de commande',
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
            fr: 'Réglement',
          },
          items: [
            {
              label: 'Community Rules',
              translations: {
                id: 'Peraturan Komunitas',
                fr: 'Régles de la communauté',
              },
              link: 'policy/community-rules',
            },
            {
              label: 'Code of Conduct',
              translations: {
                sk: 'Kódex správania',
                cs: 'Kodex chování',
                fr: 'Code de conduite',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                sk: 'Podmienky služby',
                cs: 'Obchodní podmínky',
                fr: 'Conditions d\'utilisation',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                sk: 'Zásady ochrany osobných údajov',
                cs: 'Zásady ochrany osobních údajů',
                fr: 'Politique de confidentialité',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                sk: 'Politika repozitárov',
                cs: 'Repozitářní politika',
                fr: 'Réglement des Dépôts',
              },
              link: 'policy/repository_policy',
            },
            {
              label: 'Social',
              translations: {
                sk: 'Sociálne siete',
                cs: 'Sociální sítě',
                fr: 'Réseaux sociaux',
              },
              link: 'policy/social',
            },
            {
              label: 'Donation',
              translations: {
                sk: 'Darcovstvo',
                cs: 'Dobrovolné příspěvky',
                fr: 'Dons',
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
