// 처음에 state 값이 없으면 initialState 사용
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
   // state = { value: 0 }
   // action = { type: 'UP', step: 1 }
   /*
     { value: 1 }
    */
   if (action.type === 'UP') {
      return { ...state, value: state.value + action.step }
   }

   return state
}

export default counterReducer
