<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>
<template>
  <img :src="'/img/icons/' + icon" alt="">
</template>
