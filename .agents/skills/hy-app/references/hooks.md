# hy-app Hook 参考

## 一、Hook 导入

优先从：

```ts
import {
    useToast,
    useMessage,
    useShare,
    usePopover,
    useQueue,
    useShakeService,
    useTranslate,
    useTouch,
} from '@hy-app/ui';
```

实际 API：

> 以当前版本 MCP 文档为准。

---

# 二、useToast

用于：

* 成功提示
* 错误提示
* 警告提示
* 普通提示
* Loading

模板必须存在：

```vue
<hy-toast />
```

示例：

```ts
import { useToast } from '@hy-app/ui';

const toast = useToast();

toast.show('默认提示');
toast.info('信息提示');
toast.success('操作成功');
toast.error('操作失败');
toast.warning('警告');
toast.primary('主题提示');
toast.loading('加载中...');
toast.close();
```

使用前：

> 优先通过 MCP `get_hook_doc` 查询 `useToast`。

---

# 三、useMessage

用于：

* Alert
* Confirm
* 删除确认
* 操作确认

模板必须存在：

```vue
<hy-modal />
```

示例：

```ts
import { useMessage } from '@hy-app/ui';

const message = useMessage();

await message.alert('操作成功');

const confirmed = await message.confirm(
    '确定要删除吗？',
);
```

复杂配置：

> 必须查询 MCP。

---

# 四、useShare

用于小程序分享。

示例：

```ts
import { useShare } from '@hy-app/ui';

const {
    onShareAppMessage,
    onShareTimeline,
} = useShare({
    title: '页面标题',
    path: '/pages/index/index',
});

defineExpose({
    onShareAppMessage,
    onShareTimeline,
});
```

注意：

> 分享参数必须根据当前版本 API 确认。

---

# 五、usePopover

用于：

* 气泡菜单
* 操作菜单
* 上下文操作

使用前：

> 查询 MCP `get_hook_doc`。

---

# 六、useQueue

用于：

* 队列任务
* 顺序执行
* 多任务控制

使用前：

> 查询 MCP。

---

# 七、useShakeService

用于：

* 摇一摇
* 设备动作相关能力

涉及设备 API 时：

> 必须检查平台兼容性。

---

# 八、useTranslate

用于：

* 翻译
* 多语言相关逻辑

如果项目已经存在 i18n：

> 优先复用项目现有国际化方案。

---

# 九、useTouch

用于：

* Touch 手势
* 滑动
* 触摸交互

涉及小程序 / App：

> 必须检查平台兼容性。

---

# 十、Hook 使用原则

Hook 使用顺序：

```text
确认需求
 ↓
查询 MCP
 ↓
确认参数
 ↓
确认返回值
 ↓
生成代码
 ↓
验证
```

禁止凭记忆猜测 Hook API。
