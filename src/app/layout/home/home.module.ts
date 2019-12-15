import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { HomeComponent } from './home.component';
import { CategoryCardsComponent } from './components/category-cards/category-cards.component';
import { MatRippleModule } from '@angular/material';
import { PopularProductsCardsComponent } from './components/popular-products-cards/popular-products-cards.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  }
]

@NgModule({
  declarations: [HomeComponent, CategoryCardsComponent, PopularProductsCardsComponent, ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatRippleModule,
    FormsModule
  ]
})
export class HomeModule { }
