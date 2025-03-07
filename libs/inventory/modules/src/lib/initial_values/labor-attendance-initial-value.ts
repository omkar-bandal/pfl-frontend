import { PostLaborAttendance, PostLaborDetails } from "@prime-fresh/inventory_api"

export const laborsDetailsInitialValue: PostLaborDetails = {
    laborType: "",
    labourName: "",
    contactNo: "",
    inTime: "",
    outTime: "",
    amount: 0,
}
export const laborAttendanceInitialValue: PostLaborAttendance = {
    companyName: "",
    location: "",
    date: "",
    labourDetails: [laborsDetailsInitialValue],
    remarks: ""
}