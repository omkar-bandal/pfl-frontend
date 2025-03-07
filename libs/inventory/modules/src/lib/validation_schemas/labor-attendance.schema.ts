import * as yup from 'yup';
export const laborAttendanceSchema = yup.object().shape({
    companyName: yup.string().required("Company name is required."),
    location: yup.string().required("Location is required"),
    date: yup.date().required("Date is required"),
    labourDetails: yup.array(
        yup.object({
            labourName: yup.string().required("Labour name is required"),
            contactNo: yup.string().required("Contact No is required"),
            inTime: yup.string().required("In time is required"),
            // outTime: yup.string().required("Out time is required."),
        })
    )
})