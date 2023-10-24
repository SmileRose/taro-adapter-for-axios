# taro-request-axios-adapter
axios adaptor for `Taro.request`

Taro请求封装， pc端封装的axios适配到Taro框架，统一代码风格。
Taro请求封装， axios请求适配Taro

# Quick start
1. `npm i axios`
2. `npm i taro-request-axios-adapter`
3. create axios instance

```js
import { TaroAdapterForAxios } from "taro-adapter-for-axios";

const API_URL = "https://api.xxxx.com/";
const instance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  adapter: TaroAdapterForAxios, // add this line，添加这一行使用taroAdapter
});

// interceptors for request
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// interceptors for response
instance.interceptors.response.use(
  function (response) {
    if (response.data.code !== 0) {
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
  },
  function (error) {
    return Promise.reject(error.message);
  }
);
