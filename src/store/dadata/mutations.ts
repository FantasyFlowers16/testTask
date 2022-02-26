import { MutationTree } from 'vuex'
import { DadataStateInterface } from './state'
import { DataAddress } from 'src/components/models'
// import { User } from 'src/components/models'

const mutation: MutationTree<DadataStateInterface> = {
  changeAddressList (state: DadataStateInterface, payload: Array<DataAddress> | null): void {
    state.addressList = payload
  },
  changeLoading (state: DadataStateInterface, payload: boolean | null): void {
    state.loading = payload
  },
  changeErrorDadata (state: DadataStateInterface, payload: boolean): void {
    state.errorDadata = payload
  }
}

export default mutation
