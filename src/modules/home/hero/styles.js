import styled from "@emotion/styled";

import { Container as C } from "../../../components/shared";
import { color, breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  color: ${color.white};
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${(props) => props.$bg}) center / cover no-repeat;
`;

export const Container = styled(C)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 2rem;
  min-height: 60vh;
  padding-bottom: 2rem;
  width: 100%;

  & > * {
    min-width: 0;
  }

  ${breakpoint.tablet} {
    min-height: 50vh;
  }

  ${breakpoint.desktop} {
    grid-template-columns: 2fr 1fr;
    min-height: 100vh;
    align-items: center;
  }
`;

export const Heading = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;

  .category {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: ${(props) => props.$bg || "red"};
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 0.4rem;
    font-size: 0.8rem;
  }

  .title {
    font-size: 2rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .sub-title {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  ${breakpoint.desktop} {
    .title {
      font-size: 3rem;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  ${breakpoint.desktop} {
    display: flex;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    border-radius: 50%;
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    flex: 1;
    min-width: 0;

    h1,
    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .details h1 {
    font-size: 1.35rem;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .details p {
    font-size: 0.9rem;
  }
`;
