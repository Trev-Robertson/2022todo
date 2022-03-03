// import {store} from '../static/store_todoPage'
'use strict'

// const counter =(state = [], action) => {
//   console.log('inside', state)
//      switch (action.type) {
// case 'ADD':
//     state.push(action.payload)
//     return state 
// case 'Remove':
//     state.pop()
//     return state
// default:
//     return state
// }
// }

window.addEventListener('DOMContentLoaded', (event) => {
  // 'use strict'
    console.log('DOM LOADED MY GUY. WHOOOOOOOOSH');

    const counter = (state = {}, action) => {
          switch (action.type) {
          case 'ADD':
              const updatedState = {...state, ...action.payload}
              return updatedState 

          case 'Remove':
            const {[action.payload.id]: removedProperty, ...updatedState1} = state
            return updatedState1

          case 'Update':
            const updatedState3 = {...state, ...action.payload}
            return updatedState3
          default:
              return state
          }
    }    
    
    
    let store = Redux.createStore(counter)
    // console.log('STORELIFE', store.getState())
  // let whichOne = 'counter'

    // const counter = (state = {}, action) => {
     
    // }


//     const bigCounter = (state = {answer: 0}, action) => {
//       whichOne = 'bigCounter'
//       if (typeof state === 'undefined') {
//       return state
//       }
    
//       switch (action.type) {
//       case 'INCREMENT':
//           state.answer = state.answer + 11
//           return state 
//       case 'DECREMENT':
//           if(state.answer - 11 >= 0){
//             state.answer = state.answer - 11
//           }
//           return state
//       default:
//           return state
//       }
// }

      // let store = Redux.createStore(counter)
      // let secondStore = Redux.createStore(bigCounter)
      // let valueEl = document.getElementById('value')
      // let valueEl_two = document.getElementById('value_two')
      // console.log('STORE LIFE', store)


      let mainDiv = document.getElementsByClassName('container')[0]






    let check_id = 1
    let button = document.getElementById('to_do_submit_button')
    let add_task_field = document.getElementById('add_task_field')
    let form = document.getElementById('to_do_main_form')
    // console.log('STORE', store)

    button.addEventListener('click', (e) => {
      e.preventDefault()
      let value = document.getElementById('to_do_input').value
      // debugger
      form.elements
      if(value){
        store.dispatch({type: 'ADD', payload: {[check_id]: {id: check_id, value: value, status: 'pending'}}})
      }
      
      form.reset()
    })


    // <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    // <label class="form-check-label" for="flexCheckDefault">
    //   Default checkbox
    // </label>
    const updateItem = (check_id) => {
      let array1 = store.getState()
      console.log('HIIIIIIIII!!!', array1[check_id])
      // store.dispatch()
    }

    const render = () => {
      let array = store.getState()
      let id = check_id
      // console.log('CHECK', `${check_id}`)
      // console.log('CURRENT STATE', array)
      // let listItem = document.createElement('li')
      let listItem = document.createElement('div')
      listItem.className = 'form-check'
      listItem.innerHTML = `
      <input class="form-check-input" type="checkbox" value="" id="${'check_box_item' + check_id}">
      <label class="form-check-label" for="${'check_box_item' + check_id}">
       ${ array[check_id].value}
      </label>`
      let inputItem = document.createElement('input')
      inputItem.id = 'check_box_item' + check_id
      // debugger
      // inputItem.className = 'form-check-input'
      // inputItem.value = ''
      // let label = document.createElement('label')
      // label.className = 'form-check-label'
      listItem.addEventListener('click', () => updateItem(id))
      // listItem.className = 'form-check-input'
      // listItem.type = 'checkbox'
      // label.htmlFor = 'los'
      // label.innerText = array[array.length - 1]
      // add_task_field.appendChild(label)
      add_task_field.appendChild(listItem)
      console.log('FIRES')
      check_id++
    }
    
    store.subscribe(render)

    //   mainDiv.innerHTML = `<div id="add_task_field">
    //   <label for="todoInput" class="form-label">Task:</label>
    //   <input id="todoInput" class="form-control"> 
    //   <div  class="form-text">
    //     Enter a brief task description above.
    //   </div>
    // </div>`



      // function render() {
      //   let a = valueEl.innerHTML = store.getState().answer.toString()
      //   console.log('CCCCCCCF')
      //   if(whichOne === 'counter'){
      //     valueEl.innerHTML = store.getState().answer.toString()
      //   }
      //   else{
      //     valueEl_two.innerHTML = secondStore.getState().answer.toString()
      //   }

      // }

      // render()
      // store.subscribe(render)
      // secondStore.subscribe(render)
      // document.getElementById('increment')
      // .addEventListener('click', function () {
      //     // console.log('COLORRRRSS', Math.floor(Math.random()*16777215).toString(16))
      //     // console.log('BODY', body)
      //     store.dispatch({ type: 'INCREMENT' })
      //     let body = document.body
      //     console.log('BODY', body)
      //     body.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`
      //   })

      // document.getElementById('decrement')
      //   .addEventListener('click', function () {
      //     store.dispatch({ type: 'DECREMENT' })
      //   })

      // document.getElementById('incrementIfOdd')
      //   .addEventListener('click', function () {
      //     console.log('MINUS')
      //     if (store.getState().answer % 2 !== 0) {
      //       store.dispatch({ type: 'INCREMENT' })
      //     }
      //   })

      // document.getElementById('incrementAsync')
      //   .addEventListener('click', function () {
      //     setTimeout(function () {
      //       store.dispatch({ type: 'INCREMENT' })
      //     }, 1000)
      //   })



      //   document.getElementById('big_increment')
      // .addEventListener('click', function () {
      //     // console.log('COLORRRRSS', Math.floor(Math.random()*16777215).toString(16))
      //     // console.log('BODY', body)
      //     secondStore.dispatch({ type: 'INCREMENT' })
      //     let body = document.body
      //     console.log('SECOND STORE')
      //     body.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`
      //   })

      // document.getElementById('big_decrement')
      //   .addEventListener('click', function () {
      //     secondStore.dispatch({ type: 'DECREMENT' })
      //   })

      // document.getElementById('big_incrementIfOdd')
      //   .addEventListener('click', function () {
      //     console.log('SECOND STORE', secondStore.getState())
      //     if (secondStore.getState().answer % 2 !== 0) {
      //       secondStore.dispatch({ type: 'INCREMENT' })
      //     }
      //   })

      // document.getElementById('big_incrementAsync')
      //   .addEventListener('click', function () {
      //     setTimeout(function () {
      //       secondStore.dispatch({ type: 'INCREMENT' })
      //     }, 1000)
      //   })




})

