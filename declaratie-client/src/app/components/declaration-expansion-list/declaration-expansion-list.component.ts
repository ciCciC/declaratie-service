import {Component, Inject, OnInit} from '@angular/core';
import {PeriodicElement} from '../declaration-table/declaration-table.component';

import {CdkDragDrop, moveItemInArray, CdkDragMove} from '@angular/cdk/drag-drop';
// import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', price: 1.0079, commentaar: 'H', status: true},
  {position: 2, name: 'Helium', price: 4.0026, commentaar: 'He', status: true},
  {position: 3, name: 'Lithium', price: 6.941, commentaar: 'Li', status: false},
  {position: 4, name: 'Beryllium', price: 9.0122, commentaar: 'Be', status: true},
  {position: 5, name: 'Boron', price: 10.811, commentaar: 'B', status: true},
  {position: 6, name: 'Carbon', price: 12.0107, commentaar: 'C', status: false},
  {position: 7, name: 'Nitrogen', price: 14.0067, commentaar: 'N', status: true},
  {position: 8, name: 'Oxygen', price: 15.9994, commentaar: 'O', status: false},
  {position: 9, name: 'Fluorine', price: 18.9984, commentaar: 'F', status: true},
  {position: 10, name: 'Neon', price: 20.1797, commentaar: 'Ne', status: false},
];

@Component({
  selector: 'app-declaration-expansion-list',
  templateUrl: './declaration-expansion-list.component.html',
  styleUrls: ['./declaration-expansion-list.component.css']
})
export class DeclarationExpansionListComponent implements OnInit {

  panelOpenState = false;
  datasource = ELEMENT_DATA;

  constructor() {
  }

  initFakeData() {
    for (let i = 0; i < 10; i++) {
      ELEMENT_DATA[i].name = 'PewDiePie ' + i;
      ELEMENT_DATA[i].commentaar = 'Subscribe to PewDiePie !!';
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex);
    ELEMENT_DATA.splice(event.previousIndex, 1);
  }

  ngOnInit() {
    this.initFakeData();
  }

}
