<script setup>
import { computed } from "vue";

const props = defineProps({
	name: { type: String, required: true },
	size: { type: String, default: 20 },
	class: { type: String, default: "" },
});

const iconUrl = computed(() => defineAsyncComponent (() => import(`@/assets/icons/${props.name}.svg`)));
</script>

<template>
	<component
		:is="iconUrl"
		:class="class"
		:style="{ width: props.size + 'px', height: props.size + 'px' }"
	/>
</template>
