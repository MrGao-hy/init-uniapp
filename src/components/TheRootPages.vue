<script setup lang="ts"></script>
<template>
    <hy-config-provider>
        <slot></slot>
        <hy-button text="按钮"></hy-button>

        <hy-toast></hy-toast>
        <hy-modal></hy-modal>
    </hy-config-provider>
</template>

<style lang="scss" scoped></style>
