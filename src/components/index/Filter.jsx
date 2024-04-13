import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import RestaurantInfos from "./RestaurantsInfos"
import MuseumsInfos from "./MuseumsInfos"
import BarsInfos from "./BarsInfos"
import ParcsInfos from "./ParcsInfos"
// eslint-disable-next-line max-lines-per-function
const Filter = ({
  isMenuOpen,handleToggleMenu,menuRef}) => (
    
  <div className="ml-12 mt-4">
    <div className="mt-32">
      <button onClick={handleToggleMenu} className="p-2">
        <FontAwesomeIcon icon={faFilter} className="text-3xl sm:text-5xl" />
      </button>
    </div>
    {isMenuOpen && (
      <div
        ref={menuRef}
        className="ml-50 h-5/6 md:h-3/4 lg:h-2/3 w-3/4 md:w-1/2 lg:w-5/12 fixed bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800">
        <ul className="leading-loose">
          <li>
          </li>
          <li>
            <h1 className="mt-2 mb-6 text-center text-3xl">Types de lieux</h1>
            <div className="flex justify-around flex-wrap text-xs md:text-[12px] lg:text-[11px] text-center">
              <RestaurantInfos />
              <BarsInfos />
              <ParcsInfos />
              <MuseumsInfos />
            </div>
          </li>
        </ul>
      </div>
    )}
  </div>
)

export default Filter
