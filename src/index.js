import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { Provider } from 'react-redux'

import App from './App'
import state from './redux/state.ts'
import store from './redux/store.ts'
import reportWebVitals from './reportWebVitals'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 1000 * 60 * 60 * 24,
    },
  },
  /** FOR Refactoring 
  initialData: id => {
    return queryClient.getQueryData('article')?.find(d => d.id === id)
  },
  */
})
const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage })
persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <DndProvider backend={TouchBackend}>
          <App state={state} />
        </DndProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
