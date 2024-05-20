import { Component, OnInit } from '@angular/core';
import { CategoryListItem } from '../../categories/models/category-list-item';
import { ProductListItem } from '../../products/models/product-list-item';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../products/services/products.service';
import { CategoriesService } from '../../categories/services/categories.service';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{
  categoryList: CategoryListItem[] = [];
  productList: ProductListItem[] = [];

  constructor(private productsService:ProductsService, private categoriesService:CategoriesService){

  }
ngOnInit(): void {
  this.getCategories();
  this.getProducts();
}
getProducts(){
  this.productsService.getAll().subscribe((productList)=>{
    this.productList=productList;
  })
}
getCategories(){
    this.categoriesService.getAll().subscribe((categoryList)=>{
      this.categoryList=categoryList;
    })
}
}
