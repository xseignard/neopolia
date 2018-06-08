// this is the service worker which intercepts all http requests
self.addEventListener('fetch', e => {
	// check if request
	if (e.request.url.indexOf('atomouest') > -1) {
		// contentful asset detected
		e.respondWith(
			caches.match(e.request).then(response => {
				// return from cache, otherwise fetch from network
				return response || fetch(e.request);
			})
		);
	}
	// otherwise: ignore event
});
