import React from "react";
import logo from "../assets/logo.svg";
import { BiSearchAlt2 } from "react-icons/bi";

function NavBar() {
  const styles = {
    input: "px-2 py-1 border-r-2 focus:outline-none text-lg",
    label: "border-none border-r-2 border-solid border-gray-200 ",
    btn: "w-[53px] h-[55px] bg-white cursor-pointer text-2xl",
  };
  return (
    <nav>
      <div>
        <img src={logo} alt="img of the logo" className="mb-9" />
      </div>
      {/* right */}
      <div>
        <form className="w-auto flex h-[55px] py-[10px] mx-9 rounded-2xl shadow-md">
          <label className={styles.label}>
            <p className="hidden">LOCATION</p>
            <input
              type="text"
              placeholder="Add location"
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            <p className="hidden">GUESTS</p>
            <input
              type="text"
              placeholder="Add guests"
              className={styles.input}
            />
          </label>
          <button className={styles.btn}>
            <BiSearchAlt2 />
          </button>
        </form>

        <div className="">
          <ul className="">
            <li>
              <option value="Helsinki, Finland">Helsinki, Finland</option>
            </li>
            <li>
              <option value="Turku, Finland">Turku, Finland</option>
            </li>
            <li>
              <option value="Oulu, Finland">Oulu, Finland</option>
            </li>
            <li>
              <option value="Vaasa, Finland">Vaasa, Finland</option>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
