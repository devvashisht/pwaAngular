self.addEventListener("install", function (event) {
  console.log("[SW] installing SW..", event);
  event.waitUntil(
    caches.open("static").then(function (cache) {
      console.log("[SW] Precaching app shell");
      cache.add("/src/js.app.js");
    })
  );
});
self.addEventListener("activate", function (event) {
  console.log("[SW] activating SW..", event);
  self.clients.claim();
});
self.addEventListener("fetch", function (event) {
  // console.log("[SW] fetching something...", event);
  // event.respondWith(null);
  event.respondWith(
    caches.match(event.request).then(function () {
      if (response) {
        return response;
      } else {
        return fetch(event.request);
      }
    })
  );
});
