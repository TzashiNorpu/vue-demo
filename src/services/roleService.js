import {RoleUrls} from "@/constants";
import {HTTP} from "@/utils";

class RoleService {
  async add(data) {
    return HTTP.POST(RoleUrls.role, data);
  }
}


const RoleServiceIns = new RoleService();

export {RoleServiceIns}