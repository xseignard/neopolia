const workUrl = `${process.env.WP_JSON_URL}work`;

export const getAllWorks = async () => {
	console.log(workUrl);
	const res = await fetch(workUrl);
	const works = await res.json();
	return works.map(work => {
		return {
			id: work.id,
			title: work.title.rendered,
			...work.acf,
		};
	});
};

export const getWorkById = async id => {
	const res = await fetch(workUrl + id);
	const work = await res.json();
	return {
		id: work.id,
		title: work.title.rendered,
		...work.acf,
	};
};
