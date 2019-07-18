const CACHE_NAMES = 'react-boilerplate-cache';
const ASSETS = [
  "/",
  "/index.html",
  "/main.js",
  'https://api.github.com/search/users?q=Saurabh'
]

//install service worker
self.addEventListener('install', event => {
  // console.log("sw is installed")
  event.waitUntil(
    caches.open(CACHE_NAMES)
    .then(cache => {
      console.log("caching assets");
      cache.addAll(ASSETS);
    })
    .catch(error => {
      console.log("cache open error", error);
    })
  );
});

//activate event
self.addEventListener('activate', event => {
  // console.log("service worker is activated");
});

//fetch event
self.addEventListener('fetch', event => {
  // console.log("fetch event", event);
  event.respondWith(
    caches.match(event.request.url)
      .then(cacheRes => {
        return cacheRes || fetch(event.request);
      })
      .catch(error => {
        console.log("respond with error", error);
      })
  );
});