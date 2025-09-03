import styled from "@emotion/styled";
import { color } from "../../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${(props) => props.color || color.black};

  .title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .title svg,
  .title h1 {
    font-size: 2rem;
  }

  .sub-title {
    font-size: 0.9rem;
    color: #555;
  }
`;
