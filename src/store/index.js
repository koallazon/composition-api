import { createStore } from 'vuex'
import * as modules from './modules'
console.log(modules)
const store = createStore({
  modules,
})

export default store
