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

  grid-auto-columns: calc((100% - 2 * 1.5rem) / 3);

  ${breakpoint.tablet} {
    grid-auto-columns: calc((100% - 1 * 1rem) / 2);
    gap: 1rem;
  }

  ${breakpoint.mobile} {
    grid-auto-columns: 100%;
  }
`;

export const Item = styled.li`
  scroll-snap-align: start;
  height: fit-content;
  border-radius: 0.8rem;
  overflow: hidden;
  cursor: pointer;

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: #f7f8f9;
    padding: 1.5rem;
  }

  .details h1 {
    font-size: 1.35rem;
    margin-top: 0.5rem;
  }

  .details span {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: #888;
  }

  .details p {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
`;

export const Thumbnail = styled(I)`
  aspect-ratio: 16 / 9;
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
