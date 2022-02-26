<template>
    <div class="b-header">
      <router-link to="/" class="b-header__item">Address Search</router-link>
      <router-link to="/about" class="b-header__item">About</router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  components: { }
})
export default class Header extends Vue {
}

</script>
<style lang="stylus">
  .b-header
    display: flex
    &__item
      padding: 20px
      color: $blue
      font-size: 20px
      font-weight bold
      opacity 0.8
      text-decoration: none
      transition: all  .2s ease
      &:hover
        opacity 1
</style>
