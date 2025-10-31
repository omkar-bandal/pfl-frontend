import React, { memo, useCallback, useEffect } from 'react';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import { ExpandMore, ExpandLess, Remove } from '@mui/icons-material';
import { NavLink, useLocation } from 'react-router-dom';
import { setMobileOpen } from '@prime-fresh/modules';
import { useDispatch } from 'react-redux';
import { NavigationConfig } from '../navigations';
import { isNavItemActive } from './is-nav-item-active';

type SidebarListProps = {
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  navigations: NavigationConfig[];
};

const SidebarList: React.FC<SidebarListProps> = memo(({ selectedItem, setSelectedItem, navigations }) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const location = useLocation();
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({});

   useEffect(() => {
    const newOpen: Record<string, boolean> = {};
    const openRecursive = (items: NavigationConfig[], parentKey = '') => {
      items.forEach((it) => {
        const key = it.name || parentKey;
        if ((it.children && it.children.length) || (it.grandChildren && it.grandChildren.length)) {
          // open this parent if any descendant is active
          if (isNavItemActive(it)) {
            newOpen[key] = true;
          }
          // recurse
          if (it.children) openRecursive(it.children, key);
          if (it.grandChildren) openRecursive(it.grandChildren, key);
        }
      });
    };
    openRecursive(navigations);
    setOpenItems((prev) => ({ ...prev, ...newOpen }));
  }, [location.pathname, navigations, isNavItemActive]);

  const handleToggle = useCallback((name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  }, []);

  const listItemBtnStyles = {
    minHeight: 36,
    borderRadius: 2,
    marginY: 1,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&.Mui-selected, &.Mui-focusVisible': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: '#FFFFFF',
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#FFFFFF',
    },
  } as const;

  const primaryTextSx = {
    fontSize: '14px',
    fontWeight: 550,
  } as const;

  const startIconSx = { color: 'inherit', minWidth: 36 };
  const endIconSx = { color: 'inherit', minWidth: 'auto', ml: 'auto' };

  const renderChildItems = useCallback(
    (children: NavigationConfig[], parentName: string) =>
      children.map((child) => {
        const key = `${parentName}-${child.name}`;
        if (child.path) {
          return (
            <ListItemButton
              key={key}
              component={NavLink}
              to={child.path}
              end={child.path === '/'}
              dense
              selected={isNavItemActive(child)}
              onClick={() => {
                dispatch(setMobileOpen(false));
                setSelectedItem(child.name || '');
              }}
              sx={listItemBtnStyles}
            >
              <ListItemIcon sx={startIconSx}>
                <Remove />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={primaryTextSx} color="inherit">
                    {child.name}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        }

        if (child.grandChildren) {
          const collapseKey = `${parentName}-${child.name}`;
          return (
            <React.Fragment key={collapseKey}>
              <ListItemButton dense onClick={() => handleToggle(collapseKey)} sx={listItemBtnStyles} selected={isNavItemActive(child)}>
                <ListItemIcon sx={startIconSx}>
                  <Remove />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={primaryTextSx} color="inherit">
                      {child.name}
                    </Typography>
                  }
                />
                <ListItemIcon sx={endIconSx}>{openItems[collapseKey] ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
              </ListItemButton>

              <Collapse in={openItems[collapseKey]} timeout="auto" unmountOnExit>
                <List component="div" dense disablePadding>
                  {renderChildItems(child.grandChildren, collapseKey)}
                </List>
              </Collapse>
            </React.Fragment>
          );
        }

        return null;
      }),
    [dispatch, handleToggle, openItems, selectedItem, setSelectedItem, listItemBtnStyles, isNavItemActive]
  );

  return (
    <List dense>
      {navigations.map((item) => {
        const key = item.name;
        if (item.path) {
          return (
            <ListItemButton
              key={key}
              component={NavLink}
              to={item.path}
               end={item.path === '/'}
              dense
              selected={isNavItemActive(item)}
              sx={listItemBtnStyles}
              onClick={() => {
                dispatch(setMobileOpen(false));
                setSelectedItem(item.name || '');
              }}
            >
              <ListItemIcon sx={startIconSx}>{item.logo}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={primaryTextSx} color="inherit">
                    {item.name}
                  </Typography>
                }
              />
            </ListItemButton>
          );
        }

        if (item.children) {
          return (
            <React.Fragment key={key}>
              <ListItemButton dense onClick={() => handleToggle(item.name || '')} sx={listItemBtnStyles} selected={isNavItemActive(item)}>
                <ListItemIcon sx={startIconSx}>{item.logo}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography sx={primaryTextSx} color="inherit">
                      {item.name}
                    </Typography>
                  }
                />
                <ListItemIcon sx={endIconSx}>
                  {openItems[item.name || ''] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
                </ListItemIcon>
              </ListItemButton>
              <Collapse in={openItems[item.name || '']} timeout="auto" unmountOnExit>
                <List component="div" dense disablePadding>
                  {renderChildItems(item.children, item.name || '')}
                </List>
              </Collapse>
            </React.Fragment>
          );
        }

        return null;
      })}
    </List>
  );
});

export default SidebarList;
