const slideUrl = `${process.env.WP_JSON_URL}slide/`;

export const getAllSlides = async () => {
	const res = await fetch(slideUrl);
	const slides = await res.json();
	return slides.map(slide => {
		return {
			id: slide.id,
			name: slide.title.rendered,
			...slide.acf,
		};
	});
};

export const getSlideById = async id => {
	const res = await fetch(slideUrl + id);
	const slide = await res.json();
	return {
		id: slide.id,
		name: slide.title.rendered,
		...slide.acf,
	};
};

export const getAllSlidesOffline = () => JSON.parse(localStorage.getItem('slides'));

export const getSlideByIdOffline = id => {
	const slides = getAllSlidesOffline();
	return slides.find(slide => slide.id === parseInt(id, 10));
};
