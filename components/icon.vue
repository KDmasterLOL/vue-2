<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()
</script>
<template>
  <img :src="'/vue-2/img/icons/' + icon" alt="">
</template>
