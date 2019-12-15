import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/layout/products/services/product.service';
import { Product } from 'src/app/layout/products/entities/product';

@Component({
  selector: 'app-popular-products-cards',
  templateUrl: './popular-products-cards.component.html',
  styleUrls: ['./popular-products-cards.component.scss']
})
export class PopularProductsCardsComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    // this.productService.getProductUploads(6).snapshotChanges().pipe(
    //     map(changes =>
    //       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    //     )
    //   ).subscribe(productsResult => {
    //     this.products = productsResult;
    //   });
  }

  onCardClick($event) {
    console.log($event);
   }

}