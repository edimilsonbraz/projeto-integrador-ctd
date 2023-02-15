import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import global from './styles/global.css';
import register from './styles/register.css';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}


