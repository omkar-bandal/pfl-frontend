import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandMore, ExpandLess, Remove } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { Navigations, setMobileOpen, SidebarListProps } from "@prime-fresh/modules";
import { useDispatch } from "react-redux";

export const SidebarList: React.FC<SidebarListProps> = ({
  dept,
  selectedItem,
  setSelectedItem,
  navigations,
}) => {
  const dispatch = useDispatch();
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>(
    {}
  );

  const handleToggle = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const renderChildItems = (children: Navigations[], parentName: string) =>
    children.map((child) => {
      if (child.depts?.includes(dept)) {
        return (
          <React.Fragment key={child.name}>
            {child.path ? (
              <NavLink
                to={child.path}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'primary.main' : 'inherit',
                })}
              >
                <ListItemButton
                  selected={selectedItem === child.name}
                  onClick={() => {
                    dispatch(setMobileOpen(false));
                    setSelectedItem(child.name);
                  }}
                  sx={{
                    pl: 4,
                    '&:hover': {
                      color: 'primary.main',
                      '& .MuiListItemIcon-root': {
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <ListItemIcon>
                    <Remove fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{child.name}</ListItemText>
                </ListItemButton>
              </NavLink>
            ) : child.grandChildren ? (
              <>
                <ListItemButton
                  onClick={() => handleToggle(`${parentName}-${child.name}`)}
                  sx={{
                    pl: 4,
                    '&:hover': {
                      color: 'primary.main',
                      '& .MuiListItemIcon-root': {
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <ListItemIcon>
                    <Remove fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{child.name}</ListItemText>
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
                  <List component="div" disablePadding>
                    {renderChildItems(child.grandChildren!, `${parentName}-${child.name}`)}
                  </List>
                </Collapse>
              </>
            ) : null}
          </React.Fragment>
        );
      }
      return null;
    });

  return (
    <List>
      {navigations.map((item) => {
        if (item.depts?.includes(dept)) {
          if (item.path) {
            return (
              <NavLink
                to={item.path}
                key={item.name}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'primary.main' : 'inherit',
                })}
              >
                <ListItemButton
                  selected={selectedItem === item.name}
                  onClick={() => {
                    dispatch(setMobileOpen(false));
                    setSelectedItem(item.name);
                  }}
                  sx={{
                    width: '95%',
                    borderRadius: 2,
                    marginX: 'auto',
                    '&:hover': {
                      color: 'primary.main',
                      '& .MuiListItemIcon-root': {
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <ListItemIcon>{item.logo}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                </ListItemButton>
              </NavLink>
            );
          }

          if (item.children) {
            return (
              <React.Fragment key={item.name}>
                <ListItemButton
                  onClick={() => handleToggle(item.name)}
                  sx={{
                    width: '95%',
                    borderRadius: 2,
                    marginX: 'auto',
                    '&:hover': {
                      color: 'primary.main',
                      '& .MuiListItemIcon-root': {
                        color: 'primary.main',
                      },
                    },
                  }}
                >
                  <ListItemIcon>{item.logo}</ListItemIcon>
                  <ListItemText>{item.name}</ListItemText>
                  <ListItemIcon>
                    {openItems[item.name] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemIcon>
                </ListItemButton>
                <Collapse in={openItems[item.name]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {renderChildItems(item.children, item.name)}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }
        }
        return null;
      })}
    </List>
  );
};
export default SidebarList;
// const SidebarList: React.FC<SidebarListProps> = ({ dept, selectedItem, setSelectedItem, navigations }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   // State to manage the expanded items
//   const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({});

//   const handleToggle = (name: string) => {
//     setOpenItems(prev => ({ ...prev, [name]: !prev[name] }));
//   };

//   const handleChildrenOpen = (name: string) => {
//     setSelectedItem(prev => (prev === name ? '' : name));
//     handleToggle(name); // Toggle the collapse state
//   };

//   return (
//     <List>
//       {navigations.map(item => {
//         if (item.depts?.includes(dept)) {
//           if (item.path) {
//             return (
//               <ListItemButton
//                 key={item.name}
//                 selected={selectedItem === item.name}
//                 onClick={() => { navigate(item.path ? item.path : ''); dispatch(setMobileOpen(false)) }}
//                 sx={{
//                   width: '95%',
//                   borderRadius: 2,
//                   marginX: 'auto',
//                   '&:hover': {
//                     color: 'primary.main',
//                     '& .MuiListItemIcon-root': {
//                       color: 'primary.main',
//                     },
//                   },
//                 }}
//               >
//                 <ListItemIcon>{item.logo}</ListItemIcon>
//                 <ListItemText>{item.name}</ListItemText>
//               </ListItemButton>
//             );
//           }

//           if (item.children) {
//             return (
//               <React.Fragment key={item.name}>
//                 <ListItemButton
//                   onClick={() => handleChildrenOpen(item.name)}
//                   sx={{
//                     width: '95%',
//                     borderRadius: 2,
//                     marginX: 'auto',
//                     '&:hover': {
//                       color: 'primary.main',
//                       '& .MuiListItemIcon-root': {
//                         color: 'primary.main',
//                       },
//                     },
//                   }}
//                 >
//                   <ListItemIcon>{item.logo}</ListItemIcon>
//                   <ListItemText>{item.name}</ListItemText>
//                   <ListItemIcon>
//                     {openItems[item.name] ? <ExpandLess /> : <ExpandMore />}
//                   </ListItemIcon>
//                 </ListItemButton>

//                 <Collapse in={openItems[item.name]} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     {item.children.map(child => {
//                       if (child.depts?.includes(dept)) {
//                         return (
//                           <React.Fragment key={child.name}>
//                             {child.path ? (
//                               <ListItemButton
//                                 selected={selectedItem === child.name}
//                                 sx={{
//                                   width: '90%',
//                                   borderRadius: 2,
//                                   marginX: 'auto',
//                                   '&:hover': {
//                                     color: 'primary.main',
//                                     '& .MuiListItemIcon-root': {
//                                       color: 'primary.main',
//                                     },
//                                   },
//                                 }}
//                                 onClick={() => { navigate(child.path ? child.path : ''); dispatch(setMobileOpen(false)) }}
//                               >
//                                 <ListItemIcon><Remove fontSize="small" /></ListItemIcon>
//                                 <ListItemText>{child.name}</ListItemText>
//                               </ListItemButton>
//                             ) : (
//                               <React.Fragment key={child.name}>
//                                 <ListItemButton
//                                   onClick={() => handleToggle(child.name)} // Toggle the collapse state for grandchildren
//                                   sx={{
//                                     width: '90%',
//                                     borderRadius: 2,
//                                     marginX: 'auto',
//                                     '&:hover': {
//                                       color: 'primary.main',
//                                       '& .MuiListItemIcon-root': {
//                                         color: 'primary.main',
//                                       },
//                                     },
//                                   }}
//                                 >
//                                   <ListItemIcon><Remove fontSize="small" /></ListItemIcon>
//                                   <ListItemText>{child.name}</ListItemText>
//                                   <ListItemIcon>
//                                     {openItems[child.name] ? <ExpandLess /> : <ExpandMore />}
//                                   </ListItemIcon>
//                                 </ListItemButton>

//                                 <Collapse in={openItems[child.name]} timeout="auto" unmountOnExit>
//                                   <List component="div" disablePadding>
//                                     {child.grandChildren?.map(grandChild => {
//                                       if (grandChild.depts?.includes(dept)) {
//                                         return (
//                                           <ListItemButton
//                                             key={grandChild.name}
//                                             selected={selectedItem === grandChild.name}
//                                             sx={{
//                                               width: '85%',
//                                               borderRadius: 2,
//                                               marginX: 'auto',
//                                               '&:hover': {
//                                                 color: 'primary.main',
//                                                 '& .MuiListItemIcon-root': {
//                                                   color: 'primary.main',
//                                                 },
//                                               },
//                                             }}
//                                             onClick={() => { navigate(grandChild.path ? grandChild.path : ''); dispatch(setMobileOpen(false)) }}
//                                           >
//                                             <ListItemIcon><Remove fontSize="small" /></ListItemIcon>
//                                             <ListItemText>{grandChild.name}</ListItemText>
//                                           </ListItemButton>
//                                         );
//                                       }
//                                       return null;
//                                     })}
//                                   </List>
//                                 </Collapse>
//                               </React.Fragment>
//                             )}
//                           </React.Fragment>
//                         );
//                       }
//                       return null;
//                     })}
//                   </List>
//                 </Collapse>
//               </React.Fragment>
//             );
//           }

//           return <ListItemText key={item.name}>{item.name}</ListItemText>;
//         }
//         return null;
//       })}
//     </List>
//   );
// };

// export default SidebarList;
