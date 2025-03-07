import React from 'react';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'

interface MenuItemProps {
    label: string;
    logo: React.ReactNode;
    onClick: () => void;
}

interface BasicMenuProps {
    buttonLabel: React.ReactNode;
    menuItems: MenuItemProps[];
}
const MenuToolBar = React.forwardRef<HTMLButtonElement, BasicMenuProps>(
    ({ buttonLabel, menuItems }, ref) => {

        const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <div>
                <Button
                    id="basic-button"
                    ref={ref}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {buttonLabel}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} onClick={() => { item.onClick(); handleClose(); }}>
                            <ListItemIcon>
                                {item.logo}
                            </ListItemIcon>
                            <ListItemText>{item.label}</ListItemText>
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        )
    });
export default MenuToolBar;