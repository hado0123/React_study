import useToggle from './useToggle'

function ToggleEx() {
   const [isToggled, toggle] = useToggle(false)

   return (
      <div>
         <button onClick={toggle}>{isToggled ? '끄기' : '켜기'}</button>
         {isToggled && <p>토글 상태가 켜져 있습니다.</p>}
      </div>
   )
}

export default ToggleEx
