import {listManagerReducer} from './listManagerReducer.js'


const listManagerStore = Redux.createStore(listManagerReducer)

export { listManagerStore }