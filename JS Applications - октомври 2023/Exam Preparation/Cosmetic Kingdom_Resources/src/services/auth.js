import { loginUrl } from "./../constants/index.js";

export function getAuthData() {
  return JSON.parse(localStorage.getItem("auth"));
}

export function loginHandler(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const email = formData.get("email");
  const password = formData.get("password");

  const body = {
    email: email,
    password: password,
  };

  login(body).catch((err) => console.log(err));
}

function login(body) {
  return fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status !== 200) {
      throw new Error("invalid credentials");
    }
    console.log(res);
  });
}

