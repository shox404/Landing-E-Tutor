import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  background: #ffeee8;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 100px;
  div {
    display: flex;
    align-items: center;
    img {
      transform: translateY(-10px);
      margin: 0 10px;
    }
    h2 {
      color: #1d2026;
    }
    p {
      color: #4e5566;
      margin-top: 5px;
      font-size: 15px;
    }
  }
  @media screen and (max-width: 750px) {
    display: block;
    height: auto;
    div {
      padding: 20px 0;
    }
  }
`;
