import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Declaration} from '../../models/Declaration';

@Component ({
  selector: 'app-declaration-table',
  templateUrl: './declaration-table.component.html',
  styleUrls: ['./declaration-table.component.css']
})
export class DeclarationTableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<IDeclaration>();
  pageSizeOptions = [5, 10, 15];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private declarationService: DeclarationService) { }

  getDeclarationsList() {
    this.declarationService.getAll().subscribe(data => {
      this.dataSource.data = data;
      this.displayedColumns = Declaration.getPropertyNamesForTableComponent();
    }, error => console.log(error));
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getDeclarationsList();
  }

  ngOnDestroy(): void {
  }

}
