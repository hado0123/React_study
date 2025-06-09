import './App.css'

function App() {
   // 5. 외부 스타일시트 사용
   // class가 아닌 className을 사용
   const name = '리액트'
   return <div className="react">{name}</div>
   // return <div id="react">{name}</div>
}

export default App
