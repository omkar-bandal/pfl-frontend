import { FC, memo, useMemo } from "react";
import { Grid} from "@mui/material";
import { PostDeliveryChallan } from "@prime-fresh/purchase_api";
import { mapToValueLabelArray } from "@prime-fresh/shared/utils";
import { AutoCompleteInput, FormAccordion, TextInput } from "@prime-fresh/ui_shared";
import { useFormikContext } from "formik";
import { displayAddress } from "@prime-fresh/purchase/modules";
import { useGetCustomerPartialData } from "@prime-fresh/shared/modules";
import {BranchPartialData} from "@prime-fresh/common_api";
type ToLocationProps = {
    locations: BranchPartialData[];
};

export const ToLocation: FC<ToLocationProps> = memo(({ locations }) => {
    const { values, setFieldValue, handleChange } = useFormikContext<PostDeliveryChallan>();
    const { deliveryCType, partyName, toLocation, toLocationInput } = values;
    const customerId = deliveryCType === "customer" ? partyName : null
    const { data } = useGetCustomerPartialData(customerId || "");
    const customer = data?.data ? data.data : null;
    const allDCLocations = useMemo(() =>
        locations ? mapToValueLabelArray(locations.filter(loc => loc.type === "distribution-center"), "id", "name") : [],
        [locations]
    );

    if (deliveryCType !== null && deliveryCType === "customer") {
        return (
            <Grid item xs={12} md={9}>
                <TextInput
                    isRequired={false}
                    isReadOnly={true}
                    name="toLocation"
                    label="To Location"
                    value={displayAddress(customer?.deliveryAddress)} />
            </Grid>
        )
    }

    if (deliveryCType !== null && ["cc-dc stock transfer", "dc-dc stock transfer"].includes(deliveryCType)) {
        return (
            <Grid item xs={12} md={6}>
                <AutoCompleteInput
                    isRequired
                    name="toLocation"
                    label="To Location"
                    options={allDCLocations}
                    handleChange={(event, newValue) =>
                        setFieldValue("toLocation", newValue ? newValue : "")
                    }
                />
            </Grid>
        );
    }

    if (deliveryCType === "other" && typeof toLocation !== "string") {
        return (
            <Grid item xs={12}>
                <FormAccordion panel="To Location">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`toLocationInput.address1`}
                                label="Address Line 1"
                                value={toLocationInput?.address1 || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`toLocationInput.address2`}
                                label="Address Line 2"
                                value={toLocationInput?.address2 || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`toLocationInput.location`}
                                label="Location"
                                value={toLocationInput?.location || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`toLocationInput.city`}
                                label="City"
                                value={toLocationInput?.city || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`toLocationInput.state`}
                                label="State"
                                value={toLocationInput?.state || ""}
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name={`toLocationInput.pincode`}
                                label="Pincode"
                                value={toLocationInput?.pincode || ""}
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
