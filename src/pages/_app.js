import "@/styles/globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import home_icon from "../images/home_icon.png";
import add_icon from "../images/add_icon.png";

const App = ({ Component, pageProps }) => (
  <main className="flex flex-col">
    <header className="flex justify-center border-b-4 border-slate-200 shadow-md">
      <div className="max-w-md p-4 min-w-24">
        <a href="">
          <Image src={home_icon} width={50} height={50} alt="home icon" />
        </a>
      </div>
      <div className="ml-96 max-w-md p-4 min-w-24">
        <a href="">
          <Image src={add_icon} width={50} height={50} alt="add icon" />
        </a>
      </div>
    </header>
    <div className="flex justify-between mt-12 ml-6">
      <table className="w-1/2 border">
        <thead>
          <tr>
            <th className="p-3 bg-stone-200" />
            <th className="p-3 bg-stone-200">Description</th>
            <th className="p-3 bg-stone-200">Category</th>
          </tr>
        </thead>
        <tbody className="even:bg-stone-100">
          <tr className="even:bg-stone-100">
            <td className="p-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <section className="flex justify-center">
      <div className="max-w-md w-full p-10">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
);

export default App;
