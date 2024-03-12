import "@/styles/globals.css";
import Header from "@/components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white h-screen overflow-hidden">
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;