import {MenuUrls, RoleUrls} from "@/constants";
import {HTTP} from "@/utils";

class MenuService {
  async getRouters() {
    return HTTP.GET(MenuUrls.getRouters, {});
  }
}


const MenuServiceIns = new MenuService();

export {MenuServiceIns}