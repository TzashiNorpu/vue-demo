import {UserUrls} from "@/constants";
import {HTTP} from "@/utils";

class UserService {
  async login(data) {
    return HTTP.POST(UserUrls.login, data);
  }
  async getUserInfo({userId}) {
    return HTTP.GET(UserUrls.userInfo, {userId});
  }
}
const UserServiceIns = new UserService();
export {UserServiceIns}