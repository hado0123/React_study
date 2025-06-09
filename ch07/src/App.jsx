import { useCallback, useRef, useState } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   /*
   1. nextId를 state로 지정하면 nextId가 바뀔때마다 리렌더링이 불필요하게 발생한다. 
   
   2. const nextId = 4를 사용할 경우 다른 state값(todos)가 바뀔때 리렌더링이 되면서 값이 계속 4로 초기화 된다
   
   -> 이런 이유들 때문에 useRef를 사용해서 값을 저장하는 것이 좋다. 
  */
   const nextId = useRef(4)

   // 할 일 등록
   const onInsert = useCallback(
      (text) => {
         // text: 입력한 할일

         // 추가할 객체 만들기
         const todo = {
            id: nextId.current, //처음에는 4
            text, // text: text
            checked: false,
         }

         // 합친 데이터를 바로 todos state에 적용
         setTodos(todos.concat(todo))
         nextId.current += 1 // nextId 1씩 더하기
      },
      [todos]
   )

   // 할 일 삭제
   const onRemove = useCallback(
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id != id)
         setTodos(removedTodos)
      },
      [todos]
   )

   // 할 일 완료, 미완료(토글)
   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) =>
            todo.id === id
               ? {
                    ...todo,
                    checked: !todo.checked, //checked 값을 덮어쓴다
                 }
               : todo
         )

         setTodos(toggleTodos)
      },
      [todos]
   )

   return (
      <TodoTemplate>
         {/* todoInsert 컴포넌트에서 할일을 등록하므로 onInsert 함수를 props로 전달 */}
         <TodoInsert onInsert={onInsert} />
         {/* TodoListItem 컴포넌트에서 삭제하므로 onRemove 함수를 props로 전달 */}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
