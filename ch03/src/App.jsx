// 리액트에서는 컴포넌트 함수명과 파일명을 똑같이 쓴다. 대문자로 시작
// import 컴포넌트 함수명 from 파일명
import MyComponent from './MyComponent'
import Type from './Type'

// function App() {}
// 혹은

// 1. props: 자식 컴포넌트에서 특정 속성을 이용해 속성값을 전달
const App = () => {
   // 함수를 분리해서 전달
   // const func = (a, b) => {
   //    return a + b
   // }
   // return (
   //    <Type
   //       str="react"
   //       num={200}
   //       bool={1 == 1}
   //       arr={[0, 1, 2]}
   //       json={{ react: '리액트', time: 2 }}
   //       func={func}
   //       // func={(a, b) => {
   //       //    return a + b
   //       // }}
   //    />
   // )
   return (
      <MyComponent job="강사" forNumber={1}>
         맑음
      </MyComponent>
   )
}

export default App
