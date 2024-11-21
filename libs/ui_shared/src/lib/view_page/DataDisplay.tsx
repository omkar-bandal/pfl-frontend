import { Typography, Box, Table, TableBody, TableRow, TableCell } from '@mui/material';

// type DataDisplayProps<T> = {
//   header: string;
//   data: T;
// };

// export const DataDisplay = <T extends object>({ header, data }: DataDisplayProps<T>) => {
//   const formatKey = (key: string): string => {
//     return key
//       .replace(/([A-Z])/g, ' $1') // Add space before uppercase letters
//       .replace(/^./, str => str.toUpperCase()); // Capitalize the first letter
//   };

//   const shouldDisplayKey = (key: string): boolean => {
//     const excludeKeys = ['id', 'createdAt', 'updatedAt'];
//     return !excludeKeys.includes(key);
//   };
//   return (
//     <Box sx={{ flex: 1 }}>
//       <Typography variant="h4" component="h2" gutterBottom>
//         {header}
//       </Typography>
//       <Box sx={{ marginTop: 2 }}>
//         <Table>
//           <TableBody>
//             {Object.entries(data).map(([key, value], index) => (
//               shouldDisplayKey(key) &&
//               (<TableRow key={index}>
//                 <TableCell variant="head">
//                   <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{formatKey(key)}</Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="body1">{typeof value === 'object' && value !== null ? Object.entries(value).map(([key, value]) => (shouldDisplayKey(key) && `${String(value)}, `)) : String(value)}</Typography>
//                 </TableCell>
//               </TableRow>))
//             )}
//           </TableBody>
//         </Table>
//       </Box>
//     </Box>
//   );
// };

import React from "react";

type DataDisplayProps<T> = {
  header: string;
  data: T;
};

export const DataDisplay = <T extends object>({ header, data }: DataDisplayProps<T>) => {
  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
  };

  const shouldDisplayKey = (key: string): boolean => {
    const excludeKeys = ["id", "createdAt", "updatedAt"];
    return !excludeKeys.includes(key);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderValue = (value: any): React.ReactNode => {
    if (typeof value === "object" && value !== null) {
      return (
        <Table>
          <TableBody>
            {Object.entries(value).map(([nestedKey, nestedValue]) =>
              shouldDisplayKey(nestedKey) ? (
                <TableRow key={nestedKey}>
                  <TableCell variant="head" sx={{ paddingLeft: 4 }}>
                    <Typography variant="subtitle2">{formatKey(nestedKey)}</Typography>
                  </TableCell>
                  <TableCell>{renderValue(nestedValue)}</TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      );
    }
    return <Typography variant="body1">{String(value)}</Typography>;
  };

  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {header}
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Table>
          <TableBody>
            {Object.entries(data).map(([key, value]) =>
              shouldDisplayKey(key) ? (
                <TableRow key={key}>
                  <TableCell variant="head">
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                      {formatKey(key)}
                    </Typography>
                  </TableCell>
                  <TableCell>{renderValue(value)}</TableCell>
                </TableRow>
              ) : null
            )}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};
