import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store = configureStore({
   reducer: {
      // 키값은 slice이름하고 동일하게 지정
      counter: counterSlice, // 리듀서 함수를 store에 저장
   },
})

export default store
