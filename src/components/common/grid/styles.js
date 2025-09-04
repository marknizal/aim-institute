import styled from "@emotion/styled";
import { breakpoint } from "../../../styles";

export const List = styled.div`
  width: 100%;
  display: grid;
  align-items: start;
  grid-template-columns: repeat(${(props) => props.$columns}, 1fr);
  gap: ${(props) => props.$gap || "0.8rem"};

  ${breakpoint.tablet} {
    grid-template-columns: repeat(var(--columns-tablet, 2), 1fr);
  }

  ${breakpoint.mobile} {
    grid-template-columns: repeat(var(--columns-mobile, 1), 1fr);
  }
`;
