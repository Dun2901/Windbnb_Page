import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiCloseLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

const stayDetails = [
  {
    key: 1,
    image: "/images/room1.jpg",
    superhost: true,
    rating: "4.5",
    info: "Private Room",
    title: "Cozy, Peaceful, Spacious and Private room with",
    location: "Helsinki, Finland",
    guests: 3,
  },
  {
    key: 2,
    image: "/images/stay2.jpg",
    superhost: true,
    rating: "4.25",
    info: "Entire Apartment, 2 Beds",
    title: "Stylist apartment in the center of city",
    location: "Turku, Finland",
    guests: 1,
  },
  {
    key: 3,
    image: "/images/stay3.jpg",
    superhost: false,
    rating: "4.96",
    info: "Entire House",
    title: "Modern House in a remote area",
    location: "Oulu, Finland",
    guests: 2,
  },
  {
    key: 4,
    image: "/images/stay4.jpg",
    superhost: true,
    rating: "4.54",
    info: "Entire Apartment, 2 Beds",
    title: "Modern Apartment Close to Nature",
    location: "Vaasa, Finland",
    guests: 4,
  },
  {
    key: 5,
    image: "/images/stay5.jpg",
    superhost: true,
    rating: "4.62",
    info: "Private Room",
    title: "House in a remote area",
    location: "Helsinki, Finland",
    guests: 3,
  },
  {
    key: 6,
    image: "/images/stay6.jpg",
    superhost: true,
    rating: "4.85",
    info: "Entire house",
    title: "Stylist apartment in the center of city",
    location: "Vaasa, Finland",
    guests: 3,
  },
  {
    key: 7,
    image: "/images/stay7.jpg",
    superhost: true,
    rating: "4.5",
    info: "Private Room",
    title: "Stylist apartment in the center of city",
    location: "Oulu, Finland",
    guests: 2,
  },
  {
    key: 8,
    image: "/images/stay8.jpg",
    superhost: true,
    rating: "4.5",
    info: "Private Room",
    title: "Stylist apartment in the center of city",
    location: "Helsinki, Finland",
    guests: 5,
  },
];

const locationList = [
  ...new Set(stayDetails.map((element) => element.location)),
];

const Modal = ({ onClose }) => {
  const [location, setLocation] = useState();
  const [guestCount, setGuestCount] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showLocationOptions, setShowLocationOptions] = useState(true);
  const [showGuestCountOptions, setShowGuestCountOptions] = useState(false);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [selected_location, setSelectedLocation] = useState(null);

  const onSubmit = function () {
    setLocation(selected_location);
    setGuestCount(adultCount + childCount);
    setDrawerOpen(false);
  };

  const styles = {
    searchBox: {
      container:
        "shadow-md bg-white flex flex-row gap-4 items-center px-4 rounded-lg text-gray-400 text-base ",
      input:
        "relative px-5 py-2 border-r border-solid border-gray-300 w-[50%] ",
      text: "font-normal text-sm text-gray-300",
    },
    btn: "bg-transparent border-none text-left pl-[5%] items-center",

    modalHeader:
      "flex justify-between items-center mb-8 sm:hidden text-gray-700 m-[4%] font-bold text-sm ",
    modalContainer: "max-w-[1400px] my-0 mx-auto",
    searchContainer: "shadow-md rounded-2xl ",

    searchOption: {
      searchContainer:
        "width: calc(100% - 7% - 7%); my-0 mx-[7%] grid grid grid-cols-3 font-normal text-sm",
      location: "mt-[10%] text-gray-800",
      locationOptions: "p-[5%] cursor-pointer flex",
      guests: "mt-[10%] text-gray-800",
      guestsOptions: "p-[5%]",
    },
    icon: "mr-2 text-gray-700 text-lg font font-black",

    guests: "visible pl-4 flex-1 w-1/3",
  };

  return (
    <div className="absolute z-[99] top-0 left-0 m-0 p-0 bg-white w-full h-[460px]">
      <div className={styles.modalContainer}>
        {/* header */}
        <div className={styles.modalHeader}>
          <h5>Edit your search</h5>
          <button className="text-lg cursor-pointer" onClick={onClose}>
            <RiCloseLine />
          </button>
        </div>

        {/* Search box */}
        <div className={styles.searchBox.container}>
          <button
            className={styles.searchBox.input}
            onClick={() => {
              setShowLocationOptions(true);
              setShowGuestCountOptions(false);
            }}
          >
            <div className="font-extrabold text-[9px] mb-1 text-gray-700">
              LOCATION
            </div>
            {selected_location ? (
              <div>{selected_location}</div>
            ) : (
              <div className={styles.searchBox.text}>Choose a Location</div>
            )}
          </button>

          <div
            className="border-solid border-[#f2f2f2] self-start w-px shrink-0 h-12 border-r border-l-0 border-y-0"
            id="Line"
          />

          <button
            className={styles.searchBox.input}
            onClick={() => {
              setShowLocationOptions(false);
              setShowGuestCountOptions(true);
            }}
          >
            <div className="font-extrabold text-[9px] mb-1 text-gray-700">
              GUESTS
            </div>
            {adultCount || childCount ? (
              <div>{`${adultCount + childCount} Guests`}</div>
            ) : (
              <div className={styles.searchBox.text}>Add guests</div>
            )}
          </button>

          <div
            className="border-solid border-[#f2f2f2] self-start w-px shrink-0 h-12 border-r border-l-0 border-y-0"
            id="Line"
          />

          <button className={styles.btn}>
            <button className="font-bold text-sm text-[#f2f2f2] w-32 h-12 bg-[#eb5757] shadow-md border-none rounded-2xl items-center py-0 px-[5%] transition-opacity duration-300 hover:opacity-80">
              <div className="flex justify-center">
                <span className="pt-1">
                  <BiSearchAlt2 />
                </span>
                <span className="ml-2">Search</span>
              </div>
            </button>
          </button>
        </div>
        {/* End Search box */}

        {/* search option */}
        <div className={styles.searchOption.searchContainer}>
          {/* Location */}
          <div
            className={`${styles.searchOption.location} ${
              !showLocationOptions ? "hidden" : ""
            }`}
          >
            {showLocationOptions ? (
              <div>
                {locationList.map((location_name) => (
                  <div
                    className={styles.searchOption.locationOptions}
                    onClick={() => setSelectedLocation(location_name)}
                  >
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <span className="m-auto ml-[5%]">{location_name}</span>
                  </div>
                ))}
                <div
                  className={styles.searchOption.locationOptions}
                  onClick={() => setSelectedLocation(null)}
                >
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span className="m-auto ml-[5%]">Any</span>
                </div>
              </div>
            ) : null}
          </div>

          {/* Guest */}
          <div className={styles.searchOption.guests}>
            {showGuestCountOptions ? (
              <div>
                <div className={styles.searchOption.guestsOptions}>
                  <div className="text-[#333333] font-bold">Adults</div>
                  <div className="font-normal text-sm text-[#bdbdbd]">
                    Ages 13 or above
                  </div>
                  <div>
                    <button
                      className="mt-[2%] mr-[2%] mb-[2%] ml-0"
                      onClick={() => setAdultCount(adultCount - 1)}
                      disabled={adultCount <= 0}
                    >
                      -
                    </button>
                    <span className="mt-[2%] mr-[2%] mb-[2%] ml-0">
                      {adultCount}
                    </span>
                    <button
                      className="mt-[2%] mr-[2%] mb-[2%] ml-0"
                      onClick={() => setAdultCount(adultCount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.searchOption.guestsOptions}>
                  <div className="text-[#333333] font-bold">Children</div>
                  <div className="font-normal text-sm text-[#bdbdbd]">
                    Ages 2-12
                  </div>
                  <div>
                    <button
                      className="mt-[2%] mr-[2%] mb-[2%] ml-0"
                      onClick={() => setChildCount(childCount - 1)}
                      disabled={childCount <= 0}
                    >
                      -
                    </button>
                    <span className="mt-[2%] mr-[2%] mb-[2%] ml-0">
                      {childCount}
                    </span>
                    <button
                      className="mt-[2%] mr-[2%] mb-[2%] ml-0"
                      onClick={() => setChildCount(childCount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Submit Button visible only in small screens */}
          <button
            className="bg-transparent border-none text-left pl-[5%] sm:hidden"
            onClick={() => onSubmit()}
          >
            <div className="flex">
              <span>
                <BiSearchAlt2 />
              </span>
              <span className="m-auto ml-[5%]">Search</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
