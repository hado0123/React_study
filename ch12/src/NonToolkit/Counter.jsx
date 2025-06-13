import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   // state = { value: 1 }
   const count = useSelector((state) => state.value)
   return (
      <div>
         <button
            onClick={() => {
               dispatch({ type: 'UP', step: 1 })
            }}
         >
            +
         </button>
         {count}
      </div>
   )
}

export default Counter
