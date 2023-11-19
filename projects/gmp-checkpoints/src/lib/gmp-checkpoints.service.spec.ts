import { TestBed } from '@angular/core/testing';

import { GmpCheckpointsService } from './gmp-checkpoints.service';

describe('GmpCheckpointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpCheckpointsService = TestBed.get(GmpCheckpointsService);
    expect(service).toBeTruthy();
  });
});
