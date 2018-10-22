import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinalProductsComponent } from './medicinal-products.component';

describe('MedicinalProductsComponent', () => {
  let component: MedicinalProductsComponent;
  let fixture: ComponentFixture<MedicinalProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinalProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
