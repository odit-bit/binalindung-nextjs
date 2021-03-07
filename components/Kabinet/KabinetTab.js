import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

import KabinetList from "./KabinetList";
import style from "../../styles/Kabinet.module.css";

//-----------for tab item component

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}
//-----------------------------

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tabpanel-${index}`,
    "aria-controls": `scrollable-force-tab-${index}`,
  };
}

export default function KabinetTab({ KabinetTab }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        variant="fullWidth"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Pengurus" {...a11yProps(0)} />
        <Tab label="Koordinator" {...a11yProps(1)} />
      </Tabs>

      <TabPanel className={style.tabPanel} value={value} index={0}>
        <KabinetList KabinetList={KabinetTab.Pengurus} />
      </TabPanel>
      <TabPanel className={style.tabPanel} value={value} index={1}>
        <KabinetList KabinetList={KabinetTab.koordinator} />
      </TabPanel>
    </>
  );
}

const useStyles = makeStyles({
  //   root: {
  //     flexGrow: 1,
  //   },
});
