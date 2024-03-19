import React from "react"
import { Field, ErrorMessage } from "formik"
import PlaceInfos from "./PlaceInfos"

const BarForm = ({ values }) => (
  <>
    <br />
    <PlaceInfos />
    <div>
      <label>Type de bar</label>
      <Field
        as="select"
        name="barType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="wineBar">Bar à vin</option>
        <option value="cocktailBar">Bar à cocktail</option>
        <option value="pub">Pub</option>
      </Field>
    </div>

    <div>
      <label>Prix moyen</label>
      <Field
        type="range"
        name="barPriceRange"
        min="0"
        max="100"
        step="10"
        className="dark:bg-gray-700 ml-5 mb-2"
      />
      <span> {values.barPriceRange} euros</span>
      <ErrorMessage name="barPriceRange" component="div" />
    </div>
  </>
)

export default BarForm
