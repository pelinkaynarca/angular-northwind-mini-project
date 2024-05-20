import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ProductListItem } from '../models/product-list-item';
import { UpdateProduct } from '../models/update-product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiControllerUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(this.apiControllerUrl);
  }

  getById(id: number): Observable<ProductListItem> {
    return this.http.get<ProductListItem>(this.apiControllerUrl + '/' + id);
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(this.apiControllerUrl + '/' + id);
  }

  update(product: UpdateProduct): Observable<UpdateProduct> {
    return this.http.put<UpdateProduct>(
      this.apiControllerUrl + '/' + product.id,
      product
    );
  }
}
