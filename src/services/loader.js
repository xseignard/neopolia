import { getAllCompanies, getCompanyById } from './company';
import { getAllRealisations, getRealisationById } from './realisation';
import { getAllVignettes, getVignetteByName } from './vignette';
import { getAllSlides, getSlideById } from './slide';
import { getAboutUs } from './about';
import { getOffer } from './offer';

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

export const loadData = async () => {
	const [companies, realisations, vignettes, slides, about, offer] = await Promise.all([
		getAllCompanies(),
		getAllRealisations(),
		getAllVignettes(),
		getAllSlides(),
		getAboutUs(),
		getOffer(),
	]);

	const companiesImages = [].concat(
		...companies.map(c => [c.logo.sizes.thumbnail, c.logo.sizes.large])
	);
	await loadImages(companiesImages);

	const realisationsImages = [].concat(
		...realisations.map(r =>
			[].concat(...r.pictures.map(p => p.url), [r.pictures[0].sizes.thumbnail])
		)
	);
	await loadImages(realisationsImages);

	const slidesImages = [].concat(...slides.map(s => [s.picto.sizes.large, s.image.url]));
	await loadImages(slidesImages);

	localStorage.setItem('companies', JSON.stringify(companies));
	localStorage.setItem('realisations', JSON.stringify(realisations));
	localStorage.setItem('vignettes', JSON.stringify(vignettes));
	localStorage.setItem('slides', JSON.stringify(slides));
	localStorage.setItem('about', JSON.stringify(about));
	localStorage.setItem('offer', JSON.stringify(offer));
};

export const clearData = async () => {
	localStorage.clear();
};
