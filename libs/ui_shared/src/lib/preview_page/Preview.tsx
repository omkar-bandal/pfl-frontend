import { Box, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

// const TextPreview = ({ label, value }: { label: string, value: any }) => {
//   return (
//     <>
//       <Grid item>
//         <Typography variant="h6" component="span" sx={{ color: "#555" }}>
//           {label} : <Typography variant="h6" component="span" sx={{ color: "#000000", fontWeight: 700 }}>{value}
//           </Typography>
//         </Typography>
//       </Grid>
//     </>
//   )
// }

// const TablePreview = ({ tableHeaders, tableCells }: { tableHeaders: string[], tableCells: any }) => {
//   return (
//     <>
//       <Grid item>
//         <TableContainer component={Box}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 {tableHeaders.map((headers, index) => (
//                   <TableCell key={index} align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>{headers}</TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {tableCells.map((cells, index) => (
//                 <TableRow
//                   key={index}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   {Object.entries(cells).map(([key, value]) => (
//                     <TableCell key={key} align="center" sx={{ fontWeight: 400, fontSize: 16 }}>{JSON.stringify(value)}</TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Grid>
//     </>
//   )
// }

export const Preview = () => {
  return (
    <></>
  )
};
