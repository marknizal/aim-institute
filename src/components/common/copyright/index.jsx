import * as S from "./styles";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Wrapper>
      <span>
        &copy;{currentYear} AIM Education Services Group, Inc. All rights
        reserved
      </span>
      <span>Privacy Policy</span>
    </S.Wrapper>
  );
};

export default Copyright;
