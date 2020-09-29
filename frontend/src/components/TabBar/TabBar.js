import React from 'react';
import { useDispatch } from 'react-redux';
import { renderHomePage, renderAboutPage, renderServicesPage, renderDoctorsPage } from "../../rstore/actions/tabChangeAction";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `horizontal-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  tabs: {
    color: 'white'
  },
}));

export default function TabBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if(newValue === 0) {
      dispatch(renderHomePage());
    } else if(newValue === 1) {
      dispatch(renderAboutPage());
    } else if (newValue === 2) {
      dispatch(renderServicesPage());
    }else if (newValue === 3) {
        dispatch(renderDoctorsPage());
      }
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: "white"
          }}}
      >
        <Tab label="Home" {...a11yProps(0)}/>
        <Tab label="About" {...a11yProps(1)}/>
        <Tab label="Services" {...a11yProps(2)}/>
        <Tab label="Doctors" {...a11yProps(3)}/>
      </Tabs>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
      </TabPanel>
      <TabPanel value={value} index={2}>
      </TabPanel>
      <TabPanel value={value} index={3}>
      </TabPanel>
    </div>
  );
}