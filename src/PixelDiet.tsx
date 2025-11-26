// src/PixelDiet.tsx

// Declare `fbq` on the Window object to avoid TypeScript errors
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _fbq: Array<any>;
  }
}

const PIXEL_ID = '1819355072056679';

/**
 * Initializes the Facebook Pixel and tracks a 'ViewContent' event.
 * This function should be called once per page load/route change.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export const initAndTrackPixel = () => {
  if (typeof window === 'undefined') {
    return;
  }

  // Standard Facebook Pixel initialization script
  if (!window._fbq) {
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        // eslint-disable-next-line prefer-spread, prefer-rest-params
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    window.fbq('init', PIXEL_ID);
  }

  // Track 'ViewContent' for entire pages as requested
  window.fbq('track', 'ViewContent');
};

