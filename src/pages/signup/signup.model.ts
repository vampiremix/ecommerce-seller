export class DatasendModel {
    username: string;
    password: string;
    confirm_password: string;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    shop: ShopModel = new ShopModel();
    address: Address = new Address();
    roles: Array<string>;

}
export class ShopModel {
    name: string;
}

export class Address {
    address: string;
    postcode: string;
    subdistrict: string;
    province: string;
    district: string;
    firstname: string;
    lastname: string;
    tel: string;
}