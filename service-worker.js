// Defina o nome do cache
var cacheName = 'webpet';

// Evento de instalação do Service Worker
self.addEventListener('install', event => {
  // Pula a fase de espera e ativação
  self.skipWaiting();

  // Aguarda a abertura do cache e adiciona os recursos a serem armazenados offline
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        'index.html',
        'index.css',
        'assets/icon/29.png',
        'assets/icon/40.png',
        'assets/icon/57.png',
        'assets/icon/58.png',
        'assets/icon/60.png',
        'assets/icon/80.png',
        'assets/icon/87.png',
        'assets/icon/114.png',
        'assets/icon/120.png',
        'assets/icon/180.png',
        'assets/icon/1024.png'
      ]))
  );
});

// Evento de mensagem do Service Worker
self.addEventListener('message', function (event) {
  // Se a mensagem recebida for para pular a espera, pula a fase de espera
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Evento de fetch do Service Worker
self.addEventListener('fetch', function (event) {
  // Responder com recursos do cache ou da rede
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});

