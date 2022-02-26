import { GetterTree } from 'vuex'
import { StateInterface } from '../index'
import { InfoStateInterface } from './state'
import { TextArticle } from 'src/components/models'

const getters: GetterTree<InfoStateInterface, StateInterface> = {
  getArticle (context): Array<TextArticle> {
    return context.articles
  }

}

export default getters
