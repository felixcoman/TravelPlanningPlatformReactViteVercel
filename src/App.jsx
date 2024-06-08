import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";
import Intinerary from "./components/Intinerary/Intinerary";
import { useReducer } from "react";
import { IntineraryContext } from "./global/context";
import { initialStateIntinerary, intineraryReducer } from "./global/reducer";

function App() {
  const [stateGlobalIntinerary, dispatchIntinerary] = useReducer(
    intineraryReducer,
    initialStateIntinerary
  );

  const intineraryContextValue = {
    stateGlobalIntinerary,
    dispatchIntinerary,
  };

  return (
    <>
      <IntineraryContext.Provider value={intineraryContextValue}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/explore/:country/:city" element={<Explore />}></Route>
          <Route path="/intinerary" element={<Intinerary />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </IntineraryContext.Provider>
    </>
  );
}

export default App;
