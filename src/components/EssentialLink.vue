<template>
<div></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class EssentialLink extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, default: '' }) readonly caption!: string;
  @Prop({ type: String, default: '#' }) readonly link!: string;
  @Prop({ type: String, default: '' }) readonly icon!: string;
}
</script>
