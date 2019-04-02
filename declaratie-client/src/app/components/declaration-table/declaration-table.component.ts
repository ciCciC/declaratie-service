import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IDeclaration} from '../../models/imodels/IDeclaration';
import {DeclarationService} from '../../services/declaration/declaration.service';
import {Declaration} from '../../models/Declaration';
import {Observable, Subject} from 'rxjs';
import {DeclarationViewComponent} from '../declaration-view/declaration-view.component';
import {ErrorHandlerService} from '../../services/errorhandlerservice/error-handler.service';
import {StatusEnum} from '../../models/StatusEnum';
import {MessageDialogComponent} from '../../dialogs/message-dialog/message-dialog.component';
import {IMessageDialog} from '../../models/imodels/IMessageDialog';
import {Router} from '@angular/router';

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
  InProgress = StatusEnum.INPROGRESS;
  actionValue = 'action';
  colNames: string[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private declarationService: DeclarationService, private errorService: ErrorHandlerService,
              private dialog: MatDialog, private router: Router) { }

  getDeclarationsList() {

    this.declarationService.getDeclarations().subscribe(data => {
      this.dataSource.data = data;
    }, (error) => {
      this.errorService.handleError(error);
    });
  }

  initTableColumnNames() {
    this.colNames = ['beschrijving', 'bedrag', 'datum', 'status'];
    this.displayedColumns = Declaration.getPropertyNamesForTableComponent();
    this.displayedColumns.push('action');
  }

  createClick() {
    // this.router.navigateByUrl('/declarationcreate');
    this.router.navigate(['/declarationcreate']);
  }

  toDelete(declaration: Declaration) {

    if (declaration.status === StatusEnum.INPROGRESS) {
      this.errorService.unableToDelete();
    } else {

      const toDelete: IMessageDialog = {
        name: 'Bericht',
        message: 'Declaratie verwijderen?'
      };

      const dialogRef = this.dialog.open(MessageDialogComponent, {data: toDelete});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // this.declarationListFilter(declaration);
          this.deleteDeclaration(declaration);
        }
      });
    }
  }

  openDialog(selected: Declaration) {
    const dialogRef = this.dialog.open(DeclarationViewComponent, {data: selected});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.declarationListFilter(selected);
        // this.deleteDeclaration(selected);
      }
    });
  }

  private deleteDeclaration(declaration: Declaration) {
    this.declarationService.deleteDeclaration(declaration.id).subscribe(data => {
      alert(JSON.stringify(data));
      this.declarationListFilter(declaration);
      // this.getDeclarationsList();
    }, (error) => {
      alert(JSON.stringify(error));
      this.errorService.handleError(error);
    });
  }

  private declarationListFilter(declaration: Declaration) {
    this.dataSource.data = this.dataSource.data.filter(u => u !== declaration);
  }

  ngOnInit() {
    // this.paginator._intl.itemsPerPageLabel = 'Items per pagina:';
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.initTableColumnNames();
    this.getDeclarationsList();
  }

  ngOnDestroy(): void {
  }

}
