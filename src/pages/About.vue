<template>
    <div class="b-about">
      <div class="b-about__menu b-about-menu">
        <div class="b-about-menu__item" @click="checkEl" :class="{selected: elem}">Элементы</div>
        <div class="b-about-menu__item" @click="checkTeh" :class="{selected: teh}">Технологии</div>
      </div>
      <Detail v-if="elem" />
      <Technology v-if="teh" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { DataAddress } from 'src/components/models'
import Detail from '../components/about/Detail.vue'
import Technology from '../components/about/Technology.vue'
@Component({
  components: { Detail, Technology }
})
export default class About extends Vue {
  elem = false
  teh = true
  get addressList (): Array<DataAddress> {
    return this.$store.getters['dadata/getAddressList'] as Array<DataAddress>  //eslint-disable-line
  }

  checkEl () {
    this.elem = true
    this.teh = false
  }

  checkTeh () {
    this.elem = false
    this.teh = true
  }
}

</script>
<style lang="stylus">
  .b-about
    width: 100%
    max-width: 1040px
    align-self: start;
    &__menu
      display: flex
  .b-about-menu
    &__item
      cursor pointer
      padding: 10px 20px
      font-size: 20px
      transition: color .2s ease
      &:hover
        color: $lightBlue
      &.selected
        border-bottom 2px solid $blue
        color: $blue
</style>
