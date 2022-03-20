export const listManagerReducer = (state = [], action) => {

    if(!action.payload){
      return state
    }
        switch (action.type) {
        case 'CREATE':
            return [...state, action.payload] 

        case 'UPDATE':
          const updatedState3 = [...state].map(item => {
           
           return item.id === action.payload.id ? {...item, ...action.payload} : item
          })
            console.log('UPDATED THING', updatedState3)
        return updatedState3

        case 'DELETE':
          console.log('ACTIONS', action.payload, state)
          const updatedStateDelete = [...state].filter(item => {
            return item.id !== action.payload.id
           })
          return updatedStateDelete

        default:
            return state
        }
  }    