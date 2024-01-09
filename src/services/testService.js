import {TestUrls} from "@/constants/testUrls";
import {HTTP} from "@/utils";

class TestService {
  async test() {
    return HTTP.GET(TestUrls.test);
  }
}

const TestServiceIns = new TestService();

export {TestServiceIns}