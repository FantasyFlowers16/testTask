<template>
    <div class="b-search-block">
      <div class="b-search-block__input-container">
        <input  type="text" @keyup.enter="getApi" class="input-search b-search-block__input" :class="{error:error}" @input='resetError' v-model="address" placeholder="Введите адрес" />
        <div v-if="errorText.length" class="error-text b-search-block__error">{{errorText}}</div>
      </div>
        <q-btn @click="getApi"  unelevated rounded color="primary" class=" b-search-block__but" label="Найти"></q-btn>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { }
})
export default class SerchBlock extends Vue {
  address= ''
  errorText = ''
  error = false

  UpdateAddressList (val: string): void {
    this.$store.dispatch('dadata/updateAddressApi', val) //eslint-disable-line
  }

  resetError () {
    this.errorText = ''
    this.error = false
  }

  getApi () {
    if (this.address.length) {
      this.resetError()
      this.UpdateAddressList(this.address)
    } else {
      this.errorText = 'Ведите адрес'
      this.error = true
    }
  }
}

</script>
<style lang="stylus">
  .b-search-block
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    &__input
      display: flex
      width:  200px
    &__but
      margin-top: 40px
      width: 200px
    &__error
      margin 4px 0 0 10px

    @media screen and (min-width:$tablet)
        &__input
          width:  500px

</style>
