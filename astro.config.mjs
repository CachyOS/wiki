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
          label: 'Start with CachyOS',
          translations: {
            ru: 'Начните с CachyOS',
            de: 'Starte mit CachyOS',
          },
          items: [
            {
              label: 'What is CachyOS?',
              translations: {
                ru: 'Что такое CachyOS?',
                de: 'Was ist das CachyOS?',
              },
              link: 'cachyos_basic/cachyos_description',
            },
            {
              label: 'How to download CachyOS?',
              translations: {
                ru: 'Как скачать CachyOS?',
                de: 'Wie lädt man CachyOS herunter?',
              },
              link: 'download/download',
            },
            {
              label: 'How to install CachyOS?',
              translations: {
                ru: 'Как установить CachyOS?',
                de: 'Wie installiert man CachyOS?',
              },
              link: 'how_to_install/install-cachyos',
            },
            {
              label: 'How to install CachyOS with Secure Boot?',
              translations: {
                ru: 'Как установить CachyOS с Secure Boot?',
                de: 'Wie installiert man CachyOS mit Secure Boot?',
              },
              link: 'how_to_install/install-cachyos-secure-boot',
            },
            {
              label: 'CachyOS-NVIDIA Modules Installation',
              translations: {
                ru: 'Установка модуля CachyOS-NVIDIA',
                de: 'Installation der CachyOS-NVIDIA-Module',
              },
              link: 'how_to_install/cachyos-nvidia-modules',
            },
            {
              label: 'Post-install steps',
              translations: {
                ru: 'Действия после установки',
                de: 'Post-Installationsschritte',
              },
              link: 'first_steps/first-steps',
            },
            {
              label: 'Support',
              translations: {
                ru: 'Поддержка',
                de: 'Support',
              },
              link: 'support/support_community',
            },
          ],
        },
        {
          label: 'Notebook devices',
          translations: {
            ru: 'Устройства для ноутбуков',
            de: 'Notebook-Geräte',
          },
          items: [
            {
              label: 'NVIDIA notebook',
              translations: {
                ru: 'Ноутбук NVIDIA',
                de: 'NVIDIA-Notebook',
              },
              link: 'notebooks',
            },
          ],
        },
        {
          label: 'General Information',
          translations: {
            ru: 'Основная информация',
            de: 'Allgemeine Informationen',
          },
          autogenerate: {
            directory: 'general_info',
          },
        },
        {
          label: 'CachyOS repositories',
          translations: {
            ru: 'Репозитории CachyOS',
            de: 'CachyOS-Repositories',
          },
          items: [
            {
              label: 'What are the CachyOS repositories?',
              translations: {
                ru: 'Что такое репозитории CachyOS?',
                de: 'Was sind die CachyOS-Repositorien?',
              },
              link: 'cachyos_repositories/what_is_the_cachyos_repo',
            },
            {
              label: 'How to add CachyOS repositories?',
              translations: {
                ru: 'Как добавить репозитории CachyOS?',
                de: 'Wie kann man CachyOS-Repositorien hinzufügen?',
              },
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'Why CachyOS repositories?',
              translations: {
                ru: 'Почему репозитории CachyOS?',
                de: 'Warum CachyOS-Repositorien?',
              },
              link: 'cachyos_repositories/why_cachyos_repo',
            },
            {
              label: 'PGO & BOLT optimized packages',
              translations: {
                ru: 'Пакеты, оптимизированные PGO & BOLT',
                de: 'PGO & BOLT optimierte Pakete',
              },
              link: 'cachyos_repositories/pgo_bolt_packages',
            },
          ],
        },
        {
          label: 'Changelog',
          translations: {
            ru: 'Журнал изменений',
            de: 'Änderungsliste',
          },
          autogenerate: {
            directory: 'changelog',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
