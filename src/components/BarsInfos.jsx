import React, { useState } from "react"

const BarInfos = () => {
  const [priceRange, setPriceRange] = useState(50)
  const [isBarsChecked, setBarsChecked] = useState(false)
  const [selectedBarType, setSelectedBarType] = useState("")
  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange)
  }
  const handleCheckboxChange = () => {
    setBarsChecked(!isBarsChecked)
  }

  return (
    <main>
      <div className="flex flex-col items-start">
        <label className="text-[9px] sm:text-[18px]">
          <input
            type="checkbox"
            name="checked"
            value="bars"
            className="w-4 h-4"
            checked={isBarsChecked}
            onChange={handleCheckboxChange}
          />
          <br />
          Bars
        </label>
        <br />

        {isBarsChecked && (
          <>
            <div>
              <label>Type de bar</label>
              <select
                name="barType"
                value={selectedBarType}
                onChange={(e) => setSelectedBarType(e.target.value)}
                className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
              >
                <option value="wineBar">Bar à vin</option>
                <option value="cocktailBar">Bar à cocktail</option>
                <option value="pub">Pub</option>
              </select>
            </div>

            <div>
              <label>Prix moyen</label>
              <input
                type="range"
                name="priceRange"
                min="0"
                max="100"
                step="10"
                className="dark:bg-gray-700 ml-5 mb-2"
                onChange={(e) => {
                  handlePriceRangeChange(e.target.value)
                }}
              />
              <br />
              <label htmlFor="priceRange">{priceRange} euros</label>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default BarInfos
