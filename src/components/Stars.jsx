import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const Stars = () => {
    const [rating, setRating] = useState(0)
    const handleRatingChange = (newRating) => {
    setRating(newRating)
    }

    return (
        <main>
            <div className="w-42 flex gap-1 flex-wrap">
                  {[1, 2, 3].map((index) => (
                    <FontAwesomeIcon
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
    )}
export default Stars
