import { ButtonGroup, IconButton, Tooltip, useTheme } from "@mui/material";
import { TableButtonConfig } from "../data_table";

export interface IconButtonConfig {
  icon: React.ReactNode;     
  label: string;   
  color?: string;           
  toolTipText?: string;       
  onClick: any;        
  disabled?: boolean; 
  visible?: boolean;        
}

interface IconButtonGroupProps {
  items: TableButtonConfig[];
  orientation?: "horizontal" | "vertical"; 
}

export const IconButtonGroup: React.FC<IconButtonGroupProps> = ({
  items,
  orientation = "horizontal",
}) => {
  const isHorizontal = orientation === "horizontal";
  const theme = useTheme();
  return (
    <ButtonGroup
      orientation={orientation}
      sx={{
        "& .MuiIconButton-root": {
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: 0,
        },
        // remove inner duplicate borders
        "& .MuiIconButton-root:not(:first-of-type)": {
          borderLeft: isHorizontal ? "none" : undefined,
          borderTop: !isHorizontal ? "none" : undefined,
        },
        "& .MuiIconButton-root:first-of-type": {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderBottomLeftRadius: isHorizontal ? theme.shape.borderRadius : 0,
          borderTopRightRadius: !isHorizontal ? theme.shape.borderRadius : 0,
          borderBottomRightRadius: 0,
        },
        "& .MuiIconButton-root:last-of-type": {
          borderTopRightRadius: theme.shape.borderRadius,
          borderBottomRightRadius: isHorizontal ? theme.shape.borderRadius : 0,
          borderTopLeftRadius: !isHorizontal ? theme.shape.borderRadius : 0,
          borderBottomLeftRadius: 0,
        },
      }}
    >
      {items.map((item, index) => (
        <Tooltip key={index} title={item.toolTipText} arrow>
          <IconButton
            onClick={item.onClick}
            size="medium"
            color={item.color as any}
            disabled={item.disabled}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};
