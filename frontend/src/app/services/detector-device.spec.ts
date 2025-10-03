import { TestBed } from '@angular/core/testing';

import { DetectorDevice } from './detector-device';

describe('DetectorDevice', () => {
  let service: DetectorDevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectorDevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
