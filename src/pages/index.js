import { useState, useRef, useEffect } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import { Button } from "@/components/Button";
import { faStar,faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressModel from "@/database/models/AddressModel";
import DarkModeButton from "@/components/DarkModeButton";
import Header from "@/components/header";
import "@fontsource/montserrat";

const HomePage = ({ Component, pageProps }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [distance, setDistance] = useState(50);
  const [rating, setRating] = useState(pageProps.rating || 0);

  const handleToggleMenu = (event) => {
    console.log("Menu clicked !");
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleDistanceChange = (newDistance) => {
    setDistance(newDistance);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseMenu);
    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <Header />
      <div className="absolute top-5 right-4">
        <DarkModeButton />
      </div>
      <div className="ml-12 mt-4 relative">
        <div className="">
          {/* Bouton du menu déroulant */}

          <button onClick={handleToggleMenu} className="p-2">
            <FontAwesomeIcon icon={faFilter} size="3x" />
          </button>
        </div>

        {/* Menu déroulant */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="ml-50 h-2/5 w-5/12 fixed bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800"
          >
            {/* Contenu du menu déroulant */}
            <ul className="leading-loose">
              <li>
                <p className="">Distance</p>
                <input
                  type="range"
                  id="distance"
                  name="distance"
                  min="0"
                  max="100"
                  value={pageProps.distance}
                  step="10"
                  onChange={(e) => {
                    handleDistanceChange(e.target.value);
                  }}
                />
                <label htmlFor="distance"> {distance} Km</label>
              </li>
              <li>
                <p className="mt-2">Types de lieux</p>
                <div className="flex justify-around flex-wrap text-sm sm:text-xs text-center">
                  <label className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Restaurants
                  </label>
                  <label className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Bars
                  </label>
                  <label className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Parcs
                  </label>
                  <label className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Musées
                  </label>
                </div>
              </li>
              <li>
                <p className="mt-2">Notation</p>
                <div className="w-42 flex gap-1 flex-wrap">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`text-[19px] sm:text-2xl cursor-pointer ${
                        index <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      onClick={() => handleRatingChange(index)}
                    />
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-12 mr-6 md:mr-24 lg:mr-32">
        {pageProps && pageProps.addresses ? (
          <table className="w-1/2 border">
            <thead>
              <tr>
                <th className="p-3">Places</th>
              </tr>
            </thead>
            <tbody className="">
              {pageProps.addresses.map((address, index) => (
                <tr key={index}>
                  <td className="p-3">{address.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No addresses found</p>
        )}
      </div>

      <section className="flex justify-center">
        <div className="max-w-md w-full p-10">
          <Component {...pageProps} />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
