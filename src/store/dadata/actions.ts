import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { DadataStateInterface } from './state'
import { apiKey } from '../../json/key.json'

import { DataAddress } from 'src/components/models'

const actions: ActionTree<DadataStateInterface, StateInterface> = {

  updateAddressList (context, payload: Array<DataAddress> | null): void {
    context.commit('changeAddressList', payload)
  },
  updateLoading (context, payload: boolean | null): void {
    context.commit('changeLoading', payload)
  },
  updateErrorDadata (context, payload: boolean): void {
    context.commit('changeErrorDadata', payload)
  },

  updateAddressApi (context, payload: string): void {
    context.dispatch('updateLoading', true)// eslint-disable-line
    const options: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + apiKey,
        mode: 'cors'
      },
      body: JSON.stringify({ query: payload })
    }

    fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', options)
      .then(response => response.text())
      .then(result => {
        context.dispatch('updateErrorDadata', false)// eslint-disable-line
        const resultAddress: DataAddress[] = []
        JSON.parse(result).suggestions.forEach( (item: any) => {//eslint-disable-line
          const resultItem = {
            city: item.data.city,//eslint-disable-line
            street: item.data.street,//eslint-disable-line
            house: item.data.house,//eslint-disable-line
            flat: item.data.flat,//eslint-disable-line
            postal_code: item.data.postal_code//eslint-disable-line
          }
          resultAddress.push(resultItem)
        })
        context.dispatch('updateAddressList', resultAddress)// eslint-disable-line
        context.dispatch('updateLoading', false)// eslint-disable-line
      })
      .catch(error => {
        context.dispatch('updateLoading', false)// eslint-disable-line
        context.dispatch('updateErrorDadata', true)// eslint-disable-line
        console.log('error', error)
      })
  }

}

export default actions
