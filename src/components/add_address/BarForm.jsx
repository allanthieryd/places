import React from "react"
import { Field, ErrorMessage } from "formik"

const BarForm = ({ values }) => (
  <>
    <br />
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

export default BarForm
