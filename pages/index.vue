<script setup lang="ts">
definePageMeta({
  breadcrumbs: "Главная страница",
})

import { ref } from 'vue'
import { useFloating, offset, shift } from '@floating-ui/vue'

let modal_is_open = ref(false)

const reference = ref(null)
const floating = ref(null)
const { floatingStyles } = useFloating(reference, floating, {
  placement: 'top-center',
  middleware: [offset(4), shift()]
})
const feedback = ref(false)
const form = ref(null)
const show_feedback = (e) => {
  e.preventDefault()
  if (form.value.checkValidity()) {
    feedback.value = true
    setTimeout(() => {
      feedback.value = false
      form.value.submit()
    }, 3000)
  }

};
</script>
<template>
  <div class="contents">
    <Modal :is-open="modal_is_open" @close="modal_is_open = false">
      <iframe width="960" height="555" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=_KUQO02WjhoySMEL"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </Modal>
    <section class="grid grid-cols-1 xl:grid-cols-2 justify-center items-center mt-[80px] gap-x-[40px]">
      <div>
        <h1>Проверьте штрафы и зарегестрируйтесь в 1 клик</h1>
        <form action="#" class="mt-5" ref="form">
          <div class="grid grid-cols-3 gap-x-[30px]">
            <div class="col-start-1 col-end-3">
              <label for="number-auto">Номер автомобиля</label>
              <input class="w-[100%] invalid:border-red-400" required type="text" id="number-auto">
            </div>
            <div>
              <label for="region">Регион</label>
              <input class="w-[100%] invalid:border-red-400" required type="text" id="region">
            </div>
          </div>
          <div class="mt-[16px]">
            <label for="ts">Свидетельство о регистрации ТС</label>
            <input class="w-[100%] invalid:border-red-400" required type="text" id="ts">
          </div>
          <div class="mt-[15px]">
            <button ref="reference" class="fill mr-[21px]" @click="show_feedback" type="submit">Проверить штрафы <Icon
                icon="arrow.svg" class="inline ml-[4px]"></Icon>
            </button>
            <div ref="floating" :style="floatingStyles" v-if="feedback">
              <p class="p-3 rounded-sm border border-gray-100 bg-green-50 font-bold">Данные были успешно отправлены
              </p>
            </div>
            <button class="outline" type="button" @click="modal_is_open = true">
              <Icon icon="youtube.svg" class="inline mr-[3px]"></Icon>
              О сервисе <span class="text-primary-dark text-sm">(1 мин. 20 сек)</span>
            </button>
          </div>
          <p class="text-secondary text-xs mt-[16px]">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
            персональных
            данных и принимаете оферту</p>
        </form>
      </div>
      <div class="flex justify-center">
        <img src="/img/image_2.png" alt="">
      </div>
    </section>

    <section class="mt-[98px]">
      <h2 class="text-center mb-[40px]">Плюсы использования сервиса «Компас» для анализа штрафов</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[35px]">
        <Card icon="infinity.svg" title="Неограниченый автопарк">
          <span>Можно добавить неограниченное кол-во машин и водителей</span>
        </Card>
        <Card icon="map.svg" title="Сокращение затрат до 50%">
          <span>Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по
            скидке
          </span>
        </Card>
        <Card icon="shield.svg" title="Безопасность">
          <span>Данные передаются в зашифрованном виде, они доступны только получателю</span>
        </Card>
        <Card icon="bell.svg" title="Уведомление о погашении">
          <span>Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП</span>
        </Card>
        <Card icon="note.svg" title="Квитанция об оплате">
          <span>После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной
            оплате.</span>
        </Card>
        <Card icon="clock.svg" title="Все история сохраняется по каждой машине">
          <span>Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по
            штрафам</span>
        </Card>
      </div>
    </section>
    <section class="mt-[85px] mb-[473px]">
      <h2 class="text-center mb-[40px]">Документы</h2>
      <Slider>
        <CardDocument class="shrink grow basis-0" title="Лицензионный договор" document_url="/documents/licence">
          Механизм разбрасывания
          веерного типа приводится в
          действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке. </CardDocument>
        <CardDocument class="shrink grow basis-0 hidden sm:block" title="Политика обработки персональных данных"
          document_url="/documents/policy">Радиус
          разброса ПГМ составляет до 3
          метров и может регулироваться.</CardDocument>
        <CardDocument class="shrink grow basis-0 hidden xl:block" title="Информация об оплате"
          document_url="/documents/info">
          Десятипозиционный
          переключатель дозировки расположен
          на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и
          фракции.
        </CardDocument>
      </Slider>
    </section>
  </div>
</template>
