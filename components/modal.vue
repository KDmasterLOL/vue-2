<script setup lang="ts">
import Icon from './icon.vue'
const props = defineProps<{
  isOpen: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
}>()

let state = ref(props.initialState)
</script>
<template>
  <div class="z-50 fixed w-[100vw] h-[100vh] left-0 top-0 bg-black/80" v-if="isOpen">
    <article class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <button @click="$emit('close')" class="clean absolute top-[-8px] right-0 translate-y-[-100%]">
        <Icon icon="crosshair.svg"></Icon>
      </button>
      <slot />
    </article>
  </div>
</template>
