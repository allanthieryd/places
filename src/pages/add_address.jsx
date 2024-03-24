import React, { useState } from "react"
import { Formik, Form } from "formik"
import TypeSelector from "@/components/add_address/TypeSelector"
import RestaurantForm from "@/components/add_address/RestaurantForm"
import MuseumForm from "@/components/add_address/MuseumForm"
import BarForm from "@/components/add_address/BarForm"
import ParkForm from "@/components/add_address/ParkForm"
import SubmitButton from "@/components/add_address/SubmitButton"
import axios from "axios"
import * as yup from "yup"
import PlaceInfos from "@/components/add_address/PlaceInfos"

export const getServerSideProps = async () => {
  const { data: addresses } = await axios("http://localhost:3000/api/addresses")

  return {
    props: {
      addresses,
    },
  }
}
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
  const [addresses, setAddresses] = useState(initialAddresses)
  const submit = async ({
    name, street, city, country, postalCode, type, averagePrice, price, 
    freeOrPaid, starRating, cuisineType, artMovement, artType, parcType,
    publicOrPrivate, barType
    
     }, { resetForm }) => {
    const { data: newAddress } = await axios.post("/api/addresses", {
      name,
      street,
      city,
      country,
      postalCode,
      type,
      averagePrice,
      price,
      freeOrPaid,
      starRating,
      cuisineType,
      artMovement,
      artType,
      parcType,
      publicOrPrivate,
      barType

    })
    setAddresses([newAddress, ...addresses])
    resetForm()
  }
  const [selectedType, setSelectedType] = useState(null)
  const handleTypeSelect = (type) => {
    setSelectedType(type)
  }


  return (
    <div className="flex justify-center mt-32 pt-5">
      <div className="sm:px-24 md:px-32 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">
          Veuillez entrer un lieu
        </h1>
        <br />
        <div className="flex flex-wrap space-x-4 justify-center">
          <TypeSelector handleTypeSelect={handleTypeSelect} />
        </div>

        <Formik initialValues={{starRating: 0, averagePrice: 50,
            museumFreeOrPaid: false, museumPrice: 1, barPriceRange: 1,
            parkPublicOrPrivate: false, parkFreeOrPaid: false, parkPrice: 1,
          }} onSubmit={submit} validationSchema={validationSchema}>
          {({ values }) => (
            <Form><br></br>
              <PlaceInfos />
              {selectedType === "restaurant" && <RestaurantForm values={values} />}
              {selectedType === "museum" && <MuseumForm values={values} />}
              {selectedType === "bar" && <BarForm values={values} />}
              {selectedType === "park" && <ParkForm values={values} />}
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddAddress
