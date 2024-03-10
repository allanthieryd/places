import React, { useState } from "react";

const ParcsInfos = () => {
  const [isParksChecked, setParksChecked] = useState(false);
  const [selectedParkType, setSelectedParkType] = useState("");
  const [isParkPublic, setParkPublic] = useState(false);
  const [isParkFreeOrPaid, setParkFreeOrPaid] = useState(false);
  const [parkPrice, setParkPrice] = useState(0);

  const handleCheckboxChange = () => {
    setParksChecked(!isParksChecked);
  };

  const handleParkPublicChange = () => {
    setParkPublic(!isParkPublic);
  };

  const handleParkFreeOrPaidChange = () => {
    setParkFreeOrPaid(!isParkFreeOrPaid);
  };

  return (
    <main>
      <div className="flex flex-col items-start">
        <label className="text-[9px] sm:text-[18px]">
          <input
            type="checkbox"
            name="checked"
            value="parks"
            className="w-4 h-4"
            checked={isParksChecked}
            onChange={handleCheckboxChange}
          />
          <br />
          Parcs
        </label>
        <br />

        {isParksChecked && (
          <>
            <div>
              <label>Type de parc</label>
              <select
                name="parkType"
                value={selectedParkType}
                onChange={(e) => setSelectedParkType(e.target.value)}
                className="dark:bg-gray-700 ml-5 mb-2 border dark:border-0"
              >
                <option value="floralPark">Parc floral</option>
                <option value="forestPark">Parc forestier</option>
                <option value="childrenPark">Parc pour enfants</option>
              </select>
            </div>

            <div>
              <label className="mr-5 mb-2">Public</label>
              <input
                type="checkbox"
                name="parkPublicOrPrivate"
                checked={isParkPublic}
                onChange={handleParkPublicChange}
                className="w-5 h-4"
              />
            </div>

            <div className="mt-2">
              <label className="mr-5 mb-2">Payant (ne pas cocher si gratuit)</label>
              <input
                type="checkbox"
                name="parkFreeOrPaid"
                checked={isParkFreeOrPaid}
                onChange={handleParkFreeOrPaidChange}
                className="w-5 h-4"
              />
            </div>

            {isParkFreeOrPaid && (
              <div className="mt-2">
                <label>Prix</label>
                <input
                  type="number"
                  name="parkPrice"
                  value={parkPrice}
                  onChange={(e) => setParkPrice(e.target.value)}
                  className="dark:bg-gray-700 ml-5 mb-2"
                />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default ParcsInfos;
