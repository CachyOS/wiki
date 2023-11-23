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
        discord: 'https://discord.gg/qJqj94uFwE',
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
          },
          items: [
            {
              label: 'What is the CachyOS?',
              translations: {
                ru: 'Что такое CachyOS?',
              },
              link: 'cachyos_basic/cachyos_description',
            },
            {
              label: 'How to download CachyOS?',
              translations: {
                ru: 'Как скачать CachyOS?',
              },
              link: 'download/download',
            },
            {
              label: 'How to install CachyOS?',
              translations: {
                ru: 'Как установить CachyOS?',
              },
              link: 'how_to_install/install-cachyos',
            },
            {
              label: 'How to install CachyOS with Secure Boot?',
              translations: {
                ru: 'Как установить CachyOS с безопасной загрузкой?',
              },
              link: 'how_to_install/install-cachyos-secure-boot',
            },
            {
              label: 'CachyOS-NVIDIA Modules Installation',
              translations: {
                ru: 'Установка модуля CachyOS-NVIDIA',
              },
              link: 'how_to_install/cachyos-nvidia-modules',
            },
            {
              label: 'Post-install steps',
              translations: {
                ru: 'Действия после установки',
              },
              link: 'first_steps/first-steps',
            },
            {
              label: 'Support',
              translations: {
                ru: 'Поддержка',
              },
              link: 'support/support_community',
            },
          ],
        },
        {
          label: 'Notebook devices',
          translations: {
            ru: 'Устройства для ноутбуков',
          },
          items: [
            {
              label: 'NVIDIA notebook',
              translations: {
                ru: 'Ноутбук NVIDIA',
              },
              link: 'notebooks',
            },
          ],
        },
        {
          label: 'General Information',
          translations: {
            ru: 'Основная информация',
          },
          autogenerate: {
            directory: 'general_info',
          },
        },
        {
          label: 'CachyOS repositories',
          translations: {
            ru: 'Репозитории CachyOS',
          },
          items: [
            {
              label: 'What is the CachyOS repositories?',
              translations: {
                ru: 'Что такое репозитории CachyOS?',
              },
              link: 'cachyos_repositories/what_is_the_cachyos_repo',
            },
            {
              label: 'How to add CachyOS repositories?',
              translations: {
                ru: 'Как добавить репозитории CachyOS?',
              },
              link: 'cachyos_repositories/how_to_add_cachyos_repo',
            },
            {
              label: 'Why CachyOS repositories?',
              translations: {
                ru: 'Почему репозитории CachyOS?',
              },
              link: 'cachyos_repositories/why_cachyos_repo',
            },
          ],
        },
        {
          label: 'Changelog',
          translations: {
            ru: 'Журнал изменений',
          },
          autogenerate: {
            directory: 'changelog',
          },
        },
      ],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
