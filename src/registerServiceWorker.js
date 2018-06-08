export default () => {
	navigator.serviceWorker
		.register('sw.js', { scope: './' })
		.then(navigator.serviceWorker.ready)
		.then(() => {
			console.log('service worker registered');
		})
		.catch(error => {
			console.log('error when registering service worker', error, arguments);
		});
};
