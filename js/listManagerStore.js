import {listManagerReducer} from './listManagerReducer.js'


const listManagerStore = Redux.createStore(listManagerReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export { listManagerStore }