import React, { FC } from "react";
import "styled-components/macro";
import Header from "components/common/Header";
import Alert from "containers/common/Alert";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Banner from "containers/common/Banner";
import TabBar from "components/common/TabBar";
import { SITE_NAME } from "utils/constant";
import Tabs from "containers/common/Tabs";
import ImgModal from "containers/images/ImgModal";

const Layout: FC = ({ children }) => (
  <>
    <Grid
      container
      spacing={3}
      css={`
        margin: 0;
        width: 100%;
        min-height: 100vh;
        height: 100%;
      `}
      direction="column"
    >
      <Header />
      <Banner justify="center">
        <Grid item>
          <Typography variant="h1">{SITE_NAME}</Typography>
        </Grid>
      </Banner>
      <TabBar>
        <Tabs />
      </TabBar>
      {children}
    </Grid>
    <ImgModal />
    <Alert />
  </>
);

export default Layout;
