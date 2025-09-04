import styled from "@emotion/styled";

import { Button as B } from "antd";
import { Container as C, Image as I } from "../../../components/shared";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled(C)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ListWrapper = styled.div`
  position: relative;

  ${breakpoint.desktop} {
    &:hover button {
      opacity: 1;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  gap: 1.5rem;
  scroll-snap-type: x mandatory;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  grid-auto-columns: calc((100% - 5 * 1.5rem) / 6);

  ${breakpoint.tablet} {
    grid-auto-columns: calc((100% - 2 * 1rem) / 3);
    gap: 1rem;
  }

  ${breakpoint.mobile} {
    grid-auto-columns: calc((100% - 1 * 1rem) / 2);
    gap: 1rem;
  }
`;

export const Item = styled.li`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;

  .name {
    font-size: 1.15rem;
    margin-top: 0.5rem;
  }

  .title {
    font-size: 0.8rem;
    line-height: 1.25rem;
  }
`;

export const Image = styled(I)`
  border-radius: 0.75rem;
`;

export const Button = styled(B)`
  border: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 3rem !important;
  height: 3rem !important;
  background-color: rgba(0, 0, 0, 0.4);
  color: ${color.white};
  opacity: 0;
  transition: all 0.3s ease;

  svg {
    flex-shrink: 0;
    font-size: 1.25rem;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`;
