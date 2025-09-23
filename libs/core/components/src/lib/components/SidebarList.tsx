import React, { memo } from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { ExpandMore, ExpandLess, Remove } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Navigations, setMobileOpen, SidebarListProps } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";

const SidebarList: React.FC<SidebarListProps> = memo(({
  selectedItem,
  setSelectedItem,
  navigations,
}) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({});

  const handleToggle = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const listItemStyles = {
    minHeight: 36,
    borderRadius: 2,
    marginY: 1,
    "&.Mui-selected, &.Mui-focusVisible": {
      backgroundColor: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  };

  const renderChildItems = (children: Navigations[], parentName: string) =>
    children.map((child) => {
      return (
        <React.Fragment key={child.name}>
          {child.path ? (
            <NavLink to={child.path}>
              <ListItemButton dense={true}
                selected={selectedItem === child.name}
                onClick={() => {
                  dispatch(setMobileOpen(false));
                  setSelectedItem(child.name || '');
                }}
                sx={listItemStyles}>
                <ListItemIcon sx={{ fontSize: "small", color: selectedItem === child.name ? "#FFFFFF" : "#595959" }}>
                  <Remove />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography sx={{ fontSize: "14px", fontWeight: 550, color: selectedItem === child.name ? "#FFFFFF" : "#595959" }}>{child.name}</Typography>}
                />
              </ListItemButton>
            </NavLink>
          ) : child.grandChildren ? (
            <>
              <ListItemButton dense={true}
                onClick={() => handleToggle(`${parentName}-${child.name}`)}
                sx={listItemStyles}
              >
                <ListItemIcon sx={{ fontSize: "10px", color: selectedItem === child.name ? "#FFFFFF" : "#595959" }}>
                  <Remove />
                </ListItemIcon>
                <ListItemText
                  primary={<Typography sx={{ fontSize: "14px", fontWeight: 550, color: selectedItem === child.name ? "#FFFFFF" : "#595959" }}>{child.name}</Typography>}
                />
                <ListItemIcon>
                  {openItems[`${parentName}-${child.name}`] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemIcon>
              </ListItemButton>
              <Collapse
                in={openItems[`${parentName}-${child.name}`]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" dense={true} disablePadding>
                  {renderChildItems(child.grandChildren!, `${parentName}-${child.name}`)}
                </List>
              </Collapse>
            </>
          ) : null}
        </React.Fragment>
      );
    });

  return (
    <List dense={true}>
      {navigations.map((item) => {
        // if (!item.depts?.includes(dept)) return null;
        return item.path ? (
          <NavLink to={item.path} key={item.name}>
            <ListItemButton dense={true}
              selected={selectedItem === item.name}
              sx={listItemStyles}
              onClick={() => {
                dispatch(setMobileOpen(false));
                setSelectedItem(item.name || '');
              }}
            >
              <ListItemIcon sx={{ fontSize: "small", color: selectedItem === item.name ? "#FFFFFF" : "#595959" }}>{item.logo}</ListItemIcon>
              <ListItemText
                primary={<Typography sx={{ fontSize: "14px", fontWeight: 550, color: selectedItem === item.name ? "#FFFFFF" : "#595959" }}>{item.name}</Typography>}
              />
            </ListItemButton>
          </NavLink>
        ) : item.children ? (
          <React.Fragment key={item.name}>
            <ListItemButton dense={true} onClick={() => handleToggle(item.name || '')} sx={listItemStyles}>
              <ListItemIcon sx={{ fontSize: "small", color: selectedItem === item.name ? "#FFFFFF" : "#595959" }}>{item.logo}</ListItemIcon>
              <ListItemText primary={<Typography sx={{ fontSize: "14px", fontWeight: 550, color: selectedItem === item.name ? "#FFFFFF" : "#595959" }}>{item.name}</Typography>} />
              <ListItemIcon>
                {openItems[item.name || ''] ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
              </ListItemIcon>
            </ListItemButton>
            <Collapse in={openItems[item.name || '']} timeout="auto" unmountOnExit>
              <List component="div" dense={true} disablePadding>
                {renderChildItems(item.children, item.name || '')}
              </List>
            </Collapse>
          </React.Fragment>
        ) : null;
      })}
    </List>
  );
});

export default SidebarList;