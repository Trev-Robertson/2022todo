import {listManagerReducer} from './listManagerReducer.js'
import {idCounterReducer} from './idCounterReducer.js'


const rootReducer = Redux.combineReducers({
    listManagerReducer, 
    idCounterReducer
})

const store = Redux.createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({trace: true}))


export { store }