const customerUrl = `${process.env.WP_JSON_URL}customer/`;

export const getAllCustomers = async () => {
	const res = await fetch(customerUrl + '?per_page=100');
	const customers = await res.json();
	return customers.map(customer => {
		return {
			id: customer.id,
			name: customer.title.rendered,
			...customer.acf,
		};
	});
};

export const getAllCustomersOffline = () => JSON.parse(localStorage.getItem('customers'));
