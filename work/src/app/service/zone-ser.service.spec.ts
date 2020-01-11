import { TestBed } from '@angular/core/testing';

import { ZoneSerService } from './zone-ser.service';

describe('ZoneSerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZoneSerService = TestBed.get(ZoneSerService);
    expect(service).toBeTruthy();
  });
});
