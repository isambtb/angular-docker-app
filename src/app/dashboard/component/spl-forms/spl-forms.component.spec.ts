import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplFormsComponent } from './spl-forms.component';

describe('SplFormsComponent', () => {
  let component: SplFormsComponent;
  let fixture: ComponentFixture<SplFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
