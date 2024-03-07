import { useState, useRef, useEffect } from "react";
import "@/styles/globals.css";
import Link from "next/link";
import { Button } from "@/components/Button";
import {
  faStar,
  faFilter,
  faHouseChimney,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field, Formik, Form } from "formik";
import AddressModel from "@/database/models/AddressModel";
import DarkModeButton from "@/components/DarkModeButton";

const App = ({ Component, pageProps }) => {
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
      <header className="border-b-4 border-slate-00 dark:border-gray-800 shadow-md w-full h-24">
        <div className="fixed top-5 left-14 pr-10 z-10 min-w-32">
          <a href="">
            <FontAwesomeIcon icon={faHouseChimney} size="3x" />
          </a>
        </div>
        <div className="flex justify-center mr-8 p-5 py-6 text-2xl">
          <input
            type="text"
            placeholder="Rechercher une adresse..."
            className="border-2 border-slate-00 rounded-md p-2 mt-0 text-black w-1/3 dark:bg-gray-800 dark:text-white"
          />
        </div>
        <div className="fixed top-5 right-14 pl-10 z-10 min-w-32">
          <a href="/addresses/edit.jsx">
            <FontAwesomeIcon icon={faPlusCircle} size="3x" />
          </a>
        </div>
      </header>
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
            className="ml-50 h-1/3 w-5/12 fixed bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800"
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
                <p className="">Types de lieux</p>
                <div className="flex justify-around flex-wrap text-sm sm:text-xs text-center">
                  <label  className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Restaurants
                  </label>
                  <label  className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Bars
                  </label>
                  <label  className="text-[9px] sm:text-[18px]">
                    <input
                      type="checkbox"
                      name="checked"
                      value="restaurants"
                      class="w-4 h-4"
                    ></input>
                    <br></br>Parcs
                  </label>
                  <label  className="text-[9px] sm:text-[18px]">
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
                <p>Notation</p>
                <div className="w-42 flex gap-1 flex-wrap">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className={`text-2xl cursor-pointer ${
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

export default App;
