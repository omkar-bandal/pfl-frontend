import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { DynamicFormProps } from "./old_components/models";
// import { generateValidationSchema } from "./functions";
import { FormFields } from "./old_components";
import { useState } from "react";
import { useAppSelector } from '@prime-fresh/modules';
import { formContainerState } from "@prime-fresh/admin/modules";

export const DynamicForm = <T extends object>({ initialValues, schema, validationSchema, handleSubmit }: DynamicFormProps<T>) => {
  const [value, setValue] = useState(0);
  const { openFor } = useAppSelector(formContainerState);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event.target);
    setValue(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ flex: 1 }}>{children}</Box>}
      </div>
    );
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema ? validationSchema : null}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={(values, formikHelpers) => {
        handleSubmit(values as T);
        formikHelpers.setSubmitting(false);
      }}
    >
      {({ handleReset }) => (
        <Form>
          <Box sx={{ flex: 1, paddingX: 2 }}>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h5" component="h5" sx={{ fontWeight: 500 }}>
                  {schema.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ fontWeight: 500 }}
                >
                  {schema.subtitle}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{display: "flex", alignItems: "center", justifyContent: "end"}}>
                <Button
                  variant="contained"
                  size="medium"
                  type="reset"
                  color="secondary"
                  sx={{ width: 150, marginRight: 5 }}
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{ width: 150 }}
                >
                  {openFor === 'create' ? `Create` : `Update`}
                </Button>
              </Grid>
            </Grid>
          </Box>
          {schema.tabs &&
            (<Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile>
                {schema.tabs?.map((tabname, index) => (
                  <Tab label={tabname} value={index} sx={{ textTransform: 'none', fontSize: 16, fontWeight: 600 }} />
                ))}
              </Tabs>
            </Box>)
          }
          {schema.tabpanels && (schema.tabpanels?.map((tabdetails, index) => (
            <CustomTabPanel value={value} index={index}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={1}
                alignItems="center"
                sx={{ marginY: 1, paddingX: 2, paddingY: 1 }}
              >
                <FormFields fields={tabdetails.fields} />
              </Grid>
            </CustomTabPanel>
          )))}
          {schema.fields && (<Grid
            container
            rowSpacing={2}
            columnSpacing={1}
            alignItems="center"
            sx={{ marginY: 1, paddingX: 2, paddingY: 1 }}
          ><FormFields fields={schema.fields} /></Grid>)}
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;
