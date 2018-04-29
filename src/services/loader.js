import { getAllCompanies, getCompanyById } from './company';
import { getAllRealisations, getRealisationById } from './realisation';
import { getAllVignettes, getVignetteByName } from './vignette';

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
	const [companies, realisations, vignettes] = await Promise.all([
		getAllCompanies(),
		getAllRealisations(),
		getAllVignettes(),
	]);

	const companiesImages = [].concat(
		...companies.map(c => [c.logo.sizes.thumbnail, c.logo.sizes.large])
	);
	await loadImages(companiesImages);

	const realisationsImages = [].concat(
		...realisations.map(r =>
			[].concat(...r.pictures.map(p => p.sizes.large), [r.pictures[0].sizes.thumbnail])
		)
	);
	await loadImages(realisationsImages);

	sessionStorage.setItem('companies', JSON.stringify(companies));
	sessionStorage.setItem('realisations', JSON.stringify(realisations));
	sessionStorage.setItem('vignettes', JSON.stringify(vignettes));
};
