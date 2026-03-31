self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Permite que a notificação apareça mesmo com o app minimizado
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    event.waitUntil(
        self.registration.showNotification(data.title || "Locus Defensus", {
            body: data.body || "Alerta detectado!",
            icon: "logo.sidebar.png"
        })
    );
});
