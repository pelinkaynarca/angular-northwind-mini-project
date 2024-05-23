import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListItem } from '../../models/product-list-item';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UpdateProduct } from '../../models/update-product';
import Swal from 'sweetalert2';
import { CategoriesService } from '../../../categories/services/categories.service';
import { CategoryListItem } from '../../../categories/models/category-list-item';
import { CommonModule } from '@angular/common';
import { FormControlErrorMessagePipe } from '../../../../shared/pipes/form-control-error-message.pipe';

@Component({
    selector: 'app-product-update',
    standalone: true,
    templateUrl: './product-update.component.html',
    styleUrls: ['./product-update.component.css'],
    imports: [FormsModule, ReactiveFormsModule, CommonModule, FormControlErrorMessagePipe]
})
export class ProductUpdateComponent implements OnInit {
  product!: ProductListItem;
  categoryList: CategoryListItem[]=[];
  updateForm: FormGroup;
  productId: number = this.route.snapshot.params['id'];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.updateForm = this.fb.group({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      categoryId: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      unitPrice: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      unitsInStock: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      imageUrl: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.getProductById();
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoriesService.getAll().subscribe((categoryList)=>{
      this.categoryList=categoryList;
    })
  }

  getProductById() {
    const params = this.route.snapshot.params;
    this.productsService.getById(params['id']).subscribe((product) => {
      this.product = product;
      this.updateForm.patchValue({
        name: product.name,
        categoryId: product.categoryId,
        unitPrice: product.unitPrice,
        unitsInStock: product.unitsInStock,
        imageUrl: product.imageUrl,
        description: product.description
      });
    });
  }

  onSubmit() {
    if (!this.updateForm.valid)
      return;
      const formData = this.updateForm.value;
      const product: UpdateProduct = {
        id: this.productId,
        name: formData.name,
        categoryId: formData.categoryId,
        unitPrice: formData.unitPrice,
        unitsInStock: formData.unitsInStock,
        imageUrl: formData.imageUrl,
      description: formData.description
      };

      this.productsService.update(product).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Successful',
            text: 'Product updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            this.router.navigate(['/admin', 'products']);
          });
        },
      });
  }
}
