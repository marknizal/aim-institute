import styled from "@emotion/styled";
import { color } from "../../../styles";

export const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${(props) => props.$bg || "red"};
  color: ${color.white};

  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.3rem;
`;
