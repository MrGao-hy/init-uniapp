# hy-app 多端开发规范

## 一、目标平台

默认考虑：

```text
MP-WEIXIN
H5
APP-PLUS
```

---

# 二、条件编译

微信小程序：

```vue
<!-- #ifdef MP-WEIXIN -->

<!-- #endif -->
```

H5：

```vue
<!-- #ifdef H5 -->

<!-- #endif -->
```

App：

```vue
<!-- #ifdef APP-PLUS -->

<!-- #endif -->
```

多个平台：

```vue
<!-- #ifdef H5 || APP-PLUS -->

<!-- #endif -->
```

---

# 三、禁止直接使用 Web API

uni-app 公共代码中不要直接使用：

```ts
window
document
localStorage
location
```

除非已经进行平台判断。

例如：

```ts
// #ifdef H5
const width = window.innerWidth;
// #endif
```

---

# 四、静态资源

静态资源必须考虑：

* 主包
* 分包
* H5
* 微信小程序
* App

不要假设：

```text
@/static/xxx.png
```

在所有平台都能以同样方式运行。

如果资源位于分包：

> 必须确认微信小程序分包资源规则。

---

# 五、图片路径

如果代码需要动态图片：

> 优先使用项目已有图片路径处理函数。

例如项目已经存在：

```ts
designImage()
```

则优先复用。

不要重新创建第二套图片路径工具。

---

# 六、页面路由

uni-app 页面跳转优先使用：

```ts
uni.navigateTo()
uni.redirectTo()
uni.reLaunch()
uni.switchTab()
uni.navigateBack()
```

不要在公共跨端代码中直接使用：

```ts
window.location
```

---

# 七、Storage

优先使用：

```ts
uni.getStorageSync()
uni.setStorageSync()
uni.removeStorageSync()
```

不要直接使用：

```ts
localStorage
```

---

# 八、上传

涉及：

```text
uni.chooseImage
uni.uploadFile
```

必须检查目标平台。

如果 hy-app 已提供上传组件：

> 优先使用 `hy-upload`。

使用前查询 MCP：

```text
get_component_api
get_component_examples
check_platform_support
```

---

# 九、分享

涉及小程序分享：

> 优先使用 `useShare`。

并检查：

```text
MP-WEIXIN
```

---

# 十、DOM

不要在微信小程序中直接使用：

```ts
document.querySelector()
```

如果需要获取节点尺寸：

优先考虑：

```ts
uni.createSelectorQuery()
```

具体实现根据当前平台确认。

---

# 十一、Canvas

Canvas 属于平台相关能力。

使用前必须检查：

* MP-WEIXIN
* H5
* APP-PLUS

不要直接假设 Web Canvas API 在所有平台一致。

---

# 十二、scroll-view

涉及：

* 横向滚动
* 纵向滚动
* 滚动同步
* 虚拟列表
* 固定列

必须考虑微信小程序和 H5 差异。

如果 hy-app 已提供相关组件：

> 优先使用 hy-app。

---

# 十三、分包

涉及分包资源时：

必须确认：

```text
pages.json
pages.config.ts
分包目录
静态资源位置
```

不要仅凭 H5 路径判断微信小程序路径。

---

# 十四、平台检查

涉及平台差异时：

优先调用：

```text
check_platform_support
```

如果组件不支持当前平台：

> 明确告知用户，并提供替代实现。

---

# 十五、多端原则

代码优先级：

```text
跨端通用 API
      ↓
uni-app API
      ↓
条件编译
      ↓
平台专用 API
```

尽量减少：

```text
#ifdef
```

只有真正存在平台差异时才使用。
