import React from "react"
import { Formik, Form } from "formik"
import { Button } from "@/components/Button"
import PlaceInfos from "@/components/add_address/PlaceInfos"
import axios from "axios"
import { useRouter } from "next/router"

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
  const initialValues = address
  const handleSubmit = async ({ _id, name, street, city, postalCode, type }) => {
    await axios.patch(`/api/addresses/${_id}`, { name, street, city, postalCode, type })
    router.push(`/addresses/${_id}`)
  }
  const handleDelete = async () => {
      await axios.delete(`/api/addresses/${address._id}`)
      router.push("/")
  }

  return (
    <div className="flex justify-center mt-32 pt-5">
      <div className="px-36 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">Modifier une adresse</h1>
        <br></br>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <span>Type de lieu</span><span className="ml-5">{address.type}</span>
              <div className="mt-2"></div>
              <PlaceInfos />

              <div className="flex justify-center space-x-32 mt-10 px-5 py-5 text-2xl">
                <Button onClick={handleDelete}>Delete</Button>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default EditAddress
