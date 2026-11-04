<template></template>

<script setup lang="ts"></script>

<style lang="scss">
/*
 * 全局样式统一在这里引入。
 * 不要写进 src/uni.scss：uni.scss 的内容会被注入到每个 scss 块里，
 * 组件内再出现 @use 就会报 "must be written before any other rules"。
 */
@use "@hy-app/ui/index.scss" as *;

/* 颜色变量 */
:root,
page {
  --hy-button-radius: 20rpx;
  --hy-button-height: 50px;
  --hy-button-font-size: 38rpx;
}
</style>
