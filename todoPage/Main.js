

window.addEventListener('DOMContentLoaded', (event) => {

    const counter = (state = {}, action) => {

      if(!action.payload){
        return state
      }
          switch (action.type) {
          case 'ADD':
              const updatedState = {...state, ...action.payload}
              return updatedState 

          case 'REMOVE':
            const {[action.payload.id]: removedProperty, ...updatedState1} = state
            return updatedState1

          case 'UPDATE':
            const updatedState3 = {...state, [action.payload.id]: action.payload}
            return updatedState3
          default:
              return state
          }
    }    
    
    
    let store = Redux.createStore(counter)

    let current_id = 1
    let add_task_field = document.getElementById('add_task_field')
    let form = document.getElementById('to_do_main_form')
   
    

    const handleDoneItemClick = (id) => {
      let listItemCopy = store.getState()[id]
    
      console.log('check/uncheck boi', event)

      let elem = document.getElementById('label_done_check_box_item' + listItemCopy.id)
      if(listItemCopy.status === 'pending'){
        
        store.dispatch({type: 'UPDATE', payload: {...listItemCopy, status: 'done'}})
        elem.classList.add('done-task')
      }
      else if(listItemCopy.status === 'done'){
        store.dispatch({type: 'UPDATE', payload: {...listItemCopy, status: 'pending'}})
        elem.classList.remove('done-task')
      }

    }

    const render = () => {
      let array = store.getState()
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
        store.dispatch({type: 'ADD', payload: {[current_id]: {id: current_id, value: input, status: 'pending'}}})
        render()
      }
      console.log('STORELIFE', store.getState())

      form.reset()
    }
    form.addEventListener('submit', logSubmit)

})

