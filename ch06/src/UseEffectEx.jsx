import { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickName, setNickName] = useState('')

   //★ useEffect는 실행되는 시점을 아는게 중요
   // 1. 컴포넌트가 렌더링 될때마다 실행
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       //   console.log({ name: name, nickName: nickName })
   //       // 키와 값으로 오는 변수명이 같으면 아래와 같이 작성
   //       console.log({ name, nickName })
   //    })

   // 2. 맨 처음 렌더링이 될때만 실행되고, 업데이트(리렌더링) 될때는 실행되지 않음
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickName })
   //    }, [])

   // 3. 맨 처음 렌더링이 될때 실행되고, 특정 값이 변경될때만 호출
   //    useEffect(() => {
   //       console.log('렌더링이 완료되었습니다')
   //       console.log({ name, nickName })
   //    }, [name])

   // 4. 뒷정리 함수
   useEffect(() => {
      console.log('렌더링이 완료되었습니다')
      console.log(name)

      return () => {
         console.log('컴포넌트가 리렌더링 되기전..')
         console.log(name)
      }
   }, [name])

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickName = (e) => setNickName(e.target.value)

   return (
      <div>
         <div>
            <input type="text" value={name} onChange={onChangeName} />

            <input type="text" value={nickName} onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름:</b>
               {name}
            </div>
            <div>
               <b>닉네임:</b>
               {nickName}
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
