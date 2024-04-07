import React, { useState } from "react"
import { Field, ErrorMessage } from "formik"
import Stars from "@/components/Stars"
const RestaurantForm = ({values}) => {
  const [price, setprice] = useState(values.averagePrice || 1)
  const [starRating, setStarRating] = useState(values.starRating)
  const handlepriceChange = (newprice) => {
    setprice(newprice)
  }
  const handleStarRatingChange = (newRating) => {
    setStarRating(newRating)
  }

return (
  <>
    <br />

    <div>
      <label>Type de cuisine</label>
      <Field
        as="select"
        name="cuisineType"
        className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
      >
        <option value="Française">Française</option>
        <option value="Italienne">Italienne</option>
        <option value="Indienne">Indienne</option>
        <option value="Japonaise">Japonaise</option>
      </Field>
    </div>

    <div>
      <label>Nombre d'étoiles: {starRating}</label>
      <Stars onRatingChange={handleStarRatingChange} />
    </div>

    <div>
      <label>Prix moyen </label>
      <Field
        type="range"
        name="restaurantAveragePrice"
        min="1"
        max="5"
        value={price}
        step="1"
        className="dark:bg-gray-700 ml-5 mb-2"
        onChange={(e) => {
          handlepriceChange(e.target.value)
        }}
      />
      <span className="ml-2">{price}</span>
      <ErrorMessage name="restaurantAveragePrice" component="div" />
    </div>
  </>
)
}

export default RestaurantForm
