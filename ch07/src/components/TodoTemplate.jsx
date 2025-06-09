import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   // children props에는 TodoInsert, TodoList 컴포넌트가 있음
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default TodoTemplate
