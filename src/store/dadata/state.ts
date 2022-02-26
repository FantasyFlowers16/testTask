import { DataAddress } from 'src/components/models'
export interface DadataStateInterface {
  addressList: Array<DataAddress> | null,
  errorDadata: boolean,
  loading : boolean | null
}

const state: DadataStateInterface = {
  addressList: null,
  errorDadata: false,
  loading: null
}

export default state
