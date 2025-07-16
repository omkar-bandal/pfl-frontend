import React from 'react'
import { Drawer } from '@mui/material'
import { drawerContainerState, useActions, useAppSelector } from '@prime-fresh/modules';

type DrawerContainerProps = {
  children: React.ReactNode;
}
export const DrawerContainer: React.FC<DrawerContainerProps> = ({ children }) => {
  const isDrawerOpen = useAppSelector(drawerContainerState);
  const {closeDrawer} = useActions();
  return (
    <Drawer
      anchor='right'
      open={isDrawerOpen}
      onClose={() => closeDrawer()}
      sx={{
        '& .MuiDrawer-paper': {
          padding: 2,
          boxSizing: 'border-box',
          width: 400,
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}>
      {children}
    </Drawer>
  )
}

