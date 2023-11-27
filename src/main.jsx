import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import Context from './Context/Context'
import { QueryClient, QueryClientProvider } from 'react-query'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </QueryClientProvider>
  </React.StrictMode>
)
