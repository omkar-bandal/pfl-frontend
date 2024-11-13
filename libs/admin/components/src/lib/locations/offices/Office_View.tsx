// import { CircularProgress } from "@mui/material"
import { ADMIN_API_URL, useGetAOffice } from "@prime-fresh/admin_api";
// import DataDisplay from "../../../components/DataDispaly"
import { useParams } from "react-router-dom";

export const OfficeView = () => {
  const { id, officeType } = useParams<{ id: string, officeType: string }>();
  const officeId = id ? id : '';
  const urlOffice = officeType === "REGISTERED_OFFICE" ? ADMIN_API_URL.GET_A_REGI_OFFICES : ADMIN_API_URL.GET_A_CORP_OFFICES;
  const {data: Office} = useGetAOffice(urlOffice, officeId);
  return (
    <>
    {/* {Office ? <DataDisplay header="Office Details" data={Office}/> : <CircularProgress />} */}
    </>
  )
}

