import Http from 'hy-app/api/http';

const http = new Http();
const apiMessage = (msg: string, isLogin?: boolean) => {
  uni.showModal({
    title: msg || '数据错误',
    showCancel: false,
    confirmText: isLogin ? '登录' : '我知道了',
    success: res => {
      if (res.confirm && isLogin) {
        uni.navigateTo({
          url: '/pages/login/Index',
        });
      }
    },
  });
};

http.config = {
  baseURL: 'http://60.168.129.9:2010',
};

// 请求拦截
http.interceptor.request((conf: UniNamespace.RequestOptions) => {
  const token = uni.getStorageSync('member_token');
  if (token) {
    conf.header = {
      token: token,
    };
  }
  uni.showLoading({
    title: '拼命加载中...',
    mask: true,
  });

  return conf;
});

// 响应拦截
http.interceptor.response(
  (response: UniNamespace.RequestSuccessCallbackResult) => {
    uni.hideLoading();
    const res = response.data;
    if (res && typeof res === 'object' && response.statusCode === 200) {
      // 业务接口调用成功
      if (res.code === 200) {
        return res.data;
      } else {
        const isLoginInterception = res.code === 401;
        apiMessage(res.message, isLoginInterception);
        // 请求接口错误走这里
        return Promise.reject(res.message);
      }
    }
    // 请求接口错误走这里
    return Promise.reject(response);
  },
  (error: UniNamespace.GeneralCallbackResult) => {
    console.error(error);
    uni.hideLoading();
    uni.showModal({
      title: '网络请求错误',
      content: error?.errMsg,
      showCancel: false,
      success: res => {},
    });
    console.error(error);
    return Promise.reject(error);
  }
);

export default http;
