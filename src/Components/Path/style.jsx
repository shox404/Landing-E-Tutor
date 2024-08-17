import { styled } from "styled-components";

export const Block = styled.div`
  width: 100%;
  background: #f5f7fa;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #1d2026;
    margin: 15px 0;
  }
  div {
    margin: 15px 0;
    span {
      color: gray;
    }
  }
`;
