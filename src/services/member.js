const memberUrl = `${process.env.WP_JSON_URL}member`;

export const getAllMembers = async () => {
	console.log(memberUrl);
	const res = await fetch(memberUrl);
	console.log(res);
	const members = await res.json();
	return members.map(member => {
		return {
			id: member.id,
			...member.acf,
		};
	});
};

export const getMemberById = async id => {
	const res = await fetch(memberUrl + id);
	const member = await res.json();
	return {
		id: member.id,
		...member.acf,
	};
};
