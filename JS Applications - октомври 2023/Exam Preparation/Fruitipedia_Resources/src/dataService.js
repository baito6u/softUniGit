import { api } from "./api.js";

const dataEndPoints = {
  getAllFruits: "data/fruits?sortBy=_createdOn%20desc",
  singleFruit: "data/fruits/",
};

async function getallFruits() {
  return await api.get(dataEndPoints.getAllFruits);
}

async function getSingleFruit(id) {
  return await api.get(dataEndPoints.singleFruit + id);
}

async function createFruit(data) {
  return await api.post(dataEndPoints.singleFruit, data);
}

async function updateFruit(id, data) {
   return api.put(dataEndPoints.singleFruit + id, data);
}

async function deleteFruit(id) {
   return api.del(dataEndPoints.singleFruit + id);
}

async function searchFruit(query) {
  return api.get(`data/fruits?where=name%20LIKE%20%22${query}%22`);
}

export const dataService = {
  getallFruits,
  getSingleFruit,
  createFruit,
  updateFruit,
  deleteFruit,
  searchFruit
};
