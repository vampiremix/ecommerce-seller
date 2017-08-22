export class historyModel {
    paid: Array<history>;
    unpay: Array<history>;
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