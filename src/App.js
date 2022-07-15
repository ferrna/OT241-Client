import React from 'react';
import './App.css';

import RegisterForm from './components/RegisterForm'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center ms-5 mt-30">
      <RegisterForm/>
    </div>
  );
}

export default App;
