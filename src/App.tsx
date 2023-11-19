import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { theme } from 'shared/constants/styles'
import { store } from 'shared/state'
import { ThemeProvider } from 'styled-components'

import RoutesRenderer from './components/RoutesRenderer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div id={'app'}>
            <RoutesRenderer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
