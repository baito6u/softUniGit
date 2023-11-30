import { api } from "./api.js";

const dataEndPoints = {
  getAllItems: "data/motorcycles?sortBy=_createdOn%20desc",
  singleItem: "data/motorcycles/",
};

async function getallItems() {
  return await api.get(dataEndPoints.getAllItems);
}

async function getSingleItem(id) {
  return await api.get(dataEndPoints.singleItem + id);
}

async function createItem(data) {
  return await api.post(dataEndPoints.singleItem, data);
}

async function updateItem(id, data) {
   return api.put(dataEndPoints.singleItem + id, data);
}

async function deleteItem(id) {
   return api.del(dataEndPoints.singleItem + id);
}

async function searchItem(query) {
  return api.get(`data/fruits?where=name%20LIKE%20%22${query}%22`);
}

export const dataService = {
  getallItems,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
  searchItem
};
