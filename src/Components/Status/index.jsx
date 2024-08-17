import React from "react";
import { Block } from "./style";

export default function Status() {
  return (
    <Block>
      <div>
        <img src={require("../../Assets/Icons/Users.png")} />
        <span>
          <h2>67.1k</h2>
          <p>Students</p>
        </span>
      </div>
      <div>
        <img src={require("../../Assets/Icons/Notebook.png")} />
        <span>
          <h2>26k</h2>
          <p>Certified Instructor</p>
        </span>
      </div>
      <div>
        <img src={require("../../Assets/Icons/GlobeHemisphereWest.png")} />
        <span>
          <h2>72</h2>
          <p>Country Language</p>
        </span>
      </div>
      <div>
        <img src={require("../../Assets/Icons/CircleWavyCheck.png")} />
        <span>
          <h2>99.9%</h2>
          <p>Success Rate</p>
        </span>
      </div>
      <div>
        <img src={require("../../Assets/Icons/Stack.png")} />
        <span>
          <h2>57</h2>
          <p>Trusted Companies</p>
        </span>
      </div>
    </Block>
  );
}
