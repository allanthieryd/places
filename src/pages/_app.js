import { useState, useRef, useEffect } from "react";
import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/Button";
import home_icon from "../images/home_icon.png";
import add_icon from "../images/add_icon.png";
import filter_icon from "../images/filter_icon.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field,Formik,Form } from "formik"



const App = ({ Component, pageProps }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseMenu);
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, []);

  return (
    <main className="flex flex-col">
      <header className="flex justify-around border-b-4 border-slate-00 shadow-md">
        <div className="max-w-md p-4 pr-12 min-w-32 ml-72 md:ml-6 lg:ml-0">
          <a href="">
            <Image src={home_icon} width={50} height={50} alt="home icon" />
          </a>
        </div>
        <div className="ml-96 max-w-md p-4 pl-12 min-w-32">
          <a href="/addresses/edit.jsx">
            <Image src={add_icon} width={50} height={50} alt="add icon" />
          </a>
        </div>
      </header>
      <div className="ml-12 mt-4">
      <div className="">
        {/* Bouton du menu déroulant */}
        <button onClick={handleToggleMenu} className="p-2">
          <Image src={filter_icon} width={30} height={30} alt="filter icon" />
        </button>
      </div>

      {/* Menu déroulant */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="ml-50 h-1/3 w-4/12 bg-gray-200 rounded-lg shadow-lg p-4"
        >
          {/* Contenu du menu déroulant */}
          <ul className="leading-loose">
            <li>
                <p className="">Distance</p>
            </li>
            <li>
                <p className="">Types de lieux</p>
                <div className="flex justify-around text-sm sm:text-xs text-center">
                <label>
                  <input type="checkbox" name="checked" value="restaurants" class="w-4 h-4"></input><br></br>Restaurants              
                </label>
                <label>
                  <input type="checkbox" name="checked" value="restaurants" class="w-4 h-4"></input><br></br>Bars              
                </label>
                <label>
                  <input type="checkbox" name="checked" value="restaurants" class="w-4 h-4"></input><br></br>Parcs              
                </label>
                <label>
                  <input type="checkbox" name="checked" value="restaurants" class="w-4 h-4"></input><br></br>Musées              
                </label>
                </div>
            </li>
            <li>
                <p className="">Notation</p>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
            </li>
            {/* Ajoutez d'autres liens du menu ici */}
          </ul>
        </div>
        
      )}</div>

      <div className="flex justify-between mt-12 ml-6">
        <table className="w-1/2 border">
          {/* ... contenu du tableau */}
        </table>
      </div>

      <section className="flex justify-center">
        <div className="max-w-md w-full p-10">
          <Component {...pageProps} />
        </div>
      </section>
    </main>
  );
};

export default App;
