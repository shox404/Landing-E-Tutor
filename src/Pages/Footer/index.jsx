import React from "react";
import { Block } from "./style";

export default function Footer() {
  return (
    <Block id="contact">
      <div className="block">
        <div>
          <h1>Start teaching with us and inspire others</h1>
          <p>
            Become an instructor & start teaching with 26k certified
            instructors. Create a success story with 67.1k Students — Grow
            yourself with 71 countries.
          </p>
          <button>Register now</button>
        </div>
        <img src={require("../../Assets/Photos/Footer.png")} />
      </div>
      <div className="end">
        <div className="box">
          <div className="logo">
            <img src={require("../../Assets/Logo.png")} />
            <h1>E-tutor</h1>
          </div>
          <p className="paragraph">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <div className="socials">
            <button>
              <img src={require("../../Assets/Socials/Facebook.png")} />
            </button>
            <button>
              <img src={require("../../Assets/Socials/Instragarm.png")} />
            </button>
            <button>
              <img src={require("../../Assets/Socials/Linkedin.png")} />
            </button>
            <button>
              <img src={require("../../Assets/Socials/Twitter.png")} />
            </button>
            <button>
              <img src={require("../../Assets/Socials/Youtube.png")} />
            </button>
          </div>
        </div>
        <div className="box">
          <h3>Top 4 Category</h3>
          <p>Development</p>
          <p>Finance & Accounting</p>
          <p>Design</p>
          <p>Business</p>
        </div>
        <div className="box">
          <h3>Quick Links</h3>
          <p>About</p>
          <p>Become Instructor</p>
          <p>Contact</p>
          <p>Career</p>
        </div>
        <div className="box">
          <h3>Support</h3>
          <p>Help Center</p>
          <p>FAQs</p>
          <p>Terms & Condition</p>
          <p>Privacy Policy</p>
        </div>
        <div className="box">
          <h3>Downlaod our app</h3>
          <button className="appBtn">
            <img src={require("../../Assets/Stores/Apple.png")} />
            <div>
              <b>Download now</b>
              <h6>App Store</h6>
            </div>
          </button>
          <button className="appBtn">
            <img src={require("../../Assets/Stores/GooglePlay.png")} />
            <div>
              <b>Download now</b>
              <h6>Play Store</h6>
            </div>
          </button>
        </div>
      </div>
    </Block>
  );
}
