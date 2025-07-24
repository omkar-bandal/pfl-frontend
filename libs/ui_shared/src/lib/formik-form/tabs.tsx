import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

export type TabOptions = {label: string, isDisabled: boolean};

type FormTabsProps = {
    tabOptions: TabOptions[],
    value: number;
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

export const FormTabs: React.FC<FormTabsProps> = ({ tabOptions, value, handleChange }) => {
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
                {tabOptions.map((option, index) => (
                    <Tab
                        key={index}
                        label={option.label}
                        disabled={option.isDisabled}
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