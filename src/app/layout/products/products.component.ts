import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './entities/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProductUploads(6).snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(productsResult => {
        this.products = productsResult;
      });
  }

  onCardClick($event) {
    console.log($event);
   }


}
