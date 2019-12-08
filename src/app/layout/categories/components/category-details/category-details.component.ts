import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../entities/category';
import { CategoryService } from '../../services/category.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  @Input() categories: Category[];
  public dataSource = new MatTableDataSource<Category>();
  displayedColumns: string[] = ['title', 'name', 'insertDate', 'description', 'delete'];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.dataSource.data = this.categories;
  }

  deleteCategory(category: Category) {
    this.categoryService.deleteCategory(category);
  }

}
