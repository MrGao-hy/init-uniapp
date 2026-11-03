<script setup lang="ts">
import { ref } from 'vue';

const helloKuRoot = ref('Hello AppKuVue');
</script>

<template>
    <hy-config-provider
        theme-color="black"
    >
        <KuRootView />

        <hy-toast></hy-toast>
        <hy-modal :message="true"></hy-modal>
    </hy-config-provider>
</template>

<style lang="scss">

</style>
