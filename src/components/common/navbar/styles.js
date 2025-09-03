import styled from "@emotion/styled";

import { IoIosArrowDown } from "react-icons/io";
import { Menu as M } from "antd";

export const Menu = styled(M)`
  display: flex;
  justify-content: center;
  border: none;
  flex: 1;

  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .ant-menu-item,
  .ant-menu-submenu-title {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const ArrowIcon = styled(IoIosArrowDown)`
  font-size: 1rem;
`;
