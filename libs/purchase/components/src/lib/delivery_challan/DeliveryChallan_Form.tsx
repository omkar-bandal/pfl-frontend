import {
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { FieldArray, Formik } from "formik";
import { Add, Close } from "@mui/icons-material";
import { initValDeliveryChallan, initValMaterials } from "@prime-fresh/purchase/modules";
import { TextInput } from "@prime-fresh/ui_shared";

//Labour Payment Voucher
export const DeliveryChallanForm = () => {
  const allgrn = ["GRN0001", "GRN0002", "GRN0003"];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <Formik
      initialValues={initValDeliveryChallan}
      onSubmit={(values) => {
        console.log(values); // Output the form data
      }}
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={1} rowSpacing={1} padding={1}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4">Delivery Challan</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack direction="row" justifyContent="end" alignItems="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  size="large"
                  sx={{ width: 150 }}
                >
                  Create
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ width: 150, marginLeft: 2 }}
                >
                  Reset
                </Button>
              </Stack>
            </Grid>

            {/* GRN No. */}
            <Grid item xs={12} md={3}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography variant="body2">Select GRN</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Select
                      id="grnNo"
                      name="grnNo"
                      size="small"
                      value={values.grnNo} // Bind to Formik values
                      onChange={(e) => {
                        const value = e.target.value;
                        setFieldValue("grnNo", value); // Update Formik state
                      }}
                      MenuProps={MenuProps}
                    >
                      {allgrn.map((grn, index) => (
                        <MenuItem key={index} value={grn}>
                          {grn}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            {/* Other form fields */}
            <Grid item xs={12} md={9}>
              <TextInput
                type="text"
                isRequired={true}
                name="senderName"
                label="M/s"
                value={values.senderName}
                handleChange={handleChange}
              />
            </Grid>
            {/* FieldArray for materials */}
            <Grid item xs={12}>
              <FieldArray name="items">
                {({ remove, push }) => (
                  <>
                    {values.items.map((item, index) => (
                      <Grid
                        container
                        columnSpacing={1}
                        key={index}
                        alignItems="center"
                        sx={{
                          border: `1px solid #BDBDBD`,
                          marginY: 1,
                          padding: 1,
                          borderRadius: 2,
                        }}
                      >
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                          <Typography variant="body1" component="div">Product : {index+1}</Typography>
                          <IconButton color="error" onClick={() => remove(index)}>
                            <Close />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`items.${index}.itemName`}
                            label="Name"
                            value={item.itemName}
                            handleChange={handleChange}
                          />
                        </Grid>
                        {/* More material fields */}
                        <Grid item xs={12} md={2}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`items.${index}.itemQty`}
                            label="Quantity"
                            value={item.itemQty}
                            handleChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`items.${index}.rate`}
                            label="Rate"
                            value={item.rate}
                            handleChange={handleChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <TextInput
                            type="text"
                            isRequired={false}
                            name={`items.${index}.amt`}
                            label="Amount"
                            value={item.amt}
                            handleChange={handleChange}
                          />
                        </Grid>
                      </Grid>
                    ))}
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                      }}
                    >
                      <Button
                        variant="text"
                        startIcon={<Add />}
                        onClick={() => push(initValMaterials)}
                      >
                        Add More
                      </Button>
                    </Grid>
                  </>
                )}
              </FieldArray>
            </Grid>
            <Grid item xs={12} md={2}>
              <TextInput
                type="number"
                isRequired={false}
                name="totAmt"
                label="Total Amount"
                value={values.totAmt}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextInput
                type="text"
                isRequired={false}
                name="fromLocation"
                label="From"
                value={values.fromLocation}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <TextInput
                type="text"
                isRequired={false}
                name="toLocation"
                label="To"
                value={values.toLocation}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={false}
                name="driverName"
                label="Driver Name"
                value={values.driverName}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={false}
                name="contactNo"
                label="Contact No"
                value={values.contactNo}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={true}
                name="altContactNo"
                label="Alternate Contact No"
                value={values.altContactNo}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextInput
                type="text"
                isRequired={true}
                name="vehicleNo"
                label="Vehicle No"
                value={values.vehicleNo}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextInput
                type="text"
                isRequired={true}
                name="receiverName"
                label="Receiver Name"
                value={values.receiverName}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};