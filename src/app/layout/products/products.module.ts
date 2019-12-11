import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { ProductsComponent } from './products.component';
import { BuyProductComponent } from './components/buy-product/buy-product.component';

const routes: Routes = [
  {
  path: '',
  component: ProductsComponent,
  pathMatch: 'full'
  },
  {
    path: 'by-product',
    component: BuyProductComponent,
    }
]

@NgModule({
  declarations: [ProductsComponent, BuyProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MaterialFileInputModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatProgressBarModule
  ]
})
export class ProductsModule { }
