import { LuBook } from "react-icons/lu";
import * as S from "./styles";

const SectionTitle = ({ title, subtitle, Icon = LuBook, color }) => {
  return (
    <S.Wrapper color={color}>
      {title && (
        <div className="title">
          <Icon /> <h1>{title}</h1>
        </div>
      )}

      {subtitle && <p className="sub-title">{subtitle}</p>}
    </S.Wrapper>
  );
};

export default SectionTitle;
