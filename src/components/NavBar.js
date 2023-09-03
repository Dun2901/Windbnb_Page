import React from "react";
import logo from "../assets/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";

function NavBar({ onSearchClick }) {
  const styles = {
    container:
      "shadow-md bg-white flex flex-row gap-4 items-center px-4 rounded-lg text-gray-400 text-base",
    text: "text-sm font-['Mulish'] text-[#bdbdbd] mr-px",
    btn: "px-5 py-5 mx-auto text-red-500 font-black",
  };
  return (
    <div className="mt-5 mb-12 sm:flex justify-between items-center">
      <div>
        <img src={logo} alt="img of the logo" className="mb-8 " />
      </div>
      {/* search */}
      <div className={styles.container} onClick={onSearchClick}>
        <div className={styles.text}>Choose a Location</div>
        <div
          className="border-solid border-[#f2f2f2] self-start w-px shrink-0 h-12 border-r border-l-0 border-y-0"
          id="Line"
        />
        <div className={styles.text}>Add guests</div>
        <div
          className="border-solid border-[#f2f2f2] self-start mr-1 w-px shrink-0 h-12 border-r border-l-0 border-y-0"
          id="Line1"
        />
        <div className={styles.btn}>
          <BiSearchAlt2 />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
