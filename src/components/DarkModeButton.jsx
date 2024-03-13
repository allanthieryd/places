import { useState, useEffect } from "react"

const DarkModeButton = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      className="mt-0.5 ml-auto text-4xl"
      onClick={handleThemeSwitch}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "🌑" : "☀️"}
    </button>
  )
}

export default DarkModeButton
