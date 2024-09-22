import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './TodoList.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <TodoList />
    </Provider>
  </StrictMode>,
)
