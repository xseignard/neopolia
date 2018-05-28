const realisationUrl = `${process.env.WP_JSON_URL}realisation/`;

export const getAllRealisations = async () => {
	const res = await fetch(realisationUrl + '?per_page=100');
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

export const getRealisationByCompanyId = async id => {
	const realisations = await getAllRealisations();
	return realisations.filter(realisation => {
		return realisation.company.filter(c => c.ID === id).length > 0;
	});
};

export const getAllRealisationsOffline = () => JSON.parse(sessionStorage.getItem('realisations'));

export const getRealisationByIdOffline = id => {
	const realisations = getAllRealisationsOffline();
	return realisations.find(realisation => realisation.id === parseInt(id, 10));
};

export const getRealisationByCompanyIdOffline = id => {
	const realisations = getAllRealisationsOffline();
	return realisations.filter(realisation => {
		return realisation.company.filter(c => c.ID === parseInt(id, 10)).length > 0;
	});
};
