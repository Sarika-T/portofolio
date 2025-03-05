import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import HeaderText from '../Content/HeaderText';
import './common.scss';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '85%', alignItems: "center",justifyContent: "center", display: 'flex', flexDirection: 'column', typography: 'body1' }}>
      <TabContext value={value} className="sarika">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" className="tablist">
            <Tab label="Home" className='button-tab' value="1" />
            <Tab label="About" className='button-tab' value="2" />
            <Tab label="Projects" className='button-tab' value="3" />
            <Tab label="Contact" className='button-tab' value="4" />
          </TabList>
        </Box>
        <TabPanel className='tab-panel' value="1"><HeaderText /></TabPanel>
        <TabPanel value="2">About</TabPanel>
        <TabPanel value="3">Projects</TabPanel>
        <TabPanel value="4">Contact</TabPanel>
      </TabContext>
    </Box>
  );
}
