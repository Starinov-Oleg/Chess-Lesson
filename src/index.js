import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.css'
import store from './redux/store.ts'
import state from './redux/state.ts'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'

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
        <App state={state} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
