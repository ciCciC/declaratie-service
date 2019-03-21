import {Component, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Declaration} from '../../models/Declaration';
import {Observable, of, Subject, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Component ({
  selector: 'app-declaration-table',
  templateUrl: './declaration-table.component.html',
  styleUrls: ['./declaration-table.component.css']
})
export class DeclarationTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IDeclaration>();
  data$: Observable<IDeclaration[]>;
  loadingError = new Subject<boolean>();
  pageSizeOptions = [5, 10, 15];

  public dialogConfig;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private declarationService: DeclarationService, private dialog: MatDialog) { }

  getDeclarationsList() {
    // this.declarationService.getAll().subscribe(data => {
    //   this.dataSource.data = data;
    //   this.displayedColumns = Declaration.getPropertyNamesForTableComponent();
    // }, error => console.log(error));

    this.declarationService.getAll().subscribe(data => {
      this.dataSource.data = data;
    }, (error) => {
      const aa = error as HttpErrorResponse;
      console.log('Lolzzz: ' + aa.name);
      console.log('Lolzzz: ' + aa.ok);
      console.log('Lolzzz: ' + aa.message);
      console.log('Lolzzz: ' + aa.error.message);
    });
  }

  initTableColumnNames() {
    this.displayedColumns = Declaration.getPropertyNamesForTableComponent();
  }

  ngOnInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.initTableColumnNames();
    this.getDeclarationsList();
  }

  ngOnDestroy(): void {
  }

}
