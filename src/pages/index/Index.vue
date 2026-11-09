<script setup lang="ts">
import { ref } from 'vue';
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

// 日历组件
const showSingleCalendar = ref(false);
const showRangeCalendar = ref(false);
const singleDate = ref('');
const rangeDate = ref('');

const onSingleConfirm = (dates: string[]) => {
    singleDate.value = dates[0] ?? '';
};

const onRangeConfirm = (dates: string[]) => {
    rangeDate.value = dates.join(' 至 ');
};

// 评分组件
const rateValue = ref(3);

// 滑块组件
const sliderValue = ref(30);
</script>

<template>
    <view class="demo">
        <view class="demo__section">
            <text class="demo__title">Toast / Message</text>
            <hy-flex :gap="20">
                <hy-button text="成功信息" @click="onToast"></hy-button>
                <hy-button type="success" text="提示弹窗" @click="onMessage"></hy-button>
            </hy-flex>
        </view>

        <view class="demo__section">
            <text class="demo__title">hy-calendar 日历</text>
            <hy-cell clickable>
                <hy-cell-item
                    title="单选日期（含农历）"
                    name="single"
                    :value="singleDate || '请选择'"
                    @click="showSingleCalendar = true"
                ></hy-cell-item>
                <hy-cell-item
                    title="范围日期（最多15天）"
                    name="range"
                    :value="rangeDate || '请选择'"
                    @click="showRangeCalendar = true"
                ></hy-cell-item>
            </hy-cell>
        </view>

        <view class="demo__section">
            <text class="demo__title">hy-rate 评分</text>
            <hy-rate v-model="rateValue" allow-half></hy-rate>
        </view>

        <view class="demo__section">
            <text class="demo__title">hy-slider 滑块</text>
            <hy-slider v-model="sliderValue" show-value></hy-slider>
        </view>

        <!-- 日历弹窗：单选模式，展示农历，默认从当月起展示3个月 -->
        <hy-calendar
            v-model:show="showSingleCalendar"
            title="选择日期"
            show-lunar
            @confirm="onSingleConfirm"
        ></hy-calendar>

        <!-- 日历弹窗：范围模式，最多可选15天，允许起止为同一天 -->
        <hy-calendar
            v-model:show="showRangeCalendar"
            title="选择日期范围"
            mode="range"
            :max-range="15"
            allow-same-day
            @confirm="onRangeConfirm"
        ></hy-calendar>
    </view>
</template>

<style lang="scss">
.demo {
    padding: 24rpx;

    &__section {
        margin-bottom: 40rpx;
    }

    &__title {
        display: block;
        margin-bottom: 20rpx;
        font-size: 28rpx;
        font-weight: bold;
    }
}
</style>
