import React, { useState } from "react"
import { Formik, Form } from "formik"
import TypeSelector from "@/components/add_address/TypeSelector"
import RestaurantForm from "@/components/add_address/RestaurantForm"
import MuseumForm from "@/components/add_address/MuseumForm"
import BarForm from "@/components/add_address/BarForm"
import ParkForm from "@/components/add_address/ParkForm"
import SubmitButton from "@/components/add_address/SubmitButton"

const AddAddress = () => {
  const [selectedType, setSelectedType] = useState(null)
  const handleTypeSelect = (type) => {
    setSelectedType(type)
  }
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
  }

  return (
    <div className="flex justify-center mt-32 pt-5">
      <div className="px-36 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">
          Veuillez entrer un lieu
        </h1>
        <br />
        <div className="flex flex-wrap space-x-4 justify-center">
          <TypeSelector handleTypeSelect={handleTypeSelect} />
        </div>

        <Formik
          initialValues={{cuisineType: "", starRating: 1, priceRange: 50,
            artStyle: "", artType: "", museumFreeOrPaid: false,
            museumPrice: 1, barType: "", barPriceRange: 1,
            parkType: "", parkPublicOrPrivate: false,
            parkFreeOrPaid: false, parkPrice: 1,
          }}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              {selectedType === "restaurant" && <RestaurantForm values={values} />}
              {selectedType === "museum" && <MuseumForm values={values} />}
              {selectedType === "bar" && <BarForm values={values} />}
              {selectedType === "park" && <ParkForm values={values} />}

              <div className="flex justify-center mt-0 px-5 py-5">
                <SubmitButton type="submit">Submit</SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddAddress
