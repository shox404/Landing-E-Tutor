import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  .text {
    width: 30%;
    h1 {
      color: #1d2026;
      font-size: 28px;
      font-weight: 600;
    }
    p {
      font-size: 15px;
      font-weight: 400;
      color: #4e5566;
      margin-top: 15px;
    }
    .list {
      background: #ffeee8;
      padding: 20px;
      margin-top: 20px;
    }
    button {
      margin-top: 20px;
      width: 35px;
      height: 35px;
      background: #f5f7fa;
      outline: none;
      border: none;
      transition: 0.2s;
      cursor: pointer;
    }
    button:nth-child(2) {
      margin-left: 10px;
      img {
        transform: rotate(180deg);
      }
    }
    button:active {
      background: #ff6636;
      box-shadow: 0px 6px 20px 0px #cc522b80;
    }
  }
  .image {
    width: 40%;
    padding: 50px 0;
    margin-left: 20px;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    .image,
    .text {
      width: 90%;
    }
    .text {
      margin-top: 20px;
    }
    .image {
      padding: 10px 0;
    }
  }
`;
