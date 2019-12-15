export class Product {
    key: string;
    name: string;
    title: string;
    code: string;
    description: string;
    note: string;
    categories: string[];
    tags: string[];
    insertDate: Date;
    url: string;
    file: File;

    constructor( file: File) {
        this.file = file;
    }
}
