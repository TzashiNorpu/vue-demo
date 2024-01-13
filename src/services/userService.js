import {UserUrls} from "@/constants";
import {HTTP} from "@/utils";

class UserService {
  async login(data) {
    return HTTP.POST(UserUrls.login, data);
  }
  async register(data = {}) {
    return HTTP.POST(UserUrls.user, data);
  }
  async getUserInfo({userId}) {
    return HTTP.GET(UserUrls.user, {userId});
  }
}


const UserServiceIns = new UserService();

export {UserServiceIns}