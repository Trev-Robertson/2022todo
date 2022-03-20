

import {listManagerStore} from './listManagerStore.js'


window.addEventListener('DOMContentLoaded', (event) => {



    let current_id = 1
    let add_task_field = document.getElementById('add_task_field')
    let form = document.getElementById('to_do_main_form')
    let toDoContainer = document.createElement('div')
    add_task_field.appendChild(toDoContainer)

    const handleDoneItemClick = (id) => {
      let listItemCopy = listManagerStore.getState().find(item => item.id === id)

      let elem = document.getElementById('label_done_check_box_item' + listItemCopy.id)
      // debugger
      if(listItemCopy.status === 'pending'){
        
        listManagerStore.dispatch({type: 'UPDATE', payload: {id, status: 'done'}})
        // elem.classList.add('done-task')
      }
      else if(listItemCopy.status === 'done'){
        listManagerStore.dispatch({type: 'UPDATE', payload: {id, status: 'pending'}})
        // elem.classList.remove('done-task')
      }

    }

    const deleteListItem = (id) => {
      // listItem.remove()
      
      listManagerStore.dispatch({type: 'DELETE', payload: {id}})
    }

    const render = () => {
      while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
      }
      let array = listManagerStore.getState()
      // if(!array[id]){
        //     return
        // }
      array.map(item => {
        // debugger
      let id = item.id

      let listItem = document.createElement('div')
      listItem.className = 'form-check "position-relative"'
      

      
      let inputItem = document.createElement('input')
      inputItem.className = 'form-check-input'
      inputItem.type = 'checkbox'
      inputItem.value = ''
      inputItem.id = 'done_check_box_item' + item.id
      inputItem.addEventListener('change', () => handleDoneItemClick(item.id))
      
      let deleteIcon = document.createElement('i')
      deleteIcon.className = '"bi bi-trash position-absolute end-50'
      deleteIcon.addEventListener('click', () => deleteListItem(item.id))
      
      let label = document.createElement('label')
      label.className = 'form-check-label'
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

      current_id++
    }

    const logSubmit = (event) => {

      event.preventDefault();
      let input = document.getElementById('to_do_input').value

      if(input){
        listManagerStore.dispatch({type: 'CREATE', payload:  {id: current_id, value: input, status: 'pending'}})
        // render()
      }

      form.reset()
    }
    form.addEventListener('submit', logSubmit)

    listManagerStore.subscribe(render)
})

