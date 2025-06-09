import { useState } from 'react'

function PushEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])

   const addItemWithPush = () => {
      const newItem = { id: 2, name: 'Item 2' }
      const updatedItems = items.concat(newItem) // concat은 새로운 배열을 반환(불변성 유지)
      setItems(updatedItems) // 새로운 배열로 상태 업데이트
      //   items.push(newItem) // 원본 배열을 변경(불변성을 위반)
      //   setItems(items) // 상태가 변경되지 않음
   }
   return (
      <div>
         <button onClick={addItemWithPush}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default PushEx
