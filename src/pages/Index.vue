<template>
    <div class="b-main-block">
      <serch-block></serch-block>
      <transition name="fade" >
        <Table v-if="addressList && addressList.length && !Loading" />
      </transition>

      <transition name="fade" >
        <Loader v-if="Loading" />
       </transition>

      <transition name="fade">
        <message-form v-if="addressList && !addressList.length" :text="noResultText"></message-form>
      </transition>

      <transition name="fade">
        <message-form v-if="errorDadata" :text="errorDadataText"></message-form>
      </transition>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { DataAddress } from 'src/components/models'
import Table from '../components/index/Table.vue'
import SerchBlock from '../components/index/SearchBlock.vue'
import MessageForm from '../components/index/MessageForm.vue'
import Loader from '../components/common/Loader.vue'

@Component({
  components: { Table, SerchBlock, MessageForm, Loader }
})
export default class PageIndex extends Vue {
  noResultText = 'По вашеу запросу нет подходящих результатов'
  errorDadataText = 'Произошла ошибка, повторите позже'

  get addressList (): Array<DataAddress> {
    return this.$store.getters['dadata/getAddressList']//eslint-disable-line
  }

  get Loading (): boolean {
    return this.$store.getters['dadata/getLoading']//eslint-disable-line
  }

  get errorDadata (): boolean {
    return this.$store.getters['dadata/getErrorDadata'] //eslint-disable-line
  }
}

</script>
<style lang="stylus">
  .b-main-block
    width 100%

</style>
