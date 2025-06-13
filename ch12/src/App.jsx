import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'

import Counter from './UseToolkit/Counter'
import storeUseToolkit from './UseToolkit/store'
import User from './UseToolkit/User'

function App() {
   return (
      <Provider store={storeUseToolkit}>
         <Counter />
         <User />
      </Provider>
   )
   // return (
   //    <Provider store={storeNonToolkit}>
   //       <Counter />
   //    </Provider>
   // )
}

export default App
