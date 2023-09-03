import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="w-full px-4 mx-auto">
      <NavBar onSearchClick={toggleModal} />
      {isModalOpen && <Modal onClose={toggleModal} />}
      <header className="flex justify-between mb-8">
        <h3>Stays in Finland</h3>
        <p>14+ Stays</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
