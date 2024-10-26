import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}> </Route>
        <Route exact path="/details" element={<ProductDetail />}> </Route>

      </Routes>
    </Router>

  </StrictMode>,
)
