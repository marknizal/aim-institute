import styled from "@emotion/styled";
import { color } from "../../../styles";
import { Container as C, Image as I } from "../../shared";

export const Wrapper = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 5.75rem;
  top: 0;
  left: 0;
  background-color: ${color.white};
`;

export const Container = styled(C)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin: auto;
`;

export const Logo = styled(I)`
  aspect-ratio: 16 / 9;
  object-fit: contain;
  width: 8rem;
  pointer-events: all;
  cursor: pointer;
`;
