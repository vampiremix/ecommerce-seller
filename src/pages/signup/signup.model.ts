export class DatasendModel {
    username: string;
    password: string;
    confirm_password: string;
    firstName: string;
    lastName: string;
    email: string;
    tel: string;
    shop: ShopModel = new ShopModel();
    roles: Array<string>
}
export class ShopModel {
    name: string;
}