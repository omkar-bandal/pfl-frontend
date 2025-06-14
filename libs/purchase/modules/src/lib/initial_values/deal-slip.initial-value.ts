import {IDealSlip} from '@prime-fresh/purchase_api';

export const dealSlipInitialValue: Omit<IDealSlip, 'id'> = {
    rfpa: '',
    lotNo: '',
    loadingLocation: '',
    remark: '',
    specialRequest:'',
}