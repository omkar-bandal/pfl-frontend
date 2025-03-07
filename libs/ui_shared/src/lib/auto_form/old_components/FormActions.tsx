import React from "react";
import { Box, Button } from "@mui/material";
import { useAppSelector } from "@prime-fresh/modules";
import { openForState } from "@prime-fresh/admin/modules";

export const FormActions: React.FC = () => {
  const oepnFormFor = useAppSelector(openForState);
  return (
    <Box
      sx={{
        width: `100%`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        size="large"
        type="reset"
        color="secondary"
        sx={{ width: 250, marginRight: 10 }}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{ width: 250 }}
      >
        {oepnFormFor === 'create' ? `Create` : `Update`}
      </Button>
    </Box>
  );
};

