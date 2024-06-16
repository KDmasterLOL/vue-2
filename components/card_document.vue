<script setup lang="ts">
import Icon from './icon.vue'
const props = defineProps<{
  title: string
  document_url: string
}>()
</script>
<template>
  <div>
    <article
      class="flex gap-[15px] flex-col min-h-[450px] border items-center p-[25px] shadow rounded-[10px] border-[#EEEFF1]">
      <header class="text-md">
        <strong class="text-primary-dark">{{ title }}</strong>
      </header>
      <div class="contents">
        <slot />
      </div>
      <div class="grow"></div>
      <a class="btn fill w-full text-center" :href="document_url">Перейти</a>
    </article>
  </div>
</template>
