import { create } from 'apisauce';
import appUtils from 'utils/appUtils';

const apiUrl = {
	hml: 'https://jsonplaceholder.typicode.com',
	prod: 'https://jsonplaceholder.typicode.com'
};

const api = create({
	baseURL: appUtils.isDev ? apiUrl.hml : apiUrl.prod,
	headers: {
		Authorization: ''
	}
});

export default api;
