import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
// Specialized navigation components for your locale structure
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);