/* IVA v2 service worker — network-first for freshness, cache fallback for offline */
"use strict";

const CACHE = "iva-v2.0.0-r2";
const FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./js/i18n.js",
  "./js/utils.js",
  "./js/store.js",
  "./js/charts.js",
  "./js/app.js",
  "./fonts/Vazirmatn-Variable.woff2",
  "./site.webmanifest",
  "./assets/iva-logo.png",
  "./assets/icon-32.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-192-maskable.png",
  "./assets/icon-512-maskable.png",
  "./assets/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => { if (e.data === "SKIP_WAITING") self.skipWaiting(); });

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  // navigations & app shell: network-first, fall back to cache, then offline page
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  // assets: stale-while-revalidate
  event.respondWith(
    caches.match(req).then(cached => {
      const refresh = fetch(req)
        .then(res => {
          if (res && res.status === 200) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
          return res;
        })
        .catch(() => cached);
      return cached || refresh;
    })
  );
});
