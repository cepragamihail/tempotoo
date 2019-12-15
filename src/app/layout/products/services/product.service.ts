import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Product } from '../entities/product';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private basePath = '/products';

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  pushProductToStorage(productObject: Product): Observable<number> {
    const filePath = `${this.basePath}/${productObject.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, productObject.file);
   
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          productObject.url = downloadURL;
          productObject.name = productObject.file.name;
          this.saveProductData(productObject);
        });
      })
    ).subscribe();
   
    return uploadTask.percentageChanges();
  }

  private saveProductData(productObject: Product) {
    this.db.list(this.basePath).push(productObject);
  }
  
  getProductUploads(numberItems: number): AngularFireList<Product> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }
  
  deleteProduct(productObject: Product) {
    this.deleteProductDatabase(productObject.key)
      .then(() => {
        this.deleteProductStorage(productObject.name);
      })
      .catch((error: any) => console.log(error));
  }
  
  private deleteProductDatabase(key: string) {
    return this.db.list(this.basePath).remove(key);
  }
  
  private deleteProductStorage(name: string) {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
