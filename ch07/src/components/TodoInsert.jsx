import { useCallback, useState } from 'react'
import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)

   const onSubmit = useCallback(
      (e) => {
         // submit 이벤트가 브라우저에 새로고침을 발생시키는 현상을 막아준다
         e.preventDefault()

         onInsert(value) // 할일 등록, App컴포넌트에서 props로 받아온 onInsert()함수
         setValue('') // value state 초기화
      },
      [value, onInsert] //onInsert 자체도 useCallback으로 정의된 함수이며 todos state에 의존한다. 즉, todos 가 변경될때 마다 onInsert 함수가 새로 만들어지므로 사용
   )

   return (
      // onSubmit: submit 버튼을 눌렀을때 발생하는 이벤트
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
