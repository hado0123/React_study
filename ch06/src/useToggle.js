import { useState } from 'react'

// 나만의 커스텀 훅
function useToggle(initialValue) {
   const [value, setValue] = useState(initialValue)

   const toggle = () => {
      setValue(!value) //true <-> false
   }

   return [value, toggle]
}

export default useToggle
