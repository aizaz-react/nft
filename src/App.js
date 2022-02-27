import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Collection from "./components/collection/Collection";
import Package from "./components/package/Package";
import Newsletter from "./components/newsletter/Newsletter";
import "./App.scss";
import roundLeft from "./assets/roundleft.svg";
import roundRight from "./assets/roundright.svg";
import dotted from "./assets/dotted.svg";
import bigcircle from "./assets/bigcircle.svg";
import arrow from "./assets/arrowCircle.svg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={roundLeft} alt={roundLeft} className="roundleft" />
      <img src={roundRight} alt={roundRight} className="roundright" />
      <img src={arrow} alt={arrow} className="arrow" />
      <img src={dotted} alt={dotted} className="dotted-left" />
      <img src={dotted} alt={dotted} className="dotted-right" />

      <div style={{ flex: 1, zIndex: "999" }}>
        <Hero />
        <Collection />
        <Package />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
