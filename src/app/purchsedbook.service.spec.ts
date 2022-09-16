import { TestBed } from '@angular/core/testing';

import { PurchsedbookService } from './purchsedbook.service';

describe('PurchsedbookService', () => {
  let service: PurchsedbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchsedbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
