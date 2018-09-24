import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplCreatorComponent } from './spl-creator.component';

describe('SplCreatorComponent', () => {
  let component: SplCreatorComponent;
  let fixture: ComponentFixture<SplCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
