import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  .text {
    width: 35%;
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
      ul {
        margin-left: 20px;
        margin-top: 20px;
        li {
          margin: 10px 0;
          font-size: 16px;
          font-weight: 400;
          color: #1d2026;
        }
      }
    }
  }
  img {
    width: 35%;
    padding: 50px 0;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    padding: 20px 0;
    img,
    .text {
      width: 90%;
    }
    img {
      padding: 10px 0;
    }
  }
`;
