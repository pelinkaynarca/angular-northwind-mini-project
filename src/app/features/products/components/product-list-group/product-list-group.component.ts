import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductListItem } from '../../models/product-list-item';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { LoadingService } from '../../../../shared/loading/services/loading.service';

@Component({
  selector: 'app-product-list-group',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './product-list-group.component.html',
  styleUrl: './product-list-group.component.css',
})
export class ProductListGroupComponent implements OnInit {

  productList: ProductListItem[] = [];

  constructor(private productsService: ProductsService, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.loadingService.show();
    this.productsService.getAll().subscribe((productList)=>{
      setTimeout(() => { 
      this.productList=productList;
      this.loadingService.hide(); 
    }, 1000);
    })
  }

  deleteProduct(id:number){
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
        this.productsService.delete(id).subscribe(()=>{
          this.getProductList();
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
