<template>
    <div class="b-message">
      <div class="b-message__text" > {{text}}</div>
      <div class="b-message__img" ></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  components: { }
})
export default class TextMwssage extends Vue {
  @Prop({ type: String, required: true }) text!: string;
}

</script>
<style lang="stylus">
  .b-message
    margin-top: 60px
    font-size 30px
    line-height: 35px
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
    &__img
      background: url('../../assets/img/noresult.png') 50% 50% no-repeat
      margin-top: 30px
      width: 110px
      height 110px
      background-size: cover
</style>
