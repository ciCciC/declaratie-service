import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe(NotificationService.name, () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
      BrowserAnimationsModule,
    ],
  }));

  it('should be created', () => {
    const service: NotificationService = TestBed.get(NotificationService);
    expect(service).toBeTruthy();
  });
});
