import { useState, useMemo, useCallback } from 'react'

// 평균 구하는 함수
const getAverage = (numbers) => {
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0

   // numbers = [1, 2, 3, 4]

   const sum = numbers.reduce((a, b) => a + b) //누적합계
   return sum / numbers.length
}

function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // useCallback: 컴포넌트가 리렌더링이 될때 함수가 재생성 되지 않도록 해준다. 함수가 재생성 되면 성능에 좋지 X

   // 컴포넌트가 처음 렌더링 될때만 함수 생성
   const onChange = useCallback((e) => setNumber(e.target.value), [])

   // number, list state의 값이 바뀔때만 함수 재생성
   // ★함수안에서 state값을 참조(사용)하는 경우 반드시 state값을 지정해줘야 한다 -> 함수를 재생성 하지 않으면 바뀐 state값을 올바르게 가져올 수 X
   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }, [number, list])

   const avg = useMemo(() => getAverage(list), [list])

   return (
      <div>
         <input type="text" value={number} onChange={onChange} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            {/* getAverage()함수 실행 */}
            <b>평균값: {avg}</b>
         </div>
      </div>
   )
}

export default UseCallbackEx
