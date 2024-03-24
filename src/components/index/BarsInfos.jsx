import React, { useState } from "react"

const BarInfos = () => {
  const [averagePrice, setaveragePrice] =  useState(1)
  const [isBarsChecked, setBarsChecked] = useState(false)
  const [selectedBarType, setSelectedBarType] = useState("")
  const handleAveragePriceChange = (newaveragePrice) => {
    setaveragePrice(newaveragePrice)
  }
  const handleCheckboxChange = () => {
    setBarsChecked(!isBarsChecked)
  }

  return (
    <main>
      <div className="flex flex-col items-start">
        <label className="text-[9px] sm:text-[18px]">
          <input type="checkbox" name="checked" value="bars"
            className="w-4 h-4" checked={isBarsChecked}
            onChange={handleCheckboxChange}
          />
          <br />Bars</label><br />
        {isBarsChecked && (
          <>
            <div>
              <label>Type de bar</label>
              <select
                name="barType"
                value={selectedBarType}
                onChange={(e) => setSelectedBarType(e.target.value)}
                className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                <option value="wineBar">Bar à vin</option>
                <option value="cocktailBar">Bar à cocktail</option>
                <option value="pub">Pub</option>
              </select>
            </div>
            <div>
              <label>Prix moyen</label>
              <input
                type="range" name="averagePrice" min="1" max="5"
                value={averagePrice} step="1" className="dark:bg-gray-700 ml-5 mb-2"
                  onChange={(e) => {
                    handleAveragePriceChange(e.target.value)}}
              /><br></br>
              <span>{averagePrice}</span>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default BarInfos
