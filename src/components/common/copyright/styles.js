import styled from "@emotion/styled";

import { Container } from "../../shared";
import { breakpoint } from "../../../styles";

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.5rem 1rem;

  span {
    font-size: 0.9rem;
    color: #ddd;
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    text-align: center;

    span {
      font-size: 0.85rem;
    }
  }
`;
