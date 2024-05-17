import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListGroupComponent } from './category-list-group.component';

describe('CategoryListGroupComponent', () => {
  let component: CategoryListGroupComponent;
  let fixture: ComponentFixture<CategoryListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryListGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
