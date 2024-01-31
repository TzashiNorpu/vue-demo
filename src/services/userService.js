import {UserUrls} from "@/constants";
import {HTTP} from "@/utils";

class UserService {
  async login(data) {
    return await HTTP.POST(UserUrls.login, data);
  }
  async logout() {
    // todo
    return null;
  }
  async register(data = {}) {
    return await HTTP.POST(UserUrls.user, data);
  }

  async addUserRole(data = {}) {
    return await HTTP.POST(UserUrls.addUserRole, data);
  }
}


const UserServiceIns = new UserService();

export {UserServiceIns}