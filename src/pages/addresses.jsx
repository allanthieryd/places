import { useState, useRef, useEffect } from "react"
import "@fontsource/montserrat"
import axios from "axios"
import Filter from "@/components/index/Filter"
import AddressTable from "@/components/index/AddressTable"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: {
      addresses,
    },
  }
}
const AddressPage = (props) => {
  const { addresses: initialAddresses } = props
  const [addresses, setAddresses] = useState(initialAddresses)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const [distance, setDistance] = useState(50)
  const handleToggleMenu = (event) => {
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
    document.addEventListener("click", handleCloseMenu)

    return () => {
      document.removeEventListener("click", handleCloseMenu)
    }
  }, [])

  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <Filter
        isMenuOpen={isMenuOpen}
        handleToggleMenu={handleToggleMenu}
        menuRef={menuRef}
        distance={distance}
        handleDistanceChange={handleDistanceChange}
      />
      <AddressTable addresses={addresses} setAddresses={setAddresses} />
    </main>
  )
}

export default AddressPage
