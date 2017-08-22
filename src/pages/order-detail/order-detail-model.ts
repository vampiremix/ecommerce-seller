export class customer {
    displayName: string;
    tel: string;
    address: address = new address();
  }
  
  export class address {
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
  }
  
  export class product {
    name: string;
    img: string;
    qty: number;
    price: number;
    
  }