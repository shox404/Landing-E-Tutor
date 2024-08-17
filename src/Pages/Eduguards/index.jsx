import React from "react";
import { Block } from "./style";

export default function Eduguards() {
  return (
    <Block id="courses">
      <div className="text">
        <h1>20k+ Instructor created their success story with eduguard</h1>
        <p>
          Nunc euismod sapien non felis eleifend porttitor. Maecenas dictum eros
          justo, id commodo ante laoreet nec. Phasellus aliquet, orci id
          pellentesque mollis.
        </p>
        <div className="list">
          <img src={require("../../Assets/Icons/Quotes.png")} />
          <p>
            Nulla sed malesuada augue. Morbi interdum vulputate imperdiet.
            Pellentesque ullamcorper auctor ante, egestas interdum quam
            facilisis commodo. Phasellus efficitur quis ex in consectetur.
            Mauris tristique suscipit metus, a molestie dui dapibus vel.
          </p>
        </div>
        <div>
          <button>
            <img src={require("../../Assets/Icons/Left.png")} />
          </button>
          <button className="active">
            <img src={require("../../Assets/Icons/Left.png")} />
          </button>
        </div>
      </div>
      <img
        src={require("../../Assets/Photos/Eduguards.png")}
        className="image"
      />
    </Block>
  );
}
