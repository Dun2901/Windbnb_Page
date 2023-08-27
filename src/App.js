import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-3">
      <NavBar />
      <header className="flex justify-between mb-8">
        <h3>Stays in Finland</h3>
        <p>14+ Stays</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
