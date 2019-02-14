import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationExpansionListComponent } from './declaration-expansion-list.component';

describe('DeclarationExpansionListComponent', () => {
  let component: DeclarationExpansionListComponent;
  let fixture: ComponentFixture<DeclarationExpansionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationExpansionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationExpansionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
