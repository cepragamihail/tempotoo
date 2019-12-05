import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
 
pushFileToStorage(categoryObject: Category): Observable<number> {
  const filePath = `${this.basePath}/${categoryObject.file.name}`;
  const storageRef = this.storage.ref(filePath);
  const uploadTask = this.storage.upload(filePath, categoryObject.file);
 
  uploadTask.snapshotChanges().pipe(
    finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        console.log('File available at', downloadURL);
        categoryObject.url = downloadURL;
        categoryObject.name = categoryObject.file.name;
        this.saveFileData(categoryObject);
      });
    })
  ).subscribe();
 
  return uploadTask.percentageChanges();
}
 
private saveFileData(categoryObject: Category) {
  this.db.list(this.basePath).push(categoryObject);
}
}
