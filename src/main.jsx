import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
    Home,
    UserProfile,
    LoginPage,
    SignUpPage
} from './pages/index.js';

import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router'

import '@fortawesome/fontawesome-free/css/all.min.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>} />
      <Route path='user' element={<UserProfile/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<SignUpPage/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
