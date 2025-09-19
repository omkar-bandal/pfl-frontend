import { Address, GetOffices } from "@prime-fresh/admin_api";
import { CustomGridColDef } from "@prime-fresh/ui_shared";
import { formatAddress } from "@prime-fresh/shared/modules";
import { useMemo } from "react";

export const useOfficeColumns = (): CustomGridColDef[] => {

    return useMemo(() => [
        {
            field: "name",
            headerName: "Name",
            flex: 1, 
            minWidth: 150,
            isMobileVisible: true,
            hide: false,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1, 
            minWidth: 300,
            hide: false,
            valueGetter: (value: Address) => value ? formatAddress(value) : '',
        },
        {
            field: "pincode",
            headerName: "Pincode",
            flex: 1, 
            minWidth: 100,
            isMobileVisible: true,
            hide: false,
            valueGetter: (value: Address) => value ? value : '',
        },
        {
            field: 'fullName',
            headerName: "Contact Person",
            flex: 1, 
            minWidth: 170,
            hide: false,
            valueGetter: (value: GetOffices) => 
                value ? `${value.cFirstName || ''} ${value.cMiddleName || ''} ${value.cLastName || ''}` : '',
        },
        {
            field: "contactNumber",
            headerName: "Contact",
            flex: 1, 
            minWidth: 100,
            hide: false,
        },
        {
            field: "officeEmail",
            headerName: "Email",
            flex: 1, 
            minWidth: 150,
            hide: false,
        },
        {
            field: "notes",
            headerName: "Remark",
            flex: 1, 
            minWidth: 250,
            hide: true,
        },
    ], []);
};