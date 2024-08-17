import React from "react";
import { Block } from "./style";

export default function Rules() {
  return (
    <Block>
      <div className="text">
        <h1>Instructor rules & regulations</h1>
        <p>
          Sed auctor, nisl non elementum ornare, turpis orci consequat arcu, at
          iaculis quam leo nec libero. Aenean mollis turpis velit, id laoreet
          sem luctus in. Etiam et egestas lorem.
        </p>
        <div className="list">
          <ul>
            <li>Sed ullamcorper libero quis condimentum pellentesque.</li>
            <li>Nam leo tortor, tempus et felis non.</li>
            <li>
              Porttitor faucibus erat. Integer eget purus non massa ultricies
              pretium ac sed eros.
            </li>
            <li>
              Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet
              turpi.
            </li>
          </ul>
        </div>
      </div>
      <img src={require("../../Assets/Photos/Instuctor.png")} />
    </Block>
  );
}
