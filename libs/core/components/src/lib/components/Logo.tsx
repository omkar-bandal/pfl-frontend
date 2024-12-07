import React from 'react';
import { Toolbar } from "@mui/material";
import {images} from "@prime-fresh/assets";

const Logo: React.FC = () => (
  <Toolbar>
    <img
      src={images.drawerLogo}
      style={{ width: "100px", height: "50px" }}
      alt="logo"
    />
  </Toolbar>
);

export default Logo;
