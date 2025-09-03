import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IoIosArrowDown } from "react-icons/io";
import { breakpoint } from "../../../styles";
import { Menu as AntMenu } from "antd";

const defaultMenu = css`
  border: none !important;

  .ant-menu-item,
  .ant-menu-submenu-title {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const DesktopMenu = styled(AntMenu)`
  ${defaultMenu};
  display: none;
  justify-content: space-between;
  flex: 1;

  ${breakpoint.desktop} {
    display: flex;
  }
`;

export const MobileMenu = styled(AntMenu)`
  ${defaultMenu};
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ArrowIcon = styled(IoIosArrowDown)`
  font-size: 1rem;
`;
