import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Filter = ({ isMenuOpen, handleToggleMenu, menuRef, distance, handleDistanceChange }) => (
    <div className="ml-12 mt-4 relative">
      <div className="mt-28">
        {/* Bouton du menu déroulant */}
        <button onClick={handleToggleMenu} className="p-2">
          <FontAwesomeIcon icon={faFilter} size="3x" />
        </button>
      </div>
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
                type="range"
                id="distance"
                name="distance"
                min="0"
                max="100"
                value={distance}
                step="10"
                onChange={(e) => {
                  handleDistanceChange(e.target.value)
                }}
              />
              <label htmlFor="distance"> {distance} Km</label>
            </li>
            {/* Autres éléments de menu ici */}
          </ul>
        </div>
      )}
    </div>
  )

export default Filter
