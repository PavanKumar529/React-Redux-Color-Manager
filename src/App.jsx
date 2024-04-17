import React from 'react';
import Child from  "./Child"
import { store } from './redux/store/store'
import { Provider } from 'react-redux'

import Color from './Color'

function App() {

  return (
    <>
        {/* <h1>Vite App</h1> */}

      <Provider store={store}>
        <Child/>
        <hr />
        <Color />
        <hr />
      </Provider>
    </>
  )
}

export default App
