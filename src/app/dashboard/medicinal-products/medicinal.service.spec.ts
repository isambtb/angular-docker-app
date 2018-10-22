import { TestBed, inject } from '@angular/core/testing';

import { MedicinalService } from './medicinal.service';

describe('MedicinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicinalService]
    });
  });

  it('should be created', inject([MedicinalService], (service: MedicinalService) => {
    expect(service).toBeTruthy();
  }));
});
