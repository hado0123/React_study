import { createContext } from 'react'
import './App.css'
import { useContext } from 'react'

const themeDefault = { border: '10px solid green' }

// 데이터를 공유하기 위한 Context 생성
const themeContext = createContext(themeDefault)

function App() {
   const theme = useContext(themeContext)
   console.log(theme)
   return (
      <div className="root" style={theme}>
         <h1>Hello world!</h1>
         <Sub1 />
      </div>
   )
}

function Sub1() {
   return (
      <div>
         <h1>Sub1</h1>
         <Sub2 />
      </div>
   )
}

function Sub2() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub2</h1>
         <Sub3 />
      </div>
   )
}

function Sub3() {
   const theme = useContext(themeContext)
   return (
      <div style={theme}>
         <h1>Sub3</h1>
      </div>
   )
}

export default App
