import styled from "@emotion/styled";
import Background from "../../../assets/aim-in-motion.webp";

import { Container as C } from "../../../components/shared";
import { breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  background: url(${Background}) center / cover no-repeat;
`;

export const Container = styled(C)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${breakpoint.mobile} {
    flex-direction: column;
    align-items: start;
  }
`;

export const Featured = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    pointer-events: none;
    z-index: 1;
  }

  iframe {
    border: none;
    aspect-ratio: 2.35 / 1;
    z-index: 2;
  }

  h2 {
    position: absolute;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    z-index: 2;
    white-space: nowrap;
  }

  ${breakpoint.mobile} {
    iframe {
      aspect-ratio: 1 / 1;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Frame = styled.div`
  display: block;

  iframe {
    border: none;
    border-radius: 0.5rem;
    aspect-ratio: 16 / 10;
  }

  h3 {
    font-size: 1.15rem;
    margin-top: 1rem;
  }
`;
