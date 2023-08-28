import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

const Modal = () => {
  const styles = {
    container:
      "mx-auto w-4/5 shadow-md rounded-2xl flex items-center cursor-pointer w-max-content",
    input: "relative px-5 py-2 border-r border-solid border-gray-300",
    btn: "px-5 py-5 mx-auto text-red-500 font-black",
    text: "text-gray-400 text-base",

    modalHeader: "flex justify-between items-center mb-8",
    modalContainer: "w-full relative",
    searchContainer: "shadow-md rounded-2xl ",

    searchOption: "mt-10 flex justify-start items-start",
    location: "pl-4 visible ",
    icon: "mr-2 text-gray-700 text-lg font font-black",

    guests: "visible pl-4",
  };
  return (
    <div>
      {/* header */}
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h5 className="font-bold text-sm text-gray-700 ">Edit your search</h5>
          <button className="text-lg cursor-pointer">
            <RiCloseLine className="font-black" />
          </button>
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
        {/* search option */}
        <div className={styles.searchOption}>
          {/* Location */}
          <div className={styles.location}>
            <ul className="list-none">
              <li className="mb-6 text-sm cursor-pointer">
                <FaMapMarkerAlt className={styles.icon} />
                <span>Helsinki, Finland</span>
              </li>
              <li className="mb-6 text-sm cursor-pointer">
                <FaMapMarkerAlt className={styles.icon} />
                <span>Turku, Finland</span>
              </li>
              <li className="mb-6 text-sm cursor-pointer">
                <FaMapMarkerAlt className={styles.icon} />
                <span>Oulu, Finland</span>
              </li>
              <li className="mb-6 text-sm cursor-pointer">
                <FaMapMarkerAlt className={styles.icon} />
                <span>Vaasa, Finland</span>
              </li>
            </ul>
          </div>
          {/* Guests */}
          <div className={styles.guests}>
            <div className="mb-8">
              <h6 className="font-bold text-sm">Adults</h6>
              <span className="inline-block text-xs mb-2">
                Age 13 and above
              </span>
              <div>
                <button className="mr-2"> - </button>
                <span>0</span>
                <button className="ml-2"> + </button>
              </div>
            </div>

            <div className="mb-8">
              <h6 className="font-bold text-sm">Children</h6>
              <span className="inline-block text-xs mb-2">Age 2 - 12</span>
              <div>
                <button className="mr-2"> - </button>
                <span>0</span>
                <button className="ml-2"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
