import axios from "axios"
import { Button } from "@/components/Button"
import Link from "next/link"
import { useRouter } from "next/router"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresses/${addressId}`,
  )

  return {
    props: { address },
  }
}
const AddressPage = ({ address }) => {
  const router = useRouter()

  return (
    <>
      <div className="mt-40 text-center mt-28 pt-10">
        <h1 className="text-2xl font-semibold">Nom du lieu: {address.name}</h1>
        <p>Nom de rue: {address.street}</p>
        <p>Ville: {address.city}</p>
        <p>Code Postal: {address.postalCode}</p>
        <p>Pays: {address.country}</p>
      </div>
      <div className="flex justify-center mt-10 px-5 py-5 space-x-32">
      <Button onClick={() => router.back()}>&lt; Back</Button>
        <Link href="/">
          <Button>🏠Home</Button>
        </Link>
      </div>
    </>
  )
}

export default AddressPage
