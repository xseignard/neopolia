const aboutUsUrl = `${process.env.WP_JSON_URL}about/`;

export const getAboutUs = async () => {
	const res = await fetch(aboutUsUrl);
	const aboutUs = await res.json();
	return {
		slides: aboutUs[0].acf.slides.map(s => s.ID),
	};
};

export const getAboutUsOffline = () => JSON.parse(sessionStorage.getItem('about'));
