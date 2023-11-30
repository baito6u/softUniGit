function getUserData() {
  return JSON.parse(localStorage.getItem("userData"));
}

function setUserData(userData) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

function getUserId() {
  const userData = getUserData();
  return userData._id;
}

function removeUserData() {
  localStorage.removeItem("userData");
}

export const userHelper = {
  getUserData,
  setUserData,
  getUserId,
  removeUserData,
};
