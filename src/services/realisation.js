const realisationUrl = `${process.env.WP_JSON_URL}realisation/`;

export const getAllRealisations = async () => {
	const res = await fetch(realisationUrl);
	const realisations = await res.json();
	return realisations.map(realisation => {
		return {
			id: realisation.id,
			name: realisation.title.rendered,
			...realisation.acf,
		};
	});
};

export const getRealisationById = async id => {
	const res = await fetch(realisationUrl + id);
	const realisation = await res.json();
	return {
		id: realisation.id,
		name: realisation.title.rendered,
		...realisation.acf,
	};
};

export const getAllRealisationsOffline = () => JSON.parse(sessionStorage.getItem('realisations'));

export const getRealisationByIdOffline = id => {
	const realisations = getAllRealisationsOffline();
	return realisations.find(realisation => realisation.id === parseInt(id, 10));
};
