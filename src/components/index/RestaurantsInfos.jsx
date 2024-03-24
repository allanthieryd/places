import React, { useState } from "react"
import Stars from "@/components/Stars"

const RestaurantInfos = ({values}) => {
  const [averagePrice, setaveragePrice] =  useState(1)
    const [isRestaurantsChecked, setRestaurantsChecked] = useState(false)
    const [starRating, setStarRating] = useState(values?.starRating || 0)
    const [selectedCuisine, setSelectedCuisine] = useState("")
    const handleAveragePriceChange = (newaveragePrice) => {
      setaveragePrice(newaveragePrice)
    }
    const handleCheckboxChange = () => {
        setRestaurantsChecked(!isRestaurantsChecked)
      }
    const handleStarRatingChange = (newRating) => {
      setStarRating(newRating)
    }

  return (
    <main>
        <div className="flex flex-col items-start">
                  <label className="text-[9px] sm:text-[18px]">
                  <input type="checkbox" name="checked" value="restaurants" className="w-4 h-4"
                    checked={isRestaurantsChecked} onChange={handleCheckboxChange}/>
                  <br />Restaurants
                  </label>
                  <br></br>
              {isRestaurantsChecked && (
              <><div>
                  <label>Type de cuisine</label>
                  <select
                    name="cuisineType" value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)} className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                    <option value="frenchCuisine">Française</option>
                    <option value="italianCuisine">Italienne</option>
                    <option value="indianCuisine">Indienne</option>
                  </select>
                </div>
                <div><label>Nombre d'étoiles: {starRating}</label>
                <Stars className="text-xs" onRatingChange={handleStarRatingChange}/></div><br></br>
                <div>
                  <label className="mr-2">Prix moyen</label>
                  <input type="range" name="averagePrice" min="1" max="5"
          value={averagePrice} step="1" className="dark:bg-gray-700 ml-5 mb-2"
            onChange={(e) => {
              handleAveragePriceChange(e.target.value)}}                    
                  /><br></br>
                  <span className="ml-2">{averagePrice}</span>
                </div>
              </>
              )}
        </div>
    </main>
  )
}

export default RestaurantInfos
