import React from "react"
import { Button } from "@/components/Button"

const TypeSelector = ({ handleTypeSelect }) => (
  <div className="flex flex-wrap justify-center text-sm lg:text-base">
    <div className="space-x-4 justify-center">
      <Button type="Button" onClick={() => handleTypeSelect("Restaurant")}>
        Restaurant
      </Button>
      <Button type="Button" onClick={() => handleTypeSelect("Musée")}>
        Musée
      </Button>
    </div>
    <div className="ml-4 space-x-4 justify-center">
      <Button type="Button" onClick={() => handleTypeSelect("Bar")}>
        Bar
      </Button>
      <Button type="Button" onClick={() => handleTypeSelect("Parc")}>
        Parc
      </Button>
    </div>
  </div>
)

export default TypeSelector
