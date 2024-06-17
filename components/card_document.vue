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
      <NuxtLink class="btn fill w-full text-center" :to="document_url">Перейти</NuxtLink>
    </article>
  </div>
</template>
