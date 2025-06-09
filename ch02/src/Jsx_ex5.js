function App() {
   const type = 'radio'
   const str = 'string' // true
   const number = 0 // false

   return (
      <>
         <input type="text" value="리액트" disabled={true} />
         <br />
         {/* str && number => true && false => false */}
         <input type="text" value="자바스크립트" disabled={str && number} />
         <br />
         <input type={type} checked={true} /> 선택1
         <br />
         {/* str || number => true || false => true */}
         <input type={type} checked={str || number} /> 선택2
      </>
   )
}

export default App
