import React from "react";
import logo from "../assets/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";

function NavBar() {
  const styles = {
    container:
      "mx-auto w-4/5 shadow-md rounded-2xl flex items-center cursor-pointer w-max-content",
    input: "relative px-5 py-2 border-r border-solid border-gray-300",
    btn: "px-5 py-5 mx-auto text-red-500 font-black",
    text: "text-gray-400 text-base",

    modalHeader: "flex justify-between items-center mb-8",
    modalContainer: "w-full relative",
    searchContainer: "shadow-md rounded-2xl ",
  };
  return (
    <nav className="mt-5 mb-12 sm:flex justify-between items-center">
      <div>
        <img src={logo} alt="img of the logo" className="mb-8 " />
      </div>

      <div className={styles.container}>
        <div className={styles.input}>
          <p className="hidden">LOCATION</p>
          <span className={styles.text}>Choose a Location</span>
        </div>
        <div className={styles.input}>
          <p className="hidden">GUESTS</p>
          <span className={styles.text}>Add guests</span>
        </div>
        <div className={styles.btn}>
          <BiSearchAlt2 />
        </div>
      </div>

      {/* modal */}
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h5 className="font-bold text-sm text-gray-700">Edit your search</h5>
          <button className="text-lg cursor-pointer">
            <RiCloseLine className="font-black" />
          </button>
        </div>

        <div className={styles.searchContainer}>
          <div>
            <p>Location</p>
            <span>Choose a Location</span>
          </div>
          <div>
            <p>Guests</p>
            <span>Add Guests</span>
          </div>
          <div>
            <button>
              <BiSearchAlt2 />
              <span>Search</span>
            </button>
          </div>
        </div>

        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;
