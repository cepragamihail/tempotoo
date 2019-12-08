import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Category } from '../entities/category';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private basePath = '/categorues';
 
constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
 
pushCategoryToStorage(categoryObject: Category): Observable<number> {
  const filePath = `${this.basePath}/${categoryObject.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, categoryObject.file);
 
  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        categoryObject.url = downloadURL;
        categoryObject.name = categoryObject.file.name;
        this.saveCategoryData(categoryObject);
      });
    })
  ).subscribe();
 
  return uploadTask.percentageChanges();
}
 
private saveCategoryData(categoryObject: Category) {
  this.db.list(this.basePath).push(categoryObject);
}

getCategoryUploads(numberItems: number): AngularFireList<Category> {
  return this.db.list(this.basePath, ref =>
    ref.limitToLast(numberItems));
}

deleteCategory(categoryObject: Category) {
  this.deleteCategoryDatabase(categoryObject.key)
    .then(() => {
      this.deleteCategoryStorage(categoryObject.name);
    })
    .catch((error: any) => console.log(error));
}

private deleteCategoryDatabase(key: string) {
  return this.db.list(this.basePath).remove(key);
}

private deleteCategoryStorage(name: string) {
  const storageRef = this.storage.ref(this.basePath);
  storageRef.child(name).delete();
}
}
