import { FC, memo, useMemo, useCallback } from "react";
import { Grid } from "@mui/material";
import { GetFilteredBranchData } from "@prime-fresh/admin_api";
import { PostDeliveryChallan } from "@prime-fresh/purchase_api";
import { mapToValueLabelArray } from "@prime-fresh/shared/modules";
import { AutoCompleteInput, FormAccordion, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";

type FromLocationProps = {
    locations: GetFilteredBranchData[];
    loading?: boolean;
};

export const FromLocation: FC<FromLocationProps> = memo(({ locations, loading }) => {
    const { values, handleChange } = useFormikContext<PostDeliveryChallan>();
    const { deliveryCType, fromLocation, fromLocationInput } = values;

    const allLocations = useMemo(() =>
        locations ? mapToValueLabelArray(locations, "id", "name") : [],
        [locations]
    );

    const allCCLocations = useMemo(() =>
        locations ? mapToValueLabelArray(locations.filter(loc => loc.type === "collection-center"), "id", "name") : [],
        [locations]
    );

    const allDCLocations = useMemo(() =>
        locations ? mapToValueLabelArray(locations.filter(loc => loc.type === "distribution-center"), "id", "name") : [],
        [locations]
    );

    const getFromLocations = useCallback((value: string | null) => {
        switch (value) {
            case "customer":
                return allLocations;
            case "cc-dc stock transfer":
                return allCCLocations;
            case "dc-dc stock transfer":
                return allDCLocations;
            default:
                return [];
        }
    }, [allLocations, allCCLocations, allDCLocations]);

    if (deliveryCType !== null && ["customer", "cc-dc stock transfer", "dc-dc stock transfer"].includes(deliveryCType)) {
        return (
            <Grid item xs={12} md={deliveryCType !== "customer" ? 6 : 3}>
                <AutoCompleteInput
                    isRequired
                    loading={loading}
                    name="fromLocation"
                    label="From Location"
                    options={getFromLocations(deliveryCType) || []}
                />
            </Grid>
        );
    }

    if (deliveryCType === "other" && typeof fromLocation !== "string") {
        return (
            <Grid item xs={12}>
                <FormAccordion panel="From Location">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`fromLocationInput.address1`}
                                label="Address Line 1"
                                value={fromLocationInput?.address1 || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                type="text"
                                isRequired={false}
                                name={`fromLocationInput.address2`}
                                label="Address Line 2"
                                value={fromLocationInput?.address2 || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`fromLocationInput.location`}
                                label="Location"
                                value={fromLocationInput?.location || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`fromLocationInput.city`}
                                label="City"
                                value={fromLocationInput?.city || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`fromLocationInput.state`}
                                label="State"
                                value={fromLocationInput?.state || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`fromLocationInput.pincode`}
                                label="Pincode"
                                value={fromLocationInput?.pincode || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                </FormAccordion>
            </Grid>
        );
    }
    return null;
});
