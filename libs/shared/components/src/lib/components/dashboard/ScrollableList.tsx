import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

type ScrollableListProps = {
  dataList: Array<{ id: string; name: string }>;
  noDataMessage?: string;
  height?: number;
};
export const ScrollableList: React.FC<ScrollableListProps> = ({
  dataList,
  noDataMessage = 'No data available.',
  height = 200,
}) => {
  return (
    <Box
      sx={{
        maxHeight: height,
        overflowY: 'auto',
        border: '1px solid #E0E0E0',
        borderRadius: 1,
        p: 1,
      }}
    >
      <List>
        {dataList.map((user) => (
          <ListItem key={user.id} disableGutters sx={{ py: 0, minHeight: 24 }}>
            <ListItemText
              primary={user.name}
              primaryTypographyProps={{
                variant: 'body2',
                noWrap: true,
                fontWeight: 600,
                color: 'text.primary',
              }}
            />
          </ListItem>
        ))}
        {dataList.length === 0 && (
          <ListItem disableGutters>
            <ListItemText
              primary={noDataMessage}
              primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
};
