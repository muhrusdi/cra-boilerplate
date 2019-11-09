import React from "react";
import {
  Layout, Avatar,
} from "antd";
import { Flex } from "components";

const HeaderAnt = Layout.Header;

const Header = () => (
  <HeaderAnt>
    <Flex justifyContent="space-between" alignItems="center">
      <div>
        <h3>CRA Boilerplate</h3>
      </div>
      <div>
        <Avatar style={{ backgroundColor: "#87d068" }} icon="user" />
      </div>
    </Flex>
  </HeaderAnt>
);

export default Header;
