


    const counter = (state = [], action) => {
           switch (action.type) {
      case 'ADD':
          state.push(action.payload)
          return state 
      case 'Remove':
          state.pop()
          return state
      default:
          return state
      }
    }



   let store = Redux.createStore(counter)


   