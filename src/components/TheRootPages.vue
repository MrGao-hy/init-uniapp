<script setup lang="ts"></script>
<template>
    <hy-config-provider>
        <slot></slot>

        <hy-toast></hy-toast>
        <hy-modal :message="true"></hy-modal>
    </hy-config-provider>
</template>

<style lang="scss" scoped></style>
