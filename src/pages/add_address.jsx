import React, { useState } from "react"
import { Formik, Form } from "formik"
import TypeSelector from "@/components/add_address/TypeSelector"
import RestaurantForm from "@/components/add_address/RestaurantForm"
import MuseumForm from "@/components/add_address/MuseumForm"
import BarForm from "@/components/add_address/BarForm"
import ParkForm from "@/components/add_address/ParkForm"
import { Button } from "@/components/Button"
import axios from "axios"
import * as yup from "yup"
import PlaceInfos from "@/components/add_address/PlaceInfos"
import { useRouter } from "next/router"

const validationSchema = yup.object({
  name: yup.string().min(3).required("Le nom du lieu est requis"),
  street: yup.string().min(3).required("La rue est requise"),
  city: yup.string().min(3).required("La ville est requise"),
  postalCode: yup.string().min(3).required("Le code postal est requis"),
  country: yup.string().min(3).required("Le pays est requis"),
})
// eslint-disable-next-line max-lines-per-function
const AddAddress = (props) => {
  const { addresses: initialAddresses } = props
  const [selectedType, setSelectedType] = useState(null)
  const [addresses, setAddresses] = useState(initialAddresses)
  const router = useRouter()
  const submit = async (
    { name, street, city, country, postalCode, ...rest },
    { resetForm },
  ) => {
    const { data: newAddress } = await axios.post("/api/addresses/", {
      name,
      street,
      city,
      country,
      postalCode,
      type: selectedType,
      ...rest,
    })
    setAddresses([newAddress, ...addresses])
    resetForm()
    router.push("/")
  }
  const handleTypeSelect = (type) => {
    setSelectedType(type)
  }

  return (
    <div className="flex justify-center mt-32 pt-5">
      <div className="sm:px-24 md:px-32 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center text-center">
          Veuillez entrer un lieu
        </h1>
        <br />
        <div className="flex flex-wrap space-x-4 justify-center">
          <TypeSelector handleTypeSelect={handleTypeSelect} />
        </div>

        <Formik
          initialValues={{ starRating: 0 }}
          onSubmit={submit}
          validationSchema={validationSchema}
        >
          {({ values }) => (
            <Form>
              <div className="ml-8">
              <br />
              <PlaceInfos />
              {selectedType === "Restaurant" && (
                <RestaurantForm values={values} onSubmit={submit} />
              )}
              {selectedType === "Musée" && (
                <MuseumForm values={values} onSubmit={submit} />
              )}
              {selectedType === "Bar" && (
                <BarForm values={values} onSubmit={submit} />
              )}
              {selectedType === "Parc" && (
                <ParkForm values={values} onSubmit={submit} />
              )}
              <div className="flex justify-center text-2xl">
                <Button type="submit">Submit</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddAddress
