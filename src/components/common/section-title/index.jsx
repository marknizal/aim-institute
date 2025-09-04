import * as S from "./styles";

const SectionTitle = ({ title, subtitle, Icon, color }) => {
  return (
    <S.Wrapper color={color}>
      {title && (
        <div className="title">
          {Icon && <Icon />} <h1>{title}</h1>
        </div>
      )}

      {subtitle && <p className="sub-title">{subtitle}</p>}
    </S.Wrapper>
  );
};

export default SectionTitle;
