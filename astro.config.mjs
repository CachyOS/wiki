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
          translations: {
            ru: 'Начало работы',
            sk: 'Začíname',
            cs: 'Začínáme',
          },
          items: [
            {
              label: 'Why CachyOS?',
              translations: {
                ru: 'Почему CachyOS?',
                sk: 'Prečo CachyOS?',
                cs: 'Proč CachyOS?',
              },
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              translations: {
                ru: 'Загрузка CachyOS',
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
            ru: 'Установка',
            sk: 'Inštalácia',
            cs: 'Instalace',
          },
          items: [
            {
              label: 'Requirements & Preinstall Setup',
              translations: {
                ru: 'Требования и подготовка к установке',
                sk: 'Požiadavky CachyOS a inštalačné médium',
                cs: 'Požadavky CachyOS a předinstalační příprava',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot Managers',
              translations: {
                ru: 'Boot менеджер',
                sk: 'Boot manažéry',
                cs: 'Správci zavádění',
              },
              link: 'installation/boot_managers',
            },
            {
              label: 'Filesystem',
              translations: {
                ru: 'Файловая система',
                sk: 'Súborový systém',
                cs: 'Souborový systém',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              translations: {
                ru: 'Скриншоты',
                sk: 'Snímky obrazovky',
                cs: 'Snímky obrazovky',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                ru: 'Окружения рабочего стола',
                sk: 'Desktopové prostredia',
                cs: 'Desktop prostředí',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                ru: 'Установка на корневой раздел',
                sk: 'Inštalácia Root',
                cs: 'Instalace na kořenový oddíl',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                ru: 'Установка на T2 MacBook',
                sk: 'Inštalácia na T2 MacBook',
                cs: 'Instalace na MacBook T2',
              },
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Installation Handheld Edition',
              translations: {
                ru: 'Установка Handheld Edition',
                sk: 'Inštalácia Handheld Edition',
                cs: 'Instalace verze pro přenosné zařízení',
              },
              link: 'installation/installation_handheld',
            },
          ],
        },
        {
          label: 'CachyOS Features',
          translations: {
            ru: 'Возможности CachyOS',
            cs: 'Funkce CachyOS',
            sk: 'Funkcie CachyOS',
          },
          items: [
            {
              label: 'CachyOS chroot Helper (cachy-chroot)',
              link: 'features/cachy_chroot',
              translations: {
                ru: 'CachyOS chroot помощник (cachy-chroot)',
                cs: 'Pomůcka pro chroot CachyOS (cachy-chroot)',
                sk: 'Pomôcka pre chroot CachyOS (cachy-chroot)',
              },
            },
            {
              label: 'CachyOS Hardware Detection (chwd)',
              link: 'features/chwd',
              translations: {
                ru: 'CachyOS Обнаружение оборудования (chwd)',
                cs: 'Detekce hardwaru CachyOS (chwd)',
                sk: 'Detekcia hardvéru CachyOS (chwd)',
              },
            },
            {
              label: 'CachyOS Kernel',
              translations: {
                ru: 'Ядро CachyOS',
                cs: 'Jádro CachyOS',
                sk: 'Jadro CachyOS',
              },
              link: 'features/kernel',
            },
            {
              label: 'Kernel Manager',
              translations: {
                ru: 'Менеджер ядер',
                sk: 'Správca jadra',
                cs: 'Správce jader',
              },
              link: 'features/kernel_manager',
            },
            {
              label: 'CachyOS Settings',
              translations: {
                ru: 'Настройки CachyOS',
                cs: 'Nastavení CachyOS',
                sk: 'Nastavenia CachyOS',
              },
              link: 'features/cachyos_settings',
            },
            {
              label: 'Optimized Repositories',
              translations: {
                ru: 'Оптимизированные репозитории',
                cs: 'Optimalizované repozitáře',
                sk: 'Optimalizované repozitáre',
              },
              link: 'features/optimized_repos',
            },
          ],
        },
        {
          label: 'Configuration',
          translations: {
            ru: 'Конфигурация',
            sk: 'Konfigurácia',
            cs: 'Nastavení',
          },
          items: [
            {
              label: 'Secure Boot Setup',
              translations: {
                ru: 'Настройка Secure Boot',
                cs: 'Nastavení zabezpečeného spouštění',
                sk: 'Nastavenie zabezpečeného spúšťania',
              },
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Setup',
              translations: {
                ru: 'Настройка после установки',
                sk: 'Nastavenie po inštalácii',
                cs: 'Nastavení po instalaci',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Boot Manager Configuration',
              translations: {
                ru: 'Конфигурация Boot менеджера',
                sk: 'Konfigurácia Boot manažéra',
                cs: 'Konfigurace správce spouštění',
              },
              link: 'configuration/boot_manager_configuration',
            },
            {
              label: 'Dual GPU Laptops',
              translations: {
                ru: 'Ноутбуки с двумя GPU',
                sk: 'Dvojité GPU notebooky',
                cs: 'Notebooky s dvojitou GPU',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              link: 'configuration/gaming',
              translations: {
                ru: 'Игры',
                cs: 'Hraní her',
                sk: 'Hranie hier',
              },
            },
            {
              label: 'General System Tweaks',
              translations: {
                ru: 'Общие настройки системы',
                sk: 'Všeobecné systémové úpravy',
                cs: 'Obecné úpravy systému',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                ru: 'Руководство по sched-ext',
                sk: 'sched-ext návod',
                cs: 'sched-ext Tutoriál',
              },
              link: 'configuration/sched-ext',
            },
            {
              label: 'NVIDIA Wayland Overclocking',
              translations: {
                ru: 'Разгон NVIDIA на Wayland',
                cs: 'Přetaktování NVIDIA na Waylandu',
                sk: 'Pretaktovanie NVIDIA na Waylande',
              },
              link: 'configuration/nvidia-wayland-overclock',
            },
            {
              label: 'Automounting Additional Drives',
              translations: {
                ru: 'Автоматическое монтирование дополнительных дисков',
                cs: 'Automatické připojování dalších disků',
                sk: 'Automatické pripájanie ďalších diskov',
              },
              link: 'configuration/automount_with_fstab',
            },
          ],
        },
        {
          label: 'Desktop Environments',
          translations: {
            ru: 'Окружения рабочего стола',
            cs: 'Desktopová prostředí',
            sk: 'Desktopové prostredia',
          },
          items: [
            {
              label: 'i3',
              link: 'desktop_environments/i3',
            },
            {
              label: 'Hyprland',
              link: 'desktop_environments/hyprland',
            },
            {
              label: 'Qtile',
              link: 'desktop_environments/qtile',
            },
            {
              label: 'KDE Plasma',
              link: 'desktop_environments/kde',
            },
          ],
        },
        {
          label: 'Support',
          translations: {
            ru: 'Поддержка',
            sk: 'Podpora',
            cs: 'Podpora',
          },
          items: [
            {
              label: 'FAQ',
              translations: {
                ru: 'Часто задаваемые вопросы',
                cs: 'Často kladené otázky',
                sk: 'Najčastejšie kladené otázky',
              },
              link: 'support/faq',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                ru: 'Отправка сообщений об ошибках',
                sk: 'Odoslanie chýb',
                cs: 'Nahlášení chyb',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                ru: 'Запросы на добавление пакетов',
                sk: 'Odoslanie požiadaviek na balíčky',
                cs: 'Žádosti o balíčky',
              },
              link: 'support/submitting_package_requests',
            },
            {
              label: 'Social',
              translations: {
                ru: 'Социальные сети',
                sk: 'Sociálne siete',
                cs: 'Sociální sítě',
              },
              link: 'support/social',
            },
          ],
        },
        {
          label: 'Changelogs',
          translations: {
            ru: 'История изменений',
            sk: 'Zmenové logy',
            cs: 'Změny',
          },
          items: [
            {
              label: 'GUI Installer and ISO',
              translations: {
                ru: 'GUI установщик и ISO',
                sk: 'GUI Inštalátor a ISO',
                cs: 'Grafický instalátor a ISO',
              },
              link: 'changelogs/gui_installer',
            },
            {
              label: 'CLI Installer',
              translations: {
                ru: 'CLI установщик',
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
            ru: 'Политика',
            sk: 'Politika',
            cs: 'Podmínky',
          },
          items: [
            {
              label: 'Community Rules',
              translations: {
                ru: 'Правила сообщества',
                id: 'Peraturan Komunitas',
                sk: 'Pravidlá komunity',
                cs: 'Pravidla komunity',
              },
              link: 'policy/community-rules',
            },
            {
              label: 'Code of Conduct',
              translations: {
                ru: 'Кодекс поведения',
                sk: 'Kódex správania',
                cs: 'Kodex chování',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                ru: 'Условия обслуживания',
                sk: 'Podmienky služby',
                cs: 'Obchodní podmínky',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                ru: 'Политика конфиденциальности',
                sk: 'Zásady ochrany osobných údajov',
                cs: 'Zásady ochrany osobních údajů',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                ru: 'Политика репозитория',
                sk: 'Politika repozitárov',
                cs: 'Repozitářní politika',
              },
              link: 'policy/repository_policy',
            },
            {
              label: 'Donation',
              translations: {
                ru: 'Пожертвования',
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
