import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/my-travel" element={<div>travel</div>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/home/:path" element={<div>SUCCES!</div>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
