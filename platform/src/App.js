import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes'
import { GlobalStyles } from './styles/global';
import { Dashboard } from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Dashboard />
      <Router />
    </BrowserRouter>
  )
}

export default App