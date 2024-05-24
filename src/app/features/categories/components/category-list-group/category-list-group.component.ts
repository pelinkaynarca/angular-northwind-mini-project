import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CategoryListItem } from '../../models/category-list-item';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from "../../../../shared/pipes/translate.pipe";
import { ButtonDirective } from '../../../../shared/directives/button.directive';

@Component({
    selector: 'app-category-list-group',
    standalone: true,
    templateUrl: './category-list-group.component.html',
    styleUrl: './category-list-group.component.css',
    imports: [CommonModule, RouterLink, TranslatePipe, ButtonDirective]
})
export class CategoryListGroupComponent implements OnInit {

  categoryList: CategoryListItem[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoriesService.getAll().subscribe((categoryList)=>{
      this.categoryList=categoryList;
    })
  }

  deleteCategory(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriesService.delete(id).subscribe(()=>{
          this.getCategoryList();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        });
      }
    });
  }
}
