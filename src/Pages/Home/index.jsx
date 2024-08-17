import React from "react";
import { Block } from "./style";

export default function Home() {
  return (
    <Block>
      <div>
        <h1>Become an Instuctor</h1>
        <p>
          Become an instructor & start teaching with 26k certified instructors.
          Create a success story with 67.1k Students — Grow yourself with 71
          countries.
        </p>
        <button>Get Started</button>
      </div>
      <img src={require("../../Assets/Photos/Home.png")} />
    </Block>
  );
}
