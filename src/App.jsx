import "bootstrap-icons/font/bootstrap-icons.css";
import { useReducer, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Accommodation from "./components/Accommodation/Accommodation";
import Account from "./components/Account/Account";
import Contact from "./components/Contact/Contact";
import Explore from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Itinerary from "./components/Itinerary/Itinerary";
import CitiesRegions from "./components/MainHome/CitiesRegions/CitiesRegions";
import { MainSection } from "./components/MainSection/MainSection.style";
import MyChoices from "./components/MyChoices/MyChoices";
import MyTravelCity from "./components/MyTravelCity/MyTravelCity";
import MyTravelRegion from "./components/MyTravelRegion/MyTravelRegion";
import NavBar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import { ChoiceContext } from "./global/choice/context";
import { choiceReducer, initialStateChoice } from "./global/choice/reducer";
import { ItineraryContext } from "./global/itinerary/context";
import {
  initialStateItinerary,
  itineraryReducer,
} from "./global/itinerary/reducer";
import { ToastProvider } from "./global/toast/ToastContext";
import { UserProvider } from "./global/user/UserContext";

function App() {
  const [stateGlobalItinerary, dispatchItinerary] = useReducer(
    itineraryReducer,
    initialStateItinerary
  );
  const [stateGlobalChoice, dispatchChoice] = useReducer(
    choiceReducer,
    initialStateChoice
  );
  const itineraryContextValue = {
    stateGlobalItinerary,
    dispatchItinerary,
  };
  const choiceContextValue = {
    stateGlobalChoice,
    dispatchChoice,
  };
  // states for navbar and footer height
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);

  return (
    <ToastProvider>
      <ChoiceContext.Provider value={choiceContextValue}>
        <ItineraryContext.Provider value={itineraryContextValue}>
          <UserProvider>
            <NavBar
              onHeightChange={setNavbarHeight}
              navbarheight={navbarHeight}
            />
            <MainSection
              loc="MainSection"
              navbarheight={navbarHeight}
              footerheight={footerHeight}
            >
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route
                  path="/city-region/:country/:id"
                  element={<CitiesRegions />}
                ></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route
                  path="/my-travel1/:country/:city/:id"
                  element={<MyTravelCity />}
                ></Route>
                <Route
                  path="/my-travel2/:country/:region/:id"
                  element={<MyTravelRegion />}
                ></Route>
                <Route
                  path="/explore/:country/:city"
                  element={<Explore />}
                ></Route>
                <Route path="/users/:id" element={<Users />} />
                <Route path="/itinerary" element={<Itinerary />}></Route>
                <Route path="/my-choices" element={<MyChoices />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/accommodation" element={<Accommodation />} />
              </Routes>
            </MainSection>
            <Footer onHeightChange={setFooterHeight} />
          </UserProvider>
        </ItineraryContext.Provider>
      </ChoiceContext.Provider>
    </ToastProvider>
  );
}

export default App;
