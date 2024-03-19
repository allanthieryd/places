/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import { Formik, Form } from "formik"
import { Button } from "@/components/Button"
import PlaceInfos from "@/components/index/PlaceInfos"

const EditAddress = () => {
  const initialValues = {
    cuisineType: "",
    starRating: 1,
    priceRange: useState(50),
    artStyle: "",
    artType: "",
    museumFreeOrPaid: false,
    museumPrice: 1,
    barType: "",
    barPriceRange: 1,
    parkType: "",
    parkPublicOrPrivate: false,
    parkFreeOrPaid: false,
    parkPrice: 1,
  }
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="px-36 bg-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:text-white">
        <h1 className="text-2xl flex justify-center">
          Modifier une adresse
        </h1>
        <br></br>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
                <PlaceInfos/>       

              <div className="flex justify-center mt-10 px-5 py-5">
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
