const host = "http://localhost:3030/";

async function requester(method, url, data) {
  debugger
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  const options = {
    method: method,
    headers: {},
  };

  if (data) {
    (options.headers["Content-Type"] = "application/json");
    options.body = JSON.stringify(data);
  }

  if (user) {
    const token = user.accessToken;
    options.headers["X-Authorization"] = token;
  }

  try {
    const response = await fetch(`${host}${url}`, options);
    if (!response.ok) {
      if (response.status === 403) {
        sessionStorage.removeItem("user");
        throw new Error("Access Denied");
      }
      const error = await response.json();
      throw new Error(error.message);
    }
    if (response.status === 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

const get = requester.bind(null, "GET");
const post = requester.bind(null, "POST");
const put = requester.bind(null, "PUT");
const delete_ = requester.bind(null, "DELETE");

export { get, post, put, delete_ };
