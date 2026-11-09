# hy-app SCSS 规范

## 一、Style

所有页面和组件：

```vue
<style lang="scss">
</style>
```

---

# 二、单位

uni-app 页面默认：

```text
rpx
```

例如：

```scss
padding: 20rpx;
font-size: 28rpx;
border-radius: 16rpx;
```

只有平台 API、第三方库或特殊 CSS 场景需要时才使用 `px`。

---

# 三、主题色

优先使用：

```scss
$hy-primary
$hy-primary-dark
$hy-primary-light
$hy-primary-disabled

$hy-warning
$hy-success
$hy-error
$hy-info
```

---

# 四、文字颜色

```scss
$hy-text-color
$hy-text-color--2
$hy-text-color--3
$hy-text-color--4
$hy-icon-color
$hy-text-color--placeholder
$hy-text-color--disabled
```

---

# 五、字体

```scss
$hy-font-size-xs
$hy-font-size-sm
$hy-font-size-base
$hy-font-size-md
$hy-font-size-lg
$hy-font-size-xl
$hy-font-size-xxl
```

---

# 六、间距

```scss
$hy-border-margin-padding-sm
$hy-border-margin-padding-base
$hy-border-margin-padding-lg
$hy-border-margin-padding-xl
```

---

# 七、圆角

```scss
$hy-radius-no
$hy-radius-sm
$hy-radius-base
$hy-radius-lg
$hy-radius-circle
```

---

# 八、阴影

```scss
$hy-shadow-sm
$hy-shadow-base
$hy-shadow-lg
```

---

# 九、背景

```scss
$hy-background
$hy-background--2
$hy-background--container
$hy-background--track
$hy-background--disabled
$hy-background--mask
```

---

# 十、Mixin

Flex：

```scss
@include flex(row);
@include flex(column);
```

文本：

```scss
@include lineEllipsis;
@include multiEllipsis(3);
```

BEM：

```scss
@include b('button') {
}

@include e('icon') {
}

@include m('primary') {
}

@include is('active') {
}

@include pseudo('hover') {
}
```

主题：

```scss
$color-dark: themeColor(
    $hy-primary,
    '',
    'dark'
);

$color-light: themeColor(
    $hy-primary,
    '',
    'light'
);
```

---

# 十一、公共样式

优先使用：

```text
.hy-page
.hy-title
.hy-border
.hy-border__top
.hy-border__bottom
```

如果项目已经提供对应样式：

> 优先复用。

---

# 十二、SCSS 原则

优先级：

```text
hy-app SCSS 变量
      ↓
hy-app Mixin
      ↓
项目公共 SCSS
      ↓
组件局部 SCSS
      ↓
硬编码 CSS
```

禁止大量硬编码颜色：

```scss
color: #333;
background: #fff;
```

如果存在对应主题变量：

> 必须优先使用变量。

---

# 十三、组件样式

组件内部推荐 BEM：

```scss
.hy-product-card {
    &__image {
    }

    &__title {
    }

    &__price {
    }

    &--disabled {
    }
}
```

避免产生过深选择器。
