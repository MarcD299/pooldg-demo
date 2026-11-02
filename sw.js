/* PoolDG — service worker minimal.
   Requis par Chrome pour proposer « Installer » (sans lui, seul
   « Créer un raccourci » est offert). Il laisse simplement passer
   les requêtes vers le réseau, sans mise en cache : aucun changement
   de comportement pour la démo. */
self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
