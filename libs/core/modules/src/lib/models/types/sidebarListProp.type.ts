import { Navigations } from "./navigations.type";

export type SidebarListProps = {
    dept: string;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
    navigations: Navigations[];
  }