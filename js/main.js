

import {listManagerStore} from './listManagerStore.js'


window.addEventListener('DOMContentLoaded', (event) => {



    let current_id = 1
    let add_task_field = document.getElementById('add_task_field')
    let form = document.getElementById('to_do_main_form')
   
    

    const handleDoneItemClick = (id) => {
      let listItemCopy = listManagerStore.getState()[id]

      let elem = document.getElementById('label_done_check_box_item' + listItemCopy.id)
      if(listItemCopy.status === 'pending'){
        
        listManagerStore.dispatch({type: 'UPDATE', payload: {...listItemCopy, status: 'done'}})
        elem.classList.add('done-task')
      }
      else if(listItemCopy.status === 'done'){
        listManagerStore.dispatch({type: 'UPDATE', payload: {...listItemCopy, status: 'pending'}})
        elem.classList.remove('done-task')
      }

    }

    const render = () => {
      let array = listManagerStore.getState()
      let id = current_id
      let listItem = document.createElement('div')
      listItem.className = 'form-check'

      
      let inputItem = document.createElement('input')
      inputItem.className = 'form-check-input'
      inputItem.type = 'checkbox'
      inputItem.value = ''
      inputItem.id = 'done_check_box_item' + current_id
      inputItem.addEventListener('change', () => handleDoneItemClick(id))

      let label = document.createElement('label')
      label.className = 'form-check-label'
      label.htmlFor = 'done_check_box_item' + current_id
      label.id = 'label_done_check_box_item' + current_id
      label.innerText =  array[id]?.value
      
      add_task_field.appendChild(listItem)
      listItem.appendChild(label)
      listItem.appendChild(inputItem)
      current_id++
    }

    const logSubmit = (event) => {

      event.preventDefault();
      let input = document.getElementById('to_do_input').value

      if(input){
        listManagerStore.dispatch({type: 'ADD', payload: {[current_id]: {id: current_id, value: input, status: 'pending'}}})
        render()
      }

      form.reset()
    }
    form.addEventListener('submit', logSubmit)

})

