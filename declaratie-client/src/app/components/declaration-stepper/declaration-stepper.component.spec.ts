import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationStepperComponent } from './declaration-stepper.component';

describe('DeclarationStepperComponent', () => {
  let component: DeclarationStepperComponent;
  let fixture: ComponentFixture<DeclarationStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
