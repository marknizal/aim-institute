import styled from "@emotion/styled";

import { Container as C } from "../../../components/shared";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled(C)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .grid {
    align-items: center;
    gap: 3rem;
  }

  .model {
    border-radius: 1rem;
    aspect-ratio: 3 / 4;

    ${breakpoint.tablet} {
      aspect-ratio: 16 / 9;
    }
  }

  ${breakpoint.desktop} {
    gap: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  .block {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${color.white};
  }

  .title {
    font-size: 1.5rem;
  }

  .desc {
    font-size: 0.8rem;
    line-height: 1.15rem;
    color: #ddd;
  }

  ${breakpoint.mobile} {
    gap: 1rem;

    .title {
      font-size: 1.15rem;
    }

    .desc {
      font-size: 0.7rem;
    }
  }
`;

export const Icon = styled.figure`
  padding: 1rem;
  border-radius: 0.75rem;
  flex-shrink: 0;
  background-color: ${(props) => props.$bg || "green"};
  color: ${color.white};

  svg {
    font-size: 2.5rem;
  }
`;
