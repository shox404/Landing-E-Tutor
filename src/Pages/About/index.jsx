import React from "react";
import { Block } from "./style";

export default function About() {
  return (
    <Block id="about">
      <img src={require("../../Assets/Photos/About.png")} />
      <div className="text">
        <h1>Why you’ll start teaching on Eduguard</h1>
        <p>
          Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus
          non turpis scelerisque, vitae auctor arcu ornare. Cras vitae nulla a
          purus mollis venenatis.
        </p>
        <div className="list">
          <div>
            <img src={require("../../Assets/Icons/CheckCircle.png")} />
            <span>
              <h3>Tech your students as you want.</h3>
              <p>
                Morbi quis lorem non orci fermentum euismod. Nam sapien tellus,
                aliquam nec porttitor vel, pellentesque at metus.
              </p>
            </span>
          </div>
          <div>
            <img src={require("../../Assets/Icons/CheckCircle.png")} />
            <span>
              <h3>Manage your course, payment in one place</h3>
              <p>
                Morbi quis lorem non orci fermentum euismod. Nam sapien tellus,
                aliquam nec porttitor vel, pellentesque at metus.
              </p>
            </span>
          </div>
          <div>
            <img src={require("../../Assets/Icons/CheckCircle.png")} />
            <span>
              <h3>Chat with your students</h3>
              <p>
                Nullam mattis lectus ac diam egestas posuere. Praesent auctor
                massa orci, ut fermentum eros dictum id.
              </p>
            </span>
          </div>
        </div>
      </div>
    </Block>
  );
}
