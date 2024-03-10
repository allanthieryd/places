import { useState, useRef, useEffect } from "react";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fontsource/montserrat";
import RestaurantInfos from "@/components/RestaurantsInfos"
import MuseumsInfos from "@/components/MuseumsInfos"
import BarsInfos from "@/components/BarsInfos"
import ParcsInfos from "@/components/ParcsInfos"

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [distance, setDistance] = useState(50);

  const addresses = [
    { place: "10 rue de Rivoli, Paris", name: "La Bonne Franquette", country: "France", type: "Restaurant" },
    { place: "20 Baker Street, London", name: "Sherlock's Pub", country: "United Kingdom", type: "Bar" },
    { place: "5th Avenue, New York", name: "Metropolitan Museum of Art", country: "USA", type: "Museum" },
    { place: "Tokyo Tower, Minato City", name: "Sakura Gardens", country: "Japan", type: "Park" },
    { place: "123 Main Street, Berlin", name: "Schnitzel Haus", country: "Germany", type: "Restaurant" },
    { place: "Rua Augusta, Lisbon", name: "Fado Lounge", country: "Portugal", type: "Bar" },
    { place: "Calle Gran Vía, Madrid", name: "Prado National Museum", country: "Spain", type: "Museum" },
    { place: "Sydney Opera House, Sydney", name: "Botanic Gardens", country: "Australia", type: "Park" },
    { place: "Via della Conciliazione, Rome", name: "Pasta Paradiso", country: "Italy", type: "Restaurant" },
    { place: "Herengracht, Amsterdam", name: "Windmill Pub", country: "Netherlands", type: "Bar" },
    { place: "Champs-Élysées, Paris", name: "Louvre Museum", country: "France", type: "Museum" },
    { place: "Golden Gate Park, San Francisco", name: "Redwood Retreat", country: "USA", type: "Park" },
  ];
  

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

  const handlePriceRangeChange = (newPriceRange) => {
    setpriceRange(newPriceRange);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseMenu);
    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  return (
    <main className="dark:bg-gray-900 dark:text-white">      
      <div className="ml-12 mt-4 relative">
        <div className="mt-28">
          {/* Bouton du menu déroulant */}

          <button onClick={handleToggleMenu} className="p-2">
            <FontAwesomeIcon icon={faFilter} size="3x" />
          </button>
        </div>

        {/* Menu déroulant */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="ml-50 h-5/6 md:h-3/4 lg:h-2/3 w-3/4 md:w-1/2 lg:w-5/12 fixed bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800"
          >
            {/* Contenu du menu déroulant */}
            <ul className="leading-loose">
              <li>
                <p className="">Distance</p>
                <input
                  type="range" id="distance" name="distance" min="0" max="100" value={distance} step="10"
                  onChange={(e) => {
                    handleDistanceChange(e.target.value);
                  }}
                />
                <label htmlFor="distance"> {distance} Km</label>
              </li>
              <li>
              <p className="mt-2">Types de lieux</p>
                <div className="flex justify-around flex-wrap text-sm sm:text-xs text-center">
                  <RestaurantInfos/>
                  <BarsInfos />
                  <ParcsInfos/>
                  <MuseumsInfos/>
                </div>
              </li>             
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-end mr-6 md:mr-12 lg:mr-24 ">
        {addresses ? (
          <table className="w-1/2 border text-xs">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-900">                
                <th className="p-3">Address</th>
                <th className="p-3">Name</th>
                <th className="p-3">Country</th>
                <th className="p-3">Type</th>
              </tr>
            </thead>
            <tbody>
              {addresses.map((address, index) => (
                <tr className="even:bg-gray-100 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-700" key={index}>
                  <td className="p-3">{address.place}</td>
                  <td className="p-3">{address.name}</td>
                  <td className="p-3">{address.country}</td>
                  <td className="p-3">{address.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No addresses found</p>
        )}
      </div>      
    </main>
  );
};

export default HomePage;
