import React from "react";
import "./App.css";
import RoutesNav from "./components/RoutesNav";
import Header from "./components/Header";
import Footer from "./components/Footer";

import RegisterForm from './components/RegisterForm'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
   
    <div className="">
      <Header />
      <RoutesNav />
      <Footer />
    </div>
  );
}

export default App;
