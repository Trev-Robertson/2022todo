

import {store} from './store.js'


window.addEventListener('DOMContentLoaded', (event) => {

console.log('STORE', store.getState())
const initial_state = [
  {
    id: 1,
    value: 'Invade Ukraine',
    status: 'done'

  },
  {
    id: 2,
    value: 'Win American Idol 🎤 🎶',
    status: 'pending'
  },
  {
    id: 3,
    value: 'Shirtless Horseback Riding 🐴',
    status: 'done'
  },
  {
    id: 4,
    value: 'Score 8 goals in a professional hockey game',
    status: 'done'
  },
  {
    id: 5,
    value: '👀 👀"Dont" Poison Political Oppponents 👀 👀',
    status: 'pending'
  },
  {
    id: 6,
    value: 'Find True Love ❤️',
    status: 'pending'
  },

]
    let current_id = store.getState().idCounterReducer
    let add_task_field = document.getElementById('add_task_field')
    let form = document.getElementById('to_do_main_form')
    let toDoContainer = document.createElement('div')
    add_task_field.appendChild(toDoContainer)

    const handleDoneItemClick = (id) => {
      let listItemCopy = store.getState().listManagerReducer.find(item => item.id === id)

      let elem = document.getElementById('label_done_check_box_item' + listItemCopy.id)
      
      if(listItemCopy.status === 'pending'){
        
        store.dispatch({type: 'UPDATE', payload: {id, status: 'done'}})
        // elem.classList.add('done-task')
      }
      else if(listItemCopy.status === 'done'){
        store.dispatch({type: 'UPDATE', payload: {id, status: 'pending'}})
        // elem.classList.remove('done-task')
      }

    }

    const deleteListItem = (id) => {
      // listItem.remove()
      
      store.dispatch({type: 'DELETE', payload: {id}})
    }

    const render = () => {
      
      while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
      }
      let array = store.getState().listManagerReducer
      // if(!array[id]){
        //     return
        // }
      array.map(item => {
        

      let listItem = document.createElement('div')
      listItem.className = 'form-check "position-relative"'
      
      
      let inputItem = document.createElement('input')
      inputItem.className = 'form-check-input'
      inputItem.type = 'checkbox'
      inputItem.value = ''
      inputItem.id = 'done_check_box_item' + item.id
      inputItem.addEventListener('change', () => handleDoneItemClick(item.id))
      
      let deleteIcon = document.createElement('i')
      deleteIcon.className = '"bi bi-trash position-absolute'
      deleteIcon.addEventListener('click', () => deleteListItem(item.id))
      
      let label = document.createElement('label')
      label.className = 'form-check-label fs-2'
      label.htmlFor = 'done_check_box_item' + item.id
      label.id = 'label_done_check_box_item' + item.id
      label.innerText =  item.value
      
      if(item.status === 'done'){
        inputItem.checked = true
        label.classList.add('done-task') 
      } 
      else if(item.status === 'pending' ){
        label.classList.remove('done-task') 
        inputItem.checked = false
      }

      toDoContainer.appendChild(listItem)
      listItem.appendChild(label)
      listItem.appendChild(inputItem)
      listItem.appendChild(deleteIcon)
    })

    
      console.log('STORE', store.getState())

    }

    const logSubmit = (event) => {

      event.preventDefault();
      let input = document.getElementById('to_do_input').value
      const current_id = store.getState().idCounterReducer
      if(input){
        store.dispatch({type: 'CREATE', payload:  {id: current_id, value: input, status: 'pending'}})
        store.dispatch({type: 'NEW_ID'})
        // render()
      }

      form.reset()
    }
    form.addEventListener('submit', logSubmit)
    store.subscribe(render)
    store.dispatch({type: 'INITIAL_TODO', payload: initial_state})
    store.dispatch({type: 'INITIAL_ID_START', payload: initial_state.length})
})

