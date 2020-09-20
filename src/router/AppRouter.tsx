import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import TabContent from "pages/TabContent";

const AppRouter: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:tab" component={TabContent} />
    </Switch>
  );
};

export default AppRouter;
