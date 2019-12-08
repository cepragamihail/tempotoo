import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  title = 'Category';
  description = 'Upload Category details and image to Firebase';

  constructor() { }

  ngOnInit() {
  }

}
