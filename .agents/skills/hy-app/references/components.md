# hy-app 组件参考

## 一、基础组件

| 组件           | 用途 |
| ------------ | -- |
| `hy-button`  | 按钮 |
| `hy-badge`   | 徽标 |
| `hy-icon`    | 图标 |
| `hy-image`   | 图片 |
| `hy-tag`     | 标签 |
| `hy-text`    | 文本 |
| `hy-price`   | 价格 |
| `hy-loading` | 加载 |

---

## 二、表单组件

| 组件                   | 用途   |
| -------------------- | ---- |
| `hy-form`            | 表单容器 |
| `hy-form-item`       | 表单项  |
| `hy-form-group`      | 表单分组 |
| `hy-input`           | 输入   |
| `hy-textarea`        | 多行输入 |
| `hy-checkbox`        | 复选   |
| `hy-checkbox-group`  | 复选组  |
| `hy-checkbox-item`   | 复选项  |
| `hy-radio`           | 单选   |
| `hy-switch`          | 开关   |
| `hy-picker`          | 选择器  |
| `hy-datetime-picker` | 日期时间 |
| `hy-cascader`        | 级联   |
| `hy-calendar`        | 日历   |
| `hy-code-input`      | 验证码  |
| `hy-number-step`     | 数字步进 |
| `hy-slider`          | 滑块   |
| `hy-upload`          | 上传   |
| `hy-rate`            | 评分   |
| `hy-search`          | 搜索   |
| `hy-address-picker`  | 地址   |

---

## 三、布局组件

| 组件             | 用途      |
| -------------- | ------- |
| `hy-card`      | 卡片      |
| `hy-flex`      | Flex 布局 |
| `hy-grid`      | 宫格      |
| `hy-cell`      | 单元格     |
| `hy-cell-item` | 单元格项    |
| `hy-divider`   | 分割线     |
| `hy-line`      | 线条      |
| `hy-waterfall` | 瀑布流     |
| `hy-sticky`    | 粘性定位    |

---

## 四、反馈组件

| 组件                | 用途      |
| ----------------- | ------- |
| `hy-toast`        | Toast   |
| `hy-modal`        | Modal   |
| `hy-notify`       | 通知      |
| `hy-popup`        | 弹出层     |
| `hy-overlay`      | 遮罩      |
| `hy-action-sheet` | 操作菜单    |
| `hy-dropdown`     | 下拉菜单    |
| `hy-tooltip`      | Tooltip |
| `hy-empty`        | 空状态     |
| `hy-skeleton`     | 骨架屏     |
| `hy-loading`      | 加载      |

---

## 五、导航组件

| 组件               | 用途   |
| ---------------- | ---- |
| `hy-navbar`      | 导航栏  |
| `hy-tabbar`      | 底部导航 |
| `hy-tabbar-item` | 导航项  |
| `hy-tabs`        | 标签页  |
| `hy-steps`       | 步骤   |
| `hy-index-bar`   | 索引栏  |
| `hy-pagination`  | 分页   |
| `hy-subsection`  | 分段器  |

---

## 六、其他组件

| 组件                   | 用途   |
| -------------------- | ---- |
| `hy-avatar`          | 头像   |
| `hy-swiper`          | 轮播   |
| `hy-list`            | 列表   |
| `hy-scroll-list`     | 横向滚动 |
| `hy-swipe-action`    | 滑动操作 |
| `hy-float-button`    | 悬浮按钮 |
| `hy-back-top`        | 返回顶部 |
| `hy-submit-bar`      | 提交栏  |
| `hy-folding-panel`   | 折叠面板 |
| `hy-count-down`      | 倒计时  |
| `hy-count-to`        | 数字滚动 |
| `hy-rolling-num`     | 滚动数字 |
| `hy-read-more`       | 阅读更多 |
| `hy-line-progress`   | 线性进度 |
| `hy-qrcode`          | 二维码  |
| `hy-signature`       | 签名   |
| `hy-watermark`       | 水印   |
| `hy-coupon`          | 优惠券  |
| `hy-config-provider` | 全局配置 |
| `hy-transition`      | 过渡   |
| `hy-parse`           | 富文本  |
| `hy-keyboard`        | 键盘   |
| `hy-status-bar`      | 状态栏  |
| `hy-warn`            | 警告   |
| `hy-popover`         | 气泡   |
| `hy-check-button`    | 选择按钮 |
| `hy-table`           | 表格   |

---

# 七、常见场景

## 表单

优先：

```vue
<hy-form>
    <hy-form-item>
        <hy-input />
    </hy-form-item>
</hy-form>
```

## 卡片

优先：

```vue
<hy-card>
    内容
</hy-card>
```

## Flex

优先：

```vue
<hy-flex>
    内容
</hy-flex>
```

## Toast

```vue
<hy-toast />
```

配合：

```ts
useToast()
```

## Modal

```vue
<hy-modal />
```

配合：

```ts
useMessage()
```

---

# 八、重要规则

本文件只用于：

> 快速判断应该使用哪个组件。

不要在这里维护完整 Props / Events。

完整 API：

> 优先通过 MCP `get_component_api` 获取。

示例：

> 优先通过 MCP `get_component_examples` 获取。

平台：

> 优先通过 MCP `check_platform_support` 获取。
