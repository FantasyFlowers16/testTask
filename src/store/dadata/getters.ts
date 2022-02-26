import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { DadataStateInterface } from './state'
import { DataAddress } from 'src/components/models'
// import { User } from 'src/components/models'

const getters: GetterTree<DadataStateInterface, StateInterface> = {
  getLoading (context): boolean | null {
    return context.loading
  },
  getAddressList (context): Array<DataAddress> | null {
    return context.addressList
  },
  getErrorDadata (context): boolean {
    return context.errorDadata
  }
}

export default getters
