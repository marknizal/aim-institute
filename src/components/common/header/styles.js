import styled from "@emotion/styled";

import { Container as C, Image } from "../../shared";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 4rem;
  top: 0;
  left: 0;
  background-color: ${color.white};
  z-index: 999;

  ${breakpoint.desktop} {
    height: 5.75rem;
  }
`;

export const Container = styled(C)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem !important;

  .menu-icon {
    display: flex;
    font-size: 1.75rem;
    flex-shrink: 0;
  }

  .apply-now-btn {
    display: none;
  }

  ${breakpoint.desktop} {
    padding: 0;

    .menu-icon {
      display: none;
    }

    .apply-now-btn {
      display: flex;
    }
  }
`;

export const Logo = styled(Image)`
  aspect-ratio: 16 / 9;
  width: 5rem;
  object-fit: contain;
  pointer-events: all;
  cursor: pointer;

  ${breakpoint.desktop} {
    width: 8rem;
  }
`;
