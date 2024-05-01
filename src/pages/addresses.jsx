import { useState } from "react"
import "@fontsource/montserrat"
import axios from "axios"
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

  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <AddressTable addresses={addresses} setAddresses={setAddresses} />
    </main>
  )
}

export default AddressPage
