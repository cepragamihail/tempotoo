import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { map } from 'rxjs/operators';
import { Category } from './entities/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    // Use snapshotChanges().pipe(map()) to store the key
    this.categoryService.getCategoryUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(categoriesResult => {
      console.log(categoriesResult);
      this.categories = categoriesResult;
    });

    console.log(this.categories);
  }

}
