import { IEmployee } from '@prime-fresh/services';
import { initValAddress } from './address.initial-value';

export const initValEmployee: Omit<IEmployee,'id'> = {
  firstName: null,
  middleName: null,
  lastName: null,
  username: null,
  primaryMobNo: null,
  primaryEmail: null,
  secondaryMobNo: null,
  secondaryEmail: null,
  residentialAddress: initValAddress,
  isAddressSame: false,
  permanentAddress: initValAddress,
  companyName: [],
  department: [],
  designation: null,
  joiningDate: null,
  joiningLocation: null,
  currentWorkLocation: null,
  otherWorkLocationInput: null,
  accessLocation: [],
  cugNo: null,
  workEmail: null,
  roles: [],
  permissions: [
    {
      documentDefinition: null,
      canCreate: false,
      canView: false,
      canEdit: false,
      canDelete: false,
      canDownload: false,
    }
  ]
};
