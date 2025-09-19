/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from 'react';
import { List, ListItemIcon, ListItemText, Checkbox, Popover, ListItemButton } from '@mui/material';
import { CustomGridColDef } from '../models/columntype.interface';

export interface ColumnVisibilityPanelProps {
    popoverId: string;
    columns: CustomGridColDef[];
    columnVisibilityModel: { [field: string]: boolean };
    displayColumnVisibilityModel: HTMLButtonElement | null;
    closeColumnVisibilityModel: () => void;
    onColumnVisibilityModelChange: (field: string) => void;
}

export const ColumnVisibilityPanel: React.FC<ColumnVisibilityPanelProps> = memo(({
    popoverId,
    columns,
    columnVisibilityModel,
    displayColumnVisibilityModel,
    closeColumnVisibilityModel,
    onColumnVisibilityModelChange,
}) => {
    const open = Boolean(displayColumnVisibilityModel);

    return (
        <Popover
            id={open ? popoverId : undefined}
            open={open}
            anchorEl={displayColumnVisibilityModel}
            onClose={closeColumnVisibilityModel}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <List>
                {columns.map((col) => (
                    <ListItemButton key={col.field}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={columnVisibilityModel[col.field] !== false}
                                onChange={(event) => {
                                    // Stop propagation so that only the checkbox change fires.
                                    event.stopPropagation();
                                    onColumnVisibilityModelChange(col.field);
                                }}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={col.headerName || col.field} />
                    </ListItemButton>
                ))}
            </List>
        </Popover>
    );
});