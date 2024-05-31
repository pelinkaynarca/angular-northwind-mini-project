import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CategoryUpdateComponent } from './categories/components/category-update/category-update.component';
import { CategoryListGroupComponent } from './categories/components/category-list-group/category-list-group.component';
import { ProductUpdateComponent } from './products/components/product-update/product-update.component';
import { ProductListGroupComponent } from './products/components/product-list-group/product-list-group.component';
import { canDeactivateForm } from '../guards/can-deactivate.guard';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminHomeComponent },
      {
        path: 'categories',
        children: [
          {
            path: 'update/:id',
            component: CategoryUpdateComponent,
            canDeactivate:[canDeactivateForm]
          },
          {
            path:'',
            component:CategoryListGroupComponent
          }
        ],
      },
      {
        path: 'products',
        children: [
          {
            path: 'update/:id',
            component: ProductUpdateComponent,
            canDeactivate:[canDeactivateForm]
          },
          {
            path:'',
            component:ProductListGroupComponent
          }
        ],
      },
    ],
  },
];
