import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './components/ThemeContext.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider> {/* Wrap everything inside ThemeProvider */}
  <AuthProvider>
  <BrowserRouter>
    
    <App />
  
</BrowserRouter>

  </AuthProvider>
  
</ThemeProvider>
    
  
)
