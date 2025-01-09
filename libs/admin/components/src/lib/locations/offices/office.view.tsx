// import { CircularProgress } from "@mui/material"
import { Box, LinearProgress } from "@mui/material";
import { ADMIN_API_URL, useGetAOffice } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const OfficeView = () => {
  const { id } = useParams<{ id: string }>();
  const officeId = id ? id : '';
  const { data: Office, isLoading } = useGetAOffice(ADMIN_API_URL.GET_A_OFFICE, officeId);
  const office = Office ? Office : {};

  return (
    isLoading ? (
      <Box>
        <LinearProgress />
      </Box>
    ) :

      <DataDisplay header="Office Details" data={office} />
  )
}


