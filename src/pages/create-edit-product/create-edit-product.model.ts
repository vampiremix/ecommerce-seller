export class CategoryListModel {
    categorys: Array<CategoryModel>;
}

export class CategoryModel {
    _id: string;
    parent: string;
    detail: string;
    name: string;
}
