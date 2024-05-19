import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { CategoryListItem } from '../models/category-list-item';
import { UpdateCategory } from '../models/update-category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  getById(id: number): Observable<CategoryListItem> {
    return this.http.get<CategoryListItem>(this.apiControllerUrl + '/' + id);
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(this.apiControllerUrl + '/' + id);
  }

  update(category: UpdateCategory): Observable<UpdateCategory> {
    return this.http.put<UpdateCategory>(
      this.apiControllerUrl + '/' + category.id,
      category
    );
  }
}
