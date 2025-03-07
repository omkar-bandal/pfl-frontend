import { Add, Close } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, IconButton, Typography } from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { PURCHASE_ARRAYS } from "@prime-fresh/purchase/modules";
import { salesOrderInitialValues, salesOrderProductsInitialValues } from "@prime-fresh/sales/modules";
import { FormResetBtn, FormSubmitBtn, SelectInput, TextInput } from "@prime-fresh/ui_shared";
import { FieldArray, Formik } from "formik";

export const SalesOrderCreateForm = () => {
    return (
        <Formik
            enableReinitialize={true}
            initialValues={salesOrderInitialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values, handleChange, handleSubmit, handleReset, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4">
                                Sales Order
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <FormSubmitBtn isSubmitting={isSubmitting} isError={null} label="Create" />
                            <FormResetBtn label="Reset" handleReset={handleReset} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <SelectInput
                                isRequired={true}
                                label="Company Name"
                                name="companyName"
                                options={PURCHASE_ARRAYS.companyNames}
                                value={values.companyName}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="text"
                                isRequired={true}
                                name="poNumber"
                                label="PO Number"
                                value={values.poNumber}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                type="date"
                                isRequired={true}
                                name="debitCreditTo"
                                label="Debit / Credit To"
                                value={values.poDate}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{
                                boxShadow: 'none',
                                border: `1px solid #ccc`,
                                '&:before': {
                                    display: 'none',
                                },
                            }}>
                                <AccordionSummary
                                    expandIcon={<GridExpandMoreIcon fontSize="small" />}
                                    aria-controls="panel1-content"
                                    id="panel1-header">
                                    <Typography variant="body2" component="span">Bill To</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.name"
                                                label="Name"
                                                value={values.billTo.name}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.contactNo"
                                                label="Contact No"
                                                value={values.billTo.contactNo}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="billTo.gstn"
                                                label="GST Number"
                                                value={values.billTo.gstn}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.address.address1"
                                                label="Address1"
                                                value={values.billTo.address.address1}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="billTo.address.address2"
                                                label="Address2"
                                                value={values.billTo.address.address2}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.address.location"
                                                label="Location"
                                                value={values.billTo.address.location}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.address.city"
                                                label="City"
                                                value={values.billTo.address.city}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.address.state"
                                                label="State"
                                                value={values.billTo.address.state}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billTo.address.pincode"
                                                label="Pincode"
                                                value={values.billTo.address.pincode}
                                                handleChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{
                                boxShadow: 'none',
                                border: `1px solid #ccc`,
                                '&:before': {
                                    display: 'none',
                                },
                            }}>
                                <AccordionSummary
                                    expandIcon={<GridExpandMoreIcon fontSize="small" />}
                                    aria-controls="panel1-content"
                                    id="panel1-header">
                                    <Typography variant="body2" component="span">Shipped To</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.name"
                                                label="Name"
                                                value={values.shippedTo.name}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.contactNo"
                                                label="Contact No"
                                                value={values.shippedTo.contactNo}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="shippedTo.gstn"
                                                label="GST Number"
                                                value={values.shippedTo.gstn}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.address.address1"
                                                label="Address1"
                                                value={values.shippedTo.address.address1}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="shippedTo.address.address2"
                                                label="Address2"
                                                value={values.shippedTo.address.address2}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.address.location"
                                                label="Location"
                                                value={values.shippedTo.address.location}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.address.city"
                                                label="City"
                                                value={values.shippedTo.address.city}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.address.state"
                                                label="State"
                                                value={values.shippedTo.address.state}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedTo.address.pincode"
                                                label="Pincode"
                                                value={values.shippedTo.address.pincode}
                                                handleChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{
                                boxShadow: 'none',
                                border: `1px solid #ccc`,
                                '&:before': {
                                    display: 'none',
                                },
                            }}>
                                <AccordionSummary
                                    expandIcon={<GridExpandMoreIcon fontSize="small" />}
                                    aria-controls="panel1-content"
                                    id="panel1-header">
                                    <Typography variant="body2" component="span">Bill From</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.name"
                                                label="Name"
                                                value={values.billFrom.name}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.contactNo"
                                                label="Contact No"
                                                value={values.billFrom.contactNo}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="billFrom.gstn"
                                                label="GST Number"
                                                value={values.billFrom.gstn}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.address.address1"
                                                label="Address1"
                                                value={values.billFrom.address.address1}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="billFrom.address.address2"
                                                label="Address2"
                                                value={values.billFrom.address.address2}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.address.location"
                                                label="Location"
                                                value={values.billFrom.address.location}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.address.city"
                                                label="City"
                                                value={values.billFrom.address.city}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.address.state"
                                                label="State"
                                                value={values.billFrom.address.state}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="billFrom.address.pincode"
                                                label="Pincode"
                                                value={values.billFrom.address.pincode}
                                                handleChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12}>
                            <Accordion sx={{
                                boxShadow: 'none',
                                border: `1px solid #ccc`,
                                '&:before': {
                                    display: 'none',
                                },
                            }}>
                                <AccordionSummary
                                    expandIcon={<GridExpandMoreIcon fontSize="small" />}
                                    aria-controls="panel1-content"
                                    id="panel1-header">
                                    <Typography variant="body2" component="span">Shipped From</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.name"
                                                label="Name"
                                                value={values.shippedFrom.name}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.contactNo"
                                                label="Contact No"
                                                value={values.shippedFrom.contactNo}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="shippedFrom.gstn"
                                                label="GST Number"
                                                value={values.shippedFrom.gstn}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.address.address1"
                                                label="Address1"
                                                value={values.shippedFrom.address.address1}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TextInput
                                                type="text"
                                                isRequired={false}
                                                name="shippedFrom.address.address2"
                                                label="Address2"
                                                value={values.shippedFrom.address.address2}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.address.location"
                                                label="Location"
                                                value={values.shippedFrom.address.location}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.address.city"
                                                label="City"
                                                value={values.shippedFrom.address.city}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.address.state"
                                                label="State"
                                                value={values.shippedFrom.address.state}
                                                handleChange={handleChange} />
                                        </Grid>
                                        <Grid item xs={12} md={3}>
                                            <TextInput
                                                type="text"
                                                isRequired={true}
                                                name="shippedFrom.address.pincode"
                                                label="Pincode"
                                                value={values.shippedFrom.address.pincode}
                                                handleChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={12} marginY={2}>
                            <Box sx={{ width: '100%', borderBottom: '1px solid #BDBDBD' }}>
                                <Typography variant='body2' sx={{ fontWeight: 600 }}>Sales Order Products</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <FieldArray name="saleProducts">
                                {({ remove, push }) => (
                                    <>
                                        {values.saleProducts.map((_, index) => (
                                            <Grid container columnSpacing={1} key={index} alignItems="center">
                                                <Grid item xs={12} md={5}>
                                                    <TextInput
                                                        type="text"
                                                        isRequired={true}
                                                        name={`saleProducts.${index}.productName`}
                                                        label="Product Name"
                                                        value={values.saleProducts[index].productName}
                                                        handleChange={handleChange} />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <SelectInput
                                                        isRequired={true}
                                                        name={`saleProducts.${index}.uom`}
                                                        label="UOM"
                                                        options={[]}
                                                        value={values.saleProducts[index].uom}
                                                        handleChange={handleChange} />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <TextInput
                                                        type="number"
                                                        isRequired={true}
                                                        name={`saleProducts.${index}.quantity`}
                                                        label="Quantity"
                                                        value={values.saleProducts[index].quantity}
                                                        handleChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={2}>
                                                    <TextInput
                                                        type="number"
                                                        isRequired={true}
                                                        name={`saleProducts.${index}.pricePerUnit`}
                                                        label="Unit Price"
                                                        value={values.saleProducts[index].pricePerUnit}
                                                        handleChange={handleChange} />
                                                </Grid>
                                                <Grid item xs={12} md={1} sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}>
                                                    <IconButton color="success" onClick={() => push(salesOrderProductsInitialValues)} sx={{ marginTop: 2 }}>
                                                        <Add />
                                                    </IconButton>
                                                    {values.saleProducts.length > 1 && <IconButton color="error" onClick={() => remove(index)} sx={{ marginTop: 2 }}>
                                                        <Close />
                                                    </IconButton>}
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </>
                                )}
                            </FieldArray>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={true}
                                type="number"
                                name="gst"
                                label="GST"
                                value={values.gst}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={true}
                                isReadOnly={true}
                                type="number"
                                name="taxAmount"
                                label="Tax Amount"
                                value={values.taxAmount}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={true}
                                type="number"
                                name="totalDeduction"
                                label="Total Deduction"
                                value={values.totalDeduction}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="labourCharges"
                                label="Labour Charges"
                                value={values.labourCharges}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="transportationCharges"
                                label="Transportation Charges"
                                value={values.transportationCharges}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="otherCharges"
                                label="Other Charges"
                                value={values.otherCharges}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="totalAmount"
                                label="Total Amount"
                                value={values.totalAmount}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={false}
                                type="number"
                                name="grandTotalAmount"
                                label="Grand Total Amount"
                                value={values.grandTotalAmount}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextInput
                                isRequired={false}
                                type="text"
                                name="vehicleNo"
                                label="Vehicle Number"
                                value={values.vehicleNo}
                                handleChange={handleChange} />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <TextInput
                                isRequired={false}
                                multiline
                                maxRows={2}
                                type="text"
                                name="remark"
                                label="Remark"
                                value={values.remark}
                                handleChange={handleChange} />
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}