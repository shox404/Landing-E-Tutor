import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Path from "./Components/Path";
import Home from "./Pages/Home";
import Status from "./Components/Status";
import About from "./Pages/About";
import Steps from "./Pages/Steps";
import Rules from "./Pages/Rules";
import Assistant from "./Pages/Assistant";
import Eduguards from "./Pages/Eduguards";
import Footer from "./Pages/Footer";

export default function App() {
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <button className="menu-btn" onClick={() => setMenu(!menu)}>
        {menu ? "≡" : "⨉"}
      </button>
      <Navbar menu={menu} setMenu={setMenu} />
      <Path />
      <Home />
      <Status />
      <About />
      <Steps />
      <Rules />
      <Assistant />
      <Eduguards />
      <Footer />
    </div>
  );
}
