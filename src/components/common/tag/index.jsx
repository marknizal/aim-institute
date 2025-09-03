import { FaCircle } from "react-icons/fa";
import * as S from "./styles";

const Tag = ({ text, color, className }) => {
  return (
    <S.Wrapper $bg={color} className={className}>
      <FaCircle /> {text}
    </S.Wrapper>
  );
};

export default Tag;
