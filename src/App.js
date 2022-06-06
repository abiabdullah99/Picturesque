import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Gallery from "./components/Gallery/Gallery";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import Singup from "./components/SingUp/Singup";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Cheakbox from "./components/Cheakbox/Cheakbox";
import RequireAuth from './components/RequireAuth/RequireAuth'
import ThankYouMessage from "./components/Cheakbox/ThankYouMessage";
import NotFound from "./components/NotFound/NotFound";
const App = () => {
  AOS.init();
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/gallery"
          element={
            <RequireAuth>
              <Gallery></Gallery>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<Singup></Singup>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
        <Route
          path="/cheakbox"
          element={
            <RequireAuth>
              <Cheakbox></Cheakbox>
            </RequireAuth>
          }
        ></Route>
        <Route path="/thank" element={<ThankYouMessage></ThankYouMessage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
