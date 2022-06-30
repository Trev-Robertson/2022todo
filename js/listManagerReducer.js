







export const listManagerReducer = (state = [], action) => {

        switch (action.type) {
        case 'CREATE':
            return [...state, action.payload] 

        case 'UPDATE':
          const updatedState3 = [...state].map(item => {
           
           return item.id === action.payload.id ? {...item, ...action.payload} : item
          })
            
        return updatedState3

        case 'DELETE':
          
          const updatedStateDelete = [...state].filter(item => {
            return item.id !== action.payload.id
           })
          return updatedStateDelete
        
        case 'INITIAL_TODO':
          return action.payload

        default:
            return state
        }
  }    