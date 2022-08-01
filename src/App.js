import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesNav from "./components/RoutesNav";
import Slider from "./components/Slider";
import Backoffice from "./components/Backoffice";

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <Backoffice />
      <RoutesNav />
      <Footer />
    </div>
  );
}

export default App;
