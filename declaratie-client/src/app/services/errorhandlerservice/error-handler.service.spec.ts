import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';

describe(ErrorHandlerService.name, () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
      BrowserAnimationsModule,
    ],
    declarations: [],
    providers: []
  }));

  it('should be created', () => {
    const service: ErrorHandlerService = TestBed.get(ErrorHandlerService);
    expect(service).toBeTruthy();
  });
});
