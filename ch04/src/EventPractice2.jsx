import React, { useState } from 'react'

function EventPractice2() {
   /*
      form = {
         username: '',
         message: '',
      }
   */
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onClick = () => {
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      // state값을 초기화
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      console.log(e)
      //엔터를 눌렀을때 onClick() 실행
      if (e.key === 'Enter') {
         onClick()
      }
   }

   // input창에 입력한 값을 각각의 state에 적용
   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }

      setForm(nextForm)
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />

         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice2
