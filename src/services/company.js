const companyUrl = `${process.env.WP_JSON_URL}company/`;

export const getAllCompanies = async () => {
	const res = await fetch(companyUrl);
	const companies = await res.json();
	return companies.map(company => {
		return {
			id: company.id,
			name: company.title.rendered,
			...company.acf,
		};
	});
};

export const getCompanyById = async id => {
	const res = await fetch(companyUrl + id);
	const company = await res.json();
	return { id: company.id, name: company.title.rendered, ...company.acf };
};

export const getAllCompaniesOffline = () => JSON.parse(sessionStorage.getItem('companies'));

export const getCompanyByIdOffline = id => {
	const companies = getAllCompaniesOffline();
	return companies.find(company => company.id === parseInt(id, 10));
};
