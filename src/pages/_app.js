import "@/styles/globals.css"
import Header from "@/components/Header"

const App = ({ Component, pageProps }) => (
    <div className="dark:bg-gray-900 dark:text-white h-dvh">
      <Header />
      <Component {...pageProps} />
    </div>
  )

export default App
