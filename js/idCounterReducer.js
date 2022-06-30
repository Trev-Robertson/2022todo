export const idCounterReducer = (state = 1, action) => {
    switch (action.type) {
        case 'NEW_ID':
          return state + 1
        default:
          return state
      }

}    