import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryListItem } from '../../models/category-list-item';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UpdateCategory } from '../../models/update-category';
import Swal from 'sweetalert2';
import { FormControlErrorMessagePipe } from '../../../../shared/pipes/form-control-error-message.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-update',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormControlErrorMessagePipe,
  ],
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css'],
})
export class CategoryUpdateComponent implements OnInit {
  category!: CategoryListItem;
  updateForm: FormGroup;
  categoryId: number = this.route.snapshot.params['id'];

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
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
    });
  }

  ngOnInit(): void {
    this.getCategoryById();
  }

  getCategoryById() {
    const params = this.route.snapshot.params;
    this.categoriesService.getById(params['id']).subscribe((category) => {
      this.category = category;
      this.updateForm.patchValue({
        name: category.name,
        description: category.description,
      });
    });
  }

  onSubmit() {
    if (!this.updateForm.valid) return;
    const formData = this.updateForm.value;
    const category: UpdateCategory = {
      id: this.categoryId,
      name: formData.name,
      description: formData.description,
    };

    this.categoriesService.update(category).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Successful',
          text: 'Category updated successfully!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          this.router.navigate(['/admin', 'categories']);
        });
      },
    });
  }
}
