import { showHome } from "./views/home.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { initializer } from "./router.js";
import { logout } from "./api/user.js";

document.getElementById("defSection").remove();

async function logoutFunctionality() {
  await logout();
  router.goTo("/");
  router.updateNav();
}

const links = {
  "/": showHome,
  "/catalog": showCatalog,
  "/create": showCreate,
  "/details": showDetails,
  "/login": showLogin,
  "/register": showRegister,
  "/logout": logoutFunctionality,
};

const router = initializer(links);
router.updateNav();
router.goTo("/");
