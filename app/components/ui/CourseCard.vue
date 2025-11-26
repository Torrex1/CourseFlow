<script lang="ts" setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps<{
    title: string;
    category: string;
    icon: string;
    progress: number;
}>();
</script>

<template>
    <div class="border flex flex-col w-80 w-full sm:w-80 rounded-xl overflow-hidden cursor-pointer">
        <div 
            class="flex justify-center bg-green-200 p-4">
            <BaseIcon
                :name=props.icon
                size="230"
            />
        </div>

        <div class="flex flex-col gap-4 p-4">
            <div class="flex flex-col">
                <span class="text-lg font-semibold">{{ props.title }}</span>
                <small>{{ props.category }}</small>
            </div>

            <div class="flex flex-col">
                <div
                    class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                    role="progressbar"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    <div
                        class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                        :style="{ width: `${props.progress}%` }"
                    />
                </div>
                <span class="font-semibold">{{ props.progress }}%</span>
            </div>
        </div>
    </div>
</template>
