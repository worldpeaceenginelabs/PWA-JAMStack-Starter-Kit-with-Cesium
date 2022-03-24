import pkg from 'workbox-build';
const { injectManifest } = pkg;

injectManifest({
  globDirectory: 'build',
  globPatterns: [
    '**/*.{html,js,css,png,webp,jpg}',
  ],
  swSrc: 'build/pwabuilder-sw.js',
  swDest: 'build/pwabuilder-sw.js',
});
