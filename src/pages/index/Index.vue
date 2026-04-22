<script setup lang="ts">
import TheCommonPages from '@/components/TheCommonPages.vue';

definePage({
    style: {
        navigationBarTitleText: '首页',
    },
});
</script>

<template>
    <the-common-pages>
        <hy-button text="按钮"></hy-button>
    </the-common-pages>
</template>
