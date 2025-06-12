import { createContext } from 'react'
import './App.css'
import { useContext } from 'react'

const themeDefault = { border: '10px solid red' }

// 데이터를 공유하기 위한 Context 생성
const themeContext = createContext(themeDefault)

function App() {
   const theme = useContext(themeContext)
   console.log('App:', theme)
   return (
      <themeContext.Provider value={{ border: '10px solid blue' }}>
         <div className="root" style={theme}>
            <h1>Hello world!</h1>
            <Sub1 />
         </div>
      </themeContext.Provider>
   )
}

function Sub1() {
   const theme = useContext(themeContext)
   console.log('Sub1:', theme)

   return (
      // 모든 하위 컴포넌트에 value값 전달
      <themeContext.Provider value={{ border: '10px solid green' }}>
         <div style={theme}>
            <h1>Sub1</h1>
            <Sub2 />
         </div>
      </themeContext.Provider>
   )
}

function Sub2() {
   const theme = useContext(themeContext)
   console.log('Sub2:', theme)

   return (
      <div style={theme}>
         <h1>Sub2</h1>
         <Sub3 />
      </div>
   )
}

function Sub3() {
   const theme = useContext(themeContext)
   console.log('Sub3:', theme)

   return (
      <div style={theme}>
         <h1>Sub3</h1>
      </div>
   )
}

export default App
