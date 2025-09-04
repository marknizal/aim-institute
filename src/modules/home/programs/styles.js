import Background from "../../../assets/campus.webp";

import styled from "@emotion/styled";
import { Container as C } from "../../../components/shared";

export const Wrapper = styled.div`
  position: relative;
  background: url(${Background}) center / cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Container = styled(C)`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .image {
    overflow: hidden;
    border-radius: 1rem;
    cursor: pointer;

    img {
      transition: all 0.4s ease-in-out;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
`;
