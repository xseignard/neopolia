const realisationUrl = `${process.env.WP_JSON_URL}realisation/`;

export const getAllRealisations = async () => {
	const res = await fetch(realisationUrl);
	const realisations = await res.json();
	return realisations.map(realisation => {
		return {
			id: realisation.id,
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
