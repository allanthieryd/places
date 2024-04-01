import { faHouseChimney, faPlusCircle, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Link from "next/link"
import "@fontsource/montserrat"
import DarkModeButton from "@/components/DarkModeButton"

const Header = ({ onSearch }) => (
  <header className="fixed top-0 left-0 items-center justify-between border-b-4 border-slate-00 dark:border-gray-800 bg-white dark:bg-gray-900 w-full h-32">
    <div className="fixed top-8 left-14 min-w-24">
    <Link href="/">
      <FontAwesomeIcon icon={faMapLocationDot} size="3x" />
      <p>PlaceMap</p>
    </Link>
    </div>
    <div className="fixed top-8 left-36 md:left-40 min-w-24">
      <Link href="/addresses">
        <FontAwesomeIcon icon={faHouseChimney} size="3x" />
      </Link>
    </div>
    <div className="fixed top-8 md:right-8 right-4 min-w-24">
      <Link href="/add_address">
        <FontAwesomeIcon icon={faPlusCircle} size="3x" />
      </Link>
    </div>
    <div className="fixed top-8 right-4">
      <DarkModeButton />
    </div>
    {onSearch && (
        <div className="fixed top-8 right-36 md:right-20 min-w-24">
          <p>Résultats pour: {onSearch}</p>
        </div>
      )}
  </header>
  )

export default Header
