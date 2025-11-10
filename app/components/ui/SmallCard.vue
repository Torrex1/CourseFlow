<script lang="ts" setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps<{
    title: string;
    score: string;
    icon: string;
    bgColor: string;
}>();
</script>

<template>
    <div class="flex gap-4 border w-64 p-3 justify-start items-center rounded-lg">
        <div :class="['flex justify-center rounded-md w-10 h-10', props.bgColor]">
            <BaseIcon
                :name="props.icon"
            />
        </div>

        <div class="flex flex-col">
            <span class="text-lg">{{ props.title }}</span>
            <span class="font-bold text-xl leading-6">{{ props.score }}</span>
        </div>
    </div>
</template>
