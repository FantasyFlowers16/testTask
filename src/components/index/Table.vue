<template>
    <div class="b-table">
        <div class="b-table__row b-table__row--head b-table-row">
            <div class="b-table-row__item b-table-row__item--head">Индекс</div>
            <div class="b-table-row__item b-table-row__item--head">Город</div>
            <div class="b-table-row__item b-table-row__item--head">Улица</div>
            <div class="b-table-row__item b-table-row__item--head">Дом</div>
            <div class="b-table-row__item b-table-row__item--head">Квартира</div>
        </div>
        <div class="b-table__item"  v-for="(item,ind) in AddressList" :key="ind">
            <table-item :data="item"></table-item>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TableItem from './TableItem.vue'
import { DataAddress } from '../models'

@Component({
  components: { TableItem }
})
export default class TableAddess extends Vue {
  address= ''
  get AddressList (): Array<DataAddress> {
    return this.$store.getters['dadata/getAddressList'] //eslint-disable-line
  }

  get ApiKey (): string {
    return this.$store.getters['dadata/getApiKey'] as string //eslint-disable-line
  }
}

</script>
<style lang="stylus">
  .b-table
    margin: 50px 0px
    box-shadow: 0px 6px 30px 0px rgba(29, 29, 29, 0.2);
    &__row
      display: flex
      &--head
        background: $blueTable3
    &__item
      background: $blueTable2
      &:nth-child(2n+1)
        background: $blueTable
    @media screen and (min-width:$desktopW)
      margin: 50px 200px
  .b-table-row
    &__item
      font-size: 10px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      width: 20%
      padding 20px 10px
      &--head
        font-weight bold
    @media screen and (min-width:$tablet)
      &__item
        font-size: 15px
</style>
