export class DatasendModel {
    username: string;
    password: string;
    confirm_password: string;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    shop: ShopModel = new ShopModel();
    address :Address = new Address();
    roles: Array<string>

}
export class ShopModel {
    name: string;
}

export class Address {
    address: String
    postcode: String
    subdistrict: String
    province: String
    district: String
    firstName: Array<string>
    lastName: Array<string>
    tel: Array<string>
}