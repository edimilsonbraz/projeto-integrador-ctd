import { BrowserRouter } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Router } from './Router'

import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />

      <Footer />
    </BrowserRouter>
  )
}


