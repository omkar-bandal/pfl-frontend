import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { VirtualListboxProps } from "./virtualized-autocomplete.type";

const styles = {
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '4px 8px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
} as const;

// const RenderRow = ({ index, style, data }: ListChildComponentProps) => {
//   const option = data[index] as React.ReactElement;
  
//   return (
//       <div style={{ ...style, ...styles.listItem }}>
//         <Typography variant="body2" sx={styles.text}>
//           {option.props.children}
//         </Typography>
//       </div>
//   );
// };

export const VirtualListbox = React.forwardRef<HTMLDivElement, VirtualListboxProps>(
  ({ items, windowHeight, rowHeight, isLoading, noOptionsText, onScroll }, ref) => {
    
    const RenderRow = ({ index, style, data }: ListChildComponentProps) => {
      const item = data[index];
      return React.cloneElement(item, {
        style: {
          ...style,
          position: 'absolute',
          top: (style.top as number),
          left: 0,
          width: '100%',
          cursor: 'pointer',
        },
      });
    };
    
    if (isLoading) {
      return (
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <CircularProgress size={24} />
        </div>
      );
    }

    if (items.length === 0) {
      return (
        <div style={{ padding: '16px', textAlign: 'center' }}>
          <Typography>{noOptionsText}</Typography>
        </div>
      );
    }

    return (
      <div ref={ref}>
        <FixedSizeList
          height={windowHeight}
          itemCount={items.length}
          itemSize={rowHeight}
          width="100%"
          itemData={items}
          onScroll={onScroll}
          overscanCount={5}
        >
          {RenderRow}
        </FixedSizeList>
      </div>
    );
  }
);