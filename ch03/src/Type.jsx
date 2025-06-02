const Type = (props) => {
   const { str, num, bool, arr, json, func } = props

   // 함수를 여기서 실행하고 return값만 result에 받기
   const result = func(1, 2)

   return (
      <div>
         <p>StringProps: {str}</p>
         <p>NumberProps: {num}</p>
         <p>BooleanProps: {bool.toString()}</p>
         <p>ArrayProps: {arr.toString()}</p>
         <p>JSONProps: {JSON.stringify(json)}</p>
         <p>FunctionProps: {result}</p>
         <p>FunctionProps: {func(1, 2)}</p>
      </div>
   )
}

export default Type
