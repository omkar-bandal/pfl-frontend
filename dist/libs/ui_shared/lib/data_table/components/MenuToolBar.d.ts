import { default as React } from 'react';

interface MenuItemProps {
    label: string;
    logo: React.ReactNode;
    onClick: () => void;
}
interface BasicMenuProps {
    buttonLabel: React.ReactNode;
    menuItems: MenuItemProps[];
}
declare const MenuToolBar: React.ForwardRefExoticComponent<BasicMenuProps & React.RefAttributes<HTMLButtonElement>>;
export default MenuToolBar;
