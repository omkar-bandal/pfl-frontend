import { IReturnByCustomer, IReturnedProducts } from '../../../../../api/sales_api/src/index.ts';

export declare const returnedProductsInitialValues: IReturnedProducts;
export declare const returnedByCustomerInitialValues: Omit<IReturnByCustomer, 'id'>;
