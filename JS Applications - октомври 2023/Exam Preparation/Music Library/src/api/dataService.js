import * as api from './api.js';
import { getUserData } from '../utils.js';

const user = getUserData();

const endpoints = {
	dashboard: '/data/albums?sortBy=_createdOn%20desc',
	create: '/data/albums',
	getSearchItems: function () {
		if (user) {
			return `/data/motorcycles?where=_ownerId%3D%22${user._id}%22&sortBy=_createdOn%20desc`;
		}
		return `/data/motorcycles?where=_ownerId%3D%22%22&sortBy=_createdOn%20desc`;
	},
	searchItems: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`,
	getById: '/data/albums/',
	deleteById: '/data/albums/',
	update: '/data/albums/',
};

export async function getDashboardItems() {
	return api.get(endpoints.dashboard);
}

export async function updateItem(id, data) {
	return api.put(endpoints.update + id, data);
}

export async function deleteItemById(id) {
	return api.del(endpoints.deleteById + id);
}

export async function getItemById(id) {
	return api.get(endpoints.getById + id);
}

export async function create(data) {
	return api.post(endpoints.create, data);
}

export async function searchItems(query) {
	return api.get(endpoints.searchItems(query));
}
