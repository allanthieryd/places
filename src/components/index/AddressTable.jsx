import { faRefresh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import Link from "next/link"

const AddressTable = ({ addresses, setAddresses }) => {
  const handleFetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/addresses")
      setAddresses(response.data)
  }

  return (
    <div className="flex justify-end mr-6 md:mr-12 lg:mr-24">
      <button onClick={handleFetchData}>
        <FontAwesomeIcon icon={faRefresh} className="absolute top-36 lg:text-md md:text-3xl sm:2xl"/>
      </button>
      {addresses && addresses.length > 0 ? (
        <table className="w-1/2 mb-5">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="p-3">Address</th>
              <th className="p-3">City</th>
              <th className="p-3">Country</th>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>
          <tbody>
            {addresses.map((address, index) => (
              <tr
                className="even:bg-gray-100 dark:even:bg-gray-800 odd:bg-white dark:odd:bg-gray-700 border text-xs text-center" key={index}>
                <td className="p-3 border border-slate-400">
                  <Link href={`/addresses/${address._id}/edit`}>{address.address}</Link>
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
  )
}

export default AddressTable
