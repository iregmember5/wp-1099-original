import { useEffect } from 'react';
import { useSiteSettings } from '../contexts/SiteSettingsContext';

export const DynamicHead: React.FC = () => {
  const { settings, loading } = useSiteSettings();

  useEffect(() => {
    if (loading) return;

    // Update favicon
    if (settings.favicon) {
      const existingFavicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (existingFavicon) {
        existingFavicon.href = settings.favicon;
        existingFavicon.type = settings.favicon.startsWith('data:') ? 'image/svg+xml' : 'image/x-icon';
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.type = settings.favicon.startsWith('data:') ? 'image/svg+xml' : 'image/x-icon';
        newFavicon.href = settings.favicon;
        document.head.appendChild(newFavicon);
      }
    }

    // Update title
    if (settings.siteTitle) {
      document.title = settings.siteTitle;
    }
  }, [settings, loading]);

  // Force update on route changes
  useEffect(() => {
    const updateHead = () => {
      if (loading || !settings.siteTitle) return;
      document.title = settings.siteTitle;
    };

    window.addEventListener('popstate', updateHead);
    window.addEventListener('hashchange', updateHead);

    return () => {
      window.removeEventListener('popstate', updateHead);
      window.removeEventListener('hashchange', updateHead);
    };
  }, [settings.siteTitle, loading]);

  return null; // This component doesn't render anything
};