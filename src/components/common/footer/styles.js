import styled from "@emotion/styled";

import { color, breakpoint } from "../../../styles";
import { Container as C } from "../../shared";

const flexColumn = `
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Wrapper = styled.footer``;

export const Grid = styled(C)`
  color: ${color.white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  svg {
    flex-shrink: 0;
    font-size: 1rem;
  }

  ${breakpoint.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const Box = styled.section`
  ${flexColumn}
`;

export const Nav = styled.nav`
  ${flexColumn}
`;

export const Address = styled.address`
  ${flexColumn}
  font-style: normal;
`;

export const List = styled.ul`
  list-style: none;
  ${flexColumn}
`;

export const Item = styled.span`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  line-height: 1.25rem;
  font-size: 0.9rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${color.white};
  font-size: 0.9rem;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Copyright = styled(C)`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2.5rem 1rem;

  span,
  a {
    font-size: 0.9rem;
    color: #ddd;
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    text-align: center;

    span,
    a {
      font-size: 0.85rem;
    }
  }
`;
