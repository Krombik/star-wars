import React, { FC } from "react";
import Tab from "@material-ui/core/Tab";
import MuiTabs from "@material-ui/core/Tabs";
import { Link, matchPath, useLocation } from "react-router-dom";
import { TabQuery } from "types";

const tabList = [
  { value: "", label: "Saved images" },
  { value: "planets", label: "Planets" },
  { value: "starships", label: "Starships" },
  { value: "people", label: "Persons" },
];

const Tabs: FC = () => {
  const location = useLocation();

  const tab = matchPath<TabQuery>(location.pathname, {
    path: "/:tab",
    exact: true,
  })?.params.tab;

  return (
    <MuiTabs variant="scrollable" scrollButtons="auto" value={tab || "default"}>
      {tabList.map((tab, index) => (
        <Tab
          key={index}
          value={tab.value || "default"}
          component={Link}
          to={`/${tab.value}`}
          label={tab.label}
        />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
