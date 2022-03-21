import {listManagerReducer} from './listManagerReducer.js'

const middleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const listManagerStore = Redux.createStore(listManagerReducer, middleware )


export { listManagerStore }