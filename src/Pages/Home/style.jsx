import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 33%;
    h1 {
      color: #1d2026;
      font-size: 42px;
    }
    p {
      color: #4e5566;
      margin-top: 15px;
      font-size: 18px;
    }
    button {
      height: 40px;
      border-radius: 1px;
      outline: none;
      border: 1px solid #e9eaf0;
      padding: 0 30px;
      color: #fff;
      margin-top: 25px;
      cursor: pointer;
      background: #ff6636;
    }
  }
  img {
    width: 40%;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    margin-top: 20px;
    div,
    img {
      width: 70%;
    }
    img {
      margin-top: 15px;
    }
  }
`;
