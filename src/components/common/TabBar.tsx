import React, { FC } from "react";
import MuiAppBar, { AppBarProps } from "@material-ui/core/AppBar";
import Gutter from "./Gutter";

const AppBar: FC<AppBarProps> = (props) => (
  <MuiAppBar {...props} component="nav" position="static" color="default" />
);

const TabBar: FC = ({ children }) => (
  <Gutter component={AppBar} alignItems="center">
    {children}
  </Gutter>
);

export default TabBar;
