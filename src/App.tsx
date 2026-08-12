import { RouterProvider } from 'react-router-dom'
import './styles/global.css'
import { router } from './router/router'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Suspense } from 'react'

function App() {

  return (
    <Provider store={store}>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}

export default App