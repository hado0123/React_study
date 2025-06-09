import { useState } from 'react'

const Say = () => {
   // state: 컴포넌트 내부에서 바뀔수 있는 값
   /*
    1. state를 사용하기 위해 useState 선언
    const [state 값을 저장할 변수, state값을 바꿀 함수] = useState(초기 state값 지정)

    2. useState 사용
    state값을 바꿀 함수
    */
   const [message, setMessage] = useState('hello')

   const onClickEnter = () => setMessage('안녕하세요.')
   const onClickLeave = () => setMessage('안녕히가세요.')

   const [color, setColor] = useState('yellow')

   return (
      <div>
         <button onClick={onClickEnter}>입장</button>
         <button onClick={onClickLeave}>퇴장</button>
         <h1 style={{ color }}>{message}</h1>

         <button onClick={() => setColor('red')}>빨간</button>
         <button onClick={() => setColor('green')}>초록</button>
         <button onClick={() => setColor('blue')}>파란</button>
      </div>
   )
}

export default Say
