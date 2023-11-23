import page from "../node_modules/page/page.mjs";

import { navBarView } from "./views/navBarView.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";

page(authMiddleware);
page(navBarView);
page("/", homeView);
page("/login", loginView);

page.start();
