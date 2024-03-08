import { faHouseChimney, faPlusCircle, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import "@fontsource/montserrat"

const addAddress = "@/pages/api/addresses.js"

const Header = () => {
  return (
    <header className="border-b-4 border-slate-00 dark:border-gray-800 shadow-md w-full h-24">
      <div className="fixed top-5 left-14 pr-10 z-10 min-w-32">
        <Link href="/">
            <FontAwesomeIcon icon={faHouseChimney} size="3x" />
        </Link>
      </div>
      <div className="flex justify-center mr-8 p-5 py-6 text-[10px] sm:text-2xl font-montserrat">
        <input
          type="text"
          placeholder="Rechercher une adresse..."
          className="border-2 border-slate-00 rounded-md p-2 mt-0 text-black w-1/3 dark:bg-gray-800 dark:text-white"
        />
      </div>
      <div className="fixed top-5 right-14 pl-10 z-10 min-w-32">
        <Link href="/add_address">
          <FontAwesomeIcon icon={faPlusCircle} size="3x" />
        </Link>
      </div>
    </header>
  );
};

export default Header;