import { useState } from "react";

import { LuExternalLink } from "react-icons/lu";
import { CgMenu } from "react-icons/cg";
import { useScrollHide } from "../../../utils/hooks/useScrollHide";
import { Button, Drawer } from "antd";

import Navbar from "../navbar";
import AIM from "../../../assets/logo.png";

import * as S from "./styles";

const Header = () => {
  const showHeader = useScrollHide();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <S.Wrapper $show={showHeader}>
      <S.Container>
        <S.Logo src={AIM} alt="Logo" />

        <Navbar />

        <Button
          className="apply-now-btn"
          type="primary"
          icon={<LuExternalLink />}
          aria-label="Apply Now"
        >
          Apply Now
        </Button>

        <CgMenu className="menu-icon" onClick={() => setIsDrawerOpen(true)} />

        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          placement="left"
        >
          <Navbar isMobile />
        </Drawer>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
