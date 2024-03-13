import { useState, useRef, useEffect } from 'react'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fontsource/montserrat'
import RestaurantInfos from '@/components/RestaurantsInfos'
import MuseumsInfos from '@/components/MuseumsInfos'
import BarsInfos from '@/components/BarsInfos'
import ParcsInfos from '@/components/ParcsInfos'
import AddressModel from '@/database/models/AddressModel'

const HomePage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const [distance, setDistance] = useState(50)
  const [addresses, setAddresses] = useState([])

  useEffect(() => {
    // Fetch data from the MongoDB database using the AddressModel
    const fetchData = async () => {
      try {
        const data = await AddressModel.find()
        setAddresses(data)
      } catch (error) {
        console.error('Error fetching data from the database:', error)
      }
    }

    fetchData() // Call the function to fetch data when the component mounts
  }, [])

  const handleToggleMenu = (event) => {
    console.log('Menu clicked !')
    event.stopPropagation()
    setMenuOpen(!isMenuOpen)
  }

  const handleCloseMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  const handleDistanceChange = (newDistance) => {
    setDistance(newDistance)
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseMenu)
    return () => {
      document.removeEventListener('click', handleCloseMenu)
    }
  }, [])

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
              <li>
                <p className="mt-2">Types de lieux</p>
                <div className="flex justify-around flex-wrap text-sm sm:text-xs text-center">
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

      <div className="flex justify-end mr-6 md:mr-12 lg:mr-24 ">
        {addresses && addresses.length > 0 ? (
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
                <tr
                  className={
                    index % 2 === 0
                      ? 'even:bg-gray-100 dark:even:bg-gray-800'
                      : 'odd:bg-white dark:odd:bg-gray-700'
                  }
                  key={index}
                >
                  <td className="p-3">{address.address}</td>
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
  )
}

export default HomePage
