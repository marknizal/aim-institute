import Navbar from "../navbar";
import { Button } from "antd";

import { LuExternalLink } from "react-icons/lu";
import AIMLogo from "../../../assets/logo.png";

import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo src={AIMLogo} alt="Logo" />
        <Navbar />
        <Button type="primary" icon={<LuExternalLink />}>
          Apply Now
        </Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
