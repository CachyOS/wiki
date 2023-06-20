import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


export const locales = {
  root: { label: 'English', lang: 'en' },
  ru: { label: 'Русский', lang: 'ru' },
};

const site = 'https://wiki.cachyos.org/';

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'CachyOS',
      logo: {
        src: '/src/assets/logo.svg',
      },
      editLink: {
        baseUrl: 'https://github.com/cachyos/wiki/edit/next/src/content/docs/',
      },
      social: {
        github: 'https://github.com/cachyos',
        twitter: 'https://twitter.com/cachyos',
        telegram: 'https://t.me/+oR-kWT47vRdmMDli',
        discord: 'https://discord.gg/qJqj94uFwE',
        reddit: 'https://www.reddit.com/r/cachyos',
        patreon: 'https://www.patreon.com/CachyOS',
      },
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.usefathom.com/script.js',
            'data-site': 'EZBHTSIG',
            defer: true,
          },
        },
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
        },
      ],
      locales,
      sidebar: [
        {
          label: 'Start Here',
          translations: {
            ru: 'Начни здесь',
          },
          items: [
            {
              label: 'CachyOS Kernels',
              translations: {
                ru: 'Ядра CachyOS',
              },
              link: 'cachyos-kernels',
            },
            {
              label: 'Kernel Manager',
              translations: {
                ru: 'Менеджер Ядра',
              },
              link: 'kernel-manager',
            },
            {
              label: 'Repository',
              translations: {
                ru: 'Репозиторий',
              },
              link: 'repo',
            },
            {
              label: 'ZFS Installation',
              translations: {
                ru: 'Установка ZFS',
              },
              link: 'cachyos-zfs',
            },
            {
              label: 'Laptops GPU setup',
              translations: {
                ru: 'Настройка GPU ноутбука',
              },
              link: 'notebooks',
            },
            {
              label: 'Showcase',
              translations: {
                ru: 'Изображения',
              },
              link: 'screenshots',
            },
          ],
        },
        {
          label: 'How to Install CachyOS?',
          translations: {
            ru: 'Как установить CachyOS?',
          },
          autogenerate: { directory: 'how_to_install' },
        },
        {
          label: 'First steps',
          translations: {
            ru: 'Первые шаги',
          },
          autogenerate: { directory: 'first_steps' },
        },
        {
          label: 'General Information',
          translations: {
            ru: 'Основная информация',
          },
          autogenerate: { directory: 'general_info' },
        },
        {
          label: 'Download',
          translations: {
            ru: 'Загрузить',
          },
          autogenerate: { directory: 'download' },
        },
        {
          label: 'Changelog',
          translations: {
            ru: 'Журнал изменений',
          },
          autogenerate: { directory: 'changelog' },
        },
      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
