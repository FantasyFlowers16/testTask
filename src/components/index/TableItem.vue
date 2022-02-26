<template>
    <div class="b-table__row b-table-row">
        <div v-if="data.postal_code" class="b-table-row__item">{{data.postal_code}}</div>
        <div v-else class="b-table-row__item">-</div>

        <div v-if="data.city" class="b-table-row__item">{{data.city}}</div>
        <div v-else class="b-table-row__item">-</div>

        <div v-if="data.street" class="b-table-row__item">{{data.street}}</div>
        <div v-else class="b-table-row__item">-</div>

        <div v-if="data.house" class="b-table-row__item">{{data.house}}</div>
        <div v-else class="b-table-row__item">-</div>

        <div v-if="data.flat" class="b-table-row__item">{{data.flat}}</div>
        <div v-else class="b-table-row__item">-</div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { DataAddress } from '../models'
@Component({
  components: { }
})
export default class TableAddess extends Vue {
    @Prop({ type: Object, required: true }) data!: DataAddress;
}

</script>
<style lang="stylus">

</style>
