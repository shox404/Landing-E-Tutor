import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  height: 120px;
  position: sticky;
  top: 0;
  z-index: 10;
  left: ${(p) => p.x};
  transition: 0.2s;
  @media screen and (max-width: 750px) {
    height: 100vh;
    position: fixed;
  }
`;

export const TopNavbar = styled.div`
  width: 100%;
  height: 45px;
  background: #1d2026;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    padding: 0 35px;
    gap: 25px;
    a {
      color: #8c94a3;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      position: relative;
      &.active {
        color: white;
        &:before {
          transition: 0.2s;
          content: "";
          position: absolute;
          top: -15px;
          height: 0px;
          width: 100%;
          background: #ff6636;
          border-radius: 1.5px;
          animation: navigation 0.2s linear forwards;
          @keyframes navigation {
            100% {
              height: 3px;
            }
          }
        }
      }
    }
  }
  span{
    padding: 0 30px;
    select {
    background: transparent;
    color: #8c94a3;
    border: none;
    outline: none;
    padding: 0 10px;
  }
  }
  @media screen and (max-width: 750px) {
    height: 40%;
    display: grid;
    place-items: center;
    place-content: center;
    div {
      display: grid;
      place-content: center;
      gap: 20px;
      a {
        text-align: center;
        &.active {
          color: white;
          &:before {
            display: none;
          }
        }
      }
    }
    span{
      margin-top: 10px;
    }
  }
`;

export const BottomNavbar = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -1px 0px 0px #e9eaf0 inset;
  background: #fff;
  div {
    display: flex;
    align-items: center;
    padding: 0 35px;
    gap: 15px;
    h1 {
      font-size: 32px;
      font-weight: 600;
      margin-left: 10px;
      color: #1d2026;
    }
    span {
      display: flex;
      align-items: center;
    }
    input,
    select {
      outline: none;
      border: 1px solid #e9eaf0;
      height: 40px;
      padding: 0 10px;
    }
    select {
      width: 150px;
      color: #4e5566;
    }
    input[type="search"] {
      width: 250px;
    }
    button {
      height: 40px;
      border-radius: 1px;
      outline: none;
      border: 1px solid #e9eaf0;
      padding: 0 30px;
      cursor: pointer;
    }
    .btn {
      color: #ff6636;
      background: #ffeee8;
    }
    .signInBtn {
      color: #fff;
      background: #ff6636;
    }
  }
  @media screen and (max-width: 750px) {
    height: 60%;
    display: grid;
    place-items: center;
    place-content: center;
    div {
      display: grid;
      place-items: center;
    }
  }
`;
