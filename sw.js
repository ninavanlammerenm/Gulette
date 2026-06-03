const CACHE = 'gulette-v2';
const LOCAL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './audio.js',
  './data.js',
  './lesson.js',
  './quiz.js',
  './state.js',
  './ui.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(LOCAL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    // Cache-first voor eigen bestanden (offline werkt altijd)
    e.respondWith(
      caches.match(e.request).then(r =>
        r || fetch(e.request).then(res => {
          if (res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
      )
    );
  } else {
    // Network-first voor externe bronnen (fonts etc.)
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});
