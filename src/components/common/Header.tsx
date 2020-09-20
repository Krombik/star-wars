import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, { FC, memo } from "react";
import MuiLink from "@material-ui/core/Link";
import { SITE_NAME } from "utils/constant";
import Gutter from "components/common/Gutter";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../../containers/common/ThemeSwitcher";

const Header: FC = memo(() => (
  <Gutter
    component={AppBar}
    position="static"
    color="default"
    justify="space-between"
    alignItems="center"
  >
    <Grid item>
      <Typography variant="h6">
        <MuiLink component={Link} to="/" color="inherit" underline="none">
          {SITE_NAME}
        </MuiLink>
      </Typography>
    </Grid>
    <Grid item>
      <ThemeSwitcher />
    </Grid>
  </Gutter>
));

export default Header;
