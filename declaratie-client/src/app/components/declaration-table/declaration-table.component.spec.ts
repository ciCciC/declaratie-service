import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationTableComponent } from './declaration-table.component';

describe('DeclarationTableComponent', () => {
  let component: DeclarationTableComponent;
  let fixture: ComponentFixture<DeclarationTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
