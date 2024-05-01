import axios from "axios"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/Button"
import Filter from "@/components/index/Filter"

// eslint-disable-next-line max-lines-per-function
const AddressTable = ({ addresses, setAddresses }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const handleToggleMenu = (event) => {
    event.stopPropagation()
    setMenuOpen(!isMenuOpen)
  }
  const handleCloseMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleCloseMenu)

    return () => {
      document.removeEventListener("click", handleCloseMenu)
    }
  }, [])
  const [searchValue, setSearchValue] = useState("")
  const [filteredAddresses, setFilteredAddresses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/api/addresses")
        setAddresses(response.data)
    }

    fetchData()
  }, [setAddresses])
  
  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleSearch = async () => {
      const response = await axios.get("http://localhost:3000/api/addresses")
      const fetchedAddresses = response.data
      setAddresses(fetchedAddresses)
      const filtered = fetchedAddresses.filter((address) => {
        const searchTerms = searchValue.toLowerCase().split(/[,\s]+/u)

        
return searchTerms.every((term) =>
          Object.values(address).some((value) =>
            typeof value === "string" && value.toLowerCase().includes(term)
          )
        )
      })
  
      setFilteredAddresses(filtered)
  }
  const displayAddresses = filteredAddresses.length > 0 ? filteredAddresses : addresses

  return (
    <main>
      <Filter
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
        menuRef={menuRef}
      />
    <div className="flex justify-end mr-2 md:mr-24 lg:mr-40 mb-4 flex-wrap space-x-2 lg:space-x-4">
        <input
          type="search"
          placeholder="Rechercher un lieu..."
          className="border-2 border-slate-00 dark:border-slate-700 rounded-md p-2 text-black dark:bg-gray-800 lg:w-1/3 dark:text-white h-10 sm:h-12 mt-2 text-xs md:text-sm lg:text-base"
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="text-xs sm:text-base" >
        <Button onClick={handleSearch}>Rechercher</Button>
        </div>
    </div>  
    <div className="flex justify-end mr-2 md:mr-8 lg:mr-24">      
      {displayAddresses.length > 0 ? (
        <table className="w-1/2 mb-5">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800 text-xs sm:text-xl">
              <th className="p-3">Address</th>
              <th className="p-3">City</th>
              <th className="p-3">Country</th>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {displayAddresses.map((address, index) => (
              <tr className="even:bg-gray-100 dark:even:bg-gray-800 odd:bg-white dark:odd:bg-gray-700 border text-[8px] sm:text-[12px] lg:text-xs text-center hover:bg-slate-200 dark:hover:bg-slate-700" key={index}>
                <td className="p-3 border border-slate-400">
                  <Link href={`/addresses/${address._id}/edit`}>{address.street}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href={`/addresses/${address._id}/edit`}>{address.city}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href={`/addresses/${address._id}/edit`}>{address.country}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href={`/addresses/${address._id}/edit`}>{address.name}</Link>
                </td>
                <td className="p-3 border border-slate-400">
                  <Link href={`/addresses/${address._id}/edit`}>{address.type}</Link>
                </td>
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

export default AddressTable
