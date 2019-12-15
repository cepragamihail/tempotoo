import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../entities/category';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  public categoryFormGroup: FormGroup;

  public selectedFiles: FileList;
  public currentCategory: Category;
  public percentage: number;

  constructor(
    private location: Location, 
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.categoryFormGroup = this.formBuilder.group({
      file: new FormControl(null, [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl('', [Validators.maxLength(250)]),
      size: new FormControl(''),
      insertDate: new FormControl(new Date())
    });
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  public createCategpry = (categoryFormValue) => {
    if (this.categoryFormGroup.valid) {
      this.executeCategoryCreation(categoryFormValue);
    }
  }
  
  public executeCategoryCreation = (categoryFormValue) => {

    this.currentCategory =  new Category(this.selectedFiles.item(0));
    this.currentCategory.title = categoryFormValue.title;
    this.currentCategory.size = categoryFormValue.size;
    this.currentCategory.description = categoryFormValue.description;
    console.log(this.currentCategory);
    this.categoryService.pushCategoryToStorage(this.currentCategory).subscribe(
      (percentage: number) => {
        this.percentage = Math.round(percentage);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

 
  public onCancel = () => {
    this.location.back();
  }

}
