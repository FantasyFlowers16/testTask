import { store } from 'quasar/wrappers' // eslint-disable-line
import Vuex from 'vuex'

import dadata from './dadata'
import { DadataStateInterface } from './dadata/state' //eslint-disable-line

import info from './info'
import { InfoStateInterface } from './info/state' //eslint-disable-line

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  example: unknown;
}

export default store(function ({ Vue }) {//eslint-disable-line
  Vue.use(Vuex)
  const Store = new Vuex.Store<StateInterface>({
    modules: {
      dadata,
      info
    },
    strict: false
  })

  return Store
})
