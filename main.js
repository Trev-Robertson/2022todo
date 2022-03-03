window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM LOADED MY GUY. WHOOOOOOOOSH');

  let whichOne = 'counter'

    const counter = (state = {answer: 0}, action) => {
      whichOne = 'counter'
            if (typeof state === 'undefined') {
            return state
            }

            switch (action.type) {
            case 'INCREMENT':
                state.answer = state.answer + 1
                return state 
            case 'DECREMENT':
                if(state.answer - 1 >= 0){
                  state.answer = state.answer - 1
                }
                return state
            default:
                return state
            }
    }


    const bigCounter = (state = {answer: 0}, action) => {
      whichOne = 'bigCounter'
      console.log('raching here??????')
      if (typeof state === 'undefined') {
      return state
      }
      

      switch (action.type) {
      case 'INCREMENT':
          state.answer = state.answer + 11
          return state 
      case 'DECREMENT':
          if(state.answer - 11 >= 0){
            state.answer = state.answer - 11
          }
          return state
      default:
          return state
      }
}

      var store = Redux.createStore(counter)
      var secondStore = Redux.createStore(bigCounter)
      var valueEl = document.getElementById('value')
      var valueEl_two = document.getElementById('value_two')

      // function render() {
      //   let a = valueEl.innerHTML = store.getState().answer.toString()
      //   console.log('CCCCCCCF')
      //   if(whichOne === 'counter'){
      //     valueEl.innerHTML = store.getState().answer.toString()
      //   }
      //   else{
      //     valueEl_two.innerHTML = secondStore.getState().answer.toString()
      //   }

      // }

      // render()
      // store.subscribe(render)
      // secondStore.subscribe(render)
      // document.getElementById('increment')
      // .addEventListener('click', function () {
      //     // console.log('COLORRRRSS', Math.floor(Math.random()*16777215).toString(16))
      //     // console.log('BODY', body)
      //     store.dispatch({ type: 'INCREMENT' })
      //     let body = document.body
      //     console.log('BODY', body)
      //     body.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`
      //   })

      // document.getElementById('decrement')
      //   .addEventListener('click', function () {
      //     store.dispatch({ type: 'DECREMENT' })
      //   })

      // document.getElementById('incrementIfOdd')
      //   .addEventListener('click', function () {
      //     console.log('MINUS')
      //     if (store.getState().answer % 2 !== 0) {
      //       store.dispatch({ type: 'INCREMENT' })
      //     }
      //   })

      // document.getElementById('incrementAsync')
      //   .addEventListener('click', function () {
      //     setTimeout(function () {
      //       store.dispatch({ type: 'INCREMENT' })
      //     }, 1000)
      //   })



      //   document.getElementById('big_increment')
      // .addEventListener('click', function () {
      //     // console.log('COLORRRRSS', Math.floor(Math.random()*16777215).toString(16))
      //     // console.log('BODY', body)
      //     secondStore.dispatch({ type: 'INCREMENT' })
      //     let body = document.body
      //     console.log('SECOND STORE')
      //     body.style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`
      //   })

      // document.getElementById('big_decrement')
      //   .addEventListener('click', function () {
      //     secondStore.dispatch({ type: 'DECREMENT' })
      //   })

      // document.getElementById('big_incrementIfOdd')
      //   .addEventListener('click', function () {
      //     console.log('SECOND STORE', secondStore.getState())
      //     if (secondStore.getState().answer % 2 !== 0) {
      //       secondStore.dispatch({ type: 'INCREMENT' })
      //     }
      //   })

      // document.getElementById('big_incrementAsync')
      //   .addEventListener('click', function () {
      //     setTimeout(function () {
      //       secondStore.dispatch({ type: 'INCREMENT' })
      //     }, 1000)
      //   })




});
