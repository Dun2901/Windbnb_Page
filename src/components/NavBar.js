import React from "react";
import logo from "../assets/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";

function NavBar() {
  const styles = {
    container: "shadow-md rounded-2xl flex items-center cursor-pointer",
    input: "relative px-5 py-2 border-r border-solid border-gray-300",
    btn: "px-5 py-5 mx-auto text-red-500 font-black",
    text: "text-gray-400 text-base",
  };
  return (
    <div className="mt-5 mb-12 sm:flex justify-between items-center">
      <div>
        <img src={logo} alt="img of the logo" className="mb-8 " />
      </div>
      {/* search */}
      <div className={styles.container}>
        <div className={styles.input}>
          <span className={styles.text}>Choose a Location</span>
        </div>
        <div className={styles.input}>
          <span className={styles.text}>Add guests</span>
        </div>
        <div className={styles.btn}>
          <BiSearchAlt2 />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
