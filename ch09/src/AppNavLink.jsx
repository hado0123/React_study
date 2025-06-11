import { Route, Routes, Link, NavLink } from 'react-router-dom'
import './App.css'

function Home() {
   return (
      <div>
         <h2>Home</h2>
         Home...
      </div>
   )
}

function Topics() {
   return (
      <div>
         <h2>Topics</h2>
         Topics...
      </div>
   )
}

function Contact() {
   return (
      <div>
         <h2>Contact</h2>
         Contact...
      </div>
   )
}

/*
 a태그로 링크 이동시 페이지가 전체 새로고침 되면서 모든 DOM들이 다시 렌더링이 된다.
 -> MPA 방식

 <Link> 컴포넌트로 이동시 바뀐 부분의 DOM만 리렌더링이 된다.
 -> SPA 방식
 -> 리액트는 기본적으로 SPA 방식으로 동작하므로 <Link> 컴포넌트 사용을 추천
*/

function App() {
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
               {/* <Link to="/">Home</Link> */}
               {/* <a href="/">Home</a> */}
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
               {/* <Link to="/topics">Topics</Link> */}
               {/* <a href="/topics">Topics</a> */}
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
               {/* <Link to="/contact">Contact</Link> */}
               {/* <a href="/contact">Contact</a> */}
            </li>
         </ul>

         {/* 주소의 경로에 따라 어떤 컴포넌트를 보여줄지 지정 */}
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />

            {/* 지정한 경로 외에 다른 경로는 모두 Not Found를 보여준다  */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>
   )
}

export default App
