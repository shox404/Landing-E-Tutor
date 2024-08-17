import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  background: #ffeee8;
  .image {
    width: 35%;
    padding: 50px 0;
  }
  .text {
    width: 35%;
    h1 {
      color: #1d2026;
      font-size: 28px;
      font-weight: 600;
    }
    .info {
      font-size: 15px;
      font-weight: 400;
      color: #4e5566;
      margin-top: 15px;
    }
    .list {
      margin-top: 20px;
      div {
        display: flex;
        align-items: center;
        img {
          width: 25px;
        }
        p {
          color: #1d2026;
          font-size: 14px;
          font-weight: 400;
          margin: 0 10px;
        }
      }
    }
    .line {
      margin-top: 20px;
      display: flex;
      align-items: center;
      img {
        width: 50px;
      }
      div {
        margin: 10px;
        p {
          font-size: 12px;
          font-weight: 400;
          color: #4e5566;
          text-transform: uppercase;
        }
        h3 {
          font-size: 18px;
          font-weight: 500;
          color: #1d2026;
          margin-top: 5px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    padding: 20px 0;
    .image,
    .text {
      width: 90%;
    }
    .image {
      padding: 10px 0;
    }
  }
`;
