import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import Contacto from './components/Contacto';
import RegisterForm from './components/RegisterForm'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center border ms-5">
      <RegisterForm/>
    </div>
  );
}

export default App;
