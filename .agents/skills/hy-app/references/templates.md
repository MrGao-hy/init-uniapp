# hy-app 页面与组件模板

## 一、标准页面

```vue
<script setup lang="ts">

</script>

<template>
    <the-root-page>
        <hy-card>
            <hy-flex
                direction="column"
                gap="20rpx"
            >
                <!-- 页面内容 -->
            </hy-flex>
        </hy-card>
    </the-root-page>
</template>

<style lang="scss">

</style>
```

注意：

> 如果项目没有 `the-root-page`，先检查项目是否有其他公共页面容器。

不要强制创建。

---

# 二、表单

```vue
<script setup lang="ts">

  interface FormData {
    username: string;
    phone: string;
  }

  const formData: FormData = {
    username: '',
    phone: '',
  };

</script>

<template>
    <the-root-page>
        <hy-form
            ref="formRef"
            :model="formData"
            :rules="rules"
        >
            <hy-card>
                <hy-form-item
                    label="用户名"
                    prop="username"
                >
                    <hy-input
                        v-model="formData.username"
                        placeholder="请输入用户名"
                    />
                </hy-form-item>

                <hy-form-item
                    label="手机号"
                    prop="phone"
                >
                    <hy-input
                        v-model="formData.phone"
                        placeholder="请输入手机号"
                    />
                </hy-form-item>
            </hy-card>
        </hy-form>
    </the-root-page>
</template>

<style lang="scss">

</style>
```

实际 Props / Rules：

> 必须通过 MCP 确认。

---

# 三、虚拟列表

```vue
<template>
    <the-root-page>
        <hy-list
            @load="onLoad"
            :finished="finished"
        >
            <hy-card
                v-for="item in list"
                :key="item.id"
            >
                <hy-flex
                    direction="column"
                    gap="10rpx"
                >
                    <hy-text
                        :size="32"
                        :bold="true"
                    >
                        {{ item.title }}
                    </hy-text>

                    <hy-text
                        :size="24"
                        color="--hy-text-color--2"
                    >
                        {{ item.desc }}
                    </hy-text>
                </hy-flex>
            </hy-card>
        </hy-list>
    </the-root-page>
</template>
```

---

# 四、详情页

推荐结构：

```vue
<script setup lang="ts">

</script>

<template>
    <the-root-page>
        <hy-card>
            <!-- 详情内容 -->
        </hy-card>

        <hy-card>
            <!-- 更多信息 -->
        </hy-card>

        <hy-submit-bar>
            <!-- 操作 -->
        </hy-submit-bar>
    </the-root-page>
</template>

<style lang="scss">

</style>
```

实际 `hy-submit-bar` API：

> 必须查询 MCP。

---

# 五、弹窗页面

```vue
<script setup lang="ts">
  import {
    useMessage,
    useToast,
  } from '@hy-app/ui';

  const message = useMessage();
  const toast = useToast();
</script>


<template>
    <the-root-page>
        <!-- 页面 -->

        <hy-modal />
        <hy-toast />
    </the-root-page>
</template>
```

---

# 六、组件模板

```vue


<script setup lang="ts">
  interface IProps {
    title?: string;
  }

  withDefaults(
      defineProps<IProps>(),
      {
        title: '',
      },
  );
</script>


<template>
    <view class="hy-example">
        <slot />
    </view>
</template>

<style lang="scss">
.hy-example {
}
</style>
```

---

# 七、defineModel

需要双向绑定时：

```ts
const modelValue = defineModel<string>({
    default: '',
});
```

使用：

```vue
<input v-model="modelValue" />
```

如果需要多个 model：

> 根据 Vue3 当前项目版本确认支持情况。

---

# 八、Props

推荐：

```ts
interface IProps {
    title?: string;
    disabled?: boolean;
}

const props = withDefaults(
    defineProps<IProps>(),
    {
        title: '',
        disabled: false,
    },
);
```

---

# 九、Emits

推荐：

```ts
const emit = defineEmits<{
    change: [value: string];
    submit: [];
}>();
```

---

# 十、页面代码原则

页面必须：

* 使用 `<script setup lang="ts">`
* 类型明确
* 样式使用 SCSS
* 默认使用 rpx
* 优先使用 hy-app
* 不重复实现已有功能
* 不猜组件 API
* 考虑多端
