import {Component, Inject, OnInit} from '@angular/core';

import {CdkDragDrop, moveItemInArray, CdkDragMove} from '@angular/cdk/drag-drop';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {IDeclaration} from '../../models/imodels/IDeclaration';
// import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

@Component({
  selector: 'app-declaration-expansion-list',
  templateUrl: './declaration-expansion-list.component.html',
  styleUrls: ['./declaration-expansion-list.component.css']
})
export class DeclarationExpansionListComponent implements OnInit {

  panelOpenState = false;
  declarations = Array<IDeclaration>();

  constructor(private declarationService: DeclarationService) {
  }

  private getDeclarationsList() {
    this.declarationService.getAll().subscribe(data => {
      this.declarations = data;
      alert(this.declarations.length);
    }, error => console.log(error));
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex);
    this.declarations.splice(event.previousIndex, 1);
  }

  ngOnInit() {
    this.getDeclarationsList();
  }

}
