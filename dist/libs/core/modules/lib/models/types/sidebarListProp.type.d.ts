import { Navigations } from './navigations.type';

export type SidebarListProps = {
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
    navigations: Navigations[];
};
