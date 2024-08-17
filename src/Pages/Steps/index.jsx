import React from "react";
import { Block } from "./style";

export default function Steps() {
  return (
    <Block id="instructor">
      <h1>How you'll become successful instructor</h1>
      <div className="cards">
        <div className="card">
          <img src={require("../../Assets/Steps/Icon1.png")} />
          <h2>1. Apply to become instructor.</h2>
          <p>
            Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh
            consequat eu.
          </p>
        </div>
        <div className="card">
          <img src={require("../../Assets/Steps/Icon2.png")} />
          <h2>2. Setup & edit your profile.</h2>
          <p>
            Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget
            accumsan ullamcorper.
          </p>
        </div>
        <div className="card">
          <img src={require("../../Assets/Steps/Icon3.png")} />
          <h2>3. Create your new course</h2>
          <p>
            Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus
            non turpis scelerisque.
          </p>
        </div>
        <div className="card">
          <img src={require("../../Assets/Steps/Icon4.png")} />
          <h2>4. Start teaching & earning</h2>
          <p>
            Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus
            non turpis scelerisque.
          </p>
        </div>
      </div>
    </Block>
  );
}
