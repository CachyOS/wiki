import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { lunaria, type LocalizationFileData } from '@lunariajs/core';
import lunariaConfig from '../../lunaria.config.json';

// @ts-expect-error Lunaria doesn't export config type
const status = await lunaria(lunariaConfig);

const normalizePathToRoot = (path: string, locale: string): string => {
  return path.replace(`/${locale}/`, '/');
};

/**
 * Middleware to display a banner for outdated localized files.
 * It checks if the current locale's file is outdated and displays a banner
 * with a link to the root path of the localized file.
 *
 * @see https://starlight.astro.build/reference/frontmatter/#banner
 */
export const onRequest = defineRouteMiddleware((context) => {
  const locale = context.currentLocale ?? '';
  if (!locale || locale === 'en') {
    return;
  }

  const { entry } = context.locals.starlightRoute;
  const { filePath } = entry;

  const rootPath = normalizePathToRoot(filePath, locale);
  const rootOriginPathname = normalizePathToRoot(context.originPathname, locale);

  const fileStatus = status.find((s) => s.sharedPath.endsWith(rootPath));
  if (!fileStatus) {
    return;
  }

  const localizationStatus = fileStatus.localizations[locale] as
    | (LocalizationFileData & { isOutdated: boolean })
    | undefined;

  const isOutdated = localizationStatus?.isOutdated;
  if (!isOutdated) {
    return;
  }

  const origin = context.url.origin;
  const redirectUrl = new URL(`${origin}${rootOriginPathname}`);

  entry.data.banner = {
    content: context.locals.t('banner.outdated', {
      url: `<a href="${redirectUrl.href}">${rootOriginPathname}</a>`,
      interpolation: { escapeValue: false },
    }),
  };
});
