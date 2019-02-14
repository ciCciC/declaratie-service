import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  price: number;
  commentaar: string;
  status: boolean;
}

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

@Component ({
  selector: 'app-declaration-table',
  templateUrl: './declaration-table.component.html',
  styleUrls: ['./declaration-table.component.css']
})
export class DeclarationTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor() { }
  initFakeData() {
    for (let i = 0; i < 10; i++) {
      ELEMENT_DATA[i].name = 'PewDiePie';
      ELEMENT_DATA[i].commentaar = 'Subscribe to PewDiePie !!';
    }
  }

  ngOnInit() {
    this.initFakeData();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
