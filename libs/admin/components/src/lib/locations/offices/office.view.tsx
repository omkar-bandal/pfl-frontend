// import { CircularProgress } from "@mui/material"
import { Box, LinearProgress } from "@mui/material";
import { useGetOfficeById } from "@prime-fresh/admin/modules";
import { DataDisplay } from "@prime-fresh/ui_shared";
import { useParams } from "react-router-dom";

export const OfficeView = () => {
  const { id, officeType } = useParams<{ id: string, officeType: string }>();
  const officeId = id ? id : '';
  const officetype = officeType ? officeType : '';
  const { data: Office, isLoading } = useGetOfficeById(officeId, officetype);
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


