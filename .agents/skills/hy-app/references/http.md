# hy-app HTTP 开发规范

## 一、基本原则

网络请求优先使用项目现有 HTTP 封装。

检查：

```text
src/api/request.ts
src/utils/request.ts
src/service/request.ts
```

如果已经存在：

> 直接复用。

禁止重复创建多个 HTTP 实例。

---

# 二、@hy-app/ui Http

如果项目没有 HTTP 封装，并且用户确认创建：

```ts
import { Http } from '@hy-app/ui';

const http = new Http();

http.config = {
    baseURL: 'https://your-api-domain.com',
    url: 'https://your-api-domain.com',
    timeout: 10000,
};
```

实际配置：

> 根据项目后端地址调整。

---

# 三、请求拦截

常见 Token：

```ts
http.interceptor.request(conf => {
    const token = uni.getStorageSync('token');

    if (token) {
        conf.header = {
            ...conf.header,
            Authorization: `Bearer ${token}`,
        };
    }

    return conf;
});
```

注意：

> Token 字段必须根据项目实际情况确定。

不要默认一定是：

```text
token
Authorization
Bearer
```

---

# 四、响应拦截

不要假设后端一定使用：

```text
code === 200
```

应该先读取项目已有 API 规范。

例如：

```ts
http.interceptor.response(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    },
);
```

如果项目后端统一使用：

```json
{
    "code": 200,
    "message": "success",
    "data": {}
}
```

再按照项目规范处理。

---

# 五、API 文件

推荐：

```text
src/api/
├── request.ts
├── user.ts
├── order.ts
├── product.ts
└── ...
```

---

# 六、类型定义

推荐：

```ts
export interface UserInfo {
    id: number;
    nickname: string;
    avatar: string;
}
```

API：

```ts
export const getUserInfoApi = (): Promise<UserInfo> => {
    return http.get('/user/info');
};
```

不要：

```ts
export const getUserInfoApi = (): Promise<any> => {
    return http.get('/user/info');
};
```

---

# 七、分页

分页接口优先定义：

```ts
interface PageParams {
    page: number;
    pageSize: number;
}
```

返回类型根据后端真实结构定义。

不要假设分页字段一定是：

```text
records
total
current
size
```

---

# 八、错误处理

优先复用项目统一错误处理。

不要在每个 API 文件里重复：

```ts
uni.showToast(...)
```

如果 request.ts 已经统一处理：

> API 层只负责请求和类型。

---

# 九、登录

登录相关请求必须明确：

* 登录接口
* Token
* 用户信息
* Token 存储
* 401 行为
* 登录页路径

不要自行猜测。

---

# 十、HTTP 验证

如果 MCP 提供 Http 文档：

> 优先查询 `get_tool_doc`。

如果项目已有 request.ts：

> 优先读取真实实现。
