<template>
  <div class="b-teh text">
    <div class="b-teh__container" >
      <h1 class="b-teh__title">Описание используемых библиотек и сервисов</h1>
      <div class="b-teh__item b-teh-item" v-for=" (article, ind) in Articles" :key="ind">
          <div class="b-teh-item__title">{{article.title}}</div>
          <div class="b-teh-item__info-container">
            <img class="b-teh-item__img" :src="article.pic" />
            <div class="b-teh-item__text-container">
              <div class="b-teh-item__text">{{article.text}}</div>
              <a :href="article.link" class="b-teh-item__link">Сайт</a>
            </div>

          </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { TextArticle } from 'src/components/models'
import Table from '../index/Table.vue'

@Component({
  components: { Table }
})
export default class Detail extends Vue {
  address=''
  noResultText = 'По вашеу запросу нет подходящих результатов'

  get Articles (): Array<TextArticle> {
    return this.$store.getters['info/getArticle'] //eslint-disable-line
  }
}

</script>
<style lang="stylus">
  .b-teh
    margin-top: 60px
    font-size 30px
    line-height: 35px
    display: flex;
    justify-content: center;
    flex-direction: column
    &__item
      margin-top: 40px
  .b-teh-item
    &__info-container
      display: flex
      flex-direction: column
      @media screen and (min-width:$tablet)
        flex-direction: row
        align-items: center
    &__item
      display: flex
      flex-direction: column
      justify-content: flex-start
      margin-top 80px
      .b-table
        margin: 0
        font-size: 12px
    &__img
      width: 150px
      height: 150px
      margin-bottom: 20px
      @media screen and (min-width:$desktop)
        width: 250px
        height: 250px
    &__title
      font-weight bold
      font-size: 15px
      margin-bottom: 30px
      @media screen and (min-width:$tablet)
        font-size: 22px
    &__text
      font-size: 14px
      max-width: 600px
      @media screen and (min-width:$tablet)
        font-size: 20px
        margin-left: 50px
    &__link
      text-decoration: none
      color $blue
      font-size: 14px
      font-weight 500
      @media screen and (min-width:$tablet)
        font-size: 20px
        margin-left: 50px

</style>
