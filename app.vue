<template>
  <header
    class="py-4 gap-7 flex flex-wrap items-center bg-gradient-to-r from-30% from-black to-[#1C2734] to-70% text-white">
    <NuxtLink class="shrink-0" to="/"><img src="/img/logo.png" alt=""></NuxtLink>
    <NuxtLink to="/tarif">Тарифы</NuxtLink>
    <NuxtLink to="/contacts">Контакты</NuxtLink>
    <div class="grow hidden md:block"></div>
    <span class="hidden xl:inline font-bold">+7 495 118-44-22</span>
    <a class="btn" href="#">Вход</a>
    <a class="btn fill" href="#">Регистрация</a>
  </header>
  <main>
    <NuxtPage />
  </main>
</template>
<style scoped lang="scss">
header,
main {
  $t: max(calc(385px - 1900px + 100vw), 25px);

  padding: {
    left: $t;
    right: $t;
  }
}
</style>
