import React from "react"
import { Field, ErrorMessage } from "formik"
import PlaceInfos from "./PlaceInfos"
import Stars from "@/components/Stars"

const RestaurantForm = ({ values }) => (
  <>
    <br />
    <PlaceInfos />
    <div>
      <label>Type de cuisine</label>
      <Field
        as="select"
        name="cuisineType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="frenchCuisine">Française</option>
        <option value="italianCuisine">Italienne</option>
        <option value="indianCuisine">Indienne</option>
      </Field>
    </div>

    <div>
      <label>Nombre d'étoiles</label>
      <Stars />
    </div>

    <div>
      <label>Prix moyen</label>
      <Field
        type="range"
        name="averagePrice"
        min="0"
        max="100"
        step="10"
        className="dark:bg-gray-700 ml-5 mb-2"
      />
      <span> {values.averagePrice} euros</span>
      <ErrorMessage name="averagePrice" component="div" />
    </div>
  </>
)

export default RestaurantForm
