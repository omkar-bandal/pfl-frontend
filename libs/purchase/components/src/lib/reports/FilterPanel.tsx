/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from 'react'
import { GRNFilterParams } from './models/grn-filter-params'
import { Autocomplete, CircularProgress, Grid2, TextField } from '@mui/material'
import { Dropdown } from './components/dropdown'
import { PURCHASE_ARRAYS } from '@prime-fresh/purchase/modules';
import { debounce, mapToValueLabelArray, useGetBranchesPartialData, useGetCompanyNames, useGetFarmersPartialData, useGetVendorsPartialData } from '@prime-fresh/shared/modules';
import { DownloadButton, PageTitle } from '@prime-fresh/ui_shared';

type FilterPanelProps = {
    filterParams: GRNFilterParams,
    setFilterParams: React.Dispatch<React.SetStateAction<GRNFilterParams>>,
    fileUrl?: string,
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ filterParams, setFilterParams, fileUrl }) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { data: companies } = useGetCompanyNames();
    const companyNames = companies?.data ? mapToValueLabelArray(companies.data, 'id', 'name') : [];
    const { data: loc } = useGetBranchesPartialData();
    const branches = loc?.data ? mapToValueLabelArray(loc.data, 'id', 'name') : [];
    const { data: farmer } = useGetFarmersPartialData();
    const Farmers = farmer?.data ? mapToValueLabelArray(farmer.data, 'id', 'fullName') : [];
    const { data: vendor } = useGetVendorsPartialData();
    const Vendors = vendor?.data ? mapToValueLabelArray(vendor.data, 'id', 'companyName') : [];

    const debouncedInputChange = useCallback(
        debounce((value: string) => {
            setSearchInput(value);
            setErrorMessage(null);
        }, 600),
        []
    );

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFilterParams(prev => ({ ...prev, [name]: value }));
    };

    return (
        <Grid2 container rowSpacing={1} columnSpacing={1} marginY={1} padding={1} sx={{ border: `1px solid #666666`, borderRadius: 2 }}>
            <Grid2 size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <PageTitle pagetitle='Filter Panel' />
                {/* <DownloadButton fileUrl={fileUrl} /> */}
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
                <Dropdown
                    label="Companies"
                    name="companyName"
                    value={filterParams.companyName}
                    onChange={(e) => handleChange(e)}
                    options={companyNames}
                    noOptionsMessage="No options available" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <Dropdown
                    label="Purchase Location"
                    name="purchaseLocation"
                    value={filterParams.purchaseLocation}
                    onChange={(e) => handleChange(e)}
                    options={branches}
                    noOptionsMessage="No options available" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 3 }}>
                <Dropdown
                    label="Purchase For Sales Location"
                    name="purchaseForSalesLocation"
                    value={filterParams.purchaseForSalesLocation}
                    onChange={(e) => handleChange(e)}
                    options={branches}
                    noOptionsMessage="No options available" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
                <Dropdown
                    label="GRN Type"
                    name="grnType"
                    value={filterParams.grnType}
                    onChange={(e) => handleChange(e)}
                    options={PURCHASE_ARRAYS.grnType}
                    noOptionsMessage="No options available" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
                <Dropdown
                    label="Location Type"
                    name="locationType"
                    value={filterParams.locationType}
                    onChange={(e) => handleChange(e)}
                    options={PURCHASE_ARRAYS.locationType}
                    noOptionsMessage="No options available" />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 2 }}>
                <Dropdown
                    label="Source"
                    name="source"
                    value={filterParams.source}
                    onChange={(e) => handleChange(e)}
                    options={PURCHASE_ARRAYS.source}
                    noOptionsMessage="No options available" />
            </Grid2>
        </Grid2>
    )
}

