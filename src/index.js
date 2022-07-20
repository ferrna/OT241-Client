import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './components/Contacto'
import Home from './pages/Home'
import Novedades from './pages/Novedades'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<App />}>
          <Route path="/"element={<Home />}/>
          <Route path="nosotros"element={<h2>NOSOTROS</h2>}/>
          <Route path="novedades"element={<Novedades />}/>
          <Route path="testimonios"element={<h2>TESTIMONIOS</h2>}/>
          <Route path="contacto"element={<Contacto />}/>
          <Route path="contribuye"element={<h2>CONTRIBUYE</h2>}/>
          <Route path="*"element={<h2>Esta pagina aun no fue creada</h2>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
