import {
  GridApi
} from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import {
  FilterAltOutlined,
  SwapVertOutlined,
  LineWeightOutlined,
  ViewColumn,
  FileDownloadOutlined
} from "@mui/icons-material";
import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { DensityMedium, DensitySmall, FormatAlignJustify, Description, PictureAsPdf } from '@mui/icons-material';
import MenuToolBar from "./MenuToolBar";

interface DataTableProps {
  apiRef: React.MutableRefObject<GridApi>;
}
export const TableToolbar: React.FC<DataTableProps> = ({ apiRef }) => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const RowDensityMenu = [
    { label: "Comfortable", logo: <DensityMedium fontSize="small" />, onClick: () => apiRef.current.setDensity("comfortable") },
    { label: "Standard", logo: <DensitySmall fontSize="small" />, onClick: () => apiRef.current.setDensity("standard") },
    { label: "Compact", logo: <FormatAlignJustify fontSize="small" />, onClick: () => apiRef.current.setDensity("compact") },
  ]
  const ExportMenu = [
    { label: "Download CSV", logo: <Description fontSize="small" />, onClick: () => apiRef.current.exportDataAsCsv() },
    { label: "Download PDF", logo: <PictureAsPdf fontSize="small" />, onClick: () => apiRef.current.exportDataAsPrint() },
  ]
  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Tooltip title="Filters">
        <Button
          aria-label="filter"
          onClick={() => apiRef.current.showFilterPanel()}
        >
          <FilterAltOutlined />
        </Button>
      </Tooltip>
      <Tooltip title="Row Size">
        <MenuToolBar
          buttonLabel={<LineWeightOutlined />}
          menuItems={RowDensityMenu}
        />
      </Tooltip>
      {/* <Tooltip title="Sort">
        <Button aria-label="sort" onClick={() => apiRef.current.sortColumn('id', 'desc')}>
          <SwapVertOutlined />
        </Button>
      </Tooltip> */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        </Box>
      </Modal> */}
      <Tooltip title="Export">
        <MenuToolBar
          buttonLabel={<FileDownloadOutlined />}
          menuItems={ExportMenu}
        />
      </Tooltip>
    </ButtonGroup>
  );
};
export default TableToolbar;
