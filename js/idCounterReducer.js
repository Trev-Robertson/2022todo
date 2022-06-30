export const idCounterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'INITIAL_ID_START':
          return action.payload + 1
        case 'NEW_ID':
          return state + 1
        default:
          return state
      }

}    