import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

const ignored = ['changelogs/'];

/**
 * Middleware to ignore i18n fallback for specific routes and prevent
 * showing the missing translation warning.
 *
 * @see https://starlight.astro.build/reference/route-data/#isfallback
 */
export const onRequest = defineRouteMiddleware((context) => {
  const id = context.locals.starlightRoute.entry.id;
  const isIgnored = ignored.some((path) => id.startsWith(path));
  if (isIgnored) {
    context.locals.starlightRoute.isFallback = false;
  }
});
