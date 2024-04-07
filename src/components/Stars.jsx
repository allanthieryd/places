import React, { useState } from "react"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Stars = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0)
  const handleRatingChange = (newRating) => {
    if (newRating === 1 && rating === 1) {
      setRating(0)
      onRatingChange(0)
    } else {
      setRating(newRating)
      onRatingChange(newRating)
    }
  }

  return (
    <main>
      <div>
        {[1, 2, 3].map((index) => (
          <FontAwesomeIcon
            name="starRating"
            value="rating"
            key={index}
            icon={faStar}
            className={`text-[19px] sm:text-2xl cursor-pointer ${
              index <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => handleRatingChange(index)}
          />
        ))}
      </div>
    </main>
  )
}

export default Stars
