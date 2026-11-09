---

name: 'hy-app'
description: '基于 @hy-app/ui 的 uni-app Vue3 + TypeScript 开发辅助技能。用于页面、组件、表单、列表、布局、弹窗、网络请求、Hook、主题、SCSS 和多端开发任务。优先复用项目现有架构，并通过 hy-app MCP 查询最新组件 API、示例和平台兼容性。'
------------------------------------------------------------------------------------------------------------------------------------------------------------

# hy-app 开发技能

## 一、技能目标

本 Skill 用于辅助开发：

* uni-app 页面
* Vue3 组件
* TypeScript
* 表单
* 列表
* 布局
* 弹窗
* Toast
* 网络请求
* Hook
* SCSS
* 主题
* 微信小程序
* H5
* App

核心原则：

> 优先使用项目已有实现，其次使用 @hy-app/ui，最后才进行自定义实现。

---

# 二、核心执行原则

## 2.1 先检查，再修改

开始任务后先读取项目实际结构。

根据任务按需检查：

* package.json
* pages.config.ts
* uni.scss
* vite.config.ts
* src/api
* src/store
* 公共根页面
* 相关业务文件

不要无条件检查所有文件。

---

## 2.2 最小修改原则

只修改完成当前任务所需要的文件。

禁止：

* 无关重构
* 无关升级依赖
* 无关修改 ESLint
* 无关修改 Prettier
* 无关调整目录结构
* 删除用户已有代码
* 覆盖已有实现

---

# 三、环境检查

只有当前任务涉及对应能力时才检查。

## UI 页面 / 组件任务

检查：

* `@hy-app/ui`
* hy-app SCSS
* easycom
* 公共根页面

## API / 网络任务

检查：

* request.ts
* HTTP 封装
* Token 处理
* API 类型

## 普通 TypeScript

如果不涉及 UI：

> 不需要检查 hy-app UI 环境。

---

# 四、用户确认规则

以下操作必须先获得用户确认：

* 安装依赖
* 创建文件
* 修改 package.json
* 修改 pages.config.ts
* 修改 uni.scss
* 修改 vite.config.ts
* 创建公共根页面
* 创建 request.ts
* 修改全局配置
* 修改已有业务逻辑

如果宿主环境提供 `AskUserQuestion`：

> 必须优先使用。

禁止在没有用户确认的情况下执行上述修改。

---

# 五、依赖检查

检查：

```text
package.json
```

确认：

```text
@hy-app/ui
```

如果没有安装：

```text
pnpm add @hy-app/ui
```

或根据项目实际包管理器使用 npm / yarn。

必须先询问用户。

不要直接安装。

---

# 六、组件查询

生成 hy-app 组件代码之前：

> 必须优先查询组件文档。

MCP 查询顺序：

```text
search_components
        ↓
get_component_api
        ↓
get_component_examples
        ↓
check_platform_support
        ↓
validate_component_usage
```

---

## 6.1 componentName 规则

MCP 查询组件时：

> 删除 `hy-` 前缀，并转换为 PascalCase。

例如：

```text
hy-button        → Button
hy-count-down    → CountDown
hy-form-item     → FormItem
hy-swipe-action  → SwipeAction
hy-config-provider → ConfigProvider
```

禁止：

```text
componentName: hy-button
```

---

# 七、禁止猜测 API

禁止根据记忆猜测：

* Props
* Events
* Slots
* Methods
* v-model
* Hook 参数
* 默认值
* 类型
* 枚举

优先从：

1. MCP
2. node_modules 源码
3. `.d.ts`
4. 项目已有使用方式

确认。

如果无法确认：

> 不得编造 API。

---

# 八、组件使用原则

优先级：

```text
项目已有组件
      ↓
@hy-app/ui
      ↓
uni-app 官方组件
      ↓
自定义实现
```

如果 hy-app 已经存在对应组件：

> 不要重新手写相同功能。

组件详细列表：

> 读取 `references/components.md`

---

# 九、Hook

如果任务涉及：

* Toast
* Message
* Share
* Popover
* Touch
* Queue
* Translate

优先查询：

```text
references/hooks.md
```

如果 MCP 提供 Hook 文档：

> 优先使用 MCP 最新 API。

---

# 十、HTTP

如果任务涉及：

* API
* 登录
* 请求
* 上传
* 分页
* Token
* 响应处理

先检查项目是否已经存在 HTTP 封装。

优先复用：

```text
src/api/request.ts
src/utils/request.ts
src/service/request.ts
```

不要重复创建 Http 实例。

HTTP 规范：

> 读取 `references/http.md`

---

# 十一、SCSS

所有页面和组件样式：

```vue
<style lang="scss">
</style>
```

默认使用：

```text
rpx
```

优先使用 hy-app：

* SCSS 变量
* Mixin
* 公共 class
* 主题变量

详细规范：

> 读取 `references/scss.md`

---

# 十二、代码生成

页面默认使用：

```vue
<script setup lang="ts">
```

组件 Props 优先使用：

```ts
interface IProps {}
```

并使用：

```ts
defineProps
withDefaults
```

双向绑定优先：

```ts
defineModel
```

详细模板：

> 读取 `references/templates.md`

---

# 十三、多端

uni-app 项目默认考虑：

* MP-WEIXIN
* H5
* APP-PLUS

涉及以下内容必须检查平台：

* 文件上传
* 分享
* 路由
* Storage
* DOM
* window
* document
* Canvas
* scroll-view
* 静态资源
* 分包

详细规范：

> 读取 `references/platform.md`

---

# 十四、验证

生成代码后：

1. 调用 `validate_component_usage`
2. 如果宿主提供 `GetDiagnostics`，执行诊断
3. 修复发现的问题
4. 再次验证

禁止：

> 没有执行诊断却声称“0 错误”。

---

# 十五、错误处理

发现错误：

```text
定位
 ↓
读取相关代码
 ↓
最小范围修复
 ↓
重新验证
```

禁止通过以下方式掩盖错误：

```text
@ts-ignore
大量 any
eslint-disable
关闭 TypeScript
```

除非确实必要，并说明原因。

---

# 十六、最终汇报

完成后简洁说明：

```text
完成。

环境：
✓ 已复用 @hy-app/ui
✓ 已复用现有 request.ts

组件：
✓ hy-card
✓ hy-flex
✓ hy-list

验证：
✓ API 已确认
✓ 平台兼容性已确认
✓ 诊断通过
```

只报告实际执行过的内容。

---

# 十七、Reference 按需读取规则

不要一次读取所有 references。

根据任务按需读取：

| 任务            | Reference       |
| ------------- | --------------- |
| UI 组件         | `components.md` |
| Hook          | `hooks.md`      |
| HTTP / API    | `http.md`       |
| SCSS          | `scss.md`       |
| 页面模板          | `templates.md`  |
| 微信 / H5 / App | `platform.md`   |

核心原则：

> **按需加载，避免无关 Token 消耗。**
