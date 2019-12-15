import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../../entities/product';
import { ProductService } from '../../services/product.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Product>();
  displayedColumns: string[] = ['code', 'name', 'title', 'insertDate', 'description', 'categories', 'tags', 'delete'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductUploads(6).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(productsResult => {
      this.dataSource.data = productsResult;
    });
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }

  

}
