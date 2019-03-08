import {async, TestBed} from '@angular/core/testing';

import { DeclarationService } from './declaration.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DeclarationService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      declarations: [],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeclarationService = TestBed.get(DeclarationService);
    expect(service).toBeTruthy();
  });
});
