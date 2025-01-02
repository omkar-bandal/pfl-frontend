export type PostLaborDetails = {
    laborType: string;
    labourName: string;
    contactNo: string;
    inTime: string;
    outTime: string;
    amount: number;
};
export type GetLaborDetails = {
    id: string;
} & PostLaborDetails;
export type PostLaborAttendance = {
    companyName: string;
    location: string;
    date: string;
    labourDetails: PostLaborDetails[];
    remarks: string;
};
export type GetLaborAttendance = {
    id: string;
    companyName: string;
    location: string;
    date: string;
    labourDetails: GetLaborDetails[];
    remarks: string;
};
