import React, { useState } from "react"

const MuseumsInfos = () => {
  const [isMuseumChecked, setMuseumChecked] = useState(false)
  const [selectedArtStyle, setSelectedArtStyle] = useState("")
  const [selectedArtType, setSelectedArtType] = useState("")
  const [isMuseumPaid, setMuseumPaid] = useState(false)
  const [museumPrice, setMuseumPrice] = useState(0)
  const handleCheckboxChange = () => {
    setMuseumChecked(!isMuseumChecked)
  }
  const handleMuseumPaidChange = () => {
    setMuseumPaid(!isMuseumPaid)
  }

  return (
    <main>
      <div className="flex flex-col items-start">
        <label className="text-[9px] sm:text-[18px]">
          <input type="checkbox" name="checked" value="museum" className="w-4 h-4"
            checked={isMuseumChecked} onChange={handleCheckboxChange}/><br />Musées
        </label><br />
        {isMuseumChecked && (
          <>
            <div><label>Courant artistique</label>
              <select name="artStyle" value={selectedArtStyle}
                onChange={(e) => setSelectedArtStyle(e.target.value)}
                className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                <option value="modernArt">Art moderne</option>
                <option value="abstractArt">Art abstrait</option>
              </select>
            </div>
            <div>
              <label>Type d'art</label>
              <select name="artType" value={selectedArtType}
                onChange={(e) => setSelectedArtType(e.target.value)}
                className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0">
                <option value="sculpture">Sculpture</option>
                <option value="peinture">Peinture</option>
              </select>
            </div>
            <div>
              <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
              <input type="checkbox" name="museumFreeOrPaid" checked={isMuseumPaid}
                onChange={handleMuseumPaidChange} className="w-5 h-4"/>
            </div>
            {isMuseumPaid && (<div className="mt-2"><label>Prix</label>
                <input type="number" name="museumPrice" value={museumPrice}
                  onChange={(e) => setMuseumPrice(e.target.value)}
                  className="dark:bg-gray-700 ml-5 mb-2"/></div>)}
          </>)}
      </div>
    </main>)}

export default MuseumsInfos
