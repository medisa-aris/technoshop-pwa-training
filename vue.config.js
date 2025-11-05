module.exports = {
  pwa: {
    name: 'Technoshop',
    themeColor: '#42b983',
    msTileColor: '#000000',
    manifestOptions: {
      short_name: 'TCS',
      start_url: '.',
      display: 'standalone',
      background_color: '#ffffff'
    },
    workboxPluginMode: 'GenerateSW', // keep GenerateSW for automatic service worker
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          // Match API requests to https://fakestoreapi.com/products
          urlPattern: /^https:\/\/fakestoreapi\.com\/products/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'products-cache',
            expiration: {
              maxEntries: 50,        // max 50 products cached
              maxAgeSeconds: 24 * 60 * 60, // 1 day
            },
            cacheableResponse: {
              statuses: [0, 200], // cache successful responses
            },
          },
        },
      ],
    },
  },
};
