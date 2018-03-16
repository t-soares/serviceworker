self.addEventListener("install", function (event) {
	console.log("Service Worker install event");
	event.waitUntil(self.skipWaiting());
}.bind(this));

self.addEventListener("activate", function (event) {
	console.log("Service Worker activate event");
	self.clients.claim();
}.bind(this));

self.addEventListener('fetch', function(event) {
	console.log("Service worker fetch event: ", event.request);
});

