import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabPanelResult({setDataType}) {
  const [value, setValue] = React.useState('all');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDataType(newValue);
  };
  const tabCss={
    color: "#ffffff"
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        
      >
        <Tab
          value="all"
          label="All"
          wrapped
          style={tabCss}
        />
        <Tab value="image" label="Images" style={tabCss}/>
        <Tab value="three" label="Dataset" style={tabCss}/>
        <Tab value="four" label="Video" style={tabCss}/>
      </Tabs>
    </Box>
  );
}
