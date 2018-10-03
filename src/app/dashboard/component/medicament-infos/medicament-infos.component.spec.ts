import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentInfosComponent } from './medicament-infos.component';

describe('MedicamentInfosComponent', () => {
  let component: MedicamentInfosComponent;
  let fixture: ComponentFixture<MedicamentInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
