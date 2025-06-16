import { createSlice } from '@reduxjs/toolkit'

// reducer대신에 slice 생성
// createSlice()는 reducer함수, 초기 state등을 알아서 생성해준다
const counterSlice = createSlice({
   name: 'couterSlice', // slice의 이름
   initialState: { value: 0 }, // 초기 state
   reducers: {
      //reducer의 역할(state를 바꿈)을 하는 함수를 지정
      up: (state, action) => {
         // ★ 툴킷은 자동으로 불변성 유지를 해주므로 직접 state값을 바꿔도 된다
         // state = { value: 0 }
         // action = { type: 'counterSlice/up', payload: 2 }
         // action.payload = 2
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

// 리듀서 함수를 내보냄
export default counterSlice.reducer

// 액션 생성자 함수를 내보냄
export const { up, down } = counterSlice.actions

/*
 function up() {
      ... 
 }
 
 function down() {
     ...
 }

*/
