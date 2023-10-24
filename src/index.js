import Taro from "@tarojs/taro";

export default function taroAdapterForAxios(config) {
  return new Promise((resolve, reject) => {
    Taro.request({
      ...config,
      url: config.baseURL + config.url,
      method: config.method,
      timeout: config.timeout,
      data: config.data ? JSON.parse(config.data) : null,
      header: {
        ...config.headers
      },
      success: function(res) {
        var response = {
          ...res,
          status: res.statusCode,
          statusText: res.errMsg,
          headers: res.header,
          config: config,
          request: null
        };

        resolve(res);
      },
      fail: function(res) {
        var response = {
          ...res,
          status: res.statusCode,
          statusText: res.errMsg,
          headers: res.header,
          config: config,
          request: null
        };

        reject(response);
      }
    })
  })
}