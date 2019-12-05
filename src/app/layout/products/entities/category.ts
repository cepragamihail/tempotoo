export class Category {
    key: string;
    name: string;
    title: string;
    size: string;
    url: string;
    file: File;

    constructor(file: File) {
        this.file = file;
    }
}
