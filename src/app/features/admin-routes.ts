import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { CategoryUpdateComponent } from './categories/components/category-update/category-update.component';
import { CategoryListGroupComponent } from './categories/components/category-list-group/category-list-group.component';

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
          },
          {
            path:'',
            component:CategoryListGroupComponent
          }
        ],
      },
    ],
  },
];
