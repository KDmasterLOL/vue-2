<script setup lang="ts">
import Icon from './icon.vue'
const props = defineProps<{
  icon: string
  title: string
}>()
</script>
<template>
  <article
    class="flex gap-[15px] justify-center items-center px-[15px] py-[24px] bg-[#FBFCFD] border rounded-[10px] border-[#EEEFF1]">
    <Icon :icon="icon" class="w-[20%] max-w-[18%] "></Icon>
    <div class="h-fit">
      <header class="mb-[10px]">
        <strong class="text-primary-dark">{{ title }}</strong>
      </header>
      <div class="text-sm contents">
        <slot />
      </div>
    </div>
  </article>
</template>
