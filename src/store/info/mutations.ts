import { MutationTree } from 'vuex'
import { InfoStateInterface } from './state'
import { TextArticle } from 'src/components/models'

const mutation: MutationTree<InfoStateInterface> = {
  changeArticles (state: InfoStateInterface, payload: Array<TextArticle>): void {
    state.articles = payload
  }
}

export default mutation
