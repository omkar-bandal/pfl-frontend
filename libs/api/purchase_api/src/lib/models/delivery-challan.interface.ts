interface Items {
    itemName: string;
    itemQty: number;
    rate: number;
    amt: number;
  }
  export interface DeliveryChallan {
    grnNo: string;
    senderName: string;
    items: Items;
    totAmt: number;
    fromLocation: string;
    toLocation: string;
    driverName: string;
    contactNo: string;
    altContactNo: string;
    vehicleNo: string;
    receiverName: string;
  }
  