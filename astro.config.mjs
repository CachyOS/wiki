import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import starlightKbd from 'starlight-kbd';
import lunaria from '@lunariajs/starlight';
import lunariaConfig from './lunaria.config.json';

const locales = {
  root: lunariaConfig.defaultLocale,
  ...lunariaConfig.locales.reduce((acc, locale) => {
    // @ts-expect-error Can't add types for accumulator
    acc[locale.lang] = {
      label: locale.label,
      lang: locale.lang,
    };
    return acc;
  }, {}),
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
      routeMiddleware: ['./src/middleware/outdated.ts', './src/middleware/ignore-fallback.ts'],
      title: 'CachyOS',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/cachyos/wiki/edit/next/',
      },
      expressiveCode: {
        themes: ['ayu-dark', 'light-plus'],
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/cachyos',
        },
        {
          icon: 'twitter',
          label: 'Twitter',
          href: 'https://twitter.com/cachyos',
        },
        {
          icon: 'telegram',
          label: 'Telegram',
          href: 'https://t.me/+oR-kWT47vRdmMDli',
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/cachyos-862292009423470592',
        },
      ],
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
      plugins: [
        lunaria({
          route: '/localization',
        }),
        starlightKbd({
          globalPicker: false,
          types: [{ id: 'linux', label: 'Linux', default: true }],
        }),
      ],
      locales,
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            cs: 'Začínáme',
            de: 'Erste Schritte',
            es: 'Empezando',
            et: 'Alustamine',
            fr: 'Commencer',
            id: 'Memulai',
            pl: 'Zaczynamy',
            ru: 'Начало работы',
            sk: 'Začíname',
          },
          items: [
            {
              label: 'Why CachyOS?',
              translations: {
                cs: 'Proč CachyOS?',
                de: 'Warum CachyOS?',
                es: '¿Por qué CachyOS?',
                et: 'Miks CachyOS?',
                fr: 'Pourquoi CachyOS ?',
                id: 'Mengapa CachyOS?',
                pl: 'Dlaczego CachyOS?',
                ru: 'Почему CachyOS?',
                sk: 'Prečo CachyOS?',
              },
              link: 'cachyos_basic/why_cachyos',
            },
            {
              label: 'Downloading CachyOS',
              translations: {
                cs: 'Stažení CachyOS',
                de: 'CachyOS herunterladen',
                es: 'Descargando CachyOS',
                et: 'CachyOS allalaadimine',
                fr: 'Téléchargement de CachyOS',
                id: 'Mengunduh CachyOS',
                pl: 'Pobieranie CachyOS',
                ru: 'Загрузка CachyOS',
                sk: 'Sťahovanie CachyOS',
              },
              link: 'cachyos_basic/download',
            },
          ],
        },
        {
          label: 'Installation',
          translations: {
            cs: 'Instalace',
            de: 'Installation',
            fr: 'Installation',
            pl: 'Instalacja',
            ru: 'Установка',
            sk: 'Inštalácia',
          },
          items: [
            {
              label: 'Requirements & Preinstall Setup',
              translations: {
                cs: 'Požadavky CachyOS a předinstalační příprava',
                de: 'Anforderungen und Vorinstallationsvorbereitung',
                fr: 'Exigences et préparation à l’installation',
                pl: 'Wymagania i przygotowanie do instalacji',
                ru: 'Требования и подготовка к установке',
                sk: 'Požiadavky CachyOS a inštalačné médium',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot Managers',
              translations: {
                cs: 'Správci zavádění',
                de: 'Boot-Manager',
                fr: 'Gestionnaires de démarrage',
                pl: 'Boot menedżer',
                ru: 'Boot менеджер',
                sk: 'Boot manažéry',
              },
              link: 'installation/boot_managers',
            },
            {
              label: 'Filesystem',
              translations: {
                cs: 'Souborový systém',
                de: 'Dateisystem',
                fr: 'Système de fichiers',
                pl: 'System plików',
                ru: 'Файловая система',
                sk: 'Súborový systém',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Screenshots',
              translations: {
                cs: 'Snímky obrazovky',
                de: 'Screenshots',
                fr: 'Captures d’écran',
                pl: 'Zrzuty ekranu',
                ru: 'Скриншоты',
                sk: 'Snímky obrazovky',
              },
              link: 'installation/screenshots',
            },
            {
              label: 'Desktop Environments',
              translations: {
                cs: 'Desktop prostředí',
                de: 'Desktop-Umgebungen',
                fr: 'Environnements de bureau',
                pl: 'Środowiska graficzne',
                ru: 'Окружения рабочего стола',
                sk: 'Desktopové prostredia',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Installation on Root',
              translations: {
                cs: 'Instalace na kořenový oddíl',
                de: 'Installation auf Root',
                fr: 'Installation sur la racine',
                ru: 'Установка на корневой раздел',
                sk: 'Inštalácia Root',
              },
              link: 'installation/installation_on_root',
            },
            {
              label: 'Installation T2 MacBook',
              translations: {
                ru: 'Установка на T2 MacBook',
                de: 'Installation auf T2 MacBook',
                fr: 'Installation sur T2 MacBook',
                pl: 'Instalacja na T2 MacBook',
                sk: 'Inštalácia na T2 MacBook',
                cs: 'Instalace na MacBook T2',
              },
              link: 'installation/installation_t2macbook',
            },
            {
              label: 'Installation Handheld Edition',
              translations: {
                cs: 'Instalace verze pro přenosné zařízení',
                de: 'Installation Handheld Edition',
                fr: 'Installation Handheld Edition',
                pl: 'Instalacja Handheld Edition',
                ru: 'Установка Handheld Edition',
                sk: 'Inštalácia Handheld Edition',
              },
              link: 'installation/installation_handheld',
            },
          ],
        },
        {
          label: 'CachyOS Features',
          translations: {
            cs: 'Funkce CachyOS',
            de: 'CachyOS Funktionen',
            fr: 'Fonctionnalités de CachyOS',
            pl: 'Funkcje CachyOS',
            ru: 'Возможности CachyOS',
            sk: 'Funkcie CachyOS',
          },
          items: [
            {
              label: 'CachyOS chroot Helper (cachy-chroot)',
              link: 'features/cachy_chroot',
              translations: {
                cs: 'Pomůcka pro chroot CachyOS (cachy-chroot)',
                de: 'CachyOS chroot-Helfer (cachy-chroot)',
                fr: 'CachyOS chroot Helper (cachy-chroot)',
                pl: 'CachyOS chroot menedżer (cachy-chroot)',
                ru: 'CachyOS chroot помощник (cachy-chroot)',
                sk: 'Pomôcka pre chroot CachyOS (cachy-chroot)',
              },
            },
            {
              label: 'CachyOS Hardware Detection (chwd)',
              link: 'features/chwd',
              translations: {
                cs: 'Detekce hardwaru CachyOS (chwd)',
                de: 'CachyOS Hardware-Erkennung (chwd)',
                fr: 'CachyOS Détection du matériel (chwd)',
                pl: 'CachyOS Wykrywanie sprzętu (chwd)',
                ru: 'CachyOS Обнаружение оборудования (chwd)',
                sk: 'Detekcia hardvéru CachyOS (chwd)',
              },
            },
            {
              label: 'CachyOS Kernel',
              translations: {
                cs: 'Jádro CachyOS',
                de: 'CachyOS-Kernel',
                fr: 'CachyOS Noyau',
                pl: 'Jądro CachyOS',
                ru: 'Ядро CachyOS',
                sk: 'Jadro CachyOS',
              },
              link: 'features/kernel',
            },
            {
              label: 'Kernel Manager',
              translations: {
                cs: 'Správce jader',
                de: 'Kernel-Manager',
                fr: 'Gestionnaire de noyau',
                ru: 'Менеджер ядер',
                sk: 'Správca jadra',
              },
              link: 'features/kernel_manager',
            },
            {
              label: 'CachyOS Settings',
              translations: {
                cs: 'Nastavení CachyOS',
                de: 'CachyOS-Einstellungen',
                fr: 'Paramètres de CachyOS',
                pl: 'Ustawienia CachyOS',
                ru: 'Настройки CachyOS',
                sk: 'Nastavenia CachyOS',
              },
              link: 'features/cachyos_settings',
            },
            {
              label: 'Optimized Repositories',
              translations: {
                cs: 'Optimalizované repozitáře',
                de: 'Optimierte Repositories',
                fr: 'Dépôts optimisés',
                pl: 'Zoptymalizowane repozytoria',
                ru: 'Оптимизированные репозитории',
                sk: 'Optimalizované repozitáre',
              },
              link: 'features/optimized_repos',
            },
          ],
        },
        {
          label: 'Configuration',
          translations: {
            cs: 'Nastavení',
            de: 'Konfiguration',
            fr: 'Configuration',
            pl: 'Konfiguracja',
            ru: 'Конфигурация',
            sk: 'Konfigurácia',
          },
          items: [
            {
              label: 'Secure Boot Setup',
              translations: {
                cs: 'Nastavení zabezpečeného spouštění',
                de: 'Secure Boot-Einrichtung',
                fr: 'Configuration de Secure Boot',
                pl: 'Konfiguracja Secure Boot',
                ru: 'Настройка Secure Boot',
                sk: 'Nastavenie zabezpečeného spúšťania',
              },
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Setup',
              translations: {
                cs: 'Nastavení po instalaci',
                de: 'Post-Install-Einrichtung',
                fr: 'Configuration après installation',
                pl: 'Konfiguracja po instalacji',
                ru: 'Настройка после установки',
                sk: 'Nastavenie po inštalácii',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Boot Manager Configuration',
              translations: {
                cs: 'Konfigurace správce spouštění',
                de: 'Boot-Manager-Konfiguration',
                fr: 'Configuration du gestionnaire de démarrage',
                pl: 'Konfiguracja Boot Managera',
                ru: 'Конфигурация Boot менеджера',
                sk: 'Konfigurácia Boot manažéra',
              },
              link: 'configuration/boot_manager_configuration',
            },
            {
              label: 'Dual GPU Laptops',
              translations: {
                cs: 'Notebooky s dvojitou GPU',
                de: 'Dual-GPU-Notebooks',
                fr: 'Ordinateurs portables à double GPU',
                pl: 'Laptopy z podwójnym GPU',
                ru: 'Ноутбуки с двумя GPU',
                sk: 'Dvojité GPU notebooky',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              link: 'configuration/gaming',
              translations: {
                cs: 'Hraní her',
                de: 'Gaming',
                fr: 'Jeux',
                pl: 'Gry',
                ru: 'Игры',
                sk: 'Hranie hier',
              },
            },
            {
              label: 'General System Tweaks',
              translations: {
                cs: 'Obecné úpravy systému',
                de: 'Allgemeine Systemanpassungen',
                fr: 'Ajustements généraux du système',
                pl: 'Ogólne poprawki systemowe',
                ru: 'Общие настройки системы',
                sk: 'Všeobecné systémové úpravy',
              },
              link: 'configuration/general_system_tweaks',
            },
            {
              label: 'sched-ext Tutorial',
              translations: {
                cs: 'sched-ext Tutoriál',
                de: 'sched-ext Anleitung',
                fr: 'Guide sched-ext',
                pl: 'sched-ext Poradnik',
                ru: 'Руководство по sched-ext',
                sk: 'sched-ext návod',
              },
              link: 'configuration/sched-ext',
            },
            {
              label: 'Automounting Additional Drives',
              translations: {
                cs: 'Automatické připojování dalších disků',
                de: 'Automatisches Einhängen zusätzlicher Laufwerke',
                fr: 'Montage automatique des disques supplémentaires',
                pl: 'Automatyczne montowanie dodatkowych dysków',
                ru: 'Автоматическое монтирование дополнительных дисков',
                sk: 'Automatické pripájanie ďalších diskov',
              },
              link: 'configuration/automount_with_fstab',
            },
            {
              label: 'Enabling Hardware Acceleration in Google Chrome',
              translations: {
                cs: 'Povolení hardwarové akcelerace v Google Chrome',
                de: 'Hardware-Beschleunigung in Google Chrome aktivieren',
                fr: 'Activer l’accélération matérielle dans Google Chrome',
                pl: 'Włączanie akceleracji sprzętowej w Google Chrome',
                ru: 'Включение аппаратного ускорения в Google Chrome',
                sk: 'Povolenie hardvérovej akcelerácie v Google Chrome',
              },
              link: 'configuration/enabling_hardware_acceleration_in_google_chrome',
            },
          ],
        },
        {
          label: 'Desktop Environments',
          translations: {
            cs: 'Desktopová prostředí',
            de: 'Desktop-Umgebungen',
            fr: 'Environnements de bureau',
            pl: 'Środowiska graficzne',
            ru: 'Окружения рабочего стола',
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
            cs: 'Podpora',
            de: 'Unterstützung',
            fr: 'Support',
            pl: 'Wsparcie',
            ru: 'Поддержка',
            sk: 'Podpora',
          },
          items: [
            {
              label: 'FAQ',
              translations: {
                cs: 'Často kladené otázky',
                de: 'Häufig gestellte Fragen',
                fr: 'FAQ',
                pl: 'Najczęściej zadawane pytania',
                ru: 'Часто задаваемые вопросы',
                sk: 'Najčastejšie kladené otázky',
              },
              link: 'support/faq',
            },
            {
              label: 'Submitting Bugs',
              translations: {
                cs: 'Nahlášení chyb',
                de: 'Fehlerberichte einreichen',
                fr: 'Soumettre des bugs',
                pl: 'Zgłaszanie błędów',
                ru: 'Отправка сообщений об ошибках',
                sk: 'Odoslanie chýb',
              },
              link: 'support/submitting_bugs',
            },
            {
              label: 'Submitting Package Requests',
              translations: {
                cs: 'Žádosti o balíčky',
                de: 'Paketanforderungen einreichen',
                fr: 'Demande de paquets',
                pl: 'Zgłaszanie próśb o pakiety',
                ru: 'Запросы на добавление пакетов',
                sk: 'Odoslanie požiadaviek na balíčky',
              },
              link: 'support/submitting_package_requests',
            },
            {
              label: 'AUR Safety: Quick Checklist for CachyOS Users',
              link: 'support/aur_safety_best_practices',
              translations: {
                cs: 'Bezpečnost AUR: Rychlý kontrolní seznam pro uživatele CachyOS',
                de: 'AUR-Sicherheit: Kurze Checkliste für CachyOS-Benutzer',
                fr: 'Sécurité AUR : Liste de contrôle rapide pour les utilisateurs de CachyOS',
                pl: 'Bezpieczeństwo AUR: Szybka lista kontrolna dla użytkowników CachyOS',
                ru: 'Безопасность AUR: Краткий контрольный список для пользователей CachyOS',
                sk: 'Bezpečnosť AUR: Rýchly kontrolný zoznam pre používateľov CachyOS',
              },
            },
            {
              label: 'Social',
              translations: {
                cs: 'Sociální sítě',
                de: 'Soziale Medien',
                fr: 'Réseaux sociaux',
                pl: 'Media społecznościowe',
                ru: 'Социальные сети',
                sk: 'Sociálne siete',
              },
              link: 'support/social',
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
          translations: {
            cs: 'Podmínky',
            de: 'Regeln',
            fr: 'Règles',
            pl: 'Zasady',
            ru: 'Правила',
            sk: 'Politika',
          },
          items: [
            {
              label: 'Community Rules',
              translations: {
                cs: 'Pravidla komunity',
                de: 'Gemeinschaftsregeln',
                fr: 'Règles de la communauté',
                id: 'Peraturan Komunitas',
                pl: 'Zasady społeczności',
                ru: 'Правила сообщества',
                sk: 'Pravidlá komunity',
              },
              link: 'policy/community-rules',
            },
            {
              label: 'Code of Conduct',
              translations: {
                cs: 'Kodex chování',
                de: 'Verhaltenskodex',
                fr: 'Code de conduite',
                pl: 'Kodeks postępowania',
                ru: 'Кодекс поведения',
                sk: 'Kódex správania',
              },
              link: 'policy/code_of_conduct',
            },
            {
              label: 'Terms of Service',
              translations: {
                cs: 'Obchodní podmínky',
                de: 'Nutzungsbedingungen',
                fr: 'Conditions d’utilisation',
                pl: 'Warunki korzystania z usługi',
                ru: 'Условия обслуживания',
                sk: 'Podmienky služby',
              },
              link: 'policy/terms_of_service',
            },
            {
              label: 'Privacy Policy',
              translations: {
                cs: 'Zásady ochrany osobních údajů',
                de: 'Datenschutz-Bestimmungen',
                fr: 'Politique de confidentialité',
                pl: 'Polityka prywatności',
                ru: 'Политика конфиденциальности',
                sk: 'Zásady ochrany osobných údajov',
              },
              link: 'policy/privacy_policy',
            },
            {
              label: 'Repository Policy',
              translations: {
                cs: 'Repozitářní politika',
                de: 'Repository Regeln',
                fr: 'Politique des dépôts',
                pl: 'Polityka repozytoriów',
                ru: 'Правила репозитория',
                sk: 'Politika repozitárov',
              },
              link: 'policy/repository_policy',
            },
            {
              label: 'Donation',
              translations: {
                cs: 'Dobrovolné příspěvky',
                de: 'Spende',
                fr: 'Don',
                pl: 'Darowizna',
                ru: 'Пожертвования',
                sk: 'Darcovstvo',
              },
              link: 'policy/donation',
            },
          ],
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
