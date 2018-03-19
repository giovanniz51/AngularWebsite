import { TestBed, inject } from '@angular/core/testing';

import { ForestsService } from './forests.service';

describe('ForestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForestsService]
    });
  });

  it('should be created', inject([ForestsService], (service: ForestsService) => {
    expect(service).toBeTruthy();
  }));
});
