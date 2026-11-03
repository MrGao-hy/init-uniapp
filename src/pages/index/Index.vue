<script setup lang="ts">
import { useToast, useMessage } from '@hy-app/ui';

const toast = useToast();
const message = useMessage();

definePage({
    style: {
        navigationBarTitleText: '首页',
    },
});

const onToast = () => {
    toast.success('成功');
};

const onMessage = () => {
    message.alert('成功');
};
</script>

<template>
    <hy-button text="成功信息" @click="onToast"></hy-button>
    <hy-button type="success" text="提示弹窗" @click="onMessage"></hy-button>
</template>
