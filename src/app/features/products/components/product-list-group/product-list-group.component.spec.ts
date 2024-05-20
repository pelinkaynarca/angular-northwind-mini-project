import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListGroupComponent } from './product-list-group.component';

describe('ProductListGroupComponent', () => {
  let component: ProductListGroupComponent;
  let fixture: ComponentFixture<ProductListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
