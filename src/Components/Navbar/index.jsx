import React, { useEffect, useState } from "react";
import { Block, BottomNavbar, TopNavbar } from "./style";

export default function Navbar({ menu, setMenu }) {
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(window.location.hash);
  }, []);

  const link = (path, name) => {
    return (
      <a
        href={path}
        className={activePage === path ? "active" : ""}
        onClick={() => {
          setActivePage(path);
          setMenu();
        }}
      >
        {name}
      </a>
    );
  };

  return (
    <Block x={menu ? "0" : "-100%"}>
      <TopNavbar>
        <div>
          {link("#", "Home")}
          {link("#courses", "Courses")}
          {link("#about", "About")}
          {link("#contact", "Contact")}
          {link("#instructor", "Become an Instructor")}
        </div>
        <span>
          <select>
            <option value="usd">USD</option>
          </select>
          <select>
            <option value="en">English</option>
            <option value="ru">Russian</option>
          </select>
        </span>
      </TopNavbar>
      <BottomNavbar>
        <div>
          <span>
            <img src={require("../../Assets/Logo.png")} />
            <h1>E-tutor</h1>
          </span>
          <select>
            <option value="Browse">Browse</option>
          </select>
          <input type="search" placeholder="What do you want learn..." />
        </div>
        <div>
          <span>
            <img src={require("../../Assets/Icons/Bell.png")} />
            <img src={require("../../Assets/Icons/Heart.png")} />
            <img src={require("../../Assets/Icons/ShoppingCartSimple.png")} />
          </span>
          <button className="btn">Create Account</button>
          <button className="signInBtn">Sign In</button>
        </div>
      </BottomNavbar>
    </Block>
  );
}
