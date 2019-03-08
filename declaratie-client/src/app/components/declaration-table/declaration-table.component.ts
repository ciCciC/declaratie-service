import {Component, OnDestroy, OnInit} from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Observable, Subscriber, Subscription} from 'rxjs';
import {StatusEnum} from '../../models/StatusEnum';
import {Declaration} from '../../models/Declaration';
import {log} from 'util';

@Component ({
  selector: 'app-declaration-table',
  templateUrl: './declaration-table.component.html',
  styleUrls: ['./declaration-table.component.css']
})
export class DeclarationTableComponent implements OnInit, OnDestroy {

  // displayedColumns: string[] = ['id', 'description', 'date', 'amount', 'status', 'files', 'man_comment', 'emp_comment', 'emp_id'];
  displayedColumns: string[] = ['id', 'description', 'amount', 'date', 'emp_comment', 'status'];
  dataSource: Observable<IDeclaration[]>;
  // dataSource: MatTableDataSource<Declaration>;
  // selection: SelectionModel<IDeclaration>;

  // panelOpenState = false;

  constructor(private declarationService: DeclarationService) { }

  getDeclarationsList() {
    // this.declarationService.getAll().subscribe(data => {
    //   this.dataSource = data;
    // }, error => console.log(error));
    this.dataSource = this.declarationService.getAll();
  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<Declaration>();
    this.getDeclarationsList();

    // this.selection = new SelectionModel<IDeclaration>(true, []);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  ngOnDestroy(): void {
  }

}
