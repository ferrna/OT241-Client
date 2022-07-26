import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import * as serviceWorker from './serviceWorker'
import Novedades from './pages/Novedad';
import NovedadesBackOffice from './pages/NovedadBackOffice';




import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={store}>
        <Routes>
          <Route path="/"element={<App />}/>
          <Route path="news"element={<Novedades/>}/>
          <Route path="backoffice/news"element={<NovedadesBackOffice/>}/>
          <Route path="*"element={<h2>Esta pagina aun no fue creada</h2>}/>
        </Routes>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
