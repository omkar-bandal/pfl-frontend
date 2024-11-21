// import { CircularProgress } from "@mui/material"
import { Box, LinearProgress } from "@mui/material";
import { ADMIN_API_URL, useGetAOffice } from "@prime-fresh/admin_api";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const ViewOffice = () => {
  const { id, officeType } = useParams<{ id: string, officeType: string }>();
  const officeId = id ? id : '';
  const urlOffice = officeType === "REGISTERED_OFFICE" ? ADMIN_API_URL.GET_A_REGI_OFFICES : ADMIN_API_URL.GET_A_CORP_OFFICES;
  const {data: Office, isLoading} = useGetAOffice(urlOffice, officeId);
  const office = Office ? Office : {};
  if (isLoading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }
  else {
    return (
      <DataDisplay header="Office Details" data={office}/>
    )
  }
}

