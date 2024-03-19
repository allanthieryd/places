import React, { useState } from "react"
import Stars from "@/components/Stars"

const RestaurantInfos = () => {
    const [priceRange, setpriceRange] =  useState(50)
    const [isRestaurantsChecked, setRestaurantsChecked] = useState(false)
    const [selectedCuisine, setSelectedCuisine] = useState("")
    const handlePriceRangeChange = (newPriceRange) => {
        setpriceRange(newPriceRange)
      }
    const handleCheckboxChange = () => {
        setRestaurantsChecked(!isRestaurantsChecked)
      }

  return (
    <main>
        <div className="flex flex-col items-start">
                  <label className="text-[9px] sm:text-[18px]">
                  <input type="checkbox" name="checked" value="restaurants" className="w-4 h-4"
                    checked={isRestaurantsChecked}
                    onChange={handleCheckboxChange}
                  />
                  <br />
                  Restaurants
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
                <div><label>Nombre d'étoiles</label><Stars className="text-xs" /></div><br></br>
                <div>
                  <label className="mr-2">Prix moyen</label>
                  <input
                type="range" id="priceRange" name="priceRange" min="0" max="100"
                value={priceRange} step="10"
                    onChange={(e) => {
                      handlePriceRangeChange(e.target.value)
                    }}                     
                  /><br></br>
                  <label htmlFor="priceRange">{priceRange} euros</label>
                </div>
              </>
              )}
        </div>
    </main>
  )
}

export default RestaurantInfos
