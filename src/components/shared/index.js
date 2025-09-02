import styled from "@emotion/styled";
import React from "react";

import { color, breakpoint } from "../../styles";

export const Main = styled.main`
  display: block;
`;

export const Section = styled.section`
  background: ${(props) => props.$bg || color.white};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;

  ${breakpoint.tablet} {
    padding: 4rem 2rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  align-items: ${(props) => props.$align || "stretch"};
  justify-content: ${(props) => props.$justify || "center"};
  gap: ${(props) => props.$gap || "1rem"};
`;

const StyledImg = styled.img`
  width: ${(props) => props.width || "100%"};
  aspect-ratio: ${(props) => props.$ratio || "1 / 1"};
  object-fit: ${(props) => props.$fit || "cover"};
  pointer-events: none;
`;

export const Image = (props) =>
  React.createElement(StyledImg, { loading: "lazy", ...props });

export const Paragraph = styled.p`
  font-size: ${(props) => props.$size || "1rem"};
  text-align: ${(props) => props.$align || "left"};
`;
