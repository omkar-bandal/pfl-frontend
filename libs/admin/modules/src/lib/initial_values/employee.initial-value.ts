import { PostEmployee } from '@prime-fresh/admin_api';
import { initValAddress } from './address.initial-value';

export const initValEmployee: PostEmployee = {
  firstName: null,
  middleName: null,
  lastName: null,
  username: null,
  primaryMobNo: null,
  primaryEmail: null,
  secondaryMobNo: null,
  secondaryEmail: null,
  residentialAddress: initValAddress,
  permanentAddress: initValAddress,
  companyName: null,
  designation: null,
  joiningDate: null,
  joiningLocation: null,
  currentWorkLocation: null,
  otherWorkLocationInput: null,
  accessLocation: [],
  cugNo: null,
  workEmail: null,
  currentLevel: null,
  reportingManagers: [ {
    level: null,
    reportingTo: [],
  },],
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
