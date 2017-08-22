export class orderDetailModel {
    product : product = new product();
    customer: customer = new customer();
    prepredays:string;
  }
  
  export class customer {
    displayName: string;
    tel: string;
    shipping: address = new address();
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
    img: Array<img>;
    qty: number;
    price: number;
    
  }
  export class img {
    _id:string;
    url:string;
  }