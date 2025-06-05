import { useState, useMemo } from 'react'

// 평균 구하는 함수
const getAverage = (numbers) => {
   console.log('평균값 계산...')

   if (numbers.length === 0) return 0

   // numbers = [1, 2, 3, 4]

   const sum = numbers.reduce((a, b) => a + b) //누적합계
   return sum / numbers.length
}

function UseMemoEx2() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')
   const onChange = (e) => setNumber(e.target.value)
   const onInsert = () => {
      // nextList = [1, 2]
      // list = [1, 2]
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }

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

export default UseMemoEx2
