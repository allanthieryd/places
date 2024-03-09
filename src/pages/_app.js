import "@/styles/globals.css";
import Header from "@/components/Header";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};

export default App;