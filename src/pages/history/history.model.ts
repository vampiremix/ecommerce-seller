export class historyModel {
    paid: listorder = new listorder();
    unpay: listorder = new listorder();
}

export class listorder {
    listorder: Array<history>;
    amount: number;
}

export class history {
    ordernumber: string;
    productname: string;
    unit: number;
    unitprice: number;
    img: Array<img>;
    day: string;
    status: string;
}
export class img {
    url: string;
    id: string;

}