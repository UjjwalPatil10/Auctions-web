//import useState hook to create menu collapse state
import React, { useState } from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

function AsideNavbar() {
  return (
    <>
      <div id="header">
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
            <MenuItem> <a href="AddUser.jsx">AddUser</a> </MenuItem>

          </Menu>
        </Sidebar>
        
      </div>
    </>
  );
}

export default AsideNavbar;
