import { CanDeactivateFn } from '@angular/router';
import { CategoryUpdateComponent } from '../features/categories/components/category-update/category-update.component';
import Swal from 'sweetalert2';
import { ProductUpdateComponent } from '../features/products/components/product-update/product-update.component';

export const canDeactivateForm: CanDeactivateFn<any> = async (
  component: CategoryUpdateComponent | ProductUpdateComponent,
) => {
  if (component.isFormDirty()) {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You have unsaved changes! Do you really want to leave?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, leave',
      cancelButtonText: 'No, stay'
    });

    return result.isConfirmed;
  }
  return true;
};
