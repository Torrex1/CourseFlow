<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(defineProps<{
    name: string;
    title?: string;
    size?: string | number;
    class?: string;
}>(),
{
    size: "20",
    class: "",
},
);

// Record позволяет объявить, что будет храниться в ключ-значение (icons - string - ключ | path - default - any)
const icons: Record<string, { default: any }> = import.meta.glob("@/assets/icons/*.svg", { eager: true });

const iconUrl = computed(() => {
    const key = Object.keys(icons).find(k => k.endsWith(`${props.name}.svg`));
    return key ? icons[key]?.default : null;
});
</script>

<template>
    <div class="flex gap-1 items-center">
        <component
            :is="iconUrl"
            :class="class"
            :style="{ width: props.size + 'px', height: props.size + 'px' }"
        />
        <span v-if="props.title">{{ props.title }}</span>
    </div>
</template>
