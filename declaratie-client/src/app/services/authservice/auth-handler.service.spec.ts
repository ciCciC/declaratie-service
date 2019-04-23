import { TestBed } from '@angular/core/testing';

import { AuthHandlerService } from './auth-handler.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('AuthHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      BrowserAnimationsModule,
    ],
    declarations: [],
    providers: []
  }));

  it('should be created', () => {
    const service: AuthHandlerService = TestBed.get(AuthHandlerService);
    expect(service).toBeTruthy();
  });
});
