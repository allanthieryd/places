import React from "react"
import { Formik, Form } from "formik"
import { Button } from "@/components/Button"
import MuseumForm from "@/components/add_address/MuseumForm"
import ParkForm from "@/components/add_address/ParkForm"
import RestaurantForm from "@/components/add_address/RestaurantForm"
import BarForm from "@/components/add_address/BarForm"
import axios from "axios"
import { useRouter } from "next/router"
import PlaceInfos from "@/components/add_address/PlaceInfos"

export const getServerSideProps = async ({ params: { addressId } }) => {
  const { data: address } = await axios(
    `http://localhost:3000/api/addresses/${addressId}`,
  )

  return {
    props: { address },
  }
}
const EditAddress = ({ address }) => {
  const router = useRouter()
  const handleSubmit = async (formData) => {
    const { _id, ...rest } = formData
    await axios.patch(`/api/addresses/${_id}`, { ...rest })
    router.push(`/addresses/${_id}`)
  }
  const handleDelete = async () => {
      await axios.delete(`/api/addresses/${address._id}`)
      router.push("/")
  }
  const renderPlaceForm = () => {
    switch (address.type) {
      case "Musée":
        return <MuseumForm initialValues={address} onSubmit={handleSubmit} values={address} />

      case "Parc":
        return <ParkForm initialValues={address} onSubmit={handleSubmit} values={address} />

      case "Restaurant":
        return <RestaurantForm initialValues={address} onSubmit={handleSubmit} values={address} averagePrice={address.averagePrice}/>

      case "Bar":
        return <BarForm initialValues={address} onSubmit={handleSubmit} values={address} />

      default:
        return null
    }
  }

  return (
    <div className="flex justify-center mt-32 pt-5">
      <div className="px-6 lg:px-32 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">Modifier une adresse</h1><br></br>
        <Formik initialValues={address} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div className="ml-0 sm:ml-6 mb-2">
              <span>Type de lieu</span><span className="ml-6">{address.type}</span>
              </div>
              <PlaceInfos />
              {renderPlaceForm()}
              <div className="flex justify-center space-x-12 lg:space-x-32 mt-6 px-5 py-5 text-2xl">
                <Button onClick={handleDelete}>Delete</Button><Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}


export default EditAddress
