import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContextProvider from './context/authContext/index.jsx'
import { SnackbarProvider } from './context/snackBarProvider/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContextProvider>
    <SnackbarProvider>

    <App />
   </SnackbarProvider>
    </LoginContextProvider>
  </StrictMode>,
)
