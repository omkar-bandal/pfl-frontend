import { sharedApiUrls } from '../constants';
import { BaseService, ApiBaseState } from '../../base';
import { AllCompaniesData, CompanyNamesData, INotification, GetAddressByPincode } from '../models';

export class SharedService extends BaseService {
  public static _instance: SharedService;

  public static getInstance(): SharedService {
    return this._instance || (this._instance = new this());
  }

  //Get address by pincode
  getAddressByPincode(pincode: string | null): Promise<GetAddressByPincode> {
    const url = `${sharedApiUrls.GET_ADDRESS_BY_PINCODE}${pincode}`;
    return this.get(url);
  }

  //Notifications
  getAllUserNotifications(): Promise<ApiBaseState<INotification[]>> {
    const url = sharedApiUrls.GET_NOTIFICATIONS_BY_USER;
    return this.get(url);
  }

  //Company Details
  getAllCompaniesData(): Promise<ApiBaseState<AllCompaniesData[]>> {
    const url = sharedApiUrls.GET_ALL_COMPANIES_DATA;
    return this.get(url);
  }

  getCompanyNames(): Promise<ApiBaseState<CompanyNamesData[]>> {
    const url = sharedApiUrls.GET_COMPANY_NAMES;
    return this.get(url);
  }
}
