import {HTTP_METHOD} from '../constants'
import {decrypt, encrypt} from './encrypt'

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const requestInteceptor = (url, option) => {
  if(option?.body)
    option.body = encrypt(option.body)
}

const fetchData = async (url, options = {}) => {
  try {
    let {method, data, headers, ...restOption} = options;
    let initOption = {
      method: method || HTTP_METHOD.POST,
      headers,
      body: JSON.stringify(data),
      ...restOption
    };
    console.log("option=", initOption);
    // 请求拦截
    requestInteceptor(url, initOption);
    const response = await fetch(url, initOption);
    console.log("response", response);
    let res = await response.json();
    // 响应拦截
    responseInteceptor(res);
    console.log("res", res);
    return res;
  } catch (e) {
    console.log("fetch error...", e);
    return null;
  }
};
class http {
  GET(url, data) {
    if (!(url instanceof URL))
      url = new URL(url);

    if (data)
      for (let [k, v] of Object.entries(data))
        url.searchParams.append(k, v);

    const option = {
      headers: {'Content-Type': "application/x-www-form-urlencoded"},
      method: HTTP_METHOD.GET
    };

    return fetchData(url, option);
  }

  POST(url, data) {
    const option = {
      data,
      headers: {'Content-Type': "application/json;charset=utf-8"},
      method: HTTP_METHOD.POST
    };
    if (!(url instanceof URL))
      url = new URL(url);
    return fetchData(url, option);
  }
}

export {http};