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

const routeMiddleware = ['./src/middleware/ignore-fallback.ts'];
const plugins = [
  starlightKbd({
    globalPicker: false,
    types: [{ id: 'linux', label: 'Linux', default: true }],
  }),
];
if (import.meta.env.PROD) {
  routeMiddleware.push('./src/middleware/outdated.ts');
  plugins.push(
    lunaria({
      route: '/localization',
    })
  );
}

const site = 'https://wiki.cachyos.org/';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    starlight({
      locales,
      plugins,
      routeMiddleware,
      lastUpdated: true,
      customCss: ['./src/tailwind.css'],
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
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/cachyos-862292009423470592',
        },
        {
          icon: 'mastodon',
          label: 'Mastodon',
          href: 'https://fosstodon.org/@CachyOS',
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
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            cs: 'Začínáme',
            de: 'Erste Schritte',
            es: 'Empezando',
            et: 'Alustamine',
            fr: 'Bien Débuter',
            id: 'Memulai',
            pl: 'Zaczynamy',
            ru: 'Начало работы',
            sk: 'Začíname',
          },
          items: [
            {
              label: 'How to navigate through the wiki',
              translations: {
                cs: 'Jak se orientovat v wiki',
                de: 'Wie man im Wiki navigiert',
                es: 'Cómo navegar por la wiki',
                et: 'Kuidas vikis navigeerida',
                fr: 'Comment naviguer dans le wiki',
                id: 'Cara menavigasi wiki',
                pl: 'Jak poruszać się po wiki',
                ru: 'Как ориентироваться в вики',
                sk: 'Ako sa orientovať v wiki',
              },
              link: 'cachyos_basic/navigation-guide',
            },
            {
              label: 'Why CachyOS?',
              translations: {
                cs: 'Proč CachyOS?',
                de: 'Warum CachyOS?',
                es: '¿Por qué CachyOS?',
                et: 'Miks CachyOS?',
                fr: 'Pourquoi CachyOS',
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
                fr: 'Télécharger CachyOS',
                id: 'Mengunduh CachyOS',
                pl: 'Pobieranie CachyOS',
                ru: 'Загрузка CachyOS',
                sk: 'Sťahovanie CachyOS',
              },
              link: 'cachyos_basic/download',
            },
            {
              label: 'ISO Changelogs',
              autogenerate: { directory: 'cachyos_basic/changelogs' },
            },
            {
              label: 'FAQ & Troubleshooting',
              translations: {
                cs: 'FAQ a řešení problémů',
                de: 'FAQ & Fehlerbehebung',
                es: 'FAQ y solución de problemas',
                fr: 'FAQ & Guide de dépannage',
                pl: 'FAQ i rozwiązywanie problemów',
                ru: 'FAQ и устранение неполадок',
                sk: 'FAQ a riešenie problémov',
              },
              link: 'cachyos_basic/faq',
            },
          ],
        },
        {
          label: 'Installation',
          translations: {
            cs: 'Instalace',
            de: 'Installation',
            es: 'Instalación',
            fr: 'Installation',
            pl: 'Instalacja',
            ru: 'Установка',
            sk: 'Inštalácia',
          },
          items: [
            {
              label: 'Requirements & USB Preparation',
              translations: {
                cs: 'Požadavky a příprava USB',
                de: 'Anforderungen & USB-Vorbereitung',
                es: 'Requisitos y preparación de USB',
                fr: 'Exigences & Préinstallation',
                pl: 'Wymagania i przygotowanie USB',
                ru: 'Требования и подготовка USB',
                sk: 'Požiadavky a príprava USB',
              },
              link: 'installation/installation_prepare',
            },
            {
              label: 'Boot Managers',
              translations: {
                cs: 'Správci zavádění',
                de: 'Boot-Manager',
                es: 'Gestores de arranque',
                fr: "Gestionnaire d'amorçage",
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
                es: 'Sistema de archivos',
                fr: 'Système de fichier',
                pl: 'System plików',
                ru: 'Файловая система',
                sk: 'Súborový systém',
              },
              link: 'installation/filesystem',
            },
            {
              label: 'Desktop Environments',
              translations: {
                cs: 'Desktop prostředí',
                de: 'Desktop-Umgebungen',
                es: 'Entornos de escritorio',
                fr: 'Environnements de bureau',
                pl: 'Środowiska graficzne',
                ru: 'Окружения рабочего стола',
                sk: 'Desktopové prostredia',
              },
              link: 'installation/desktop_environments',
            },
            {
              label: 'Guides',
              translations: {
                cs: 'Průvodce',
                de: 'Anleitungen',
                es: 'Guías',
                pl: 'Przewodniki',
                ru: 'Руководства',
                sk: 'Príručky',
              },
              items: [
                {
                  label: 'Desktop Edition',
                  translations: {
                    cs: 'Desktop verze',
                    de: 'Desktop Edition',
                    es: 'Edición de escritorio',
                    fr: 'Edition Desktop',
                    pl: 'Wersja desktop',
                    ru: 'Настольная версия',
                    sk: 'Desktop verzia',
                  },
                  link: 'installation/installation_on_root',
                },
                {
                  label: 'Handheld Edition',
                  translations: {
                    cs: 'Handheld verze',
                    de: 'Handheld Edition',
                    es: 'Edición para dispositivos portátiles',
                    fr: 'Edition handheld',
                    pl: 'Wersja handheld',
                    ru: 'Ручная версия',
                    sk: 'Handheld verzia',
                  },
                  link: 'installation/installation_handheld',
                },
                {
                  label: 'T2 MacBook',
                  link: 'installation/installation_t2macbook',
                },
              ],
            },
          ],
        },
        {
          label: 'CachyOS Features',
          translations: {
            cs: 'Funkce CachyOS',
            de: 'CachyOS Funktionen',
            es: 'Funciones de CachyOS',
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
                es: 'CachyOS chroot asistente (cachy-chroot)',
                fr: 'CachyOS chroot assistant (cachy-chroot)',
                pl: 'CachyOS chroot menedżer (cachy-chroot)',
                ru: 'CachyOS chroot помощник (cachy-chroot)',
                sk: 'Pomôcka pre chroot CachyOS (cachy-chroot)',
              },
            },
            {
              label: 'CachyOS Hardware Detection (chwd)',
              autogenerate: { directory: 'features/chwd' },
              translations: {
                cs: 'Detekce hardwaru CachyOS (chwd)',
                de: 'CachyOS Hardware-Erkennung (chwd)',
                es: 'CachyOS detección de hardware (chwd)',
                fr: 'CachyOS Détection de Matériel (chwd)',
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
                es: 'Kernel CachyOS',
                fr: 'Noyau CachyOS',
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
                es: 'Gestor de núcleos',
                fr: 'Gestion de Noyaux',
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
                es: 'Ajustes de CachyOS',
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
                es: 'Repositorios optimizados',
                fr: 'Dépôts Optimisés',
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
            es: 'Configuración',
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
                es: 'Configuración de arranque seguro',
                fr: 'Configuration de Secure Boot',
                pl: 'Konfiguracja Secure Boot',
                ru: 'Настройка Secure Boot',
                sk: 'Nastavenie zabezpečeného spúšťania',
              },
              link: 'configuration/secure_boot_setup',
            },
            {
              label: 'Post Install Recommendations',
              translations: {
                cs: 'Návrhy po instalaci',
                de: 'Post-Install-Raten',
                es: 'Recomendaciones post-instalación',
                fr: 'Recommendations Post-Installation',
                pl: 'Rekomendacje po instalacji',
                ru: 'Рекомендации после установки',
                sk: 'Rekomendácie po inštalácii',
              },
              link: 'configuration/post_install_setup',
            },
            {
              label: 'Boot Manager Configuration',
              translations: {
                cs: 'Konfigurace správce spouštění',
                de: 'Boot-Manager-Konfiguration',
                es: 'Configuración del gestor de arranque',
                fr: "Configuration du gestionnaire d'amorçage",
                pl: 'Konfiguracja Boot Managera',
                ru: 'Конфигурация Boot менеджера',
                sk: 'Konfigurácia Boot manažéra',
              },
              link: 'configuration/boot_manager_configuration',
            },
            {
              label: 'Dual GPU',
              translations: {
                cs: 'Dvojité GPU',
                de: 'Doppelte GPU',
                es: 'GPU dual',
                fr: 'Double GPU',
                pl: 'Dwie GPU',
                ru: 'Двойная GPU',
                sk: 'Dvojité GPU',
              },
              link: 'configuration/dual_gpu',
            },
            {
              label: 'Gaming',
              link: 'configuration/gaming',
              translations: {
                cs: 'Hraní her',
                de: 'Gaming',
                es: 'Juegos',
                fr: 'Gaming',
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
                es: 'Ajustes generales del sistema',
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
                es: 'Tutorial de sched-ext',
                fr: 'Tutorial sur sched-ext',
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
                es: 'Montaje automático de unidades adicionales',
                fr: 'Montage automatique de disques supplémentaires',
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
                es: 'Habilitar la aceleración por hardware en Google Chrome',
                fr: 'Activer laccélération matérielle sur Google Chrome',
                pl: 'Włączanie akceleracji sprzętowej w Google Chrome',
                ru: 'Включение аппаратного ускорения в Google Chrome',
                sk: 'Povolenie hardvérovej akcelerácie v Google Chrome',
              },
              link: 'configuration/enabling_hardware_acceleration_in_google_chrome',
            },
            {
              label: 'Desktop Environments',
              autogenerate: { directory: 'configuration/desktop_environments' },
            },
          ],
        },
        {
          label: 'Support',
          translations: {
            cs: 'Podpora',
            de: 'Unterstützung',
            es: 'Soporte',
            fr: 'Support',
            pl: 'Wsparcie',
            ru: 'Поддержка',
            sk: 'Podpora',
          },
          items: [
            {
              label: 'Donation',
              translations: {
                cs: 'Dobrovolné příspěvky',
                de: 'Spende',
                es: 'Donación',
                fr: 'Donations',
                pl: 'Darowizna',
                ru: 'Пожертвования',
                sk: 'Darcovstvo',
              },
              link: 'support/donation',
            },
            {
              label: 'Social',
              translations: {
                cs: 'Sociální sítě',
                de: 'Soziale Medien',
                es: 'Redes sociales',
                fr: 'Réseaux Sociaux',
                pl: 'Media społecznościowe',
                ru: 'Социальные сети',
                sk: 'Sociálne siete',
              },
              link: 'support/social',
            },
          ],
        },
        {
          label: 'Policy',
          translations: {
            cs: 'Podmínky',
            de: 'Regeln',
            es: 'Política',
            fr: 'Politique',
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
                es: 'Reglas de la comunidad',
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
                es: 'Código de conducta',
                fr: 'Code de Conduite',
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
                es: 'Términos de servicio',
                fr: "Conditions générales d'utilisation",
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
                es: 'Política de privacidad',
                fr: 'Vie Privée',
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
                es: 'Política de repositorios',
                fr: 'Politique des dépôts',
                pl: 'Polityka repozytoriów',
                ru: 'Правила репозитория',
                sk: 'Politika repozitárov',
              },
              link: 'policy/repository_policy',
            },
          ],
        },
      ],
    }),
  ],
});
