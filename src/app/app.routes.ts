import { Routes } from '@angular/router';
import { BasicLayoutComponent } from './shared/components/basic-layout/basic-layout.component';
import { AdminLayoutComponent } from './features/components/admin-layout/admin-layout.component';
import { adminRoutes } from './features/admin-routes';

export const routes: Routes = [
  {
    path:'',
    component:BasicLayoutComponent
  },
  ...adminRoutes
];
