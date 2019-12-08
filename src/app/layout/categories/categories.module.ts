import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { CategoryDetailsComponent } from './components/category-details/category-details.component';
import { CategoriesComponent } from './categories.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

const routes: Routes = [
  {
  path: '',
  component: CategoriesComponent,
  pathMatch: 'full'
  },
  { 
    path: 'create', 
    component: CategoryFormComponent 
  },
]

@NgModule({
  declarations: [ CategoryFormComponent, CategoriesComponent, CategoryDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
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
export class CategoriesModule { }
