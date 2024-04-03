import React, { useState } from "react"
import { Field, ErrorMessage } from "formik"

const BarForm = ({ values }) => {
  const [price, setPrice] = useState(values.averagePrice)
  const handlePriceChange = (newPrice) => {
    setPrice(newPrice)
  }

  return (
    <>
      <br />
      <div>
        <label>Type de bar</label>
        <Field
          as="select"
          name="barType"
          className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
        >
          <option value="Bar à vin">Bar à vin</option>
          <option value="Bar à cocktail">Bar à cocktail</option>
          <option value="Pub">Pub</option>
        </Field>
        <ErrorMessage name="barType" component="div" />
      </div>

      <div>
        <label>Prix moyen </label>
        <Field
          type="range"
          name="averagePrice"
          min="1"
          max="5"
          value={price}
          step="1"
          className="dark:bg-gray-700 ml-5 mb-2"
          onChange={(e) => {
            handlePriceChange(e.target.value)
          }}
        />
        <span className="ml-2">{price}</span>
        <ErrorMessage name="averagePrice" component="div" />
      </div>
    </>
  )
}

export default BarForm
