import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        ai_translated: z.boolean().optional().default(false),
      }),
    }),
  }),
  i18n: defineCollection({
    loader: i18nLoader(),
    schema: i18nSchema({
      extend: z.object({
        'banner.outdated': z.string().optional(),
        'banner.translationNotice.title': z.string().optional(),
        'banner.translationNotice.line1': z.string().optional(),
        'banner.translationNotice.line2': z.string().optional(),
        'banner.translationNotice.line3': z.string().optional(),
        'banner.translationAvailable.title': z.string().optional(),
        'banner.translationAvailable.message': z.string().optional(),
        'banner.translationAvailable.button': z.string().optional(),
        'banner.translationAvailable.hintDesktop': z.string().optional(),
        'banner.translationAvailable.hintMobile': z.string().optional(),
      }),
    }),
  }),
};
