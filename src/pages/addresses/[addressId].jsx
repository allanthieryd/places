import axios from "axios"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresss/${addressId}`,
  )

  return {
    props: { address },
  }
}
const AddressPage = ({ address }) => (
  <>
    <h1 className="text-2xl font-semibold">Description: {address.description}</h1>
    <p>Category: {address.category}</p>
  </>
)

export default AddressPage
