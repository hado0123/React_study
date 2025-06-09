function App() {
   return (
      /* 
         태그 바깥에서의 주석은 js 주석과 같음
         태그에서의 주석은 다름
      */
      // 1. 태그를 두줄이상 작성시 반드시 부모요소로 감싼다.(태그나 fragment 이용)
      <>
         <h1>리액트</h1>
         <h2>리액트안녕</h2>
      </>
      // <div>
      //    <h1>리액트</h1>
      //    <h2>리액트안녕</h2>
      // </div>
   )
}

export default App
