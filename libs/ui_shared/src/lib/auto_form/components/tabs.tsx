import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

type FormTabsProps = {
    tabLabels: string[],
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

export const FormTabs: React.FC<FormTabsProps> = ({ tabLabels, value, handleChange }) => {
    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                aria-label="tab arrangement for forms"
            >
                {tabLabels.map((labels, index) => (
                    <Tab
                        key={index}
                        label={labels}
                        {...a11yProps(index)}
                        sx={{
                            textTransform: 'none',
                            fontSize: 16,
                            fontWeight: 600
                        }}
                    />
                ))}
            </Tabs>
        </Box>
    );
}