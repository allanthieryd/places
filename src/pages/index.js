import Link from "next/link"
import React from "react"
import { Button } from "@/components/Button"

const HomePage = () => (
  <main className="dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center h-screen">
    <h1 className="mb-8 text-xl lg:text-2xl">Bienvenue sur PlaceMap</h1>
    <div className="text-sm md:text-lg lg:text-2xl">
      <Link href="/addresses">
        <Button>Cliquez ici pour trouver les adresses</Button>
      </Link>
    </div>
  </main>
)

export default HomePage
