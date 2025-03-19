import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ProductProvider_ } from './context/ProductContext_';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
   <ProductProvider_> {/* Wrap App with ProductProvider */}
      <App />
    </ProductProvider_>
 </BrowserRouter>
)
