import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  background: #1d2026;
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    gap: 80px;
    box-shadow: 0px -1px 0px 0px #363b4780 inset;
    div {
      width: 40%;
      padding: 10px;
      h1 {
        color: #ffffff;
        font-size: 42px;
      }
      p {
        color: #b7bac7;
        margin-top: 15px;
        font-size: 18px;
      }
      button {
        height: 40px;
        border-radius: 1px;
        outline: none;
        border: none;
        padding: 0 30px;
        color: #fff;
        margin-top: 25px;
        background: #ff6636;
        cursor: pointer;
      }
    }
    img {
      width: 40%;
    }
  }
  .end {
    padding: 40px 130px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-shadow: 0px -1px 0px 0px #363b4780 inset;
    .box {
      .logo {
        color: white;
        display: flex;
        align-items: center;
        h1 {
          margin-left: 10px;
        }
      }
      h3 {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        text-transform: uppercase;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: #8c94a3;
        margin: 20px 0;
        position: relative;
        cursor: pointer;
        &:hover:before {
          content: "";
          position: absolute;
          border-radius: 1.5px;
          bottom: -4px;
          height: 3px;
          width: 0%;
          background: #ff6636;
          animation: link 0.5s linear forwards;
          @keyframes link {
            100% {
              width: 100%;
            }
          }
        }
      }
      .paragraph {
        width: 300px;
      }
      .socials {
        font-size: 14px;
        font-weight: 400;
        color: #8c94a3;
        display: flex;
        gap: 10px;
        button {
          width: 40px;
          height: 40px;
          background: #363b4766;
          outline: none;
          border: none;
          transition: 0.1s;
          cursor: pointer;
        }
        button:active {
          background: #ff6636;
          box-shadow: 0px 6px 20px 0px #cc522b80;
        }
      }
      .appBtn {
        width: 163px;
        height: 58px;
        background: #363b4766;
        display: flex;
        align-items: center;
        outline: none;
        border: none;
        margin: 15px 0;
        cursor: pointer;
        padding: 10px;
        img {
          margin: 0 10px;
        }
        div {
          b {
            font-size: 10px;
            font-weight: 400;
            color: #8c94a3;
          }
          h6 {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .block {
      flex-wrap: wrap;
      padding: 20px 0;
      img,
      div {
        width: 90%;
      }
      img {
        padding: 10px 0;
      }
    }
    .end {
      padding: 20px;
      .box {
        margin: 10px;
        .paragraph {
          width: 90%;
        }
        .socials{
          flex-wrap: wrap;
        }
      }
    }
  }
`;
