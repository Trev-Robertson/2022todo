export const listManagerReducer = (state = {}, action) => {

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