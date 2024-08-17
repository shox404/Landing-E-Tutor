import React from "react";
import { Block } from "./style";

export default function Assistant() {
  return (
    <Block>
      <img src={require("../../Assets/Photos/Assistant.png")} className="image"/>
      <div className="text">
        <h1>Don’t worry we’re always here to help you</h1>
        <p className="info">
          Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus
          nec augue malesuada, sagittis ligula vel, faucibus metus. Nam viverra
          metus eget nunc dignissim.
        </p>
        <div className="list">
          <div>
            <img src={require("../../Assets/Icons/ArrowRight.png")} />
            <p>
              Sed nec dapibus orci integer nisl turpis, eleifend sit amet
              aliquam vel.
            </p>
          </div>
          <div>
            <img src={require("../../Assets/Icons/ArrowRight.png")} />
            <p>
              Those who are looking to reboot their work life and try a new
              profession that.
            </p>
          </div>
          <div>
            <img src={require("../../Assets/Icons/ArrowRight.png")} />
            <p>Nunc auctor consequat lorem, in posuere enim hendrerit sed.</p>
          </div>
          <div>
            <img src={require("../../Assets/Icons/ArrowRight.png")} />
            <p>Duis ornare enim ullamcorper congue.</p>
          </div>
        </div>
        <div className="line">
          <img src={require("../../Assets/Icons/Email.png")} />
          <div>
            <p>Email us, anytime anywhere</p>
            <h3>help.eduguard@gamil.com</h3>
          </div>
        </div>
      </div>
    </Block>
  );
}
