const vignetteUrl = `${process.env.WP_JSON_URL}vignette/`;

export const getAllVignettes = async () => {
	const res = await fetch(vignetteUrl);
	const vignettes = await res.json();
	return vignettes.map(vignette => {
		return {
			id: vignette.id,
			title: vignette.title.rendered,
			...vignette.acf,
		};
	});
};

export const getVignetteByName = async name => {
	const vignettes = await getAllVignettes();
	return vignettes.find(vignette => vignette.model_id === name);
};

export const getAllVignettesOffline = () => JSON.parse(localStorage.getItem('vignettes'));

export const getVignetteByNameOffline = name => {
	const vignettes = getAllVignettesOffline();
	return vignettes.find(vignette => vignette.model_id === name);
};
