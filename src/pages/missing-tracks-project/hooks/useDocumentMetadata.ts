import { useEffect } from 'react';

interface MetadataOptions {
  title?: string;
  favicon?: string;
  description?: string;
  themeColor?: string;
}

/**
 * Custom hook to dynamically swap document metadata (title, description, theme-color, favicon)
 * when a sub-app is mounted, and gracefully restore the portfolio's original metadata on unmount.
 */
export function useDocumentMetadata({
  title,
  favicon,
  description,
  themeColor,
}: MetadataOptions) {
  useEffect(() => {
    // 1. Capture original values from index.html to restore later
    const originalTitle = document.title;

    const faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    const originalFavicon = faviconLink ? faviconLink.getAttribute('href') || '/favicon.png' : '/favicon.png';

    const descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    const originalDesc = descMeta ? descMeta.content : '';

    const ogDescMeta = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    const originalOgDesc = ogDescMeta ? ogDescMeta.content : '';

    const twitterDescMeta = document.querySelector('meta[name="twitter:description"]') as HTMLMetaElement;
    const originalTwitterDesc = twitterDescMeta ? twitterDescMeta.content : '';

    const themeColorMeta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    const originalThemeColor = themeColorMeta ? themeColorMeta.content : '#FF4552';

    // 2. Apply new metadata
    if (title) {
      document.title = title;
    }

    if (favicon && faviconLink) {
      faviconLink.setAttribute('href', favicon);
    }

    if (description) {
      if (descMeta) descMeta.content = description;
      if (ogDescMeta) ogDescMeta.content = description;
      if (twitterDescMeta) twitterDescMeta.content = description;
    }

    if (themeColor && themeColorMeta) {
      themeColorMeta.content = themeColor;
    }

    // 3. Restore original metadata on unmount
    return () => {
      document.title = originalTitle;
      if (faviconLink) {
        faviconLink.setAttribute('href', originalFavicon);
      }
      if (descMeta) descMeta.content = originalDesc;
      if (ogDescMeta) ogDescMeta.content = originalOgDesc;
      if (twitterDescMeta) twitterDescMeta.content = originalTwitterDesc;
      if (themeColorMeta) themeColorMeta.content = originalThemeColor;
    };
  }, [title, favicon, description, themeColor]);
}
