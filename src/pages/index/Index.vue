<script setup lang="ts">
import TheRootPages from '@/components/TheRootPages.vue';

definePage({
    style: {
        navigationBarTitleText: '首页',
    },
});
</script>

<template>
    <the-root-pages>
        <hy-button text="按钮"></hy-button>
    </the-root-pages>
</template>
