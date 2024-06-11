import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Intinerary from "./components/Intinerary/Intinerary";
import CitiesRegions from "./components/MainHome/CitiesRegions/CitiesRegions";
import MyChoices from "./components/MyChoices/MyChoices";
import MyTravelCity from "./components/MyTravelCity/MyTravelCity";
import MyTravelRegion from "./components/MyTravelRegion/MyTravelRegion";
import NavBar from "./components/Navbar/Navbar";
import { ChoiceContext } from "./global/choice/context";
import { choiceReducer, initialStateChoice } from "./global/choice/reducer";
import { IntineraryContext } from "./global/intinerary/context";
import {
  initialStateIntinerary,
  intineraryReducer,
} from "./global/intinerary/reducer";

function App() {
  const [stateGlobalIntinerary, dispatchIntinerary] = useReducer(
    intineraryReducer,
    initialStateIntinerary
  );

  const [stateGlobalChoice, dispatchChoice] = useReducer(
    choiceReducer,
    initialStateChoice
  );

  const intineraryContextValue = {
    stateGlobalIntinerary,
    dispatchIntinerary,
  };

  const choiceContextValue = {
    stateGlobalChoice,
    dispatchChoice,
  };

  return (
    <>
      <ChoiceContext.Provider value={choiceContextValue}>
        <IntineraryContext.Provider value={intineraryContextValue}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/explore/:country/:city" element={<Explore />}></Route>
            <Route path="/intinerary" element={<Intinerary />}></Route>
            <Route
              path="/city-region/:country/"
              element={<CitiesRegions />}
            ></Route>
            <Route
              path="/my-travel1/:country/:city"
              element={<MyTravelCity />}
            ></Route>
            <Route
              path="/my-travel2/:country/:region"
              element={<MyTravelRegion />}
            ></Route>
            <Route path="/my-choices" element={<MyChoices />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </IntineraryContext.Provider>
      </ChoiceContext.Provider>
    </>
  );
}

export default App;
