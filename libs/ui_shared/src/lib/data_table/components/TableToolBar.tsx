import {
  GridApi
} from "@mui/x-data-grid";
import Tooltip from "@mui/material/Tooltip";
import {
  FilterAltOutlined,
  LineWeightOutlined,
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
        <span>
        <Button
          aria-label="filter"
          onClick={() => apiRef.current.showFilterPanel()}
        >
          <FilterAltOutlined />
        </Button>
        </span>
      </Tooltip>
      <Tooltip title="Row Size">
        <span>
        <MenuToolBar
          buttonLabel={<LineWeightOutlined />}
          menuItems={RowDensityMenu}
        />
        </span>
      </Tooltip>
      <Tooltip title="Export">
        <span>
        <MenuToolBar
          buttonLabel={<FileDownloadOutlined />}
          menuItems={ExportMenu}
        />
        </span>
      </Tooltip>
    </ButtonGroup>
  );
};
export default TableToolbar;
