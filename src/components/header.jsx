import { faHouseChimney, faPlusCircle, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Link from "next/link"
import "@fontsource/montserrat"
import DarkModeButton from "@/components/DarkModeButton"

const Header = () => (
  <header className="fixed top-0 left-0 items-center justify-between border-b-4 border-slate-00 dark:border-gray-800 shadow-md w-full h-24">
    <div className="fixed top-5 left-14 min-w-24">
      <FontAwesomeIcon icon={faMapLocationDot} size="3x" />
      <p>PlaceMap</p>
    </div>
    <div className="fixed top-5 left-36 md:left-40 min-w-24">
      <Link href="/">
        <FontAwesomeIcon icon={faHouseChimney} size="3x" />
      </Link>
    </div>
    <div className="flex-grow flex items-center justify-center">
      <div className="relative p-5 ml-20 sm:ml-0 md:ml-8 text-[6px] md:text-base sm:text-lg font-montserrat">
        <input
          type="search"
          placeholder="Rechercher un lieu..."
          className="border-2 border-slate-00 rounded-md p-2 mt-5 sm:mt-0 text-black dark:text-white dark:bg-gray-800 w-full"
        />
      </div>
    </div>
    <div className="fixed top-5 md:right-8 right-4 min-w-24">
      <Link href="/add_address">
        <FontAwesomeIcon icon={faPlusCircle} size="3x" />
      </Link>
    </div>
    <div className="fixed top-5 right-4">
      <DarkModeButton />
    </div>
  </header>
)

export default Header
