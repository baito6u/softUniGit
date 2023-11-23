import { userService } from "../userService.js";
import { goTo, updateNav } from "../../app.js";

export async function logoutView() {
   await userService.logout();
  updateNav();
  goTo("/");
}
