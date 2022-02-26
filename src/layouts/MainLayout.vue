<template>
  <q-layout view="lHh Lpr lFf">
    <Header/>
      <div class="q-page-container">
        <div class="q-page-container__content" >
          <router-view />
        </div>
      </div>
  </q-layout>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import Header from '../components/layout/Header.vue'

@Component({
  components: { Header }
})
export default class MainLayout extends Vue {
  get SearchOpen ():boolean {
    return this.$store.getters['catalog/getSearch'] as boolean//eslint-disable-line
  }

  updateFullFilter (val: boolean): void {
    this.$store.dispatch('catalog/updateFullFilter', val) //eslint-disable-line
  }
}
</script>
