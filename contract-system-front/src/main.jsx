import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { BrowserRouter as Router } from 'react-router'
import App from './App.jsx'
import './styles/bootstrap.min.css';  // Import Bootstrap CSS
import './styles/style.css';  // Import custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      
      <App />
    </Router>
  </StrictMode>,
)
