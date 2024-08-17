import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  img {
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
    p {
      font-size: 15px;
      font-weight: 400;
      color: #4e5566;
      margin-top: 15px;
    }
    .list {
      div {
        display: flex;
        height: 80px;
        align-items: center;
        img {
          width: 30px;
          transform: translateY(-10px);
        }
        span {
          margin-left: 10px;
          h3 {
            color: #1d2026;
            font-size: 18px;
            font-weight: 100;
          }
          p {
            margin-top: 5px;
            font-size: 12px;
            color: #6e7485;
          }
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    img,
    .text {
      width: 80%;
    }
    img {
      padding: 20px 0;
    }
  }
`;
