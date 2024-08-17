import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  background: #f5f7fa;
  padding: 50px;
  h1 {
    font-weight: 600;
    color: #1d2026;
    width: 400px;
    margin: auto;
    text-align: center;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    .card {
      width: 280px;
      height: 230px;
      padding: 15px;
      background: #fff;
      display: grid;
      place-items: center;
      h2 {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        color: #6e7485;
      }
    }
  }
  @media screen and (max-width: 750px) {
    h1 {
      width: 80%;
    }
  }
`;
