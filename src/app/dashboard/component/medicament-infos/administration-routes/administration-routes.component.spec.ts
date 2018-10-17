import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationRoutesComponent } from './administration-routes.component';

describe('AdministrationRoutesComponent', () => {
  let component: AdministrationRoutesComponent;
  let fixture: ComponentFixture<AdministrationRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
