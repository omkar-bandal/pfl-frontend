import React from 'react';
import { Box, Tabs, Tab, SxProps, Theme } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  sx?: SxProps<Theme>;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, sx, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1, borderRadius: 3, mt: 0.5, ...sx }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index: number) => ({
  id: `custom-tab-${index}`,
  'aria-controls': `custom-tabpanel-${index}`,
});

export interface TabItem {
  label: string;
  tabSx?: SxProps<Theme>;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  defaultValue?: number;
  tabsSx?: SxProps<Theme>;
  tabPanelSx?: SxProps<Theme>;
  onChange?: (index: number) => void;
}

export const CustomTabPanel: React.FC<CustomTabsProps> = ({ tabs, defaultValue = 0, tabsSx, tabPanelSx, onChange }) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', ...tabsSx }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#95A5A6',
            },
          }}
          aria-label="custom tabs"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} sx={{ ...tab.tabSx }} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index} sx={tabPanelSx}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};
