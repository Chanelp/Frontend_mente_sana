import { TestBed } from '@angular/core/testing';

import { UserSettingsService } from '../service-user-settings/user-settings.service';

describe('UserSettingsService', () => {
  let service: UserSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
