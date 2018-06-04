export const isOnline = async () => {
	try {
		const res = await fetch('https://google.com', {
			mode: 'no-cors',
		});
		return true;
	} catch (e) {
		return false;
	}
};
