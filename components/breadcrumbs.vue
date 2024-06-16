<script setup>
const route = useRoute();
const router = useRouter();

const crumbsRoute = computed(() => {
  let fullPath = "";
  const routes = route.fullPath.split("/")
  console.log(routes)
  return routes
    .map((route) => {
      fullPath = fullPath == '/' ? fullPath + route : `${fullPath}/${route}`
      console.log(router.resolve(fullPath))
      return router.resolve(fullPath);
    })
    .filter(Boolean);
});
</script>
<template>
  <ul class="flex items-center gap-[10px] my-[20px]">
    <template v-for="(crumb, index) in crumbsRoute" :key="crumb.name">
      <div class="w-[5px] h-[5px] bg-black rounded-full" v-if="index != 0"></div>
      <span :class="{ 'text-[#8F8F8F]': index === crumbsRoute.length - 1 }">{{ crumb.meta.breadcrumbs }}</span>
    </template>

  </ul>
</template>
