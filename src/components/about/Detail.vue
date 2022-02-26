<template>
  <div class="b-detail text">
    <div class="b-detail__search b-detail-search" >
      <h1 class="b-detail__title">Блок описания элементов</h1>
      <div class="b-detail-search__item">
        <div class="b-detail-search__text">1. Контрол для ввода адреса. <br>Изменение значение отслеживается через событие @input.<br> Есть селектор "disabled". <br>При пустом значении выводится предупреждение: </div>
        <input  type="text" placeholder="Введите адрес"  class="input-search b-detail-search__input disabled"  v-model="address" />
      </div>
      <div class="b-detail-search__item">
        <div class="b-detail-search__text">2. Кнопка для отправки данных из первого контрола.<br>
          При клике вызывается метод,которая осуществляется запрос к action в сторе.<br>
        </div>
        <q-btn disabled  unelevated rounded color="primary" class=" b-detail-search__but" label="Найти"></q-btn>
      </div>

      <div class="b-detail-search__item">
        <div class="b-detail-search__text" >3. Таблица в которую выводятся данные полученные  в запросе к dadata.<br>
          Каждый элемент адреса выводится через метод foreach.<br>
          На этой странице таблица по появится в случае,если на странице AdressSearch будет произведен поиск с положительным результатом(будет найден хотя бы один адрес). </div>
        <Table v-if="addressList && addressList.length" />
      </div>

      <div class="b-detail-search__item">
        <div class="b-detail-search__text">4. Выводится предупреждение в случае если при запросе в сервис dadata не нашел никаких совпадений: </div>
        <message-form :text="noResultText"></message-form>
      </div>

      <div class="b-detail-search__item">
        <div class="b-detail-search__title">Общее описание</div>
        <ul class="b-detail-search__text">
          <li>В поле для поиска вводим наименование адреса,который необходимо найти</li>
          <li>При нажатии на кнопку "Найти" (либо "ENTER" на клавиатуре) происходит вызов метода,который в свою очередь вызвает actions. Данный actions делает запрос к сервису dadata, и в ответе мы получаем все совпадения.</li>
          <li>Данные ответа сохраняются в store в переменной "addressList"</li>
          <li>Если в запросе произошла ошибка,то для булевой переменной в сторе указываем для переменной "errorDadata" значение true. На основе этого в компоненте выводим сообщение об ошибке </li>
          <li>Данные из addressList отражаются в компоненте Table.vue  и через foreach каждый элемент массива отрисовывается через компонент TableItem.vue </li>
          <li>Если массив переменной пустой,то выводится сообщение,о том что "Подходящие варианты не найдены"</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { DataAddress } from 'src/components/models'
import Table from '../index/Table.vue'
import MessageForm from '../index/MessageForm.vue'

@Component({
  components: { Table, MessageForm }
})
export default class Detail extends Vue {
  address=''
  noResultText = 'По вашеу запросу нет подходящих результатов'

  get addressList (): Array<DataAddress> {
    return this.$store.getters['dadata/getAddressList'] as Array<DataAddress>  //eslint-disable-line
  }
}

</script>
<style lang="stylus">
  .b-detail
    margin-top: 60px
    font-size 30px
    line-height: 35px
    display: flex;
    justify-content: center;
    flex-direction: column
  .b-detail-search
    &__item
      font-size: 20px;
      display: flex
      flex-direction: column
      justify-content: flex-start
      margin-top 80px
      .b-table
        margin: 0
        font-size: 12px
    &__but
      max-width: 100px
    &__input
      max-width: 200px
    &__text
      margin-bottom: 20px
      font-size: 20px
    &__title
      font-size: 22px
      margin-bottom: 20px
      font-weight bold
</style>
