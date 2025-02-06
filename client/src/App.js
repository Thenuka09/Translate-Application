import React from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Translate from "./components/Translate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Translate />
      <Footer />

    </div>
  );
}

export default App;
