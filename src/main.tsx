import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext';
import { TranslateProvider } from './context/TranslateContext';
import { Home } from './pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TranslateProvider><ThemeProvider><Home /></ThemeProvider></TranslateProvider>
  </React.StrictMode>
)
