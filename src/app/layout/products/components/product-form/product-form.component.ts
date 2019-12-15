import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../entities/product';
import { Location } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public productFormGroup: FormGroup;

  public selectedFiles: FileList;
  public currentProduct: Product;
  public percentage: number;

  categoryList: string[] = ['Animale', 'Inscriptii', 'Pasari/Aripi', 'Altele'];


  constructor(
    private location: Location, 
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      file: new FormControl(null, [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl('', [Validators.maxLength(250)]),
      code: new FormControl(''),
      note: new FormControl(''),
      categories: new FormControl(''),
      tags: new FormControl(''),
      insertDate: new FormControl(new Date())
    });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  public createProduct = (productFormValue) => {
    if (this.productFormGroup.valid) {
      this.executeAddProduct(productFormValue);
    }
  }
  
  public executeAddProduct = (productFormValue) => {

    this.currentProduct = new Product( this.selectedFiles.item(0));
    this.currentProduct.title = productFormValue.title;
    this.currentProduct.code = productFormValue.code;
    this.currentProduct.insertDate = new Date();
    this.currentProduct.description = productFormValue.description;
    this.currentProduct.categories = productFormValue.categories;
    this.currentProduct.tags = productFormValue.tags.split(',');
    this.productService.pushProductToStorage(this.currentProduct).subscribe(
      (percentage: number) => {
        this.percentage = Math.round(percentage);
      },
      (error: any) => {
        console.log(error);
      },
      () => {
        this.productFormGroup.reset();
        //this.clearFormAndGoBack();
      } 
    )
  }
 
  public onCancel = () => {
    this.clearFormAndGoBack();
  }

  private clearFormAndGoBack() {
    this.productFormGroup.reset();
    this.location.back();
  }

}
