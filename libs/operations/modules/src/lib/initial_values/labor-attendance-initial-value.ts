import { PostLaborAttendance, PostLaborDetails } from '@prime-fresh/services';

export const laborsDetailsInitialValue: PostLaborDetails = {
  laborType: '',
  labourName: '',
  contactNo: '',
  inTime: '',
  outTime: '',
  amount: 0,
};
export const laborAttendanceInitialValue: PostLaborAttendance = {
  companyName: '',
  location: '',
  date: '',
  labourDetails: [laborsDetailsInitialValue],
  remarks: '',
};
