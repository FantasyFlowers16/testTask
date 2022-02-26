import { ActionTree } from 'vuex'
import { StateInterface } from '../index'
import { InfoStateInterface } from './state'

import { TextArticle } from 'src/components/models'

const actions: ActionTree<InfoStateInterface, StateInterface> = {

  updateArticles (context, payload: Array<TextArticle>): void {
    context.commit('changeArticles', payload)
  }
}

export default actions
