import React from "react"
import { Button } from "@/components/Button"

const TypeSelector = ({ handleTypeSelect }) => (
    <div className="flex flex-wrap space-x-4 justify-center">
      <Button type="Button" onClick={() => handleTypeSelect("restaurant")}>
        Restaurant
      </Button>
      <Button type="Button" onClick={() => handleTypeSelect("museum")}>
        Musée
      </Button>
      <Button type="Button" onClick={() => handleTypeSelect("bar")}>
        Bar
      </Button>
      <Button type="Button" onClick={() => handleTypeSelect("park")}>
        Parc
      </Button>
    </div>
  )

export default TypeSelector
