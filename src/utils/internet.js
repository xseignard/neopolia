export const isOnline = async () => {
	try {
		const res = await fetch('//google.com', {
			mode: 'no-cors',
		});
		return true;
	} catch (e) {
		return false;
	}
};
