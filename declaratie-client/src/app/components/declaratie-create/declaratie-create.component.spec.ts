import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaratieCreateComponent } from './declaratie-create.component';

describe('DeclaratieCreateComponent', () => {
  let component: DeclaratieCreateComponent;
  let fixture: ComponentFixture<DeclaratieCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaratieCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaratieCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
