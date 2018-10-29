import { TestBed, inject } from '@angular/core/testing';

import { MedicinalProductService } from './medicinal-product.service';

describe('MedicinalProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicinalProductService]
    });
  });

  it('should be created', inject([MedicinalProductService], (service: MedicinalProductService) => {
    expect(service).toBeTruthy();
  }));
});
