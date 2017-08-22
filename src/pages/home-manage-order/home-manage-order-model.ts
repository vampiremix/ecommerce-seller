export class homeModel {
    listorders: Array<order>;
}

export class order {
    _id: string;
    productname: string;
    qty: number;
    amount: number;
}