import {IDealSlip} from '@prime-fresh/services';

export const dealSlipInitialValue: Omit<IDealSlip, 'id'> = {
    rfpa: '',
    lotNo: '',
    loadingLocation: '',
    remark: '',
    specialRequest:'',
}