import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      console.log(state) // {counter: {value: 0}}}
      return state.counter.value
   })
   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            -
         </button>
         {count}
      </div>
   )
}

export default Counter
