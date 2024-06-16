<script setup lang="ts">
let count_elements = 3
</script>
<template>
  <section class=" px-[27px] relative">
    <Icon icon="arrow_cemicircle.svg" class="rotate-180 absolute top-[50%] left-0 translate-y-[-50%]"></Icon>
    <div class="flex gap-[35px]">
      <slot />
    </div>
    <div class="flex gap-[5px] justify-center items-center mt-[13px]">
      <div class="w-[10px] h-[10px] bg-[#007AFF] rounded-full"></div>
      <div class="w-[7px] h-[7px] bg-[#D9D9D9] rounded-full"></div>
    </div>
    <Icon icon="arrow_cemicircle.svg" class="absolute top-[50%] right-0 translate-y-[-50%]"></Icon>
  </section>
</template>
<style scoped>
section>* {
  @apply shrink grow basis-0;
}
</style>
