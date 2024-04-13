import { faHouseChimney, faPlusCircle, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Link from "next/link"
import "@fontsource/montserrat"
import DarkModeButton from "@/components/DarkModeButton"

const Header = () => (
  <header className="fixed top-0 left-0 items-center justify-between border-b-4 border-slate-00 dark:border-gray-800 bg-white dark:bg-gray-900 w-full h-32">
    <div className="fixed top-10 left-14 min-w-24">
    <Link href="/">
      <FontAwesomeIcon icon={faMapLocationDot} className="text-3xl sm:text-5xl" />
      <p className="text-xs sm:text-base">PlaceMap</p>
    </Link>
    </div>
    <div className="fixed top-10 left-28 sm:left-40 min-w-24">
      <Link href="/addresses">
        <FontAwesomeIcon icon={faHouseChimney} className="text-3xl sm:text-5xl" />
      </Link>
    </div>
    <div className="fixed top-10 right-2 sm:right-12 min-w-24">
      <Link href="/add_address">
        <FontAwesomeIcon icon={faPlusCircle} className="text-3xl sm:text-5xl" />
      </Link>
    </div>
    <div className="fixed top-9 right-4">
      <DarkModeButton />
    </div>
  </header>
  )

export default Header
