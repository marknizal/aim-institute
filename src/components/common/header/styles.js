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
  transform: ${({ $show }) => ($show ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.3s ease;
  z-index: 999;

  ${breakpoint.desktop} {
    height: 5rem;
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
    font-size: 1.65rem;
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
  width: 5rem;
  object-fit: contain;
  pointer-events: all;
  cursor: pointer;

  ${breakpoint.desktop} {
    width: 7rem;
  }
`;
