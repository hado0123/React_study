import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'

// import Counter from './UseToolkit/Counter'
// import storeUseToolkit from './UseToolkit/store'
// import User from './UseToolkit/User'

import Counter from './ToolkitCounter/Counter'
import store from './ToolkitCounter/store'

function App() {
   return (
      <Provider store={store}>
         <Counter />
      </Provider>
   )
   // return (
   //    <Provider store={storeUseToolkit}>
   //       <Counter />
   //       <User />
   //    </Provider>
   // )
   // return (
   //    <Provider store={storeNonToolkit}>
   //       <Counter />
   //    </Provider>
   // )
}

export default App
