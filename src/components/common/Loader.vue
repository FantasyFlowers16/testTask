<template>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Loader extends Vue {

}
</script>
<style lang="stylus">
  .lds
    position: fixed
    width: 100%
    height: 100%
    top 0
    left: 0
    background: white
    position relative
    opacity .5
  .lds-ring
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    top: calc(50% - 40px);
    left: calc(50% - 40px);

  .lds-ring div
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #1976d2;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #1976d2 transparent transparent transparent;

  .lds-ring div:nth-child(1)
    animation-delay: -0.45s;

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
