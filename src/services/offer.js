const offerUrl = `${process.env.WP_JSON_URL}offer/`;

export const getOffer = async () => {
	const res = await fetch(offerUrl);
	const offer = await res.json();
	return {
		slides: offer[0].acf.slides.map(s => s.ID),
	};
};

export const getOfferOffline = () => JSON.parse(sessionStorage.getItem('offer'));
