import { getAllCompanies, getCompanyById } from './company';
import { getAllRealisations, getRealisationById } from './realisation';
import { getAllVignettes, getVignetteByName } from './vignette';
import { getAllSlides, getSlideById } from './slide';
import { getAboutUs } from './about';
import { getOffer } from './offer';
import { getAllCustomers } from './customer';

const loadImage = src =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = resolve;
		img.onerror = reject;
		img.src = src;
	});

const loadImages = async imgs => {
	const promises = imgs.map(i => loadImage(i));
	return Promise.all(promises);
};

const cacheImages = async imgs => {
	if (window.caches) {
		try {
			const cache = await caches.open('neopolia');
			await cache.addAll(imgs);
			console.log('all assets added to cache');
		} catch (err) {
			console.log(err);
		}
	} else await loadImages(imgs);
};

export const loadData = async () => {
	const [companies, realisations, vignettes, slides, about, offer, customers] = await Promise.all(
		[
			getAllCompanies(),
			getAllRealisations(),
			getAllVignettes(),
			getAllSlides(),
			getAboutUs(),
			getOffer(),
			getAllCustomers(),
		]
	);

	const companiesImages = [].concat(
		...companies.map(c => [c.logo.sizes.thumbnail, c.logo.sizes.large])
	);
	const realisationsImages = [].concat(
		...realisations.map(r =>
			[].concat(...r.pictures.map(p => p.url), [r.pictures[0].sizes.thumbnail])
		)
	);
	const slidesImages = [].concat(...slides.map(s => [s.picto.sizes.large, s.image.url]));
	const customersImages = [].concat(...customers.map(c => [c.logo.sizes.thumbnail]));

	const images = [...companiesImages, ...realisationsImages, ...slidesImages, ...customersImages];

	cacheImages(images);

	localStorage.setItem('companies', JSON.stringify(companies));
	localStorage.setItem('realisations', JSON.stringify(realisations));
	localStorage.setItem('vignettes', JSON.stringify(vignettes));
	localStorage.setItem('slides', JSON.stringify(slides));
	localStorage.setItem('about', JSON.stringify(about));
	localStorage.setItem('offer', JSON.stringify(offer));
	localStorage.setItem('customers', JSON.stringify(customers));
};

export const clearData = async () => {
	localStorage.clear();
	if (window.caches) await caches.delete('neopolia');
};
