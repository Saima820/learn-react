import { Route, Routes } from "react-router-dom";

import Home from "./page/home/main";
import AboutUs from "./page/About Us/main";
import Signin from "./page/Signup/main";
import ContactUs from "./page/Contact Us/main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
