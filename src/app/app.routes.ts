import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: {
      title: "GEM"
    }
  },
  {
    path: 'productsingle/:id',
    component: ProductsingleComponent,
    data: {
      title: "GEM"
    }
  }
];
